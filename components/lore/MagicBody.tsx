'use client'

import { motion } from 'framer-motion'
import SectionDivider from './SectionDivider'
import Quote from './Quote'
import { magicData } from '@/data/magic'

const ACCENT = '#A78BFA'

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

const MAGIC_SPARKS = [
  { left: '6%',  top: '75%', delay: 0.3, dur: 3.0 },
  { left: '20%', top: '68%', delay: 1.4, dur: 3.4 },
  { left: '36%', top: '80%', delay: 0.7, dur: 2.7 },
  { left: '52%', top: '65%', delay: 2.0, dur: 3.2 },
  { left: '65%', top: '72%', delay: 0.2, dur: 2.9 },
  { left: '78%', top: '78%', delay: 1.6, dur: 3.6 },
]

function MagicOrbs() {
  return (
    <>
      {MAGIC_SPARKS.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: ACCENT,
            boxShadow: `0 0 8px 4px ${ACCENT}90`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
          animate={{ y: [0, -50, -100], x: [0, -6, 4], opacity: [0, 0.85, 0], scale: [0.3, 1.2, 0.3] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}

export default function MagicBody() {
  const d = magicData

  return (
    <div className="col-span-12 lg:col-span-8 space-y-0">

      {/* Opening quote */}
      <Quote text={d.openingQuote.text} attribution={d.openingQuote.attribution} accentColor={ACCENT} />

      <SectionDivider accentColor={ACCENT} label="ПРИРОДА" />

      {/* 1. Nature */}
      <Section id="nature" title="Природа Магии">
        <Prose>
          {d.nature.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
        <Prose delay={0.08}>
          <p>{d.nature.mechanics}</p>
        </Prose>
      </Section>

      <SectionDivider accentColor={ACCENT} label="МАНА" />

      {/* 2. Restoration */}
      <Section id="restoration" title="Восстановление маны">
        <Prose>
          <p>{d.restoration.intro}</p>
        </Prose>
        <div className="space-y-3 mt-4">
          {d.restoration.methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center gap-4 p-4 rounded-sm"
              style={{ background: `${ACCENT}06`, border: `1px solid ${ACCENT}18` }}
            >
              <span
                className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center font-cinzel font-bold text-xs"
                style={{ fontFamily: 'var(--font-cinzel, serif)', background: `${ACCENT}18`, border: `1px solid ${ACCENT}35`, color: ACCENT }}
              >
                {i + 1}
              </span>
              <span className="text-stone-700 text-sm leading-6">{method}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <SectionDivider accentColor={ACCENT} label="ТРИ ПУТИ" />

      {/* 3. Three Paths */}
      <Section id="three-paths" title="Три Пути">
        <Prose>
          <p>{d.threePaths.intro}</p>
        </Prose>

        <Quote
          text={d.threePaths.quoteAndor.text}
          attribution={d.threePaths.quoteAndor.attribution}
          accentColor={ACCENT}
        />

        {/* Path cards — dark arcane style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 p-6 rounded-sm"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(135deg, rgba(5,1,16,0.95) 0%, rgba(10,3,28,0.92) 100%)`,
            border: `1px solid ${ACCENT}35`,
            boxShadow: `0 0 0 1px ${ACCENT}12, 0 0 30px 8px ${ACCENT}18, 0 0 70px 20px ${ACCENT}08`,
          }}
        >
          <MagicOrbs />
          <div style={{ position: 'relative', zIndex: 3 }}>
            <p
              className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-6"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
            >
              ✦ ПУТИ РАЗВИТИЯ МАГИИ ✦
            </p>
            <div className="space-y-5">
              {d.threePaths.paths.map((path) => (
                <div
                  key={path.name}
                  className="p-4 rounded-sm"
                  style={{ background: `${path.color}0C`, border: `1px solid ${path.color}30` }}
                >
                  <p
                    className="font-cinzel font-semibold text-sm mb-2"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', color: path.color, letterSpacing: '0.06em' }}
                  >
                    {path.name}
                  </p>
                  <p style={{ color: 'rgba(215,208,240,0.80)', fontFamily: 'Georgia, serif', fontSize: '0.9rem', lineHeight: '1.8' }}>
                    {path.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <Quote
          text={d.threePaths.quoteArishem.text}
          attribution={d.threePaths.quoteArishem.attribution}
          accentColor={ACCENT}
        />
      </Section>

      <SectionDivider accentColor={ACCENT} label="ДОМЕНЫ" />

      {/* 4. Domains */}
      <Section id="domains" title="Домены Магии">
        <Prose>
          {d.domains.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
        <InfoCard label="ЭКСКЛЮЗИВНЫЕ МАГИИ">
          <p className="text-stone-600 text-sm leading-6">
            Некоторые домены недоступны для обычного обучения — они передаются исключительно от богов или существ
            высшего порядка. Получить такую магию без их воли невозможно.
          </p>
        </InfoCard>
      </Section>

      <SectionDivider accentColor={ACCENT} label="АНТИМАГИЯ" />

      {/* 5. Antimagic */}
      <Section id="antimagic" title="Антимагия">
        <Prose>
          {d.antimagic.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <SectionDivider accentColor={ACCENT} label="РАНГИ" />

      {/* 6. Ranks */}
      <Section id="ranks" title="Ранги магов">
        <Prose>
          <p>У каждой страны своя аранжировка магов, но есть общая — принятая всем миром вместе с введением гильдий авантюристов и наёмников.</p>
        </Prose>
        <div className="space-y-3 mt-4">
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

      <SectionDivider accentColor={ACCENT} label="ЗНАНИЯ" />

      {/* 7. Spells vs Domains */}
      <Section id="spells" title="Заклинания и Домены">
        <SubSection title="Два уровня понимания">
          <Prose>
            {d.spells.note.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8 p-7 rounded-sm"
          style={{
            background: `${ACCENT}0A`,
            border: `1px solid ${ACCENT}28`,
            boxShadow: `0 0 0 1px ${ACCENT}08, 0 0 20px 4px ${ACCENT}10`,
          }}
        >
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
          >
            ✦ СЕКРЕТЫ ИЗУЧЕНИЯ ✦
          </p>
          <p className="text-stone-600 italic leading-8" style={{ fontFamily: 'Georgia, serif' }}>
            {d.spells.secrets}
          </p>
        </motion.div>
      </Section>

      <SectionDivider accentColor={ACCENT} label="ОСОБЫЕ ФОРМЫ" />

      {/* 8. Special Forms */}
      <Section id="special" title="Особые формы">
        <Prose>
          {d.special.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
        <InfoCard label="ДЛЯ СОЗДАТЕЛЕЙ ПЕРСОНАЖЕЙ">
          <p className="text-stone-600 text-sm leading-6">
            Если вы создаёте кого-то, обладающего тем или иным кинезом, свободной манипуляцией чем-то нестихийным — помните об этом. Постарайтесь придумать убедительные обстоятельства, если вы обладаете доменом в какой-либо сфере магии.
          </p>
        </InfoCard>
      </Section>

    </div>
  )
}
