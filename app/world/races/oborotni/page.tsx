import type { Metadata } from 'next'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import OborotniBody from '@/components/world/races/OborotniBody'

export const metadata: Metadata = {
  title: 'Оборотни — Stormmaster Archive',
  description: 'Двенадцать кланов, тысячелетия истории. Оборотни — существа двойственной природы, хранители слабых и непреклонные воины.',
}

const quickFacts = [
  { label: 'Тип существа',   value: 'Двойственная раса' },
  { label: 'Трансформация',  value: 'Волчья и промежуточная форма' },
  { label: 'Кланы',          value: '12 кланов (1 истреблён)' },
  { label: 'Регенерация',    value: 'Ускоренная, особенно вне боя' },
  { label: 'Связь',          value: 'С предками через оружие' },
  { label: 'Передача',       value: 'Укус или рождение' },
  { label: 'Долголетие',     value: 'До 250 лет' },
]

const sections = [
  { id: 'nature',    title: 'Природа Оборотней' },
  { id: 'forms',     title: 'Формы и Способности' },
  { id: 'clans',     title: 'Двенадцать Кланов' },
  { id: 'society',   title: 'Общество и Иерархия' },
  { id: 'history',   title: 'История' },
]

const ACCENT = '#F59E0B'

export default function OborotniPage() {
  return (
    <article>
      <ArticleHero
        title="Оборотни"
        subtitle="Расы мира · Stormmaster"
        tagline="Двойственность — их природа. Луна — их господин."
        description="Оборотни — существа на грани двух миров. В человеческом облике они неотличимы от смертных, но в миг трансформации становятся воплощением первобытной ярости. Двенадцать кланов, тысячелетия истории, кровь — их единственный закон."
        atmosphere="light"
        tags={['ИЗМЕНЯЮЩИЕ ФОРМУ', 'ДВЕНАДЦАТЬ КЛАНОВ', 'ЛУННАЯ СВЯЗЬ']}
      />

      <div className="min-h-screen" style={{ background: 'rgb(252 248 242)' }}>
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <OborotniBody />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts facts={quickFacts} title="О расе" accentColor={ACCENT} showCrest={false} />
              <div className="lg:sticky lg:top-24">
                <TableOfContents sections={sections} accentColor={ACCENT} />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </article>
  )
}
