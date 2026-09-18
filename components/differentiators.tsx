'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function DifferentiatorsSection() {
  const { language } = useLanguage()

  const PILLARS = [
    {
      num: '01',
      title: language === 'de' ? 'Tax-Native Architektur' : 'Tax-Native Architecture',
      meta: 'DOMAIN-FIRST DATA MODEL',
      desc:
        language === 'de'
          ? 'Entwickelt von Steuerexperten für die vielschichtigen Realitäten von Private Markets: Master-Feeder, SPVs, Blocker, Carry-Wasserfälle und Beteiligungsgraphen.'
          : 'Engineered by institutional fund tax specialists for the structural realities of private markets: master-feeders, SPVs, blockers, carry waterfalls, and ownership graphs.',
    },
    {
      num: '02',
      title: language === 'de' ? 'Deterministische Berechnung' : 'Deterministic Calculation',
      meta: 'ZERO NUMERICAL GUESSWORK',
      desc:
        language === 'de'
          ? 'Steuerberechnungen werden über versionierte, vordefinierte mathematische Regeln ausgeführt – niemals über probabilistische KI-Ausgaben oder fehleranfällige Tabellenformeln.'
          : 'Numerical calculations execute strictly through version-controlled, auditable mathematical rules—never through probabilistic AI estimates or brittle spreadsheet models.',
    },
    {
      num: '03',
      title: language === 'de' ? 'Nachvollziehbarkeit der Berechnung' : 'Calculation Lineage',
      meta: 'UNBROKEN AUDIT TRAIL',
      desc:
        language === 'de'
          ? 'Lückenloser Prüfpfad von den Quelldaten über jede Transformation und angewendete Steuerregel bis zum finalen Reporting Output.'
          : 'Every material figure preserves an unbroken source-to-output trace, linking reported results directly back to underlying general ledger feeds and specific rule versions.',
    },
    {
      num: '04',
      title: language === 'de' ? 'Cross-Border Design' : 'Cross-Border Design',
      meta: 'MULTI-JURISDICTION NATIVE',
      desc:
        language === 'de'
          ? 'Architektur ausgelegt auf mehrere Steuerregime und Doppelbesteuerungsabkommen, startend mit der Schweiz und schrittweise erweiterbar.'
          : 'Built from day one to handle the friction of cross-border tax treaties, withholding rules, and differing local filing standards across key fund jurisdictions.',
    },
    {
      num: '05',
      title: language === 'de' ? 'Professionelle fachliche Kontrolle' : 'Professional Human Review',
      meta: 'HUMAN-IN-THE-LOOP OVERSIGHT',
      desc:
        language === 'de'
          ? 'Automatisierung übernimmt die wiederholbare Logik. Steuerexperten behalten das fachliche Ermessen, die Ausnahmebehandlung und die finale Freigabe.'
          : 'Automation handles repetitive data preparation and calculation. Experienced tax professionals retain discretion, exception triage, and ultimate sign-off authority.',
    },
    {
      num: '06',
      title: language === 'de' ? 'API-First Infrastruktur' : 'API-First Infrastructure',
      meta: 'CONNECTED SYSTEM LAYER',
      desc:
        language === 'de'
          ? 'Nahtlose Einbindung in bestehende Fund-Accounting- und ERP-Systeme ohne teure Systemwechsel oder isolierte Software-Inseln.'
          : 'Seamless integration alongside existing general ledgers, custodian feeds, and fund administration systems without forcing costly core replacements.',
    },
  ]

  return (
    <section
      id="why-zyvoris"
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'ARCHITEKTUR-DIFFERENZIERUNG' : 'WHY ZYVORIS IS DIFFERENT'}
              </span>
            </div>

            <h2 className="max-w-[780px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? 'Entwickelt für die Realität' : 'Engineered for the reality of'}{' '}
              <span className="text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                {language === 'de' ? 'institutioneller Steuern' : 'institutional tax'}
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'ZYVORIS ist weder eine generische Buchhaltungssoftware noch eine probabilistische KI-Blackbox. Die Plattform wurde als geschäftskritische Tax-Infrastruktur für anspruchsvolle Private-Markets-Operationen konstruiert.'
              : 'ZYVORIS is neither generic accounting software nor a black-box AI wrapper. It was built from the ground up as dedicated tax infrastructure for complex cross-border private markets.'}
          </p>
        </div>

        {/* 6 Differentiator Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.num}
              className="
                group relative flex flex-col justify-between
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-slate-50 dark:bg-slate-900/90
                p-6 sm:p-7
                shadow-xs
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{pillar.num}]
                  </span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    {pillar.meta}
                  </span>
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900/20 dark:border-slate-800 flex items-center justify-between font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                <span>VERIFIED STANDARD</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
