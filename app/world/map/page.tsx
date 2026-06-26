import type { Metadata } from 'next'
import Link from 'next/link'
import WorldMap from '@/components/world/WorldMap'

export const metadata: Metadata = {
  title: 'Карта Мира — Stormmaster',
  description: 'Интерактивная карта известного мира Stormmaster.',
}

export default function MapPage() {
  return (
    <div className="min-h-screen" style={{ background: '#06080f' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-5 mb-4">
            <div className="h-px w-14" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4))' }} />
            <span
              className="font-cinzel text-[0.58rem] tracking-[0.38em]"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.6)' }}
            >
              ИЗВЕСТНЫЙ МИР
            </span>
            <div className="h-px w-14" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
          </div>

          <h1
            className="font-cinzel text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}
          >
            Карта Мира
          </h1>

          <p className="text-stone-400 text-sm max-w-xs mx-auto leading-6">
            Наведи на государство, чтобы выделить его
          </p>
        </div>

        {/* Map */}
        <WorldMap />

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/world"
            className="font-cinzel text-[0.6rem] tracking-[0.28em]"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.45)' }}
          >
            ← НАЗАД К МИРУ
          </Link>
        </div>

      </div>
    </div>
  )
}
