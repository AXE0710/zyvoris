'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export default function SolutionsSection() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const STAGES = [
    {
      num: '01',
      title: isGerman ? 'DATEN' : 'DATA',
      subtitle: isGerman ? 'Fund Data Ingestion' : 'Fund Data Ingestion',
      desc: isGerman
        ? 'Harmonisierung von Finanz-, Buchhaltungs-, Investoren- und Transaktionsdaten aus heterogenen Quellsystemen.'
        : 'Harmonization of financial, accounting, investor, and transaction data from heterogeneous source systems.',
      capabilities: isGerman
        ? ['GL & Trial Balance Ingestion', 'Investor Register Sync', 'Transaction Normalization']
        : ['GL & Trial Balance Ingestion', 'Investor Register Sync', 'Transaction Normalization'],
    },
    {
      num: '02',
      title: isGerman ? 'STRUKTUR' : 'STRUCTURE',
      subtitle: isGerman ? 'Entity & Vehicle Modeling' : 'Entity & Vehicle Modeling',
      desc: isGerman
        ? 'Präzise Modellierung von Fonds, Holding-Gesellschaften, Beteiligungsverhältnissen und Anteilsklassen.'
        : 'Precise modeling of funds, holding entities, ownership relationships, and multi-tier share classes.',
      capabilities: isGerman
        ? ['Multi-Tier Fund Mapping', 'Share-Class Hierarchy', 'Look-Through Graph']
        : ['Multi-Tier Fund Mapping', 'Share-Class Hierarchy', 'Look-Through Graph'],
    },
    {
      num: '03',
      title: isGerman ? 'STEUERLOGIK' : 'TAX LOGIC',
      subtitle: isGerman ? 'Jurisdiction Rule Engine' : 'Jurisdiction Rule Engine',
      desc: isGerman
        ? 'Anwendung jurisdiktionsspezifischer Klassifizierungen, steuerlicher Korrekturen und formaler Berechnungsregeln.'
        : 'Application of jurisdiction-specific tax classifications, adjustments, and statutory calculation rules.',
      capabilities: isGerman
        ? ['Statutory Rule Compilers', 'Tax Treatment Matrix', 'Exemption Logic']
        : ['Statutory Rule Compilers', 'Tax Treatment Matrix', 'Exemption Logic'],
    },
    {
      num: '04',
      title: isGerman ? 'BERECHNUNG' : 'CALCULATION',
      subtitle: isGerman ? 'Deterministic Calculation' : 'Deterministic Calculation',
      desc: isGerman
        ? 'Kontrollierte, reproduzierbare Steuerberechnungen und mathematisch geschlossene Allokationen auf Fondsebene.'
        : 'Controlled, reproducible fund-level tax calculations and mathematically closed share-class allocations.',
      capabilities: isGerman
        ? ['Class-Level Income Allocation', 'Capital Gains Slicing', 'Withholding Offset Engine']
        : ['Class-Level Income Allocation', 'Capital Gains Slicing', 'Withholding Offset Engine'],
    },
    {
      num: '05',
      title: isGerman ? 'PRÜFUNG' : 'REVIEW',
      subtitle: isGerman ? 'Review & Traceability' : 'Review & Traceability',
      desc: isGerman
        ? 'Vollständige Ausnahmebehandlung, professionelle Validierungskontrollen und lückenlose mathematische Herkunft.'
        : 'Comprehensive exception handling, professional validation controls, and complete mathematical lineage.',
      capabilities: isGerman
        ? ['Source-to-Output Lineage Graph', 'Variance Analysis', 'Auditor Review Sign-Off']
        : ['Source-to-Output Lineage Graph', 'Variance Analysis', 'Auditor Review Sign-Off'],
    },
    {
      num: '06',
      title: isGerman ? 'REPORTING' : 'REPORTING',
      subtitle: isGerman ? 'Output & Filings' : 'Output & Filings',
      desc: isGerman
        ? 'Automatisierte Generierung strukturierter behördlicher Meldedateien und revisionssicherer Investorenpakete.'
        : 'Automated generation of structured statutory reporting files, regulatory feeds, and audit-ready investor packs.',
      capabilities: isGerman
        ? ['ICTax XML Feeds', 'Standardized Tax Certificates', 'Downstream ERP Exports']
        : ['ICTax XML Feeds', 'Standardized Tax Certificates', 'Downstream ERP Exports'],
    },
  ]

  return (
    <section
      id="how-it-works"
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
        {/* ── Header ── */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'DIE PLATTFORM' : 'THE PLATFORM'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.14]">
            <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
              {isGerman ? 'Ein kontrollierter Ablauf ' : 'One controlled workflow '}
            </span>
            <span className="font-sans font-semibold">
              {isGerman
                ? 'von Fondsdaten bis zum Steuerreporting.'
                : 'from fund data to tax reporting.'}
            </span>
          </h2>
        </div>

        {/* ── Overlapping Cards Deck on Hover ── */}
        <div className="mt-14 sm:mt-18">
          {/* Desktop & Tablet: Overlapping Cards Row / Mobile: Overlapping Stack */}
          <div className="flex flex-col lg:flex-row items-stretch -space-y-6 lg:space-y-0 lg:-space-x-8 xl:-space-x-10 relative pt-4 pb-8">
            {STAGES.map((stage, idx) => {
              const isHovered = hoveredIdx === idx
              // Natural z-index stacking from left to right so subsequent cards overlap preceding ones
              const baseZ = idx + 1

              return (
                <div
                  key={stage.num}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    zIndex: isHovered ? 40 : baseZ,
                  }}
                  className={`
                    group relative flex flex-col justify-between
                    flex-1 min-w-[200px]
                    rounded-3xl
                    border-2 border-slate-200 dark:border-slate-800
                    bg-white dark:bg-[#0c152a]
                    p-6 sm:p-7
                    cursor-pointer
                    transition-all duration-300 ease-out
                    ${
                      isHovered
                        ? '-translate-y-5 lg:-translate-y-7 scale-[1.03] shadow-2xl shadow-slate-900/20 dark:shadow-blue-950/70 border-slate-300 dark:border-slate-700'
                        : 'shadow-md hover:shadow-xl hover:-translate-y-3'
                    }
                  `}
                >
                  <div>
                    {/* Top bar: Stage Number & Title */}
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-800 font-mono text-xs font-bold text-white">
                          {stage.num}
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          {stage.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-semibold">
                        0{idx + 1}/06
                      </span>
                    </div>

                    {/* Stage Details */}
                    <div className="mt-4">
                      <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                        {stage.subtitle}
                      </span>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 m-0">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Integrated Capabilities - Clean Bullet Points */}
                    <div className="mt-5 space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                      {stage.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
