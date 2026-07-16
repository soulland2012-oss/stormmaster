import type { Metadata } from 'next'
import FederationHub from '@/components/world/FederationHub'

export const metadata: Metadata = {
  title: 'Федерация Фенридия — Stormmaster Archive',
  description: 'Континент, объединяющий пять государств: Империю Фенридия, Графство Крови, Грасию, Казимеж и Йотунхейм.',
}

export default function FederatsiyaFenridiyaPage() {
  return <FederationHub />
}
