'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function ComparisonSection() {
  const { t } = useLanguage()

  const ROWS = [
    {
      id: '01',
      category: 'DATA MODEL',
      tradTitle: t('comp_row_1_trad_title', 'Excel workpapers'),
      tradDesc: t('comp_row_1_trad_desc', 'Knowledge held in spreadsheets and personal desktop files'),
      zyvTitle: t('comp_row_1_zyv_title', 'Connected data model'),
      zyvDesc: t('comp_row_1_zyv_desc', 'Structured tax data across workflow with database integrity'),
    },
    {
      id: '02',
      category: 'CLASSIFICATION',
      tradTitle: t('comp_row_2_trad_title', 'Manual classifications'),
      tradDesc: t('comp_row_2_trad_desc', 'Re-evaluated for every period and every separate fund'),
      zyvTitle: t('comp_row_2_zyv_title', 'Structured classification workflow'),
      zyvDesc: t('comp_row_2_zyv_desc', 'Consistent, rule-based classification with audit trails'),
    },
    {
      id: '03',
      category: 'CALCULATION',
      tradTitle: t('comp_row_3_trad_title', 'Opaque calculations'),
      tradDesc: t('comp_row_3_trad_desc', 'Formula errors and broken links difficult to detect'),
      zyvTitle: t('comp_row_3_zyv_title', 'Deterministic calculation engine'),
      zyvDesc: t('comp_row_3_zyv_desc', 'Rules and formulas execute with mathematical precision'),
    },
    {
      id: '04',
      category: 'AUDIT TRACEABILITY',
      tradTitle: t('comp_row_4_trad_title', 'Disconnected reviews'),
      tradDesc: t('comp_row_4_trad_desc', 'Reviewers must manually trace numbers back to source'),
      zyvTitle: t('comp_row_4_zyv_title', 'Full calculation lineage'),
      zyvDesc: t('comp_row_4_zyv_desc', 'Trace any output value back to source data and rule versions'),
    },
    {
      id: '05',
      category: 'OPERATIONAL EFFICIENCY',
      tradTitle: t('comp_row_5_trad_title', 'Filing-period bottlenecks'),
      tradDesc: t('comp_row_5_trad_desc', 'Peak season stress with limited visibility into progress'),
      zyvTitle: t('comp_row_5_zyv_title', 'Repeatable operational workflow'),
      zyvDesc: t('comp_row_5_zyv_desc', 'Continuous processing and real-time status across funds'),
    },
  ]

  return (
    <section
      id="comparison"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#0b1735] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t('comp_kicker', 'THE OPERATING MODEL')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {t('comp_title_1', 'Replace fragmented tax workflows with')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('comp_title_2', 'connected infrastructure.')}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'comp_desc',
              'Traditional tax processes rely on disconnected workpapers and manual handoffs. ZYVORIS unifies data, rules, logic, and reporting into a single system.'
            )}
          </p>
        </div>

        {/* Comparison Table Box with bold black border */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b-2 border-slate-900 dark:border-slate-800">
            <div className="bg-slate-100 dark:bg-slate-800/80 p-4 sm:p-5 border-b sm:border-b-0 sm:border-r-2 border-slate-900 dark:border-slate-800">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t('comp_trad_header', 'TRADITIONAL WORKFLOW')}
              </span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/40 p-4 sm:p-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                {t('comp_zyv_header', 'ZYVORIS INFRASTRUCTURE')}
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-slate-900/60 dark:divide-slate-800">
            {ROWS.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-1 sm:grid-cols-2 group hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors"
              >
                {/* Traditional Side */}
                <div className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r-2 border-slate-900/60 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-slate-500">[{row.id}]</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {row.category}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-200">
                    {row.tradTitle}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {row.tradDesc}
                  </p>
                </div>

                {/* ZYVORIS Side */}
                <div className="p-5 sm:p-6 bg-blue-50/30 dark:bg-blue-950/10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">[{row.id}]</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      VERIFIED STANDARD
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-blue-950 dark:text-white">
                    {row.zyvTitle}
                  </h4>
                  <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
                    {row.zyvDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}