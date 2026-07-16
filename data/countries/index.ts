export interface CountrySummary {
  id: string
  href: string
  title: string
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

export const countries: CountrySummary[] = [
  {
    id: 'federatsiya-fenridiya',
    href: '/world/countries/federatsiya-fenridiya',
    title: 'Федерация Фенридия',
    category: 'Континент · Пять государств',
    tag: 'ФЕДЕРАЦИЯ',
    description:
      'Единый континент, объединяющий Империю Фенридия, Графство Крови, Грасию, Казимеж и Йотунхейм под знаменем Императора.',
    accent: '#D4AF37',
    gradient: 'from-amber-950/95 via-stone-950/90 to-yellow-950/95',
    glowBg: 'rgba(212,175,55,0.22)',
    particleR: 212, particleG: 175, particleB: 55,
    traits: ['5 государств', 'Империя', 'Диархия', 'Автономии'],
  },
  {
    id: 'yukl',
    href: '/world/countries/yukl',
    title: 'ЮКЛ',
    category: 'Южная Колония Людей',
    tag: 'КОЛОНИЯ',
    description:
      'Отдалённое владение королевства людей на третьем материке, управляемое временным советом наместников.',
    accent: '#A78BFA',
    gradient: 'from-violet-950/95 via-stone-950/90 to-purple-950/95',
    glowBg: 'rgba(167,139,250,0.20)',
    particleR: 167, particleG: 139, particleB: 250,
    traits: ['Временное правительство', 'Волевой Орден', 'Аграрная экономика', '600 000 жителей'],
  },
  {
    id: 'dvorflyandiya',
    href: '/world/countries/dvorflyandiya',
    title: 'Дворфляндия',
    category: 'Царство дворфов',
    tag: 'ЦАРСТВО',
    description:
      'Древняя технологическая держава под горами Новой Терры — стимпанк с рунной магией и Стальной легион големов.',
    accent: '#C0C0C0',
    gradient: 'from-slate-800/95 via-stone-950/90 to-zinc-950/95',
    glowBg: 'rgba(192,192,192,0.18)',
    particleR: 192, particleG: 192, particleB: 192,
    traits: ['Стальной легион', 'Царь и Дума', '1,67 млрд жителей', 'Союзники — орки'],
  },
]
