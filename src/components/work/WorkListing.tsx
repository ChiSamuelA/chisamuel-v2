import React from 'react'
import Link from 'next/link'
import type { Project } from '@/payload-types'

interface WorkListingProps {
  projects: Project[]
  locale: string
  messages: {
    title: string
    titleItalic: string
    counter: string
    cols: {
      number: string
      project: string
      tag: string
      role: string
      year: string
    }
  }
}

export default function WorkListing({ projects, locale, messages }: WorkListingProps) {
  
  // Helper to build local links
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  const gridClasses = "grid items-baseline px-2 sm:px-0 " + 
    "grid-cols-[1fr_80px] " + // Mobile
    "md:grid-cols-[60px_1fr_160px_80px] " + // Tablet
    "lg:grid-cols-[60px_1fr_200px_220px_100px]" // Desktop

  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-20 min-h-[70vh]">
      
      {/* Section Header Row */}
      <div className="flex flex-row justify-between items-baseline mb-14">
        <h1 className="font-serif text-[52px] md:text-[72px] lg:text-[96px] text-paper leading-none tracking-tight">
          {messages.title} <span className="italic font-normal text-copper">{messages.titleItalic}</span>
        </h1>
        <p className="font-mono text-[12px] text-muted hidden sm:block">
          {projects.length} PROJECTS — 2023—2026
        </p>
      </div>

      {/* Column Headers */}
      <div className={`${gridClasses} border-b border-[oklch(0.2_0.005_80)] pb-4 mb-0 font-mono text-[11px] text-muted uppercase tracking-[1px]`}>
        <div className="hidden md:block">{messages.cols.number}</div>
        <div>{messages.cols.project}</div>
        <div className="hidden md:block">{messages.cols.tag}</div>
        <div className="hidden lg:block">{messages.cols.role}</div>
        <div className="text-right">{messages.cols.year}</div>
      </div>

      {/* Project Rows */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={getHref(`/work/${project.slug}`)}
            className={`group ${gridClasses} py-[28px] border-b border-[oklch(0.2_0.005_80)] transition-colors duration-300 hover:bg-white/[0.02]`}
          >
            {/* Col 1: Number */}
            <div className="hidden md:block font-mono text-[11px] text-muted group-hover:text-paper transition-colors">
              {project.n}
            </div>

            {/* Col 2: Name */}
            <div className="font-serif text-[32px] md:text-[42px] text-paper tracking-[-0.02em] group-hover:text-copper transition-colors duration-300">
              {project.name}
            </div>

            {/* Col 3: Tag */}
            <div className="hidden md:block font-mono text-[10px] text-muted uppercase tracking-[1px] group-hover:text-paper transition-colors">
              {project.tag}
            </div>

            {/* Col 4: Role */}
            <div className="hidden lg:block font-sans text-[14px] text-paper-dim group-hover:text-paper transition-colors">
              {project.role}
            </div>

            {/* Col 5: Year + Arrow */}
            <div className="font-mono text-[11px] text-right">
              <span className="text-muted group-hover:text-paper transition-colors mr-3">
                {project.year}
              </span>
              <span className="text-copper transition-transform duration-500 inline-block group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
