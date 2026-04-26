import React from 'react'

interface CvSummaryProps {
  messages: {
    label: string
    text: string
    production: string
    scalable: string
    cloud: string
  }
}

const CvSummary = ({ messages }: CvSummaryProps) => {
  // Replace placeholders with JSX elements
  const formatText = (text: string) => {
    return text.split(/({production}|{scalable}|{cloud})/).map((part, i) => {
      if (part === '{production}') {
        return (
          <span key={i} className="italic text-copper">
            {messages.production}
          </span>
        )
      }
      if (part === '{scalable}') {
        return (
          <span key={i} className="italic text-copper">
            {messages.scalable}
          </span>
        )
      }
      if (part === '{cloud}') {
        return (
          <span key={i} className="italic text-copper">
            {messages.cloud}
          </span>
        )
      }
      return part
    })
  }

  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-20">
        <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          {messages.label}
        </h2>
        
        <p className="font-serif text-[22px] md:text-[32px] text-paper leading-[1.3] max-w-[900px] text-pretty">
          {formatText(messages.text)}
        </p>
      </div>
    </section>
  )
}

export default CvSummary
