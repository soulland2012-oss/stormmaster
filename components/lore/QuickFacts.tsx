'use client'

import { motion } from 'framer-motion'
import KaslanaCrest from '@/components/icons/KaslanaCrest'
import type { QuickFact } from '@/data/house-kaslana'

interface QuickFactsProps {
  facts: QuickFact[]
  title?: string
  crestColor?: string
}

export default function QuickFacts({
  facts,
  title = 'At a Glance',
  crestColor = 'text-gold-500',
}: QuickFactsProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-sm overflow-hidden mb-6"
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212,175,55,0.18)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{
          background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(245,230,163,0.06))',
          borderBottom: '1px solid rgba(212,175,55,0.2)',
        }}
      >
        <KaslanaCrest size={22} className={crestColor} />
        <h3
          className="font-cinzel text-[0.72rem] tracking-[0.2em] text-stone-800"
          style={{ fontFamily: 'var(--font-cinzel, serif)' }}
        >
          {title.toUpperCase()}
        </h3>
      </div>

      {/* Facts list */}
      <div className="divide-y divide-gold-500/08">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.04, duration: 0.5 }}
            className="flex px-5 py-2.5 gap-3"
          >
            <span className="text-stone-400 text-xs font-medium min-w-[110px] shrink-0 pt-0.5 leading-5">
              {fact.label}
            </span>
            <span className="text-stone-800 text-xs leading-5 font-medium">
              {fact.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  )
}
