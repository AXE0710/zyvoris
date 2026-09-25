'use client'

import React from 'react'
import { useLanguage } from './language-provider'
import UnderlinedText from './underlined-text'

export default function PlatformArchitecture() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const layers = [
    {
      num: '01',
      label: isGerman ? 'DATEN' : 'DATA',
      sub: isGerman ? 'Erfassen & Bereinigen' : 'Ingest & Normalize',
    },
    {
      num: '02',
      label: isGerman ? 'STRUKTUR' : 'STRUCTURE',
      sub: isGerman ? 'Modellieren & Abbilden' : 'Model & Map',
    },
    {
      num: '03',
      label: isGerman ? 'STEUERLOGIK' : 'TAX LOGIC',
      sub: isGerman ? 'Klassifizieren & Anwenden' : 'Classify & Apply',
    },
    {
      num: '04',
      label: isGerman ? 'BERECHNUNG' : 'CALCULATION',
      sub: isGerman ? 'Berechnen & Allokieren' : 'Calculate & Allocate',
    },
    {
      num: '05',
      label: isGerman ? 'PRÜFUNG' : 'REVIEW',
      sub: isGerman ? 'Validieren & Freigeben' : 'Validate & Approve',
    },
    {
      num: '06',
      label: 'REPORTING',
      sub: isGerman ? 'Strukturieren & Bereitstellen' : 'Structure & Deliver',
    },
  ]

  return (
    <section
      id="architecture"
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
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12] break-words">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Daten. Steuerlogik. Berechnung. Prüfung.{' '}
                </span>
                <UnderlinedText textClassName="font-sans font-semibold text-blue-700 dark:text-blue-400">
                  Klar getrennt.
                </UnderlinedText>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Clear separation across data, tax logic,{' '}
                </span>
                <UnderlinedText textClassName="font-sans font-semibold text-blue-700 dark:text-blue-400">
                  calculations, and review.
                </UnderlinedText>
              </>
            )}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'ZYVORIS trennt Quelldaten, länderspezifische Steuerlogik, Berechnungen und fachliche Prüfung in klar definierte Ebenen. So bleiben steuerliche Prozesse strukturiert, nachvollziehbar, reproduzierbar und kontrolliert.'
              : 'ZYVORIS separates source data, jurisdiction-specific tax logic, calculations, and professional review into clearly defined layers—keeping tax workflows structured, traceable, reproducible, and controlled.'}
          </p>
        </div>

        {/* Visual Architecture Flow Container */}
        <div className="mt-12 sm:mt-16 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-[#f0f4f9] dark:bg-slate-900/60 p-5 sm:p-7 lg:p-8 shadow-sm">
          
          {/* DESKTOP VIEW (lg+): Balanced 6-Block Horizontal Flow with Connecting Arrows */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-2 xl:gap-3">
            {layers.map((layer, index) => (
              <React.Fragment key={layer.num}>
                <div
                  className="
                    flex-1 min-w-0
                    flex flex-col items-center justify-center text-center
                    rounded-2xl
                    border-2 border-slate-200 dark:border-slate-700
                    bg-white dark:bg-[#0c152a]
                    py-4 px-3 xl:px-4
                    shadow-xs
                    transition-all duration-200
                    hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md
                  "
                >
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 mb-1">
                    [{layer.num}]
                  </span>
                  <span className="font-mono text-sm xl:text-[14.5px] font-extrabold uppercase tracking-wider text-slate-950 dark:text-white leading-tight">
                    {layer.label}
                  </span>
                  <span className="mt-1.5 font-sans text-xs xl:text-[12px] font-medium tracking-normal text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {layer.sub}
                  </span>
                </div>

                {index < layers.length - 1 && (
                  <div className="flex items-center justify-center shrink-0 px-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-extrabold text-base xl:text-lg select-none">
                      →
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* TABLET VIEW (sm to md): Responsive 2-Column / 3-Column Progression with Clean Spacing */}
          <div className="hidden sm:grid md:grid-cols-3 sm:grid-cols-2 gap-4 lg:hidden">
            {layers.map((layer, index) => (
              <div
                key={layer.num}
                className="
                  flex flex-col justify-between
                  rounded-2xl
                  border-2 border-slate-200 dark:border-slate-700
                  bg-white dark:bg-[#0c152a]
                  p-5 shadow-xs
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:border-blue-500
                "
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                    [{layer.num}]
                  </span>
                  {index < layers.length - 1 ? (
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">→</span>
                  ) : (
                    <span className="text-emerald-500 font-bold text-sm">✓</span>
                  )}
                </div>
                <div>
                  <h4 className="font-mono text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-950 dark:text-white">
                    {layer.label}
                  </h4>
                  <p className="mt-1.5 font-sans text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 m-0">
                    {layer.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE VIEW (< sm): Clean Stacked Progression */}
          <div className="flex flex-col gap-2.5 sm:hidden">
            {layers.map((layer, index) => (
              <React.Fragment key={layer.num}>
                <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0c152a] p-4 text-center shadow-xs">
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 block mb-1">
                    [{layer.num}]
                  </span>
                  <h4 className="font-mono text-sm font-extrabold uppercase tracking-wider text-slate-950 dark:text-white">
                    {layer.label}
                  </h4>
                  <p className="mt-1 font-sans text-xs font-medium text-slate-500 dark:text-slate-400 m-0">
                    {layer.sub}
                  </p>
                </div>
                {index < layers.length - 1 && (
                  <div className="flex justify-center text-blue-600 dark:text-blue-400 font-bold text-sm py-0.5">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Progression Summary Footer Banner */}
          <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-950 dark:text-blue-200">
                {isGerman ? 'PROGRESSION' : 'PROGRESSION'}
              </span>
            </div>
            <p className="m-0 font-sans text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
              {isGerman
                ? 'Quelldaten erfassen → Strukturen abbilden → Länderspezifische Steuerlogik anwenden → Berechnungen & Allokationen durchführen → Ergebnisse prüfen & freigeben → Strukturierte Steuer-Outputs erstellen.'
                : 'Source data enters the platform → structures are modeled → jurisdiction-specific tax logic is applied → calculations and allocations are performed → results are reviewed and validated → structured tax reporting outputs are generated.'}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
