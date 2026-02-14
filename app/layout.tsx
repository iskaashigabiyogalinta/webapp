import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iskaashiga Biyogalinta Hargeysa - Nidaamka Maamulka Qaaraanka Biyogalinta',
  description: 'Nidaamka maamulka qaaraanka xaafadaha Hargeysa loogu talagalay mashruuca biyaha ee xaafadaha.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="so">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
