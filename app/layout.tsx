import Header from '@/components/header'
import CallToActionSection from '@/components/calltoaction'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <CallToActionSection />
      </body>
    </html>
  )
}