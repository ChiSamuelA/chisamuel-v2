import React from 'react'

interface SkillCategory {
  label: string
  value: string
}

interface CvSkillsProps {
  messages: {
    label: string
    categories: SkillCategory[]
  }
}

const CvSkills = ({ messages }: CvSkillsProps) => {
  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-20">
        <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          {messages.label}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 md:gap-x-20">
          {messages.categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-mono text-[11px] text-copper uppercase tracking-[1.5px] mb-[14px]">
                {category.label}
              </h3>
              <p className="font-sans text-[15px] text-paper-dim leading-[1.55]">
                {category.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CvSkills
