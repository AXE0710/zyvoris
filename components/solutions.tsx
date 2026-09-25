'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function SolutionsSection() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const STAGES = [
    {
      num: '01',
      title: isGerman ? 'DATEN' : 'DATA',
      subtitle: isGerman ? 'Fondsdaten-Aufnahme' : 'Fund Data Ingestion',
      desc: isGerman
        ? 'Harmonisierung von Finanz-, Buchhaltungs-, Investoren- und Transaktionsdaten aus heterogenen Quellsystemen.'
        : 'Harmonization of financial, accounting, investor, and transaction data from heterogeneous source systems.',
      capabilities: isGerman
        ? ['Hauptbuch- & Saldenbilanz-Import', 'Investorenregister-Synchronisation', 'Transaktions-Normalisierung']
        : ['GL & Trial Balance Ingestion', 'Investor Register Sync', 'Transaction Normalization'],
    },
    {
      num: '02',
      title: isGerman ? 'STRUKTUR' : 'STRUCTURE',
      subtitle: isGerman ? 'Gesellschafts- & Fondsmodellierung' : 'Entity & Vehicle Modeling',
      desc: isGerman
        ? 'Präzise Modellierung von Fonds, Holding-Gesellschaften, Beteiligungsverhältnissen und mehrstufigen Anteilsklassen.'
        : 'Precise modeling of funds, holding entities, ownership relationships, and multi-tier share classes.',
      capabilities: isGerman
        ? ['Mehrebenen-Fondsabbildung', 'Anteilsklassen-Hierarchien', 'Look-Through-Graph']
        : ['Multi-Tier Fund Mapping', 'Share-Class Hierarchy', 'Look-Through Graph'],
    },
    {
      num: '03',
      title: isGerman ? 'STEUERLOGIK' : 'TAX LOGIC',
      subtitle: isGerman ? 'Länderspezifische Steuer-Engine' : 'Jurisdiction Rule Engine',
      desc: isGerman
        ? 'Anwendung jurisdiktionsspezifischer Klassifizierungen, steuerlicher Korrekturen und formaler Berechnungsregeln.'
        : 'Application of jurisdiction-specific tax classifications, adjustments, and statutory calculation rules.',
      capabilities: isGerman
        ? ['Gesetzliche Regel-Compiler', 'Steuerliche Behandlungsmatrix', 'Freistellungs- & Befreiungslogik']
        : ['Statutory Rule Compilers', 'Tax Treatment Matrix', 'Exemption Logic'],
    },
    {
      num: '04',
      title: isGerman ? 'BERECHNUNG' : 'CALCULATION',
      subtitle: isGerman ? 'Deterministische Berechnung' : 'Deterministic Calculation',
      desc: isGerman
        ? 'Kontrollierte, reproduzierbare Steuerberechnungen und mathematisch geschlossene Allokationen auf Fondsebene.'
        : 'Controlled, reproducible fund-level tax calculations and mathematically closed share-class allocations.',
      capabilities: isGerman
        ? ['Ertragsallokation auf Anteilsklassen', 'Veräußerungsgewinn-Aufteilung', 'Quellensteuer-Anrechnungs-Engine']
        : ['Class-Level Income Allocation', 'Capital Gains Slicing', 'Withholding Offset Engine'],
    },
    {
      num: '05',
      title: isGerman ? 'PRÜFUNG' : 'REVIEW',
      subtitle: isGerman ? 'Prüfung & Nachvollziehbarkeit' : 'Review & Traceability',
      desc: isGerman
        ? 'Vollständige Ausnahmebehandlung, professionelle Validierungskontrollen und lückenlose mathematische Herkunft.'
        : 'Comprehensive exception handling, professional validation controls, and complete mathematical lineage.',
      capabilities: isGerman
        ? ['Quell-zu-Ziel Herkunftsnachweis', 'Abweichungs- & Konsistenzanalyse', 'Fachliche Prüfungsfreigabe']
        : ['Source-to-Output Lineage Graph', 'Variance Analysis', 'Auditor Review Sign-Off'],
    },
    {
      num: '06',
      title: isGerman ? 'REPORTING' : 'REPORTING',
      subtitle: isGerman ? 'Ausgabe & Meldedateien' : 'Output & Filings',
      desc: isGerman
        ? 'Automatisierte Generierung strukturierter behördlicher Meldedateien und revisionssicherer Investorenpakete.'
        : 'Automated generation of structured statutory reporting files, regulatory feeds, and audit-ready investor packs.',
      capabilities: isGerman
        ? ['ICTax XML-Schnittstellen', 'Standardisierte Steuerbescheinigungen', 'Nachgelagerte ERP-Exporte']
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.14]">
            <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
              {isGerman ? 'Ein kontrollierter Ablauf ' : 'One controlled workflow '}
            </span>
            <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
              {isGerman
                ? 'von Fondsdaten bis zum Steuerreporting'
                : 'from fund data to tax reporting'}
            </span>
          </h2>
        </div>

        {/* ── Responsive 3x2 Grid (No overlapping, perfectly legible) ── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAGES.map((stage) => (
            <div
              key={stage.num}
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
                hover:border-slate-300 dark:hover:border-slate-700
              "
            >
              <div>
                {/* Top bar: Stage Number & Title + Progress Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500 font-mono text-xs font-bold text-white shadow-xs">
                      {stage.num}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {stage.title}
                    </span>
                  </div>
                  <span className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">
                    {isGerman ? `PHASE ${stage.num}/06` : `STAGE ${stage.num}/06`}
                  </span>
                </div>

                {/* Stage Details */}
                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                    {stage.subtitle}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {stage.desc}
                  </p>
                </div>

                {/* Integrated Capabilities - Fully readable, no truncation */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5">
                    {isGerman ? 'KERNKOMPONENTEN:' : 'KEY COMPONENTS:'}
                  </span>
                  <div className="space-y-2">
                    {stage.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs font-mono text-slate-700 dark:text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
