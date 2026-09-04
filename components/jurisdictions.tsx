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
    'bg-slate-100 dark:bg-slate-800 border-slate-400 dark:border-slate-700 text-slate-600 dark:text-slate-400',
}

const STATUS_TEXT: Record<StatusType, string> = {
  mvp:         'text-emerald-600 dark:text-emerald-400',
  development: 'text-amber-600 dark:text-amber-400',
  planned:     'text-slate-500 dark:text-slate-400',
}

export default function Jurisdictions() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const jurisdictions = [
    {
      code: 'CH',
      country: isGerman ? 'Schweiz' : 'Switzerland',
      status: 'mvp' as StatusType,
      description: isGerman
        ? 'Schweizer Fondssteuerberechnungen, Allokationen, Steuerwerte und Reporting-Workflows.'
        : 'Swiss fund tax calculations, allocations, tax values, and reporting workflows.',
    },
    {
      code: 'DE',
      country: isGerman ? 'Deutschland' : 'Germany',
      status: 'planned' as StatusType,
      description: isGerman
        ? 'Deutsche Investmentsteuerberechnung und Reporting-Workflows.'
        : 'German investment tax calculation and reporting workflows.',
    },
    {
      code: 'AT',
      country: isGerman ? 'Österreich' : 'Austria',
      status: 'planned' as StatusType,
      description: isGerman
        ? 'Österreichische Investmentfonds-Steuer-Reporting-Workflows.'
        : 'Austrian investment fund tax reporting workflows.',
    },
    {
      code: 'US',
      country: isGerman ? 'Vereinigte Staaten' : 'United States',
      status: 'planned' as StatusType,
      description: isGerman
        ? 'K-1, K-3, 1065, 1120 und verwandte Investoren-Steuer-Workflows.'
        : 'K-1, K-3, 1065, 1120, and related investor tax workflows.',
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
        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {isGerman ? 'JURISDIKTIONS-ROADMAP' : 'JURISDICTION ROADMAP'}
              </span>
            </div>

            <h2 className="max-w-170 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {isGerman ? 'Eine Plattform. ' : 'One platform. '}
              <span className="text-blue-600 dark:text-blue-400">
                {isGerman
                  ? 'Jurisdiktionsspezifische Steuerlogik.'
                  : 'Jurisdiction-specific tax logic.'}
              </span>
            </h2>
          </div>

          {/* Status legend */}
          <div className="flex flex-wrap items-center gap-3 lg:ml-auto lg:justify-end">
            {(['mvp', 'development', 'planned'] as StatusType[]).map((s) => (
              <span
                key={s}
                className={`inline-flex items-center rounded border px-2.5 py-1 font-mono text-[10px] font-bold uppercase ${STATUS_BADGE[s]}`}
              >
                {STATUS_LABEL[s][isGerman ? 'de' : 'en']}
              </span>
            ))}
          </div>
        </div>

        {/* ── Jurisdiction Cards (4 Cards) ── */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {jurisdictions.map((j) => (
            <article
              key={j.code}
              className="
                relative flex flex-col justify-between
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-7
                shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600
              "
            >
              <div>
                {/* Card header */}
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{j.code}]
                  </span>
                  <span className={`rounded border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase ${STATUS_BADGE[j.status]}`}>
                    {STATUS_LABEL[j.status][isGerman ? 'de' : 'en']}
                  </span>
                </div>

                {/* Country + description */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white sm:text-xl">
                    {j.country}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {j.description}
                  </p>
                </div>
              </div>

              {/* Footer status */}
              <div className="mt-8 pt-3.5 border-t-2 border-slate-900/60 dark:border-slate-800 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  STATUS
                </span>
                <span className={`font-mono text-[11px] font-bold uppercase ${STATUS_TEXT[j.status]}`}>
                  {STATUS_LABEL[j.status][isGerman ? 'de' : 'en']}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}