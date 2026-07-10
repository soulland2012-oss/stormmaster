'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ChipOption {
  id: string
  label: string
  accent?: string
  /** Ссылка на статью с информацией — рендерится отдельной кликабельной иконкой в углу чипа. */
  href?: string
  /** Короткая пометка под лейблом (напр. «нужно разрешение ГМа»). */
  note?: string
}

interface ChipSelectProps {
  options: ChipOption[]
  value: string | null
  onChange: (id: string) => void
  layout?: 'inline' | 'grid'
  accentColor?: string
}

export default function ChipSelect({
  options,
  value,
  onChange,
  layout = 'grid',
  accentColor = '#D4AF37',
}: ChipSelectProps) {
  return (
    <div
      className={cn(
        layout === 'inline'
          ? 'flex flex-wrap gap-2.5'
          : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5',
      )}
    >
      {options.map((opt) => {
        const active = opt.id === value
        const color = opt.accent || accentColor
        return (
          <motion.div
            key={opt.id}
            role="button"
            tabIndex={0}
            onClick={() => onChange(opt.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onChange(opt.id)
              }
            }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'relative text-left rounded-sm py-2.5 pl-3.5 transition-all duration-200 cursor-pointer select-none',
              opt.href ? 'pr-7' : 'pr-3.5',
            )}
            style={{
              background: active ? `${color}18` : 'rgba(255,255,255,0.55)',
              border: `1px solid ${active ? `${color}80` : `${color}25`}`,
              boxShadow: active ? `0 0 0 1px ${color}30, 0 2px 12px ${color}20` : 'none',
            }}
          >
            <span
              className="block font-cinzel text-[0.72rem] tracking-[0.04em]"
              style={{
                fontFamily: 'var(--font-cinzel, serif)',
                color: active ? color : 'rgb(68,64,60)',
              }}
            >
              {opt.label}
            </span>
            {opt.note && (
              <span className="block text-[0.6rem] text-stone-400 mt-0.5 leading-tight">
                {opt.note}
              </span>
            )}

            {opt.href && (
              <Link
                href={opt.href}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-1 right-1 p-1 rounded-sm opacity-50 hover:opacity-100 transition-opacity"
                aria-label={`Подробнее: ${opt.label}`}
              >
                <Info size={11} style={{ color }} />
              </Link>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
