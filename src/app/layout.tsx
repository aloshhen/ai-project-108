import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Кофе. Код. Крипто.',
  description: 'Next-gen coffee ecosystem'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-400`}>
        {children}
      </body>
    </html>
  )
}