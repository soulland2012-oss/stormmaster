export interface FederationMember {
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

export const federatsiyaFenridiyaData = {
  title: 'Федерация Фенридия',
  subtitle: 'Континент · Пять государств',
  tagline: 'Единый континент под знаменем Империи',
  heroDescription:
    'Федерация Фенридия объединяет пять государств одного континента — от имперского ядра оборотней до вампирской Диархии, коррумпированного королевства, меритократии зверолюдей и автономных кланов ледяных гор.',

  members: [
    {
      id: 'imperiya-fenridiya',
      href: '/world/countries/imperiya-fenridiya',
      title: 'Империя Фенридия',
      category: 'Ядро Федерации',
      tag: 'ИМПЕРИЯ',
      description: 'Монархия оборотней с высочайшим уровнем магической науки, Девятью Легионами и миролюбивой внешней политикой.',
      accent: '#D4AF37',
      gradient: 'from-amber-950/95 via-stone-950/90 to-yellow-950/95',
      glowBg: 'rgba(212,175,55,0.22)',
      particleR: 212, particleG: 175, particleB: 55,
      traits: ['Девять Легионов', 'Совет', 'Талисизм', '> 100 млн'],
    },
    {
      id: 'grafstvo-krovi',
      href: '/world/countries/grafstvo-krovi',
      title: 'Графство Крови',
      category: 'Вампирская Диархия',
      tag: 'ГРАФСТВО',
      description: 'Домина Крови под властью Домов Найтвинг и Малькевир — статус определяет процент чистоты крови.',
      accent: '#A6203A',
      gradient: 'from-red-950/95 via-stone-950/90 to-black/90',
      glowBg: 'rgba(166,32,58,0.22)',
      particleR: 166, particleG: 32, particleB: 58,
      traits: ['Шесть Домов', 'Иерархия крови', 'Гема-реакторы', '9 млн вампиров'],
    },
    {
      id: 'grasiya',
      href: '/world/countries/grasiya',
      title: 'Грасия',
      category: 'Слабая монархия',
      tag: 'КОРОЛЕВСТВО',
      description: 'Раздробленное коррумпированное королевство под влиянием Синдиката Крестов.',
      accent: '#5A8FCC',
      gradient: 'from-slate-950/95 via-stone-950/90 to-blue-950/90',
      glowBg: 'rgba(90,143,204,0.20)',
      particleR: 90, particleG: 143, particleB: 204,
      traits: ['11 дворянских домов', 'Синдикат Крестов', 'Коррупция', '~23 млн'],
    },
    {
      id: 'kazimezh',
      href: '/world/countries/kazimezh',
      title: 'Казимеж',
      category: 'Меритократия',
      tag: 'КОРОЛЕВСТВО',
      description: 'Абсолютная монархия и меритократия — сила через заслуги, открытая для всех рас.',
      accent: '#38BDF8',
      gradient: 'from-sky-950/95 via-stone-950/90 to-cyan-950/90',
      glowBg: 'rgba(56,189,248,0.20)',
      particleR: 56, particleG: 189, particleB: 248,
      traits: ['Путь Баланса', 'Без каст', 'Столица Камелот', '~640 млн'],
    },
    {
      id: 'yotunheim',
      href: '/world/countries/yotunheim',
      title: 'Йотунхейм',
      category: 'Автономия',
      tag: 'КЛАНЫ',
      description: 'Земля йотнаров — три Круга кланов под Советом Трёх, без единого короля.',
      accent: '#6E7A8A',
      gradient: 'from-slate-900/95 via-stone-950/90 to-gray-950/90',
      glowBg: 'rgba(110,122,138,0.20)',
      particleR: 110, particleG: 122, particleB: 138,
      traits: ['Три Круга', 'Совет Трёх Кругов', 'Испытание Севера', '~500 000'],
    },
  ] satisfies FederationMember[],
}
