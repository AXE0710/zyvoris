'use client'

import React from 'react'
import AISection from '@/components/ai'
import VerificationSection from '@/components/verify'
import TechStackSection from '@/components/tech-stack'
import SecuritySection from '@/components/security'
import IntegrationSection from '@/components/integration'
import { useLanguage } from '@/components/language-provider'

export default function TechnologyPage() {
  const { t, language } = useLanguage()

  const techHighlights = [
    {
      num: '01',
      title: language === 'de' ? 'Deterministische Rechen-Engine' : 'Deterministic Calculation Engine',
      desc:
        language === 'de'
          ? 'Numerische Berechnungen werden über vordefinierte und versionskontrollierte Steuerregeln statt probabilistischer KI-Ausgaben ausgeführt. Regeln rechnen. KI interpretiert. Fachleute prüfen.'
          : 'Numerical calculations are executed using predefined and version-controlled tax rules rather than probabilistic AI outputs. Rules calculate. AI interprets. Professionals review.',
    },
    {
      num: '02',
      title: language === 'de' ? 'Nachvollziehbare Lineage' : 'Traceable Lineage',
      desc:
        language === 'de'
          ? 'Jeder ausgewiesene Betrag lässt sich über versionierte Prüfpfade bis auf die Quelldaten zurückverfolgen.'
          : 'Every reported number is traceable back to source data and rule versions with structured audit logging.',
    },
    {
      num: '03',
      title: language === 'de' ? 'Zero-Retention KI-Architektur' : 'Zero-Retention AI Architecture',
      desc:
        language === 'de'
          ? 'Architekturvorgabe: Dokumentenextraktion erfolgt zustandslos ohne Speicherung von Kundendaten für Modelltrainings.'
          : 'Architecture boundary: Document extraction runs statelessly without storing customer data for model training.',
    },
    {
      num: '04',
      title: language === 'de' ? 'Mandantenisolations-Architektur' : 'Tenant Isolation Architecture',
      desc:
        language === 'de'
          ? 'Logische Mandantentrennung und Schematrennung zum Schutz institutioneller Fondsdaten.'
          : 'Logical namespace and schema isolation designed to protect institutional fund data.',
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] dark:bg-[#080d1a] text-foreground pt-28 pb-20 sm:pt-32 lg:pt-36 transition-colors duration-200">
      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw]">
        {/* =========================================================
            TECHNOLOGY HERO HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400 mb-5">
            <span>[ {t('tech_kicker', 'Architecture & Infrastructure')} ]</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.08]">
            {t('tech_title_1', 'Deterministic by design.')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('tech_title_2', 'Verifiable at every step.')}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {t(
              'tech_desc',
              'Explore the technology stack powering ZYVORIS: isolated data layers, mathematical calculation engines, zero-retention AI governance, and enterprise connectivity.'
            )}
          </p>
        </div>

        {/* =========================================================
            TECH HIGHLIGHTS GRID (Bold Black Borders & No Icons)
        ========================================================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {techHighlights.map((h) => (
            <div
              key={h.title}
              className="
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-5 sm:p-6
                shadow-sm
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600
              "
            >
              <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                [{h.num}]
              </span>
              <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                {h.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED SECTIONS */}
      <AISection />
      <VerificationSection />
      <TechStackSection />
      <SecuritySection />
      <IntegrationSection />
    </div>
  )
}