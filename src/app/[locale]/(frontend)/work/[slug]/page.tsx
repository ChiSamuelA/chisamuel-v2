import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Metadata } from 'next'
import ProjectHero from '@/components/work/ProjectHero'
import ProjectOverview from '@/components/work/ProjectOverview'
import ProjectChallenges from '@/components/work/ProjectChallenges'
import ProjectGallery from '@/components/work/ProjectGallery'
import ProjectApproach from '@/components/work/ProjectApproach'
import ProjectOutcomes from '@/components/work/ProjectOutcomes'
import ProjectPagination from '@/components/work/ProjectPagination'

interface ProjectPageProps {
  params: Promise<{
    slug: string
    locale: 'en' | 'fr'
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    depth: 0,
    limit: 100,
  })

  return projects.docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const payload = await getPayload({ config: configPromise })
  
  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: { equals: slug },
    },
    locale,
    limit: 1,
  })

  const project = result.docs[0]

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} | Chi Samuel`,
    description: project.tagline || project.overview?.substring(0, 160),
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: { equals: slug },
    },
    locale,
    limit: 1,
  })

  const project = result.docs[0]

  if (!project) {
    notFound()
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectChallenges project={project} />
      <ProjectGallery project={project} />
      <ProjectApproach project={project} />
      <ProjectOutcomes project={project} />
      <ProjectPagination currentOrder={project.order} locale={locale} />
    </main>
  )
}
