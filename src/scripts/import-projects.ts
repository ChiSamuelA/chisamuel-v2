import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper to upload or reuse an image in the Payload 'media' collection
async function getOrCreateMedia(filename: string, altText: string, payload: any): Promise<string | null> {
  const filePath = path.join(process.cwd(), 'public/projects', filename)

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Warning: Image file not found at ${filePath}. Skipping upload.`)
    return null
  }

  try {
    // 1. Check if the media file is already uploaded
    const existingMedia = await payload.find({
      collection: 'media',
      where: {
        filename: { equals: filename },
      },
      depth: 0,
      limit: 1,
    })

    if (existingMedia.docs && existingMedia.docs.length > 0) {
      console.log(`   ↳ Reusing existing media: ${filename} (ID: ${existingMedia.docs[0].id})`)
      return existingMedia.docs[0].id
    }

    // 2. Upload a new media document
    console.log(`   ↳ Uploading new media: ${filename}...`)
    const fileBuffer = fs.readFileSync(filePath)
    const mimeType = filename.endsWith('.png') ? 'image/png' : filename.endsWith('.webp') ? 'image/webp' : 'image/jpeg'

    const newMedia = await payload.create({
      collection: 'media',
      data: {
        alt: altText,
      },
      file: {
        data: fileBuffer,
        name: filename,
        mimetype: mimeType,
        size: fileBuffer.length,
      },
    })

    console.log(`   ↳ Successfully uploaded: ${filename} (ID: ${newMedia.id})`)
    return newMedia.id
  } catch (error) {
    console.error(`❌ Error uploading media ${filename}:`, error)
    return null
  }
}

async function syncProjects() {
  console.log('🔌 Connecting to Payload CMS...')
  const payload = await getPayload({
    config: configPromise,
  })

  const projectsDir = path.join(process.cwd(), 'projects')

  if (!fs.existsSync(projectsDir)) {
    console.log('📁 Creating projects/ directory...')
    fs.mkdirSync(projectsDir)
  }

  // Read all JSON files in the projects directory
  const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith('.json'))

  if (files.length === 0) {
    console.log('ℹ️ No project JSON files found in projects/. Put your json files there to sync.')
    process.exit(0)
  }

  console.log(`📂 Found ${files.length} project JSON files. Starting synchronization...\n`)

  for (const file of files) {
    const filePath = path.join(projectsDir, file)
    console.log(`📄 Processing project: ${file}`)

    let projectData: any
    try {
      projectData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    } catch (err) {
      console.error(`❌ Error parsing JSON file ${file}:`, err)
      continue
    }

    const { slug, n, year, tag, role, stack, href, client, duration, status, featured, order } = projectData

    if (!slug) {
      console.error(`❌ Skip: File ${file} is missing the "slug" field.`)
      continue
    }

    // 1. Process Hero Image
    let heroImageId: string | null = null
    const heroFilename = `${slug}-hero.jpg` // standard name e.g. kodschul-hero.jpg
    console.log(`🔍 Checking Hero Image: ${heroFilename}`)
    heroImageId = await getOrCreateMedia(heroFilename, `${projectData.en?.name || slug} Hero Showcase`, payload)

    // 2. Process Gallery Images (English)
    console.log(`🔍 Processing English Gallery...`)
    const enGallery = []
    if (projectData.en?.gallery) {
      for (const item of projectData.en.gallery) {
        const imageId = await getOrCreateMedia(item.imageName, item.caption || `${slug} Gallery`, payload)
        if (imageId) {
          enGallery.push({
            image: imageId,
            caption: item.caption,
          })
        }
      }
    }

    // 3. Process Gallery Images (French)
    console.log(`🔍 Processing French Gallery...`)
    const frGallery = []
    if (projectData.fr?.gallery) {
      for (const item of projectData.fr.gallery) {
        const imageId = await getOrCreateMedia(item.imageName, item.caption || `${slug} Gallery`, payload)
        if (imageId) {
          frGallery.push({
            image: imageId,
            caption: item.caption,
          })
        }
      }
    }

    // Check if the project already exists in Payload
    const existingProjects = await payload.find({
      collection: 'projects',
      where: {
        slug: { equals: slug },
      },
      depth: 0,
      limit: 1,
    })

    const isExisting = existingProjects.docs && existingProjects.docs.length > 0
    let projectId: string

    const nonLocalizedData = {
      slug,
      n,
      year,
      tag,
      role,
      stack,
      href,
      client,
      duration,
      status,
      featured: featured || false,
      order: order || 0,
      ...(heroImageId ? { heroImage: heroImageId } : {}),
    }

    const enData = {
      name: projectData.en?.name || slug,
      tagline: projectData.en?.tagline || '',
      overview: projectData.en?.overview || '',
      challenges: projectData.en?.challenges || [],
      approach: projectData.en?.approach || '',
      outcomes: projectData.en?.outcomes || [],
      gallery: enGallery,
    }

    const frData = {
      name: projectData.fr?.name || slug,
      tagline: projectData.fr?.tagline || '',
      overview: projectData.fr?.overview || '',
      challenges: projectData.fr?.challenges || [],
      approach: projectData.fr?.approach || '',
      outcomes: projectData.fr?.outcomes || [],
      gallery: frGallery,
    }

    try {
      if (isExisting) {
        projectId = existingProjects.docs[0].id
        console.log(`🔄 Updating existing project in database...`)

        // Update English & non-localized base fields
        await payload.update({
          collection: 'projects',
          id: projectId,
          data: {
            ...nonLocalizedData,
            ...enData,
          },
          locale: 'en',
        })

        // Update French fields
        await payload.update({
          collection: 'projects',
          id: projectId,
          data: frData,
          locale: 'fr',
        })

        console.log(`✅ Success: Updated project "${slug}" in both English and French!`)
      } else {
        console.log(`✨ Creating new project in database...`)

        // Create with English & non-localized base fields
        const newProject = await payload.create({
          collection: 'projects',
          data: {
            ...nonLocalizedData,
            ...enData,
          },
          locale: 'en',
        })

        projectId = newProject.id

        // Update French fields
        await payload.update({
          collection: 'projects',
          id: projectId,
          data: frData,
          locale: 'fr',
        })

        console.log(`✅ Success: Created project "${slug}" in both English and French!`)
      }
    } catch (dbError) {
      console.error(`❌ Database Error processing project "${slug}":`, dbError)
    }
    console.log('--------------------------------------------------\n')
  }

  console.log('🎉 Project Synchronization Finished Successfully!')
  process.exit(0)
}

syncProjects().catch((err) => {
  console.error('❌ Ingestion Script Failed:', err)
  process.exit(1)
})
