'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export default function SolutionsSection() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const { t } = useLanguage()

  const STEPS = [
    {
      num: '01',
      title: t('sol_stage_1_title', 'Source Data Ingestion'),
      desc: t(
        'sol_stage_1_desc',
        'Consolidate accounting records, transaction logs, entity ownership graphs, and investor registries from multiple systems into unified formats.'
      ),
      tags: ['GL Feeds', 'ERP Connectors', 'Document OCR', 'Validation'],
    },
    {
      num: '02',
      title: t('sol_stage_2_title', 'Tax Logic & Classification'),
      desc: t(
        'sol_stage_2_desc',
        'Apply jurisdiction-specific tax rules, withholding tax treaties, hybrid mismatch logic, and income characterization to structured fund entities.'
      ),
      tags: ['WHT Treaties', 'Pillar Two', 'Look-Through', 'Tax Basis'],
    },
    {
      num: '03',
      title: t('sol_stage_3_title', 'Deterministic Calculation Engine'),
      desc: t(
        'sol_stage_3_desc',
        'Execute fund-level tax calculations, investor-level allocations, equalization entries, and tax basis tracking with mathematical precision.'
      ),
      tags: ['100% Deterministic', 'Zero Guesswork', 'Equalization', 'Waterfalls'],
    },
    {
      num: '04',
      title: t('sol_stage_4_title', 'Traceability & Verification'),
      desc: t(
        'sol_stage_4_desc',
        'Every calculation step is logged with full source-to-output lineage, enabling tax teams and auditors to verify every output value.'
      ),
      tags: ['Audit Trails', 'Lineage Graph', 'Versioned Rules', 'Sign-Off'],
    },
    {
      num: '05',
      title: t('sol_stage_5_title', 'Jurisdiction Reporting Outputs'),
      desc: t(
        'sol_stage_5_desc',
        'Generate filing-ready tax returns, investor tax statements, XML submission packages, and structured management reporting datasets.'
      ),
      tags: ['Filing Packages', 'Investor K-1/K-3', 'Swiss/DE Filings', 'XML/PDF'],
    },
  ]

  return (
    <section
      id="solutions"
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
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t('sol_kicker', 'HOW IT WORKS')}
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
            {t('sol_title_1', 'A structured operating model for')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('sol_title_2', 'tax calculation and reporting.')}
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'sol_desc',
              'ZYVORIS organizes tax reporting into a predictable sequence: connecting source data, applying tax rules, calculating results, verifying calculations, and generating outputs.'
            )}
          </p>
        </div>

        {/* Steps Grid - Bold Black Borders & No Icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === idx

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`
                  group relative flex flex-col justify-between
                  rounded-2xl
                  border-2 p-6 sm:p-7
                  transition-all duration-150 cursor-pointer
                  ${
                    isSelected
                      ? 'border-blue-600 bg-white dark:border-blue-500 dark:bg-slate-900 shadow-md ring-1 ring-blue-600'
                      : 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-600'
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{step.num}]
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">
                      STEP {step.num}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-900/40 dark:border-slate-800">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-900/60 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[9px] font-bold text-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}