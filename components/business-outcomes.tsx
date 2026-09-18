'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function BusinessOutcomes() {
  const { language } = useLanguage()

  const OUTCOMES = [
    {
      id: '01',
      kicker: language === 'de' ? 'OPERATIVE EFFIZIENZ' : 'OPERATIONAL EFFICIENCY',
      title: language === 'de' ? 'Manuelle Vorbereitung reduzieren' : 'Reduce Manual Preparation',
      desc:
        language === 'de'
          ? 'Standardisieren Sie wiederkehrende Datenaufbereitungen, Berechnungen und Berichts-Workflows.'
          : 'Standardize recurring data preparation, calculations, and reporting workflows.',
      benefit:
        language === 'de'
          ? 'Weniger Tabellen-Bruchstellen und konsistente Datenstrukturen von Periode zu Periode.'
          : 'Eliminate brittle spreadsheet workpapers and establish consistent data models period over period.',
    },
    {
      id: '02',
      kicker: language === 'de' ? 'FOKUSSIERTE PRÜFUNG' : 'REVIEW GOVERNANCE',
      title: language === 'de' ? 'Prüfeffizienz steigern' : 'Improve Review Efficiency',
      desc:
        language === 'de'
          ? 'Fokussieren Sie die fachliche Prüfung auf Ausnahmen und Ermessensfragen, anstatt ganze Arbeitspapiere neu aufzubauen.'
          : 'Focus professional review on exceptions and judgement points instead of rebuilding entire workpapers.',
      benefit:
        language === 'de'
          ? 'Steuerexperten verbringen Zeit mit fachlicher Würdigung statt mit Zahlenabgleich.'
          : 'Senior tax leaders spend time on professional discretion rather than mechanical number reconciliation.',
    },
    {
      id: '03',
      kicker: language === 'de' ? 'REVISIONSFÄHIGKEIT' : 'AUDIT READINESS',
      title: language === 'de' ? 'Prüfsicherheit stärken' : 'Strengthen Auditability',
      desc:
        language === 'de'
          ? 'Gewährleisten Sie lückenlose Nachvollziehbarkeit von Quelldaten über Steuerlogik und Berechnungen bis hin zu Berichtsausgaben.'
          : 'Preserve traceability from source data through tax logic, calculations, and reporting outputs.',
      benefit:
        language === 'de'
          ? 'Reproduzierbare Nachweise für Wirtschaftsprüfer, Steuerberater und Aufsichtsbehörden.'
          : 'Defensible, reproducible calculation lineages ready for auditors, advisors, and authorities.',
    },
    {
      id: '04',
      kicker: language === 'de' ? 'SKALIERBARKEIT' : 'MULTI-VEHICLE SCALE',
      title: language === 'de' ? 'Über Fonds hinweg skalieren' : 'Scale Across Funds',
      desc:
        language === 'de'
          ? 'Wiederverwendung kontrollierter Datenmodelle und Steuerlogik über Fonds, Entitäten, Anteilsklassen, Investoren und Berichtsperioden hinweg.'
          : 'Reuse controlled data models and tax logic across funds, entities, share classes, investors, and reporting periods.',
      benefit:
        language === 'de'
          ? 'Wachsende Fondsanzahl bewältigen, ohne das operative Steuerrisiko linear zu erhöhen.'
          : 'Scale portfolio vehicle count without linear operational strain or duplicated setup costs.',
    },
  ]

  return (
    <section
      id="business-outcomes"
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
                {language === 'de' ? 'OPERATIVER MEHRWERT' : 'BUSINESS VALUE & OUTCOMES'}
              </span>
            </div>

            <h2 className="max-w-[780px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? 'Von manuellen Steueroperationen zu' : 'From Manual Tax Operations to'}{' '}
              <span className="text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                {language === 'de' ? 'kontrollierter Ausführung' : 'Controlled Execution'}
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Messbare operative Verlässlichkeit ohne unbegründete Marketingversprechen. ZYVORIS transformiert Arbeitsweisen durch strukturierte Wiederholbarkeit, klare Kontrollpunkte und standardisierte Steuerarchitektur.'
              : 'Institutional private market operations require verified discipline over marketing hyperbole. ZYVORIS transforms tax workflows through repeatable execution, structured exception review, and immutable auditability.'}
          </p>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((item) => (
            <article
              key={item.id}
              className="
                group relative flex flex-col justify-between
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-7
                shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                  <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    [{item.id}]
                  </span>
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    {item.kicker}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Business Benefit Callout */}
              <div className="mt-6 pt-3.5 border-t border-slate-900/30 dark:border-slate-800">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Institutional Impact
                </span>
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-200 leading-snug">
                  {item.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            HUMAN-IN-THE-LOOP INSTITUTIONAL STATEMENT
        ========================================================== */}
        <div className="mt-10 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white font-mono text-sm font-extrabold shadow-xs">
              04
            </span>
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                Institutional Operating Principle
              </span>
              <h4 className="mt-0.5 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                {language === 'de'
                  ? 'Automatisierung übernimmt wiederholbare Logik. Steuerexperten behalten Ermessen, Prüfung und Freigabe.'
                  : 'Automation handles repeatable logic. Professionals retain judgement, review, and sign-off.'}
              </h4>
            </div>
          </div>

          <div className="md:border-l-2 md:border-slate-900/30 md:dark:border-slate-800 md:pl-6 max-w-md shrink-0">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {language === 'de'
                ? 'ZYVORIS wurde entwickelt, um Steuerexperten zu unterstützen – nicht um fachliches Urteilsvermögen zu ersetzen.'
                : 'ZYVORIS is designed to support tax professionals, not replace professional judgement.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
