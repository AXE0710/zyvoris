'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function ProductScreenshot() {
  const { language } = useLanguage()

  const SCREENS = [
    {
      id: 'workspace',
      label: language === 'de' ? 'Berechnungs-Engine' : 'Calculation Engine',
      url: 'app.zyvoris.com/workspace',
      src: '/2_calculation_workspace.png',
      alt: 'ZYVORIS calculation workspace UI',
      stepNum: '01',
    },
    {
      id: 'overview',
      label: language === 'de' ? 'Fonds-Übersicht' : 'Fund Overview',
      url: 'app.zyvoris.com/overview',
      src: '/1_fund_overview.png',
      alt: 'ZYVORIS fund overview UI',
      stepNum: '02',
    },
    {
      id: 'trace',
      label: language === 'de' ? 'Lineage-Trace' : 'Lineage Trace',
      url: 'app.zyvoris.com/trace',
      src: '/5_calculation_trace.png',
      alt: 'ZYVORIS calculation lineage trace UI',
      stepNum: '03',
    },
    {
      id: 'reporting',
      label: language === 'de' ? 'Meldepakete' : 'Reporting Packages',
      url: 'app.zyvoris.com/reporting',
      src: '/6_reporting_output.png',
      alt: 'ZYVORIS reporting output packages UI',
      stepNum: '04',
    },
  ]

  const [activeScreenId, setActiveScreenId] = useState<string>('workspace')
  const activeScreen = SCREENS.find((s) => s.id === activeScreenId) || SCREENS[0]

  return (
    <section
      id="product"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#0b1533] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'Die Plattform' : 'The Platform'}
              </span>
            </div>

            <h2 className="max-w-[680px] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? 'Entwickelt für komplexe' : 'Designed for'}
              <br />
              <span className="text-slate-500 dark:text-slate-400">
                {language === 'de' ? 'Steueroperationen.' : 'complex tax operations.'}
              </span>
            </h2>
          </div>

          <div className="max-w-[570px] lg:ml-auto">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {language === 'de'
                ? 'ZYVORIS vereint Fondsdaten, Steuerberechnungen, länderspezifische Anforderungen und Prüf-Workflows in einer kontrollierten Betriebsumgebung.'
                : 'ZYVORIS brings fund data, tax calculations, jurisdictional requirements and review workflows into one controlled operating environment.'}
            </p>
          </div>
        </div>

        {/* Product Image & Overlay Box with bold black border */}
        <div className="relative mx-auto mt-12 max-w-[1120px] lg:mt-16">
          <div className="relative rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 sm:p-3 shadow-xl">
            {/* Browser Header Bar */}
            <div className="flex flex-wrap h-auto min-h-11 items-center justify-between gap-2 border-b-2 border-slate-900/80 dark:border-slate-800 px-3 sm:px-4 py-2">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-900 dark:text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* View Switcher Pills */}
              <div className="flex items-center gap-1 overflow-x-auto">
                {SCREENS.map((screen) => {
                  const isCurrent = screen.id === activeScreenId
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveScreenId(screen.id)}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10.5px] font-bold transition-all ${
                        isCurrent
                          ? 'bg-slate-950 text-white dark:bg-blue-600 shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {screen.label}
                    </button>
                  )
                })}
              </div>

              <div className="hidden sm:block rounded border border-slate-900/40 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-0.5 font-mono text-[10px] font-bold text-slate-900 dark:text-slate-300">
                {activeScreen.url}
              </div>
            </div>

            {/* Product Image */}
            <div className="relative w-full overflow-hidden rounded-b-2xl bg-slate-950">
              <Image
                src={activeScreen.src}
                alt={activeScreen.alt}
                width={1920}
                height={945}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Floating Trace Overlay Box with bold black border */}
          <div className="mt-6 w-full rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-2xl xl:absolute xl:-right-8 xl:bottom-6 xl:mt-0 xl:w-[320px]">
            <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  Calculation Trace
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                  Alpine PE IV (SCSp)
                </p>
              </div>

              <span className="rounded border border-slate-900 dark:border-slate-700 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-700 dark:text-blue-400">
                LIVE AUDIT
              </span>
            </div>

            <div className="space-y-2 pt-3">
              <TraceRow label="Source Data" value="Verified" num="01" />
              <TraceRow label="Tax Classification" value="Validated" num="02" />
              <TraceRow label="Tax Logic" value="Applied" num="03" />
              <TraceRow label="Calculation" value="Complete" num="04" />
              <TraceRow label="Reporting Output" value="Ready" num="05" />
            </div>
          </div>
        </div>

        {/* Supporting Points Box */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 border-t-2 border-slate-900 dark:border-slate-800 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-slate-900 dark:divide-slate-800 pt-6">
          <InfoItem
            number="01"
            title={language === 'de' ? 'Vollständiger Überblick' : 'Know what is happening'}
            description={
              language === 'de'
                ? 'Sehen Sie Berechnungs-, Ausnahme- und Prüfstatus über alle aktiven Reporting-Workflows.'
                : 'See calculation, exception and review status across active reporting workflows.'
            }
          />
          <InfoItem
            number="02"
            title={language === 'de' ? 'Fachliche Prüfung vor Freigabe' : 'Review before reporting'}
            description={
              language === 'de'
                ? 'Identifizieren Sie prüfrelevante Positionen, bevor Ergebnisse in die finale Meldung fließen.'
                : 'Surface items requiring attention before results move into final reporting.'
            }
          />
          <InfoItem
            number="03"
            title={language === 'de' ? 'Lückenlose Nachvollziehbarkeit' : 'Trace every result'}
            description={
              language === 'de'
                ? 'Verbinden Sie Berichtsdaten mit Quelldaten, Klassifizierungen und Steuerregeln.'
                : 'Connect reported outputs back to source data, classifications and tax logic.'
            }
          />
        </div>
      </div>
    </section>
  )
}

function TraceRow({
  label,
  value,
  num,
}: {
  label: string
  value: string
  num: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">[{num}]</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200">{label}</span>
      </div>
      <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{value}</span>
    </div>
  )
}

function InfoItem({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="p-6">
      <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
        [{number}]
      </span>
      <h3 className="mt-2 text-base font-bold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-400">
        {description}
      </p>
    </div>
  )
}