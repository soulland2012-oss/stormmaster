import Link from 'next/link'
import KaslanaCrest from '@/components/icons/KaslanaCrest'

const footerLinks = [
  {
    title: 'Мир',
    links: [
      { label: 'Обзор',        href: '/world' },
      { label: 'Государства',  href: '/world/countries' },
      { label: 'Карта мира',   href: '/world/map' },
      { label: 'Календарь',    href: '/world/calendar' },
    ],
  },
  {
    title: 'Лор',
    links: [
      { label: 'Дом Каслана',  href: '/lore/house-kaslana' },
      { label: 'Организации',  href: '/lore/organizations' },
      { label: 'Системы сил',  href: '/lore/systems' },
      { label: 'Пантеон',      href: '/lore/gods' },
    ],
  },
  {
    title: 'Персонажи',
    links: [
      { label: 'Все персонажи', href: '/characters' },
      { label: 'Дом Каслана',   href: '/lore/house-kaslana' },
      { label: 'Легендарные',   href: '/characters/legendary' },
    ],
  },
  {
    title: 'Архив',
    links: [
      { label: 'Хроника',  href: '/timeline' },
      { label: 'Галерея',  href: '/gallery' },
      { label: 'Поиск',    href: '/search' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-marble-warm overflow-hidden">
      {/* Top atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="font-cinzel text-[0.68rem] tracking-[0.22em] text-gold-600 mb-5"
                style={{ fontFamily: 'var(--font-cinzel, serif)' }}
              >
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-stone-500 hover:text-stone-800 text-sm transition-colors duration-200 hover:underline underline-offset-2 decoration-gold-400/50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <p className="text-stone-400/50 text-xs mb-2" style={{ letterSpacing: '0.08em' }}>
              поддержать энтузиазм
            </p>
            <p className="font-mono text-stone-500/60 text-sm tracking-widest select-all">
              5392 0300 0145 2517
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/30" />
          <div className="text-gold-500/60">
            <KaslanaCrest size={28} />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/30" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <KaslanaCrest size={22} className="text-gold-500" />
            <span
              className="font-cinzel text-xs tracking-[0.2em] text-stone-500"
              style={{ fontFamily: 'var(--font-cinzel, serif)' }}
            >
              STORMMASTER ARCHIVE
            </span>
          </div>

          <p className="text-stone-400 text-xs text-center">
            Энциклопедия известного мира. Весь лор является вымышленным.
          </p>

          <p className="font-cinzel text-[0.6rem] tracking-widest text-gold-600/60" style={{ fontFamily: 'var(--font-cinzel, serif)' }}>
            LUX AETERNA VINCIT
          </p>
        </div>
      </div>
    </footer>
  )
}
