'use client'

import type { ReactNode } from 'react'
import { MotionConfig, motion, type Variants } from 'motion/react'

const VARIANTS: Record<'rise' | 'scale' | 'wipe', Variants> = {
  rise: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  // Left-to-right reveal, padded so glows/shadows aren't clipped
  wipe: {
    hidden: { clipPath: 'inset(-30% 100% -30% -10%)' },
    visible: { clipPath: 'inset(-30% -10% -30% -10%)' },
  },
}

interface RevealProps {
  children: ReactNode
  variant?: keyof typeof VARIANTS
  delay?: number
  duration?: number
  className?: string
}

// Animates its children in once, when they scroll into view.
// The outer element watches the viewport and the inner one animates, because a
// fully clipped element (the wipe's hidden state) never registers as in view.
export default function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  duration = 0.8,
  className,
}: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={VARIANTS[variant]}
          transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}
