import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import type { Project } from '@/payload-types'

interface ProjectPaginationProps {
  currentOrder: number | null | undefined
  locale: 'en' | 'fr'
}

export default async function ProjectPagination({ currentOrder, locale }: ProjectPaginationProps) {
  // If order is missing, we can't reliably find the "next" project by order
  if (currentOrder === null || currentOrder === undefined) return null

  const payload = await getPayload({ config: configPromise })

  // 1. Fetch total count for the label
  const totalResult = await payload.count({
    collection: 'projects',
  })
  const total = totalResult.totalDocs

  // 2. Try fetching the next project (order + 1)
  let nextResult = await payload.find({
    collection: 'projects',
    where: {
      order: { equals: currentOrder + 1 },
    },
    locale,
    limit: 1,
  })

  // 3. If none found at order + 1, fetch the project with the lowest order (wrap around)
  if (nextResult.docs.length === 0) {
    nextResult = await payload.find({
      collection: 'projects',
      sort: 'order',
      locale,
      limit: 1,
    })
  }

  const nextProject = nextResult.docs[0] as Project | undefined

  // Don't show if we are on the only project or none found
  if (!nextProject || nextProject.order === currentOrder) return null

  return (
    <Link 
      href={`/${locale}/work/${nextProject.slug}`}
      className="group block bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-24 transition-colors"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="font-mono text-[11px] text-muted uppercase tracking-[2px]">
          NEXT PROJECT
        </div>
        <div className="font-mono text-[12px] text-muted">
          {nextProject.n} / {total}
        </div>
      </div>

      <div className="font-serif text-paper leading-[0.95] tracking-[-0.03em]
        text-[48px] sm:text-[80px] lg:text-[132px]
        group-hover:text-copper-dim transition-colors duration-500"
      >
        {nextProject.name}
        <span className="text-copper italic ml-4">→</span>
      </div>

      {nextProject.tagline && (
        <p className="font-sans text-[15px] text-paper-dim max-w-[520px] mt-6 leading-relaxed">
          {nextProject.tagline}
        </p>
      )}
    </Link>
  )
}
