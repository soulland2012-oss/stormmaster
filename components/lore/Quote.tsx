'use client'

import { motion } from 'framer-motion'

interface QuoteProps {
  text: string
  attribution?: string
  accentColor?: string
}

export default function Quote({ text, attribution, accentColor = '#D4AF37' }: QuoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative my-12 px-8 lg:px-12 py-8"
      style={{
        background: `linear-gradient(135deg, ${accentColor}06, transparent)`,
        borderLeft: `2px solid ${accentColor}50`,
      }}
    >
      {/* Decorative large quote mark */}
      <div
        className="absolute top-3 left-5 font-cinzel font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-cinzel, serif)',
          fontSize: '5rem',
          color: `${accentColor}12`,
          lineHeight: 1,
        }}
      >
        &ldquo;
      </div>

      <p
        className="relative z-10 text-stone-600 italic leading-9 text-lg lg:text-xl font-light"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        &ldquo;{text}&rdquo;
      </p>

      {attribution && (
        <footer className="mt-4 flex items-center gap-3">
          <div
            className="w-8 h-px"
            style={{ background: `${accentColor}60` }}
          />
          <cite
            className="not-italic text-sm text-stone-500 font-cinzel tracking-wide"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.7rem', letterSpacing: '0.08em' }}
          >
            {attribution}
          </cite>
        </footer>
      )}
    </motion.blockquote>
  )
}
