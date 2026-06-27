'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const featuredItems = [
  {
    category: 'Благородные дома',
    title: 'Дом Каслана',
    description: 'Один из древнейших и наиболее почитаемых рыцарских родов известного мира. Хранители Ауры Света и идеалов Ауриэль на протяжении тысячелетий.',
    href: '/lore/house-kaslana',
    gradient: 'from-amber-950/90 via-stone-900/80 to-stone-950/90',
    accent: '#D4AF37',
    tag: 'ГЛАВНАЯ СТАТЬЯ',
    large: true,
  },
  {
    category: 'Система магии',
    title: 'Аура и Резонанс',
    description: 'Первозданная сила, текущая через каждое живое существо. Пять ступеней мастерства и тайны Трансцендентности.',
    href: '/lore/systems/aura',
    gradient: 'from-violet-950/90 via-indigo-950/80 to-stone-950/90',
    accent: '#8B5CF6',
    tag: 'МАГИЯ',
    large: false,
  },
  {
    category: 'История',
    title: 'Эпоха Раскола',
    description: 'Когда империя пала и мир погрузился во тьму на целое поколение.',
    href: '/lore/history',
    gradient: 'from-red-950/90 via-stone-900/80 to-stone-950/90',
    accent: '#EF4444',
    tag: 'ИСТОРИЯ',
    large: false,
  },
  {
    category: 'Мир',
    title: 'Альянс',
    description: 'Шесть великих домов. Тысячелетия цивилизации. Один завет, удерживающий всё вместе.',
    href: '/world',
    gradient: 'from-sky-950/90 via-slate-900/80 to-stone-950/90',
    accent: '#0EA5E9',
    tag: 'МИР',
    large: false,
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

function FeaturedCard({ item }: { item: (typeof featuredItems)[0] }) {
  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Link href={item.href} className="block h-full">
        <div
          className="relative h-full min-h-[280px] overflow-hidden rounded-sm cursor-pointer"
          style={{ boxShadow: `0 4px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)` }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

          {/* Accent glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${item.accent}22 0%, transparent 70%)`,
            }}
          />

          {/* Animated border */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: `inset 0 0 0 1px ${item.accent}40`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-7 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-cinzel text-[0.58rem] tracking-[0.3em] px-2.5 py-1"
                  style={{
                    fontFamily: 'var(--font-cinzel, serif)',
                    color: item.accent,
                    border: `1px solid ${item.accent}50`,
                    background: `${item.accent}15`,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <p
                className="font-cinzel text-[0.62rem] tracking-[0.2em] mb-2"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${item.accent}90` }}
              >
                {item.category.toUpperCase()}
              </p>

              <h3
                className="font-cinzel font-bold text-white mb-3 leading-tight"
                style={{
                  fontFamily: 'var(--font-cinzel, serif)',
                  fontSize: item.large ? 'clamp(1.6rem, 3vw, 2.2rem)' : 'clamp(1.2rem, 2vw, 1.5rem)',
                }}
              >
                {item.title}
              </h3>

              <p className="text-stone-300/65 leading-7 text-sm">
                {item.description}
              </p>
            </div>

            <div
              className="flex items-center gap-2 mt-5 font-cinzel text-[0.65rem] tracking-[0.15em] transition-all duration-300 group-hover:gap-3"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: item.accent }}
            >
              ЧИТАТЬ ДАЛЕЕ
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function FeaturedSection() {
  const [featured, ...rest] = featuredItems

  return (
    <section className="py-28 px-6 lg:px-10 max-w-7xl 2xl:max-w-[1900px] mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-5 mb-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/55" />
          <span
            className="font-cinzel text-[0.62rem] tracking-[0.35em] text-gold-600"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            ХРОНИКИ АЛЬЯНСА
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/55" />
        </div>
        <h2
          className="font-cinzel text-3xl lg:text-4xl font-bold text-stone-900"
          style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}
        >
          Избранные статьи
        </h2>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4"
      >
        {/* Large featured */}
        <div className="lg:col-span-7">
          <FeaturedCard item={featured} />
        </div>

        {/* Right column small cards */}
        <div className="lg:col-span-5 grid grid-rows-3 gap-4">
          {rest.map((item) => (
            <FeaturedCard key={item.title} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Browse all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center mt-12"
      >
        <Link
          href="/lore"
          className="inline-flex items-center gap-2 font-cinzel text-[0.7rem] tracking-[0.2em] text-stone-500 hover:text-gold-600 transition-colors group"
          style={{ fontFamily: 'var(--font-cinzel, serif)' }}
        >
          ВСЕ СТАТЬИ
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  )
}
