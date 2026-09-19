'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function CustomerSegments() {
  const { t, language } = useLanguage()
  const isGerman = language === 'de'

  const segments = [
    {
      number: '01',
      audience: t('seg_1_aud', 'Fund Managers & AIFMs'),
      description: t(
        'seg_1_desc',
        'Gain control across tax calculations, reporting workflows, and jurisdictions.'
      ),
      tag: isGerman ? 'FONDSMANAGER' : 'MANAGERS',
      superpower: isGerman
        ? 'Volle Kontrolle & automatisierte Abstimmungen über alle Vehikel.'
        : 'Holistic cross-vehicle control and automated reconciliations.',
    },
    {
      number: '02',
      audience: t('seg_2_aud', 'Fund Administrators'),
      description: t(
        'seg_2_desc',
        'Add structured tax workflows to existing fund operations.'
      ),
      tag: isGerman ? 'ADMINISTRATOREN' : 'ADMINISTRATORS',
      superpower: isGerman
        ? 'Nahtlose Integration in bestehende Fondsbuchhaltungs-Engines.'
        : 'Seamless integration into existing fund accounting GLs.',
    },
    {
      number: '03',
      audience: t('seg_3_aud', 'Tax & Accounting Firms'),
      description: t(
        'seg_3_desc',
        'Standardize execution while preserving professional review.'
      ),
      tag: isGerman ? 'STEUERBERATER' : 'TAX ADVISORS',
      superpower: isGerman
        ? 'Revisionssichere Arbeitsberichte & Skalierung ohne Personalengpass.'
        : 'Audit-ready workpapers and execution scale without bottlenecks.',
    },
    {
      number: '04',
      audience: t('seg_4_aud', 'Institutional Investors'),
      description: t(
        'seg_4_desc',
        'Bring structure and visibility to complex fund tax data.'
      ),
      tag: isGerman ? 'INVESTOREN' : 'INVESTORS',
      superpower: isGerman
        ? 'Durchsichtstransparenz & einheitliche Steuerreporting-Pakete.'
        : 'Look-through tax transparency and unified investor tax packs.',
    },
  ]

  return (
    <section
      id="customer-segments"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-white dark:bg-[#080d1a]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#09132f] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {t('segments_kicker', 'BUILT FOR PRIVATE MARKETS')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.14]">
            <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
              {isGerman ? 'Für die zuständigen Teams ' : 'For the teams responsible '}
            </span>
            <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
              {isGerman
                ? 'für komplexes Steuerreporting'
                : 'for complex fund tax reporting'}
            </span>
          </h2>
        </div>

        {/* Four Clean Cards Grid without Highlight Rings */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <article
              key={segment.number}
              className="
                tap-press
                group relative flex flex-col justify-between overflow-hidden
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
                {/* Top bar: Number & Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    [{segment.number}]
                  </span>

                  <span className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-2 py-0.5 font-mono text-[9px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                    {segment.tag}
                  </span>
                </div>

                {/* Audience Title & Description */}
                <div className="mt-5">
                  <h3 className="m-0 text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                    {segment.audience}
                  </h3>

                  <p className="mt-3 m-0 text-sm leading-[1.65] text-slate-600 dark:text-slate-300">
                    {segment.description}
                  </p>

                  <div className="mt-4 rounded-xl p-3 text-xs font-mono bg-slate-50/70 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                    <span className="font-bold uppercase tracking-wider block text-[8.5px] mb-0.5 text-slate-500 dark:text-slate-400">
                      {isGerman ? 'MEHRWERT:' : 'KEY OUTCOME:'}
                    </span>
                    <span>{segment.superpower}</span>
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