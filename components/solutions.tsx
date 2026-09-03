'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export default function SolutionsSection() {
  const [activeLayer, setActiveLayer] = useState<number>(0)
  const { language } = useLanguage()

  const LAYERS = [
    {
      num: '01',
      name: language === 'de' ? 'Data Layer' : 'Data Layer',
      badge: 'INGESTION & SCHEMAS',
      summary: language === 'de'
        ? 'Finanz-, Buchhaltungs-, Fonds-, Investoren- und Transaktionsdaten.'
        : 'Financial, accounting, fund, investor, and transaction data.',
      detail: language === 'de'
        ? 'Konsolidierung heterogener Hauptbuchauszüge, ERP-Feeds, Depotbank-Ledger und Zeichnungsscheine in kanonische, zeitstempelgesicherte Datenstrukturen.'
        : 'Consolidates disparate general ledger trial balances, custodian transaction logs, capital registers, and banking feeds into canonical, timestamped schemas.',
      tags: ['GL Feeds', 'Transaction Logs', 'Capital Calls', 'Schema Normalization'],
    },
    {
      num: '02',
      name: language === 'de' ? 'Structure Layer' : 'Structure Layer',
      badge: 'GRAPH MODELING',
      summary: language === 'de'
        ? 'Fonds, Gesellschaften, SPVs, Anteilsklassen, Beteiligungsverhältnisse, rechtliche Beziehungen.'
        : 'Funds, entities, SPVs, share classes, ownership, legal relationships.',
      detail: language === 'de'
        ? 'Modellierung komplexer Master-Feeder-Fonds, Holdingketten, Blocker-Kapitalgesellschaften, Carried-Interest-Tranchen und Durchgriffsstrukturen.'
        : 'Models multi-tier master-feeder funds, holding entities, corporate blockers, SPVs, carried interest waterfalls, and investor share-class tranches as interconnected graph structures.',
      tags: ['Master-Feeder', 'SPV Modeling', 'Share Classes', 'Look-Through Graphs'],
    },
    {
      num: '03',
      name: language === 'de' ? 'Tax Logic Layer' : 'Tax Logic Layer',
      badge: 'STATUTORY RULES',
      summary: language === 'de'
        ? 'Länderspezifische Regeln, Klassifizierungen, DBA-Abkommen, Quellensteuern, Allokationen.'
        : 'Jurisdiction-specific rules, classifications, treaties, withholding, allocations.',
      detail: language === 'de'
        ? 'Kodifizierte Steuerregeln für Doppelbesteuerungsabkommen, Anti-Hybrid-Prüfungen, steuerliche Einkünftecharakterisierung und Ertragsbefreiungen (z. B. ESTV KS 24/25, InvStG).'
        : 'Codified statutory tax logic applying double tax treaties (DTT), withholding tax rate relief, income characterization, and jurisdiction-specific rule engines (e.g., Swiss ESTV KS 24/25, German InvStG).',
      tags: ['Treaty Logic', 'Withholding Tax', 'Entity Classification', 'Statutory Rulesets'],
    },
    {
      num: '04',
      name: language === 'de' ? 'Calculation Layer' : 'Calculation Layer',
      badge: 'DETERMINISTIC ENGINE',
      summary: language === 'de'
        ? 'Deterministische, versionskontrollierte Steuerberechnungen.'
        : 'Deterministic, version-controlled tax calculations.',
      detail: language === 'de'
        ? 'Mathematische Durchführung von Steuerwerten, steuerbarem Einkommen, Anteilsklassen-Equalization und Ertragsallokationen mit exakter Rechengenauigkeit ohne Schätzungen.'
        : 'Executes tax value determinations, taxable yield calculations, investor equalization adjustments, and fund distributions through versioned mathematical rules with zero guesswork.',
      tags: ['Deterministic Math', 'Version Control', 'Allocation Engines', 'Zero Guesswork'],
    },
    {
      num: '05',
      name: language === 'de' ? 'Intelligence & Control Layer' : 'Intelligence & Control Layer',
      badge: 'TRIAGE & GOVERNANCE',
      summary: language === 'de'
        ? 'KI-gestützte Interpretation, Validierung, Ausnahmen, fachliche Prüfung.'
        : 'AI-assisted interpretation, validation, exceptions, professional review.',
      detail: language === 'de'
        ? 'KI-unterstützte Faktenextraktion und Anomalieerkennung, kombiniert mit Vor-Einreichungs-Ausnahme-Triage, Toleranzprüfungen und finaler Freigabe durch Steuerexperten.'
        : 'AI-assisted document interpretation and anomaly detection combined with automated pre-filing exception triage, variance thresholds, and human-in-the-loop professional sign-off.',
      tags: ['AI Interpretation', 'Exception Triage', 'Tolerance Checks', 'Human Sign-off'],
    },
    {
      num: '06',
      name: language === 'de' ? 'Reporting Layer' : 'Reporting Layer',
      badge: 'OUTPUT GENERATION',
      summary: language === 'de'
        ? 'Jurisdiktionsspezifische Datensätze, Berichte, Exporte und Einreichungsausgaben, wo unterstützt.'
        : 'Jurisdiction-specific datasets, reports, exports, and filing outputs where supported.',
      detail: language === 'de'
        ? 'Strukturierte Steuerdatensätze, maschinenlesbare XML-Meldepakete (z. B. ESTV ICTax), druckreife Anleger-Steuerausweise und revisionssichere CSV/JSON-Exporte.'
        : 'Generates structured jurisdiction-specific tax datasets, machine-readable XML filing packages (where supported), review-ready investor tax statements, and audit-grade data exports.',
      tags: ['Swiss ESTV XML', 'Structured Datasets', 'Investor Statements', 'Audit Exports'],
    },
  ]

  return (
    <section
      id="solutions"
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
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'PLATTFORM-ARCHITEKTUR' : 'SYSTEM ARCHITECTURE'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
              {language === 'de' ? 'Sechs fundamentale Schichten' : 'Six core layers connecting'}{' '}
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'kontrollierter Steuerinfrastruktur.' : 'controlled tax infrastructure.'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto max-w-[520px]">
            {language === 'de'
              ? 'Von heterogenen Finanzdaten über mehrstufige Fondsmodelle bis hin zu deterministischer Berechnung und länderspezifischem Reporting: ZYVORIS trennt Daten, Logik, Berechnung und Prüfung in saubere Architekturschichten.'
              : 'From heterogeneous financial feeds and entity graphs to deterministic execution and jurisdiction reporting: ZYVORIS separates data, logic, math, and governance into six disciplined architectural layers.'}
          </p>
        </div>

        {/* 6-Layer Architecture Graphic Container */}
        <div className="mt-12 sm:mt-16 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Top Control Meta Bar */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-5 gap-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                SYSTEM DESIGN SPECIFICATION
              </span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-0.5">
                {language === 'de' ? 'Durchgängige Daten- & Rechenpipeline' : 'End-to-End Operating Pipeline'}
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="rounded border border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-1 font-bold text-slate-900 dark:text-slate-200">
                DISCIPLINE: MODULAR
              </span>
              <span className="rounded border border-blue-600 bg-blue-600 text-white px-3 py-1 font-bold">
                6 TIERS CODIFIED
              </span>
            </div>
          </div>

          {/* 6 Layers Horizontal / Stacked Pipeline Graphic */}
          <div className="mt-8 space-y-3.5">
            {LAYERS.map((layer, idx) => {
              const isSelected = activeLayer === idx

              return (
                <div
                  key={layer.num}
                  onClick={() => setActiveLayer(idx)}
                  className={`
                    group relative rounded-2xl border-2 p-5 sm:p-6 transition-all duration-150 cursor-pointer
                    ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-950/30 shadow-md ring-1 ring-blue-600'
                        : 'border-slate-900/80 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 hover:border-blue-600 hover:bg-white dark:hover:bg-slate-800'
                    }
                  `}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    {/* Number & Name */}
                    <div className="lg:col-span-4 flex items-center gap-3.5">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-extrabold transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'border-2 border-slate-900 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white'
                        }`}
                      >
                        {layer.num}
                      </span>
                      <div>
                        <span className="block font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {layer.badge}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-tight">
                          {layer.name}
                        </h4>
                      </div>
                    </div>

                    {/* Summary & Detail */}
                    <div className="lg:col-span-5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {layer.summary}
                      </p>
                      {isSelected && (
                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {layer.detail}
                        </p>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-1.5">
                      {layer.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-slate-900/40 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-0.5 font-mono text-[9.5px] font-bold text-slate-800 dark:text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Pipeline Summary Footer */}
          <div className="mt-8 pt-4 border-t-2 border-slate-900/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              Source-to-Output Traceability Guaranteed
            </span>
            <span>DATA → STRUCTURE → LOGIC → CALCULATION → CONTROL → REPORTING</span>
          </div>
        </div>
      </div>
    </section>
  )
}