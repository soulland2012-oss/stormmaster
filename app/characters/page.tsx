import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Персонажи — Stormmaster Archive',
  description: 'Легендарные фигуры вселенной Stormmaster.',
}

const characters = [
  {
    name: 'Артур Каслана',
    house: 'Дом Каслана',
    era: 'Год 0',
    role: 'Основатель · Первый Глава',
    href: '/lore/house-kaslana',
    color: '#D4AF37',
    initials: 'АК',
    legendary: true,
    portrait: '/images/portraits/arthur-kaslana.jpg',
  },
  {
    name: 'Элара Каслана',
    house: 'Дом Каслана',
    era: 'Год 891',
    role: '«Солнечный Клинок» · Великий Паладин',
    href: '/lore/house-kaslana',
    color: '#D4AF37',
    initials: 'ЭК',
    legendary: true,
    portrait: '/images/portraits/elara-kaslana.jpg',
  },
  {
    name: 'Сера Уайтмантл',
    house: 'Дом Каслана',
    era: 'Настоящее',
    role: 'Командир Белого Мантиса',
    href: '/lore/house-kaslana',
    color: '#C0C0C0',
    initials: 'СУ',
    legendary: false,
    portrait: null,
  },
  {
    name: 'Лисандер Каслана',
    house: 'Дом Каслана',
    era: 'Настоящее',
    role: 'Лорд Архон',
    href: '/lore/house-kaslana',
    color: '#D4AF37',
    initials: 'ЛК',
    legendary: false,
    portrait: '/images/portraits/lysander-kaslana.jpg',
  },
  {
    name: '«Моль»',
    house: 'Дом Каслана',
    era: 'Неизвестно',
    role: 'Командир Чёрной Моли',
    href: '/lore/house-kaslana',
    color: '#5A8FCC',
    initials: '??',
    legendary: false,
    portrait: '/images/portraits/the-moth.jpg',
  },
]

export default function CharactersPage() {
  return (
    <div style={{ background: 'rgb(250 250 245)', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        className="relative h-72 flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 55%),
            linear-gradient(180deg, #0A0806 0%, #1A1208 50%, #0A0806 100%)
          `,
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0806] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 pb-12 w-full">
          <p
            className="font-cinzel text-[0.6rem] tracking-[0.3em] mb-2"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(212,175,55,0.65)' }}
          >
            STORMMASTER АРХИВ
          </p>
          <h1
            className="font-cinzel font-bold text-white"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.06em' }}
          >
            Персонажи
          </h1>
        </div>
      </div>

      {/* Characters grid */}
      <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {characters.map((char) => (
            <Link key={char.name} href={char.href} className="group block">
              <div
                className="rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${char.color}18`,
                }}
              >
                {/* Portrait */}
                <div
                  className="h-52 relative overflow-hidden"
                  style={{
                    background: char.portrait
                      ? `url(${char.portrait}) center/cover no-repeat`
                      : `linear-gradient(135deg, ${char.color}10, ${char.color}05)`,
                    borderBottom: `1px solid ${char.color}15`,
                  }}
                >
                  {/* Gradient overlay at bottom for text readability */}
                  {char.portrait && (
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                  )}

                  {/* Legendary badge */}
                  {char.legendary && (
                    <div
                      className="absolute top-3 right-3 font-cinzel text-[0.52rem] tracking-[0.2em] px-2 py-0.5"
                      style={{
                        fontFamily: 'var(--font-cinzel, serif)',
                        color: char.color,
                        background: `${char.color}22`,
                        border: `1px solid ${char.color}50`,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      ЛЕГЕНДАРНЫЙ
                    </div>
                  )}

                  {/* Initials fallback (shown only without portrait) */}
                  {!char.portrait && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center font-cinzel font-bold"
                        style={{
                          fontFamily: 'var(--font-cinzel, serif)',
                          background: `${char.color}18`,
                          border: `1.5px solid ${char.color}45`,
                          color: char.color,
                          fontSize: '1.2rem',
                          boxShadow: `0 0 20px ${char.color}20`,
                        }}
                      >
                        {char.initials}
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    className="font-cinzel font-bold text-stone-900 mb-1"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.95rem', letterSpacing: '0.03em' }}
                  >
                    {char.name}
                  </h3>
                  <p
                    className="font-cinzel text-[0.62rem] tracking-wider mb-1"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${char.color}90` }}
                  >
                    {char.role}
                  </p>
                  <p className="text-stone-400 text-xs">{char.era}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
