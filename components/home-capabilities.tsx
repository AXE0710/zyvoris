'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function HomeCapabilities() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const capabilities = [
    {
      num: '01',
      title: isGerman ? 'Fondssteuerberechnungen' : 'Fund Tax Calculations',
      desc: isGerman
        ? 'Strukturierte jurisdiktionsspezifische Steuerberechnungen auf Fondsebene.'
        : 'Structured jurisdiction-specific fund-level tax calculations.',
      metric: '100% DETERMINISTIC CALC ENGINE',
    },
    {
      num: '02',
      title: isGerman ? 'Anteilsklassen- & Mehrebenen-Allokationen' : 'Share-Class & Multi-Tier Allocations',
      desc: isGerman
        ? 'Kontrollierte Allokation von Steuerergebnissen über komplexe Fondsstrukturen.'
        : 'Controlled allocation of tax results across complex fund structures.',
      metric: 'O(1) MULTI-TIER RECONCILIATION',
    },
    {
      num: '03',
      title: isGerman ? 'Prüfung & Nachvollziehbarkeit' : 'Review & Traceability',
      desc: isGerman
        ? 'Validierung, Ausnahmebehandlung und Durchgängigkeit von Quelle bis Output.'
        : 'Validation, exception management, and source-to-output visibility.',
      metric: 'FULL SOURCE-TO-OUTPUT AUDIT TRAIL',
    },
    {
      num: '04',
      title: isGerman ? 'Investoren- & Steuer-Reporting' : 'Investor & Tax Reporting',
      desc: isGerman
        ? 'Strukturierte Steuerdaten und Reporting-Outputs für nachgelagerte Workflows.'
        : 'Structured tax data and reporting outputs for downstream workflows.',
      metric: 'AUTOMATED REGULATORY REPORT PACKS',
    },
  ]

  return (
    <section
      id="capabilities"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-white dark:bg-[#080d1a]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#09132f] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'KERNFUNKTIONEN' : 'CORE CAPABILITIES'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.14]">
            <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
              {isGerman ? 'Entwickelt für ' : 'Built for '}
            </span>
            <span className="font-sans font-semibold text-slate-950 dark:text-white">
              {isGerman
                ? 'komplexe Steuer-Workflows in den Privatmärkten.'
                : 'complex private markets tax workflows.'}
            </span>
          </h2>
        </div>

        {/* 4 Clean Cards without Line Animation or Harsh Highlight */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="
                tap-press
                group relative flex flex-col justify-between
                rounded-2xl
                border-2 border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-6 sm:p-7
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                hover:shadow-xl
                hover:shadow-slate-900/10
                dark:hover:shadow-blue-950/40
              "
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    [{item.num}]
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isGerman ? 'KERN' : 'CORE'}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
