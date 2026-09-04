'use client'

import React from 'react'
import { useLanguage } from '@/components/language-provider'

export default function TechnologyPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const fourPrinciples = [
    {
      num: '01',
      title: isGerman ? 'Deterministische Berechnungen' : 'Deterministic Calculations',
      desc: isGerman
        ? 'Explizite Berechnungslogik für reproduzierbare Steuerergebnisse.'
        : 'Explicit calculation logic designed for reproducible tax results.',
    },
    {
      num: '02',
      title: isGerman ? 'Nachvollziehbarkeit' : 'Traceability',
      desc: isGerman
        ? 'Outputs mit Quelldaten und angewandter Steuerlogik verbinden.'
        : 'Connect outputs to source data and applied tax logic.',
    },
    {
      num: '03',
      title: isGerman ? 'Fachliche Kontrolle' : 'Professional Control',
      desc: isGerman
        ? 'Materielle Steuerentscheidungen und Ausnahmen bleiben unter fachlicher Prüfung.'
        : 'Keep material tax decisions and exceptions subject to professional review.',
    },
    {
      num: '04',
      title: isGerman ? 'Sicherer Umgang mit Daten' : 'Secure Data Handling',
      desc: isGerman
        ? 'Für kontrollierten Zugriff auf sensible Finanz- und Steuerdaten entwickelt.'
        : 'Designed for controlled access and sensitive financial and tax data.',
    },
  ]

  const connectivityTags = [
    'API',
    'Excel',
    'CSV',
    'JSON',
    'Structured Data Feeds',
  ]

  const securityCards = [
    {
      num: '01',
      title: isGerman ? 'Kontrollierter Zugriff' : 'Controlled Access',
      desc: isGerman
        ? 'Rollenbasierter Zugriff auf Fonds, Workflows und Reporting-Daten.'
        : 'Role-based access to funds, workflows, and reporting data.',
    },
    {
      num: '02',
      title: isGerman ? 'Datentrennung' : 'Data Separation',
      desc: isGerman
        ? 'Für eine klare Trennung von Mandantenumgebungen und Zugriffsberechtigungen konzipiert.'
        : 'Designed to keep client environments and access clearly separated.',
    },
    {
      num: '03',
      title: isGerman ? 'Revisionssicherheit' : 'Auditability',
      desc: isGerman
        ? 'Strukturierte Protokollierung aller Berechnungs- und Workflow-Aktivitäten.'
        : 'Structured records of calculation and workflow activity.',
    },
    {
      num: '04',
      title: isGerman ? 'Datenschutz' : 'Data Protection',
      desc: isGerman
        ? 'Sicherheitskontrollen speziell für sensible Finanz- und Steuerinformationen.'
        : 'Security controls designed for sensitive financial and tax information.',
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#f0f4f9] px-4 pb-20 pt-28 text-foreground transition-colors duration-200 dark:bg-[#080d1a] sm:px-6 sm:pt-32 lg:px-[5vw] lg:pt-36">
      <div className="relative mx-auto max-w-[1420px]">

        {/* =========================================================
            1. TECHNOLOGY HERO
        ========================================================== */}
        <header className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400">
            <span>[ {isGerman ? 'TECHNOLOGIE' : 'TECHNOLOGY'} ]</span>
          </div>

          <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {isGerman
              ? 'Kontrollierte Automatisierung für komplexe Steuer-Workflows.'
              : 'Controlled automation for complex tax workflows.'}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'ZYVORIS kombiniert strukturierte Daten, deterministische Berechnungslogik, Nachvollziehbarkeit und kontrollierte KI-gestützte Workflows.'
              : 'ZYVORIS combines structured data, deterministic calculation logic, traceability, and controlled AI-assisted workflows.'}
          </p>
        </header>

        {/* =========================================================
            2. TECHNOLOGY — CORE PRINCIPLE
        ========================================================== */}
        <section className="mt-16 sm:mt-24 rounded-3xl border-2 border-slate-900 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'KERNPRINZIP' : 'CORE PRINCIPLE'}
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-slate-950 dark:text-white">
              {isGerman
                ? 'KI für Interpretation. Deterministische Logik für Berechnungen.'
                : 'AI for interpretation. Deterministic logic for calculation.'}
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {isGerman
                ? 'KI-gestützte Workflows unterstützen bei Extraktion, Klassifizierung und Ausnahmeanalysen. Steuerberechnungen bleiben getrennt und werden durch kontrollierte Berechnungslogik ausgeführt.'
                : 'AI-assisted workflows can support extraction, classification, and exception analysis. Tax calculations remain separate and are executed through controlled calculation logic.'}
            </p>
          </div>
        </section>

        {/* =========================================================
            3. TECHNOLOGY — FOUR PRINCIPLES
        ========================================================== */}
        <section className="mt-16 sm:mt-24">
          <div className="mb-8 border-b-2 border-slate-900 pb-4 dark:border-slate-800">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'LEITLINIEN' : 'PRINCIPLES'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fourPrinciples.map((item) => (
              <div
                key={item.num}
                className="
                  group relative flex flex-col justify-between
                  rounded-2xl
                  border-2 border-slate-900 dark:border-slate-700
                  bg-white dark:bg-slate-900
                  p-6 sm:p-7
                  shadow-sm
                  transition-all duration-150
                  hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
                "
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{item.num}]
                    </span>
                    <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      {isGerman ? 'PRINZIP' : 'PRINCIPLE'}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-slate-700 dark:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between pt-3 border-t border-slate-900/30 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {isGerman ? 'KONTROLLE' : 'CONTROL'}
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. TECHNOLOGY — CONNECTIVITY
        ========================================================== */}
        <section className="mt-16 sm:mt-24 rounded-3xl border-2 border-slate-900 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'KONNEKTIVITÄT' : 'CONNECTIVITY'}
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-slate-950 dark:text-white">
              {isGerman
                ? 'Entwickelt für Ihre bestehende Datenumgebung.'
                : 'Designed to work with your existing data environment.'}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {isGerman
                ? 'ZYVORIS kann strukturierte Finanz- und Fondsdaten über unterstützte Schnittstellen und dateibasierte Formate aufnehmen, sodass Teams ihre Steuer-Workflows modernisieren können, ohne bestehende Buchhaltungs- oder Administrationssysteme ersetzen zu müssen.'
                : 'ZYVORIS can ingest structured financial and fund data through supported APIs and file-based interfaces, allowing teams to modernize tax workflows without replacing their core accounting or administration systems.'}
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {connectivityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl border-2 border-slate-900 bg-[#f0f4f9] px-4 py-2 font-mono text-xs font-bold text-slate-900 shadow-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. TECHNOLOGY — SECURITY & CONTROL
        ========================================================== */}
        <section className="mt-16 sm:mt-24">
          <div className="mb-8 border-b-2 border-slate-900 pb-4 dark:border-slate-800">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'SICHERHEIT & KONTROLLE' : 'SECURITY & CONTROL'}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {isGerman
                ? 'Für sensible Finanz- und Steuerdaten entwickelt.'
                : 'Designed for sensitive financial and tax data.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {securityCards.map((card) => (
              <div
                key={card.num}
                className="
                  group relative flex flex-col justify-between
                  rounded-2xl
                  border-2 border-slate-900 dark:border-slate-700
                  bg-white dark:bg-slate-900
                  p-6 sm:p-7
                  shadow-sm
                  transition-all duration-150
                  hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
                "
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{card.num}]
                    </span>
                    <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      {isGerman ? 'SICHERHEIT' : 'SECURITY'}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-slate-700 dark:text-slate-300">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between pt-3 border-t border-slate-900/30 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {isGerman ? 'SCHUTZ' : 'PROTECTION'}
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}