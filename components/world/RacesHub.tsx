'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'
import { races, lockedRaces, type RaceOption } from '@/data/races'

// ── Анимации ──────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const fastContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

// ── Полная карточка расы со статьёй ───────────────────────────────────────────
function RaceCard({ race }: { race: RaceOption & { href: string; traits: string[] } }) {
  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Link href={race.href} className="block h-full">
        <div
          className="relative h-full min-h-[380px] overflow-hidden rounded-sm cursor-pointer"
          style={{ boxShadow: `0 4px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${race.gradient}`} />
          <div className="absolute inset-0 overflow-hidden">
            <ParticleField count={16} r={race.particleR} g={race.particleG} b={race.particleB} className="z-0" />
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${race.glowBg} 0%, transparent 70%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 45% at 50% -10%, ${race.accent}25 0%, transparent 60%)` }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 0 1px ${race.accent}45` }}
          />

          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-cinzel text-[0.52rem] tracking-[0.24em] px-2.5 py-1"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: race.accent, border: `1px solid ${race.accent}50`, background: `${race.accent}15` }}
                >
                  {race.tag}
                </span>
              </div>
              <p className="font-cinzel text-[0.54rem] tracking-[0.2em] mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}80` }}>
                {race.category.toUpperCase()}
              </p>
              <h2
                className="font-cinzel font-bold text-white mb-3 leading-none"
                style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', textShadow: `0 0 60px ${race.accent}40`, letterSpacing: '0.06em' }}
              >
                {race.title}
              </h2>
              <div className="h-px w-10 mb-3" style={{ background: `linear-gradient(90deg, ${race.accent}70, transparent)` }} />
              <p className="text-stone-300/65 leading-6 text-[0.82rem]">{race.description}</p>
            </div>

            <div>
              <p className="font-cinzel text-[0.56rem] tracking-[0.24em] mb-2.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}70` }}>
                ОСОБЕННОСТИ
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {race.traits.map((trait) => (
                  <span key={trait} className="text-[0.62rem] px-2 py-0.5 rounded-sm" style={{ color: 'rgba(200,210,230,0.70)', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.08)` }}>
                    {trait}
                  </span>
                ))}
              </div>
              <div
                className="flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.15em] transition-all duration-300 group-hover:gap-3"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: race.accent }}
              >
                ЧИТАТЬ СТАТЬЮ
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Заблокированная карточка (не проработана) ────────────────────────────────
function LockedRaceCard({ race }: { race: (typeof lockedRaces)[0] }) {
  return (
    <motion.div variants={itemVariants}>
      <div
        className="relative overflow-hidden rounded-sm"
        style={{
          background: 'rgba(6,5,10,0.97)',
          border: `1px solid ${race.accent}18`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.02)`,
          opacity: 0.70,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${race.accent}12 0%, transparent 60%)` }}
        />

        <div className="relative z-10 p-6">
          {/* Tag */}
          <div className="mb-4">
            <span
              className="font-cinzel text-[0.50rem] tracking-[0.24em] px-2.5 py-1"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}70`, border: `1px solid ${race.accent}28`, background: `${race.accent}0A` }}
            >
              {race.tag}
            </span>
          </div>

          <p className="font-cinzel text-[0.50rem] tracking-[0.2em] mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}50` }}>
            РАЗУМНАЯ РАСА
          </p>

          {/* Название — чётко видно */}
          <h3
            className="font-cinzel font-bold text-white mb-3 leading-none"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)', textShadow: `0 0 30px ${race.accent}25`, letterSpacing: '0.06em' }}
          >
            {race.title}
          </h3>

          <div className="h-px w-10 mb-4" style={{ background: `linear-gradient(90deg, ${race.accent}40, transparent)` }} />

          {/* Размытое содержимое + замок */}
          <div className="relative">
            <div style={{ filter: 'blur(4px)', userSelect: 'none', pointerEvents: 'none' }}>
              <p className="text-stone-500/40 text-sm leading-6 mb-3">
                Информация о данном народе не проработана и находится в разработке авторов мира.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['░░░░░', '░░░░', '░░░░░░', '░░░'].map((t, i) => (
                  <span key={i} className="text-[0.6rem] px-2 py-0.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: 'rgba(120,110,130,0.20)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Замок + статус */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
              <Lock size={13} style={{ color: `${race.accent}65` }} />
              <span
                className="font-cinzel text-[0.55rem] tracking-[0.28em]"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}65` }}
              >
                В РАЗРАБОТКЕ
              </span>
              {race.note && (
                <span
                  className="font-cinzel text-[0.48rem] tracking-[0.16em] italic mt-0.5"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}50` }}
                >
                  {race.note}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Главный компонент ─────────────────────────────────────────────────────────
export default function RacesHub() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 20% 20%, rgba(245,158,11,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 55% 50% at 80% 30%, rgba(168,85,247,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 45% 45% at 45% 70%, rgba(96,165,250,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #050305 0%, #080510 40%, #050408 100%)
          `,
        }}
      >
        <ParticleField count={55} r={140} g={120} b={200} className="z-0" />
        <LightRays rayCount={8} color="rgba(160, 130, 230" originY={0} widthScale={2.2} className="z-0" />

        <div
          className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #050305 0%, #050305B3 25%, transparent 100%)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-14"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(180,160,230,0.60)' }}
          >
            РАСЫ МИРА
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', textShadow: '0 0 80px rgba(160,120,230,0.30)' }}
          >
            Народы Калдериса
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-stone-400/70 text-base lg:text-lg max-w-xl leading-8 font-light"
          >
            Десятки рас делят мир Калдериса — от подземных городов Дроу до вечных льдов севера. У каждого народа своя история, своя кровь, своя цена.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Открытые архивы (готовые статьи) ── */}
      <div style={{ background: 'rgb(246 245 250)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-5 mb-4">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.5))' }} />
              <span className="font-cinzel text-[0.62rem] tracking-[0.35em] text-stone-500" style={{ fontFamily: 'var(--font-cinzel, serif)' }}>
                ОТКРЫТЫЕ АРХИВЫ
              </span>
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(96,165,250,0.5))' }} />
            </div>
            <h2 className="font-cinzel text-2xl lg:text-3xl font-bold text-stone-800" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}>
              Народы с готовыми статьями
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {races.map((race) => (
              <RaceCard key={race.id} race={race as RaceOption & { href: string; traits: string[] }} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Тёмный блок: статьи готовятся + заблокированные ── */}
      <div style={{ background: 'linear-gradient(180deg, #050305 0%, #080510 60%, #050408 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20 space-y-20">

          {/* Не проработанные расы */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-5 mb-4">
                <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(120,110,140,0.35))' }} />
                <span className="font-cinzel text-[0.62rem] tracking-[0.35em]" style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(120,110,140,0.55)' }}>
                  ЗАСЕКРЕЧЕННЫЕ АРХИВЫ
                </span>
                <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(120,110,140,0.35))' }} />
              </div>
              <h2 className="font-cinzel text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em', color: 'rgba(180,170,200,0.55)' }}>
                Народы в разработке
              </h2>
              <p className="text-stone-600/70 text-sm mt-3 max-w-md mx-auto">
                Информация об этих народах ещё не проработана авторами мира.
              </p>
            </motion.div>

            <motion.div
              variants={fastContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {lockedRaces.map((race) => (
                <LockedRaceCard key={race.id} race={race} />
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center text-stone-700 text-xs font-cinzel tracking-widest"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            АРХИВ ПОПОЛНЯЕТСЯ — ИСТОРИЯ ПРОДОЛЖАЕТСЯ
          </motion.p>

        </div>
      </div>
    </div>
  )
}
