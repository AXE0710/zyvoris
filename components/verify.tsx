'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function VerificationSection() {
  const { t } = useLanguage()

  const STEPS = [
    {
      num: '01',
      title: t('verify_step_1', 'Source Transaction Ingested'),
      meta: 'ERP / GL Feed · Timestamped',
    },
    {
      num: '02',
      title: t('verify_step_2', 'Tax Characterization Applied'),
      meta: 'Jurisdiction Rule v4.2 · WHT Table',
    },
    {
      num: '03',
      title: t('verify_step_3', 'Entity Allocation Executed'),
      meta: 'Waterfall Tier 2 · 100% Deterministic',
    },
    {
      num: '04',
      title: t('verify_step_4', 'Filing Output Generated'),
      meta: 'XML / PDF Statement · Signed-Off',
    },
  ]

  return (
    <section
      id="verification"
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
                {t('verify_kicker', 'AUDIT & VERIFICATION')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {t('verify_title_1', 'Complete calculation lineage.')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('verify_title_2', 'Every number explained.')}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'verify_desc',
              'Auditors and tax reviewers can inspect the exact mathematical lineage of any reported figure back to its source transaction and applied rule version.'
            )}
          </p>
        </div>

        {/* Lineage Steps Box - Bold Black Border & No Icons */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md">
          <div className="p-6 sm:p-8 border-b-2 border-slate-900 dark:border-slate-800 flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              IMMUTABLE AUDIT PIPELINE
            </span>
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
              [ 100% REPRODUCIBLE ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x-2 divide-slate-900/60 dark:divide-slate-800">
            {STEPS.map((step) => (
              <div key={step.num} className="p-6">
                <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                  [{step.num}]
                </span>
                <h4 className="mt-3 text-sm font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-2 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                  {step.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}