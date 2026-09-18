'use client'

import React from 'react'
import { useLanguage } from './language-provider'

type StatusType = 'mvp' | 'development' | 'planned'

const STATUS_LABEL: Record<StatusType, { en: string; de: string }> = {
  mvp:         { en: 'AVAILABLE IN MVP',  de: 'VERFÜGBAR IM MVP' },
  development: { en: 'IN DEVELOPMENT',    de: 'IN ENTWICKLUNG' },
  planned:     { en: 'PLANNED',           de: 'GEPLANT' },
}

const STATUS_BADGE: Record<StatusType, string> = {
  mvp:
    'bg-emerald-500/15 border-emerald-600 text-emerald-700 dark:bg-emerald-950/50 dark:border-emerald-500 dark:text-emerald-300',
  development:
    'bg-amber-500/15 border-amber-600 text-amber-700 dark:bg-amber-950/50 dark:border-amber-500 dark:text-amber-300',
  planned:
    'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400',
}

export default function Jurisdictions() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const jurisdictions = [
    {
      code: 'CH',
      flag: '/flags/ch.svg',
      country: isGerman ? 'Schweiz' : 'Switzerland',
      status: 'mvp' as StatusType,
      description: isGerman
        ? 'Schweizer Fondssteuerberechnungen, Allokationen, Steuerwerte und Reporting-Workflows.'
        : 'Swiss fund tax calculations, allocations, tax values, and reporting workflows.',
      engine: 'ESTV Kreisschreiben 24/25 Engine',
      modules: isGerman
        ? ['ICTax XML-Format Export', 'Steuerwert-Ermittlung', 'Ertragssteuer-Allokation', 'Verrechnungssteuer-Prüfung']
        : ['ICTax XML Format Feed', 'Tax Valuation Calculation', 'Income Tax Allocation', 'Withholding Tax Verification'],
    },
    {
      code: 'AT',
      flag: '/flags/at.svg',
      country: isGerman ? 'Österreich' : 'Austria',
      status: 'planned' as StatusType,
      description: isGerman
        ? 'Österreichische Investmentfonds-Steuer-Reporting-Workflows.'
        : 'Austrian investment fund tax reporting workflows.',
      engine: 'OeKB Fund Tax Compliance Engine',
      modules: isGerman
        ? ['Ausschüttungsgleiche Erträge (AgE)', 'OeKB Meldedatei Generierung', 'KESt-II Vorbereitung', 'Investorensplitting']
        : ['Deemed Distributed Income (AgE)', 'OeKB Regulatory Export', 'KESt-II Calculation', 'Investor Class Partitioning'],
    },
    {
      code: 'DE',
      flag: '/flags/de.svg',
      country: isGerman ? 'Deutschland' : 'Germany',
      status: 'planned' as StatusType,
      description: isGerman
        ? 'Deutsche Investmentsteuerberechnung und Reporting-Workflows.'
        : 'German investment tax calculation and reporting workflows.',
      engine: 'InvStG 2018 §56 Engine',
      modules: isGerman
        ? ['Vorabpauschale-Berechnung', 'Teilfreistellungs-Klassifizierung', 'WM Datenservice Export', 'Akkumulierte Erträge']
        : ['Advance Lump Sum (Vorabpauschale)', 'Partial Exemption Engine', 'WM Datenservice Feed', 'Accumulated Earnings Allocation'],
    },
    {
      code: 'US',
      flag: '/flags/us.svg',
      country: isGerman ? 'Vereinigte Staaten' : 'United States',
      status: 'planned' as StatusType,
      description: isGerman
        ? 'K-1, K-3, 1065, 1120 und verwandte Investoren-Steuer-Workflows.'
        : 'K-1, K-3, 1065, 1120, and related investor tax workflows.',
      engine: 'US Subchapter K Engine',
      modules: isGerman
        ? ['Form 1065 Partner Allokationen', 'Schedule K-1 & K-3 Pakete', 'Sec. 704(b) Kapitalkonten', 'State Withholding Feeds']
        : ['Form 1065 Partner Allocations', 'Schedule K-1 & K-3 Production', 'Sec. 704(b) Capital Lineage', 'Multi-State Apportionment'],
    },
  ]

  return (
    <section
      id="jurisdictions"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* ── Section Header (Without the legend tags above cards) ── */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'LÄNDERSPEZIFISCHE ABDECKUNG & ROADMAP' : 'JURISDICTION COVERAGE & ROADMAP'}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.14] tracking-tight text-slate-950 dark:text-white">
            <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
              {isGerman ? 'Eine Plattform ' : 'One platform '}
            </span>
            <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
              {isGerman
                ? 'Länderspezifische Steuerlogik'
                : 'Country-specific tax logic'}
            </span>
          </h2>
        </div>

        {/* ── Unified Jurisdiction Cards (Modules Inside, No Highlight Rings, Soft Shadow Lift) ── */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {jurisdictions.map((j) => (
            <article
              key={j.code}
              className="
                tap-press
                relative flex flex-col justify-between
                rounded-2xl
                border-2 border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-6 sm:p-7
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                hover:shadow-xl
                hover:shadow-slate-900/10
                dark:hover:shadow-blue-950/40
              "
            >
              <div>
                {/* Card header: Code & Status inside card */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={j.flag}
                      alt={`${j.country} flag`}
                      className="h-3.5 w-5 rounded-[2px] object-cover shadow-xs border border-slate-900/15 dark:border-white/20 shrink-0"
                    />
                    <span>[{j.code}]</span>
                  </div>
                  <span className={`rounded-md border px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase ${STATUS_BADGE[j.status]}`}>
                    {STATUS_LABEL[j.status][isGerman ? 'de' : 'en']}
                  </span>
                </div>

                {/* Country + Description */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {j.country}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {j.description}
                  </p>
                </div>

                {/* Integrated Engine Modules (Inside the Card) */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5">
                    {isGerman ? 'STEUERMODULE:' : 'MODULE SUITE:'}
                  </span>
                  <div className="space-y-1.5">
                    {j.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}