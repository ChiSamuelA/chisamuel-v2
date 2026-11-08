'use client'

import { MotionConfig, motion } from 'motion/react'

const NAME = 'CHI SAMUEL'

const SIGNATURE_GRADIENT = 'linear-gradient(180deg, #FFFFFF 0%, #C17EFF80 100%)'

// Decorative oversized name at the bottom of the footer.
// Letters rise into place when the footer scrolls into view.
export default function FooterSignature() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="pointer-events-none select-none overflow-hidden -mb-[3.5vw]"
        aria-hidden="true"
      >
        <motion.p
          className="flex justify-center whitespace-nowrap font-heading font-extrabold
            text-[16.5vw] leading-[0.8] tracking-[-0.03em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.04 }}
        >
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: SIGNATURE_GRADIENT }}
              variants={{
                hidden: { y: '60%', opacity: 0 },
                visible: { y: '0%', opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </MotionConfig>
  )
}
