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
            CTA SECTION (Bold Black Border Box)
        ========================================================== */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border-2 border-slate-900 dark:border-slate-700
              bg-white dark:bg-[#0e1628]
              shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_50px_rgba(0,0,0,0.4)]
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              {/* LEFT — CTA CONTENT */}
              <div className="p-6 sm:p-10 lg:p-14">
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
                  <span
                    className="
                      text-[10px]
                      font-mono
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-blue-600 dark:text-blue-400
                    "
                  >
                    {t('cta_kicker', 'Next step')}
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
                    mt-4 sm:mt-5
                    max-w-[680px]
                    text-[28px] sm:text-[38px] lg:text-[46px]
                    font-bold
                    leading-[1.12]
                    tracking-[-0.035em]
                    text-slate-950 dark:text-white
                  "
                >
                  {t('cta_title_1', 'Build tax reporting on infrastructure designed for')}{' '}
                  <span className="text-blue-600 dark:text-blue-400">
                    {t('cta_title_2', 'complexity.')}
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4 sm:mt-5
                    max-w-[590px]
                    text-[14px] sm:text-[15px]
                    leading-[1.75]
                    text-slate-700 dark:text-slate-300
                  "
                >
                  {t(
                    'cta_desc',
                    'See how ZYVORIS connects financial data, fund structures, tax logic, calculations, and reporting across complex private-market workflows.'
                  )}
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@zyvoris.ai?subject=ZYVORIS%20Demo%20Request"
                    className="
                      inline-flex
                      w-full sm:w-auto
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-slate-950 dark:bg-blue-600
                      border-2 border-black dark:border-blue-500
                      px-6
                      py-3.5
                      font-mono
                      text-[13px]
                      font-bold
                      text-white
                      no-underline
                      shadow-md
                      transition-all
                      duration-150
                      hover:bg-slate-800 dark:hover:bg-blue-500
                    "
                  >
                    <span>{t('cta_book_demo', 'Book a Demo')}</span>
                    <span>→</span>
                  </a>

                  <a
                    href="mailto:info@zyvoris.ai?subject=Contact%20ZYVORIS"
                    className="
                      inline-flex
                      w-full sm:w-auto
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border-2 border-slate-900 dark:border-slate-700
                      bg-white dark:bg-slate-800
                      px-6
                      py-3.5
                      font-mono
                      text-[13px]
                      font-bold
                      text-slate-900 dark:text-slate-200
                      no-underline
                      transition-all
                      duration-150
                      hover:bg-slate-900 hover:text-white
                    "
                  >
                    <span>{t('cta_contact', 'Contact ZYVORIS')}</span>
                  </a>
                </div>
              </div>

              {/* RIGHT — SYSTEM ARCHITECTURE DIAGRAM without icons */}
              <div
                className="
                  relative
                  border-t-2 border-slate-900 dark:border-slate-800
                  bg-slate-50 dark:bg-[#0c1324]
                  p-6 sm:p-8 lg:p-10
                  lg:border-l-2 lg:border-t-0
                "
              >
                <div className="relative z-10 flex h-full flex-col justify-center space-y-3">
                  {/* SOURCE */}
                  <div className="rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-3.5">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      [01] {language === 'de' ? 'QUELLE' : 'SOURCE'}
                    </span>
                    <p className="mt-0.5 text-xs font-bold text-slate-900 dark:text-slate-200">
                      {language === 'de' ? 'Finanz- & Fondsdaten (ERP / GL Feeds)' : 'Financial & fund data (ERP / GL Feeds)'}
                    </p>
                  </div>

                  <div className="text-center font-mono text-xs font-bold text-slate-500">↓</div>

                  {/* ZYVORIS CORE */}
                  <div className="rounded-xl border-2 border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/40 p-4">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-400">
                      [02] ZYVORIS DETERMINISTIC ENGINE
                    </span>
                    <p className="mt-0.5 text-xs font-bold text-slate-950 dark:text-white">
                      {language === 'de' ? 'Steuerinfrastruktur & Allokation' : 'Tax infrastructure & allocation'}
                    </p>
                    <div className="mt-2.5 grid grid-cols-2 gap-1.5 font-mono text-[9px] font-bold">
                      <span className="bg-white dark:bg-slate-900 border border-slate-900/60 dark:border-slate-700 rounded p-1 text-center">
                        {language === 'de' ? 'Steuerlogik' : 'Tax logic'}
                      </span>
                      <span className="bg-white dark:bg-slate-900 border border-slate-900/60 dark:border-slate-700 rounded p-1 text-center">
                        {language === 'de' ? 'Berechnung' : 'Calculations'}
                      </span>
                      <span className="bg-white dark:bg-slate-900 border border-slate-900/60 dark:border-slate-700 rounded p-1 text-center">
                        {language === 'de' ? 'Allokation' : 'Allocations'}
                      </span>
                      <span className="bg-white dark:bg-slate-900 border border-slate-900/60 dark:border-slate-700 rounded p-1 text-center">
                        {language === 'de' ? 'Validierung' : 'Validation'}
                      </span>
                    </div>
                  </div>

                  <div className="text-center font-mono text-xs font-bold text-slate-500">↓</div>

                  {/* OUTPUT */}
                  <div className="rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                        [03] OUTPUT
                      </span>
                      <p className="mt-0.5 text-xs font-bold text-slate-900 dark:text-slate-200">
                        {language === 'de' ? 'Kontrolliertes Steuerreporting' : 'Controlled tax reporting'}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      VERIFIED
                    </span>
                  </div>
                </div>
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
                max-w-[310px]
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
