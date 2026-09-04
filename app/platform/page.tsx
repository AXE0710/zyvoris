'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PlatformSteps from '@/components/platform-steps'
import ProductWorkspaces from '@/components/product-workspaces'
import CoreCapabilities from '@/components/core-capabilities'
import PlatformArchitecture from '@/components/platform-architecture'
import Jurisdictions from '@/components/jurisdictions'
import { useLanguage } from '@/components/language-provider'

export default function PlatformPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] text-foreground transition-colors duration-200 dark:bg-[#080d1a]">

      {/* =========================================================
          1. PLATFORM HERO — text left, screenshot right
      ========================================================== */}
      <section className="relative border-b-2 border-slate-900 pb-0 pt-28 dark:border-slate-800 sm:pt-32 lg:pt-36">
        <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw]">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left — Copy */}
            <div className="pb-12 sm:pb-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400">
                <span>[ {isGerman ? 'PLATTFORM' : 'PLATFORM'} ]</span>
              </div>

              <h1 className="text-3xl font-semibold leading-[1.07] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                {isGerman
                  ? 'Steuerinfrastruktur für komplexe Privatmärkte.'
                  : 'Tax infrastructure built for complex private markets.'}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                {isGerman
                  ? 'ZYVORIS verbindet Fondsdaten, Struktur, Steuerlogik, Berechnungen, Prüfkontrollen und Reporting in einer Betriebsumgebung.'
                  : 'ZYVORIS brings fund data, structure, tax logic, calculations, review controls, and reporting into one operating environment.'}
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-950 px-6 font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-slate-800 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  <span>{isGerman ? 'Demo anfragen' : 'Book a Demo'}</span>
                  <span className="font-mono text-sm leading-none">→</span>
                </Link>
              </div>
            </div>

            {/* Right — Product screenshot */}
            <div className="relative self-end">
              <div className="flex items-center gap-2 rounded-t-2xl border-2 border-b-0 border-slate-900 bg-slate-100 px-4 py-2.5 dark:border-slate-700 dark:bg-slate-800">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span className="ml-2 flex h-5 flex-1 items-center rounded bg-white px-2 font-mono text-[10px] text-slate-400 dark:bg-slate-900 dark:text-slate-500">
                  app.zyvoris.ai/fund-overview
                </span>
              </div>
              <div className="relative overflow-hidden rounded-b-2xl border-2 border-slate-900 shadow-2xl dark:border-slate-700">
                <Image
                  src="/1_fund_overview.png"
                  alt="ZYVORIS Fund Overview workspace"
                  width={1200}
                  height={780}
                  priority
                  className="h-auto w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f0f4f9] to-transparent dark:from-[#080d1a]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PLATFORM — HOW IT WORKS (6 concise steps) */}
      <PlatformSteps />

      {/* 3. PLATFORM — PRODUCT WORKSPACE (Calculate, Review, Trace, Report) */}
      <ProductWorkspaces />

      {/* 4. PLATFORM — CORE CAPABILITIES (Clean 8-item grid) */}
      <CoreCapabilities />

      {/* 5. PLATFORM — ARCHITECTURE PRINCIPLE (Separate data, logic, calculation, and review) */}
      <PlatformArchitecture />

      {/* 6. PLATFORM — ROADMAP (Simple jurisdiction cards) */}
      <Jurisdictions />

    </div>
  )
}
