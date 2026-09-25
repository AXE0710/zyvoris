'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer
      id="footer"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        text-[#0b1735] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw]">
        {/* =========================================================
            NEXT STEP / COMPACT CTA BANNER
        ========================================================== */}
        <div className="py-6 sm:py-8 lg:py-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border-2 border-slate-900 dark:border-slate-800
              bg-white dark:bg-[#0b1329]
              p-6 sm:p-8 lg:p-10
              shadow-lg
            "
          >
            {/* Ambient Background Accents */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl dark:bg-blue-600/15" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
              {/* Left Column: Heading & Description */}
              <div className="max-w-2xl">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-950 dark:text-white leading-tight">
                  {language === 'de'
                    ? 'Modernisieren Sie Ihren Steuer-Workflow für Privatmärkte.'
                    : 'Modernize your private markets tax workflow.'}
                </h2>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
                  {language === 'de'
                    ? 'Sehen Sie, wie ZYVORIS Struktur, Kontrolle und Skalierbarkeit in komplexe Steuer-Reporting-Prozesse bringt.'
                    : 'See how ZYVORIS can bring structure, control, and scalability to complex tax reporting processes.'}
                </p>
              </div>

              {/* Right Column: Compact Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <a
                  href="mailto:info@zyvoris.ai?subject=ZYVORIS%20Demo%20Request"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    h-11 px-5
                    rounded-xl
                    bg-slate-950 dark:bg-blue-600
                    border-2 border-slate-900 dark:border-blue-500
                    font-mono
                    text-xs
                    font-bold
                    text-white
                    no-underline
                    shadow-sm
                    transition-all
                    duration-150
                    hover:bg-slate-800 dark:hover:bg-blue-500
                    hover:-translate-y-0.5
                  "
                >
                  <span>{language === 'de' ? 'Demo anfragen' : 'Book a Demo'}</span>
                  <span>→</span>
                </a>

                <a
                  href="mailto:info@zyvoris.ai?subject=Contact%20ZYVORIS"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    h-11 px-5
                    rounded-xl
                    border-2 border-slate-900 dark:border-slate-700
                    bg-white dark:bg-slate-900
                    font-mono
                    text-xs
                    font-bold
                    text-slate-900 dark:text-slate-200
                    no-underline
                    shadow-xs
                    transition-all
                    duration-150
                    hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800
                    hover:-translate-y-0.5
                  "
                >
                  <span>{language === 'de' ? 'Kontakt' : 'Contact Us'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTER NAVIGATION
        ========================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-8 sm:gap-10
            border-t-2 border-slate-900 dark:border-slate-800
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.6fr_1fr_1fr_1fr]
          "
        >
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center no-underline"
            >
              <Image
                src="/logo.png"
                alt="ZYVORIS"
                width={200}
                height={54}
                className="h-[44px] sm:h-[48px] w-auto object-contain dark:brightness-0 dark:invert"
              />
            </Link>

            <p
              className="
                mt-4
                max-w-[380px]
                text-[12px]
                leading-[1.7]
                text-slate-700 dark:text-slate-400
                font-medium
              "
            >
              {t(
                'footer_desc',
                'Tax reporting infrastructure engineered for complex private-market asset management.'
              )}
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h3
              className="
                font-mono
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-950 dark:text-slate-200
              "
            >
              {t('nav_platform', 'Platform')}
            </h3>

            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/product"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {language === 'de' ? 'Übersicht' : 'Overview'}
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('nav_use_cases', 'Use Cases')}
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('nav_technology', 'Technology')}
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('nav_compare', 'Compare')}
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3
              className="
                font-mono
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-950 dark:text-slate-200
              "
            >
              {t('nav_company', 'Company')}
            </h3>

            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {language === 'de' ? 'Über ZYVORIS' : 'About ZYVORIS'}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('nav_team', 'Leadership Team')}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@zyvoris.ai"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-400 no-underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {language === 'de' ? 'Kontakt & Anfragen' : 'Contact & Inquiries'}
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                font-mono
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-950 dark:text-slate-200
              "
            >
              {language === 'de' ? 'Kontakt' : 'Get in touch'}
            </h3>

            <a
              href="mailto:info@zyvoris.ai"
              className="
                mt-4
                inline-block
                font-mono
                text-xs
                font-bold
                text-slate-900 dark:text-slate-300
                no-underline
                transition-colors
                hover:text-blue-600 dark:hover:text-blue-400
              "
            >
              info@zyvoris.ai
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}
        <div
          className="
            flex
            flex-col
            gap-3
            border-t-2 border-slate-900 dark:border-slate-800
            py-6
            text-xs
            font-medium
            text-slate-600 dark:text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© {new Date().getFullYear()} ZYVORIS. {t('footer_rights', 'All rights reserved.')}</p>
          <p>{t('footer_subtitle', 'Designed for complex private-market reporting workflows.')}</p>
        </div>
      </div>
    </footer>
  )
}
