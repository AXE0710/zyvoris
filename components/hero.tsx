'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './language-provider'

export default function ZyvorisHero({
  setDemoOpen = () => {},
}: {
  setDemoOpen?: (open: boolean) => void
}) {
  const [activeStage, setActiveStage] = useState<number | null>(3)
  const { t, language } = useLanguage()

  const STAGES = [
    {
      id: '01',
      title: t('stage_1_title', 'Source Data Ingestion'),
      desc: t('stage_1_desc', 'Financial, portfolio & transaction feeds'),
      tags: ['Raw Extracts', 'ERP Sync', 'GL Feeds'],
    },
    {
      id: '02',
      title: t('stage_2_title', 'Entity & Structure Mapping'),
      desc: t('stage_2_desc', 'Multi-tier fund, GP/LP & holding graphs'),
      tags: ['Ownership %', 'Jurisdictions', 'Look-Through'],
    },
    {
      id: '03',
      title: t('stage_3_title', 'Tax Logic Engine'),
      desc: t('stage_3_desc', 'Cross-border tax rules & treaties'),
      tags: ['Treaty Logic', 'Withholding Tax', 'Entity Classification', 'Cross-Border Allocation Rules'],
    },
    {
      id: '04',
      title: t('stage_4_title', 'Deterministic Calculation'),
      desc: t('stage_4_desc', 'Automated allocations & tax basis tracking'),
      tags: ['Audit Logging', 'Versioned Rules'],
      featured: true,
    },
    {
      id: '05',
      title: t('stage_5_title', 'Jurisdiction Reporting'),
      desc: t('stage_5_desc', 'Structured tax datasets & review-ready outputs'),
      tags: ['XML/PDF Where Supported', 'Human Sign-off'],
    },
  ]

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="
        relative min-h-[90vh] flex items-center overflow-hidden
        bg-[#f0f4f9] dark:bg-[#080d1a]
        pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28
        px-4 sm:px-6 lg:px-[5vw]
        transition-colors duration-200
      "
    >
      {/* Background Grids */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-40 dark:opacity-15
          bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1420px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =====================================================
              LEFT — HERO COPY
          ====================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5 text-[11px] font-mono font-bold tracking-[0.16em] text-blue-600 dark:text-blue-400">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span>{t('hero_kicker', 'TAX INFRASTRUCTURE FOR PRIVATE MARKETS')}</span>
            </div>

            {/* Main Headline */}
            <h1
              className="
                text-[36px] sm:text-[50px] lg:text-[58px]
                font-semibold
                leading-[1.06]
                tracking-[-0.04em]
                text-slate-950 dark:text-white
              "
            >
              {t('hero_title_1', 'Turn complex fund data into structured,')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('hero_title_2', 'jurisdiction-specific tax reporting')}
              </span>{' '}
              <span className="block sm:inline text-slate-700 dark:text-slate-300 font-normal sm:font-semibold">
                {t('hero_title_sub', 'through one controlled and traceable infrastructure layer.')}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5 sm:mt-6
                max-w-[640px]
                text-base sm:text-lg
                leading-[1.68]
                text-slate-700 dark:text-slate-300
              "
            >
              {t(
                'hero_desc',
                'ZYVORIS connects financial data, fund structures, tax logic, deterministic calculations, review workflows, and reporting outputs in one integrated infrastructure for cross-border private markets.'
              )}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="mailto:info@zyvoris.ai?subject=ZYVORIS%20Demo%20Request"
                className="
                  inline-flex items-center justify-center gap-2
                  h-12 px-6
                  rounded-xl
                  bg-slate-950 dark:bg-blue-600
                  border-2 border-black dark:border-blue-500
                  text-white font-bold text-[13px]
                  shadow-md
                  hover:bg-slate-800 dark:hover:bg-blue-500
                  hover:-translate-y-0.5
                  transition-all duration-200
                "
              >
                <span>{t('nav_book_demo', 'Book a Demo')}</span>
                <span className="font-mono text-sm leading-none">→</span>
              </a>

              <button
                type="button"
                onClick={scrollToProblem}
                className="
                  inline-flex items-center justify-center
                  h-12 px-6
                  rounded-xl
                  border-2 border-slate-900 dark:border-slate-700
                  bg-white dark:bg-slate-800
                  text-slate-950 dark:text-slate-200
                  font-bold text-[13px]
                  shadow-xs
                  hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700
                  hover:-translate-y-0.5
                  transition-all duration-200
                "
              >
                {t('nav_explore', 'Explore the Platform')}
              </button>
            </div>

            {/* Proof Badges with Black Borders in Light Mode */}
            <div className="mt-10 pt-6 border-t-2 border-slate-900/40 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">[01]</span>
                <span>{t('hero_proof_calc', 'Controlled calculations')}</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">[02]</span>
                <span>{t('hero_proof_trace', 'Source-to-output traceability')}</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">[03]</span>
                <span>{t('hero_proof_multi', 'Multi-jurisdiction architecture')}</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-200">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">[04]</span>
                <span>{t('hero_proof_human', 'Human oversight')}</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — INFRASTRUCTURE VISUAL (Black Bordered Box)
          ====================================================== */}
          <div className="lg:col-span-5 w-full">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border-2 border-slate-950 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-5 sm:p-7
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                dark:shadow-2xl dark:shadow-black/60
              "
            >
              {/* Visual Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-slate-900 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-extrabold tracking-wider text-blue-600 dark:text-blue-400">
                      [ SYS-01 ]
                    </span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-950 dark:text-white">
                      {t('hero_pipeline_title', 'ZYVORIS PIPELINE')}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
                    {t('hero_pipeline_sub', 'End-to-End Control Layer')}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 rounded-lg border-2 border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 text-[9px] font-bold text-blue-800 dark:text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{t('hero_deterministic', 'DETERMINISTIC')}</span>
                </div>
              </div>

              {/* Workflow Nodes */}
              <div className="mt-4 space-y-2.5">
                {STAGES.map((stage, idx) => {
                  const isActive = activeStage === idx

                  return (
                    <div key={stage.id}>
                      <div
                        onMouseEnter={() => setActiveStage(idx)}
                        className={`
                          group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3
                          p-3 sm:p-3.5
                          rounded-xl
                          border-2 transition-all duration-150 cursor-pointer
                          ${
                            isActive
                              ? 'border-blue-600 bg-blue-50/70 dark:border-blue-500 dark:bg-blue-950/40 shadow-xs'
                              : 'border-slate-900/70 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-slate-950 hover:bg-white'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Numbered Tag without icon */}
                          <div
                            className={`
                              flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 font-mono text-xs font-bold
                              ${
                                isActive
                                  ? 'border-blue-600 bg-blue-600 text-white'
                                  : 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200'
                              }
                            `}
                          >
                            {stage.id}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              {stage.featured && (
                                <span className="rounded bg-blue-600 text-white px-1.5 py-0.2 text-[8px] font-mono font-bold uppercase">
                                  CORE
                                </span>
                              )}
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white truncate">
                              {stage.title}
                            </h3>
                            <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-400 truncate">
                              {stage.desc}
                            </p>
                          </div>
                        </div>

                        {/* Node Tags */}
                        <div className="flex flex-wrap sm:flex-nowrap gap-1 shrink-0">
                          {stage.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded border border-slate-900/60 dark:border-slate-700 bg-white dark:bg-slate-800 px-1.5 py-0.5 text-[8.5px] font-mono font-semibold text-slate-800 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Small line connector */}
                      {idx < STAGES.length - 1 && (
                        <div className="flex justify-center my-0.5">
                          <span className="font-mono text-[10px] text-slate-500 font-bold">↓</span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Visual Footer */}
              <div className="mt-4 pt-3 border-t-2 border-slate-900 dark:border-slate-800 flex items-center justify-between text-[9px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <span className="text-blue-600 dark:text-blue-400">[DATA]</span>
                <span>→</span>
                <span className="text-blue-600 dark:text-blue-400">[LOGIC]</span>
                <span>→</span>
                <span className="text-blue-600 dark:text-blue-400">[REPORT]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
