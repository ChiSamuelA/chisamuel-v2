import React from 'react'

const STACK_DATA = [
  {
    category: 'LANG',
    skills: 'TypeScript, JavaScript, Python, PHP',
  },
  {
    category: 'FRONT',
    skills: 'Next.js, React, Angular, Tailwind CSS',
  },
  {
    category: 'BACK',
    skills: 'Laravel, FastAPI, Node.js, PostgreSQL, MongoDB, MySQL',
  },
  {
    category: 'INFRA',
    skills: 'Docker, Kubernetes, Linux, CI/CD, Nginx',
  },
]

export default function StackStrip() {
  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] pt-10 pb-24">
      {/* 
        Hairline separator trick: 
        Parent has the border color as background and 1px gap.
        Children have the page background.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.22_0.005_80)] border border-[oklch(0.22_0.005_80)]">
        {STACK_DATA.map((item) => (
          <div 
            key={item.category} 
            className="bg-ink-deep py-8 px-7"
          >
            <p className="font-mono text-[11px] text-copper uppercase tracking-[1.5px] mb-[14px]">
              {item.category}
            </p>
            <p className="font-sans text-[15px] text-paper-dim leading-[1.55]">
              {item.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
