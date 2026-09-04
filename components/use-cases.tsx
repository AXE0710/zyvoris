'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function UseCases() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const useCases = [
    {
      id: 'fund-tax',
      number: '01',
      title: isGerman ? 'Fondssteuerberechnung' : 'Fund Tax Calculation',
      description: isGerman
        ? 'Finanzdaten von Fonds in strukturierte, jurisdiktionsspezifische Steuerberechnungen überführen.'
        : 'Transform fund financial data into structured jurisdiction-specific tax calculations.',
      outcome: isGerman
        ? 'Wiederholbare, prüfbereite Berechnungen mit weniger Abhängigkeit von manuellen Arbeitspapieren.'
        : 'Repeatable, review-ready calculations with less reliance on manual workpapers.',
    },
    {
      id: 'share-class',
      number: '02',
      title: isGerman ? 'Anteilsklassen- & Mehrebenen-Allokation' : 'Share-Class & Multi-Tier Allocation',
      description: isGerman
        ? 'Steuerergebnisse über Anteilsklassen und komplexe Fondsstrukturen mit kontrollierter Allokationslogik verteilen.'
        : 'Allocate tax results across share classes and complex fund structures using controlled allocation logic.',
      outcome: isGerman
        ? 'Konsistente Allokationen über Fonds, Klassen und Berichtsperioden.'
        : 'Consistent allocations across funds, classes, and reporting periods.',
    },
    {
      id: 'investor-reporting',
      number: '03',
      title: isGerman ? 'Steuer-Reporting für Investoren' : 'Investor Tax Reporting',
      description: isGerman
        ? 'Freigegebene Steuerergebnisse auf Fondsebene in strukturierte Reporting-Daten für Investoren überführen.'
        : 'Turn approved fund-level tax results into structured investor-level reporting data.',
      outcome: isGerman
        ? 'Ein kontrollierter Ablauf von der Fondsberechnung bis zum Investoren-Reporting.'
        : 'A controlled flow from fund calculation to investor reporting.',
    },
    {
      id: 'cross-border',
      number: '04',
      title: isGerman ? 'Grenzüberschreitende Steuer-Workflows' : 'Cross-Border Tax Workflows',
      description: isGerman
        ? 'Jurisdiktionsspezifische Steuerlogik auf komplexe Gesellschafts- und Investmentstrukturen anwenden.'
        : 'Apply jurisdiction-specific tax logic across complex entity and investment structures.',
      outcome: isGerman
        ? 'Eine skalierbare Grundlage für mehrere Jurisdiktionen und Reporting-Anforderungen.'
        : 'A scalable foundation for multiple jurisdictions and reporting requirements.',
      plannedNote: isGerman ? 'US-Investorensteuer-Workflows — geplant' : 'US investor tax workflows — planned',
    },
  ]

  return (
    <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {useCases.map((item) => (
        <article
          key={item.id}
          className="
            relative overflow-hidden
            rounded-3xl
            border-2 border-slate-900 dark:border-slate-700
            bg-white dark:bg-slate-900
            p-6 sm:p-8
            shadow-sm
            transition-all duration-150
            hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
          "
        >
          <div className="border-b-2 border-slate-900/80 pb-5 dark:border-slate-800">
            <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
              [{item.number}]
            </span>
            <h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-white sm:text-xl">
              {item.title}
            </h3>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            {item.description}
          </p>

          <div className="mt-6 border-t border-slate-900/30 pt-4 dark:border-slate-800">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'Zentrales Ergebnis' : 'Key outcome'}
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-relaxed text-slate-950 dark:text-white">
              {item.outcome}
            </p>
          </div>

          {item.plannedNote && (
            <div className="mt-5 rounded-xl border-2 border-dashed border-slate-900/40 bg-slate-50 px-3.5 py-2.5 dark:border-slate-700 dark:bg-slate-800/60">
              <p className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300">
                {item.plannedNote}
              </p>
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
