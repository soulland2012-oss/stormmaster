'use client'

import { motion } from 'framer-motion'
import KaslanaCrest from '@/components/icons/KaslanaCrest'

interface SectionDividerProps {
  icon?: boolean
  label?: string
  accentColor?: string
}

export default function SectionDivider({
  icon = true,
  label,
  accentColor = '#D4AF37',
}: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4 my-12 lg:my-16"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-px origin-left"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}55, ${accentColor}22)`,
        }}
      />

      {label && (
        <span
          className="font-cinzel text-[0.58rem] tracking-[0.3em] px-2 shrink-0"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${accentColor}80` }}
        >
          {label}
        </span>
      )}

      {icon && !label && (
        <div className="shrink-0" style={{ color: `${accentColor}60` }}>
          <KaslanaCrest size={22} />
        </div>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-px origin-right"
        style={{
          background: `linear-gradient(270deg, transparent, ${accentColor}55, ${accentColor}22)`,
        }}
      />
    </motion.div>
  )
}
