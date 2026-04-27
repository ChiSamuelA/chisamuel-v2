import React from 'react'

interface AvailabilityStripProps {
  messages: {
    label: string
    statusLabel: string
    statusValue: string
    timezoneLabel: string
    timezoneValue: string
    timezoneSubValue: string
    workLabel: string
    workValue: string
  }
}

const AvailabilityStrip = ({ messages }: AvailabilityStripProps) => {
  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-12">
        {messages.label}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 — Status */}
        <div className="flex flex-col">
          <span className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4">
            {messages.statusLabel}
          </span>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-3 animate-pulse" />
            <span className="font-serif text-[24px] text-paper leading-tight">
              {messages.statusValue}
            </span>
          </div>
        </div>

        {/* Column 2 — Timezone */}
        <div className="flex flex-col">
          <span className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4">
            {messages.timezoneLabel}
          </span>
          <div className="font-serif text-[24px] text-paper leading-tight mb-1">
            {messages.timezoneValue}
          </div>
          <div className="font-sans text-[13px] text-paper-dim">
            {messages.timezoneSubValue}
          </div>
        </div>

        {/* Column 3 — Preferred work */}
        <div className="flex flex-col">
          <span className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4">
            {messages.workLabel}
          </span>
          <div className="font-serif text-[24px] text-paper leading-tight">
            {messages.workValue}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvailabilityStrip
