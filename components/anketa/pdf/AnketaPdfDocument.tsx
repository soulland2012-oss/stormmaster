import { Document, Page, Text, View } from '@react-pdf/renderer'
import type { AnketaFormData, Gender } from '@/types/anketa'
import { playableRaces } from '@/data/races'
import { ANKETA_FIELDS } from '@/data/anketa-fields'
import { mysticAbilityTypes, magicPaths } from '@/data/mystic-systems'
import { registerAnketaFonts } from './fonts'
import { pdfStyles as s } from './pdfStyles'

registerAnketaFonts()

const GENDER_LABELS: Record<Gender, string> = {
  male: 'Мужской',
  female: 'Женский',
}

function raceLabel(raceId: string): string {
  const race = playableRaces.find((r) => r.id === raceId)
  return race ? race.formLabel ?? race.title : '—'
}

function Field({ label, value }: { label: string; value: string }) {
  const isEmpty = !value
  return (
    <View style={s.fieldTag}>
      <Text style={s.fieldTagLabel}>{label.toUpperCase()}</Text>
      <Text style={isEmpty ? s.fieldTagValueEmpty : s.fieldTagValue}>{value || '—'}</Text>
    </View>
  )
}

function SectionBlock({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <View style={s.section} wrap={false}>
      <View style={s.sectionHeader}>
        <Text style={s.sectionNum}>{num}</Text>
        <View style={s.sectionBar} />
        <Text style={s.sectionTitle}>{title}</Text>
      </View>
      <View style={s.sectionBody}>{children}</View>
    </View>
  )
}

function ProseOrEmpty({ text, emptyLabel }: { text: string; emptyLabel: string }) {
  return text.trim() ? (
    <Text style={s.bodyText}>{text}</Text>
  ) : (
    <Text style={s.emptyText}>{emptyLabel}</Text>
  )
}

interface AnketaPdfDocumentProps {
  data: AnketaFormData
}

export default function AnketaPdfDocument({ data }: AnketaPdfDocumentProps) {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ') || 'Без имени'
  const mysticTypeLabel = data.mysticType
    ? mysticAbilityTypes.find((t) => t.id === data.mysticType)?.label
    : null
  const magicPathLabel = data.mysticType === 'magic' && data.magicPath
    ? magicPaths.find((p) => p.id === data.magicPath)?.label
    : null

  return (
    <Document title={`Анкета — ${fullName}`}>
      <Page size="A4" style={s.page}>
        <Text style={s.headerEyebrow}>АНКЕТА ПЕРСОНАЖА</Text>
        <Text style={s.headerTitle}>{fullName}</Text>
        <Text style={s.headerSubtitle}>Stormmaster Archive</Text>
        <View style={s.headerDivider} />

        <SectionBlock num={ANKETA_FIELDS[1].num} title={ANKETA_FIELDS[1].label}>
          <View style={s.row}>
            <Field label="Рост" value={data.height} />
            <Field label="Вес" value={data.weight} />
            <Field label="Возраст" value={data.age} />
            <Field label="Пол" value={GENDER_LABELS[data.gender]} />
            <Field label="Раса" value={raceLabel(data.raceId)} />
          </View>
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[2].num} title={ANKETA_FIELDS[2].label}>
          <ProseOrEmpty text={data.physicalAbilities} emptyLabel="Не указано." />
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[3].num} title={ANKETA_FIELDS[3].label}>
          <View style={s.row}>
            <Field label="Тип" value={mysticTypeLabel ?? '—'} />
            {magicPathLabel && <Field label="Путь" value={magicPathLabel} />}
          </View>
          <ProseOrEmpty text={data.mysticAbilities} emptyLabel="Абилки не описаны." />
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[4].num} title={ANKETA_FIELDS[4].label}>
          <View style={s.row}>
            <Field label="Статус" value={data.status} />
            <Field label="Профессия" value={data.profession} />
            <Field label="Ранг" value={data.rank} />
          </View>
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[5].num} title={ANKETA_FIELDS[5].label}>
          <ProseOrEmpty text={data.skills} emptyLabel="Навыки не указаны." />
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[6].num} title={ANKETA_FIELDS[6].label}>
          <ProseOrEmpty text={data.inventory} emptyLabel="Инвентарь пуст." />
        </SectionBlock>

        <View style={s.footer} fixed>
          <Text>STORMMASTER ARCHIVE</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>

      <Page size="A4" style={s.page}>
        <SectionBlock num={ANKETA_FIELDS[7].num} title={ANKETA_FIELDS[7].label}>
          <ProseOrEmpty text={data.personality} emptyLabel="Характер не описан." />
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[8].num} title={ANKETA_FIELDS[8].label}>
          <ProseOrEmpty text={data.biography} emptyLabel="Биография не написана." />
        </SectionBlock>

        <View style={s.divider} />

        <SectionBlock num={ANKETA_FIELDS[9].num} title={ANKETA_FIELDS[9].label}>
          <ProseOrEmpty text={data.appearance} emptyLabel="Внешность не описана." />
        </SectionBlock>

        <View style={s.footer} fixed>
          <Text>STORMMASTER ARCHIVE</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  )
}
