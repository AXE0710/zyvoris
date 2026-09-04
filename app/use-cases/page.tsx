'use client'

import React from 'react'
import UseCases from '@/components/use-cases'
import { useLanguage } from '@/components/language-provider'

export default function UseCasesPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  return (
    <main className="relative min-h-screen bg-[#f0f4f9] px-4 pb-20 pt-28 text-foreground transition-colors duration-200 dark:bg-[#080d1a] sm:px-6 sm:pt-32 lg:px-[5vw] lg:pt-36">
      <div className="relative mx-auto max-w-[1420px]">
        {/* =========================================================
            USE CASES HERO
        ========================================================== */}
        <header className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400">
            <span>[ {isGerman ? 'ANWENDUNGSFÄLLE' : 'USE CASES'} ]</span>
          </div>

          <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {isGerman
              ? 'Steuer-Workflows für Privatmärkte.'
              : 'Tax workflows built for private markets.'}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'ZYVORIS überführt komplexe Fondssteuerprozesse in strukturierte, kontrollierte und prüfbare Workflows.'
              : 'ZYVORIS turns complex fund tax processes into structured, controlled, and reviewable workflows.'}
          </p>
        </header>

        {/* =========================================================
            4 USE CASES
        ========================================================== */}
        <UseCases />
      </div>
    </main>
  )
}