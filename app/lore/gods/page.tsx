import type { Metadata } from 'next'
import GodsDirectory from '@/components/lore/GodsDirectory'

export const metadata: Metadata = {
  title: 'Пантеон богов — Stormmaster Archive',
  description: '23 сущности пантеона Калдериса. Абсолютные боги, чья сила не зависит от веры смертных.',
}

export default function GodsPage() {
  return <GodsDirectory />
}
