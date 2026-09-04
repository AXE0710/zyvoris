'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function VerificationSection() {
  const { language } = useLanguage()

  const LINEAGE_STAGES = [
    {
      num: '01',
      title: 'Source Data',
      deTitle: 'Quelldaten',
      meta: 'ERP / GL / Custodian',
      desc: 'Raw accounting entries, transaction statements, and partner capital registers ingested with structured audit timestamps and execution identifiers.',
      color: 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900',
    },
    {
      num: '02',
      title: 'Normalized Data',
      deTitle: 'Normalisierte Daten',
      meta: 'Canonical Tax Schema',
      desc: 'Heterogeneous financial formats mapped into an auditable, unified schema ready for rule evaluation.',
      color: 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900',
    },
    {
      num: '03',
      title: 'Entity / Fund Structure',
      deTitle: 'Entitäts- / Fondsstruktur',
      meta: 'Multi-Tier Graph Model',
      desc: 'Master-feeder vehicles, SPVs, holding tiers, blockers, and partner tranches represented as linked structures.',
      color: 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900',
    },
    {
      num: '04',
      title: 'Tax Classification',
      deTitle: 'Steuerliche Einstufung',
      meta: 'ESTV / InvStG / Treaty Taxonomies',
      desc: 'Positions, income streams, and capital distributions classified with rule-based verification and confidence logging.',
      color: 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900',
    },
    {
      num: '05',
      title: 'Applicable Rule',
      deTitle: 'Anzuwendende Steuerregel',
      meta: 'Version-Controlled Codified Logic',
      desc: 'Explicit statutory rules (e.g. KS24, InvStG) dynamically bound to relevant asset classes and entity jurisdictions.',
      color: 'border-blue-600 dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/40',
    },
    {
      num: '06',
      title: 'Calculation',
      deTitle: 'Deterministische Berechnung',
      meta: 'Deterministic Math Execution',
      desc: 'Mathematical execution of tax values, allocations, and withholding calculations with zero probabilistic ambiguity.',
      color: 'border-blue-600 dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/40',
    },
    {
      num: '07',
      title: 'Review / Exception',
      deTitle: 'Prüfung / Ausnahme-Triage',
      meta: 'Exception Triage & Sign-Off',
      desc: 'Automated tolerance checks, reconciliation gates, and documented professional judgements before publication.',
      color: 'border-amber-600 dark:border-amber-500 bg-amber-50/60 dark:bg-amber-950/30',
    },
    {
      num: '08',
      title: 'Reporting Output',
      deTitle: 'Berichtsausgabe',
      meta: 'Jurisdiction-Ready Tax Datasets',
      desc: 'Final structured tax datasets, investor tax statements, and jurisdiction filings (XML/PDF where supported).',
      color: 'border-emerald-600 dark:border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40',
    },
  ]

  return (
    <section
      id="verification"
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
                {language === 'de' ? 'REVISIONSFÄHIGKEIT & LINEAGE' : 'CALCULATION LINEAGE & AUDITABILITY'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
              {language === 'de' ? 'Vollständige Berechnungs-Lineage.' : 'Complete calculation lineage.'}{' '}
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'Vom Quelldatum zur Meldung.' : 'From source data to reporting output.'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Jede materielle Berechnung muss von den Quelldaten bis zum finalen Berichtsoutput lückenlos nachvollziehbar bleiben. Dies ist entscheidend für Steuerberatungen, AIFMs, Fondsadministratoren, Wirtschaftsprüfer und institutionelle Investoren.'
              : 'Every material calculation should remain traceable from source data to final reporting output. This is particularly relevant for tax firms, AIFMs, fund administrators, auditors, and institutional investors.'}
          </p>
        </div>

        {/* =========================================================
            8-STAGE LINEAGE PIPELINE GRAPHIC
        ========================================================== */}
        <div className="mt-12 sm:mt-16 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Bar top */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-5 gap-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                ARCHITECTURAL DIFFERENTIATOR
              </span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-0.5">
                {language === 'de' ? '8-Stufen-Lineage-Architektur' : '8-Stage Traceable Execution Pipeline'}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded border border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-1 font-mono text-[10.5px] font-bold text-slate-900 dark:text-slate-200">
                AUDIT TRAIL: UNBROKEN
              </span>
              <span className="rounded border border-emerald-600 bg-emerald-600 text-white px-3 py-1 font-mono text-[10.5px] font-bold shadow-xs">
                IMMUTABLE SHA-256
              </span>
            </div>
          </div>

          {/* 8-Stage Interactive Grid Flow */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LINEAGE_STAGES.map((stage, idx) => (
              <div
                key={stage.num}
                className={`relative rounded-2xl border-2 p-5 shadow-xs transition-all duration-150 hover:-translate-y-1 hover:shadow-md ${stage.color}`}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-slate-900/20 dark:border-slate-700 pb-2.5">
                  <span className="font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    [{stage.num}]
                  </span>
                  <span className="font-mono text-[9.5px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                    STAGE {idx + 1} OF 8
                  </span>
                </div>

                {/* Stage Title */}
                <h4 className="mt-3 text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {language === 'de' ? stage.deTitle : stage.title}
                </h4>

                {/* Meta Tag */}
                <span className="mt-1 block font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400">
                  {stage.meta}
                </span>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {stage.desc}
                </p>

                {/* Connective arrow indicator for desktop */}
                {idx < 7 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-900 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold shadow-xs">
                      {idx === 3 ? '↓' : '→'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Stakeholder Audience Callout */}
          <div className="mt-10 rounded-2xl border-2 border-slate-900/70 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                WHO RELIES ON CALCULATION LINEAGE
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                {language === 'de'
                  ? 'Steuerberatungen · AIFMs · Fondsadministratoren · Wirtschaftsprüfer · Institutionelle Investoren'
                  : 'Tax Firms · AIFMs · Fund Administrators · Auditors · Institutional Investors'}
              </p>
            </div>
            <span className="rounded-md border border-blue-600/40 bg-blue-50 dark:bg-blue-950 px-3 py-1 font-mono text-[10px] font-bold text-blue-700 dark:text-blue-300 shrink-0">
              ZERO AUDIT BLACK-BOX
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}