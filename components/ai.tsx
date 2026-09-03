'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function AISection() {
  const { t, language } = useLanguage()

  const LAYERS = [
    {
      step: '01',
      title: language === 'de' ? 'KI-Schicht' : 'AI Layer',
      role: language === 'de' ? 'KI interpretiert' : 'AI Interprets',
      desc:
        language === 'de'
          ? 'Zuständig für unstrukturierte Dateneingänge, semantische Interpretation und vorbereitende Intelligenz.'
          : 'Dedicated to unstructured data intake, semantic interpretation, and contextual tax intelligence.',
      capabilities: [
        'Document extraction',
        'Data interpretation',
        'Classification',
        'Anomaly detection',
        'Missing-data identification',
        'Contextual tax intelligence',
      ],
      tagline: 'Semantic Understanding',
    },
    {
      step: '02',
      title: language === 'de' ? 'Deterministische Rechen-Engine' : 'Deterministic Rule Engine',
      role: language === 'de' ? 'Regeln rechnen' : 'Rules Calculate',
      desc:
        language === 'de'
          ? 'Zuständig für mathematische Präzision und regelbasierte Berechnungen ohne probabilistische Modelle.'
          : 'Dedicated to mathematical precision and statutory rule execution with zero guesswork.',
      capabilities: [
        'Numerical calculations',
        'Allocations',
        'Tax value calculations',
        'Rule execution',
        'Jurisdiction-specific tax logic',
        'Reconciliations',
      ],
      tagline: 'Mathematical Precision',
      highlight: true,
    },
    {
      step: '03',
      title: language === 'de' ? 'Fachliche Prüf- & Freigabeschicht' : 'Human Review Layer',
      role: language === 'de' ? 'Profis prüfen' : 'Professionals Review',
      desc:
        language === 'de'
          ? 'Zuständig für professionelles Ermessen, Ausnahmebehandlung und verbindliche Endabnahmen.'
          : 'Dedicated to professional tax judgment, exception handling, and final authorization.',
      capabilities: [
        'Professional judgement',
        'Exceptions',
        'Validation',
        'Review',
        'Approval',
        'Sign-off',
      ],
      tagline: 'Human Oversight',
    },
  ]

  return (
    <section
      id="ai-architecture"
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
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t('ai_kicker', 'THREE-TIER TAX INFRASTRUCTURE ARCHITECTURE')}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {t('ai_title_1', 'AI where interpretation matters.')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('ai_title_2', 'Deterministic calculation where precision is non-negotiable.')}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {t(
              'ai_desc',
              'AI can support extraction, interpretation, classification, and anomaly detection, while numerical tax calculations are executed through predefined, version-controlled rules.'
            )}
          </p>
        </div>

        {/* =========================================================
            HORIZONTAL ARCHITECTURE GRAPHIC
            AI interprets → Rules calculate → Professionals review
        ========================================================== */}
        <div className="mt-10 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-[#f0f4f9] dark:bg-slate-900/90 p-4 sm:p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between border-b border-slate-900/30 dark:border-slate-800 pb-2.5">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              [ SYS-ARCH ] Core Control Sequence
            </span>
            <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">
              End-to-End Governance
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Step 1 */}
            <div className="flex-1 flex items-center justify-between md:justify-start gap-3 rounded-xl border-2 border-slate-900/80 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white font-mono text-[10px] font-bold">
                  01
                </span>
                <div>
                  <span className="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                    AI Layer
                  </span>
                  <span className="text-sm font-extrabold text-slate-950 dark:text-white">
                    AI interprets
                  </span>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-blue-600/40 bg-blue-50 text-blue-700 dark:border-blue-500/40 dark:bg-blue-950/50 dark:text-blue-300 font-semibold">
                Extraction & Context
              </span>
            </div>

            {/* Connector */}
            <div className="flex justify-center items-center py-0.5 md:px-2">
              <span className="hidden md:inline font-mono text-base font-bold text-blue-600 dark:text-blue-400">
                →
              </span>
              <span className="md:hidden font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                ↓
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex items-center justify-between md:justify-start gap-3 rounded-xl border-2 border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 px-4 py-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white font-mono text-[10px] font-bold">
                  02
                </span>
                <div>
                  <span className="block text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                    Deterministic Engine
                  </span>
                  <span className="text-sm font-extrabold text-slate-950 dark:text-white">
                    Rules calculate
                  </span>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-blue-600 bg-blue-600 text-white font-semibold">
                Math & Allocations
              </span>
            </div>

            {/* Connector */}
            <div className="flex justify-center items-center py-0.5 md:px-2">
              <span className="hidden md:inline font-mono text-base font-bold text-blue-600 dark:text-blue-400">
                →
              </span>
              <span className="md:hidden font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                ↓
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex items-center justify-between md:justify-start gap-3 rounded-xl border-2 border-slate-900/80 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 dark:bg-slate-700 text-white font-mono text-[10px] font-bold">
                  03
                </span>
                <div>
                  <span className="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                    Human Review Layer
                  </span>
                  <span className="text-sm font-extrabold text-slate-950 dark:text-white">
                    Professionals review
                  </span>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-600/40 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-950/50 dark:text-emerald-300 font-semibold">
                Sign-off & Control
              </span>
            </div>
          </div>
        </div>

        {/* 3 Layer Detailed Cards - Bold Black Borders & No Icons */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {LAYERS.map((layer) => (
            <div
              key={layer.step}
              className={`
                flex flex-col justify-between
                rounded-3xl
                border-2 p-6 sm:p-7
                transition-all duration-150
                ${
                  layer.highlight
                    ? 'border-blue-600 bg-blue-50/40 dark:border-blue-500 dark:bg-slate-900 shadow-md ring-1 ring-blue-600'
                    : 'border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-600'
                }
              `}
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{layer.step}]
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200">
                      LAYER {layer.step}
                    </span>
                  </div>
                  <span className="rounded border border-slate-900/60 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[9.5px] font-bold text-slate-900 dark:text-slate-200 uppercase">
                    {layer.role}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {layer.desc}
                  </p>
                </div>

                {/* Used For Capabilities Checklist */}
                <div className="mt-5 pt-4 border-t border-slate-900/30 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Used for:
                  </span>
                  <ul className="mt-2.5 space-y-1.5">
                    {layer.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                      >
                        <span className="font-mono text-blue-600 dark:text-blue-400 font-bold leading-none mt-0.5">
                          •
                        </span>
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t-2 border-slate-900/60 dark:border-slate-800 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  OPERATIONAL DISCIPLINE
                </span>
                <span className="font-mono text-[10.5px] font-bold text-blue-600 dark:text-blue-400">
                  {layer.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Human-in-the-loop Statement Callout */}
        <div className="mt-10 rounded-2xl border-2 border-slate-900/80 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-blue-600/60 bg-blue-500/15 text-blue-700 dark:border-blue-400/60 dark:text-blue-300">
              OVERSIGHT
            </span>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
              <span className="font-bold text-slate-950 dark:text-white">
                {language === 'de'
                  ? 'Automatisierung übernimmt wiederholbare Logik. Steuerexperten behalten Ermessen, Prüfung und Freigabe.'
                  : 'Automation handles repeatable logic. Professionals retain judgement, review, and sign-off.'}
              </span>{' '}
              <span className="text-slate-600 dark:text-slate-400">
                — {language === 'de'
                  ? 'ZYVORIS wurde entwickelt, um Steuerexperten zu unterstützen, nicht um fachliches Urteilsvermögen zu ersetzen.'
                  : 'ZYVORIS is designed to support tax professionals, not replace professional judgement.'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}