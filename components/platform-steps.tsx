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
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'PROZESS' : 'WORKFLOW'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12]">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Ein kontrollierter Prozess.{' '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  Von den Quelldaten bis zum Steuerreporting
                </span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  One controlled workflow.{' '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  From source data to tax reporting
                </span>
              </>
            )}
          </h2>
        </div>

        {/* 6 Steps */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="
                tap-press
                group relative flex flex-col justify-between
                rounded-2xl
                border-2 border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-6 sm:p-7
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
              "
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    [{step.num}]
                  </span>
                  <span className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-2 py-0.5 font-mono text-[9.5px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                    {isGerman ? `SCHRITT ${step.num}` : `STEP ${step.num}`}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-slate-600 dark:text-slate-300">
                    {step.desc}
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
