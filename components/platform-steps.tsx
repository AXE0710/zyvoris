'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function PlatformSteps() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const steps = [
    {
      num: '01',
      title: isGerman ? 'Datenaufnahme' : 'Data Ingestion',
      desc: isGerman
        ? 'Finanz-, Investoren-, Transaktions- und Fondsdaten importieren.'
        : 'Import financial, investor, transaction, and fund data.',
    },
    {
      num: '02',
      title: isGerman ? 'Strukturmodellierung' : 'Structure Modeling',
      desc: isGerman
        ? 'Gesellschaften, Fonds, SPVs, Beteiligungsverhältnisse und Anteilsklassen modellieren.'
        : 'Model entities, funds, SPVs, ownership relationships, and share classes.',
    },
    {
      num: '03',
      title: isGerman ? 'Steuerlogik' : 'Tax Logic',
      desc: isGerman
        ? 'Jurisdiktionsspezifische Klassifizierungen und Steuerregeln anwenden.'
        : 'Apply jurisdiction-specific classifications and tax rules.',
    },
    {
      num: '04',
      title: isGerman ? 'Berechnung & Allokation' : 'Calculation & Allocation',
      desc: isGerman
        ? 'Kontrollierte Berechnungen und Allokationen auf Fondsebene ausführen.'
        : 'Execute controlled fund-level calculations and allocations.',
    },
    {
      num: '05',
      title: isGerman ? 'Prüfung' : 'Review',
      desc: isGerman
        ? 'Ausnahmen identifizieren, Ergebnisse validieren und fachliche Aufsicht gewährleisten.'
        : 'Identify exceptions, validate results, and maintain professional oversight.',
    },
    {
      num: '06',
      title: isGerman ? 'Reporting' : 'Reporting',
      desc: isGerman
        ? 'Strukturierte Steuer-Reporting-Outputs erstellen.'
        : 'Produce structured tax reporting outputs.',
    },
  ]

  return (
    <section
      id="platform-workflow"
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
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'WORKFLOW' : 'WORKFLOW'}
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
            {isGerman
              ? 'Ein strukturierter Ablauf von Quelldaten bis zum Reporting.'
              : 'One structured workflow from source data to reporting.'}
          </h2>
        </div>

        {/* 6 Steps */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="
                group relative flex flex-col justify-between
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-[#f0f4f9]/50 dark:bg-slate-900/90
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
                    [{step.num}]
                  </span>
                  <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                    {isGerman ? `SCHRITT ${step.num}` : `STEP ${step.num}`}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-slate-700 dark:text-slate-300">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between pt-3 border-t border-slate-900/30 dark:border-slate-800">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {isGerman ? 'AUSFÜHRUNG' : 'EXECUTION'}
                </span>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
