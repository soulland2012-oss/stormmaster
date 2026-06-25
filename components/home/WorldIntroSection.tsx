'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Zap, Clock, Map } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    label: 'Благородные дома',
    description: 'Великие Дома тысячелетиями определяли судьбу цивилизации, каждый со своими уникальными традициями и мастерством Ауры.',
    href: '/world/houses',
    color: '#D4AF37',
  },
  {
    icon: Zap,
    label: 'Магия и Аура',
    description: 'Первозданная сила Ауры пронизывает каждое живое существо. Пять ступеней мастерства и тайны, доступные лишь избранным.',
    href: '/lore/aura',
    color: '#8B5CF6',
  },
  {
    icon: Clock,
    label: 'Тысячи лет истории',
    description: 'От Эпохи Раскола до наших дней — войны, заветы, предательства и мерцание Вечного Пламени.',
    href: '/timeline',
    color: '#D97706',
  },
  {
    icon: Map,
    label: 'Известный мир',
    description: 'Обширные территории — горные цитадели, золотые степи, древние храмы и туманные пустоши за пределами цивилизации.',
    href: '/world',
    color: '#059669',
  },
]

export default function WorldIntroSection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/50" />
            <span
              className="font-cinzel text-[0.6rem] tracking-[0.38em] text-gold-600"
              style={{ fontFamily: 'var(--font-cinzel, serif)' }}
            >
              МИР STORMMASTER
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <h2
            className="font-cinzel text-3xl lg:text-4xl font-bold text-stone-900 mb-8"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.05em' }}
          >
            Вселенная древней силы
          </h2>

          <p className="text-stone-500 leading-8 text-base lg:text-lg">
            Вселенная Stormmaster охватывает тысячелетия записанной истории.
            Магия и механика переплетаются. Благородные роды несут в себе древние дары.
            И под сверкающей поверхностью цивилизации пробуждается старая тьма.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Link href={pillar.href} className="group block h-full">
                  <div
                    className="h-full rounded-sm p-6 transition-all duration-350 hover:-translate-y-2"
                    style={{
                      background: 'rgba(255,255,255,0.65)',
                      backdropFilter: 'blur(14px)',
                      border: `1px solid ${pillar.color}18`,
                      boxShadow: `0 2px 20px rgba(0,0,0,0.05)`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${pillar.color}14`,
                        border: `1px solid ${pillar.color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color: pillar.color }} />
                    </div>

                    <h3
                      className="font-cinzel font-semibold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors"
                      style={{
                        fontFamily: 'var(--font-cinzel, serif)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {pillar.label}
                    </h3>

                    <p className="text-stone-500 text-sm leading-6">
                      {pillar.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/lore/house-kaslana"
            className="inline-flex btn-gold"
          >
            Начать с Дома Каслана
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
