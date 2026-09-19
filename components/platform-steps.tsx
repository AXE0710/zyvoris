'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function PlatformSteps() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  // Mathematical hexagon on a true circle (Radius = 37.0% from center 50%, 50%)
  // Angles: 30° (01), 90° (02), 150° (03), 210° (04), 270° (05), 330° (06)
  const steps = [
    {
      num: '01',
      x: 68.5,
      y: 18.0,
      title: isGerman ? 'Datenaufnahme & Strukturierung' : 'Data Ingestion',
      desc: isGerman
        ? 'Finanz-, Fonds-, Anleger- und Transaktionsdaten aus unterschiedlichen Quellen erfassen und strukturiert aufbereiten.'
        : 'Ingest and structure financial, fund, investor, and transaction data from multiple sources.',
    },
    {
      num: '02',
      x: 87.0,
      y: 50.0,
      title: isGerman ? 'Strukturmodellierung' : 'Structure Modeling',
      desc: isGerman
        ? 'Fonds, Gesellschaften, SPVs, Beteiligungsverhältnisse und Anteilsklassenstrukturen abbilden.'
        : 'Model funds, entities, SPVs, ownership relationships, and share-class structures.',
    },
    {
      num: '03',
      x: 68.5,
      y: 82.0,
      title: isGerman ? 'Steuerlogik' : 'Tax Logic',
      desc: isGerman
        ? 'Länderspezifische Steuerregeln, Klassifizierungen und Berechnungslogiken anwenden.'
        : 'Apply jurisdiction-specific tax rules, classifications, and calculation logic.',
    },
    {
      num: '04',
      x: 31.5,
      y: 82.0,
      title: isGerman ? 'Berechnung & Allokation' : 'Calculation & Allocation',
      desc: isGerman
        ? 'Kontrollierte Steuerberechnungen durchführen und Ergebnisse auf Fonds-, Anleger- und Anteilsklassenebene allokieren.'
        : 'Perform controlled tax calculations and allocate results across funds, investors, and share classes.',
    },
    {
      num: '05',
      x: 13.0,
      y: 50.0,
      title: isGerman ? 'Prüfung & Validierung' : 'Review & Validation',
      desc: isGerman
        ? 'Ausnahmen identifizieren, Berechnungsergebnisse validieren und eine kontrollierte fachliche Prüfung und Freigabe unterstützen.'
        : 'Identify exceptions, validate calculation results, and support controlled professional review and sign-off.',
    },
    {
      num: '06',
      x: 31.5,
      y: 18.0,
      title: isGerman ? 'Reporting & Datenausgabe' : 'Reporting Outputs',
      desc: isGerman
        ? 'Strukturierte, länderspezifisch aufbereitete Steuerdaten für Reporting und nachgelagerte Prozesse erstellen.'
        : 'Generate structured, jurisdiction-ready tax outputs for reporting and downstream workflows.',
    },
  ]

  return (
    <section
      id="platform-workflow"
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
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'PROZESS' : 'WORKFLOW'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12]">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Ein kontrollierter Prozess.{' '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  Von den Quelldaten bis zum Steuerreporting
                </span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  One controlled workflow.{' '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  From source data to tax reporting
                </span>
              </>
            )}
          </h2>
        </div>

        {/* ============================================================
            PROPER CIRCULAR WORKFLOW DIAGRAM (Desktop)
            aspect-square ensures a 100% true geometric circle
            ============================================================ */}
        <div className="relative mt-12 hidden md:block w-full max-w-[880px] aspect-square mx-auto">
          <svg
            viewBox="0 0 1000 1000"
            className="absolute inset-0 h-full w-full pointer-events-none overflow-visible z-0"
          >
            <defs>
              {/* Smooth blue gradient matching brand */}
              <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>

              {/* Arrow Marker */}
              <marker
                id="workflowArrow"
                viewBox="0 0 12 12"
                refX="10"
                refY="6"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path
                  d="M 1 1.5 L 10 6 L 1 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            {/* Subtle background circle guide line */}
            <circle
              cx="500"
              cy="500"
              r="370"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="text-blue-200/70 dark:text-blue-950/80"
            />

            {/* ========================================================
                6 CLOCKWISE CIRCULAR ARCS (True Radius R = 370)
                ======================================================== */}
            {/* 6 → 1: Top Left to Top Right */}
            <path
              d="M 404.2 142.6 A 370 370 0 0 1 580.1 138.8"
              fill="none"
              stroke="url(#workflowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#workflowArrow)"
              className="text-blue-600 dark:text-blue-400"
            />

            {/* 1 → 2: Top Right to Middle Right */}
            <path
              d="M 761.6 238.4 A 370 370 0 0 1 852.9 388.7"
              fill="none"
              stroke="url(#workflowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#workflowArrow)"
              className="text-blue-600 dark:text-blue-400"
            />

            {/* 2 → 3: Middle Right to Bottom Right */}
            <path
              d="M 857.4 595.8 A 370 370 0 0 1 772.8 750.0"
              fill="none"
              stroke="url(#workflowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#workflowArrow)"
              className="text-blue-600 dark:text-blue-400"
            />

            {/* 3 → 4: Bottom Right to Bottom Left */}
            <path
              d="M 595.8 857.4 A 370 370 0 0 1 419.9 861.2"
              fill="none"
              stroke="url(#workflowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#workflowArrow)"
              className="text-blue-600 dark:text-blue-400"
            />

            {/* 4 → 5: Bottom Left to Middle Left */}
            <path
              d="M 238.4 761.6 A 370 370 0 0 1 147.1 611.3"
              fill="none"
              stroke="url(#workflowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#workflowArrow)"
              className="text-blue-600 dark:text-blue-400"
            />

            {/* 5 → 6: Middle Left to Top Left */}
            <path
              d="M 142.6 404.2 A 370 370 0 0 1 227.2 250.0"
              fill="none"
              stroke="url(#workflowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#workflowArrow)"
              className="text-blue-600 dark:text-blue-400"
            />
          </svg>

          {/* Clean ambient depth in center (No Tax Data Cycle badge) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-400/5" />

          {/* ==========================================================
              6 STEP CARDS IN A PERFECT CIRCULAR ORBIT
              ========================================================== */}
          {steps.map((step) => (
            <div
              key={step.num}
              className="
                absolute
                rounded-full
                aspect-square
                border-2
                border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                shadow-[0_12px_35px_rgba(15,23,42,0.07)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)]
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-4 sm:p-5 lg:p-6
                z-20
                transition-all
                duration-300
                hover:scale-[1.05]
                hover:border-blue-500 dark:hover:border-blue-400
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.15)]
              "
              style={{
                width: '23.5%',
                left: `${step.x}%`,
                top: `${step.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Step number */}
              <span className="mb-1 text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500">
                {step.num}
              </span>

              <h3 className="font-sans text-xs sm:text-[13px] lg:text-[14px] font-bold text-slate-950 dark:text-white leading-tight max-w-[155px]">
                {step.title}
              </h3>

              <p className="font-sans text-[9px] sm:text-[9.5px] lg:text-[10.5px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed max-w-[160px] line-clamp-3 sm:line-clamp-none">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================
            MOBILE VIEW (< md): CLEAN STEPPED WORKFLOW
            ============================================================ */}
        <div className="mt-10 block md:hidden space-y-3.5">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="mx-auto max-w-sm rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-6 text-center shadow-xs">
                <span className="inline-block mb-1 text-[11px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400">
                  {step.num}
                </span>
                <h3 className="font-sans text-base font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-2">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center text-blue-600 dark:text-blue-400 font-bold text-base">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}