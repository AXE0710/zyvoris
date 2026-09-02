'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function ProblemSection() {
  const { t } = useLanguage()

  const problems = [
    {
      number: '01',
      category: 'DATA',
      title: t('prob_1_title', 'Fragmented Data'),
      text: t('prob_1_desc', 'Important fund data sits across different systems, administrators, spreadsheets, and operational sources.'),
    },
    {
      number: '02',
      category: 'LOGIC',
      title: t('prob_2_title', 'Manual Tax Logic'),
      text: t('prob_2_desc', 'Complex classifications and calculations often depend on spreadsheets, workpapers, and institutional knowledge.'),
    },
    {
      number: '03',
      category: 'GLOBAL',
      title: t('prob_3_title', 'Cross-Border Complexity'),
      text: t('prob_3_desc', 'Each jurisdiction introduces different rules, classifications, allocation methods, and reporting requirements.'),
    },
    {
      number: '04',
      category: 'AUDIT',
      title: t('prob_4_title', 'Limited Traceability'),
      text: t('prob_4_desc', 'Reviewers often need to reconstruct how a number moved from source data through calculation to final reporting.'),
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
            SECTION HEADER
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
            <div
              className="
                flex
                items-center
                gap-2.5
                text-[11px]
                font-mono font-bold
                tracking-[0.16em]
                text-blue-600 dark:text-blue-400
              "
            >
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span>{t('problem_kicker', 'THE OPERATING PROBLEM')}</span>
            </div>

            <h2
              className="
                mt-4
                mb-0
                max-w-[850px]
                text-[32px]
                sm:text-[46px]
                lg:text-[54px]
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-slate-950 dark:text-white
              "
            >
              {t('problem_title_1', 'Private markets have scaled.')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('problem_title_2', 'Tax infrastructure has not.')}
              </span>
            </h2>
          </div>

          <div className="pb-1">
            <p
              className="
                m-0
                max-w-[520px]
                text-sm sm:text-base
                leading-[1.7]
                text-slate-700 dark:text-slate-300
              "
            >
              {t(
                'problem_desc',
                'As fund structures become more complex and reporting expands across jurisdictions, tax workflows increasingly depend on fragmented data, manual processes, and institutional knowledge that is difficult to reproduce and review.'
              )}
            </p>
          </div>
        </div>

        {/* =====================================================
            PROBLEM CARDS - Bold Black Borders in Light Mode, No Icons
        ====================================================== */}
        <div
          className="
            mt-12 sm:mt-16
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-7
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                transition-all
                duration-150
                hover:-translate-y-1
                hover:border-blue-600 dark:hover:border-blue-500
                hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
              "
            >
              <div>
                {/* Card Top: Header Metadata without icon */}
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{problem.number}]
                  </span>

                  <span className="rounded border border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-800 dark:text-slate-300">
                    {problem.category}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="mt-5">
                  <h3
                    className="
                      m-0
                      text-lg
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
                      mt-2.5
                      mb-0
                      text-xs sm:text-sm
                      leading-[1.65]
                      text-slate-700 dark:text-slate-300
                    "
                  >
                    {problem.text}
                  </p>
                </div>
              </div>

              {/* Card Bottom Indicator */}
              <div className="mt-6 flex items-center justify-between pt-3.5 border-t border-slate-900/40 dark:border-slate-800">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600 dark:text-slate-400">
                  {t('prob_tag', 'Operating Bottleneck')}
                </span>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM SUMMARY BAR
        ====================================================== */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-4
            border-t-2
            border-slate-900 dark:border-slate-800
            pt-6
            sm:flex-row
            sm:items-center
          "
        >
          <p className="m-0 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200">
            {t('problem_summary', 'The complexity sits upstream of the final report.')}
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[11px]
              font-extrabold
              tracking-[0.14em]
              text-blue-600 dark:text-blue-400
            "
          >
            <span>DATA</span>
            <span className="text-slate-500">→</span>
            <span>LOGIC</span>
            <span className="text-slate-500">→</span>
            <span>REPORTING</span>
          </div>
        </div>
      </div>
    </section>
  )
}