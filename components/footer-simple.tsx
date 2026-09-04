'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function SimpleFooter() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const linkClass = 'text-xs font-semibold text-slate-700 no-underline transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
  const headingClass = 'font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-950 dark:text-slate-200'

  return (
    <footer id="footer" className="border-t-2 border-slate-900 bg-[#f0f4f9] text-[#0b1735] transition-colors duration-200 dark:border-slate-800 dark:bg-[#090e1c] dark:text-slate-100">
      <div className="mx-auto max-w-355 px-4 sm:px-6 lg:px-[5vw]">
        <div className="grid grid-cols-1 gap-10 border-b-2 border-slate-900 py-12 dark:border-slate-800 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex no-underline">
              <Image src="/logo.png" alt="ZYVORIS" width={200} height={54} className="h-12 w-auto object-contain dark:brightness-0 dark:invert" />
            </Link>
            <p className="mt-4 max-w-95 text-xs leading-[1.7] text-slate-700 dark:text-slate-400">
              {isGerman
                ? 'ZYVORIS baut Steuerinfrastruktur für Privatmärkte und verbindet Fondsdaten, Steuerlogik, Berechnungen, Prüfung und Reporting in einer strukturierten Plattform.'
                : 'ZYVORIS is building tax infrastructure for private markets — connecting fund data, tax logic, calculations, review, and reporting in one structured platform.'}
            </p>
          </div>

          <div>
            <h2 className={headingClass}>{isGerman ? 'Plattform' : 'Platform'}</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/platform" className={linkClass}>{isGerman ? 'Plattform' : 'Platform'}</Link></li>
              <li><Link href="/use-cases" className={linkClass}>{isGerman ? 'Anwendungsfälle' : 'Use Cases'}</Link></li>
              <li><Link href="/technology" className={linkClass}>{isGerman ? 'Technologie' : 'Technology'}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>{isGerman ? 'Unternehmen' : 'Company'}</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/company" className={linkClass}>{isGerman ? 'Unternehmen' : 'Company'}</Link></li>
              <li><Link href="/contact" className={linkClass}>{isGerman ? 'Kontakt' : 'Contact'}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>{isGerman ? 'Rechtliches' : 'Legal'}</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/privacy" className={linkClass}>{isGerman ? 'Datenschutz' : 'Privacy'}</Link></li>
              <li><Link href="/terms" className={linkClass}>{isGerman ? 'Nutzungsbedingungen' : 'Terms'}</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 border-b-2 border-slate-900 py-8 dark:border-slate-800 sm:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className={headingClass}>{isGerman ? 'Kontakt' : 'Contact'}</h2>
            <a href="mailto:info@zyvoris.ai" className="mt-4 inline-block font-mono text-xs font-bold text-slate-900 no-underline transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">info@zyvoris.ai</a>
          </div>
          <div>
            <h2 className={headingClass}>{isGerman ? 'Haftungsausschluss' : 'Disclaimer'}</h2>
            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate-700 dark:text-slate-400">
              {isGerman
                ? 'ZYVORIS ist eine Technologieplattform und bietet keine Steuerberatung an. Steuerliche Schlussfolgerungen und Reporting-Outputs unterliegen weiterhin der fachlichen Prüfung und dem geltenden Recht.'
                : 'ZYVORIS is a technology platform and does not provide tax advice. Tax conclusions and reporting outputs remain subject to professional review and applicable law.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-xs font-medium text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ZYVORIS. {isGerman ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}