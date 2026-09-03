'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'

type StatusType = 'all' | 'mvp' | 'development' | 'roadmap'

export default function Jurisdictions() {
  const [filter, setFilter] = useState<StatusType>('all')
  const { t, language } = useLanguage()

  const jurisdictions = [
    {
      country: 'Switzerland',
      code: 'CH',
      title: t('jur_ch_title', 'Switzerland'),
      status: 'MVP',
      statusType: 'mvp' as const,
      description: t(
        'jur_ch_desc',
        'Available today for private market fund tax workflows.'
      ),
      capabilities: [
        'Fund-level tax calculations',
        'Share-class calculations',
        'Taxable income allocation',
        'Tax value calculations',
        'Structured reporting datasets',
        'Review and validation workflows',
      ],
    },
    {
      country: 'Germany',
      code: 'DE',
      title: t('jur_de_title', 'Germany'),
      status: 'In Development',
      statusType: 'development' as const,
      description: t(
        'jur_de_desc',
        'Active development for German investment fund taxation.'
      ),
      capabilities: [
        'German investment fund tax logic',
        'InvStG-related reporting workflows',
        'Structured tax calculations',
        'Jurisdiction-specific reporting outputs',
      ],
    },
    {
      country: 'Austria',
      code: 'AT',
      title: t('jur_at_title', 'Austria'),
      status: 'Roadmap',
      statusType: 'roadmap' as const,
      description: t(
        'jur_at_desc',
        'Planned expansion for Austrian fund taxation.'
      ),
      capabilities: [
        'Austrian fund tax reporting',
        'OeKB-related reporting workflows',
        'Structured tax datasets',
      ],
    },
    {
      country: 'United States',
      code: 'US',
      title: t('jur_us_title', 'United States'),
      status: 'Roadmap',
      statusType: 'roadmap' as const,
      description: t(
        'jur_us_desc',
        'Cross-border tax intelligence layer transforming partnership tax data into structured investor-level reporting inputs.'
      ),
      capabilities: [
        'Structured extraction & characterization',
        'ECI & FDAP indicators',
        'Withholding & foreign tax data analysis',
        'Treaty relevance & PFIC indicators',
        'Investor-specific tax consequences',
        'Reconciliation & downstream reporting implications',
      ],
    },
  ]

  const filteredJurisdictions =
    filter === 'all'
      ? jurisdictions
      : jurisdictions.filter((j) => j.statusType === filter)

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
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {t('jur_kicker', 'WHAT ZYVORIS DOES TODAY')}
              </span>
            </div>

            <h2 className="max-w-[760px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {t('jur_title_1', 'Built for Cross-Border Tax.')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('jur_title_2', 'Starting with Switzerland.')}
              </span>
            </h2>
          </div>

          <div className="max-w-[540px] lg:ml-auto">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {t(
                'jur_desc',
                'ZYVORIS is launching with Swiss fund tax reporting and expanding its infrastructure across additional jurisdictions and reporting regimes.'
              )}
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-y-2 border-slate-900 dark:border-slate-800 py-4">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            {t('jur_all', 'All Jurisdictions')} ({jurisdictions.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('mvp')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              filter === 'mvp'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            {t('jur_mvp', 'Available (MVP)')} (1)
          </button>
          <button
            type="button"
            onClick={() => setFilter('development')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              filter === 'development'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            {t('jur_dev', 'In Development')} (1)
          </button>
          <button
            type="button"
            onClick={() => setFilter('roadmap')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              filter === 'roadmap'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            {t('jur_road', 'Roadmap')} (2)
          </button>
        </div>

        {/* Jurisdiction Cards Grid - Bold Black Borders & No Icons */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredJurisdictions.map((j) => (
            <article
              key={j.country}
              className="
                relative flex flex-col justify-between
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6
                shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600
              "
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{j.code}]
                  </span>
                  <span
                    className={`rounded border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase ${
                      j.statusType === 'mvp'
                        ? 'bg-emerald-500/15 border-emerald-600 text-emerald-700 dark:bg-emerald-950/50 dark:border-emerald-500 dark:text-emerald-300'
                        : j.statusType === 'development'
                        ? 'bg-amber-500/15 border-amber-600 text-amber-700 dark:bg-amber-950/50 dark:border-amber-500 dark:text-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-900 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {j.status}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                    {j.country}
                  </span>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                    {j.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {j.description}
                </p>

                <div className="mt-4 space-y-2 pt-3.5 border-t border-slate-900/40 dark:border-slate-800">
                  {j.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200">
                      <span className="font-mono text-blue-600 dark:text-blue-400 font-bold leading-none mt-0.5">•</span>
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t-2 border-slate-900/60 dark:border-slate-800 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  STATUS
                </span>
                <span
                  className={`font-mono text-[11px] font-bold uppercase ${
                    j.statusType === 'mvp'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : j.statusType === 'development'
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {j.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}