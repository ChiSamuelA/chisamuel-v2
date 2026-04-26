import React from 'react'
import Link from 'next/link'
import { PROJECTS } from '@/content/projects'

interface FeaturedWorkProps {
  locale: string
  messages: {
    label: string
    headline: string
    viewAll: string
  }
  projectMessages: Record<string, { role: string, tag: string, desc: string }>
}

export default function FeaturedWork({ locale, messages, projectMessages }: FeaturedWorkProps) {
  const featured = PROJECTS.slice(0, 4)
  const mainProject = featured[0]
  const secondaryProjects = featured.slice(1)

  // Helper to build local links
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] pb-24">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 pt-20 mb-12">
        <div>
          <p className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-3">
            {messages.label}
          </p>
          <h2 className="font-serif text-[48px] md:text-[56px] lg:text-[72px] text-paper leading-none tracking-[-0.01em]">
            {messages.headline}
          </h2>
        </div>
        <Link 
          href={getHref('/work')}
          className="font-mono text-[12px] text-copper hover:text-paper transition-colors duration-200 uppercase tracking-[1px]"
        >
          {messages.viewAll} ↗
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] lg:grid-rows-[repeat(2,380px)] gap-5">
        
        {/* Large Featured Card */}
        <Link
          href={getHref(`/work/${mainProject.slug}`)}
          className="group relative lg:row-span-2 rounded-md overflow-hidden border border-[oklch(0.28_0.02_40)] p-8 lg:p-11 flex flex-col justify-between"
          style={{ background: 'linear-gradient(135deg, oklch(0.22 0.03 40), oklch(0.16 0.02 30))' }}
        >
          {/* Copper blob */}
          <div 
            className="absolute -right-[140px] -bottom-[140px] w-[440px] h-[440px] rounded-full pointer-events-none opacity-30 blur-3xl transition-transform duration-700 group-hover:scale-110"
            style={{ background: 'radial-gradient(circle, oklch(0.72 0.16 55) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <p className="font-mono text-[11px] text-copper uppercase tracking-[1px] mb-6">
              {mainProject.n} · FEATURED · {projectMessages[mainProject.n]?.tag}
            </p>
            <h3 className="font-serif text-[48px] sm:text-[64px] lg:text-[96px] text-paper leading-[0.98] tracking-[-0.025em] mb-6">
              {mainProject.name}
            </h3>
            <p className="text-paper-dim text-[15px] leading-[1.55] max-w-[520px]">
              {projectMessages[mainProject.n]?.desc}
            </p>
          </div>

          <div className="relative z-10 flex justify-between items-end font-mono text-[11px] text-muted uppercase">
            <span>{projectMessages[mainProject.n]?.role} · {mainProject.year}</span>
            <span className="text-copper group-hover:translate-x-1 transition-transform duration-200">CASE STUDY →</span>
          </div>
        </Link>

        {/* Small Secondary Cards */}
        {secondaryProjects.map((project) => (
          <Link
            key={project.n}
            href={getHref(`/work/${project.slug}`)}
            className="group relative rounded-md border border-[oklch(0.28_0.005_80)] bg-[oklch(0.22_0.005_80)] p-7 flex flex-col justify-between hover:border-copper/30 transition-all duration-300"
          >
            <div>
              <p className="font-mono text-[11px] text-muted uppercase tracking-[0.5px] mb-4">
                {project.n} · {project.tag}
              </p>
              <h3 className="font-serif text-[32px] lg:text-[44px] text-paper leading-[1] tracking-[-0.02em] mb-4">
                {project.name}
              </h3>
              <p className="text-paper-dim text-[13px] leading-[1.5] line-clamp-2 lg:line-clamp-none">
                {projectMessages[project.n]?.desc}
              </p>
            </div>

            <div className="flex justify-between items-center font-mono text-[11px] text-copper uppercase tracking-[0.5px]">
              <span className="truncate mr-2">{project.stack}</span>
              <span className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
            </div>
          </Link>
        ))}

      </div>
    </section>
  )
}
