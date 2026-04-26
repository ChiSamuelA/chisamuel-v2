import React from 'react'
import Link from 'next/link'
import { PROJECTS } from '@/content/projects'

interface ProjectIndexProps {
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
  projectMessages: Record<string, { role: string, tag: string, desc: string }>
}

export default function ProjectIndex({ locale, messages, projectMessages }: ProjectIndexProps) {
  
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
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-20">
      
      {/* Section Header Row */}
      <div className="flex flex-row justify-between items-baseline mb-10">
        <h2 className="font-serif text-[48px] text-paper leading-none">
          {messages.title} <span className="italic font-normal">{messages.titleItalic}</span>
        </h2>
        <p className="font-mono text-[12px] text-muted">
          {messages.counter}
        </p>
      </div>

      {/* Column Headers */}
      <div className={`${gridClasses} border-b border-[oklch(0.2_0.005_80)] pb-3 mb-0 font-mono text-[11px] text-muted uppercase tracking-[0.5px]`}>
        <div className="hidden md:block">{messages.cols.number}</div>
        <div>{messages.cols.project}</div>
        <div className="hidden md:block">{messages.cols.tag}</div>
        <div className="hidden lg:block">{messages.cols.role}</div>
        <div className="text-right">{messages.cols.year}</div>
      </div>

      {/* Project Rows */}
      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <Link
            key={project.n}
            href={getHref(`/work/${project.slug}`)}
            className={`group ${gridClasses} py-[22px] border-b border-[oklch(0.2_0.005_80)] transition-colors duration-200 hover:bg-white/[0.02]`}
          >
            {/* Col 1: Number */}
            <div className="hidden md:block font-mono text-[11px] text-muted group-hover:text-paper transition-colors">
              {project.n}
            </div>

            {/* Col 2: Name */}
            <div className="font-serif text-[28px] text-paper tracking-[-0.4px]">
              {project.name}
            </div>

            {/* Col 3: Tag */}
            <div className="hidden md:block font-mono text-[11px] text-muted uppercase tracking-[0.5px] group-hover:text-paper transition-colors">
              {projectMessages[project.n]?.tag}
            </div>

            {/* Col 4: Role */}
            <div className="hidden lg:block font-sans text-[13px] text-paper-dim group-hover:text-paper transition-colors">
              {projectMessages[project.n]?.role}
            </div>

            {/* Col 5: Year + Arrow */}
            <div className="font-mono text-[11px] text-right">
              <span className="text-muted group-hover:text-paper transition-colors mr-2">
                {project.year}
              </span>
              <span className="text-copper transition-transform duration-300 inline-block group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
