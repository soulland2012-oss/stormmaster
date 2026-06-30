import type { Metadata } from 'next'
import RacesHub from '@/components/world/RacesHub'

export const metadata: Metadata = {
  title: 'Расы — Stormmaster Archive',
  description: 'Народы мира Калдерис: от изгнанников-Дроу в подземных городах до оборотней, скованных лунным проклятием. Энциклопедия рас Stormmaster.',
}

export default function RacesPage() {
  return <RacesHub />
}
