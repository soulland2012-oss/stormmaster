'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 120) {
        setVisible(false)
      } else if (y < lastY.current) {
        setVisible(true)
      } else if (y > lastY.current) {
        setVisible(false)
      }
      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0,  scale: 1   }}
          exit={{   opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          aria-label="Наверх"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 9999,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(212,175,55,0.12)',
            border: '1px solid rgba(212,175,55,0.55)',
            boxShadow: '0 0 0 1px rgba(212,175,55,0.18), 0 0 18px 6px rgba(212,175,55,0.28), 0 0 40px 12px rgba(212,175,55,0.12)',
            color: '#D4AF37',
            cursor: 'pointer',
            borderRadius: '2px',
          }}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
