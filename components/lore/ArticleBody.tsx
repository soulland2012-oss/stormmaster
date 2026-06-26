'use client'

import { motion } from 'framer-motion'
import SectionDivider from './SectionDivider'
import Quote from './Quote'
import Gallery from './Gallery'
import { kaslanaData } from '@/data/house-kaslana'

type KaslanaData = typeof kaslanaData

interface ArticleBodyProps {
  data: KaslanaData
  accent: string
}

const MOTH_BLUE = '#5A8FCC'

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

function Section({ id, title, accent, children }: {
  id: string; title: string; accent: string; children: React.ReactNode
}) {
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
        <span className="inline-block w-1 h-8 rounded-full shrink-0" style={{ background: accent }} />
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

function SubSection({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cinzel font-semibold text-lg mb-4"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent, letterSpacing: '0.06em' }}
      >
        {title}
      </motion.h3>
      {children}
    </div>
  )
}

function InfoCard({ children, accent }: { children: React.ReactNode; accent?: string }) {
  const c = accent ?? '#D4AF37'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="my-6 p-5 rounded-sm"
      style={{ background: `${c}08`, border: `1px solid ${c}22` }}
    >
      {children}
    </motion.div>
  )
}

function BlockQuote({ text, accent }: { text: string; accent: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-6 pl-5 py-1"
      style={{ borderLeft: `3px solid ${accent}60` }}
    >
      <p className="text-stone-600 italic leading-8" style={{ fontFamily: 'Georgia, serif', fontSize: '1rem' }}>
        {text}
      </p>
    </motion.blockquote>
  )
}

function Parable({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-6 p-7 rounded-sm"
      style={{
        background: `${accent}0D`,
        border: `1px solid ${accent}40`,
        boxShadow: `0 0 0 1px ${accent}0C, 0 0 18px 4px ${accent}12, 0 0 40px 10px ${accent}07`,
      }}
    >
      <p
        className="font-cinzel font-semibold text-[0.65rem] tracking-[0.32em] mb-5"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}
      >
        ✦ ЛЕГЕНДА ✦
      </p>
      <div
        className="text-stone-700 leading-9 whitespace-pre-line italic"
        style={{ fontFamily: 'Georgia, serif', fontSize: '0.97rem', letterSpacing: '0.01em' }}
      >
        {children}
      </div>
    </motion.div>
  )
}

function RankRow({ number, name, description, accent, apex, delay }: {
  number: string; name: string; description: string; accent: string; apex?: boolean; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="flex items-start gap-4 p-4 rounded-sm"
      style={{
        background: apex ? `${accent}10` : 'rgba(255,255,255,0.65)',
        border: `1px solid ${accent}${apex ? '35' : '14'}`,
        backdropFilter: 'blur(8px)',
        boxShadow: apex ? `0 0 20px ${accent}18` : 'none',
      }}
    >
      <div
        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm font-cinzel font-bold text-xs"
        style={{ fontFamily: 'var(--font-cinzel, serif)', background: `${accent}18`, border: `1px solid ${accent}35`, color: accent }}
      >
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span
            className="font-cinzel font-semibold text-sm"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent, letterSpacing: '0.06em' }}
          >
            {name}
          </span>
          {apex && (
            <span
              className="font-cinzel text-[0.52rem] tracking-[0.2em] px-2 py-0.5"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent, background: `${accent}18`, border: `1px solid ${accent}35` }}
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

const MANTIS_SPARKS = [
  { left: '7%',  top: '75%', delay: 0,   dur: 3.2 },
  { left: '19%', top: '80%', delay: 1.1, dur: 2.8 },
  { left: '34%', top: '70%', delay: 0.5, dur: 3.5 },
  { left: '52%', top: '85%', delay: 1.8, dur: 2.6 },
  { left: '64%', top: '72%', delay: 0.9, dur: 3.0 },
  { left: '76%', top: '78%', delay: 2.3, dur: 3.3 },
  { left: '13%', top: '60%', delay: 2.8, dur: 2.9 },
  { left: '44%', top: '65%', delay: 1.5, dur: 3.1 },
]

const MOTH_SPARKS = [
  { left: '6%',  top: '78%', delay: 0.3, dur: 3.0 },
  { left: '18%', top: '72%', delay: 1.4, dur: 3.4 },
  { left: '31%', top: '82%', delay: 0.7, dur: 2.7 },
  { left: '47%', top: '68%', delay: 2.0, dur: 3.2 },
  { left: '60%', top: '75%', delay: 0.2, dur: 2.9 },
  { left: '74%', top: '80%', delay: 1.6, dur: 3.6 },
  { left: '11%', top: '55%', delay: 2.5, dur: 3.0 },
  { left: '42%', top: '62%', delay: 1.0, dur: 2.8 },
]

function Fireflies({ sparks, color }: { sparks: typeof MANTIS_SPARKS; color: string }) {
  return (
    <>
      {sparks.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 5px 2px ${color}`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
          animate={{ y: [0, -55, -115], x: [0, 7, -4], opacity: [0, 0.9, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}

export default function ArticleBody({ data: d, accent }: ArticleBodyProps) {
  return (
    <div className="col-span-12 lg:col-span-8 space-y-0">

      {/* ── 1. ИСТОРИЯ И ФИЛОСОФИЯ ── */}
      <Section id="history" title="История и философия" accent={accent}>
        <Prose>
          {d.history.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Основатель" accent={accent}>
          <Prose>
            {d.history.founder.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Философия силы" accent={accent}>
          <Prose>
            {d.history.philosophy.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
          <BlockQuote text={d.history.ideologyQuote} accent={accent} />
          <BlockQuote text={d.history.arthuriteLegacy} accent={accent} />
        </SubSection>

        <SubSection title="Связь со Светозарным Орденом" accent={accent}>
          <Prose>
            <p>{d.history.orderRelation}</p>
          </Prose>
        </SubSection>
      </Section>

      <Quote text={d.quotes[0].text} attribution={d.quotes[0].attribution} accentColor={accent} />

      <SectionDivider accentColor={accent} label="УСТРОЙСТВО" />

      {/* ── 2. УСТРОЙСТВО ДОМА ── */}
      <Section id="structure" title="Устройство Дома" accent={accent}>
        <Prose>
          {d.structure.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Глава Каслана" accent={accent}>
          <Prose>
            {d.structure.headOfHouse.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
          <BlockQuote text={d.structure.headQuote} accent={accent} />
          <BlockQuote text={d.structure.councilSonQuote} accent={accent} />
          <Prose>
            <p>{d.structure.leaderSelection}</p>
          </Prose>
        </SubSection>

        <SubSection title="Старший Совет" accent={accent}>
          <Prose>
            <p>{d.structure.council}</p>
          </Prose>
        </SubSection>

        <SubSection title="Четыре качества Главы" accent={accent}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {d.structure.fourQualities.map((q, i) => (
              <motion.div
                key={q.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-sm"
                style={{ background: `linear-gradient(135deg, ${accent}08, transparent)`, border: `1px solid ${accent}18` }}
              >
                <h4
                  className="font-cinzel font-semibold text-sm mb-2"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent, letterSpacing: '0.05em' }}
                >
                  {q.name}
                </h4>
                <p className="text-stone-500 text-sm leading-6">{q.description}</p>
              </motion.div>
            ))}
          </div>
          <BlockQuote text={d.structure.teachersQuote} accent={accent} />
        </SubSection>

        <SubSection title="Дом как единая семья" accent={accent}>
          <Prose>
            {d.structure.familyUnity.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Кровь Каслана" accent={accent}>
          <Prose>
            {d.structure.bloodline.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>
      </Section>

      <Quote text={d.quotes[2].text} attribution={d.quotes[2].attribution} accentColor={accent} />

      <SectionDivider accentColor={accent} label="АКАДЕМИЯ" />

      {/* ── 3. АКАДЕМИЯ КАСЛАНА ── */}
      <Section id="academy" title="Академия Каслана" accent={accent}>
        <Prose>
          {d.academy.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Притча о стали" accent={accent}>
          <Parable accent={accent}>{d.academy.steelParable}</Parable>
        </SubSection>

        <SubSection title="День Расставания" accent={accent}>
          <Prose>
            {d.academy.dayOfParting.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Комплекс Академии" accent={accent}>
          <div className="flex flex-wrap gap-2 mt-2">
            {d.academy.complex.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs rounded-sm"
                style={{ background: `${accent}0C`, border: `1px solid ${accent}22`, color: 'rgb(68,64,60)', fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}
              >
                {item}
              </span>
            ))}
          </div>
        </SubSection>

        <SubSection title="Программа обучения" accent={accent}>
          <Prose>
            {d.academy.curriculum.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
          <div className="flex flex-wrap gap-2 mt-4">
            {d.academy.subjects.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-xs rounded-sm"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(212,175,55,0.18)', color: 'rgb(87,83,78)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </SubSection>

        <SubSection title="Развитие Ауры" accent={accent}>
          <Prose>
            {d.academy.aura.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Испытание Совершеннолетия" accent={accent}>
          <Prose>
            {d.academy.trial.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Наставники" accent={accent}>
          <Prose>
            {d.academy.mentors.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>
      </Section>

      <SectionDivider accentColor={accent} label="ДВА ПУТИ" />

      {/* ── 4. ДВА ПУТИ АРТУРА ── */}
      <Section id="two-paths" title="Два пути Артура" accent={accent}>
        <Prose>
          {d.twoPaths.origin.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        {/* White Mantis */}
        <div className="mt-10 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 rounded-sm"
            style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: "url('/images/mantis-bg.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid rgba(212,175,55,0.40)',
              boxShadow: '0 0 0 1px rgba(212,175,55,0.18), 0 0 24px 8px rgba(212,175,55,0.26), 0 0 64px 20px rgba(212,175,55,0.11)',
            }}
          >
            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(105deg, rgba(255,252,238,0.78) 0%, rgba(255,252,238,0.68) 52%, rgba(255,252,238,0.28) 100%)',
            }} />
            {/* Gold fireflies */}
            <Fireflies sparks={MANTIS_SPARKS} color="rgba(212,175,55,0.95)" />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 3 }}>
              <p
                className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-4"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}
              >
                БЕЛЫЙ МАНТИС — ОТКРЫТЫЙ ПУТЬ
              </p>
              <Prose>
                {d.twoPaths.whiteMantis.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
              </Prose>
              <BlockQuote text={d.twoPaths.whiteMantis.quote} accent={accent} />
              <div className="mt-4 space-y-3">
                {d.twoPaths.whiteMantis.principles.map((pr) => (
                  <div key={pr.name} className="flex gap-3">
                    <span className="w-1 h-1 rounded-full mt-2.5 shrink-0" style={{ background: accent }} />
                    <div>
                      <span className="font-cinzel text-xs font-semibold" style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}>
                        {pr.name}
                      </span>
                      <span className="text-stone-500 text-sm"> — {pr.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="font-cinzel text-[0.6rem] tracking-[0.2em] text-stone-400 mr-1" style={{ fontFamily: 'var(--font-cinzel, serif)' }}>
                  ЗАПРЕЩЕНО:
                </span>
                {d.twoPaths.whiteMantis.forbidden.map((f) => (
                  <span key={f} className="px-2.5 py-1 text-xs rounded-sm text-stone-500" style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.18)' }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Black Moth */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 p-6 rounded-sm"
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: "url('/images/moth-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            border: '1px solid rgba(0,195,215,0.38)',
            boxShadow: '0 0 0 1px rgba(0,195,215,0.16), 0 0 24px 8px rgba(0,195,215,0.22), 0 0 64px 20px rgba(0,175,200,0.09)',
          }}
        >
          {/* Overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(105deg, rgba(8,12,24,0.72) 0%, rgba(8,12,24,0.60) 52%, rgba(8,12,24,0.22) 100%)',
          }} />
          {/* Teal fireflies */}
          <Fireflies sparks={MOTH_SPARKS} color="rgba(0,200,220,0.95)" />
          {/* Content — light text for dark background */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <p
              className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: '#C8EEFF' }}
            >
              ЧЁРНАЯ МОЛЬ — СКРЫТЫЙ ПУТЬ
            </p>
            <div className="mb-4">
              {d.twoPaths.blackMoth.description.split('\n\n').map((p, i) => (
                <p key={i} style={{ color: 'rgba(215,208,195,0.90)', fontFamily: 'Georgia, serif', fontSize: '1rem', lineHeight: '1.9', marginBottom: '1rem' }}>{p}</p>
              ))}
            </div>
            <div className="mb-4">
              {d.twoPaths.blackMoth.notAssassins.split('\n\n').map((p, i) => (
                <p key={i} style={{ color: 'rgba(215,208,195,0.90)', fontFamily: 'Georgia, serif', fontSize: '1rem', lineHeight: '1.9', marginBottom: '1rem' }}>{p}</p>
              ))}
            </div>
            <p className="font-cinzel text-[0.6rem] tracking-[0.2em] mb-3" style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.85)' }}>
              ДИСЦИПЛИНЫ
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {d.twoPaths.blackMoth.disciplines.map((disc) => (
                <span
                  key={disc}
                  className="px-3 py-1.5 text-xs rounded-sm"
                  style={{ background: 'rgba(40,28,4,0.65)', border: '1px solid rgba(212,175,55,0.55)', color: '#D4AF37' }}
                >
                  {disc}
                </span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="my-2 p-6 rounded-sm"
              style={{
                background: 'rgba(40,28,4,0.65)',
                border: '1px solid rgba(212,175,55,0.50)',
                boxShadow: '0 0 0 1px rgba(212,175,55,0.08), 0 0 14px 3px rgba(212,175,55,0.10), 0 0 30px 8px rgba(212,175,55,0.05)',
              }}
            >
              <p
                className="font-cinzel font-semibold text-[0.65rem] tracking-[0.32em] mb-5"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.90)' }}
              >
                ✦ ЛЕГЕНДА ✦
              </p>
              <div
                className="leading-9 whitespace-pre-line italic"
                style={{ fontFamily: 'Georgia, serif', fontSize: '0.97rem', color: 'rgba(212,175,55,0.85)', letterSpacing: '0.01em' }}
              >
                {d.twoPaths.blackMoth.legend}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <InfoCard accent={accent}>
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.25em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}
          >
            ЕДИНСТВО ДВУХ ПУТЕЙ
          </p>
          <Prose>
            {d.twoPaths.unity.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </InfoCard>

        <SubSection title="Зал Наследия" accent={accent}>
          <Prose>
            {d.twoPaths.ceremony.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>
      </Section>

      <Quote text={d.quotes[4].text} attribution={d.quotes[4].attribution} accentColor={accent} />
      <Quote text={d.quotes[5].text} attribution={d.quotes[5].attribution} accentColor={MOTH_BLUE} />

      <SectionDivider accentColor={accent} label="РАНГИ" />

      {/* ── 5. РАНГИ И ПУТЬ МЕЧНИКА ── */}
      <Section id="ranks" title="Ранги и путь мечника" accent={accent}>
        <Prose>
          {d.ranks.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Общие ранги (I–IV)" accent={accent}>
          <div className="space-y-3 mt-2">
            {d.ranks.common.map((r, i) => (
              <RankRow key={r.name} number={r.number} name={r.name} description={r.description} accent={accent} delay={i * 0.06} />
            ))}
          </div>
        </SubSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* White Mantis Ranks */}
          <div>
            <p
              className="font-cinzel text-[0.62rem] tracking-[0.25em] mb-4"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}
            >
              БЕЛЫЙ МАНТИС (V–IX)
            </p>
            <div className="space-y-3">
              {d.ranks.whiteMantisRanks.map((r, i) => (
                <RankRow key={r.name} number={r.number} name={r.name} description={r.description} accent={accent} apex={'apex' in r && r.apex} delay={i * 0.06} />
              ))}
            </div>
          </div>

          {/* Black Moth Ranks */}
          <div>
            <p
              className="font-cinzel text-[0.62rem] tracking-[0.25em] mb-4"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: MOTH_BLUE }}
            >
              ЧЁРНАЯ МОЛЬ (V–IX)
            </p>
            <div className="space-y-3">
              {d.ranks.blackMothRanks.map((r, i) => (
                <RankRow key={r.name} number={r.number} name={r.name} description={r.description} accent={MOTH_BLUE} apex={'apex' in r && r.apex} delay={i * 0.06} />
              ))}
            </div>
          </div>
        </div>

        <InfoCard accent={accent}>
          <p className="font-cinzel text-[0.6rem] tracking-[0.25em] mb-3" style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}>
            ДЕВЯТЫЙ РАНГ
          </p>
          <Prose>
            {d.ranks.ninthRank.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </InfoCard>
      </Section>

      <SectionDivider accentColor={accent} label="ЗЕМЛИ" />

      {/* ── 6. ЗЕМЛИ И ЦИТАДЕЛЬ ── */}
      <Section id="lands" title="Земли и Цитадель" accent={accent}>
        <Prose>
          {d.lands.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Цитадель Каслана" accent={accent}>
          <Prose>
            <p>{d.lands.citadel}</p>
          </Prose>
        </SubSection>

        <SubSection title="Ключевые места" accent={accent}>
          <div className="space-y-4 mt-2">
            {d.lands.locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-sm"
                style={{ background: `linear-gradient(135deg, ${accent}06, transparent)`, border: `1px solid ${accent}16` }}
              >
                <h4 className="font-cinzel font-semibold text-stone-900 mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  {loc.name}
                </h4>
                <p className="text-stone-500 text-sm leading-6 mb-2">{loc.description}</p>
                {loc.inscription && (
                  <p className="text-stone-400 text-xs italic mt-3 pt-3 border-t" style={{ borderColor: `${accent}18`, fontFamily: 'Georgia, serif' }}>
                    {loc.inscription}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </SubSection>

        <SubSection title="Население" accent={accent}>
          <Prose>
            {d.lands.population.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Приюты" accent={accent}>
          <Prose>
            <p>{d.lands.orphanages}</p>
          </Prose>
        </SubSection>
      </Section>

      <SectionDivider accentColor={accent} label="ТРАДИЦИИ" />

      {/* ── 7. КУЛЬТУРА И ТРАДИЦИИ ── */}
      <Section id="traditions" title="Культура и традиции" accent={accent}>
        <Prose>
          {d.traditions.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <div className="space-y-4 mt-6">
          {d.traditions.list.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="flex gap-5 p-5 rounded-sm"
              style={{ background: 'rgba(255,255,255,0.68)', border: `1px solid ${accent}14`, backdropFilter: 'blur(10px)' }}
            >
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm font-cinzel font-bold text-xs"
                style={{ fontFamily: 'var(--font-cinzel, serif)', background: `${accent}14`, border: `1px solid ${accent}35`, color: accent }}
              >
                {i + 1}
              </div>
              <div>
                <p className="font-cinzel font-semibold text-stone-900 text-sm mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}>
                  {t.name}
                </p>
                <p className="text-stone-500 text-sm leading-6">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <InfoCard accent={accent}>
          <p className="font-cinzel text-[0.6rem] tracking-[0.25em] mb-3" style={{ fontFamily: 'var(--font-cinzel, serif)', color: accent }}>
            ЧУЖИЕ ИМЕНА
          </p>
          <Prose>
            <p>{d.traditions.outsiders}</p>
          </Prose>
        </InfoCard>
      </Section>

      <Quote text={d.quotes[3].text} attribution={d.quotes[3].attribution} accentColor={accent} />

      <SectionDivider accentColor={accent} label="АРМИЯ" />

      {/* ── 8. ВОЕННАЯ ОРГАНИЗАЦИЯ ── */}
      <Section id="military" title="Военная организация" accent={accent}>
        <Prose>
          {d.military.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Состав сил" accent={accent}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {d.military.categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-sm"
                style={{ background: 'rgba(255,255,255,0.68)', border: `1px solid ${accent}14`, backdropFilter: 'blur(10px)' }}
              >
                <h4 className="font-cinzel font-semibold text-stone-900 mb-2" style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.85rem', color: accent, letterSpacing: '0.05em' }}>
                  {cat.name}
                </h4>
                <p className="text-stone-500 text-sm leading-6">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </SubSection>

        <SubSection title="Оружие и Аура" accent={accent}>
          <Prose>
            {d.military.weapons.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
          <Prose>
            {d.military.aura.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Союз со Светозарным Орденом" accent={accent}>
          <Prose>
            {d.military.alliance.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <BlockQuote text={d.military.warrior.split('\n\n').at(-1) ?? ''} accent={accent} />
      </Section>

      <Quote text={d.quotes[6].text} attribution={d.quotes[6].attribution} accentColor={accent} />

      <SectionDivider accentColor={accent} label="ЦЕНА СВЕТА" />

      {/* ── 9. ЦЕНА СВЕТА ── */}
      <Section id="cost" title="Цена Света" accent={accent}>
        <Prose>
          {d.costOfLight.intro.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </Prose>

        <SubSection title="Детство" accent={accent}>
          <Prose>
            <p>{d.costOfLight.childhood}</p>
          </Prose>
        </SubSection>

        <SubSection title="Бремя имени" accent={accent}>
          <Prose>
            {d.costOfLight.burden.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </SubSection>

        <SubSection title="Выбор пути" accent={accent}>
          <Prose>
            <p>{d.costOfLight.choice}</p>
          </Prose>
        </SubSection>

        <SubSection title="Семья после Академии" accent={accent}>
          <Prose>
            <p>{d.costOfLight.familyLife}</p>
          </Prose>
        </SubSection>

        <SubSection title="Бремя Главы" accent={accent}>
          <Prose>
            {d.costOfLight.leaderBurden.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
          <BlockQuote text="Если ты хочешь быть главой — ещё не время. Если ты боишься им стать — возможно, именно ты и готов." accent={accent} />
        </SubSection>

        <SubSection title="Одиночество на вершине" accent={accent}>
          <Prose>
            <p>{d.costOfLight.loneliness}</p>
          </Prose>
        </SubSection>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-10 p-8 rounded-sm text-center"
          style={{ background: `linear-gradient(135deg, ${accent}0A, transparent)`, border: `1px solid ${accent}25` }}
        >
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-5"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${accent}70` }}
          >
            САМЫЕ СТРАШНЫЕ СЛОВА В АКАДЕМИИ
          </p>
          <p
            className="text-xl lg:text-2xl font-cinzel font-bold text-stone-900 leading-relaxed"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.04em' }}
          >
            {d.costOfLight.fearfulPhrase.split('\n\n').find((p) => p.includes('недостойно'))}
          </p>
        </motion.div>

        <Prose>
          {d.costOfLight.fearfulPhrase.split('\n\n').filter((p) => !p.includes('недостойно')).map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Section>

      <Quote text={d.quotes[9].text} attribution={d.quotes[9].attribution} accentColor={accent} />

      <SectionDivider accentColor={accent} label="ГАЛЕРЕЯ" />

      {/* ── 10. ГАЛЕРЕЯ ── */}
      <Section id="gallery" title="Галерея" accent={accent}>
        <Gallery items={d.gallery} accentColor={accent} />
      </Section>

    </div>
  )
}
