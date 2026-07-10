'use client'

import { motion } from 'framer-motion'
import { EyeOff } from 'lucide-react'
import {
  tikhiyKhorData as d,
  type Doctrine,
  type RankInfo,
  type RitualInfo,
  type LabeledPoint,
} from '@/data/tikhiy-khor'

const ACCENT = '#6E7A8A'

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

function Section({ id, num, title, subtitle, children }: {
  id: string; num: string; title: string; subtitle?: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-4 mb-14">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-2"
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
      {subtitle && (
        <p className="font-cinzel text-[0.62rem] tracking-[0.2em] italic mb-8" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}80` }}>
          {subtitle}
        </p>
      )}
      {children}
    </section>
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

function LabeledList({ points }: { points: LabeledPoint[] }) {
  return (
    <div className="mt-4 space-y-3">
      {points.map((p, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rotate-45" style={{ background: ACCENT }} />
          <p className="text-stone-600 text-sm leading-6">
            <span className="font-cinzel font-semibold" style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}>{p.label}.</span>{' '}
            {p.text}
          </p>
        </div>
      ))}
    </div>
  )
}

function DoctrineCard({ doc, index }: { doc: Doctrine; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="mb-5 p-6 rounded-sm"
      style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}25` }}
    >
      <p className="font-cinzel text-[0.6rem] tracking-[0.24em] mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}>
        ВЕЛЕНИЕ {doc.num}
      </p>
      <h3 className="font-cinzel font-semibold text-lg text-stone-800 mb-4" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.03em' }}>
        {doc.title}
      </h3>
      <div className="space-y-3">
        {doc.points.map((p, i) => (
          <p key={i} className="text-stone-600 text-sm leading-7">
            <span className="tabular-nums mr-2 text-xs" style={{ color: `${ACCENT}A0` }}>{index + 1}.{i + 1}</span>
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

function RankCard({ rank }: { rank: RankInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="mb-5 p-6 rounded-sm"
      style={{ background: 'rgba(255,255,255,0.6)', border: `1px solid ${ACCENT}22` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-sm font-cinzel font-bold text-sm"
          style={{ fontFamily: 'var(--font-cinzel, serif)', background: `${ACCENT}18`, border: `1px solid ${ACCENT}45`, color: ACCENT }}
        >
          {rank.num}
        </div>
        <div>
          <h3 className="font-cinzel font-semibold text-lg text-stone-800" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}>
            {rank.name}
          </h3>
          <p className="text-[0.62rem] tracking-[0.12em] uppercase" style={{ color: `${ACCENT}A0` }}>{rank.tier}</p>
        </div>
      </div>

      <p className="text-stone-600 text-sm leading-7">{rank.description}</p>

      <div className="mt-4 p-4 rounded-sm" style={{ background: `${ACCENT}0A`, border: `1px solid ${ACCENT}20` }}>
        <p className="font-cinzel text-[0.56rem] tracking-[0.22em] mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}>
          ЗНАК ОТРЕЧЕНИЯ
        </p>
        <p className="text-stone-500 text-sm leading-6">{rank.sign}</p>
      </div>

      <div className="mt-4">
        <p className="font-cinzel text-[0.56rem] tracking-[0.22em] mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}>
          РОЛЬ
        </p>
        <ul className="space-y-2">
          {rank.roles.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600 leading-6">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rotate-45" style={{ background: ACCENT }} />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function RitualCard({ ritual }: { ritual: RitualInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="mb-5 p-6 rounded-sm"
      style={{ background: 'rgba(255,255,255,0.6)', border: `1px solid ${ACCENT}22` }}
    >
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="font-cinzel font-bold text-sm tabular-nums shrink-0"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
        >
          {ritual.num}
        </span>
        <h3 className="font-cinzel font-semibold text-lg text-stone-800" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.03em' }}>
          {ritual.name}
        </h3>
      </div>
      <p className="text-stone-500 text-sm leading-6 italic mb-3">{ritual.essence}</p>
      <p className="text-stone-600 text-sm leading-7">{ritual.practice}</p>
      <LabeledList points={ritual.points} />
    </motion.div>
  )
}

export default function TikhiyKhorBody() {
  return (
    <main className="col-span-12 lg:col-span-8 order-last lg:order-first">

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-12 p-5 rounded-sm"
        style={{ background: `${ACCENT}0A`, border: `1px solid ${ACCENT}25` }}
      >
        <div
          className="shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
          style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}40` }}
        >
          <EyeOff size={22} style={{ color: ACCENT }} />
        </div>
        <div>
          <p className="text-stone-600 text-sm leading-6">{d.philosophy}</p>
          <p className="text-stone-500 text-xs leading-5 mt-1">{d.alignment}</p>
        </div>
      </motion.div>

      <Section id="doctrine" num="01." title="Священные доктрины" subtitle={d.doctrineSource}>
        {d.doctrines.map((doc, i) => (
          <DoctrineCard key={doc.num} doc={doc} index={i} />
        ))}
      </Section>

      <Divider />

      <Section id="hierarchy" num="02." title="Членство и иерархия" subtitle={d.hierarchySubtitle}>
        <Prose>
          <p>{d.hierarchyIntro}</p>
        </Prose>
        <div className="mt-6">
          {d.ranks.map((rank) => (
            <RankCard key={rank.num} rank={rank} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section id="rituals" num="03." title="Ритуалы и практики" subtitle={d.ritualsSubtitle}>
        <Prose>
          <p>{d.ritualsIntro}</p>
        </Prose>
        <div className="mt-6">
          {d.rituals.map((ritual) => (
            <RitualCard key={ritual.num} ritual={ritual} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section id="activity" num="04." title="Деятельность в мире" subtitle={d.activitySubtitle}>
        <Prose>
          <p>{d.activityIntro}</p>
        </Prose>
        <div className="mt-6 space-y-8">
          {d.activity.map((block) => (
            <div key={block.title}>
              <h3 className="font-cinzel font-semibold text-base text-stone-800 mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.03em' }}>
                {block.title}
              </h3>
              <p className="text-stone-600 text-sm leading-6">{block.intro}</p>
              <LabeledList points={block.points} />
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      <Section id="symbols" num="05." title="Символы и внешний вид" subtitle={d.symbolsSubtitle}>
        <Prose>
          <p>{d.symbolsIntro}</p>
        </Prose>
        <div className="mt-6 space-y-8">
          {d.symbols.map((block) => (
            <div key={block.title}>
              <h3 className="font-cinzel font-semibold text-base text-stone-800 mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.03em' }}>
                {block.title}
              </h3>
              <p className="text-stone-600 text-sm leading-6">{block.intro}</p>
              <LabeledList points={block.points} />
            </div>
          ))}
        </div>
      </Section>

    </main>
  )
}
