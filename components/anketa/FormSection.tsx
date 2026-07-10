'use client'

import { motion } from 'framer-motion'

const ACCENT = '#D4AF37'

interface FormSectionProps {
  id?: string
  num: string
  title: string
  description?: string
  children: React.ReactNode
}

export default function FormSection({ id, num, title, description, children }: FormSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-1.5"
      >
        <span
          className="font-cinzel text-[0.65rem] tracking-[0.22em] shrink-0 tabular-nums"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}90` }}
        >
          {num}
        </span>
        <span className="inline-block w-0.5 h-7 rounded-full shrink-0" style={{ background: ACCENT }} />
        <h3
          className="font-cinzel font-bold text-xl text-stone-900"
          style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}
        >
          {title}
        </h3>
      </motion.div>

      {description && (
        <p className="text-stone-500 text-xs leading-5 mb-5">{description}</p>
      )}

      <div className="space-y-4">{children}</div>
    </section>
  )
}
