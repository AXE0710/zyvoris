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
      modulesTitle: isGerman ? 'KERNFUNKTIONEN' : 'CORE CAPABILITIES',
      modules: isGerman
        ? [
            'Schweizer Steuerwertberechnung',
            'Steuerberechnungen auf Fondsebene',
            'Allokationen auf Anteilsklassenebene',
            'Ertrags- und Ausschüttungsanalyse',
            'Strukturierte steuerliche Reporting-Outputs',
          ]
        : [
            'Swiss Tax Value Calculations',
            'Fund-Level Tax Calculations',
            'Share-Class Tax Allocations',
            'Income & Distribution Analysis',
            'Structured Tax Reporting Outputs',
          ],
    },
    {
      code: 'AT',
      flag: '/flags/at.svg',
      country: isGerman ? 'Österreich' : 'Austria',
      status: 'planned' as StatusType,
      modulesTitle: isGerman ? 'KERNFUNKTIONEN' : 'CORE CAPABILITIES',
      modules: isGerman
        ? [
            'Steuerberechnungen für österreichische Fonds',
            'Ausschüttungsgleiche Erträge (AgE)',
            'KESt-relevante Berechnungen',
            'Anleger- und Anteilsklassenallokationen',
            'Regulatorische Reporting-Outputs',
          ]
        : [
            'Austrian Fund Tax Calculations',
            'Deemed Distributed Income (AgE)',
            'KESt-Related Calculations',
            'Investor & Share-Class Allocations',
            'Regulatory Reporting Outputs',
          ],
    },
    {
      code: 'DE',
      flag: '/flags/de.svg',
      country: isGerman ? 'Deutschland' : 'Germany',
      status: 'planned' as StatusType,
      modulesTitle: isGerman ? 'KERNFUNKTIONEN' : 'CORE CAPABILITIES',
      modules: isGerman
        ? [
            'Steuerliche Klassifizierung nach dem InvStG',
            'Berechnung der Vorabpauschale',
            'Gesonderte und einheitliche Feststellung nach § 180 AO',
            'Allokationen auf Fonds- und Anteilsklassenebene',
            'Steuerliche Reporting-Outputs für Deutschland',
          ]
        : [
            'InvStG Tax Classification',
            'Advance Lump Sum (Vorabpauschale)',
            'Separate and Uniform Tax Declaration according to § 180 German Tax Code',
            'Fund & Share-Class Allocations',
            'German Tax Reporting Outputs',
          ],
    },
    {
      code: 'US',
      flag: '/flags/us.svg',
      country: isGerman ? 'Vereinigte Staaten' : 'United States',
      status: 'planned' as StatusType,
      modulesTitle: isGerman ? 'KERNFUNKTIONEN' : 'CORE CAPABILITIES',
      modules: isGerman
        ? [
            'Verarbeitung von Partnership Tax Data',
            'Steuerliche Allokationen auf Partnerebene',
            'K-1-/K-3-Datenprozesse',
            'Verarbeitung von Form-1065-Daten',
            'Steuerliche Reporting-Outputs für Investoren',
          ]
        : [
            'Partnership Tax Data Processing',
            'Partner-Level Tax Allocations',
            'K-1 / K-3 Data Workflows',
            'Form 1065 Data Processing',
            'Investor Tax Reporting Outputs',
          ],
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
                p-5 sm:p-6
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
                <div className="flex items-center justify-end border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className={`rounded-md border px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase ${STATUS_BADGE[j.status]}`}>
                    {STATUS_LABEL[j.status][isGerman ? 'de' : 'en']}
                  </span>
                </div>

                {/* Country + Description */}
                <div className="mt-5">
                  <h3 className="flex items-center gap-2 text-base sm:text-lg xl:text-[17px] font-bold text-slate-950 dark:text-white whitespace-nowrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={j.flag}
                      alt={`${j.country} flag`}
                      className="h-[18px] w-[26px] rounded-[3px] object-cover shadow-xs border border-slate-900/15 dark:border-white/20 shrink-0"
                    />
                    <span className="font-mono text-base font-bold text-blue-600 dark:text-blue-400 shrink-0">
                      [{j.code}]
                    </span>
                    <span className="font-bold text-lg leading-none text-slate-500 dark:text-slate-400 shrink-0">
                      —
                    </span>
                    <span className="truncate">{j.country}</span>
                  </h3>
                
                </div>

                {/* Integrated Engine Modules (Inside the Card) */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5">
                    {j.modulesTitle}
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