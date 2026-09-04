'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function PlatformArchitecture() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

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
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'PLATTFORMARCHITEKTUR' : 'PLATFORM ARCHITECTURE'}
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
            {isGerman
              ? 'Daten, Logik, Berechnung und Prüfung getrennt.'
              : 'Separate data, logic, calculation, and review.'}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'ZYVORIS trennt Steuerdaten, jurisdiktionsspezifische Regeln, Berechnungslogik und fachliche Prüfung in eigenständige Schichten, damit Workflows strukturiert, reproduzierbar und einfacher zu steuern bleiben.'
              : 'ZYVORIS separates tax data, jurisdiction-specific rules, calculation logic, and professional review into distinct layers so workflows remain structured, reproducible, and easier to govern.'}
          </p>
        </div>

        {/* Visual Pipeline */}
        <div className="mt-12 sm:mt-16 rounded-2xl border-2 border-slate-900 dark:border-slate-800 bg-[#f0f4f9] dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col items-center gap-3 text-xs font-mono font-bold tracking-wider sm:flex-row sm:justify-between sm:gap-4 sm:text-sm">
            <div className="rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
              {isGerman ? 'DATEN' : 'DATA'}
            </div>
            <span className="text-slate-400 dark:text-slate-500 font-bold sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 font-bold sm:inline">→</span>
            <div className="rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {isGerman ? 'STRUKTUR' : 'STRUCTURE'}
            </div>
            <span className="text-slate-400 dark:text-slate-500 font-bold sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 font-bold sm:inline">→</span>
            <div className="rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
              {isGerman ? 'REGELN' : 'RULES'}
            </div>
            <span className="text-slate-400 dark:text-slate-500 font-bold sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 font-bold sm:inline">→</span>
            <div className="rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {isGerman ? 'BERECHNUNG' : 'CALCULATION'}
            </div>
            <span className="text-slate-400 dark:text-slate-500 font-bold sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 font-bold sm:inline">→</span>
            <div className="rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
              {isGerman ? 'PRÜFUNG' : 'REVIEW'}
            </div>
            <span className="text-slate-400 dark:text-slate-500 font-bold sm:hidden">↓</span>
            <span className="hidden text-slate-400 dark:text-slate-500 font-bold sm:inline">→</span>
            <div className="rounded-xl border-2 border-emerald-600 bg-emerald-50 px-4 py-2.5 font-extrabold text-emerald-700 dark:border-emerald-500 dark:bg-emerald-950/60 dark:text-emerald-300">
              {isGerman ? 'AUSGABE' : 'OUTPUT'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
