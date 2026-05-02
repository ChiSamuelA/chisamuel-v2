import React from 'react'
import type { Project } from '@/payload-types'

interface ProjectOutcomesProps {
  project: Project
}

export default function ProjectOutcomes({ project }: ProjectOutcomesProps) {
  const { outcomes } = project

  if (!outcomes || outcomes.length === 0) return null

  return (
    <section className="bg-ink-deep border-t border-b border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-16">
      <div className="flex flex-col gap-12">
        {/* Section Label */}
        <div className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          §05 — OUTCOMES
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.22_0.005_80)] border border-[oklch(0.22_0.005_80)]">
          {outcomes.map((outcome) => (
            <div 
              key={outcome.id} 
              className="bg-ink-deep py-8 px-7"
            >
              <div className="font-serif text-copper leading-[1] tracking-[-0.03em]
                text-[56px] sm:text-[72px] lg:text-[112px]">
                {outcome.value}
              </div>
              <div className="font-mono text-[11px] text-muted uppercase tracking-[1.5px] mt-4">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
