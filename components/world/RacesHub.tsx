'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import ParticleField from '@/components/effects/ParticleField'
import LightRays from '@/components/effects/LightRays'

// ── Расы с готовыми статьями ──────────────────────────────────────────────────
const races = [
  {
    id: 'oborotni',
    href: '/world/races/oborotni',
    title: 'Оборотни',
    category: 'Разумная раса',
    tag: 'ИЗМЕНЯЮЩИЕ ФОРМУ',
    description: 'Двойственные существа, скованные древним проклятием луны. В человеческом обличии они неотличимы от смертных — но в миг трансформации становятся воплощением первобытной ярости. Стаи, иерархии, кровь — их закон.',
    accent: '#F59E0B',
    gradient: 'from-amber-950/95 via-stone-950/90 to-yellow-950/95',
    glowBg: 'rgba(245,158,11,0.22)',
    particleR: 245, particleG: 158, particleB: 11,
    traits: ['Двойственность', 'Регенерация', 'Стайный инстинкт', 'Лунная связь'],
  },
  {
    id: 'drow',
    href: '/world/races/drow',
    title: 'Дроу',
    category: 'Разумная раса',
    tag: 'ИЛИТИИРИ',
    description: 'Изгнанники, избравшие тьму своим домом. Подземные государства, матриархат Домов, Теневое Плетение. Красота Дроу — это оружие, а каждая улыбка скрывает расчёт. Презрение к слабым — религия.',
    accent: '#A855F7',
    gradient: 'from-violet-950/95 via-purple-950/90 to-stone-950/95',
    glowBg: 'rgba(168,85,247,0.22)',
    particleR: 168, particleG: 85, particleB: 247,
    traits: ['Теневая магия', 'Матриархат', 'Долголетие', 'Пировитальность'],
  },
  {
    id: 'vysshie-elfy',
    href: '/world/races/vysshie-elfy',
    title: 'Высшие Эльфы',
    category: 'Разумная раса',
    tag: 'ДРЕВНЯЯ КРОВЬ',
    description: 'Первые среди эльфов. Носители изначальной магии, хранители знаний первых эпох. Их города стоят тысячелетиями, а взгляд несёт груз веков. Гордость — их добродетель и их проклятие.',
    accent: '#60A5FA',
    gradient: 'from-blue-950/95 via-slate-950/90 to-stone-950/95',
    glowBg: 'rgba(96,165,250,0.22)',
    particleR: 96, particleG: 165, particleB: 250,
    traits: ['Изначальная магия', 'Многовековая память', 'Аристократия', 'Сверхчувства'],
  },
  {
    id: 'snezhnye-elfy',
    href: '/world/races/snezhnye-elfy',
    title: 'Снежные Эльфы',
    category: 'Разумная раса',
    tag: 'ДЕТИ СЕВЕРА',
    description: 'Рождённые в вечных льдах на краю мира. Их кожа белее снега, взгляд — холоднее шторма. Мастера выживания и ледяного колдовства, они живут там, где смерть приходит вместе с ветром.',
    accent: '#67E8F9',
    gradient: 'from-cyan-950/95 via-teal-950/90 to-stone-950/95',
    glowBg: 'rgba(103,232,249,0.22)',
    particleR: 103, particleG: 232, particleB: 249,
    traits: ['Ледяная магия', 'Морозостойкость', 'Охотники', 'Северные земли'],
  },
  {
    id: 'alpy',
    href: '/world/races/alpy',
    title: 'Альпы',
    category: 'Разумная раса',
    tag: 'ГОРНЫЕ ДУХИ',
    description: 'Тёмнокожие гуманоиды с рогами и звериными ушами, живущие в тени Оборотней. Их оружие — не клинок и не огонь, а чужой разум. Мастера ментальных манипуляций, ведомые богиней сновидений Миралой.',
    accent: '#93C5FD',
    gradient: 'from-sky-950/95 via-stone-950/90 to-blue-950/95',
    glowBg: 'rgba(147,197,253,0.22)',
    particleR: 147, particleG: 197, particleB: 253,
    traits: ['Ментальная магия', 'Колыбель', 'Империя Оборотней', 'Богиня Мирала'],
  },
  {
    id: 'vampiry',
    href: '/world/races/vampiry',
    title: 'Вампиры',
    category: 'Разумная раса',
    tag: 'ДЕТИ НОЧИ',
    description: 'Шесть Благородных Домов Фенридии под властью короля Крюгера. Существа двух состояний — сытости и голода. Когда голод побеждает разум, рождаются Плакальщики.',
    accent: '#F87171',
    gradient: 'from-red-950/95 via-stone-950/90 to-rose-950/95',
    glowBg: 'rgba(248,113,113,0.22)',
    particleR: 248, particleG: 113, particleB: 113,
    traits: ['Шесть Домов', 'Фенридия', 'Плакальщики', 'Бессмертие'],
  },
  {
    id: 'orki',
    href: '/world/races/orki',
    title: 'Орки',
    category: 'Разумная раса',
    tag: 'ВОИТЕЛИ СТЕПЕЙ',
    description: 'Зелёные гиганты ростом 2.2 метра с биологией растения, гриба и зверя. Регенерируют даже после обезглавливания. Гоблины — просто недокормленные орки.',
    accent: '#86EFAC',
    gradient: 'from-green-950/95 via-stone-950/90 to-emerald-950/95',
    glowBg: 'rgba(134,239,172,0.22)',
    particleR: 134, particleG: 239, particleB: 172,
    traits: ['Регенерация', 'Гибридная биология', 'Гоблины', '2.2м рост'],
  },
  {
    id: 'dvarfy',
    href: '/world/races/dvarfy',
    title: 'Дварфы',
    category: 'Разумная раса',
    tag: 'КУЗНЕЦЫ ГЛУБИН',
    description: 'Мастера кузнечного дела и рунической инженерии. Не используют магию — зато магия их почти не берёт. Иммунны к ядам, живут 500 лет и помнят каждую обиду.',
    accent: '#FB923C',
    gradient: 'from-orange-950/95 via-stone-950/90 to-amber-950/95',
    glowBg: 'rgba(251,146,60,0.22)',
    particleR: 251, particleG: 146, particleB: 60,
    traits: ['Кузнечное дело', 'Руны', 'Иммунитет к ядам', '500 лет жизни'],
  },
  {
    id: 'drakony',
    href: '/world/races/drakony',
    title: 'Драконы',
    category: 'Вымершая раса',
    tag: 'ПЕРВОЗДАННАЯ КРОВЬ',
    description: 'Величайшая раса, которой больше нет. Шесть конечностей, четыре подвида, три типа покрова. Те немногие, что уцелели, приняли чужой облик и растворились в истории. Недоступны для игры.',
    accent: '#FBBF24',
    gradient: 'from-yellow-950/95 via-stone-950/90 to-amber-950/95',
    glowBg: 'rgba(251,191,36,0.22)',
    particleR: 251, particleG: 191, particleB: 36,
    traits: ['Вымершие', 'Четыре подвида', 'Полиморф', 'Недоступны'],
  },
  {
    id: 'zverolyudi',
    href: '/world/races/zverolyudi',
    title: 'Зверолюди',
    category: 'Разумная раса',
    tag: 'ПЕРВОРОЖДЁННЫЕ',
    description: 'Народ трёх уровней: Полулюди, Полузвери и Зооморфы. Клановая система, вера в Священный инстинкт и поиск Пути Баланса между разумом и первобытной природой зверя.',
    accent: '#D97706',
    gradient: 'from-amber-950/95 via-stone-950/90 to-orange-950/95',
    glowBg: 'rgba(217,119,6,0.22)',
    particleR: 217, particleG: 119, particleB: 6,
    traits: ['Три уровня', 'Клановая система', 'Священный инстинкт', 'Путь Баланса'],
  },
  {
    id: 'insektoidy',
    href: '/world/races/insektoidy',
    title: 'Инсектоиды',
    category: 'Разумная раса',
    tag: 'РОЙ',
    description: 'Древнейшая раса Калдериса, рождённая из первородных насекомых. Королевы, Изгои, Ассимилированные и Паразиты. Без головы продолжают атаковать. Рой думает как единое целое.',
    accent: '#34D399',
    gradient: 'from-emerald-950/95 via-stone-950/90 to-teal-950/95',
    glowBg: 'rgba(52,211,153,0.22)',
    particleR: 52, particleG: 211, particleB: 153,
    traits: ['Четыре типа', 'Телепатия Роя', 'Регенерация', 'Паразитизм'],
  },
  {
    id: 'jotnary',
    href: '/world/races/jotnary',
    title: 'Йотнары',
    category: 'Разумная раса',
    tag: 'ВЕЛИКАНЫ СЕВЕРА',
    description: 'Потомки мифических исполинов из зимних земель. 3.5 метра, тонна веса, кости прочнее стали. Официально сильнейшая раса Калдериса. Живут в вечных льдах Йотунхейма.',
    accent: '#94A3B8',
    gradient: 'from-slate-950/95 via-stone-950/90 to-gray-950/95',
    glowBg: 'rgba(148,163,184,0.22)',
    particleR: 148, particleG: 163, particleB: 184,
    traits: ['3.5м рост', 'Сила ×10', 'Холодовой иммунитет', '250–300 лет'],
  },
  {
    id: 'lyudoedy',
    href: '/world/races/lyudoedy',
    title: 'Людоеды',
    category: 'Разумная раса',
    tag: 'ДРЕВНИЕ ХИЩНИКИ',
    description: 'Сквернолаки — перевёртыши без ограничений. Принимают любую форму, поглощают разум с мозгом жертвы. Биологически бессмертны. 10% из них владеют крупнейшей торговой компанией мира.',
    accent: '#FCA5A5',
    gradient: 'from-rose-950/95 via-stone-950/90 to-pink-950/95',
    glowBg: 'rgba(252,165,165,0.22)',
    particleR: 252, particleG: 165, particleB: 165,
    traits: ['Любая форма', 'Поглощение разума', 'Бессмертие', 'Торговцы'],
  },
  {
    id: 'nezhit',
    href: '/world/races/nezhit',
    title: 'Нежить',
    category: 'Особый класс',
    tag: 'БЕССМЕРТНЫЕ',
    description: 'Четыре класса мертвецов: от безмозглого скелета до созданий Бога Нежити. Иммунны к ментальной магии, видят души существ, сопротивляются магии тьмы. Требуется разрешение.',
    accent: '#A3E635',
    gradient: 'from-lime-950/95 via-stone-950/90 to-green-950/95',
    glowBg: 'rgba(163,230,53,0.22)',
    particleR: 163, particleG: 230, particleB: 53,
    traits: ['Четыре класса', 'Иммунитет к магии', 'Видение душ', 'Разрешение'],
  },
  {
    id: 'pong-ho',
    href: '/world/races/pong-ho',
    title: 'Понг-хо',
    category: 'Разумная раса',
    tag: 'ВОСТОЧНЫЙ НАРОД',
    description: 'Гуманоидные пушистые долгожители с 28 языками и биолюминесцентными усами. Геолокация, эмпатия, свет в темноте — через усы. Скорость 71 км/ч. Убьёшь — сам станешь одним из них.',
    accent: '#6EE7B7',
    gradient: 'from-teal-950/95 via-stone-950/90 to-emerald-950/95',
    glowBg: 'rgba(110,231,183,0.22)',
    particleR: 110, particleG: 231, particleB: 183,
    traits: ['28 языков', 'Биолюминесценция', '71 км/ч', 'Проклятие'],
  },
  {
    id: 'tiflingi',
    href: '/world/races/tiflingi',
    title: 'Тифлинги',
    category: 'Разумная раса',
    tag: 'ИНФЕРНАЛЬНАЯ КРОВЬ',
    description: 'Krōn-azgal — «порченое наследие». Потомки людей, альпов и óни. Не полудемоны. Три вида: воины Азгалиты, теневые Онталиты, странники Варголиты. Вечные кочевники, живущие до 4000 лет.',
    accent: '#E879F9',
    gradient: 'from-fuchsia-950/95 via-stone-950/90 to-purple-950/95',
    glowBg: 'rgba(232,121,249,0.22)',
    particleR: 232, particleG: 121, particleB: 249,
    traits: ['Не полудемоны', 'Три вида', 'Вечные странники', '4000 лет жизни'],
  },
]


// ── Не проработанные расы (заблокированы) ────────────────────────────────────
const lockedRaces = [
  { id: 'lyudi',        title: 'Люди',              tag: 'СМЕРТНЫЕ',          accent: '#A8A29E', note: null },
  { id: 'lesnye-elfy',  title: 'Лесные Эльфы',      tag: 'ДЕТИ ЛЕСА',         accent: '#86EFAC', note: null },
  { id: 'gobliny',      title: 'Гоблины',            tag: 'ПЛЕМЕННЫЕ',         accent: '#BEF264', note: null },
  { id: 'ogry',         title: 'Огры',               tag: 'ВЕЛИКАНЫ',          accent: '#D97706', note: null },
  { id: 'elementali',   title: 'Элементали',         tag: 'ВОПЛОЩЕНИЯ СТИХИЙ', accent: '#38BDF8', note: null },
  { id: 'chajliny',     title: 'Чайлины',            tag: 'НЕИЗВЕСТНО',        accent: '#2DD4BF', note: null },
  { id: 'rezonatory',   title: 'Резонаторы',         tag: 'ОСОБЫЙ КЛАСС',      accent: '#818CF8', note: 'временно недоступны' },
  { id: 'drakonity',    title: 'Дракониты',          tag: 'ПОТОМКИ ДРАКОНА',   accent: '#F97316', note: null },
  { id: 'velikany',     title: 'Великаны / Гиганты', tag: 'ИСПОЛИНЫ',          accent: '#6B7280', note: 'недоступны' },
  { id: 'lesnye-dukhi', title: 'Лесные Духи',        tag: 'ДУХИ ПРИРОДЫ',      accent: '#4ADE80', note: null },
  { id: 'oni',          title: 'Óни',                tag: 'ВОСТОЧНЫЕ ВОИНЫ',   accent: '#F87171', note: 'не демоны, просто иные люди' },
]

// ── Анимации ──────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const fastContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

// ── Полная карточка расы со статьёй ───────────────────────────────────────────
function RaceCard({ race }: { race: (typeof races)[0] }) {
  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Link href={race.href} className="block h-full">
        <div
          className="relative h-full min-h-[380px] overflow-hidden rounded-sm cursor-pointer"
          style={{ boxShadow: `0 4px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${race.gradient}`} />
          <div className="absolute inset-0 overflow-hidden">
            <ParticleField count={16} r={race.particleR} g={race.particleG} b={race.particleB} className="z-0" />
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${race.glowBg} 0%, transparent 70%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 45% at 50% -10%, ${race.accent}25 0%, transparent 60%)` }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `inset 0 0 0 1px ${race.accent}45` }}
          />

          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-cinzel text-[0.52rem] tracking-[0.24em] px-2.5 py-1"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: race.accent, border: `1px solid ${race.accent}50`, background: `${race.accent}15` }}
                >
                  {race.tag}
                </span>
              </div>
              <p className="font-cinzel text-[0.54rem] tracking-[0.2em] mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}80` }}>
                {race.category.toUpperCase()}
              </p>
              <h2
                className="font-cinzel font-bold text-white mb-3 leading-none"
                style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', textShadow: `0 0 60px ${race.accent}40`, letterSpacing: '0.06em' }}
              >
                {race.title}
              </h2>
              <div className="h-px w-10 mb-3" style={{ background: `linear-gradient(90deg, ${race.accent}70, transparent)` }} />
              <p className="text-stone-300/65 leading-6 text-[0.82rem]">{race.description}</p>
            </div>

            <div>
              <p className="font-cinzel text-[0.56rem] tracking-[0.24em] mb-2.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}70` }}>
                ОСОБЕННОСТИ
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {race.traits.map((trait) => (
                  <span key={trait} className="text-[0.62rem] px-2 py-0.5 rounded-sm" style={{ color: 'rgba(200,210,230,0.70)', background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.08)` }}>
                    {trait}
                  </span>
                ))}
              </div>
              <div
                className="flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.15em] transition-all duration-300 group-hover:gap-3"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: race.accent }}
              >
                ЧИТАТЬ СТАТЬЮ
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Заблокированная карточка (не проработана) ────────────────────────────────
function LockedRaceCard({ race }: { race: (typeof lockedRaces)[0] }) {
  return (
    <motion.div variants={itemVariants}>
      <div
        className="relative overflow-hidden rounded-sm"
        style={{
          background: 'rgba(6,5,10,0.97)',
          border: `1px solid ${race.accent}18`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.02)`,
          opacity: 0.70,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${race.accent}12 0%, transparent 60%)` }}
        />

        <div className="relative z-10 p-6">
          {/* Tag */}
          <div className="mb-4">
            <span
              className="font-cinzel text-[0.50rem] tracking-[0.24em] px-2.5 py-1"
              style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}70`, border: `1px solid ${race.accent}28`, background: `${race.accent}0A` }}
            >
              {race.tag}
            </span>
          </div>

          <p className="font-cinzel text-[0.50rem] tracking-[0.2em] mb-1.5" style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}50` }}>
            РАЗУМНАЯ РАСА
          </p>

          {/* Название — чётко видно */}
          <h3
            className="font-cinzel font-bold text-white mb-3 leading-none"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)', textShadow: `0 0 30px ${race.accent}25`, letterSpacing: '0.06em' }}
          >
            {race.title}
          </h3>

          <div className="h-px w-10 mb-4" style={{ background: `linear-gradient(90deg, ${race.accent}40, transparent)` }} />

          {/* Размытое содержимое + замок */}
          <div className="relative">
            <div style={{ filter: 'blur(4px)', userSelect: 'none', pointerEvents: 'none' }}>
              <p className="text-stone-500/40 text-sm leading-6 mb-3">
                Информация о данном народе не проработана и находится в разработке авторов мира.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['░░░░░', '░░░░', '░░░░░░', '░░░'].map((t, i) => (
                  <span key={i} className="text-[0.6rem] px-2 py-0.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: 'rgba(120,110,130,0.20)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Замок + статус */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
              <Lock size={13} style={{ color: `${race.accent}65` }} />
              <span
                className="font-cinzel text-[0.55rem] tracking-[0.28em]"
                style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}65` }}
              >
                В РАЗРАБОТКЕ
              </span>
              {race.note && (
                <span
                  className="font-cinzel text-[0.48rem] tracking-[0.16em] italic mt-0.5"
                  style={{ fontFamily: 'var(--font-cinzel, serif)', color: `${race.accent}50` }}
                >
                  {race.note}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Главный компонент ─────────────────────────────────────────────────────────
export default function RacesHub() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 20% 20%, rgba(245,158,11,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 55% 50% at 80% 30%, rgba(168,85,247,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 45% 45% at 45% 70%, rgba(96,165,250,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #050305 0%, #080510 40%, #050408 100%)
          `,
        }}
      >
        <ParticleField count={55} r={140} g={120} b={200} className="z-0" />
        <LightRays rayCount={8} color="rgba(160, 130, 230" originY={0} widthScale={2.2} className="z-0" />

        <div
          className="absolute inset-x-0 bottom-0 h-3/4 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #050305 0%, #050305B3 25%, transparent 100%)' }}
        />

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
            {[
              { label: 'ОБОРОТНИ', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.4)' },
              { label: 'ДРОУ',     color: '#A855F7', bg: 'rgba(168,85,247,0.12)',  border: 'rgba(168,85,247,0.4)' },
              { label: 'ЭЛЬФЫ',   color: '#60A5FA', bg: 'rgba(96,165,250,0.12)',  border: 'rgba(96,165,250,0.4)' },
            ].map(t => (
              <span key={t.label} className="font-cinzel text-[0.56rem] tracking-[0.26em] px-3 py-1" style={{ fontFamily: 'var(--font-cinzel, serif)', color: t.color, background: t.bg, border: `1px solid ${t.border}` }}>
                {t.label}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cinzel text-[0.62rem] tracking-[0.32em] mb-3"
            style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(180,160,230,0.60)' }}
          >
            РАСЫ МИРА
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.06em' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', textShadow: '0 0 80px rgba(160,120,230,0.30)' }}
          >
            Народы Калдериса
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-stone-400/70 text-base lg:text-lg max-w-xl leading-8 font-light"
          >
            Десятки рас делят мир Калдериса — от подземных городов Дроу до вечных льдов севера. У каждого народа своя история, своя кровь, своя цена.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Открытые архивы (готовые статьи) ── */}
      <div style={{ background: 'rgb(246 245 250)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-5 mb-4">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.5))' }} />
              <span className="font-cinzel text-[0.62rem] tracking-[0.35em] text-stone-500" style={{ fontFamily: 'var(--font-cinzel, serif)' }}>
                ОТКРЫТЫЕ АРХИВЫ
              </span>
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(96,165,250,0.5))' }} />
            </div>
            <h2 className="font-cinzel text-2xl lg:text-3xl font-bold text-stone-800" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}>
              Народы с готовыми статьями
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {races.map((race) => (
              <RaceCard key={race.id} race={race} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Тёмный блок: статьи готовятся + заблокированные ── */}
      <div style={{ background: 'linear-gradient(180deg, #050305 0%, #080510 60%, #050408 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-6 lg:px-10 py-16 lg:py-20 space-y-20">

          {/* Не проработанные расы */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-5 mb-4">
                <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(120,110,140,0.35))' }} />
                <span className="font-cinzel text-[0.62rem] tracking-[0.35em]" style={{ fontFamily: 'var(--font-cinzel, serif)', color: 'rgba(120,110,140,0.55)' }}>
                  ЗАСЕКРЕЧЕННЫЕ АРХИВЫ
                </span>
                <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(120,110,140,0.35))' }} />
              </div>
              <h2 className="font-cinzel text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em', color: 'rgba(180,170,200,0.55)' }}>
                Народы в разработке
              </h2>
              <p className="text-stone-600/70 text-sm mt-3 max-w-md mx-auto">
                Информация об этих народах ещё не проработана авторами мира.
              </p>
            </motion.div>

            <motion.div
              variants={fastContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {lockedRaces.map((race) => (
                <LockedRaceCard key={race.id} race={race} />
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center text-stone-700 text-xs font-cinzel tracking-widest"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            АРХИВ ПОПОЛНЯЕТСЯ — ИСТОРИЯ ПРОДОЛЖАЕТСЯ
          </motion.p>

        </div>
      </div>
    </div>
  )
}
