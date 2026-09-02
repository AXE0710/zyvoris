'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function UseCases() {
  const { t } = useLanguage()

  const useCases = [
    {
      id: 'fund-tax',
      number: '01',
      title: t('uc_1_title', 'Fund Tax Calculation'),
      shortDesc: t('uc_1_desc', 'Automated, jurisdiction-specific tax calculations.'),
      problem: t(
        'uc_1_prob',
        'Turn complex fund-level financial data into structured, jurisdiction-specific tax calculations without relying on fragmented spreadsheets.'
      ),
      users: t('uc_1_users', 'Fund managers, AIFMs, fund administrators, and tax teams'),
      output: t('uc_1_out', 'Controlled fund-level tax calculation and reporting data'),
    },
    {
      id: 'share-class',
      number: '02',
      title: t('uc_2_title', 'Share-Class Tax Allocation'),
      shortDesc: t('uc_2_desc', 'Precise multi-tier share-class tax distribution.'),
      problem: t(
        'uc_2_prob',
        'Allocate tax results across different share classes while accounting for the underlying fund structure and relevant allocation logic.'
      ),
      users: t('uc_2_users', 'Fund administrators, tax teams, and fund operations'),
      output: t('uc_2_out', 'Share-class level tax allocations ready for review'),
    },
    {
      id: 'investor-reporting',
      number: '03',
      title: t('uc_3_title', 'Investor Tax Reporting'),
      shortDesc: t('uc_3_desc', 'Standardized investor tax statement generation.'),
      problem: t(
        'uc_3_prob',
        'Transform fund-level results into investor-relevant tax information without rebuilding the reporting process for every investor.'
      ),
      users: t('uc_3_users', 'Fund administrators, tax firms, and investor reporting teams'),
      output: t('uc_3_out', 'Structured investor tax reporting data and outputs'),
    },
    {
      id: 'cross-border',
      number: '04',
      title: t('uc_4_title', 'Cross-Border Tax Analysis'),
      shortDesc: t('uc_4_desc', 'Multi-jurisdictional tax compliance logic.'),
      problem: t(
        'uc_4_prob',
        'Understand how fund structures, investments, and investor positions interact with different jurisdictional tax requirements.'
      ),
      users: t('uc_4_users', 'International tax teams, fund managers, and advisors'),
      output: t('uc_4_out', 'Jurisdiction-aware tax analysis and review information'),
    },
    {
      id: 'k1-k3',
      number: '05',
      title: t('uc_5_title', 'K-1 / K-3 Intelligence'),
      shortDesc: t('uc_5_desc', 'Partnership tax data extraction and modeling.'),
      problem: t(
        'uc_5_prob',
        'Bring complex partnership tax information into a structured workflow so teams can analyze, validate, and use underlying data.'
      ),
      users: t('uc_5_users', 'US tax teams, fund administrators, and cross-border tax professionals'),
      output: t('uc_5_out', 'Structured K-1 / K-3 intelligence for downstream workflows'),
    },
  ]

  return (
    <section
      id="use-cases"
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t('uc_kicker', 'USE CASES')}
              </span>
            </div>

            <h2 className="max-w-[720px] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl text-slate-950 dark:text-white">
              {t('uc_title_1', 'Built around real')}{' '}
              <span className="text-slate-500 dark:text-slate-400">
                {t('uc_title_2', 'private-market tax workflows.')}
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base lg:ml-auto">
            {t(
              'uc_desc',
              'ZYVORIS connects data, calculations, review steps, and reporting outputs into unified workflows for private-market tax teams.'
            )}
          </p>
        </div>

        {/* Use Cases Grid - Bold Black Borders & No Icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {useCases.map((item) => (
            <article
              key={item.id}
              className="
                relative overflow-hidden
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-8
                shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              {/* Card Header without icon */}
              <div className="flex items-start justify-between gap-4 border-b-2 border-slate-900/80 dark:border-slate-800 pb-4">
                <div>
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{item.number}]
                  </span>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {item.shortDesc}
                  </p>
                </div>

                <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">
                  WORKFLOW
                </span>
              </div>

              {/* Information Grid */}
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    Problem Solved
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {item.problem}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      Who Uses It?
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item.users}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                      Generated Output
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                      {item.output}
                    </p>
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
