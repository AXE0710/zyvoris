'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function ComparisonSection() {
  const { t, language } = useLanguage()

  const COMPARISON_DIMENSIONS = [
    {
      id: '01',
      dimension: language === 'de' ? 'QUELLEDATEN & INTEGRATION' : 'SOURCE DATA & INTAKE',
      trad: language === 'de' ? 'Fragmentierte Quelldaten' : 'Fragmented source data',
      tradDetail:
        language === 'de'
          ? 'Daten über unterschiedliche Fondsbuchhaltungssysteme, Administratoren, CSV-Exporte und Verwahrstellen-Portale verstreut.'
          : 'Data scattered across disparate fund accounting systems, administrators, CSV dumps, and custodian portals.',
      zyv: language === 'de' ? 'Integrierte Quelldaten' : 'Connected source data',
      zyvDetail:
        language === 'de'
          ? 'Einheitliche Schema-Aufnahme zur Normalisierung von Portfolio-, Transaktions- und Investorendaten mit Audit-Zeitstempeln.'
          : 'Unified schema ingestion normalizing portfolio, transaction, and investor feeds with audit timestamps.',
    },
    {
      id: '02',
      dimension: language === 'de' ? 'DATENAUFBEREITUNG & MODELLE' : 'DATA PREPARATION & MODELING',
      trad: language === 'de' ? 'Manuelle Datenaufbereitung' : 'Manual data preparation',
      tradDetail:
        language === 'de'
          ? 'Zeitintensive manuelle Datenbereinigung, SVERWEIS-Formeln und Abstimmungsarbeitspapiere in jedem Berichtszyklus.'
          : 'Time-consuming manual data cleansing, vlookups, and reconciliation workpapers repeated each cycle.',
      zyv: language === 'de' ? 'Strukturierte Gesellschafts- & Steuermodelle' : 'Structured entity and tax models',
      zyvDetail:
        language === 'de'
          ? 'Mehrebenen-Beteiligungsgraphen mit automatisierter Pass-Through-Logik und Look-Through-Eigentümerstrukturen.'
          : 'Multi-tier legal structure graphs with automated pass-through entity logic and look-through ownership tracking.',
    },
    {
      id: '03',
      dimension: language === 'de' ? 'STEUERBERECHNUNGEN' : 'TAX CALCULATIONS',
      trad: language === 'de' ? 'Excel-lastige Berechnungen' : 'Spreadsheet-heavy calculations',
      tradDetail:
        language === 'de'
          ? 'Formeln anfällig für fehlerhafte Verknüpfungen, manuelle Überschreibungen und undokumentierte Tabellenabhängigkeiten.'
          : 'Formulas prone to broken links, manual overwrites, and undocumented spreadsheet model dependencies.',
      zyv: language === 'de' ? 'Deterministische Berechnungen' : 'Deterministic calculations',
      zyvDetail:
        language === 'de'
          ? 'Berechnungen werden über versionierte, revisionssichere mathematische Regeln ohne Schätzungen ausgeführt.'
          : 'Calculations execute via version-controlled, auditable mathematical rules with zero guesswork.',
    },
    {
      id: '04',
      dimension: language === 'de' ? 'KLASSIFIZIERUNG & LOGIK' : 'TAX CLASSIFICATION',
      trad: language === 'de' ? 'Manuelle Klassifizierung' : 'Manual classification',
      tradDetail:
        language === 'de'
          ? 'Steuerliche Behandlung und DBA-Quellensteuerberechtigung werden für tausende Positionen manuell bewertet.'
          : 'Tax treatment and withholding treaty eligibility evaluated ad-hoc across thousands of positions.',
      zyv: language === 'de' ? 'Kontrollierte Klassifizierung' : 'Controlled classification',
      zyvDetail:
        language === 'de'
          ? 'KI-gestützte Interpretationsschicht mit regelbasierten Taxonomien und Konfidenz-Kennzeichnung.'
          : 'AI-assisted interpretation layer with rule-based classification taxonomies and confidence tagging.',
    },
    {
      id: '05',
      dimension: language === 'de' ? 'PRÜFUNG & GOVERNANCE' : 'REVIEW & OVERSIGHT',
      trad: language === 'de' ? 'Getrennte Prüfprozesse' : 'Disconnected review',
      tradDetail:
        language === 'de'
          ? 'Prüfer analysieren fertige PDF-Pakete ohne direkten Einblick in vorangegangene Anpassungen oder Berechnungen.'
          : 'Reviewers inspect finished PDF packages with no direct view into upstream adjustments or calculations.',
      zyv: language === 'de' ? 'Ausnahmebasierte Prüfung' : 'Exception-based review',
      zyvDetail:
        language === 'de'
          ? 'Zielgerichtete Workflows mit Kennzeichnung von Abweichungen, Schwellenwert-Ausnahmen und formalen Prüfpunkten.'
          : 'Targeted workflows surfacing flagged variances, threshold exceptions, and formal sign-off checkpoints.',
    },
    {
      id: '06',
      dimension: language === 'de' ? 'RÜCKVERFOLGBARKEIT' : 'CALCULATION LINEAGE',
      trad: language === 'de' ? 'Eingeschränkte Nachvollziehbarkeit' : 'Limited calculation lineage',
      tradDetail:
        language === 'de'
          ? 'Die Rekonstruktion des genauen Pfads vom Berichtswert zurück zur Quelltransaktion erfordert tagelange manuelle Prüfungen.'
          : 'Reconstructing the exact trail from output number back to source transaction requires days of manual auditing.',
      zyv: language === 'de' ? 'Lückenlose Berechnungshistorie' : 'Calculation lineage',
      zyvDetail:
        language === 'de'
          ? 'Unveränderliche Nachvollziehbarkeit verknüpft jeden ausgewiesenen Wert mit Quelltransaktionen und Regelversionen.'
          : 'Immutable lineage tracing every reported figure back to underlying financial transactions and rule versions.',
    },
    {
      id: '07',
      dimension: language === 'de' ? 'OPERATIVE PROZESSE' : 'OPERATIONAL CADENCE',
      trad: language === 'de' ? 'Engpässe in Berichtsphasen' : 'Filing-period bottlenecks',
      tradDetail:
        language === 'de'
          ? 'Hohe operative Belastung während der Steuersaison bei geringer Echtzeit-Transparenz über den Fortschritt.'
          : 'High operational strain during tax season with limited real-time visibility into filing progress.',
      zyv: language === 'de' ? 'Wiederholbare Workflows' : 'Repeatable workflows',
      zyvDetail:
        language === 'de'
          ? 'Kontinuierliche Verarbeitung mit operativem Echtzeit-Status über alle Fondsvehikel hinweg.'
          : 'Continuous processing framework with real-time operational status across all fund entities.',
    },
    {
      id: '08',
      dimension: language === 'de' ? 'SKALIERUNG & AUSGABEN' : 'CROSS-BORDER SCALING',
      trad: language === 'de' ? 'Doppelarbeit über Vehikel und Länder' : 'Duplicated work across entities and jurisdictions',
      tradDetail:
        language === 'de'
          ? 'Jedes Vehikel, jede Anteilsklasse und jedes Land erfordert neu erstellte Arbeitspapiere und Berichtsformate.'
          : 'Each entity, share class, and jurisdiction requires rebuilding workpapers and bespoke reporting extracts.',
      zyv: language === 'de' ? 'Länderspezifische Datensätze' : 'Jurisdiction-ready outputs',
      zyvDetail:
        language === 'de'
          ? 'Standardisierte Berechnungen werden in länderspezifische Steuerdatensätze und einreichfertige Formate überführt.'
          : 'Standardized calculations mapped into jurisdiction-specific tax datasets and compliant filing outputs.',
    },
  ]

  return (
    <section
      id="comparison"
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
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t('comp_kicker', 'OPERATING MODEL COMPARISON')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {language === 'de' ? 'Herkömmliche Steueroperationen vs.' : 'Traditional Tax Operations vs.'}{' '}
              <span className="text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                {language === 'de' ? 'vernetzte Steuerinfrastruktur' : 'Connected Tax Infrastructure'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Excel ist nicht das Kernproblem – das eigentliche Problem sind fragmentierte operative Prozesse. ZYVORIS ersetzt isolierte Arbeitspapiere durch eine einheitliche Kontroll- und Rechenschicht.'
              : 'Spreadsheets are merely a symptom—the real bottleneck is fragmented tax operations. ZYVORIS bridges the gap between siloed source data, tax logic, review, and reporting.'}
          </p>
        </div>

        {/* Comparison Table Box with bold black border */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b-2 border-slate-900 dark:border-slate-800">
            <div className="bg-slate-100 dark:bg-slate-800/80 p-5 sm:p-6 border-b sm:border-b-0 sm:border-r-2 border-slate-900 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  {language === 'de' ? 'AKTUELLE HERAUSFORDERUNG' : 'Current Operating Challenge'}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white mt-0.5">
                  {language === 'de' ? 'Traditionelle Steueroperationen' : 'Traditional Tax Operations'}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded border border-rose-600/40 bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
                {language === 'de' ? 'FRAGMENTIERT' : 'FRAGMENTED'}
              </span>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/50 p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {language === 'de' ? 'INFRASTRUKTUR-STANDARD' : 'Infrastructure Standard'}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-blue-950 dark:text-white mt-0.5">
                  {language === 'de' ? 'ZYVORIS Infrastruktur' : 'ZYVORIS Infrastructure'}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded border border-blue-600 bg-blue-600 text-white shadow-xs">
                {language === 'de' ? 'KONTROLLIERT' : 'CONTROLLED'}
              </span>
            </div>
          </div>

          {/* Table Comparison Rows */}
          <div className="divide-y-2 divide-slate-900/60 dark:divide-slate-800">
            {COMPARISON_DIMENSIONS.map((dim) => (
              <div
                key={dim.id}
                className="grid grid-cols-1 sm:grid-cols-2 group hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
              >
                {/* Traditional Tax Operations Side */}
                <div className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r-2 border-slate-900/60 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold text-slate-500">[{dim.id}]</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {dim.dimension}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2">
                    <span className="text-rose-500 font-bold leading-none">•</span>
                    <span>{dim.trad}</span>
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3.5">
                    {dim.tradDetail}
                  </p>
                </div>

                {/* ZYVORIS Infrastructure Side */}
                <div className="p-5 sm:p-6 bg-blue-50/25 dark:bg-blue-950/15">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">[{dim.id}]</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {language === 'de' ? 'VERIFIZIERTES BETRIEBSMODELL' : 'VERIFIED OPERATING MODEL'}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-blue-950 dark:text-white flex items-center gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold leading-none">✓</span>
                    <span>{dim.zyv}</span>
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-4">
                    {dim.zyvDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}