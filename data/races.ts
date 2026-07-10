// Единый источник данных о расах — используется на странице «Расы» (RacesHub),
// в разделе «Введение» (IntroBody) и в форме создания анкеты персонажа.

export type RaceStatus = 'released' | 'locked'

export interface RaceOption {
  id: string
  href?: string
  title: string
  /** Ярлык для чипа выбора расы в анкете, если отличается от `title` (напр. «Человек» вместо «Люди»). */
  formLabel?: string
  category: string
  tag: string
  description: string
  /** Короткое описание для компактных карточек (список рас во «Введении»). */
  shortDescription?: string
  /** Короткий бейдж для компактных карточек во «Введении». */
  badge?: string
  accent: string
  gradient?: string
  glowBg?: string
  particleR?: number
  particleG?: number
  particleB?: number
  traits?: string[]
  status: RaceStatus
  note?: string | null
  /** Доступна ли раса для выбора в анкете персонажа. */
  playable?: boolean
  /** Раса доступна, но требует отдельного разрешения ГМа. */
  gmApprovalRequired?: boolean
}

// ── Расы с готовыми статьями ──────────────────────────────────────────────────
export const races: RaceOption[] = [
  {
    id: 'oborotni',
    href: '/world/races/oborotni',
    title: 'Оборотни',
    category: 'Разумная раса',
    tag: 'ИЗМЕНЯЮЩИЕ ФОРМУ',
    description: 'Двойственные существа, скованные древним проклятием луны. В человеческом обличии они неотличимы от смертных — но в миг трансформации становятся воплощением первобытной ярости. Стаи, иерархии, кровь — их закон.',
    shortDescription: '12 родов вульфенов. Естественная раса, не проклятие.',
    badge: 'ВУЛЬФЕНЫ',
    accent: '#F59E0B',
    gradient: 'from-amber-950/95 via-stone-950/90 to-yellow-950/95',
    glowBg: 'rgba(245,158,11,0.22)',
    particleR: 245, particleG: 158, particleB: 11,
    traits: ['Двойственность', 'Регенерация', 'Стайный инстинкт', 'Лунная связь'],
    status: 'released',
    playable: true,
  },
  {
    id: 'drow',
    href: '/world/races/drow',
    title: 'Дроу',
    category: 'Разумная раса',
    tag: 'ИЛИТИИРИ',
    description: 'Изгнанники, избравшие тьму своим домом. Подземные государства, матриархат Домов, Теневое Плетение. Красота Дроу — это оружие, а каждая улыбка скрывает расчёт. Презрение к слабым — религия.',
    shortDescription: 'Тёмные эльфы — дети ельдэльфов и альпов.',
    badge: 'ЭЛЬФЫ',
    accent: '#A855F7',
    gradient: 'from-violet-950/95 via-purple-950/90 to-stone-950/95',
    glowBg: 'rgba(168,85,247,0.22)',
    particleR: 168, particleG: 85, particleB: 247,
    traits: ['Теневая магия', 'Матриархат', 'Долголетие', 'Пировитальность'],
    status: 'released',
    playable: true,
  },
  {
    id: 'vysshie-elfy',
    href: '/world/races/vysshie-elfy',
    title: 'Высшие Эльфы',
    category: 'Разумная раса',
    tag: 'ДРЕВНЯЯ КРОВЬ',
    description: 'Первые среди эльфов. Носители изначальной магии, хранители знаний первых эпох. Их города стоят тысячелетиями, а взгляд несёт груз веков. Гордость — их добродетель и их проклятие.',
    shortDescription: 'Маги Коллегии Чародеев. Вечный Король Сармузан.',
    badge: 'ЭЛЬФЫ',
    accent: '#60A5FA',
    gradient: 'from-blue-950/95 via-slate-950/90 to-stone-950/95',
    glowBg: 'rgba(96,165,250,0.22)',
    particleR: 96, particleG: 165, particleB: 250,
    traits: ['Изначальная магия', 'Многовековая память', 'Аристократия', 'Сверхчувства'],
    status: 'released',
    playable: true,
  },
  {
    id: 'snezhnye-elfy',
    href: '/world/races/snezhnye-elfy',
    title: 'Снежные Эльфы',
    category: 'Разумная раса',
    tag: 'ДЕТИ СЕВЕРА',
    description: 'Рождённые в вечных льдах на краю мира. Их кожа белее снега, взгляд — холоднее шторма. Мастера выживания и ледяного колдовства, они живут там, где смерть приходит вместе с ветром.',
    shortDescription: 'Потомки эльфов и вульфенов рода Сейд. Изгнанники.',
    badge: 'ЭЛЬФЫ',
    accent: '#67E8F9',
    gradient: 'from-cyan-950/95 via-teal-950/90 to-stone-950/95',
    glowBg: 'rgba(103,232,249,0.22)',
    particleR: 103, particleG: 232, particleB: 249,
    traits: ['Ледяная магия', 'Морозостойкость', 'Охотники', 'Северные земли'],
    status: 'released',
    playable: true,
  },
  {
    id: 'alpy',
    href: '/world/races/alpy',
    title: 'Альпы',
    category: 'Разумная раса',
    tag: 'ГОРНЫЕ ДУХИ',
    description: 'Тёмнокожие гуманоиды с рогами и звериными ушами, живущие в тени Оборотней. Их оружие — не клинок и не огонь, а чужой разум. Мастера ментальных манипуляций, ведомые богиней сновидений Миралой.',
    shortDescription: 'Темнокожие гуманоиды с рогами. Магия снов. Гиперхищники.',
    badge: 'АЛЬПЫ',
    accent: '#93C5FD',
    gradient: 'from-sky-950/95 via-stone-950/90 to-blue-950/95',
    glowBg: 'rgba(147,197,253,0.22)',
    particleR: 147, particleG: 197, particleB: 253,
    traits: ['Ментальная магия', 'Колыбель', 'Империя Оборотней', 'Богиня Мирала'],
    status: 'released',
    playable: true,
  },
  {
    id: 'vampiry',
    href: '/world/races/vampiry',
    title: 'Вампиры',
    category: 'Разумная раса',
    tag: 'ДЕТИ НОЧИ',
    description: 'Шесть Благородных Домов Фенридии под властью короля Крюгера. Существа двух состояний — сытости и голода. Когда голод побеждает разум, рождаются Плакальщики.',
    shortDescription: 'Служат Императору Фенридии. Дом Найтвингов.',
    badge: 'НЕЖИТЬ',
    accent: '#F87171',
    gradient: 'from-red-950/95 via-stone-950/90 to-rose-950/95',
    glowBg: 'rgba(248,113,113,0.22)',
    particleR: 248, particleG: 113, particleB: 113,
    traits: ['Шесть Домов', 'Фенридия', 'Плакальщики', 'Бессмертие'],
    status: 'released',
    playable: true,
  },
  {
    id: 'orki',
    href: '/world/races/orki',
    title: 'Орки',
    category: 'Разумная раса',
    tag: 'ВОИТЕЛИ СТЕПЕЙ',
    description: 'Зелёные гиганты ростом 2.2 метра с биологией растения, гриба и зверя. Регенерируют даже после обезглавливания. Гоблины — просто недокормленные орки.',
    shortDescription: 'Зелёные лавины. Союз с дварфами после Третьей Лавины.',
    badge: 'ОРКИ',
    accent: '#86EFAC',
    gradient: 'from-green-950/95 via-stone-950/90 to-emerald-950/95',
    glowBg: 'rgba(134,239,172,0.22)',
    particleR: 134, particleG: 239, particleB: 172,
    traits: ['Регенерация', 'Гибридная биология', 'Гоблины', '2.2м рост'],
    status: 'released',
    playable: true,
  },
  {
    id: 'dvarfy',
    href: '/world/races/dvarfy',
    title: 'Дварфы',
    category: 'Разумная раса',
    tag: 'КУЗНЕЦЫ ГЛУБИН',
    description: 'Мастера кузнечного дела и рунической инженерии. Не используют магию — зато магия их почти не берёт. Иммунны к ядам, живут 500 лет и помнят каждую обиду.',
    shortDescription: 'Стимпанк, руны, подземные города. Союзники орков.',
    badge: 'ДВАРФЫ',
    accent: '#FB923C',
    gradient: 'from-orange-950/95 via-stone-950/90 to-amber-950/95',
    glowBg: 'rgba(251,146,60,0.22)',
    particleR: 251, particleG: 146, particleB: 60,
    traits: ['Кузнечное дело', 'Руны', 'Иммунитет к ядам', '500 лет жизни'],
    status: 'released',
    playable: true,
  },
  {
    id: 'drakony',
    href: '/world/races/drakony',
    title: 'Драконы',
    category: 'Вымершая раса',
    tag: 'ПЕРВОЗДАННАЯ КРОВЬ',
    description: 'Величайшая раса, которой больше нет. Шесть конечностей, четыре подвида, три типа покрова. Те немногие, что уцелели, приняли чужой облик и растворились в истории. Недоступны для игры.',
    shortDescription: 'Дети Уль-Тара и Тифона. Создатели и разрушители.',
    badge: 'ДРАКОНЫ',
    accent: '#FBBF24',
    gradient: 'from-yellow-950/95 via-stone-950/90 to-amber-950/95',
    glowBg: 'rgba(251,191,36,0.22)',
    particleR: 251, particleG: 191, particleB: 36,
    traits: ['Вымершие', 'Четыре подвида', 'Полиморф', 'Недоступны'],
    status: 'released',
    playable: false,
  },
  {
    id: 'zverolyudi',
    href: '/world/races/zverolyudi',
    title: 'Зверолюди',
    category: 'Разумная раса',
    tag: 'ПЕРВОРОЖДЁННЫЕ',
    description: 'Народ трёх уровней: Полулюди, Полузвери и Зооморфы. Клановая система, вера в Священный инстинкт и поиск Пути Баланса между разумом и первобытной природой зверя.',
    shortDescription: 'Неко, фурри, кентавры — три подвида.',
    badge: 'ЗВЕРОЛЮДИ',
    accent: '#D97706',
    gradient: 'from-amber-950/95 via-stone-950/90 to-orange-950/95',
    glowBg: 'rgba(217,119,6,0.22)',
    particleR: 217, particleG: 119, particleB: 6,
    traits: ['Три уровня', 'Клановая система', 'Священный инстинкт', 'Путь Баланса'],
    status: 'released',
    playable: true,
  },
  {
    id: 'insektoidy',
    href: '/world/races/insektoidy',
    title: 'Инсектоиды',
    category: 'Разумная раса',
    tag: 'РОЙ',
    description: 'Древнейшая раса Калдериса, рождённая из первородных насекомых. Королевы, Изгои, Ассимилированные и Паразиты. Без головы продолжают атаковать. Рой думает как единое целое.',
    shortDescription: 'Существа улья: пауки, насекомые, ракообразные.',
    badge: 'УЛЕЙ',
    accent: '#34D399',
    gradient: 'from-emerald-950/95 via-stone-950/90 to-teal-950/95',
    glowBg: 'rgba(52,211,153,0.22)',
    particleR: 52, particleG: 211, particleB: 153,
    traits: ['Четыре типа', 'Телепатия Роя', 'Регенерация', 'Паразитизм'],
    status: 'released',
    playable: true,
  },
  {
    id: 'jotnary',
    href: '/world/races/jotnary',
    title: 'Йотнары',
    category: 'Разумная раса',
    tag: 'ВЕЛИКАНЫ СЕВЕРА',
    description: 'Потомки мифических исполинов из зимних земель. 3.5 метра, тонна веса, кости прочнее стали. Официально сильнейшая раса Калдериса. Живут в вечных льдах Йотунхейма.',
    shortDescription: '3–5 м полугиганты, бастарды великанов.',
    badge: 'ГИГАНТЫ',
    accent: '#94A3B8',
    gradient: 'from-slate-950/95 via-stone-950/90 to-gray-950/95',
    glowBg: 'rgba(148,163,184,0.22)',
    particleR: 148, particleG: 163, particleB: 184,
    traits: ['3.5м рост', 'Сила ×10', 'Холодовой иммунитет', '250–300 лет'],
    status: 'released',
    playable: true,
  },
  {
    id: 'lyudoedy',
    href: '/world/races/lyudoedy',
    title: 'Людоеды',
    category: 'Разумная раса',
    tag: 'ДРЕВНИЕ ХИЩНИКИ',
    description: 'Сквернолаки — перевёртыши без ограничений. Принимают любую форму, поглощают разум с мозгом жертвы. Биологически бессмертны. 10% из них владеют крупнейшей торговой компанией мира.',
    shortDescription: 'Кошмар вульфенов. Искажённые, умноженные ужасом.',
    badge: 'МОНСТРЫ',
    accent: '#FCA5A5',
    gradient: 'from-rose-950/95 via-stone-950/90 to-pink-950/95',
    glowBg: 'rgba(252,165,165,0.22)',
    particleR: 252, particleG: 165, particleB: 165,
    traits: ['Любая форма', 'Поглощение разума', 'Бессмертие', 'Торговцы'],
    status: 'released',
    playable: true,
  },
  {
    id: 'nezhit',
    href: '/world/races/nezhit',
    title: 'Нежить',
    category: 'Особый класс',
    tag: 'БЕССМЕРТНЫЕ',
    description: 'Четыре класса мертвецов: от безмозглого скелета до созданий Бога Нежити. Иммунны к ментальной магии, видят души существ, сопротивляются магии тьмы. Требуется разрешение.',
    shortDescription: 'Восставшие мертвецы под эгидой бога Мортуриса.',
    badge: 'НЕЖИТЬ',
    accent: '#A3E635',
    gradient: 'from-lime-950/95 via-stone-950/90 to-green-950/95',
    glowBg: 'rgba(163,230,53,0.22)',
    particleR: 163, particleG: 230, particleB: 53,
    traits: ['Четыре класса', 'Иммунитет к магии', 'Видение душ', 'Разрешение'],
    status: 'released',
    playable: true,
    gmApprovalRequired: true,
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
    status: 'released',
    playable: true,
  },
  {
    id: 'tiflingi',
    href: '/world/races/tiflingi',
    title: 'Тифлинги',
    category: 'Разумная раса',
    tag: 'ИНФЕРНАЛЬНАЯ КРОВЬ',
    description: 'Krōn-azgal — «порченое наследие». Потомки людей, альпов и óни. Не полудемоны. Три вида: воины Азгалиты, теневые Онталиты, странники Варголиты. Вечные кочевники, живущие до 4000 лет.',
    shortDescription: 'Рождены из неудачного эксперимента с магией снов.',
    badge: 'ТИФЛИНГИ',
    accent: '#E879F9',
    gradient: 'from-fuchsia-950/95 via-stone-950/90 to-purple-950/95',
    glowBg: 'rgba(232,121,249,0.22)',
    particleR: 232, particleG: 121, particleB: 249,
    traits: ['Не полудемоны', 'Три вида', 'Вечные странники', '4000 лет жизни'],
    status: 'released',
    playable: true,
  },
]

// ── Не проработанные расы (заблокированы) ────────────────────────────────────
export const lockedRaces: RaceOption[] = [
  {
    id: 'lyudi', title: 'Люди', formLabel: 'Человек', category: 'Разумная раса',
    tag: 'СМЕРТНЫЕ', description: '', accent: '#A8A29E', note: null,
    status: 'locked', playable: true,
  },
  {
    id: 'lesnye-elfy', title: 'Лесные Эльфы', category: 'Разумная раса',
    tag: 'ДЕТИ ЛЕСА', description: '', accent: '#86EFAC', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'gobliny', title: 'Гоблины', category: 'Разумная раса',
    tag: 'ПЛЕМЕННЫЕ', description: '', accent: '#BEF264', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'ogry', title: 'Огры', category: 'Разумная раса',
    tag: 'ВЕЛИКАНЫ', description: '', accent: '#D97706', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'elementali', title: 'Элементали', category: 'Разумная раса',
    tag: 'ВОПЛОЩЕНИЯ СТИХИЙ', description: '', accent: '#38BDF8', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'chajliny', title: 'Чайлины', category: 'Разумная раса',
    tag: 'НЕИЗВЕСТНО', description: '', accent: '#2DD4BF', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'rezonatory', title: 'Резонаторы', category: 'Особый класс',
    tag: 'ОСОБЫЙ КЛАСС', description: '', accent: '#818CF8', note: 'временно недоступны',
    status: 'locked', playable: false,
  },
  {
    id: 'drakonity', title: 'Дракониты', category: 'Разумная раса',
    tag: 'ПОТОМКИ ДРАКОНА', description: '', accent: '#F97316', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'velikany', title: 'Великаны / Гиганты', category: 'Разумная раса',
    tag: 'ИСПОЛИНЫ', description: '', accent: '#6B7280', note: 'недоступны',
    status: 'locked', playable: false,
  },
  {
    id: 'lesnye-dukhi', title: 'Лесные Духи', category: 'Разумная раса',
    tag: 'ДУХИ ПРИРОДЫ', description: '', accent: '#4ADE80', note: null,
    status: 'locked', playable: false,
  },
  {
    id: 'oni', title: 'Óни', category: 'Разумная раса',
    tag: 'ВОСТОЧНЫЕ ВОИНЫ', description: '', accent: '#F87171', note: 'не демоны, просто иные люди',
    status: 'locked', playable: false,
  },
]

/** Расы, доступные для выбора в анкете персонажа (исключены вымершие/непроработанные). */
export const playableRaces: RaceOption[] = [...races, ...lockedRaces].filter((r) => r.playable)

/** Компактный список рас со статьями — для раздела «Введение». */
export const raceEntriesForIntro = races
  .filter((r) => r.href && r.shortDescription)
  .map((r) => ({ name: r.title, href: r.href!, desc: r.shortDescription!, badge: r.badge }))
