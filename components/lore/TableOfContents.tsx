'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Section } from '@/data/house-kaslana'

interface TableOfContentsProps {
  sections: Section[]
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="rounded-sm overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.65)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(212,175,55,0.14)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
      }}
    >
      <div
        className="px-5 py-3.5"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.15)' }}
      >
        <h3
          className="font-cinzel text-[0.68rem] tracking-[0.22em] text-stone-600"
          style={{ fontFamily: 'var(--font-cinzel, serif)' }}
        >
          CONTENTS
        </h3>
      </div>

      <nav className="py-2">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={cn(
              'w-full text-left flex items-center gap-2.5 px-5 py-2 text-xs transition-all duration-200',
              active === section.id
                ? 'text-gold-600 bg-gold-50/60'
                : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50/50',
            )}
          >
            <span
              className="font-cinzel text-[0.55rem] shrink-0 w-5 text-right"
              style={{
                fontFamily: 'var(--font-cinzel, serif)',
                color: active === section.id ? '#D4AF37' : 'rgba(0,0,0,0.25)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={cn(active === section.id && 'font-medium')}>{section.title}</span>
            {active === section.id && (
              <motion.div
                layoutId="toc-indicator"
                className="ml-auto w-1 h-1 rounded-full bg-gold-500"
              />
            )}
          </button>
        ))}
      </nav>
    </motion.aside>
  )
}
