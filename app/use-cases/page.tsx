'use client'

import React from 'react'
import UseCases from '@/components/use-cases'
import Jurisdictions from '@/components/jurisdictions'
import { useLanguage } from '@/components/language-provider'

export default function UseCasesPage() {
  const { language } = useLanguage()

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] dark:bg-[#080d1a] text-foreground pt-28 pb-12 sm:pt-32 lg:pt-36 transition-colors duration-200">
      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw] mb-12 sm:mb-16">
        {/* =========================================================
            USE CASES HERO HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400 mb-5">
            <span>[ {language === 'de' ? 'Operative Workflows' : 'Operational Workflows'} ]</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.08]">
            {language === 'de' ? 'Workflows für den gesamten' : 'Workflows designed for the'}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {language === 'de' ? 'Privatmarkt-Lebenszyklus.' : 'entire private market lifecycle.'}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {language === 'de'
              ? 'Von Fondssteuerberechnungen und mehrstufigen Anteilsklassen-Allokationen bis hin zu K-1/K-3 Modellierungen und Schweizer sowie deutschen Fondsmeldungen.'
              : 'From fund-level tax calculations and multi-tier share-class allocations to cross-border K-1/K-3 modeling and Swiss/German investment tax filings.'}
          </p>
        </div>
      </div>

      <UseCases />
      <Jurisdictions />
    </div>
  )
}