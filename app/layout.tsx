import type { Metadata } from 'next'
import './globals.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Haven',
  description: 'Your digital sanctuary',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
          {children}
      </body>
    </html>
  )
}
