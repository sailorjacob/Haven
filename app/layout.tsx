import type { Metadata } from 'next'
import './globals.css'
import { Caveat } from 'next/font/google'
import CookieConsent from "../components/CookieConsent"
import { ThemeProvider } from "@/components/theme-provider"

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Haven | Digital Studio',
  description: 'Your digital sanctuary',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    statusBarStyle: 'default',
    title: 'Haven | Digital Studio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${caveat.variable} dark`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="haven-theme"
          disableTransitionOnChange
          forcedTheme="dark"
          enableColorScheme={false}
        >
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
