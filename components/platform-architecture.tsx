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
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'PLATTFORMARCHITEKTUR' : 'PLATFORM ARCHITECTURE'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12]">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Klare Trennung von Daten, Steuerlogik,{' '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  Berechnung und Prüfung
                </span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Separate data, logic,{' '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  calculation, and review
                </span>
              </>
            )}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'ZYVORIS trennt Steuerdaten, länderspezifische Steuerregeln, Berechnungslogik und fachliche Prüfung in klar definierte Ebenen. So bleiben Prozesse strukturiert, nachvollziehbar und kontrollierbar.'
              : 'ZYVORIS separates tax data, jurisdiction-specific rules, calculation logic, and professional review into clearly defined layers—keeping tax workflows structured, traceable, reproducible, and controlled.'}
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
              {isGerman ? 'ERGEBNIS' : 'OUTPUT'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
