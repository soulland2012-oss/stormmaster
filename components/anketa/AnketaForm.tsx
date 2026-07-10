'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Loader2, RotateCcw } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { EMPTY_ANKETA, type AnketaFormData, type Gender } from '@/types/anketa'
import { playableRaces } from '@/data/races'
import { ANKETA_FIELDS } from '@/data/anketa-fields'
import FormSection from './FormSection'
import ChipSelect from './ChipSelect'
import MysticAbilityPicker from './MysticAbilityPicker'
import TextField from './TextField'
import TextAreaField from './TextAreaField'
import SaveDraftNotice from './SaveDraftNotice'

const ACCENT = '#D4AF37'

const GENDER_OPTIONS: { id: Gender; label: string }[] = [
  { id: 'male', label: 'Мужской' },
  { id: 'female', label: 'Женский' },
]

const RACE_OPTIONS = playableRaces.map((r) => ({
  id: r.id,
  label: r.formLabel ?? r.title,
  accent: r.accent,
  href: r.href,
  note: r.gmApprovalRequired ? 'нужно разрешение ГМа' : undefined,
}))

export default function AnketaForm() {
  const [draft, setDraft, { clear, isRestored }] = useLocalStorage<AnketaFormData>('anketa-draft', EMPTY_ANKETA)
  const [noticeVisible, setNoticeVisible] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!isRestored) return
    if (draft.firstName || draft.lastName || draft.biography) setNoticeVisible(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRestored])

  function update<K extends keyof AnketaFormData>(field: K, value: AnketaFormData[K]) {
    setDraft((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setIsGenerating(true)
    try {
      const { generateAnketaPdf } = await import('./pdf/generateAnketaPdf')
      await generateAnketaPdf(draft)
    } finally {
      setIsGenerating(false)
    }
  }

  function handleClearDraft() {
    if (window.confirm('Очистить черновик анкеты? Это действие нельзя отменить.')) {
      clear()
    }
  }

  const nameIsEmpty = !draft.firstName.trim() && !draft.lastName.trim()

  return (
    <main className="col-span-12 lg:col-span-8 order-last lg:order-first">
      <SaveDraftNotice visible={noticeVisible} onDismiss={() => setNoticeVisible(false)} />

      <FormSection id={ANKETA_FIELDS[0].id} num={ANKETA_FIELDS[0].num} title={ANKETA_FIELDS[0].label}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField label="Имя" value={draft.firstName} onChange={(v) => update('firstName', v)} placeholder="Имя персонажа" />
          <TextField label="Фамилия" value={draft.lastName} onChange={(v) => update('lastName', v)} placeholder="Фамилия персонажа" />
        </div>
        {nameIsEmpty && (
          <p className="text-stone-400 text-xs italic">Укажите хотя бы имя или фамилию.</p>
        )}
      </FormSection>

      <FormSection id={ANKETA_FIELDS[1].id} num={ANKETA_FIELDS[1].num} title={ANKETA_FIELDS[1].label} description={ANKETA_FIELDS[1].desc}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TextField label="Рост" value={draft.height} onChange={(v) => update('height', v)} placeholder="напр. 178 см" />
          <TextField label="Вес" value={draft.weight} onChange={(v) => update('weight', v)} placeholder="напр. 70 кг" />
          <TextField label="Возраст" value={draft.age} onChange={(v) => update('age', v)} placeholder="напр. 24 года" />
        </div>

        <div>
          <span
            className="block font-cinzel text-[0.62rem] tracking-[0.16em] text-stone-500 mb-2"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            ПОЛ
          </span>
          <ChipSelect
            layout="inline"
            options={GENDER_OPTIONS}
            value={draft.gender}
            onChange={(id) => update('gender', id as Gender)}
            accentColor={ACCENT}
          />
        </div>

        <div>
          <span
            className="block font-cinzel text-[0.62rem] tracking-[0.16em] text-stone-500 mb-2"
            style={{ fontFamily: 'var(--font-cinzel, serif)' }}
          >
            РАСА
          </span>
          <ChipSelect
            layout="grid"
            options={RACE_OPTIONS}
            value={draft.raceId}
            onChange={(id) => update('raceId', id)}
            accentColor={ACCENT}
          />
        </div>
      </FormSection>

      <FormSection id={ANKETA_FIELDS[2].id} num={ANKETA_FIELDS[2].num} title={ANKETA_FIELDS[2].label} description={ANKETA_FIELDS[2].desc}>
        <TextAreaField label="Описание" value={draft.physicalAbilities} onChange={(v) => update('physicalAbilities', v)} rows={4} />
      </FormSection>

      <FormSection id={ANKETA_FIELDS[3].id} num={ANKETA_FIELDS[3].num} title={ANKETA_FIELDS[3].label} description={ANKETA_FIELDS[3].desc}>
        <MysticAbilityPicker
          mysticType={draft.mysticType}
          magicPath={draft.magicPath}
          onMysticTypeChange={(v) => setDraft((prev) => ({ ...prev, mysticType: v, magicPath: v === 'magic' ? prev.magicPath : null }))}
          onMagicPathChange={(v) => update('magicPath', v)}
        />
        <TextAreaField label="Абилки и аспекты" value={draft.mysticAbilities} onChange={(v) => update('mysticAbilities', v)} rows={4} />
      </FormSection>

      <FormSection id={ANKETA_FIELDS[4].id} num={ANKETA_FIELDS[4].num} title={ANKETA_FIELDS[4].label} description={ANKETA_FIELDS[4].desc}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TextField label="Статус" value={draft.status} onChange={(v) => update('status', v)} />
          <TextField label="Профессия" value={draft.profession} onChange={(v) => update('profession', v)} />
          <TextField label="Ранг" value={draft.rank} onChange={(v) => update('rank', v)} />
        </div>
      </FormSection>

      <FormSection id={ANKETA_FIELDS[5].id} num={ANKETA_FIELDS[5].num} title={ANKETA_FIELDS[5].label} description={ANKETA_FIELDS[5].desc}>
        <TextAreaField label="Навыки" value={draft.skills} onChange={(v) => update('skills', v)} rows={3} />
      </FormSection>

      <FormSection id={ANKETA_FIELDS[6].id} num={ANKETA_FIELDS[6].num} title={ANKETA_FIELDS[6].label} description={ANKETA_FIELDS[6].desc}>
        <TextAreaField label="Инвентарь" value={draft.inventory} onChange={(v) => update('inventory', v)} rows={3} />
      </FormSection>

      <FormSection id={ANKETA_FIELDS[7].id} num={ANKETA_FIELDS[7].num} title={ANKETA_FIELDS[7].label}>
        <TextAreaField label="Характер" value={draft.personality} onChange={(v) => update('personality', v)} rows={4} />
      </FormSection>

      <FormSection id={ANKETA_FIELDS[8].id} num={ANKETA_FIELDS[8].num} title={ANKETA_FIELDS[8].label}>
        <TextAreaField label="Биография" value={draft.biography} onChange={(v) => update('biography', v)} rows={6} />
      </FormSection>

      <FormSection id={ANKETA_FIELDS[9].id} num={ANKETA_FIELDS[9].num} title={ANKETA_FIELDS[9].label}>
        <TextAreaField label="Внешность" value={draft.appearance} onChange={(v) => update('appearance', v)} rows={4} />
      </FormSection>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 pt-4 mt-4"
        style={{ borderTop: `1px solid ${ACCENT}20` }}
      >
        <button
          type="button"
          onClick={handleSave}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 font-cinzel text-xs tracking-[0.15em] px-6 py-3 rounded-sm transition-all duration-200 disabled:opacity-60"
          style={{
            fontFamily: 'var(--font-cinzel, serif)',
            background: ACCENT,
            color: '#1A1408',
          }}
        >
          {isGenerating ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
          {isGenerating ? 'ГЕНЕРАЦИЯ PDF...' : 'СОХРАНИТЬ И СКАЧАТЬ PDF'}
        </button>

        <button
          type="button"
          onClick={handleClearDraft}
          className="inline-flex items-center gap-2 font-cinzel text-xs tracking-[0.15em] px-5 py-3 rounded-sm text-stone-500 hover:text-stone-700 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-cinzel, serif)', border: `1px solid ${ACCENT}25` }}
        >
          <RotateCcw size={13} />
          ОЧИСТИТЬ ЧЕРНОВИК
        </button>
      </motion.div>
    </main>
  )
}
