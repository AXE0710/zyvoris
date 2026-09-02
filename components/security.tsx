'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function SecuritySection() {
  const { t } = useLanguage()

  const CONTROLS = [
    {
      id: '01',
      title: t('sec_c1_title', 'End-to-End Encryption'),
      desc: t('sec_c1_desc', 'Data is protected using strong AES-256 encryption at rest and TLS 1.3 in transit.'),
    },
    {
      id: '02',
      title: t('sec_c2_title', 'Role-Based Access Control'),
      desc: t('sec_c2_desc', 'Granular permissions ensure users only see funds and data relevant to their role.'),
    },
    {
      id: '03',
      title: t('sec_c3_title', 'Comprehensive Audit Logging'),
      desc: t('sec_c3_desc', 'Every system action, calculation run, and data edit is immutably timestamped.'),
    },
    {
      id: '04',
      title: t('sec_c4_title', 'Strict Tenant Isolation'),
      desc: t('sec_c4_desc', 'Customer environments and data stores are logically and cryptographically separated.'),
    },
    {
      id: '05',
      title: t('sec_c5_title', 'Data Retention Controls'),
      desc: t('sec_c5_desc', 'Manage data lifecycle and archival policies according to institutional compliance standards.'),
    },
    {
      id: '06',
      title: t('sec_c6_title', 'Zero-Retention AI Governance'),
      desc: t('sec_c6_desc', 'AI models operate under strict zero-retention policies. Customer data is never used for training.'),
    },
  ]

  return (
    <section
      id="security"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-white dark:bg-[#080d1a]
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
                {t('sec_kicker', 'SECURITY & GOVERNANCE')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {t('sec_title_1', 'Built for sensitive')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('sec_title_2', 'financial and tax data.')}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'sec_desc',
              'ZYVORIS is designed around controlled access, operational visibility, data governance, and professional oversight.'
            )}
          </p>
        </div>

        {/* Security Controls Grid - Bold Black Borders & No Icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTROLS.map((item) => (
            <div
              key={item.id}
              className="
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-7
                shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                  [{item.id}]
                </span>
                <span className="font-mono text-[10px] font-bold uppercase text-slate-900 dark:text-slate-200">
                  VERIFIED CONTROL
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}