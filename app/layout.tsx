import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Source_Serif_4 } from 'next/font/google'
import Header from '@/components/header'
import CallToActionSection from '@/components/footer-simple'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import PageProgress from '@/components/page-progress'
import PageTransition from '@/components/page-transition'
import './globals.css'

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'ZYVORIS — Global Fund Tax Infrastructure for Private Markets',
  description:
    'Turn complex fund data into structured, jurisdiction-specific tax reporting through one controlled and traceable infrastructure layer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-blue-500 selection:text-white transition-colors duration-200">
        <ThemeProvider defaultTheme="light">
          <LanguageProvider defaultLanguage="en">
            <PageProgress />
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <PageTransition>{children}</PageTransition>
              <CallToActionSection />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}