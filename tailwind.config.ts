import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#F5D97A',
          400: '#ECC645',
          500: '#D4AF37',
          600: '#B89420',
          700: '#9A7B14',
          800: '#7C620E',
          900: '#5E4A08',
          DEFAULT: '#D4AF37',
        },
        silver: {
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#B8B8B8',
          500: '#C0C0C0',
          600: '#A0A0A0',
          700: '#808080',
          DEFAULT: '#C0C0C0',
        },
        marble: {
          DEFAULT: '#F5F5F0',
          warm:    '#FAFAF5',
          cool:    '#F0F4F5',
          deep:    '#EBEBDF',
        },
        ivory:    '#FFFFF0',
        void:     '#050A12',
        midnight: '#0A0F1A',
        dusk:     '#1A2440',
        moonlight:'#E8EFF5',
      },
      animation: {
        shimmer:        'shimmer 4s linear infinite',
        float:          'float 7s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 2.5s ease-in-out infinite',
        'ray-expand':   'rayExpand 2s ease-out forwards',
        'line-reveal':  'lineReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-up':   'fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'title-reveal': 'titleReveal 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':      'fadeIn 1.2s ease-out forwards',
        'border-trace': 'borderTrace 3s linear infinite',
        breathe:        'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.25)' },
          '50%':      { boxShadow: '0 0 55px rgba(212, 175, 55, 0.65)' },
        },
        rayExpand: {
          '0%':   { opacity: '0', transform: 'scaleY(0) scaleX(0.6)', transformOrigin: 'top center' },
          '100%': { opacity: '1', transform: 'scaleY(1) scaleX(1)', transformOrigin: 'top center' },
        },
        lineReveal: {
          '0%':   { transform: 'scaleX(0)', opacity: '0', transformOrigin: 'left center' },
          '100%': { transform: 'scaleX(1)', opacity: '1', transformOrigin: 'left center' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        titleReveal: {
          '0%':   { opacity: '0', transform: 'translateY(50px)', letterSpacing: '0.5em' },
          '100%': { opacity: '1', transform: 'translateY(0)',    letterSpacing: '0.12em' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        borderTrace: {
          '0%':   { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '400% 0%' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.04)' },
        },
      },
      backgroundImage: {
        'gold-gradient':    'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 45%, #D4AF37 100%)',
        'hero-gradient':    'linear-gradient(180deg, rgba(5,10,18,0) 0%, rgba(5,10,18,0.75) 65%, rgba(5,10,18,1) 100%)',
        'radial-gold':      'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(212,175,55,0.25) 0%, transparent 70%)',
        'radial-light':     'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,240,180,0.35) 0%, transparent 65%)',
        'marble-texture':   'linear-gradient(135deg, #FAFAF5 0%, #F5F0E8 20%, #FAFAF5 45%, #F0EDE8 70%, #FAFAF5 100%)',
      },
      boxShadow: {
        gold:         '0 0 25px rgba(212,175,55,0.45)',
        'gold-lg':    '0 0 60px rgba(212,175,55,0.65)',
        'gold-inner': 'inset 0 0 30px rgba(212,175,55,0.15)',
        silver:       '0 0 20px rgba(192,192,192,0.4)',
        glass:        '0 8px 32px rgba(0,0,0,0.06)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.45)',
        elevated:     '0 25px 70px rgba(0,0,0,0.18)',
        card:         '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(212,175,55,0.12)',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
