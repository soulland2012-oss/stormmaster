'use client'

import { motion } from 'framer-motion'
import type { RaceSection } from '@/data/oborotni'

interface SectionData {
  id: string
  title: string
  content: string
  subsections?: { title: string; content: string }[]
}

interface Props {
  accent: string
  sections: SectionData[]
}

function Prose({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay }}
      className="article-prose"
    >
      {children}
    </motion.div>
  )
}

export default function RaceArticleBody({ accent, sections }: Props) {
  return (
    <div className="col-span-12 lg:col-span-8 space-y-16">
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="scroll-mt-28 pt-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="font-cinzel font-bold text-2xl lg:text-3xl text-stone-900 mb-8 flex items-center gap-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
          >
            <span className="inline-block w-1 h-8 rounded-full shrink-0" style={{ background: accent }} />
            {sec.title}
          </motion.h2>

          {sec.content && (
            <Prose>
              <p>{sec.content}</p>
            </Prose>
          )}

          {sec.subsections?.map((sub) => (
            <div key={sub.title} className="mb-8">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-cinzel font-semibold text-lg mb-4"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent, letterSpacing: '0.06em' }}
              >
                {sub.title}
              </motion.h3>
              <Prose>
                <p>{sub.content}</p>
              </Prose>
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
