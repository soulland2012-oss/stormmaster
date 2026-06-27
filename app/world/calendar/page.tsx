import type { Metadata } from 'next'
import CalendarPage from '@/components/world/CalendarPage'

export const metadata: Metadata = {
  title: 'Календарь Калдериса — Stormmaster Archive',
  description: 'Двенадцать месяцев мира Калдерис — каждый назван в честь одного из богов пантеона. Так летосчисление стало молитвой.',
}

export default function Calendar() {
  return <CalendarPage />
}
