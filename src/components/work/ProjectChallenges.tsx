import React from 'react'
import type { Project } from '@/payload-types'

interface ProjectChallengesProps {
  project: Project
}

export default function ProjectChallenges({ project }: ProjectChallengesProps) {
  const { challenges } = project

  if (!challenges || challenges.length === 0) return null

  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-16">
      <div className="flex flex-col gap-12">
        {/* Section Label */}
        <div className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          §02 — CHALLENGE
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id} 
              className="bg-[oklch(0.22_0.005_80)] border border-[oklch(0.28_0.005_80)] rounded-[6px] p-8"
            >
              <h3 className="font-serif text-[22px] text-paper leading-[1.1] mb-3">
                {challenge.title}
              </h3>
              <p className="font-sans text-[15px] text-paper-dim leading-[1.6]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
