'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export default function AboutPage() {
  const { t, language } = useLanguage()

  const keyMetrics = [
    {
      label: language === 'de' ? 'Primärer Zielmarkt' : 'Primary Target Market',
      value: '$14T+',
      note: language === 'de' ? 'Globales Privatmarkt-AUM' : 'Global Private Markets AUM',
    },
    {
      label: language === 'de' ? 'Steuer-Engines' : 'Multi-Jurisdictional Engines',
      value: 'US, DE, CH, UK, LU+',
      note: language === 'de' ? 'Regelwerke kodifiziert' : 'Tax logic codified',
    },
    {
      label: language === 'de' ? 'Produktphase' : 'Product Stage',
      value: language === 'de' ? 'Schweiz MVP' : 'Swiss MVP',
      note:
        language === 'de'
          ? 'Fokus: Schweizer Fondssteuer, weitere Länder phasenweise'
          : 'Focus: Swiss fund tax, additional regimes in phases',
    },
    {
      label: language === 'de' ? 'Geplanter Rechtssitz' : 'Planned Legal Entity',
      value: 'Luxembourg',
      note: language === 'de' ? 'Europäischer Fondshub' : 'European Fund Hub',
    },
  ]

  const corePillars = [
    {
      num: '01',
      title: language === 'de' ? 'Zentrale Datenbasis' : 'Centralized Data Foundation',
      description:
        language === 'de'
          ? 'Schafft eine verlässliche Single-Source-of-Truth für Investoren, Fondsstrukturen, Allokationen und Transaktionen über alle Jurisdiktionen hinweg.'
          : 'Creates a single source of truth for investors, fund entities, structures, allocations, and transaction data across jurisdictions.',
    },
    {
      num: '02',
      title: language === 'de' ? 'Multi-Jurisdiktions-Engine' : 'Multi-Jurisdictional Engine',
      description:
        language === 'de'
          ? 'Kodifizierte, regelbasierte Steuerlogik für Luxemburg, Schweiz, USA, Großbritannien, Deutschland und führende Fondsfondsdomizile.'
          : 'Codified rule-based tax logic for Luxembourg, Switzerland, US, UK, Germany, and key fund domiciles.',
    },
    {
      num: '03',
      title: language === 'de' ? 'Integrierte Compliance-Workflows' : 'Embedded Compliance Workflows',
      description:
        language === 'de'
          ? 'Automatisierte Validierungen und Ausgaben für Investorenberichte, K-1s, CRS, FATCA und behördliche Meldepflichten.'
          : 'Automated validations and outputs for investor reporting packages, K-1s, CRS, FATCA, and regulatory reporting.',
    },
    {
      num: '04',
      title: language === 'de' ? 'Erweiterbare Infrastruktur' : 'Extendable Infrastructure',
      description:
        language === 'de'
          ? 'Primärer Fokus auf Privatmärkte (PE, VC, Real Estate, Infrastructure, Private Credit). ZYVORIS arbeitet unabhängig von der zugrundeliegenden Eigentumsinfrastruktur, sodass dieselbe Steuerlogik sowohl auf herkömmliche als auch auf tokenisierte Fondsstrukturen angewendet werden kann.'
          : 'Primary focus on private markets (PE, VC, Real Estate, Infrastructure, Private Credit). ZYVORIS operates independently of underlying ownership infrastructure, allowing the same structured tax logic to apply across both conventional and tokenized fund structures.',
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] dark:bg-[#080d1a] text-foreground pt-28 pb-20 sm:pt-32 lg:pt-36 transition-colors duration-200">
      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw]">
        {/* =========================================================
            ABOUT HERO
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400 mb-5">
            <span>[ {t('company_kicker', 'Company & Mission')} ]</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.08]">
            {t('company_title_1', 'Engineered to modernize')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('company_title_2', 'cross-border fund taxation.')}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {t(
              'company_desc',
              'ZYVORIS is building a global tax infrastructure layer for private markets, connecting complex fund structures, source financial feeds, deterministic calculations, and multi-jurisdictional reporting.'
            )}
          </p>
        </div>

        {/* =========================================================
            METRICS STRIP (Bold Black Borders & No Icons)
        ========================================================== */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {keyMetrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-2xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-5 sm:p-6
                shadow-sm
              "
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-400">
                {metric.label}
              </span>
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-1 font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
                {metric.note}
              </p>
            </div>
          ))}
        </div>

        {/* =========================================================
            PROBLEM & VISION SECTION
        ========================================================== */}
        <section className="mt-16 sm:mt-24 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-10 lg:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                [ {language === 'de' ? 'Problem & Lösung' : 'The Problem & Solution'} ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mt-3 mb-5 leading-tight">
                {language === 'de'
                  ? 'Fonds-Infrastruktur wurde nie für grenzüberschreitende Skalierung gebaut.'
                  : 'Private Markets Infrastructure Was Never Built for Cross-Border Scale.'}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {language === 'de'
                  ? 'Fondsmanager, AIFMs und Administratoren verlassen sich heute auf fragmentierte Tabellenkalkulationen, manuelle Steuerberechnungen und getrennte PDF-Arbeitspapiere. Dies führt zu hohen Betriebskosten, Prüfungshürden und steuerlichen Compliance-Risiken.'
                  : 'Today, fund managers, AIFMs, and administrators rely on fragmented spreadsheets, manual tax calculations, and disconnected PDF workpapers. This creates substantial operational expense, review friction, filing delays, and regulatory audit risks.'}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <strong className="text-slate-950 dark:text-white">
                  {language === 'de' ? 'ZYVORIS schließt diese Lücke.' : 'ZYVORIS closes this gap.'}
                </strong>{' '}
                {language === 'de'
                  ? 'Wir bieten eine API-basierte Steuerinfrastruktur, die komplexe grenzüberschreitende Fondsdaten in mathematisch nachprüfbare, deterministische und länderspezifische Steuerberichte umwandelt.'
                  : 'We provide an API-first operating layer that converts complex cross-border fund data into mathematically auditable, deterministic, and jurisdiction-ready tax datasets.'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/team"
                  className="
                    inline-flex items-center gap-2
                    rounded-xl
                    bg-slate-950 dark:bg-blue-600
                    border-2 border-black dark:border-blue-500
                    px-5 py-3
                    font-mono text-xs font-bold
                    text-white
                    hover:bg-slate-800 dark:hover:bg-blue-500
                    transition-all
                    shadow-sm
                  "
                >
                  <span>{language === 'de' ? 'FÜHRUNGSTEAM KENNENLERNEN' : 'MEET LEADERSHIP TEAM'}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="
                    p-5 sm:p-6
                    bg-slate-50 dark:bg-slate-800/60
                    rounded-2xl
                    border-2 border-slate-900/80 dark:border-slate-700
                    shadow-xs
                    transition-all
                    hover:border-blue-600
                  "
                >
                  <span className="font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    [{pillar.num}]
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white mt-2 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}