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
      text: t(
        'prob_1_desc',
        'Fund and tax data remains distributed across systems, files, and stakeholders.'
      ),
    },
    {
      number: '02',
      category: 'PROCESS',
      title: t('prob_2_title', 'Manual Tax Processes'),
      text: t(
        'prob_2_desc',
        'Complex calculations and allocations still depend heavily on spreadsheets and manually maintained workpapers.'
      ),
    },
    {
      number: '03',
      category: 'AUDIT',
      title: t('prob_3_title', 'Limited Traceability'),
      text: t(
        'prob_3_desc',
        'Reviewers often need to reconstruct how reported tax values were produced.'
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
            {/* Kicker Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-blue-800 dark:text-blue-300">
                {t('problem_kicker', 'THE CHALLENGE')}
              </span>
            </div>

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
              <span className="block font-sans font-semibold text-blue-600 dark:text-blue-400 mt-1">
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
                {/* Card Top: Number & Category */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    [{problem.number}]
                  </span>

                  <span className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-2.5 py-0.5 font-mono text-[9.5px] font-bold uppercase text-slate-700 dark:text-slate-300">
                    {problem.category}
                  </span>
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
            CLOSING SENTENCE
        ====================================================== */}
        <div
          className="
            mt-12 sm:mt-14
            rounded-2xl
            border-2
            border-slate-900 dark:border-slate-800
            bg-white dark:bg-slate-900/80
            p-6 sm:p-7
            shadow-sm
          "
        >
          <p className="m-0 text-base sm:text-lg font-semibold text-slate-950 dark:text-white leading-snug">
            {t(
              'problem_closing',
              'ZYVORIS turns these fragmented processes into structured, controlled, and traceable workflows.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}