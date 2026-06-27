'use client'

import { motion } from 'framer-motion'
import Timeline from '@/components/lore/Timeline'
import Quote from '@/components/lore/Quote'
import SectionDivider from '@/components/lore/SectionDivider'
import { worldHistoryData } from '@/data/world-history'

const ACCENT = '#C9A84C'

type Data = typeof worldHistoryData

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

function GodGrid({ gods, label }: { gods: { name: string; domain: string }[]; label: string }) {
  return (
    <div className="mb-6">
      <p
        className="font-cinzel text-[0.6rem] tracking-[0.28em] mb-3"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${ACCENT}90` }}
      >
        {label}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {gods.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="px-3 py-2.5 rounded-sm"
            style={{ background: `${ACCENT}07`, border: `1px solid ${ACCENT}1A` }}
          >
            <p className="font-cinzel font-semibold text-[0.7rem]" style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT, letterSpacing: '0.04em' }}>
              {g.name}
            </p>
            <p className="text-stone-500 text-[0.68rem] leading-4 mt-0.5">{g.domain}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function HighlightBox({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-6 p-6 rounded-sm"
      style={{
        background: `${ACCENT}0A`,
        border: `1px solid ${ACCENT}30`,
        boxShadow: `0 0 0 1px ${ACCENT}08, 0 0 24px 6px ${ACCENT}0C`,
      }}
    >
      <p
        className="font-cinzel text-[0.6rem] tracking-[0.32em] mb-4"
        style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
      >
        ✦ {label} ✦
      </p>
      {children}
    </motion.div>
  )
}

function ProgenitorTable({ list }: { list: { name: string; role: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
      {list.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="flex items-start gap-3 px-4 py-3 rounded-sm"
          style={{ background: 'rgba(255,255,255,0.65)', border: `1px solid ${ACCENT}14`, backdropFilter: 'blur(8px)' }}
        >
          <span
            className="shrink-0 w-6 h-6 flex items-center justify-center rounded-sm font-cinzel font-bold text-[0.6rem]"
            style={{ background: `${ACCENT}14`, border: `1px solid ${ACCENT}30`, color: ACCENT, fontFamily: 'var(--font-cinzel, serif)' }}
          >
            {i + 1}
          </span>
          <div>
            <p className="font-cinzel font-semibold text-stone-900 text-xs" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}>
              {p.name}
            </p>
            <p className="text-stone-400 text-[0.68rem] mt-0.5">{p.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function WorldHistoryBody({ data }: { data: Data }) {
  return (
    <div className="col-span-12 lg:col-span-8 space-y-0">

      {/* ── 1. В НАЧАЛЕ БЫЛО НИЧТО ── */}
      <Section id="creation" title="В начале было Ничто">
        <Prose>
          <p>{data.creation.void}</p>
        </Prose>

        <HighlightBox label="ПРАРОДИТЕЛИ">
          <p className="text-stone-700 leading-8 italic" style={{ fontFamily: 'Georgia, serif', fontSize: '0.97rem' }}>
            {data.creation.progenitors}
          </p>
        </HighlightBox>

        <Prose delay={0.05}>
          <p>{data.creation.firstBeings}</p>
          <p>{data.creation.expansion}</p>
          <p>{data.creation.lesserGods}</p>
        </Prose>

        <div className="mt-8 space-y-6">
          <GodGrid gods={data.creation.godsListDark} label="ТЁМНЫЕ БОГИ" />
          <GodGrid gods={data.creation.godsListLight} label="СВЕТЛЫЕ БОГИ" />
          <GodGrid gods={data.creation.elementals} label="ДРЕВНИЕ ЭЛЕМЕНТАЛИ" />
        </div>
      </Section>

      <Quote text={data.quotes[0].text} attribution={data.quotes[0].attribution} accentColor={ACCENT} />

      <SectionDivider accentColor={ACCENT} label="ВОЙНЫ НЕБЕС" />

      {/* ── 2. БОГИ И ВОЙНЫ НЕБЕС ── */}
      <Section id="gods" title="Боги и Войны Небес">
        <Prose>
          <p>{data.heavenlyWars.spark}</p>
        </Prose>

        <HighlightBox label="ЗАГОВОР МЕЙЛИАННЫ">
          <div className="space-y-3">
            {[data.heavenlyWars.conspiracy, data.heavenlyWars.lockharis, data.heavenlyWars.xairon].map((txt, i) => (
              <p key={i} className="text-stone-700 leading-8" style={{ fontFamily: 'Georgia, serif', fontSize: '0.95rem' }}>
                {txt}
              </p>
            ))}
          </div>
        </HighlightBox>

        <Prose delay={0.05}>
          <p>{data.heavenlyWars.seraliya}</p>
          <p>{data.heavenlyWars.aftermath}</p>
        </Prose>
      </Section>

      <Quote text={data.quotes[1].text} attribution={data.quotes[1].attribution} accentColor={ACCENT} />

      <SectionDivider accentColor={ACCENT} label="РОЖДЕНИЕ ЖИЗНИ" />

      {/* ── 3. РОЖДЕНИЕ ЖИЗНИ НА КАЛДЕРИСЕ ── */}
      <Section id="life" title="Рождение жизни на Калдерисе">
        <Prose>
          <p>{data.life.firstLife}</p>
          <p>{data.life.ancients}</p>
          <p>{data.life.youngerRaces}</p>
        </Prose>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-6 p-5 rounded-sm"
          style={{ background: 'rgba(180,30,30,0.04)', border: '1px solid rgba(180,30,30,0.14)' }}
        >
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.28em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(180,30,30,0.7)' }}
          >
            РАСКОЛ ДРЕВНИХ
          </p>
          <p className="text-stone-600 leading-8" style={{ fontFamily: 'Georgia, serif', fontSize: '0.97rem' }}>
            {data.life.split}
          </p>
        </motion.div>
      </Section>

      <SectionDivider accentColor={ACCENT} label="ВУЛЬФЕНЫ" />

      {/* ── 4. ВУЛЬФЕНЫ И АУЛ'ВЕРАНИЯ ── */}
      <Section id="vulfens" title="Вульфены и Аул'Верания">
        <Prose>
          <p>{data.vulfens.prayer}</p>
          <p>{data.vulfens.gifts}</p>
        </Prose>

        <div className="mt-6 mb-6">
          <p
            className="font-cinzel text-[0.62rem] tracking-[0.25em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: ACCENT }}
          >
            ДВЕНАДЦАТЬ РОДОНАЧАЛЬНИКОВ
          </p>
          <ProgenitorTable list={data.vulfens.progenitors} />
        </div>

        <HighlightBox label="ОСВОБОЖДЕНИЕ И ОСНОВАНИЕ ФЕНРИДИИ">
          <div className="space-y-3">
            {[data.vulfens.liberation, data.vulfens.empire].map((txt, i) => (
              <p key={i} className="text-stone-700 leading-8" style={{ fontFamily: 'Georgia, serif', fontSize: '0.97rem' }}>
                {txt}
              </p>
            ))}
          </div>
        </HighlightBox>
      </Section>

      <Quote text={data.quotes[2].text} attribution={data.quotes[2].attribution} accentColor={ACCENT} />

      <SectionDivider accentColor={ACCENT} label="ХРОНИКА" />

      {/* ── 5. ХРОНИКА ЭПОХ ── */}
      <Section id="chronicle" title="Хроника эпох">
        <Prose>
          <p>
            Ниже — ключевые вехи истории Калдериса от появления первых существ до наших дней.
            Каждая запись — отзвук событий, изменивших судьбы рас и богов.
          </p>
        </Prose>

        <div className="mt-10">
          <Timeline events={data.timeline} accentColor={ACCENT} />
        </div>
      </Section>

      <Quote text={data.quotes[3].text} attribution={data.quotes[3].attribution} accentColor={ACCENT} />

    </div>
  )
}
