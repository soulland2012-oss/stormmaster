import type { Metadata } from 'next'
import ArticleHero from '@/components/lore/ArticleHero'
import QuickFacts from '@/components/lore/QuickFacts'
import TableOfContents from '@/components/lore/TableOfContents'
import AnketaForm from '@/components/anketa/AnketaForm'
import { ANKETA_FIELDS } from '@/data/anketa-fields'

export const metadata: Metadata = {
  title: 'Создать анкету — Stormmaster Archive',
  description: 'Заполните анкету персонажа прямо на сайте и скачайте её в формате PDF.',
}

const ACCENT = '#D4AF37'

const sections = ANKETA_FIELDS.map((f) => ({ id: f.id, title: f.label }))

const quickFacts = [
  { label: 'Формат', value: 'PDF-файл' },
  { label: 'Автосохранение', value: 'Черновик в браузере' },
  { label: 'Пунктов', value: `${ANKETA_FIELDS.length}` },
  { label: 'Система', value: 'Без цифровых характеристик' },
]

export default function CreateCharacterPage() {
  return (
    <article>
      <ArticleHero
        title="Создать анкету"
        subtitle="Персонажи"
        tagline="Ваша история начинается здесь"
        description="Заполните форму по всем пунктам анкеты — черновик сохранится автоматически. По завершении скачайте готовую анкету в виде PDF."
        atmosphere="light"
        tags={['АНКЕТА', 'ПЕРСОНАЖ', 'PDF']}
      />

      <div
        className="min-h-screen"
        style={{ background: 'rgb(var(--bg-primary, 250 250 245))' }}
      >
        <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto px-5 lg:px-10 2xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <AnketaForm />

            <aside className="col-span-12 lg:col-span-4 order-first lg:order-last space-y-4">
              <QuickFacts facts={quickFacts} title="О форме" accentColor={ACCENT} showCrest={false} />
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
