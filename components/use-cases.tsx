'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export default function UseCases() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [selectedIdx, setSelectedIdx] = useState(0)

  const useCases = [
    {
      id: 'fund-tax',
      number: '01',
      tag: isGerman ? 'FONDSBERECHNUNG' : 'FUND CALCULATION',
      title: isGerman ? 'Fondssteuerberechnung' : 'Fund Tax Calculation',
      subtitle: isGerman
        ? 'Von heterogenen Quelldaten zu prüfbereiten Steuerbilanzen'
        : 'From heterogeneous source feeds to statutory-ready tax calculations',
      description: isGerman
        ? 'Finanzdaten von Fonds, Hauptbuchauszüge und Transaktionsdaten in strukturierte, länderspezifische Steuerberechnungen überführen.'
        : 'Transform raw fund financials, trial balances, and transaction journals into structured, jurisdiction-specific tax computations.',
      challenges: isGerman
        ? [
            'Manuelle Überträge zwischen heterogenen Buchhaltungssystemen und Steuertabellen',
            'Hohes Fehlerrisiko durch ungesicherte Tabellenkalkulationen und Formelbrüche',
            'Mühsame Rekonstruktion für externe Wirtschaftsprüfer und Steuerbehörden',
          ]
        : [
            'Manual cut-and-paste reconciliation between disparate general ledgers and tax sheets',
            'High operational risk from unversioned spreadsheet models and formula breaks',
            'Painful backward reconstruction for external tax auditors and statutory filings',
          ],
      solutionPoints: isGerman
        ? [
            'Strukturierte Ingestion und Validierung von Hauptbuch- und Kontenplandaten',
            'Explizite Steuerregeln und Korrekturposten im deterministischen Regelcompiler',
            'Lückenloser mathematischer Prüfpfad vom Steuerwert bis zur Quellbuchung',
          ]
        : [
            'Structured automated ingestion and validation of GL and trial balance files',
            'Explicit statutory tax adjustments executed via deterministic rule compilers',
            'Direct-source mathematical lineage linking reported values to original transactions',
          ],
      outcome: isGerman
        ? 'Wiederholbare, prüfbereite Berechnungen mit bis zu 80% weniger manuellen Arbeitspapieren.'
        : 'Repeatable, review-ready calculations with up to 80% reduction in manual workpapers.',
      workflow: {
        inputs: isGerman ? 'Hauptbuch, Summen- & Saldenlisten' : 'Trial Balance & Chart of Accounts',
        logic: isGerman ? 'Rechtliche Anpassungen & Regel-Compiler' : 'Statutory Reconciliations & Rule Compilers',
        deliverable: isGerman ? 'Steuerbilanz- & Nettoertragsberechnung' : 'Fund-Level Net Tax Figures & Valuations',
      },
      metric: '80% Workpaper Automation',
    },
    {
      id: 'share-class',
      number: '02',
      tag: isGerman ? 'ANTEILSKLASSEN' : 'SHARE-CLASS ALLOCATION',
      title: isGerman ? 'Anteilsklassen- & Mehrebenen-Allokation' : 'Share-Class & Multi-Tier Allocation',
      subtitle: isGerman
        ? 'Präzise Verteilung komplexer Ertrags- und Veräußerungsgewinne'
        : 'Precision distribution of taxable income across layered share classes',
      description: isGerman
        ? 'Steuerergebnisse über Anteilsklassen, Parallelvehikel und mehrstufige Fondsstrukturen mit kontrollierter Allokationslogik verteilen.'
        : 'Allocate fund-level tax results across complex share classes, parallel vehicles, and holding structures using controlled pass-through math.',
      challenges: isGerman
        ? [
            'Komplexe Gleichstellungs- und Carried-Interest-Berechnungen in Excel-Mappen',
            'Unterschiedliche Steuerbehandlung institutioneller versus steuerbefreiter Investoren',
            'Inkonsistente Rundungen und fehlender Ausgleich über Berichtsperioden hinweg',
          ]
        : [
            'Complex equalization adjustments and carried interest cascades trapped in spreadsheets',
            'Divergent tax classifications between taxable institutional vs exempt LPs',
            'Rounding discrepancies and reconciliation gaps across multi-period closings',
          ],
      solutionPoints: isGerman
        ? [
            'Graph-basierte Modellierung aller Anteilsklassen und Beteiligungsverhältnisse',
            'Deterministische Wasserfall- und Allokationsberechnung ohne manuelle Eingriffe',
            'Mathematisch geschlossene Abstimmung über alle Vehikel und Klassen',
          ]
        : [
            'Graph-based modeling of all share classes, feeder paths, and ownership splits',
            'Deterministic multi-tier waterfall and allocation execution with zero drift',
            'Mathematically closed reconciliation across all vehicles and LP tranches',
          ],
      outcome: isGerman
        ? 'Konsistente, fehlerfreie Allokationen über alle Fonds, Klassen und Closing-Perioden.'
        : 'Consistent, error-free allocations across funds, classes, and closing periods.',
      workflow: {
        inputs: isGerman ? 'Beteiligungsgraph & Kapitalkonten' : 'Ownership Graph & Capital Accounts',
        logic: isGerman ? 'Mehrebenen-Durchleitungs-Mathematik' : 'Multi-Tier Pass-Through Waterfall Math',
        deliverable: isGerman ? 'Klassenspezifische Steuerberichte' : 'Class-Level Tax Sheets & Breakdowns',
      },
      metric: '100% Mathematically Closed',
    },
    {
      id: 'investor-reporting',
      number: '03',
      tag: isGerman ? 'INVESTOREN-REPORTING' : 'INVESTOR REPORTING',
      title: isGerman ? 'Steuer-Reporting für Investoren' : 'Investor Tax Reporting',
      subtitle: isGerman
        ? 'Freigegebene Steuerwerte in behördliche Einreichungsformate transformieren'
        : 'Transform approved fund calculations into statutory investor packages',
      description: isGerman
        ? 'Freigegebene Steuerergebnisse auf Fondsebene in strukturierte Reporting-Daten und standardisierte Einreichungsformate überführen.'
        : 'Convert approved fund-level tax results into structured investor-level reporting packages and regulatory statutory submission files.',
      challenges: isGerman
        ? [
            'Manuelle Formatierung und Übertragung in behördliche Schnittstellen wie ICTax',
            'Hoher Zeitdruck und Engpässe bei der Erstellung jährlicher Steuerbescheinigungen',
            'Schwierige Beantwortung von Detailrückfragen institutioneller LPs',
          ]
        : [
            'Manual formatting and re-keying into regulatory filings such as ICTax XML',
            'Severe deadline bottlenecks when generating hundreds of investor tax packs',
            'Slow response cycles when institutional LPs query specific line-item treatments',
          ],
      solutionPoints: isGerman
        ? [
            'Automatisierte Generierung standardisierter XML-Meldungen und Fact Sheets',
            'Integrierte Sign-Off- und Freigabeprozesse vor formalem Dokumentenversand',
            'Direkte Durchsicht auf Berechnungsgrundlagen bei Rückfragen',
          ]
        : [
            'Automated production of standardized XML filing payloads and LP fact sheets',
            'Integrated review sign-off gating before formal report dissemination',
            'Instant look-through to underlying calculation steps for LP inquiry resolution',
          ],
      outcome: isGerman
        ? 'Ein kontrollierter, termingerechter Ablauf von der Fondsberechnung bis zum Anleger-Reporting.'
        : 'A seamless, controlled path from fund calculation to timely statutory investor reporting.',
      workflow: {
        inputs: isGerman ? 'Allokierte Steuerwerte & Quellensteuern' : 'Allocated Tax Totals & Withholding Rates',
        logic: isGerman ? 'Format-Packaging (ICTax, K-1, PDF)' : 'Investor Format Packaging (ICTax, K-1)',
        deliverable: isGerman ? 'Einreichungsfertige XML-Feeds & Zertifikate' : 'Investor-Ready Fact Sheets & XML Feeds',
      },
      metric: 'Zero Manual Re-Keying',
    },
    {
      id: 'cross-border',
      number: '04',
      tag: isGerman ? 'GRENZÜBERSCHREITEND' : 'CROSS-BORDER WORKFLOWS',
      title: isGerman ? 'Grenzüberschreitende Steuer-Workflows' : 'Cross-Border Tax Workflows',
      subtitle: isGerman
        ? 'Steuerlogik über komplexe multilaterale Jurisdiktionen harmonisieren'
        : 'Harmonize statutory tax logic across international fund architectures',
      description: isGerman
        ? 'Länderspezifische Steuerlogik, Doppelbesteuerungsabkommen und Befreiungen auf internationale Beteiligungsstrukturen anwenden.'
        : 'Apply jurisdiction-specific tax classifications, double tax treaties, and withholding exemptions across multi-country investment structures.',
      challenges: isGerman
        ? [
            'Fragmentierte Regelwerke zwischen Fondsdomizil, Holding-Standort und Target-Asset',
            'Fehleranfällige manuelle Prüfung von Abkommensberechtigungen und Quellensteuersätzen',
            'Fehlende Skalierbarkeit bei Eintritt in neue Investorenmärkte',
          ]
        : [
            'Fragmented rules spanning fund domicile, holding SPVs, and portfolio asset locations',
            'Error-prone manual qualification of treaty eligibility and withholding rate reductions',
            'Lack of operational scalability when entering new jurisdictional investor markets',
          ],
      solutionPoints: isGerman
        ? [
            'Standardisierte Regelsätze für Kernjurisdiktionen (Schweiz, Deutschland, Luxemburg, USA)',
            'Automatisierte Quellensteueranrechnung und Abkommensüberprüfung',
            'Modulare Architektur erweiterbar um künftige Regulierungen wie Pillar Two',
          ]
        : [
            'Standardized statutory rulesets for major hubs (Switzerland, Germany, Luxembourg, US)',
            'Automated treaty qualification matrix and withholding tax offset engine',
            'Modular extensible foundation designed for upcoming regimes including Pillar Two',
          ],
      outcome: isGerman
        ? 'Eine skalierbare, revisionssichere Plattform für internationale Fondsstrukturen.'
        : 'A robust, audit-proof infrastructure engineered for global private market funds.',
      workflow: {
        inputs: isGerman ? 'Internationale Entities & Steuerresidenzen' : 'Multi-Jurisdiction Entities & Tax Residency',
        logic: isGerman ? 'Abkommensklassifizierung & WHT-Offset' : 'Treaty Classifications & Withholding Offsets',
        deliverable: isGerman ? 'Harmonisierte länderspezifische Steuerpakete' : 'Unified Multi-Country Regulatory Reports',
      },
      metric: 'Multi-Jurisdiction Engine',
      plannedNote: isGerman ? 'US-Investorensteuer-Workflows — geplant' : 'US investor tax workflows — planned',
    },
  ]

  const activeCase = useCases[selectedIdx]

  return (
    <div className="mt-12 sm:mt-16">

      {/* =========================================================
          1. INNOVATIVE USE CASE SELECTOR TIMELINE (Numbered Nav)
      ========================================================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {useCases.map((item, idx) => {
          const isSelected = selectedIdx === idx

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`
                text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 ease-out cursor-pointer
                ${
                  isSelected
                    ? 'border-slate-400 dark:border-slate-600 bg-white dark:bg-[#0c152a] shadow-lg -translate-y-1'
                    : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md'
                }
              `}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`
                    font-mono text-xs font-bold
                    ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}
                  `}
                >
                  [{item.number}]
                </span>
                <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  SCENARIO
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-950 dark:text-white leading-snug line-clamp-2">
                {item.title}
              </h4>
            </button>
          )
        })}
      </div>

      {/* =========================================================
          2. DETAILED USE CASE BLUEPRINT PANEL (No generic boxy card)
      ========================================================== */}
      <div className="rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-6 sm:p-10 shadow-sm transition-all duration-300">
        
        {/* Top Header of Selected Use Case */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 dark:bg-slate-800 font-mono text-xs font-bold text-white">
                {activeCase.number}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {activeCase.tag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {activeCase.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium">
              {activeCase.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
              ✓ {activeCase.metric}
            </span>
          </div>
        </div>

        {/* Two-Column Deep Dive: Problem vs Architectural Execution */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Context & Friction Points (Clean bullet points) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {isGerman ? 'OPERATIVE HERAUSFORDERUNG' : 'OPERATIONAL CHALLENGE'}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
                {activeCase.description}
              </p>
              
              <div className="space-y-2 bg-slate-50/80 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                  {isGerman ? 'REDUZIERTE REIBUNGSPUNKTE:' : 'PAIN POINTS ELIMINATED:'}
                </span>
                {activeCase.challenges.map((ch, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span className="leading-relaxed">{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Outcome Box */}
            <div className="rounded-2xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/30 p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block mb-1">
                {isGerman ? 'MESSBARER MEHRWERT' : 'TANGIBLE BUSINESS OUTCOME'}
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed m-0">
                {activeCase.outcome}
              </p>
            </div>
          </div>

          {/* Right Column: Execution Pipeline & Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 3-Stage Pipeline Breakdown */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {isGerman ? 'AUSFÜHRUNGS-PIPELINE' : 'EXECUTION PIPELINE'}
              </h4>

              <div className="space-y-3">
                {/* Step 1: Input */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                      01
                    </span>
                    <div>
                      <span className="font-mono text-[9px] uppercase font-bold text-slate-400 block">
                        {isGerman ? 'QUELLDATEN-INPUT' : 'DATA INPUT'}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {activeCase.workflow.inputs}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-400">→</span>
                </div>

                {/* Step 2: Logic */}
                <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 font-mono text-[11px] font-bold text-white">
                      02
                    </span>
                    <div>
                      <span className="font-mono text-[9px] uppercase font-bold text-blue-600 dark:text-blue-400 block">
                        {isGerman ? 'STEUERLOGIK-COMPILER' : 'DETERMINISTIC COMPILER'}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {activeCase.workflow.logic}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-blue-500">→</span>
                </div>

                {/* Step 3: Deliverable */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 font-mono text-[11px] font-bold text-white">
                      03
                    </span>
                    <div>
                      <span className="font-mono text-[9px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">
                        {isGerman ? 'GEPRÜFTER OUTPUT' : 'STATUTORY DELIVERABLE'}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {activeCase.workflow.deliverable}
                      </span>
                    </div>
                  </div>
                  <span className="text-emerald-500 font-bold text-sm">✓</span>
                </div>
              </div>
            </div>

            {/* Architecture Guarantees Bullet Points */}
            <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                {isGerman ? 'SYSTEMGARANTIEN:' : 'ARCHITECTURAL GUARANTEES:'}
              </span>
              <div className="space-y-1.5">
                {activeCase.solutionPoints.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                    <span>{pt}</span>
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

      </div>

    </div>
  )
}
