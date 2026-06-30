'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import KaslanaCrest from '@/components/icons/KaslanaCrest'

const navLinks = [
  {
    label: 'Мир',
    href: '/world',
    sub: [
      { label: 'Обзор',       href: '/world' },
      { label: 'Государства', href: '/world/countries' },
      { label: 'Карта мира',  href: '/world/map' },
      { label: 'Календарь',   href: '/world/calendar' },
      { label: 'Расы',        href: '/world/races' },
    ],
  },
  {
    label: 'Лор',
    href: '/lore/house-kaslana',
    sub: [
      { label: 'История мира', href: '/lore/history' },
      { label: 'Дом Каслана', href: '/lore/house-kaslana' },
      { label: 'Организации', href: '/lore/organizations' },
      { label: 'Системы',     href: '/lore/systems' },
      { label: 'Пантеон',     href: '/lore/gods' },
    ],
  },
  { label: 'Персонажи', href: '/characters' },
  { label: 'Хроника',   href: '/timeline' },
  { label: 'Галерея',   href: '/gallery' },
]

export default function Navigation() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [searchOpen,   setSearchOpen]   = useState(false)
  const [activeMenu,   setActiveMenu]   = useState<string | null>(null)
  const [searchValue,  setSearchValue]  = useState('')
  const pathname = usePathname()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
  }, [pathname])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  const navBg = scrolled
    ? 'bg-white/88 backdrop-blur-xl border-b border-gold-500/15 shadow-[0_2px_30px_rgba(0,0,0,0.06)]'
    : 'bg-transparent'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1  }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navBg,
        )}
      >
        <div className="max-w-7xl 2xl:max-w-[2000px] mx-auto px-6 lg:px-10 2xl:px-20">
          <div className="flex items-center justify-between h-16 lg:h-20 2xl:h-28">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 2xl:gap-5 group">
              <div className="w-8 h-8 2xl:w-12 2xl:h-12 text-gold-500 transition-all duration-500 group-hover:text-gold-400 group-hover:scale-110 2xl:[&>svg]:w-12 2xl:[&>svg]:h-12">
                <KaslanaCrest size={32} className="text-gold-500 group-hover:animate-breathe" />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn('font-cinzel text-sm 2xl:text-xl font-700 tracking-[0.18em] 2xl:tracking-[0.22em] leading-none transition-colors duration-500', scrolled ? 'text-stone-900' : 'text-white')}
                  style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                >
                  STORMMASTER
                </span>
                <span className="font-cinzel text-[0.6rem] 2xl:text-[0.85rem] tracking-[0.3em] text-gold-600 leading-none mt-0.5">
                  АРХИВ
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 2xl:gap-3">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.sub && setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 2xl:px-6 2xl:py-3 font-cinzel text-[0.72rem] 2xl:text-[1rem] tracking-[0.14em] 2xl:tracking-[0.18em] transition-colors duration-200',
                      pathname === link.href
                        ? 'text-gold-500'
                        : scrolled
                          ? 'text-stone-700 hover:text-gold-600'
                          : 'text-white/80 hover:text-gold-400',
                    )}
                    style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                  >
                    {link.label}
                    {link.sub && (
                      <ChevronDown
                        size={12}
                        className={cn('2xl:!w-4 2xl:!h-4',
                          'transition-transform duration-200',
                          activeMenu === link.label && 'rotate-180',
                        )}
                      />
                    )}
                  </Link>

                  {/* Active indicator */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold-500"
                    />
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.sub && activeMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-gold-500/15 shadow-elevated rounded-sm overflow-hidden"
                      >
                        {link.sub.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center px-5 py-3 text-sm font-cinzel tracking-wider text-stone-700 hover:bg-gold-50 hover:text-gold-700 transition-colors duration-150 border-b border-stone-100/80 last:border-none"
                            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.7rem', letterSpacing: '0.1em' }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3 2xl:gap-6">
              {/* Search */}
              <div className="relative">
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 220, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <input
                        ref={searchRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Поиск по Архиву..."
                        className="w-full bg-white/80 backdrop-blur border border-gold-500/25 rounded-sm px-4 py-1.5 text-sm text-stone-800 placeholder-stone-400 outline-none focus:border-gold-500/50 font-inter"
                        onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setSearchOpen((v) => !v)}
                  className={cn('p-2 2xl:p-3 transition-colors', scrolled ? 'text-stone-600 hover:text-gold-600' : 'text-white/70 hover:text-gold-400')}
                  aria-label="Search"
                >
                  <Search size={17} className="2xl:!w-6 2xl:!h-6" />
                </button>
              </div>

              {/* Mobile toggle */}
              <button
                className={cn('lg:hidden p-2 transition-colors', scrolled ? 'text-stone-700 hover:text-gold-600' : 'text-white/80 hover:text-gold-400')}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col pt-20 px-8 pb-8 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
                className="border-b border-stone-100 last:border-none"
              >
                <Link
                  href={link.href}
                  className="block py-4 font-cinzel text-xl tracking-widest text-stone-800 hover:text-gold-600 transition-colors"
                  style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                >
                  {link.label}
                </Link>
                {link.sub && (
                  <div className="pb-3 pl-4 space-y-2">
                    {link.sub.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block py-1.5 font-cinzel text-sm tracking-wider text-stone-500 hover:text-gold-600 transition-colors"
                        style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
