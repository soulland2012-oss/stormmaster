'use client'

import { AnimatePresence, motion } from 'framer-motion'
import ChipSelect from './ChipSelect'
import { mysticAbilityTypes, magicPaths } from '@/data/mystic-systems'
import type { MysticType, MagicPath } from '@/types/anketa'

interface MysticAbilityPickerProps {
  mysticType: MysticType | null
  magicPath: MagicPath | null
  onMysticTypeChange: (value: MysticType) => void
  onMagicPathChange: (value: MagicPath) => void
}

export default function MysticAbilityPicker({
  mysticType,
  magicPath,
  onMysticTypeChange,
  onMagicPathChange,
}: MysticAbilityPickerProps) {
  return (
    <div>
      <ChipSelect
        layout="inline"
        options={mysticAbilityTypes.map((t) => ({ id: t.id, label: t.label, accent: t.accent, href: t.href }))}
        value={mysticType}
        onChange={(id) => onMysticTypeChange(id as MysticType)}
      />

      <AnimatePresence>
        {mysticType === 'magic' && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3.5">
              <span
                className="block font-cinzel text-[0.62rem] tracking-[0.16em] text-stone-500 mb-2"
                style={{ fontFamily: 'var(--font-cinzel, serif)' }}
              >
                ПУТЬ
              </span>
              <ChipSelect
                layout="inline"
                options={magicPaths.map((p) => ({ id: p.id, label: p.label, accent: p.accent, href: p.href }))}
                value={magicPath}
                onChange={(id) => onMagicPathChange(id as MagicPath)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
