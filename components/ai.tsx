'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function AISection() {
  const { t } = useLanguage()

  const LAYERS = [
    {
      step: '01',
      title: t('ai_layer_1_title', 'AI Interpretation Layer'),
      desc: t(
        'ai_layer_1_desc',
        'Extract structured tax facts from partnership agreements, financial statements, and K-1 documents with confidence scoring.'
      ),
      tags: ['Document OCR', 'Entity Extraction', 'Tax Fact Classification', 'Zero Retention'],
    },
    {
      step: '02',
      title: t('ai_layer_2_title', 'Deterministic Rule Engine'),
      desc: t(
        'ai_layer_2_desc',
        'Execute 100% auditable mathematical calculations. Zero hallucination risk in numbers, allocations, and filings.'
      ),
      tags: ['Deterministic Math', 'Zero Guesswork', 'Versioned Rulesets', 'Audit Lineage'],
      highlight: true,
    },
    {
      step: '03',
      title: t('ai_layer_3_title', 'Human Review & Sign-off'),
      desc: t(
        'ai_layer_3_desc',
        'Professional users inspect flagged variances, approve classification decisions, and authorize final reporting datasets.'
      ),
      tags: ['Exception Review', 'Variance Thresholds', 'Audit Approval', 'Sign-Off Trail'],
    },
  ]

  return (
    <section
      id="ai-architecture"
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
                {t('ai_kicker', 'AI & CONTROLLED INTELLIGENCE')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {t('ai_title_1', 'AI where interpretation matters.')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('ai_title_2', 'Deterministic calculation where precision is non-negotiable.')}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'ai_desc',
              'ZYVORIS uses AI specifically for document extraction, classification, and tax rule interpretation. Calculations are always executed deterministically by a verified mathematical rule engine.'
            )}
          </p>
        </div>

        {/* 3 Layer Cards - Bold Black Borders & No Icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {LAYERS.map((layer) => (
            <div
              key={layer.step}
              className={`
                flex flex-col justify-between
                rounded-2xl
                border-2 p-6 sm:p-7
                transition-all duration-150
                ${
                  layer.highlight
                    ? 'border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-slate-900 shadow-md ring-1 ring-blue-600'
                    : 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-600'
                }
              `}
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{layer.step}]
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">
                    LAYER {layer.step}
                  </span>
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                  {layer.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {layer.desc}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-900/40 dark:border-slate-800">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-slate-900/60 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-0.5 font-mono text-[9px] font-bold text-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}