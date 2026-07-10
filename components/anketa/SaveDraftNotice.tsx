'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, RotateCcw } from 'lucide-react'

const ACCENT = '#D4AF37'

interface SaveDraftNoticeProps {
  visible: boolean
  onDismiss: () => void
}

export default function SaveDraftNotice({ visible, onDismiss }: SaveDraftNoticeProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -12, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -12, height: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-sm mb-6"
            style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30` }}
          >
            <RotateCcw size={14} style={{ color: ACCENT }} className="shrink-0" />
            <p className="text-stone-600 text-xs leading-5 flex-1">
              Черновик анкеты восстановлен из предыдущей сессии.
            </p>
            <button
              type="button"
              onClick={onDismiss}
              className="shrink-0 p-1 text-stone-400 hover:text-stone-600 transition-colors"
              aria-label="Скрыть уведомление"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
