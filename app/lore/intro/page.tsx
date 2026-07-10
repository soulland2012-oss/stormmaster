import type { Metadata } from 'next'
import ArticleHero from '@/components/lore/ArticleHero'
import IntroBody from '@/components/lore/IntroBody'
import TableOfContents from '@/components/lore/TableOfContents'
import RelatedArticles from '@/components/lore/RelatedArticles'

export const metadata: Metadata = {
  title: 'Введение — Stormmaster Archive',
  description: 'Краткий экскурс во вселенную Stormmaster: лор, сеттинг, расы, системы магии и правила для новичков.',
}

const ACCENT = '#C9A84C'

const sections = [
  { id: 'lore',           title: 'Лор' },
  { id: 'gods',           title: 'Пантеон Богов' },
  { id: 'leviathans',     title: 'Космические Левиафаны' },
  { id: 'mortal-world',   title: 'Смертный Мир' },
  { id: 'golden-age',     title: 'Золотая Эра' },
  { id: 'our-epoch',      title: 'Наша Эпоха' },
  { id: 'setting',        title: 'Сеттинг' },
  { id: 'world-news',     title: 'Что в Мире' },
  { id: 'races',          title: 'Расы' },
  { id: 'character-guide', title: 'Гайд по Анкете' },
  { id: 'aura-magic',     title: 'Аура и Магия' },
  { id: 'mechanics',      title: 'Механика' },
]

const relatedArticles = [
  {
    title: 'Пантеон богов',
    href: '/lore/gods',
    description: '23 бога младшего пантеона — их домены, связи и влияние на мир Шторммастер.',
    category: 'ПАНТЕОН',
    color: '#C9A84C',
  },
  {
    title: 'История мира',
    href: '/lore/history',
    description: 'Летопись Калдериса от рождения в Пустоте до дней нынешних.',
    category: 'ИСТОРИЯ',
    color: '#8B6914',
  },
  {
    title: 'Расы',
    href: '/world/races',
    description: 'Все доступные расы вселенной — от оборотней до инсектоидов.',
    category: 'РАСЫ',
    color: '#6B9E6B',
  },
  {
    title: 'Системы магии',
    href: '/lore/systems',
    description: 'Аура, магия и другие фундаментальные системы мироздания Калдериса.',
    category: 'СИСТЕМЫ',
    color: '#A78BFA',
  },
]

export default function IntroPage() {
  return (
    <article>
      <ArticleHero
        title="Введение"
        subtitle="Для новичков"
        tagline="Добро пожаловать в Калдерис"
        description="Всё, что нужно знать перед первым шагом в мир Шторммастер: история вселенной, сеттинг, расы, системы сил и правила. Краткий, но полный экскурс."
        atmosphere="light"
        tags={['НОВИЧКАМ', 'ВВЕДЕНИЕ', 'SHORMMASTER']}
      />

      <div
        className="min-h-screen"
        style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <IntroBody />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last">
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={sections} accentColor={ACCENT} />
              </div>
            </aside>

          </div>
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
    </article>
  )
}
