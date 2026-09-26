'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

interface PipelineStep {
  number: string
  title: string
  desc: string
}

interface UseCaseItem {
  id: string
  number: string
  tag: string
  title: string
  subtitle: string
  challengeDesc: string
  challenges: string[]
  pipeline: PipelineStep[]
  controls: string[]
  outcome: string
  metric: string
  isPlanned?: boolean
  plannedNote?: string
}

export default function UseCases() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [selectedIdx, setSelectedIdx] = useState(0)

  const useCases: UseCaseItem[] = [
    {
      id: 'fund-tax',
      number: '01',
      tag: isGerman ? '01 — STEUERBERECHNUNGEN AUF FONDSEBENE' : '01 — FUND-LEVEL TAX CALCULATIONS',
      title: isGerman ? 'Steuerberechnungen auf Fondsebene' : 'Fund-Level Tax Calculations',
      subtitle: isGerman
        ? 'Strukturierte Fonds- und Finanzdaten in kontrollierte, länderspezifische Steuerberechnungen überführen.'
        : 'Transform structured fund and financial data into controlled, jurisdiction-specific tax calculations.',
      challengeDesc: isGerman
        ? 'Steuerberechnungen für Fonds erfordern häufig, dass Finanz-, Buchhaltungs- und Transaktionsdaten aus unterschiedlichen Quellen abgestimmt, klassifiziert, angepasst und nach länderspezifischen Steuerregeln verarbeitet werden.'
        : 'Fund tax calculations often require financial, accounting, and transaction data from multiple sources to be reconciled, classified, adjusted, and processed according to jurisdiction-specific tax rules.',
      challenges: isGerman
        ? [
            'Manuelle Abstimmung zwischen Finanzdaten, steuerlichen Arbeitspapieren und Reporting-Dateien',
            'Excel-basierte Berechnungen und manuell gepflegte Anpassungen',
            'Eingeschränkte Nachvollziehbarkeit zwischen Quelldaten, Berechnungen und ausgewiesenen Steuerwerten',
          ]
        : [
            'Manual reconciliation across financial data, tax workpapers, and reporting files',
            'Spreadsheet-based calculations and manually maintained adjustments',
            'Limited traceability between source data, calculations, and reported tax values',
          ],
      pipeline: [
        {
          number: '01',
          title: isGerman ? 'STRUKTURIERTE FONDSDATEN' : 'STRUCTURED FUND DATA',
          desc: isGerman
            ? 'Finanz-, Buchhaltungs-, Anleger- und Transaktionsdaten'
            : 'Financial, accounting, investor, and transaction data',
        },
        {
          number: '02',
          title: isGerman ? 'STEUERLOGIK & BERECHNUNG' : 'TAX LOGIC & CALCULATION',
          desc: isGerman
            ? 'Länderspezifische Klassifizierung, Anpassungen, Berechnungen und Allokationen'
            : 'Jurisdiction-specific classification, adjustments, calculations, and allocations',
        },
        {
          number: '03',
          title: isGerman ? 'STRUKTURIERTE STEUERERGEBNISSE' : 'STRUCTURED TAX RESULTS',
          desc: isGerman
            ? 'Prüfbare steuerliche Ergebnisse auf Fonds- und Anteilsklassenebene'
            : 'Review-ready fund-level and share-class tax outputs',
        },
      ],
      controls: isGerman
        ? [
            'Strukturierte Übernahme und Validierung von Finanzdaten aus unterschiedlichen Quellen',
            'Nachvollziehbare Anwendung länderspezifischer Steuerregeln und Anpassungen',
            'Durchgängige Nachvollziehbarkeit von Quelldaten über Berechnungen bis zu ausgewiesenen Steuerwerten',
          ]
        : [
            'Structured ingestion and validation of source financial data',
            'Explicit application of jurisdiction-specific tax rules and adjustments',
            'Traceability from source data through calculations to reported tax outputs',
          ],
      outcome: isGerman
        ? 'Strukturierte und prüfbare Steuerberechnungen mit höherer Konsistenz, Kontrolle und Nachvollziehbarkeit.'
        : 'Repeatable, review-ready tax calculations with greater consistency, control, and traceability across the reporting process.',
      metric: isGerman ? '100% Nachvollziehbar' : '100% Traceable',
    },
    {
      id: 'share-class',
      number: '02',
      tag: isGerman ? '02 — ANTEILSKLASSEN-ALLOKATION' : '02 — SHARE-CLASS ALLOCATION',
      title: isGerman ? 'Steuerliche Allokation auf Anteilsklassenebene' : 'Share-Class Tax Allocation',
      subtitle: isGerman
        ? 'Kontrollierte Verteilung steuerlicher Ergebnisse auf Fondsebene auf komplexe Anteilsklassenstrukturen.'
        : 'Controlled allocation of fund-level tax results across complex share-class structures.',
      challengeDesc: isGerman
        ? 'Steuerliche Ergebnisse auf Fondsebene müssen konsistent auf die einzelnen Anteilsklassen verteilt werden. Dabei sind Unterschiede bei Beteiligungsverhältnissen, NAV, Währungen, anteilsklassenspezifischen Erträgen und Aufwendungen sowie weiteren relevanten Allokationsparametern zu berücksichtigen.'
        : 'Fund-level tax results must be allocated consistently across share classes while reflecting differences in ownership, NAV, currency, class-specific income and expenses, and other relevant allocation parameters.',
      challenges: isGerman
        ? [
            'Manuelle Allokation steuerlicher Ergebnisse auf mehrere Anteilsklassen',
            'Unterschiedliche Währungen, NAVs sowie anteilsklassenspezifische Ertrags- und Aufwandsprofile',
            'Abstimmung der allokierten Ergebnisse mit den steuerlichen Ergebnissen auf Fondsebene',
          ]
        : [
            'Manual allocation of fund-level tax results across multiple share classes',
            'Different currencies, NAVs, class-specific income and expense profiles',
            'Reconciliation of allocated results back to fund-level tax figures',
          ],
      pipeline: [
        {
          number: '01',
          title: isGerman ? 'FONDS- & ANTEILSKLASSENDATEN' : 'FUND & SHARE-CLASS DATA',
          desc: isGerman
            ? 'Steuerliche Ergebnisse auf Fondsebene, NAV-Daten, Währungen, Beteiligungsverhältnisse und Anteilsklassenmerkmale'
            : 'Fund-level tax results, NAV data, currencies, ownership, and share-class attributes',
        },
        {
          number: '02',
          title: isGerman ? 'KONTROLLIERTE ALLOKATIONSLOGIK' : 'CONTROLLED ALLOCATION LOGIC',
          desc: isGerman
            ? 'Definierte Allokationsregeln und relevante Anteilsklassenparameter anwenden, um steuerliche Ergebnisse auf Fondsebene zu verteilen'
            : 'Apply defined allocation rules and relevant share-class parameters to distribute fund-level tax results',
        },
        {
          number: '03',
          title: isGerman ? 'STEUERERGEBNISSE AUF ANTEILSKLASSENEBENE' : 'SHARE-CLASS TAX RESULTS',
          desc: isGerman
            ? 'Strukturierte und prüfbare steuerliche Ergebnisse auf Anteilsklassenebene'
            : 'Structured and reviewable tax results at share-class level',
        },
      ],
      controls: isGerman
        ? [
            'Definierte Allokationslogik für Fonds- und Anteilsklassenstrukturen',
            'Konsistente Berücksichtigung relevanter Anteilsklassenparameter',
            'Abstimmung allokierter Steuerergebnisse mit den Ergebnissen auf Fondsebene',
          ]
        : [
            'Defined allocation logic across fund and share-class structures',
            'Consistent treatment of relevant share-class parameters',
            'Reconciliation of allocated tax results back to fund-level figures',
          ],
      outcome: isGerman
        ? 'Konsistente und prüfbare steuerliche Allokationen auf Anteilsklassenebene mit klarer Abstimmung zu den Ergebnissen auf Fondsebene.'
        : 'Consistent and reviewable share-class tax allocations with clear reconciliation to fund-level results.',
      metric: isGerman ? '100% Abgestimmt' : '100% Reconciled',
    },
    {
      id: 'investor-reporting',
      number: '03',
      isPlanned: true,
      tag: isGerman ? '03 — STEUERREPORTING FÜR ANLEGER GEPLANT' : '03 — INVESTOR TAX REPORTING PLANNED',
      title: isGerman ? 'Steuerreporting für Anleger' : 'Investor Tax Reporting',
      subtitle: isGerman
        ? 'Geprüfte Steuerergebnisse in strukturierte steuerliche Reporting-Outputs auf Anlegerebene überführen.'
        : 'Transform approved tax results into structured, investor-level tax reporting outputs.',
      challengeDesc: isGerman
        ? 'Steuerliche Ergebnisse auf Fondsebene müssen häufig in anlegerspezifische Reporting-Outputs überführt werden. Dabei sind Allokationen, Anlegermerkmale, länderspezifische Anforderungen und relevante Reporting-Formate zu berücksichtigen.'
        : 'Fund-level tax results often need to be translated into investor-specific reporting outputs while reflecting allocations, investor attributes, jurisdiction-specific requirements, and applicable reporting formats.',
      challenges: isGerman
        ? [
            'Manuelle Aufbereitung und Übertragung steuerlicher Daten auf Anlegerebene',
            'Unterschiedliche Reporting-Anforderungen je nach Anleger und Jurisdiktion',
            'Sicherstellung der Konsistenz zwischen Fondsberechnungen, Allokationen und Anlegerreporting',
          ]
        : [
            'Manual preparation and transfer of investor-level tax data',
            'Different reporting requirements across investors and jurisdictions',
            'Maintaining consistency between fund-level calculations, allocations, and investor reporting',
          ],
      pipeline: [
        {
          number: '01',
          title: isGerman ? 'GEPRÜFTE STEUERERGEBNISSE' : 'APPROVED TAX RESULTS',
          desc: isGerman
            ? 'Validierte Steuerberechnungen und Allokationen auf Fonds- und Anteilsklassenebene'
            : 'Validated fund-level and share-class tax calculations and allocations',
        },
        {
          number: '02',
          title: isGerman ? 'VERARBEITUNG AUF ANLEGEREBENE' : 'INVESTOR-LEVEL PROCESSING',
          desc: isGerman
            ? 'Relevante Anlegermerkmale, Allokationsdaten, länderspezifische Anforderungen und Reporting-Logiken anwenden'
            : 'Apply relevant investor attributes, allocation data, jurisdiction-specific requirements, and reporting logic',
        },
        {
          number: '03',
          title: isGerman ? 'STEUERLICHE REPORTING-OUTPUTS FÜR ANLEGER' : 'INVESTOR TAX REPORTING OUTPUTS',
          desc: isGerman
            ? 'Strukturierte und prüfbare Steuerdaten und Reporting-Outputs auf Anlegerebene'
            : 'Structured and reviewable investor-level tax data and reporting outputs',
        },
      ],
      controls: isGerman
        ? [
            'Konsistente Verknüpfung zwischen geprüften Steuerberechnungen, Allokationen und Reporting-Outputs auf Anlegerebene',
            'Anwendung definierter anleger- und länderspezifischer Reporting-Logiken',
            'Nachvollziehbarkeit ausgewiesener Anlegersteuerwerte bis zu den zugrunde liegenden Berechnungen und Quelldaten',
          ]
        : [
            'Consistent linkage between approved tax calculations, allocations, and investor-level outputs',
            'Application of defined investor and jurisdiction-specific reporting logic',
            'Traceability from reported investor tax values back to underlying calculations and source data',
          ],
      outcome: isGerman
        ? 'Ein strukturierter und kontrollierter Prozess von geprüften Steuerberechnungen bis zu konsistenten Reporting-Outputs auf Anlegerebene.'
        : 'A structured and controlled path from approved tax calculations to consistent investor-level reporting outputs.',
      metric: isGerman ? 'Geplant (Roadmap)' : 'Planned (Roadmap)',
    },
    {
      id: 'cross-border',
      number: '04',
      isPlanned: true,
      tag: isGerman ? '04 — GRENZÜBERSCHREITENDE STEUERPROZESSE GEPLANT' : '04 — CROSS-BORDER TAX WORKFLOWS PLANNED',
      title: isGerman ? 'Grenzüberschreitende Steuerprozesse' : 'Cross-Border Tax Workflows',
      subtitle: isGerman
        ? 'Steuerlich relevante Daten über Fonds- und Investmentstrukturen in mehreren Jurisdiktionen hinweg strukturiert aufbereiten und analysieren.'
        : 'Structure and analyze tax-relevant data across multi-jurisdiction fund and investment structures.',
      challengeDesc: isGerman
        ? 'Grenzüberschreitende Fondsstrukturen erfordern eine konsistente Beurteilung steuerlich relevanter Daten, Gesellschaften, Beteiligungsverhältnisse und länderspezifischer Anforderungen über mehrere Jurisdiktionen hinweg.'
        : 'Cross-border fund structures require tax-relevant data, entities, ownership relationships, and jurisdiction-specific requirements to be assessed consistently across multiple jurisdictions.',
      challenges: isGerman
        ? [
            'Steuerlich relevante Daten und Regelwerke verteilt über mehrere Gesellschaften und Jurisdiktionen',
            'Komplexe Beteiligungs- und Investmentstrukturen über unterschiedliche Steuersysteme hinweg',
            'Sicherstellung von Konsistenz und Nachvollziehbarkeit über länderspezifische Steuerprozesse hinweg',
          ]
        : [
            'Tax-relevant data and rules distributed across multiple entities and jurisdictions',
            'Complex ownership and investment structures spanning different tax regimes',
            'Maintaining consistency and traceability across jurisdiction-specific tax workflows',
          ],
      pipeline: [
        {
          number: '01',
          title: isGerman
            ? 'STRUKTUR- & STEUERDATEN MEHRERER JURISDIKTIONEN'
            : 'MULTI-JURISDICTION STRUCTURE & TAX DATA',
          desc: isGerman
            ? 'Gesellschaften, Beteiligungsverhältnisse, Fondsstrukturen, steuerliche Merkmale und relevante länderspezifische Daten'
            : 'Entities, ownership relationships, fund structures, tax attributes, and relevant jurisdiction data',
        },
        {
          number: '02',
          title: isGerman
            ? 'LÄNDERSPEZIFISCHE STEUERANALYSE'
            : 'JURISDICTION-SPECIFIC TAX ANALYSIS',
          desc: isGerman
            ? 'Relevante länderspezifische Klassifizierungen, Regelwerke und Steuerlogiken innerhalb der Struktur anwenden'
            : 'Apply relevant jurisdiction-specific classifications, rules, and tax logic across the structure',
        },
        {
          number: '03',
          title: isGerman
            ? 'GRENZÜBERSCHREITENDE STEUER-OUTPUTS'
            : 'CROSS-BORDER TAX OUTPUTS',
          desc: isGerman
            ? 'Strukturierte und prüfbare Steuerdaten und Analysen für die relevanten Jurisdiktionen'
            : 'Structured and reviewable tax data and analysis across relevant jurisdictions',
        },
      ],
      controls: isGerman
        ? [
            'Strukturierte Abbildung von Gesellschaften, Beteiligungsverhältnissen und länderspezifischen Steuermerkmalen',
            'Konsistente Anwendung definierter Steuerlogiken für die relevanten Jurisdiktionen',
            'Nachvollziehbarkeit von der zugrunde liegenden Struktur und den Quelldaten über die Steueranalyse bis zu den Reporting-Outputs',
          ]
        : [
            'Structured representation of entities, ownership relationships, and jurisdiction-specific tax attributes',
            'Consistent application of defined tax logic across relevant jurisdictions',
            'Traceability from underlying structure and source data through tax analysis to reporting outputs',
          ],
      outcome: isGerman
        ? 'Ein strukturierter und kontrollierter Rahmen für steuerliche Prozesse innerhalb komplexer, grenzüberschreitender Fondsstrukturen.'
        : 'A structured and controlled framework for managing tax workflows across complex multi-jurisdiction fund structures.',
      metric: isGerman ? 'Geplant (Roadmap)' : 'Planned (Roadmap)',
    },
  ]

  const activeCase = useCases[selectedIdx]

  return (
    <div className="mt-10 sm:mt-16">
      {/* =========================================================
          1. USE CASE SELECTOR TABS (Clean 4-Card Selector)
      ========================================================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {useCases.map((item, idx) => {
          const isSelected = selectedIdx === idx

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`
                text-left p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ease-out cursor-pointer
                ${
                  isSelected
                    ? 'border-slate-400 dark:border-slate-600 bg-white dark:bg-[#0c152a] shadow-lg -translate-y-0.5 sm:-translate-y-1'
                    : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md'
                }
              `}
            >
              <div className="mb-1.5 sm:mb-2">
                <span
                  className={`
                    font-mono text-[11px] sm:text-xs font-bold
                    ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}
                  `}
                >
                  [{item.number}]
                </span>
              </div>
              <h4 className="font-bold text-[11.5px] xs:text-xs sm:text-sm text-slate-950 dark:text-white leading-snug line-clamp-2">
                {item.title}
              </h4>
            </button>
          )
        })}
      </div>

      {/* =========================================================
          2. DETAILED USE CASE BLUEPRINT PANEL
          Streamlined hierarchy: CHALLENGE → HOW ZYVORIS PROCESSES IT → OUTCOME
      ========================================================== */}
      <div className="rounded-2xl sm:rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-4 sm:p-10 shadow-sm transition-all duration-300">
        {/* Top Header of Selected Use Case */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-7">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {activeCase.tag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">
              {activeCase.title}
            </h3>
            <p className="mt-1.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              {activeCase.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`
                rounded-xl border px-3.5 py-1.5 font-mono text-xs font-bold
                ${
                  activeCase.isPlanned
                    ? 'border-blue-300 dark:border-blue-800/80 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                }
              `}
            >
              {activeCase.isPlanned ? '⏳ ' : '✓ '}
              {activeCase.metric}
            </span>
          </div>
        </div>

        {/* Narrative Stepper Ribbon: CHALLENGE → HOW ZYVORIS PROCESSES IT → OUTCOME */}
        <div className="mb-8 flex items-center gap-2 sm:gap-4 py-2 px-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 text-[11px] sm:text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <span className="text-slate-900 dark:text-white flex items-center gap-1.5 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            {isGerman ? '01 HERAUSFORDERUNG' : '01 CHALLENGE'}
          </span>
          <span className="text-slate-400 dark:text-slate-600">→</span>
          <span className="text-slate-900 dark:text-white flex items-center gap-1.5 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            {isGerman ? '02 WIE ZYVORIS ES VERARBEITET' : '02 HOW ZYVORIS PROCESSES IT'}
          </span>
          <span className="text-slate-400 dark:text-slate-600">→</span>
          <span className="text-slate-900 dark:text-white flex items-center gap-1.5 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {isGerman ? '03 GESCHÄFTLICHER MEHRWERT' : '03 OUTCOME'}
          </span>
        </div>

        {/* Deep-Dive Grid: Challenge vs Processing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Pillar 1: CHALLENGE */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {isGerman ? 'OPERATIVE HERAUSFORDERUNG' : 'OPERATIONAL CHALLENGE'}
                </span>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
                {activeCase.challengeDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-5 space-y-3">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                {isGerman ? 'TYPISCHE OPERATIVE HERAUSFORDERUNGEN:' : 'COMMON OPERATIONAL CHALLENGES:'}
              </span>
              <div className="space-y-2.5">
                {activeCase.challenges.map((ch, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 dark:bg-rose-400 shrink-0 mt-2" />
                    <span className="leading-relaxed">{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 2: HOW ZYVORIS PROCESSES IT */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {isGerman ? 'VERARBEITUNGSPROZESS' : 'EXECUTION PIPELINE'}
                </span>
              </div>

              {/* 3-Step Pipeline */}
              <div className="space-y-2.5">
                {activeCase.pipeline.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="relative flex items-start gap-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/70 p-3.5 sm:p-4 shadow-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-600/10 dark:bg-blue-500/20 font-mono text-[11px] font-bold text-blue-700 dark:text-blue-300 border border-blue-500/20">
                      {step.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                          {step.title}
                        </h5>
                        {sIdx < activeCase.pipeline.length - 1 ? (
                          <span className="text-slate-400 dark:text-slate-600 font-mono text-xs">↓</span>
                        ) : (
                          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">✓</span>
                        )}
                      </div>
                      <p className="mt-1 text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Control & Traceability */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-5 space-y-2.5">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                {isGerman ? 'KONTROLLE & NACHVOLLZIEHBARKEIT:' : 'CONTROL & TRACEABILITY:'}
              </span>
              <div className="space-y-2">
                {activeCase.controls.map((ctrl, ctrlIdx) => (
                  <div key={ctrlIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5 text-xs">✓</span>
                    <span className="leading-relaxed">{ctrl}</span>
                  </div>
                ))}
              </div>
            </div>

            {activeCase.plannedNote && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 px-3.5 py-2">
                <p className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 m-0">
                  {activeCase.plannedNote}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Pillar 3: BUSINESS OUTCOME (High-Impact Banner across bottom) */}
        <div
          className="
            mt-8 sm:mt-10
            relative
            overflow-hidden
            rounded-2xl
            border border-blue-500/25 dark:border-blue-500/30
            bg-gradient-to-r from-blue-50/70 via-white to-slate-50/80 dark:from-blue-950/30 dark:via-[#0c152a] dark:to-slate-900/50
            p-5 sm:p-6 lg:py-5 lg:px-8
            shadow-sm
            backdrop-blur-sm
          "
        >
          {/* Subtle ambient light highlight */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-4xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.16em] font-bold text-blue-700 dark:text-blue-300">
                  {isGerman ? 'GESCHÄFTLICHER MEHRWERT' : 'BUSINESS OUTCOME'}
                </span>
              </div>
              <p className="m-0 text-base sm:text-lg font-semibold text-slate-950 dark:text-white leading-snug tracking-tight">
                {activeCase.outcome}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-300/80 dark:border-blue-800/80 bg-blue-100/60 dark:bg-blue-950/50 px-3 py-1.5 font-mono text-xs font-bold text-blue-800 dark:text-blue-300">
                {activeCase.isPlanned ? '⏳ ' : '✓ '}
                {activeCase.isPlanned
                  ? (isGerman ? 'Geplante Funktionalität' : 'Roadmap Feature')
                  : (isGerman ? 'Geprüft & Kontrolliert' : 'Review-Ready')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

