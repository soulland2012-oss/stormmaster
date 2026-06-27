'use client'

import { motion } from 'framer-motion'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'
import { calendarData } from '@/data/calendar'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const SPARKS = [
  { left: '8%',  top: '72%', delay: 0,   dur: 3.1 },
  { left: '23%', top: '82%', delay: 1.3, dur: 2.8 },
  { left: '55%', top: '76%', delay: 0.6, dur: 3.4 },
  { left: '78%', top: '68%', delay: 1.9, dur: 2.6 },
  { left: '91%', top: '80%', delay: 0.9, dur: 3.0 },
]

function Fireflies({ color }: { color: string }) {
  return (
    <>
      {SPARKS.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', left: s.left, top: s.top,
            width: '3px', height: '3px', borderRadius: '50%',
            background: color, boxShadow: `0 0 5px 2px ${color}`,
            pointerEvents: 'none', zIndex: 2,
          }}
          animate={{ y: [0, -50, -110], x: [0, 6, -4], opacity: [0, 0.9, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}
const LAV   = '#A78BFA'
const LAV_R = 167
const LAV_G = 139
const LAV_B = 250

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
}

type Month = typeof calendarData.months[0]

function MonthCard({ month, index }: { month: Month; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-sm overflow-hidden"
      style={{
        background: 'rgba(167,139,250,0.07)',
        border: '1px solid rgba(167,139,250,0.32)',
        boxShadow: '0 0 0 1px rgba(167,139,250,0.18), 0 0 24px 8px rgba(167,139,250,0.26), 0 0 64px 20px rgba(167,139,250,0.11)',
      }}
      whileHover={{
        boxShadow: '0 0 0 1px rgba(167,139,250,0.30), 0 0 24px 8px rgba(167,139,250,0.42), 0 0 64px 20px rgba(167,139,250,0.18)',
        borderColor: 'rgba(167,139,250,0.55)',
      }}
      transition={{ duration: 0.35 }}
    >
      <Fireflies color="rgba(167,139,250,0.95)" />

      {/* Ambient inner glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,139,250,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: 'radial-gradient(ellipse 90% 55% at 50% 110%, rgba(167,139,250,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 p-6 flex flex-col gap-3 h-full">
        {/* Roman numeral */}
        <span
          className="font-cinzel text-[0.6rem] tracking-[0.35em]"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(167,139,250,0.55)' }}
        >
          {ROMAN[index]}
        </span>

        {/* Kalderis month name */}
        <h3
          className="font-cinzel font-bold leading-none"
          style={{
            fontFamily: 'var(--font-cinzel, serif)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            color: LAV,
            textShadow: '0 0 22px rgba(167,139,250,0.60)',
          }}
        >
          {month.name}
        </h3>

        {/* Glowing underline */}
        <div style={{
          height: '1px',
          width: '70%',
          background: 'linear-gradient(90deg, rgba(167,139,250,0.75), transparent)',
          boxShadow: '0 0 8px 2px rgba(167,139,250,0.40)',
          marginTop: '-4px',
        }} />

        {/* Real month */}
        <p
          className="font-cinzel text-[0.58rem] tracking-[0.22em]"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(200,190,240,0.50)' }}
        >
          {month.real.toUpperCase()}
        </p>

        {/* God + domain */}
        <div>
          <p className="text-stone-100/85 text-sm font-medium leading-none">{month.god}</p>
          <p
            className="text-[0.65rem] tracking-[0.12em] mt-1.5"
            style={{ color: 'rgba(167,139,250,0.70)' }}
          >
            {month.domain}
          </p>
        </div>

        {/* Meaning */}
        <p className="text-stone-300/70 text-[0.72rem] leading-5 italic mt-auto pt-2">
          {month.meaning}
        </p>
      </div>
    </motion.div>
  )
}

export default function CalendarPage() {
  return (
    <div style={{ background: '#050A1E', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div
        className="relative h-[72vh] min-h-[520px] flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -8%, rgba(167,139,250,0.22) 0%, transparent 58%),
            radial-gradient(ellipse 50% 40% at 10% 70%, rgba(120,90,220,0.12) 0%, transparent 50%),
            linear-gradient(180deg, #020508 0%, #050A1E 50%, #050A1E 100%)
          `,
        }}
      >
        <ParticleField count={50} r={167} g={139} b={250} className="z-0" />
        <LightRays rayCount={10} color="rgba(167, 139, 250" originY={0} widthScale={2.0} className="z-0" />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #050A1E 0%, rgba(5,10,30,0.82) 30%, transparent 100%)',
          }}
        />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-14"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span
              className="font-cinzel text-[0.58rem] tracking-[0.28em] px-3 py-1"
              style={{
                fontFamily: 'var(--font-cinzel, serif)',
                color: LAV,
                background: 'rgba(167,139,250,0.12)',
                border: '1px solid rgba(167,139,250,0.40)',
              }}
            >
              МИР · STORMMASTER
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: `rgba(167,139,250,0.65)` }}
          >
            {calendarData.subtitle.toUpperCase()}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-4"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              textShadow: '0 0 80px rgba(167,139,250,0.50)',
            }}
          >
            {calendarData.title}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-5 origin-left"
          >
            <div
              className="h-px w-20"
              style={{ background: 'linear-gradient(90deg, rgba(167,139,250,0.80), transparent)' }}
            />
            <span
              className="font-cinzel text-[0.6rem] tracking-[0.3em] italic"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(167,139,250,0.70)' }}
            >
              {calendarData.tagline}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="text-stone-300/70 text-base lg:text-lg max-w-2xl leading-8 font-light"
          >
            {calendarData.heroDescription}
          </motion.p>
        </motion.div>
      </div>

      {/* ── Month Grid ── */}
      <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {calendarData.months.map((month, i) => (
            <MonthCard key={month.name} month={month} index={i} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-center mt-14 font-cinzel tracking-[0.3em] text-[0.6rem]"
          style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(200,180,120,0.35)' }}
        >
          СЧЁТ ЛЕТ В КАЛДЕРИСЕ ВЕДЁТСЯ ОТ ОСНОВАНИЯ АЛЬЯНСА
        </motion.p>
      </div>
    </div>
  )
}
