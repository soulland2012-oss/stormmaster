'use client'

import { motion } from 'framer-motion'

export interface CountryStat { label: string; value: string }

export interface CountrySubsection {
  title: string
  paragraphs?: string[]
  list?: string[]
  stats?: CountryStat[]
}

export interface CountrySection {
  id: string
  title: string
  paragraphs?: string[]
  list?: string[]
  stats?: CountryStat[]
  subsections?: CountrySubsection[]
}

interface Props {
  accent: string
  sections: CountrySection[]
}

function Prose({ paragraphs, delay = 0 }: { paragraphs: string[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay }}
      className="article-prose"
    >
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </motion.div>
  )
}

function List({ items, accent }: { items: string[]; accent: string }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="space-y-2.5 my-5"
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-stone-600 text-[0.95rem] leading-6">
          <span className="mt-2 shrink-0 w-1.5 h-1.5 rotate-45 rounded-sm" style={{ background: accent }} />
          <span>{item}</span>
        </li>
      ))}
    </motion.ul>
  )
}

function Stats({ items, accent }: { items: CountryStat[]; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5"
    >
      {items.map((s) => (
        <div
          key={s.label}
          className="flex justify-between gap-4 px-4 py-2.5 rounded-sm"
          style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}
        >
          <span className="text-stone-500 text-sm">{s.label}</span>
          <span className="text-stone-800 text-sm font-medium text-right">{s.value}</span>
        </div>
      ))}
    </motion.div>
  )
}

function SubHeading({ title, accent }: { title: string; accent: string }) {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="font-cinzel font-semibold text-lg mb-3 mt-8"
      style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent, letterSpacing: '0.06em' }}
    >
      {title}
    </motion.h3>
  )
}

export default function CountryArticleBody({ accent, sections }: Props) {
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

          {sec.paragraphs && <Prose paragraphs={sec.paragraphs} />}
          {sec.list && <List items={sec.list} accent={accent} />}
          {sec.stats && <Stats items={sec.stats} accent={accent} />}

          {sec.subsections?.map((sub) => (
            <div key={sub.title}>
              <SubHeading title={sub.title} accent={accent} />
              {sub.paragraphs && <Prose paragraphs={sub.paragraphs} />}
              {sub.list && <List items={sub.list} accent={accent} />}
              {sub.stats && <Stats items={sub.stats} accent={accent} />}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
