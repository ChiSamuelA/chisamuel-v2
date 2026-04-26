import React from 'react'

interface ExperienceItem {
  title: string
  date: string
  org: string
  bullets: string[]
}

interface CvExperienceProps {
  messages: {
    label: string
    items: ExperienceItem[]
  }
}

const CvExperience = ({ messages }: CvExperienceProps) => {
  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-20">
        <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          {messages.label}
        </h2>

        <div>
          {messages.items.map((item, index) => (
            <div 
              key={index} 
              className={`${index !== messages.items.length - 1 ? 'mb-10' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1.5">
                <h3 className="font-serif text-[32px] md:text-[40px] text-paper leading-tight">
                  {item.title}
                </h3>
                <span className="font-mono text-[12px] text-copper mt-1 md:mt-0">
                  {item.date}
                </span>
              </div>
              
              <div className="font-mono text-[12px] text-muted mb-5">
                {item.org}
              </div>

              <ul className="space-y-3">
                {item.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="grid grid-cols-[16px_1fr] gap-x-3 items-start">
                    <span className="font-mono text-[12px] text-copper leading-[1.55]">→</span>
                    <span className="font-sans text-[15px] text-paper-dim leading-[1.55] text-pretty">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CvExperience
