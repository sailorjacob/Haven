'use client'

import { motion } from 'framer-motion'

interface GearProps {
  index: number
  active?: boolean
}

export default function GearGraphic({ index, active = false }: GearProps) {
  const baseSize = 'w-20 h-20 md:w-24 md:h-24'

  const withAnim = {
    animate: active ? { rotate: 360 } : { rotate: 0 },
    transition: active ? { repeat: Infinity, duration: 8, ease: 'linear' } : { duration: 0 }
  }

  // simplified visual: single svg per step
  const visuals = [
    <motion.svg key="hex" viewBox="0 0 32 32" {...withAnim} className={baseSize + ' text-zinc-600'}>
      <polygon points="16 3 28 10 28 22 16 29 4 22 4 10" fill="none" stroke="currentColor" strokeWidth={0.8} />
    </motion.svg>,
    <motion.svg key="circ" viewBox="0 0 32 32" {...withAnim} className={baseSize + ' text-zinc-600'}>
      <circle cx="16" cy="16" r="12" fill="none" strokeDasharray="4 3" stroke="currentColor" strokeWidth={0.8} />
    </motion.svg>,
    <motion.svg key="gear" viewBox="0 0 32 32" {...withAnim} className={baseSize + ' text-zinc-600'}>
      <path d="M30.329 13.721l-2.65-.441a11.922 11.922 0 0 0-1.524-3.653l1.476-2.066a1.983 1.983 0 0 0-.211-2.553l-.428-.428a1.983 1.983 0 0 0-2.553-.211L22.373 5.845a11.922 11.922 0 0 0-3.653-1.524l-.441-2.65A2 2 0 0 0 16.306 0h-.612a2 2 0 0 0-1.973 1.671l-.441 2.65a11.922 11.922 0 0 0-3.653 1.524L7.561 4.369a1.983 1.983 0 0 0-2.553.211l-.428.428a1.983 1.983 0 0 0-.211 2.553l1.476 2.066a11.922 11.922 0 0 0-1.524 3.653l-2.65.441A2 2 0 0 0 0 15.694v.612a2 2 0 0 0 1.671 1.973l2.65.441a11.922 11.922 0 0 0 1.524 3.653L4.369 24.439a1.983 1.983 0 0 0 .211 2.553l.428.428a1.983 1.983 0 0 0 2.553.211l2.066-1.476a11.922 11.922 0 0 0 3.653 1.524l.441 2.65A2 2 0 0 0 15.694 32h.612a2 2 0 0 0 1.973-1.671l.441-2.65a11.922 11.922 0 0 0 3.653-1.524l2.066 1.476a1.983 1.983 0 0 0 2.553-.211l.428-.428a1.983 1.983 0 0 0 .211-2.553l-1.476-2.066a11.922 11.922 0 0 0 1.524-3.653l2.65-.441A2 2 0 0 0 32 16.306v-.612a2 2 0 0 0-1.671-1.973z" fill="none" stroke="currentColor" strokeWidth={0.8} />
    </motion.svg>,
    <motion.svg key="circ2" viewBox="0 0 32 32" {...withAnim} className={baseSize + ' text-zinc-600'}>
      <circle cx="16" cy="16" r="10" fill="none" strokeDasharray="2 3" stroke="currentColor" strokeWidth={0.8} />
    </motion.svg>
  ]

  return <>{visuals[index]}</>
} 