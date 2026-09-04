'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function SolutionsSection() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const BLOCKS = [
    {
      num: '01',
      title: isGerman ? 'DATEN' : 'DATA',
      desc: isGerman
        ? 'Finanz-, Buchhaltungs-, Investoren- und Transaktionsdaten.'
        : 'Financial, accounting, investor, and transaction data.',
    },
    {
      num: '02',
      title: isGerman ? 'STRUKTUR' : 'STRUCTURE',
      desc: isGerman
        ? 'Fonds, Gesellschaften, Beteiligungsverhältnisse und Anteilsklassen.'
        : 'Funds, entities, ownership relationships, and share classes.',
    },
    {
      num: '03',
      title: isGerman ? 'STEUERLOGIK' : 'TAX LOGIC',
      desc: isGerman
        ? 'Jurisdiktionsspezifische Klassifizierungen und Berechnungsregeln.'
        : 'Jurisdiction-specific classifications and calculation rules.',
    },
    {
      num: '04',
      title: isGerman ? 'BERECHNUNG' : 'CALCULATION',
      desc: isGerman
        ? 'Kontrollierte Berechnungen und Allokationen auf Fondsebene.'
        : 'Controlled fund-level calculations and allocations.',
    },
    {
      num: '05',
      title: isGerman ? 'PRÜFUNG' : 'REVIEW',
      desc: isGerman
        ? 'Validierung, Ausnahmen und fachliche Aufsicht.'
        : 'Validation, exceptions, and professional oversight.',
    },
    {
      num: '06',
      title: isGerman ? 'REPORTING' : 'REPORTING',
      desc: isGerman
        ? 'Strukturierte jurisdiktionsspezifische Reporting-Outputs.'
        : 'Structured jurisdiction-specific reporting outputs.',
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
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'DIE PLATTFORM' : 'THE PLATFORM'}
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
            {isGerman
              ? 'Ein kontrollierter Ablauf von Fondsdaten bis zum Steuerreporting.'
              : 'One controlled workflow from fund data to tax reporting.'}
          </h2>
        </div>

        {/* ── Six Visual Blocks ── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((block) => (
            <div
              key={block.num}
              className="
                group relative flex flex-col justify-between
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-7
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{block.num}]
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-950 dark:text-white uppercase">
                    {block.title}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-[1.65] text-slate-700 dark:text-slate-300">
                  {block.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-3 border-t border-slate-900/30 dark:border-slate-800">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  STAGE {block.num}
                </span>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Visual Pipeline ── */}
        <div className="mt-12 sm:mt-14 rounded-2xl border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col items-center gap-2 text-xs font-mono font-bold tracking-wider sm:flex-row sm:justify-between sm:gap-3 sm:text-sm">
            <span className="text-blue-600 dark:text-blue-400">{isGerman ? 'DATEN' : 'DATA'}</span>
            <span className="text-slate-400 dark:text-slate-500 sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 sm:inline">→</span>
            <span className="text-slate-900 dark:text-slate-200">{isGerman ? 'STRUKTUR' : 'STRUCTURE'}</span>
            <span className="text-slate-400 dark:text-slate-500 sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 sm:inline">→</span>
            <span className="text-blue-600 dark:text-blue-400">{isGerman ? 'STEUERLOGIK' : 'TAX LOGIC'}</span>
            <span className="text-slate-400 dark:text-slate-500 sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 sm:inline">→</span>
            <span className="text-slate-900 dark:text-slate-200">{isGerman ? 'BERECHNUNG' : 'CALCULATION'}</span>
            <span className="text-slate-400 dark:text-slate-500 sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 sm:inline">→</span>
            <span className="text-blue-600 dark:text-blue-400">{isGerman ? 'PRÜFUNG' : 'REVIEW'}</span>
            <span className="text-slate-400 dark:text-slate-500 sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 sm:inline">→</span>
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">REPORTING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
