'use client'

import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'
import type { Member } from '@/data/house-kaslana'

interface MemberCardProps {
  member: Member
  accentColor?: string
  index?: number
}

export default function MemberCard({ member, accentColor = '#D4AF37', index = 0 }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group cursor-default"
    >
      <div
        className="rounded-sm overflow-hidden transition-all duration-400"
        style={{
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${accentColor}18`,
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
        }}
      >
        {/* Portrait area */}
        <div
          className="relative h-32 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}06)`,
            borderBottom: `1px solid ${accentColor}15`,
          }}
        >
          {/* Animated ring behind initials */}
          <div
            className="absolute w-20 h-20 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-500 animate-breathe"
            style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
          />

          {/* Initials circle */}
          <div
            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-cinzel font-bold text-lg"
            style={{
              fontFamily: 'var(--font-cinzel, serif)',
              background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}0a)`,
              border: `1.5px solid ${accentColor}55`,
              color: accentColor,
              boxShadow: `0 0 20px ${accentColor}25`,
            }}
          >
            {member.initials}
          </div>

          {/* Legendary badge */}
          {member.isLegendary && (
            <div
              className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5"
              style={{
                background: `${accentColor}18`,
                border: `1px solid ${accentColor}40`,
              }}
            >
              <Crown size={8} style={{ color: accentColor }} />
              <span
                className="font-cinzel text-[0.5rem] tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: accentColor, fontSize: '0.52rem' }}
              >
                LEGENDARY
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <h4
            className="font-cinzel font-bold text-stone-900 mb-1 leading-tight"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.95rem', letterSpacing: '0.04em' }}
          >
            {member.name}
          </h4>

          <p
            className="font-cinzel text-[0.62rem] tracking-wider mb-1"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${accentColor}90` }}
          >
            {member.title}
          </p>

          <p className="text-stone-400 text-[0.7rem] mb-3 font-mono">
            {member.era}
          </p>

          <p className="text-stone-500 text-xs leading-6">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
