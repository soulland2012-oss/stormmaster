import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Stormmaster Archive',
    template: '%s | Stormmaster Archive',
  },
  description: 'Официальная энциклопедия вселенной Stormmaster — тысячи лет истории, летописей и легенд.',
  keywords: ['stormmaster', 'fantasy', 'lore', 'энциклопедия', 'архив'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
