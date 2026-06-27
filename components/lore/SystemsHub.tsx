'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'

const systems = [
  {
    id: 'aura',
    href: '/lore/systems/aura',
    title: 'Аура',
    category: 'Система силы',
    tag: 'ВНУТРЕННЯЯ ЭНЕРГИЯ',
    description:
      'Жизненная сила, рождаемая душой и хранимая в Ядре. Путь воина, рыцаря и бойца ближнего боя. Никаких заклинаний — только воля, тело и абсолютная самоотдача.',
    accent: '#38BDF8',
    gradient: 'from-sky-950/95 via-slate-900/90 to-stone-950/95',
    glowBg: 'rgba(56,189,248,0.22)',
    particleR: 56, particleG: 189, particleB: 248,
    ranks: ['Пользователь', 'Воин', 'Мастер', 'Грандмастер', 'Прайм'],
  },
  {
    id: 'magic',
    href: '/lore/systems/magic',
    title: 'Магия',
    category: 'Система силы',
    tag: 'ВНЕШНЯЯ ЭНЕРГИЯ',
    description:
      'Феномен Калдериса. Мана пронизывает каждое существо. Три пути — Тёмный, Светлый, Серый. Домены без предела. Знание — это власть, а секреты стоят дороже жизни.',
    accent: '#A78BFA',
    gradient: 'from-violet-950/95 via-purple-950/90 to-stone-950/95',
    glowBg: 'rgba(167,139,250,0.22)',
    particleR: 167, particleG: 139, particleB: 250,
    ranks: ['Ученик', 'Адепт', 'Колдун', 'Чародей', 'Архимаг'],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

function SystemCard({ sys }: { sys: (typeof systems)[0] }) {
  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Link href={sys.href} className="block h-full">
        <div
          className="relative h-full min-h-[520px] overflow-hidden rounded-sm cursor-pointer"
          style={{ boxShadow: `0 4px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)` }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${sys.gradient}`} />

          {/* Particle effect */}
          <div className="absolute inset-0 overflow-hidden">
            <ParticleField
              count={35}
              r={sys.particleR}
              g={sys.particleG}
              b={sys.particleB}
              className="z-0"
            />
          </div>

          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${sys.glowBg} 0%, transparent 70%)`,
            }}
          />

          {/* Top glow — always subtle */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 45% at 50% -10%, ${sys.accent}25 0%, transparent 60%)`,
            }}
          />

          {/* Animated border on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 0 1px ${sys.accent}45` }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <span
                  className="font-cinzel text-[0.58rem] tracking-[0.3em] px-3 py-1"
                  style={{
                    fontFamily: 'var(--font-cinzel, serif)',
                    color: sys.accent,
                    border: `1px solid ${sys.accent}50`,
                    background: `${sys.accent}15`,
                  }}
                >
                  {sys.tag}
                </span>
              </motion.div>

              {/* Category */}
              <p
                className="font-cinzel text-[0.62rem] tracking-[0.22em] mb-2"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${sys.accent}80` }}
              >
                {sys.category.toUpperCase()}
              </p>

              {/* Title */}
              <h2
                className="font-cinzel font-bold text-white mb-4 leading-none"
                style={{
                  fontFamily: 'var(--font-cinzel, serif)',
                  fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                  textShadow: `0 0 60px ${sys.accent}40`,
                  letterSpacing: '0.06em',
                }}
              >
                {sys.title}
              </h2>

              {/* Divider line */}
              <div
                className="h-px w-16 mb-5"
                style={{ background: `linear-gradient(90deg, ${sys.accent}70, transparent)` }}
              />

              {/* Description */}
              <p className="text-stone-300/70 leading-7 text-sm max-w-sm">
                {sys.description}
              </p>
            </div>

            {/* Ranks preview */}
            <div>
              <p
                className="font-cinzel text-[0.58rem] tracking-[0.25em] mb-3"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${sys.accent}70` }}
              >
                РАНГИ МАСТЕРСТВА
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {sys.ranks.map((rank, i) => (
                  <span
                    key={rank}
                    className="text-[0.65rem] px-2.5 py-1 rounded-sm"
                    style={{
                      color: i === sys.ranks.length - 1 ? sys.accent : 'rgba(200,210,230,0.70)',
                      background: i === sys.ranks.length - 1 ? `${sys.accent}15` : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${i === sys.ranks.length - 1 ? `${sys.accent}40` : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    {rank}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-2 font-cinzel text-[0.68rem] tracking-[0.15em] transition-all duration-300 group-hover:gap-3"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: sys.accent }}
              >
                ЧИТАТЬ СТАТЬЮ
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function SystemsHub() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 30% 20%, rgba(56,189,248,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 70% 30%, rgba(167,139,250,0.18) 0%, transparent 55%),
            linear-gradient(180deg, #030610 0%, #060A18 40%, #040510 100%)
          `,
        }}
      >
        <ParticleField count={50} r={120} g={130} b={200} className="z-0" />
        <LightRays rayCount={10} color="rgba(140, 120, 220" originY={0} widthScale={2.0} className="z-0" />

        {/* Dual glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute"
            style={{
              left: '15%', top: '10%', width: '40%', height: '60%',
              background: 'radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute"
            style={{
              right: '10%', top: '5%', width: '40%', height: '65%',
              background: 'radial-gradient(ellipse, rgba(167,139,250,0.12) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #030610 0%, #030610B3 25%, transparent 100%)' }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {['АУРА', 'МАГИЯ'].map((tag, i) => (
              <span
                key={tag}
                className="font-cinzel text-[0.58rem] tracking-[0.28em] px-3 py-1"
                style={{
                  fontFamily: 'var(--font-cinzel, serif)',
                  color: i === 0 ? '#38BDF8' : '#A78BFA',
                  background: i === 0 ? 'rgba(56,189,248,0.12)' : 'rgba(167,139,250,0.12)',
                  border: `1px solid ${i === 0 ? 'rgba(56,189,248,0.4)' : 'rgba(167,139,250,0.4)'}`,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(160,150,220,0.65)' }}
          >
            СИСТЕМЫ СИЛЫ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-4"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              textShadow: '0 0 80px rgba(140,120,220,0.35)',
            }}
          >
            Два Пути Силы
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-stone-400/70 text-base lg:text-lg max-w-xl leading-8 font-light"
          >
            Аура и Магия — фундаментальные системы сил мира Калдерис. Противоположные по природе, несовместимые по сути.
          </motion.p>
        </motion.div>
      </div>

      {/* Cards */}
      <div
        className="min-h-screen"
        style={{ background: 'rgb(245 245 250)' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-5 mb-4">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.55))' }} />
              <span
                className="font-cinzel text-[0.62rem] tracking-[0.35em] text-stone-500"
                style={{ fontFamily: 'var(--font-cinzel, serif)' }}
              >
                ВЫБЕРИТЕ ПУТЬ
              </span>
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(167,139,250,0.55))' }} />
            </div>
            <h2
              className="font-cinzel text-2xl lg:text-3xl font-bold text-stone-800"
              style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}
            >
              Системы Мира
            </h2>
          </motion.div>

          {/* Equal cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {systems.map((sys) => (
              <SystemCard key={sys.id} sys={sys} />
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-10 text-stone-400 text-xs font-cinzel tracking-widest"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            АУРА И МАГИЯ НЕСОВМЕСТИМЫ — ОДИН ПУТЬ НА ВСЮ ЖИЗНЬ
          </motion.p>
        </div>
      </div>
    </div>
  )
}
