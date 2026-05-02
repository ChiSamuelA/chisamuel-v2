import React from 'react'
import type { Project } from '@/payload-types'

interface ProjectApproachProps {
  project: Project
}

export default function ProjectApproach({ project }: ProjectApproachProps) {
  const { approach, stack } = project

  if (!approach) return null

  const stackChips = stack ? stack.split('·').map((s) => s.trim()) : []

  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
        {/* Left Column */}
        <div className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          §04 — APPROACH
        </div>

        {/* Right Column */}
        <div className="max-w-[820px]">
          {/* Approach Text */}
          <div className="font-serif text-[20px] text-paper leading-[1.6] mb-12">
            {approach}
          </div>

          {/* Tech Stack */}
          {stackChips.length > 0 && (
            <div>
              <div className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-4">
                STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {stackChips.map((chip, i) => (
                  <span
                    key={i}
                    className="font-mono text-[12px] text-paper-dim border border-[oklch(0.28_0.005_80)] px-3 py-1.5 rounded-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
