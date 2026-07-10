'use client'

import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { kultIstoriyData as d } from '@/data/kult-istoriy'

const ACCENT = '#B8935A'

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

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-4 mb-14">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-8"
      >
        <span
          className="font-cinzel text-[0.65rem] tracking-[0.22em] shrink-0 tabular-nums"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}90` }}
        >
          {num}
        </span>
        <span className="inline-block w-0.5 h-8 rounded-full shrink-0" style={{ background: ACCENT }} />
        <h2
          className="font-cinzel font-bold text-2xl lg:text-3xl text-stone-900"
          style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
        >
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}

function Callout({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="my-6 p-5 rounded-sm"
      style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}28` }}
    >
      {label && (
        <p
          className="font-cinzel text-[0.58rem] tracking-[0.28em] mb-3"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
        >
          {label}
        </p>
      )}
      {children}
    </motion.div>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}30)` }} />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: `${ACCENT}60` }} />
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${ACCENT}30, transparent)` }} />
    </div>
  )
}

export default function KultIstoriyBody() {
  return (
    <main className="col-span-12 lg:col-span-8 order-last lg:order-first">

      <Section id="essence" num="01." title="Суть культа">
        <Prose>
          {d.essence.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <Divider />

      <Section id="price" num="02." title="«Плата»">
        <Prose>
          {d.price.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <Callout label="ДВА ПРИМЕРА">
          <ul className="space-y-3 text-sm text-stone-600">
            {d.price.examples.map((ex, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1 shrink-0 w-1.5 h-1.5 rotate-45 rounded-sm" style={{ background: ACCENT }} />
                <span className="leading-6">{ex}</span>
              </li>
            ))}
          </ul>
        </Callout>

        <Prose>
          <p>{d.price.outro}</p>
        </Prose>
      </Section>

      <Divider />

      <Section id="structure" num="03." title="Система и иерархия">
        <Prose>
          {d.structure.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <Divider />

      <Section id="goal" num="04." title="Цель культа">
        <Prose>
          {d.goal.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <Divider />

      <Section id="symbolism" num="05." title="Символика">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6 p-5 rounded-sm"
          style={{ background: `${ACCENT}0A`, border: `1px solid ${ACCENT}25` }}
        >
          <div
            className="shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
            style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}40` }}
          >
            <Eye size={22} style={{ color: ACCENT }} />
          </div>
          <p className="font-cinzel text-[0.65rem] tracking-[0.2em]" style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}>
            «ГЛАЗ» — ЗНАК БОГА ИСТОРИЙ
          </p>
        </motion.div>
        <Prose>
          {d.symbolism.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

    </main>
  )
}
