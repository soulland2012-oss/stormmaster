import type { Metadata } from 'next'
import SystemsHub from '@/components/lore/SystemsHub'

export const metadata: Metadata = {
  title: 'Системы Сил — Stormmaster Archive',
  description: 'Аура и Магия — два фундаментальных пути силы в мире Stormmaster. Узнайте о природе каждой системы, рангах мастерства и их взаимодействии.',
}

export default function SystemsPage() {
  return <SystemsHub />
}
