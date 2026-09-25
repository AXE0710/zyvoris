'use client'

import React from 'react'
import { useLanguage } from './language-provider'
import UnderlinedText from './underlined-text'

export default function CoreCapabilities() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const capabilities = [
    {
      num: '01',
      title: isGerman ? 'Steuerberechnungen auf Fondsebene' : 'Fund-Level Tax Calculations',
      desc: isGerman
        ? 'Führen Sie kontrollierte, länderspezifische Steuerberechnungen auf Fondsebene durch.'
        : 'Perform controlled, jurisdiction-specific tax calculations at fund level.',
    },
    {
      num: '02',
      title: isGerman ? 'Allokation auf Anteilsklassenebene' : 'Share-Class Allocations',
      desc: isGerman
        ? 'Kontrollierte und konsistente Verteilung steuerlicher Ergebnisse auf komplexe Anteilsklassenstrukturen.'
        : 'Allocate tax results across complex share-class structures using controlled and consistent allocation logic.',
    },
    {
      num: '03',
      title: isGerman ? 'Modellierung mehrstufiger Strukturen' : 'Multi-Tier Structure Modeling',
      desc: isGerman
        ? 'Abbildung komplexer Fondsstrukturen, Gesellschaften, Beteiligungshierarchien und mehrstufiger Investmentstrukturen.'
        : 'Model complex fund structures, entities, ownership hierarchies, and multi-tier investment vehicles.',
    },
    {
      num: '04',
      title: isGerman ? 'Steuerliche Wertermittlung' : 'Tax Value Calculations',
      desc: isGerman
        ? 'Ermittlung länderspezifischer Steuerwerte und zurechenbarer Erträge auf Basis der zugrunde liegenden Fondsdaten.'
        : 'Calculate jurisdiction-specific tax values and attributable income directly from underlying fund data.',
    },
    {
      num: '05',
      title: isGerman ? 'Prüfung & Validierung' : 'Review & Validation',
      desc: isGerman
        ? 'Validierung von Berechnungsergebnissen, Bearbeitung von Ausnahmen und Vorbereitung steuerlicher Ergebnisse für die fachliche Prüfung und Freigabe.'
        : 'Validate calculation results, manage exceptions, and prepare tax outputs for professional review and sign-off.',
    },
    {
      num: '06',
      title: isGerman ? 'Reporting & Datenausgabe' : 'Reporting Outputs',
      desc: isGerman
        ? 'Erstellung strukturierter, länderspezifisch aufbereiteter Steuerdaten für Reporting, Prüfung und nachgelagerte Prozesse.'
        : 'Generate structured, jurisdiction-ready tax outputs for reporting, review, and downstream workflows.',
    },
    {
      num: '07',
      title: isGerman ? 'Nachvollziehbarkeit von Berechnungen' : 'Calculation Traceability',
      desc: isGerman
        ? 'Nachverfolgung ausgewiesener Steuerwerte bis zu den zugrunde liegenden Quelldaten, Berechnungsschritten und angewandten Steuerregeln.'
        : 'Trace reported tax values back to underlying source data, calculation steps, and applied tax logic.',
    },
    {
      num: '08',
      title: isGerman ? 'Strukturierte Datenaufnahme' : 'Structured Data Ingestion',
      desc: isGerman
        ? 'Überführung von Finanz- und Fondsdaten aus unterschiedlichen Quellen in ein einheitliches, strukturiertes und prüfbares Format für die weitere steuerliche Verarbeitung.'
        : 'Transform source financial and fund data into a consistent, structured, and reviewable format for downstream tax processing.',
    },
  ]

  return (
    <section
      id="capabilities"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-white dark:bg-[#080d1a]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#09132f] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12] break-words">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Speziell entwickelt{' '}
                </span>
                <UnderlinedText textClassName="font-sans font-semibold text-blue-700 dark:text-blue-400">
                  für komplexe Steuerprozesse in Private Markets
                </UnderlinedText>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Purpose-built{' '}
                </span>
                <UnderlinedText textClassName="font-sans font-semibold text-blue-700 dark:text-blue-400">
                  for complex private markets tax workflows
                </UnderlinedText>
              </>
            )}
          </h2>
        </div>

        {/* 8 Capability Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="
                tap-press
                group relative flex flex-col justify-between
                rounded-2xl
                border-2 border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-6 sm:p-7
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
              "
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    [{item.num}]
                  </span>

                </div>

                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
