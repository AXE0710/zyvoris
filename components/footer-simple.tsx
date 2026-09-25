'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function SimpleFooter() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const linkClass = 'text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline'
  const headingClass = 'font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-900 dark:text-slate-200'

  return (
    <footer id="footer" className="border-t border-slate-200/80 bg-[#f6f9fd] text-[#0b1735] transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#070d18] dark:text-slate-100">
      <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw] pt-14 pb-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] pb-10">
          <div>
            <Link href="/" className="inline-flex no-underline">
              <Image
                src="/logo.png"
                alt="ZYVORIS"
                width={190}
                height={50}
                className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-xs leading-[1.7] text-slate-600 dark:text-slate-400">
              {isGerman
                ? 'ZYVORIS baut Steuerinfrastruktur für Privatmärkte und verbindet Fondsdaten, Steuerlogik, Berechnungen, Prüfung und Reporting in einer strukturierten Plattform.'
                : 'ZYVORIS is building tax infrastructure for private markets — connecting fund data, tax logic, calculations, review, and reporting in one structured platform.'}
            </p>
            <div className="mt-4">
              <a
                href="mailto:info@zyvoris.ai"
                className="font-mono text-xs font-semibold text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 no-underline transition-colors"
              >
                info@zyvoris.ai
              </a>
            </div>
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
              <li><Link href="/legal" className={linkClass}>{isGerman ? 'Rechtliche Hinweise' : 'Legal Notice'}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[11.5px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl m-0">
            {isGerman
              ? 'ZYVORIS ist eine Technologieplattform und bietet keine Steuerberatung an. Steuerliche Schlussfolgerungen und Reporting-Outputs unterliegen weiterhin der fachlichen Prüfung und dem geltenden Recht.'
              : 'ZYVORIS is a technology platform and does not provide tax advice. Tax conclusions and reporting outputs remain subject to professional review and applicable law.'}
          </p>

          <p className="shrink-0 text-xs font-mono text-slate-500 dark:text-slate-400 m-0">
            © {new Date().getFullYear()} ZYVORIS. {isGerman ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}