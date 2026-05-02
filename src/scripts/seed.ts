import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../payload.config'
import { PROJECTS } from '../content/projects'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const metadataLookup: Record<string, { tag: string; role: string }> = {
  'BarriereHilfe': { tag: 'Accessibility · Germany', role: 'Full-Stack Architect' },
  'Kodschul': { tag: 'EdTech · Legacy', role: 'Performance' },
  'ThriftPlug': { tag: 'Marketplace · Fashion', role: 'Founder engineer' },
  'Nextise': { tag: 'SaaS · Ecosystem', role: 'Lead Architect' },
  'LinkReach': { tag: 'SaaS · Automation', role: 'Infrastructure' },
  'Autoreach': { tag: 'SaaS · Automation', role: 'Infrastructure' },
  'Automatish AI': { tag: 'AI · Automation', role: 'Full-stack + Infra' },
  'TargetDesk': { tag: 'SaaS · CRM', role: 'Design + Build' },
  'Canal+ Wholesale': { tag: 'Enterprise · Telecom', role: 'Digital Solutions' },
  'Nadscam (NGO)': { tag: 'Non-profit', role: 'Platform Lead' },
  'CSB-Amasia': { tag: 'Education', role: 'Platform Lead' },
  'Solumentics': { tag: 'Agency · Cameroon', role: 'Founder' },
}

async function seed() {
  console.log('Starting seed process...')
  
  const payload = await getPayload({
    config: configPromise,
  })

  console.log('Deleting existing projects...')
  const deleteResult = await payload.delete({
    collection: 'projects',
    where: {
      id: { exists: true },
    },
  })
  console.log(`Deleted ${deleteResult.errors.length === 0 ? 'all' : 'some'} existing projects.`)

  console.log(`Seeding ${PROJECTS.length} projects...`)

  let count = 0
  for (const project of PROJECTS) {
    const meta = metadataLookup[project.name] || { tag: 'Project', role: 'Lead Developer' }
    
    try {
      await payload.create({
        collection: 'projects',
        data: {
          slug: project.slug,
          n: project.n,
          year: project.year,
          tag: meta.tag,
          role: meta.role,
          stack: project.stack,
          href: project.href,
          featured: project.featured || false,
          order: count + 1,
          name: project.name,
          tagline: '',
          overview: '',
          challenges: [],
          approach: '',
          outcomes: [],
          gallery: [],
        },
        locale: 'en',
      })
      count++
      console.log(`Created project: ${project.name}`)
    } catch (error) {
      console.error(`Error creating project ${project.name}:`, error)
    }
  }

  console.log(`Seed completed. ${count} projects created.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed script failed:', err)
  process.exit(1)
})
