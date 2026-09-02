'use client'

import React from 'react'
import SolutionsSection from '@/components/solutions'
import ComplexStructuresSection from '@/components/complex'
import ProductScreenshot from '@/components/product-screenshot'
import { useLanguage } from '@/components/language-provider'

export default function ProductPage() {
  const { language } = useLanguage()

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] dark:bg-[#080d1a] text-foreground pt-28 pb-12 sm:pt-32 lg:pt-36 transition-colors duration-200">
      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw] mb-12 sm:mb-16">
        {/* =========================================================
            PLATFORM HERO HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400 mb-5">
            <span>[ {language === 'de' ? 'Plattform-Übersicht' : 'Platform Overview'} ]</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.08]">
            {language === 'de' ? 'Vollständiges Betriebssystem für' : 'Complete operating system for'}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {language === 'de' ? 'Privatmarkt-Fondsbesteuerung.' : 'private fund taxation.'}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {language === 'de'
              ? 'Verbinden Sie Buchhaltungsdaten, mehrstufige Rechtsstrukturen, länderspezifische Steuerregeln und Investorenausgaben in einer kontrollierten Betriebsumgebung.'
              : 'Connect source accounting data, multi-tier legal structures, jurisdiction-specific rules, and investor outputs in one controlled operating environment.'}
          </p>
        </div>
      </div>

      <SolutionsSection />
      <ComplexStructuresSection />
      <ProductScreenshot />
    </div>
  )
}