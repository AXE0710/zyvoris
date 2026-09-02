import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/header'
import CallToActionSection from '@/components/calltoaction'
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

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ZYVORIS — Global Fund Tax Infrastructure for Private Markets',
  description:
    'Turn complex fund data into jurisdiction-ready tax reporting. ZYVORIS connects financial data, fund structures, tax logic, calculations, and reporting in one unified infrastructure layer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
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