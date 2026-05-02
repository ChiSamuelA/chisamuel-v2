import React from 'react'
import type { Project } from '@/payload-types'

interface ProjectOverviewProps {
  project: Project
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const { overview } = project

  if (!overview) return null

  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
        {/* Left Column */}
        <div className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          §01 — OVERVIEW
        </div>

        {/* Right Column */}
        <div className="font-serif text-[20px] text-paper leading-[1.6] max-w-[820px]">
          {overview}
        </div>
      </div>
    </section>
  )
}
