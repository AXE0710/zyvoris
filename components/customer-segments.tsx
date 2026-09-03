'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function CustomerSegments() {
  const { t } = useLanguage()

  const segments = [
    {
      number: '01',
      audience: t('seg_1_aud', 'Fund Managers & AIFMs'),
      headline: t('seg_1_head', 'Standardize tax reporting across complex fund structures, entities, and jurisdictions.'),
      description: t(
        'seg_1_desc',
        'Turn multi-tier fund structures, capital distributions, and cross-border tax logic into controlled, repeatable reporting workflows.'
      ),
      focus: t('seg_1_focus', 'Fund-level oversight'),
    },
    {
      number: '02',
      audience: t('seg_2_aud', 'Fund Administrators'),
      headline: t('seg_2_head', 'Integrate structured tax calculation and reporting workflows into existing fund operations.'),
      description: t(
        'seg_2_desc',
        'Extend core administration processes with automated tax data normalization, calculation engines, and filing-ready datasets.'
      ),
      focus: t('seg_2_focus', 'Operational scalability'),
    },
    {
      number: '03',
      audience: t('seg_3_aud', 'Tax & Accounting Firms'),
      headline: t('seg_3_head', 'Industrialize recurring tax reporting while preserving professional judgement and review.'),
      description: t(
        'seg_3_desc',
        'Automate mechanical spreadsheet calculations and focus senior advisory time on exceptions, tax characterization, and partner sign-off.'
      ),
      focus: t('seg_3_focus', 'Controlled review'),
    },
    {
      number: '04',
      audience: t('seg_4_aud', 'Institutional Investors'),
      headline: t('seg_4_head', 'Transform complex fund-level tax information into structured investor-specific tax intelligence.'),
      description: t(
        'seg_4_desc',
        'Convert fragmented fund statements, withholding vouchers, and K-1/K-3 feeds into clean, auditable tax datasets across portfolio investments.'
      ),
      focus: t('seg_4_focus', 'Investment visibility'),
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {t('segments_kicker', 'Customer Segments')}
              </span>
            </div>

            <h2 className="max-w-[700px] text-[30px] sm:text-[42px] lg:text-[50px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white">
              {t('segments_title_1', 'Built for the')}{' '}
              <span className="text-slate-500 dark:text-slate-400">
                {t('segments_title_2', 'private-markets ecosystem.')}
              </span>
            </h2>
          </div>

          <div className="max-w-[460px] lg:ml-auto">
            <p className="text-sm sm:text-base leading-[1.65] text-slate-700 dark:text-slate-300 font-normal">
              {t(
                'segments_desc',
                'Different teams have different responsibilities. ZYVORIS is designed to fit the way fund, administration, tax and investment organizations actually work.'
              )}
            </p>
          </div>
        </div>

        {/* Audience Cards Grid with bold black borders and no icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => (
            <article
              key={segment.number}
              className="
                group relative flex flex-col justify-between overflow-hidden
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                transition-all duration-200
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
                hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
              "
            >
              <div>
                {/* Top bar: Number & Focus Tag without icons */}
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{segment.number}]
                  </span>

                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">→</span>
                </div>

                {/* Audience Tag & Headline */}
                <div className="mt-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                    {segment.audience}
                  </p>

                  <h3 className="mt-2 text-base sm:text-lg font-bold leading-[1.3] tracking-[-0.025em] text-slate-950 dark:text-white">
                    {segment.headline}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-[1.6] text-slate-700 dark:text-slate-300">
                  {segment.description}
                </p>
              </div>

              {/* Footer Focus Tag */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-900/40 dark:border-slate-800 pt-3.5">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  Focus
                </span>

                <span className="rounded border border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-900 dark:text-slate-200">
                  {segment.focus}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Primary Market Focus vs Extendable Infrastructure Callout */}
        <div className="mt-12 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Primary Focus */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/60 dark:text-blue-300">
                  PRIMARY FOCUS
                </span>
                <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Private Markets
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mb-3">
                Engineered specifically for the structures, allocation logic, and cross-border reporting demands of private markets:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Private Equity', 'Venture Capital', 'Real Estate', 'Infrastructure', 'Private Credit'].map((asset) => (
                  <span
                    key={asset}
                    className="rounded-lg border-2 border-slate-900/80 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-950 dark:text-slate-100"
                  >
                    • {asset}
                  </span>
                ))}
              </div>
            </div>

            {/* Extendable Infrastructure */}
            <div className="lg:col-span-5 lg:border-l-2 lg:border-slate-900/30 lg:dark:border-slate-800 lg:pl-6">
              <span className="font-mono text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border border-purple-600/60 bg-purple-50 text-purple-700 dark:border-purple-500/60 dark:bg-purple-950/50 dark:text-purple-300 inline-block mb-2">
                EXTENDABLE INFRASTRUCTURE
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                ZYVORIS is designed to operate independently of the underlying ownership infrastructure, allowing the same structured tax logic to be applied across both conventional and tokenized investment structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}