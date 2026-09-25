'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function ProblemSection() {
  const { t } = useLanguage()

  const problems = [
    {
      number: '01',
      category: t('prob_1_cat', 'DATA'),
      title: t('prob_1_title', 'Fragmented Data'),
      text: t(
        'prob_1_desc',
        'Fund, accounting, investor, and transaction data remains distributed across multiple systems, files, and stakeholders.'
      ),
    },
    {
      number: '02',
      category: t('prob_2_cat', 'PROCESS'),
      title: t('prob_2_title', 'Manual Tax Processes'),
      text: t(
        'prob_2_desc',
        'Complex tax calculations and allocations still depend heavily on spreadsheets, manual adjustments, and individually maintained workpapers.'
      ),
    },
    {
      number: '03',
      category: t('prob_3_cat', 'CONTROL'),
      title: t('prob_3_title', 'Limited Traceability'),
      text: t(
        'prob_3_desc',
        'Reviewers often need to reconstruct how reported tax values were derived from source data, calculation logic, and manual adjustments.'
      ),
    },
  ]

  return (
    <section
      id="problem"
      className="
        relative
        overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24 lg:py-28
        transition-colors duration-200
      "
    >
      <div className="relative z-10 mx-auto max-w-[1420px]">
        {/* =====================================================
            SECTION HEADER (Fixed 2-Line Balanced Typography)
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-end
            gap-6
            lg:grid-cols-[1.1fr_0.8fr]
            lg:gap-16
          "
        >
          <div>
            <h2
              className="
                mt-2
                mb-0
                max-w-[850px]
                text-[32px]
                sm:text-[46px]
                lg:text-[54px]
                font-normal
                leading-[1.12]
                tracking-tight
                text-slate-950 dark:text-white
              "
            >
              <span className="block font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {t('problem_title_1', 'Private markets have scaled.')}
              </span>
              <span className="block font-sans font-semibold text-blue-600 dark:text-blue-400 mt-1 sm:whitespace-nowrap">
                {t('problem_title_2', 'Tax infrastructure has not.')}
              </span>
            </h2>
          </div>

          <div className="pb-1">
            <p
              className="
                m-0
                max-w-[540px]
                text-sm sm:text-base
                leading-[1.7]
                text-slate-600 dark:text-slate-300
              "
            >
              {t(
                'problem_desc',
                'Tax teams still rely on fragmented data, spreadsheet-based calculations, manual review processes, and disconnected reporting workflows.'
              )}
            </p>
          </div>
        </div>

        {/* =====================================================
            PROBLEM CARDS (Clean, Uniform, No Cluttering Bottom Texts)
        ====================================================== */}
        <div
          className="
            mt-12 sm:mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="
                tap-press
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border-2
                border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-7 sm:p-8
                shadow-sm
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1.5
                hover:shadow-xl
                hover:shadow-slate-900/10
                dark:hover:shadow-blue-950/40
              "
            >
              <div>
                {/* Card Top: [01] · CATEGORY */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] font-bold">
                    <span className="text-blue-600 dark:text-blue-400">[{problem.number}]</span>
                    <span className="text-slate-400 dark:text-slate-500">·</span>
                    <span className="uppercase tracking-wider text-slate-800 dark:text-slate-200">{problem.category}</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>

                {/* Card Main Body */}
                <div className="mt-5">
                  <h3
                    className="
                      m-0
                      text-xl
                      font-bold
                      leading-[1.25]
                      tracking-[-0.02em]
                      text-slate-950 dark:text-white
                    "
                  >
                    {problem.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      mb-0
                      text-sm sm:text-[15px]
                      leading-[1.7]
                      text-slate-600 dark:text-slate-300
                    "
                  >
                    {problem.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            TRANSITIONAL STATEMENT (Flatter, sleek bridge to next section)
        ====================================================== */}
        <div
          className="
            mt-10 sm:mt-12
            relative
            overflow-hidden
            rounded-2xl
            border border-blue-500/20 dark:border-blue-500/25
            bg-gradient-to-r from-blue-50/60 via-white to-slate-50/70 dark:from-blue-950/25 dark:via-[#0c152a] dark:to-slate-900/40
            px-6 py-4 sm:px-7 sm:py-5
            shadow-xs
            backdrop-blur-sm
          "
        >
          {/* Subtle ambient light highlight */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              {/* Transition Eyebrow / Kicker */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.16em] font-bold text-blue-700 dark:text-blue-300">
                  {t(
                    'problem_transition_label',
                    'FROM FRAGMENTED PROCESSES → TO CONTROLLED TAX INFRASTRUCTURE'
                  )}
                </span>
              </div>

              {/* Transformative Statement */}
              <p className="m-0 text-sm sm:text-[15px] font-semibold text-slate-950 dark:text-white leading-snug tracking-tight">
                {t(
                  'problem_closing',
                  'ZYVORIS transforms fragmented tax processes into structured, controlled, and traceable workflows.'
                )}
              </p>
            </div>

            {/* Subtle flow indicator */}
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400 dark:text-slate-500 font-mono text-xs shrink-0">
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}