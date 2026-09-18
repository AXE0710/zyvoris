'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function IntegrationSection() {
  const { language } = useLanguage()

  const interfaces = ['API', 'Excel', 'CSV', 'JSON', 'Structured Data Feeds']

  return (
    <section
      id="integrations"
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
      <div className="relative mx-auto max-w-355">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'VERBINDUNG' : 'CONNECTIVITY'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
              {language === 'de' ? 'Entwickelt für Ihre bestehende' : 'Designed to work with your existing'}{' '}
              <span className="text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                {language === 'de' ? 'Datenumgebung' : 'data environment'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto max-w-135">
            {language === 'de'
              ? 'ZYVORIS kann strukturierte Finanz- und Fondsdaten über unterstützte APIs und dateibasierte Schnittstellen aufnehmen und so Steuer-Workflows modernisieren, ohne zentrale Accounting- oder Administrationssysteme zu ersetzen.'
              : 'ZYVORIS can ingest structured financial and fund data through supported APIs and file-based interfaces, allowing teams to modernize tax workflows without replacing their core accounting or administration systems.'}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-900 pb-5 dark:border-slate-800">
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {language === 'de' ? 'UNTERSTÜTZTE SCHNITTSTELLEN' : 'SUPPORTED INTERFACES'}
            </span>
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
              {language === 'de' ? 'STRUKTURIERTE DATEN' : 'STRUCTURED DATA'}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {interfaces.map((item) => (
              <span
                key={item}
                className="rounded-xl border-2 border-slate-900 bg-slate-50 px-4 py-2 font-mono text-xs font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}