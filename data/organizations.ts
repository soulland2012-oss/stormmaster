// Организации мира — для хаба «Организации» в разделе «Лор».

export interface OrganizationSummary {
  id: string
  href: string
  title: string
  /** Название фракции, к которой относится организация. `null` — без аффилиации. */
  affiliation: string | null
  category: string
  tag: string
  description: string
  accent: string
  gradient: string
  glowBg: string
  particleR: number
  particleG: number
  particleB: number
  traits: string[]
}

export const organizations: OrganizationSummary[] = [
  {
    id: 'house-kaslana',
    href: '/lore/house-kaslana',
    title: 'Дом Каслана',
    affiliation: 'Альянс',
    category: 'Благородный дом',
    tag: 'РЫЦАРСКИЙ ОРДЕН',
    description:
      'Один из древнейших и наиболее почитаемых рыцарских родов известного мира. Символ дисциплины, самоотверженности и непреклонной верности идеалам Света — Белый Мантис и Чёрная Моль, два пути одной крови.',
    accent: '#D4AF37',
    gradient: 'from-amber-950/95 via-stone-950/90 to-yellow-950/95',
    glowBg: 'rgba(212,175,55,0.22)',
    particleR: 212, particleG: 175, particleB: 55,
    traits: ['Академия Каслана', 'Белый Мантис', 'Чёрная Моль', 'Светозарный Орден'],
  },
  {
    id: 'kult-istoriy',
    href: '/lore/organizations/kult-istoriy',
    title: 'Культ Историй',
    affiliation: null,
    category: 'Религиозный культ',
    tag: 'БОГ ПАМЯТИ',
    description:
      'Малочисленный тайный культ нейтрального бога Историй и Памяти, исполняющего любые желания в обмен на воспоминания — стёртые из мира навсегда, без следа и права на пересказ.',
    accent: '#B8935A',
    gradient: 'from-amber-950/90 via-stone-950/90 to-orange-950/90',
    glowBg: 'rgba(184,147,90,0.20)',
    particleR: 184, particleG: 147, particleB: 90,
    traits: ['Плата историями', 'Абсолютная память', 'Без иерархии', 'Менее сотни последователей'],
  },
  {
    id: 'tikhiy-khor',
    href: '/lore/organizations/tikhiy-khor',
    title: 'Тихий Хор',
    affiliation: null,
    category: 'Культ небытия',
    tag: 'БОГ ТЬМЫ',
    description:
      'Нигилистический культ Залмира, Бога Тьмы и Истинного Конца. Не армия, а метастаза отчаяния — добровольные палачи энтропии, чья единственная цель — ускорить возвращение мира к Пустоте.',
    accent: '#6E7A8A',
    gradient: 'from-slate-950/95 via-stone-950/95 to-gray-950/95',
    glowBg: 'rgba(110,122,138,0.20)',
    particleR: 110, particleG: 122, particleB: 138,
    traits: ['Культ Залмира', '4 ранга посвящения', 'Ритуалы стирания', 'Эпидемия энтропии'],
  },
]
