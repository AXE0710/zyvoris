'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function CoreCapabilities() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const capabilities = [
    {
      num: '01',
      title: isGerman ? 'Fondssteuerberechnungen' : 'Fund-Level Tax Calculations',
      desc: isGerman
        ? 'Strukturierte länderspezifische Steuerberechnungen auf Fondsebene ausführen.'
        : 'Run controlled, jurisdiction-specific tax calculations at fund level.',
    },
    {
      num: '02',
      title: isGerman ? 'Anteilsklassen-Allokationen' : 'Share-Class Allocations',
      desc: isGerman
        ? 'Kontrollierte Verteilung steuerlicher Ergebnisse über komplexe Anteilsklassen.'
        : 'Controlled allocation of tax results across complex share classes.',
    },
    {
      num: '03',
      title: isGerman ? 'Mehrebenen-Strukturmodellierung' : 'Multi-Tier Structure Modeling',
      desc: isGerman
        ? 'Gesellschaften, Beteiligungsverhältnisse und mehrstufige Fondsstrukturen abbilden.'
        : 'Model entities, ownership hierarchies, and layered fund vehicles.',
    },
    {
      num: '04',
      title: isGerman ? 'Steuerwert-Berechnungen' : 'Tax Value Calculations',
      desc: isGerman
        ? 'Relevante steuerliche Werte und Einkünfte aus Fondsdaten ermitteln.'
        : 'Calculate taxable values and attributable income from fund data.',
    },
    {
      num: '05',
      title: isGerman ? 'Prüfung & Validierung' : 'Review & Validation',
      desc: isGerman
        ? 'Ergebnisse validieren, Ausnahmen behandeln und Freigabebereitschaft sichern.'
        : 'Validate calculation results, manage exceptions, and confirm approval readiness.',
    },
    {
      num: '06',
      title: isGerman ? 'Reporting-Outputs' : 'Reporting Outputs',
      desc: isGerman
        ? 'Strukturierte Ausgabedaten für nachgelagerte Melde- und Steuerworkflows bereitstellen.'
        : 'Prepare structured outputs and filing packages for downstream workflows.',
    },
    {
      num: '07',
      title: isGerman ? 'Berechnungs-Rückverfolgbarkeit' : 'Calculation Traceability',
      desc: isGerman
        ? 'Ausgabewerte lückenlos bis zu Quelldaten und angewandter Steuerlogik zurückverfolgen.'
        : 'Trace reported values back to source transactions and applied tax logic.',
    },
    {
      num: '08',
      title: isGerman ? 'Strukturierte Datenübernahme' : 'Structured Data Ingestion',
      desc: isGerman
        ? 'Quelldaten aus Buchhaltung und Fonds in eine einheitliche, prüffähige Struktur überführen.'
        : 'Bring source financial and fund data into a consistent, reviewable structure.',
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12]">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Entwickelt{' '}
                </span>
                für komplexe Private-Markets-Steuerprozesse.
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Built{' '}
                </span>
                for complex private markets tax workflows.
              </>
            )}
          </h2>
        </div>

        {/* 8 Capability Cards */}
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
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
              "
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    [{item.num}]
                  </span>
                  <span className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-2 py-0.5 font-mono text-[9.5px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                    {isGerman ? 'FUNKTION' : 'CAPABILITY'}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
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
