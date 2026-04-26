import React from 'react'

interface EducationItem {
  degree: string
  org: string
  date: string
}

interface CvEducationProps {
  messages: {
    label: string
    items: EducationItem[]
  }
}

const CvEducation = ({ messages }: CvEducationProps) => {
  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-20">
        <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          {messages.label}
        </h2>

        <div className="space-y-8">
          {messages.items.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row md:justify-between md:items-baseline"
            >
              <div>
                <h3 className="font-serif text-[24px] md:text-[28px] text-paper leading-tight tracking-tight">
                  {item.degree}
                </h3>
                <p className="font-mono text-[12px] text-muted mt-2">
                  {item.org}
                </p>
              </div>
              <span className="font-mono text-[12px] text-copper mt-2 md:mt-0">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CvEducation
