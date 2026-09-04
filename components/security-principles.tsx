'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function SecurityPrinciples() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const principles = [
    {
      title: isGerman ? 'Kontrollierter Zugriff' : 'Controlled Access',
      description: isGerman
        ? 'Rollenbasierter Zugriff auf Fonds, Workflows und Reporting-Daten.'
        : 'Role-based access to funds, workflows, and reporting data.',
    },
    {
      title: isGerman ? 'Datentrennung' : 'Data Separation',
      description: isGerman
        ? 'Entwickelt, um Kundenumgebungen und Zugriffe klar voneinander zu trennen.'
        : 'Designed to keep client environments and access clearly separated.',
    },
    {
      title: isGerman ? 'Nachvollziehbarkeit' : 'Auditability',
      description: isGerman
        ? 'Strukturierte Aufzeichnungen von Berechnungs- und Workflow-Aktivitäten.'
        : 'Structured records of calculation and workflow activity.',
    },
    {
      title: isGerman ? 'Datenschutz' : 'Data Protection',
      description: isGerman
        ? 'Sicherheitskontrollen für sensible Finanz- und Steuerinformationen.'
        : 'Security controls designed for sensitive financial and tax information.',
    },
  ]

  return (
    <section
      id="security"
      className="relative overflow-hidden border-t-2 border-slate-900 bg-white px-4 py-16 text-[#0b1735] transition-colors duration-200 dark:border-slate-800 dark:bg-[#080d1a] sm:py-24 sm:px-6 lg:px-[5vw]"
    >
      <div className="relative mx-auto max-w-355">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'SICHERHEIT & KONTROLLE' : 'SECURITY & CONTROL'}
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            {isGerman ? 'Entwickelt für sensible Finanz- und Steuerdaten.' : 'Designed for sensitive financial and tax data.'}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="rounded-2xl border-2 border-slate-900 bg-[#f0f4f9]/50 p-5 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:border-blue-600 dark:border-slate-700 dark:bg-slate-900/90 dark:hover:border-blue-500 sm:p-6"
            >
              <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">[{String(index + 1).padStart(2, '0')}]</span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-slate-950 dark:text-white">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}