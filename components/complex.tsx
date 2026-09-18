'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export default function ComplexStructuresSection() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const { t } = useLanguage()

  const STRUCTURES = [
    {
      id: '01',
      title: t('struct_1_title', 'Master-Feeder & Parallel Vehicles'),
      desc: t(
        'struct_1_desc',
        'Model complex fund architectures across multiple jurisdictions with automated aggregation and pass-through tax logic.'
      ),
      tags: ['Delaware LP', 'Luxembourg SCSp', 'Cayman Segregated', 'Irish ICAV'],
    },
    {
      id: '02',
      title: t('struct_2_title', 'Multi-Tier SPVs & Blocker Entities'),
      desc: t(
        'struct_2_desc',
        'Track tax basis, withholding taxes, and treaty qualifications across multi-layered holding entities and corporate blockers.'
      ),
      tags: ['Section 892', 'ECI Mitigation', 'Tax Basis Step-Up', 'Holding Co Graph'],
    },
    {
      id: '03',
      title: t('struct_3_title', 'Carried Interest & Equalization'),
      desc: t(
        'struct_3_desc',
        'Calculate complex carried interest allocations, GP/LP catch-ups, and subsequent closing equalization adjustments.'
      ),
      tags: ['Hurdle Rates', 'GP Catch-up', 'Subsequent Closings', 'Equalization Interest'],
    },
    {
      id: '04',
      title: t('struct_4_title', 'Cross-Border Treaty Application'),
      desc: t(
        'struct_4_desc',
        'Apply double tax treaty reductions, anti-hybrid rules, and substance verification logic across international investment paths.'
      ),
      tags: ['Treaty Logic', 'Withholding Tax', 'Entity Classification', 'Cross-Border Allocation Rules'],
    },
  ]

  return (
    <section
      id="complex-structures"
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
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t('complex_kicker', 'STRUCTURAL COMPLEXITY')}
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
            {t('complex_title_1', 'Engineered for the reality of')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('complex_title_2', 'modern fund architecture.')}
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t(
              'complex_desc',
              'Private-market funds are rarely single entities. ZYVORIS models multi-tier master-feeder funds, parallel vehicles, blocker corporations, and SPVs.'
            )}
          </p>
        </div>

        {/* Structures Grid - Bold Black Borders & No Icons */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {STRUCTURES.map((struct, idx) => {
            const isSelected = activeTab === idx

            return (
              <div
                key={struct.id}
                onClick={() => setActiveTab(idx)}
                className={`
                  tap-press group relative flex flex-col justify-between
                  rounded-2xl
                  border-2 p-6 sm:p-8
                  transition-all duration-300 ease-out cursor-pointer
                  hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
                  ${
                    isSelected
                      ? 'border-slate-400 dark:border-slate-600 bg-[#f4f7fc] dark:bg-slate-900 shadow-md'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a]'
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{struct.id}]
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">
                      TIER {struct.id}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                    {struct.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {struct.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-900/40 dark:border-slate-800">
                  {struct.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-900/60 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-[10px] font-bold text-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Future Expansion Callout */}
        <div className="mt-8 rounded-2xl border-2 border-slate-900/60 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-sky-600/60 bg-sky-500/15 text-sky-700 dark:border-sky-500/60 dark:text-sky-300">
              EXPANSION
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span className="font-bold text-slate-950 dark:text-white">Architecture designed to extend to additional regimes:</span>{' '}
              Future expansion areas include Pillar Two, additional withholding regimes, and jurisdiction-specific regulatory frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}