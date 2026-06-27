'use client'

import { motion } from 'framer-motion'
import SectionDivider from './SectionDivider'
import Quote from './Quote'
import { auraData } from '@/data/aura'

const ACCENT = '#38BDF8'

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

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="font-cinzel font-bold text-2xl lg:text-3xl text-stone-900 mb-8 flex items-center gap-4"
        style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
      >
        <span className="inline-block w-1 h-8 rounded-full shrink-0" style={{ background: ACCENT }} />
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cinzel font-semibold text-lg mb-4"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT, letterSpacing: '0.06em' }}
      >
        {title}
      </motion.h3>
      {children}
    </div>
  )
}

function InfoCard({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="my-6 p-5 rounded-sm"
      style={{
        background: `${ACCENT}08`,
        border: `1px solid ${ACCENT}22`,
        boxShadow: `0 0 0 1px ${ACCENT}08, 0 0 20px 4px ${ACCENT}0A`,
      }}
    >
      {label && (
        <p
          className="font-cinzel text-[0.6rem] tracking-[0.25em] mb-3"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
        >
          {label}
        </p>
      )}
      {children}
    </motion.div>
  )
}

function RankRow({ number, name, description, apex, delay }: {
  number: string; name: string; description: string; apex?: boolean; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="flex items-start gap-4 p-4 rounded-sm"
      style={{
        background: apex ? `${ACCENT}10` : 'rgba(255,255,255,0.65)',
        border: `1px solid ${ACCENT}${apex ? '35' : '14'}`,
        backdropFilter: 'blur(8px)',
        boxShadow: apex ? `0 0 20px ${ACCENT}18` : 'none',
      }}
    >
      <div
        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm font-cinzel font-bold text-xs"
        style={{ fontFamily: 'var(--font-cinzel, serif)', background: `${ACCENT}18`, border: `1px solid ${ACCENT}35`, color: ACCENT }}
      >
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span
            className="font-cinzel font-semibold text-sm"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT, letterSpacing: '0.06em' }}
          >
            {name}
          </span>
          {apex && (
            <span
              className="font-cinzel text-[0.52rem] tracking-[0.2em] px-2 py-0.5"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT, background: `${ACCENT}18`, border: `1px solid ${ACCENT}35` }}
            >
              ВЫСШИЙ РАНГ
            </span>
          )}
        </div>
        <p className="text-stone-500 text-sm leading-6">{description}</p>
      </div>
    </motion.div>
  )
}

const SPARKS = [
  { left: '8%',  top: '72%', delay: 0,   dur: 3.2 },
  { left: '22%', top: '80%', delay: 1.1, dur: 2.8 },
  { left: '38%', top: '68%', delay: 0.5, dur: 3.5 },
  { left: '55%', top: '82%', delay: 1.8, dur: 2.6 },
  { left: '67%', top: '70%', delay: 0.9, dur: 3.0 },
  { left: '79%', top: '75%', delay: 2.3, dur: 3.3 },
]

function EnergyOrbs() {
  return (
    <>
      {SPARKS.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: ACCENT,
            boxShadow: `0 0 8px 3px ${ACCENT}80`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
          animate={{ y: [0, -60, -120], x: [0, 8, -5], opacity: [0, 0.9, 0], scale: [0.4, 1.3, 0.3] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}

export default function AuraBody() {
  const d = auraData

  return (
    <div className="col-span-12 lg:col-span-8 space-y-0">

      {/* Opening quote */}
      <Quote text={d.openingQuote.text} attribution={d.openingQuote.attribution} accentColor={ACCENT} />

      <SectionDivider accentColor={ACCENT} label="ПРИРОДА" />

      {/* 1. Nature */}
      <Section id="nature" title="Природа Ауры">
        <Prose>
          {d.nature.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <SectionDivider accentColor={ACCENT} label="ЯДРО" />

      {/* 2. Core */}
      <Section id="core" title="Ядро">
        <Prose>
          <p>{d.core.intro}</p>
        </Prose>
        <SubSection title="Функции Ядра">
          <div className="space-y-3 mt-2">
            {d.core.functions.map((fn, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <span
                  className="shrink-0 mt-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[0.55rem] font-cinzel font-bold"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', background: `${ACCENT}18`, border: `1px solid ${ACCENT}40`, color: ACCENT }}
                >
                  {i + 1}
                </span>
                <p className="text-stone-600 text-sm leading-6">{fn}</p>
              </motion.div>
            ))}
          </div>
        </SubSection>
      </Section>

      <SectionDivider accentColor={ACCENT} label="СЛОЙ" />

      {/* 3. Layer */}
      <Section id="layer" title="Слой Ауры">
        <Prose>
          <p>{d.layer.description}</p>
        </Prose>
        <Prose delay={0.08}>
          <p>{d.layer.mechanics}</p>
        </Prose>
        <InfoCard label="ПРИМЕЧАНИЕ">
          <p className="text-stone-600 text-sm leading-6 italic" style={{ fontFamily: 'Georgia, serif' }}>
            {d.layer.note}
          </p>
        </InfoCard>
      </Section>

      <SectionDivider accentColor={ACCENT} label="СПОСОБНОСТИ" />

      {/* 4. Abilities */}
      <Section id="abilities" title="Способности Ауры">
        {/* Glowing card for the main concept */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 p-6 rounded-sm"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(135deg, rgba(1,8,16,0.92) 0%, rgba(2,16,32,0.88) 100%)`,
            border: `1px solid ${ACCENT}35`,
            boxShadow: `0 0 0 1px ${ACCENT}12, 0 0 30px 8px ${ACCENT}18, 0 0 70px 20px ${ACCENT}08`,
          }}
        >
          <EnergyOrbs />
          <div style={{ position: 'relative', zIndex: 3 }}>
            <p
              className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
            >
              ✦ ПУТЬ ГАРМОНИИ ✦
            </p>
            {[d.abilities.intro, d.abilities.practice, d.abilities.progression].map((text, i) => (
              <p key={i} style={{ color: 'rgba(200, 230, 255, 0.85)', fontFamily: 'Georgia, serif', fontSize: '1rem', lineHeight: '1.9', marginBottom: '1rem' }}>
                {text}
              </p>
            ))}
          </div>
        </motion.div>
      </Section>

      <SectionDivider accentColor={ACCENT} label="РАНГИ" />

      {/* 5. Ranks */}
      <Section id="ranks" title="Ранги">
        <div className="space-y-3 mt-2">
          {d.ranks.map((r, i) => (
            <RankRow
              key={r.name}
              number={r.number}
              name={r.name}
              description={r.description}
              apex={r.apex}
              delay={i * 0.07}
            />
          ))}
        </div>
      </Section>

      <SectionDivider accentColor={ACCENT} label="АСПЕКТ" />

      {/* 6. Aspects */}
      <Section id="aspects" title="Проявление Аспекта">
        <Prose>
          {d.aspects.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
        <InfoCard label="ПРАЙМ / ИРРЕГУЛЯТОР">
          <p className="text-stone-600 text-sm leading-6">
            Праймы и Иррегуляторы — единственные, кто способен полностью раскрыть и освоить свой аспект, превращая его в основу собственного стиля боя. Их аспект становится частью самой ткани реальности.
          </p>
        </InfoCard>
      </Section>

      <SectionDivider accentColor={ACCENT} label="ПРЕДЕЛЫ" />

      {/* 7. Limits */}
      <Section id="limits" title="Пределы взаимодействия">
        <Prose>
          {d.limits.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <SectionDivider accentColor={ACCENT} label="АУРА И МАНА" />

      {/* 8. Interaction */}
      <Section id="interaction" title="Аура и Мана">
        <Prose>
          {d.interaction.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8 p-7 rounded-sm text-center"
          style={{ background: `linear-gradient(135deg, ${ACCENT}08, transparent)`, border: `1px solid ${ACCENT}20` }}
        >
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}80` }}
          >
            ЗАКОН НЕСОВМЕСТИМОСТИ
          </p>
          <p
            className="font-cinzel font-semibold text-stone-800 text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}
          >
            Аура и Мана — два пути. Двух мастеров нет.
          </p>
        </motion.div>
      </Section>

      <SectionDivider accentColor={ACCENT} label="НАСЛЕДОВАНИЕ" />

      {/* 9. Genetics */}
      <Section id="genetics" title="Наследование">
        <Prose>
          {d.genetics.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

    </div>
  )
}
