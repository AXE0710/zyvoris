'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function IntegrationSection() {
  const { t } = useLanguage()

  const SYSTEMS = [
    { title: 'Accounting Systems', description: 'Financial records and accounting GL data' },
    { title: 'Fund Administration', description: 'Fund structures, investor registers & NAV' },
    { title: 'Portfolio Management', description: 'Portfolio holdings & investment transactions' },
    { title: 'Tax Preparation Systems', description: 'Existing tax return and reporting pipelines' },
    { title: 'Enterprise Data Lakes', description: 'Cloud data warehouses & Snowflake/Databricks' },
    { title: 'Investor Portals', description: 'Investor tax statements & partner portals' },
  ]

  const INTERFACES = [
    'REST API',
    'SFTP / Managed Transfer',
    'CSV Ingestion',
    'Excel Workbooks',
    'JSON Feeds',
    'Structured SQL Feeds',
    'Document OCR',
  ]

  return (
    <section
      id="integrations"
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
                {t('int_kicker', 'INTEGRATIONS')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {t('int_title_1', 'Built to connect with your')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('int_title_2', 'existing tax stack.')}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'int_desc',
              'ZYVORIS operates alongside your existing tools—connecting financial, fund, and tax data without forcing expensive system replacements.'
            )}
          </p>
        </div>

        {/* Connectivity Canvas Box with bold black border */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">
          <div className="p-6 sm:p-8 border-b-2 border-slate-900 dark:border-slate-800">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              SYSTEM CONNECTORS & DATA FEEDS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x-2 divide-slate-900/60 dark:divide-slate-800 border-b-2 border-slate-900 dark:border-slate-800">
            {SYSTEMS.map((sys, idx) => (
              <div key={sys.title} className="p-6">
                <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                  [0{idx + 1}]
                </span>
                <h4 className="mt-2.5 text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {sys.title}
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {sys.description}
                </p>
              </div>
            ))}
          </div>

          {/* Supported Interfaces Row */}
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/60">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              SUPPORTED INTERFACES & FORMATS:
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {INTERFACES.map((iface) => (
                <span
                  key={iface}
                  className="rounded-lg border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 font-mono text-xs font-bold text-slate-900 dark:text-slate-200 shadow-2xs"
                >
                  {iface}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}