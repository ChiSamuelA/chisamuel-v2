import React from 'react'

interface ReachMeCardsProps {
  messages: {
    label: string
    email: string
    phone: string
    whatsapp: string
    github: string
  }
}

const ReachMeCards = ({ messages }: ReachMeCardsProps) => {
  const cards = [
    {
      label: messages.email,
      value: 'me@chisamuel.com',
      link: 'mailto:me@chisamuel.com',
    },
    {
      label: messages.phone,
      value: '+237 659 224 784',
      link: 'tel:+237659224784',
    },
    {
      label: messages.linkedin,
      value: 'chi-samuel-apeng',
      link: 'https://cm.linkedin.com/in/chi-samuel-apeng',
      external: true,
    },
    {
      label: messages.github,
      value: 'ChiSamuelA',
      link: 'https://github.com/ChiSamuelA',
      external: true,
    },
  ]

  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-8">
        {messages.label}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[oklch(0.22_0.005_80)] border border-[oklch(0.22_0.005_80)] rounded-sm overflow-hidden">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            className="group bg-ink-deep p-8 md:p-9 transition-colors duration-300 hover:bg-[oklch(0.18_0.005_80)]"
          >
            <div className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4 transition-colors group-hover:text-copper">
              {card.label}
            </div>
            <div className="flex justify-between items-end">
              <div className="font-serif text-[22px] md:text-[28px] lg:text-[38px] text-paper leading-tight tracking-tight">
                {card.value}
              </div>
              <div className="font-mono text-[20px] text-copper opacity-0 group-hover:opacity-100 transition-opacity translate-y-1">
                ↗
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ReachMeCards
