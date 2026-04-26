import React from 'react'

interface AboutStripProps {
  label: string
  headline: string
  p1: string
  p2: string
  p3: string
  quote: string
}

export default function AboutStrip({ label, headline, p1, p2, p3, quote }: AboutStripProps) {
  
  // Helper to highlight words in headline (italic/copper)
  // For EN: "ship", For FR: "sortent"
  const formatHeadline = (text: string) => {
    const targetWords = ['ship', 'sortent']
    let formatted = text
    
    for (const word of targetWords) {
      if (text.includes(word)) {
        const parts = text.split(word)
        return (
          <>
            {parts[0]}
            <span className="italic text-copper">{word}</span>
            {parts[1]}
          </>
        )
      }
    }
    return text
  }

  // Helper to format body text with highlights {phrase} -> text-copper
  const formatBody = (text: string) => {
    const parts = text.split(/\{|\}/)
    return parts.map((part, i) => {
      // Every odd index is content inside {}
      if (i % 2 === 1) {
        return <span key={i} className="text-copper font-medium">{part}</span>
      }
      return part
    })
  }

  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-[56px] md:py-[80px] lg:py-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        
        {/* Left Column: Label + Headline */}
        <div>
          <p className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-6">
            {label}
          </p>
          <h2 className="font-serif font-normal text-paper leading-[1.05] tracking-[-0.025em]
            text-[36px]
            md:text-[48px]
            lg:text-[72px]
            text-pretty"
          >
            {formatHeadline(headline)}
          </h2>
        </div>

        {/* Right Column: Body + Pull-quote */}
        <div className="flex flex-col justify-center gap-5 lg:gap-5 text-[16px] leading-[1.65] text-paper-dim">
          <p className="text-pretty">
            {formatBody(p1)}
          </p>
          <p className="text-pretty">
            {formatBody(p2)}
          </p>
          <p className="text-pretty">
            {formatBody(p3)}
          </p>
          
          <p className="font-serif italic text-copper text-[22px] mt-3 lg:mt-5 text-pretty leading-snug">
            "{quote}"
          </p>
        </div>

      </div>
    </section>
  )
}
