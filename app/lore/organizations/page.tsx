import type { Metadata } from 'next'
import OrganizationsHub from '@/components/lore/OrganizationsHub'

export const metadata: Metadata = {
  title: 'Организации — Stormmaster Archive',
  description: 'Дома, ордены и тайные культы мира Stormmaster — от Дома Каслана под знаменем Альянса до независимых культов Историй и Тихого Хора.',
}

export default function OrganizationsPage() {
  return <OrganizationsHub />
}
