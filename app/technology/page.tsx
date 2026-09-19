'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'

export default function TechnologyPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPlayed(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const fourPrinciples = [
    {
      num: '01',
      title: isGerman ? 'Kontrollierte Berechnungen' : 'Controlled Calculations',
      desc: isGerman
        ? 'Definierte Berechnungslogiken unterstützen konsistente und reproduzierbare Steuerberechnungen über Fonds- und Anteilsklassenstrukturen hinweg.'
        : 'Defined calculation logic supports consistent and reproducible tax calculations across fund and share-class structures.',
      points: isGerman
        ? [
            'Explizite und versionierte Berechnungslogik',
            'Konsistente Berechnungs- und Allokationsmethodik',
            'Reproduzierbare Ergebnisse auf Basis definierter Eingangsdaten und Steuerregeln',
          ]
        : [
            'Explicit and version-controlled calculation logic',
            'Consistent calculation and allocation methodology',
            'Reproducible results based on defined inputs and tax rules',
          ],
    },
    {
      num: '02',
      title: isGerman ? 'Durchgängige Nachvollziehbarkeit' : 'End-to-End Traceability',
      desc: isGerman
        ? 'Ausgewiesene Steuerwerte werden mit den zugrunde liegenden Quelldaten, Berechnungsschritten, Anpassungen und angewandten Steuerlogiken verknüpft.'
        : 'Connect reported tax values to underlying source data, calculation steps, adjustments, and applied tax logic.',
      points: isGerman
        ? [
            'Nachvollziehbarkeit von Quelldaten über Berechnungen bis zu ausgewiesenen Steuerwerten',
            'Transparente Historie von Berechnungen und Anpassungen',
            'Klare Verknüpfung zwischen angewandter Steuerlogik und zugrunde liegenden Fondsdaten',
          ]
        : [
            'Traceability from source data through calculations to reported tax values',
            'Transparent calculation and adjustment history',
            'Clear linkage between applied tax logic and underlying fund data',
          ],
    },
    {
      num: '03',
      title: isGerman ? 'Fachliche Prüfung & Kontrolle' : 'Professional Review & Control',
      desc: isGerman
        ? 'Wesentliche steuerliche Entscheidungen, Ausnahmen und Berechnungsergebnisse werden in strukturierte Prüf- und Freigabeprozesse eingebunden.'
        : 'Keep material tax decisions, exceptions, and calculation results within structured review and approval workflows.',
      points: isGerman
        ? [
            'Definierte Prüf- und Freigabeprozesse',
            'Strukturiertes Management von Ausnahmen und Abweichungen',
            'Dokumentierte Prüfentscheidungen und Anpassungen',
          ]
        : [
            'Defined review and approval workflows',
            'Structured exception and variance management',
            'Documented review decisions and adjustments',
          ],
    },
    {
      num: '04',
      title: isGerman ? 'Sicherer Umgang mit Daten' : 'Secure Data Handling',
      desc: isGerman
        ? 'Konzipiert für den kontrollierten Zugriff auf sensible Fonds-, Anleger- und Steuerdaten innerhalb der Plattformumgebung.'
        : 'Designed to support controlled access to sensitive fund, investor, and tax data within the platform environment.',
      points: isGerman
        ? [
            'Rollenbasierte Zugriffs- und Berechtigungskontrollen',
            'Trennung von Kunden- und Fondsdaten',
            'Kontrollierte Verarbeitung sensibler Finanz- und Steuerinformationen',
          ]
        : [
            'Role-based access and permission controls',
            'Segregation of client and fund data',
            'Controlled handling of sensitive financial and tax information',
          ],
    },
  ]

  const connectivityInterfaces = {
    inputs: [
      {
        title: isGerman ? 'Hauptbuch- & Saldenlistendaten' : 'GL & Trial Balance Data',
        sub: isGerman ? 'Kontensalden, Summen- & Saldenlisten & Buchungszeilen' : 'Ledger balances, trial balance feeds & journal entries',
        badge: isGerman ? 'HAUPTBUCH' : 'GENERAL LEDGER',
      },
      {
        title: 'Excel / CSV',
        sub: isGerman ? 'Strukturierte Dateipipelines für Tabellendaten & Arbeitspapiere' : 'Structured file pipelines for tabular data & workpapers',
        badge: isGerman ? 'DATEIEN' : 'FILE-BASED',
      },
      {
        title: isGerman ? 'REST-APIs' : 'REST APIs',
        sub: isGerman ? 'Direkte automatisierte System-zu-System-Schnittstellen' : 'Automated system-to-system data interfaces',
        badge: isGerman ? 'SCHNITTSTELLE' : 'SYSTEM API',
      },
      {
        title: isGerman ? 'Fondsadministrationsdaten' : 'Fund Administration Data',
        sub: isGerman ? 'NAV-Pakete, Anteilsklassenregister & Transaktionsdaten' : 'NAV packages, share-class registries & transaction records',
        badge: isGerman ? 'ADMINISTRATION' : 'ADMIN DATA',
      },
    ],
    layer: [
      {
        title: isGerman ? 'Strukturierte Datenformate' : 'Structured Data Formats',
        sub: isGerman ? 'Einheitliche Schemas, Validierung & Normalisierung von Rohdaten' : 'Unified schemas, validation & normalization of raw fund data',
        badge: isGerman ? 'SCHEMA' : 'SCHEMA ENGINE',
      },
    ],
    workflows: [
      {
        title: isGerman ? 'Steuerliche Reporting-Outputs' : 'Tax Reporting Outputs',
        sub: isGerman ? 'Prüfbare, standardisierte Exportformate für Berater & Behörden' : 'Review-ready, standardized deliverables for advisors & authorities',
        badge: isGerman ? 'REPORTING' : 'DELIVERABLES',
      },
    ],
  }

  const securityPillars = [
    {
      num: '01',
      title: isGerman ? 'Kontrollierter Zugriff' : 'Controlled Access',
      desc: isGerman
        ? 'Rollenbasierte Zugriffs- und Berechtigungskontrollen unterstützen dabei, den Zugriff auf die für die jeweiligen Aufgaben relevanten Fonds, Prozesse und Daten zu beschränken.'
        : 'Role-based access and permission controls help ensure that users access only the funds, workflows, and data relevant to their responsibilities.',
      subLabel: isGerman ? 'SICHERHEITSPRINZIPIEN' : 'SECURITY PRINCIPLES',
      points: isGerman
        ? [
            'Rollenbasierte Zugriffs- und Berechtigungsverwaltung',
            'Kontrollierter Zugriff auf Fonds, Prozesse und Reporting-Daten',
            'Benutzerzugriffe entsprechend definierter Rollen und Verantwortlichkeiten',
          ]
        : [
            'Role-based access and permission management',
            'Controlled access to funds, workflows, and reporting data',
            'User access aligned with defined roles and responsibilities',
          ],
    },
    {
      num: '02',
      title: isGerman ? 'Datentrennung' : 'Data Separation',
      desc: isGerman
        ? 'Konzipiert für eine klare Trennung von Kunden-, Fonds- und Prozessdaten innerhalb der Plattformumgebung.'
        : 'Designed to maintain clear separation between client, fund, and workflow data within the platform environment.',
      subLabel: isGerman ? 'SICHERHEITSPRINZIPIEN' : 'SECURITY PRINCIPLES',
      points: isGerman
        ? [
            'Logische Trennung von Kunden- und Fondsdaten',
            'Kontrollierte Zugriffsgrenzen innerhalb der Plattformumgebung',
            'Strukturierte Verarbeitung von Daten über Kunden und Prozesse hinweg',
          ]
        : [
            'Logical separation of client and fund data',
            'Controlled access boundaries between platform environments',
            'Structured handling of data across clients and workflows',
          ],
    },
    {
      num: '03',
      title: isGerman ? 'Prüfbarkeit' : 'Auditability',
      desc: isGerman
        ? 'Strukturierte Aktivitäts- und Berechnungsaufzeichnungen unterstützen die transparente Prüfung steuerlicher Prozesse, Berechnungen, Anpassungen und Freigaben.'
        : 'Structured activity and calculation records support transparent review of tax workflows, calculations, adjustments, and approvals.',
      subLabel: isGerman ? 'SICHERHEITS- & KONTROLLPRINZIPIEN' : 'SECURITY & CONTROL PRINCIPLES',
      points: isGerman
        ? [
            'Strukturierte Aufzeichnung von Berechnungs- und Prüfaktivitäten',
            'Dokumentation von Anpassungen, Ausnahmen und Freigaben',
            'Nachvollziehbare Prozesshistorie zur Unterstützung fachlicher Prüfungen',
          ]
        : [
            'Structured records of calculation and review activities',
            'Documented adjustments, exceptions, and approvals',
            'Traceable workflow history supporting professional review',
          ],
    },
    {
      num: '04',
      title: isGerman ? 'Datenschutz & Datensicherheit' : 'Data Protection',
      desc: isGerman
        ? 'Konzipiert für den sicheren Umgang mit sensiblen Finanz-, Fonds-, Anleger- und Steuerdaten.'
        : 'Designed to support the secure handling of sensitive financial, fund, investor, and tax data.',
      subLabel: isGerman ? 'SICHERHEITSPRINZIPIEN' : 'SECURITY PRINCIPLES',
      points: isGerman
        ? [
            'Kontrollierte Verarbeitung sensibler Finanz- und Steuerinformationen',
            'Definierte Zugriffs- und Datenschutzkontrollen',
            'Sicherheitsmaßnahmen ausgerichtet auf institutionelle Datenanforderungen',
          ]
        : [
            'Controlled handling of sensitive financial and tax information',
            'Defined access and data protection controls',
            'Security measures designed around institutional data requirements',
          ],
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f0f4f9] px-4 pb-20 pt-28 text-foreground transition-colors duration-200 dark:bg-[#080d1a] sm:px-6 sm:pt-32 lg:px-[5vw] lg:pt-36">
      {/* Ambient Blue Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)] blur-3xl" />
      
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15 bg-[linear-gradient(rgba(30,58,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative z-10 mx-auto max-w-[1420px]">

        {/* =========================================================
            1. TECHNOLOGY HERO: Two-Column Authoritative Layout
        ========================================================== */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Hero Column: Headline & Architectural Thesis */}
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1.5 backdrop-blur-md dark:border-blue-900/60 dark:bg-blue-950/40">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="font-mono text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
                {isGerman ? 'TECHNOLOGIEARCHITEKTUR' : 'TECHNOLOGY ARCHITECTURE'}
              </span>
            </div>

            <h1 className="text-3xl font-normal leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[54px]">
              {isGerman ? (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Kontrollierte Automatisierung{' '}
                  </span>
                  für{' '}
                  <span className="relative inline-block whitespace-nowrap px-1">
                    <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                      komplexe
                    </span>
                    <svg
                      className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-blue-500/80 dark:text-blue-400 overflow-visible"
                      viewBox="0 0 300 20"
                      fill="none"
                    >
                      <path
                        d="M3 14.5C65 5.5 170 -1.5 295 11.5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className={animationPlayed ? 'ink-path' : ''}
                        style={{ '--len': 320, '--dur': '1.3s', '--delay': '0.3s' } as React.CSSProperties}
                      />
                    </svg>
                  </span>{' '}
                  <span className="font-sans font-semibold">Steuerprozesse.</span>
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Controlled automation{' '}
                  </span>
                  for{' '}
                  <span className="relative inline-block whitespace-nowrap px-1">
                    <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                      complex
                    </span>
                    <svg
                      className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-blue-500/80 dark:text-blue-400 overflow-visible"
                      viewBox="0 0 300 20"
                      fill="none"
                    >
                      <path
                        d="M3 14.5C65 5.5 170 -1.5 295 11.5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className={animationPlayed ? 'ink-path' : ''}
                        style={{ '--len': 320, '--dur': '1.3s', '--delay': '0.3s' } as React.CSSProperties}
                      />
                    </svg>
                  </span>{' '}
                  <span className="font-sans font-semibold">tax workflows.</span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              {isGerman
                ? 'ZYVORIS verbindet strukturierte Fondsdaten, kontrollierte Steuerlogik, nachvollziehbare Berechnungen und fachliche Prüfung in einer integrierten Technologiearchitektur.'
                : 'ZYVORIS combines structured fund data, controlled tax logic, traceable calculations, and professional review within one integrated technology architecture.'}
            </p>

            {/* Core Architectural Principle Callout */}
            <div className="mt-8 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0c152a] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  {isGerman ? 'ZENTRALES ARCHITEKTURPRINZIP' : 'CORE ARCHITECTURAL PRINCIPLE'}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  {isGerman ? 'KI für Interpretation. ' : 'AI for interpretation. '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                  {isGerman ? 'Kontrollierte Logik für Berechnungen.' : 'Controlled logic for calculation.'}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {isGerman
                  ? 'KI-gestützte Prozesse unterstützen Datenextraktion, Strukturierung, Mapping und Klassifizierung. Steuerberechnungen und Allokationen werden anhand definierter und kontrollierter Berechnungslogiken ausgeführt, sodass Interpretation und numerische Verarbeitung klar voneinander getrennt bleiben.'
                  : 'AI-assisted workflows support data extraction, structuring, mapping, and classification. Tax calculations and allocations are executed through defined, controlled calculation logic, keeping interpretation separate from numerical processing.'}
              </p>
            </div>

            {/* Architecture Principles Header & List */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                {isGerman ? 'Architekturprinzipien' : 'Architecture Principles'}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { en: 'CONTROLLED CALCULATIONS', de: 'KONTROLLIERTE BERECHNUNGEN' },
                  { en: 'SOURCE-TO-OUTPUT TRACEABILITY', de: 'SOURCE-TO-OUTPUT-NACHVOLLZIEHBARKEIT' },
                  { en: 'DEFINED TAX LOGIC', de: 'DEFINIERTE STEUERLOGIK' },
                  { en: 'PROFESSIONAL REVIEW', de: 'FACHLICHE PRÜFUNG' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-white dark:bg-slate-900/90 px-3 py-1.5 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 shadow-xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{isGerman ? item.de : item.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Architectural Console Specification */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0c152a] overflow-hidden shadow-2xl">
              {/* Console Top Chrome */}
              <div className="flex items-center justify-between border-b-2 border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/90 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                    {isGerman ? 'ENGINE_TOPOLOGIE.SPEC' : 'ENGINE_TOPOLOGY.SPEC'}
                  </span>
                </div>
                <span className="rounded bg-blue-100 dark:bg-blue-950/80 px-2 py-0.5 font-mono text-[9.5px] font-bold text-blue-800 dark:text-blue-300">
                  {isGerman ? 'KONTROLLIERT' : 'CONTROLLED'}
                </span>
              </div>

              {/* Console Body: Dual-Engine Partition */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Layer 1: Data & Interpretation */}
                <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      {isGerman ? 'EBENE 01 // DATEN & INTERPRETATION' : 'LAYER 01 // DATA & INTERPRETATION'}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-blue-600 dark:text-blue-400">
                      {isGerman ? 'KI-GESTÜTZT' : 'AI-ASSISTED'}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {(isGerman
                      ? [
                          'Dokumenten- & Datenextraktion',
                          'Strukturierung & Standardisierung von Finanzdaten',
                          'Schema-Mapping & Klassifizierung',
                          'Identifikation von Ausnahmen & Auffälligkeiten',
                        ]
                      : [
                          'Document & data extraction',
                          'Financial data structuring & normalization',
                          'Schema mapping & classification',
                          'Exception & anomaly identification',
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-blue-500">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hard Partition Boundary */}
                <div className="relative py-2 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-dashed border-blue-300 dark:border-blue-700" />
                  </div>
                  <span className="relative z-10 rounded-full border border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-900 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                    {isGerman ? 'KONTROLLIERTE VERARBEITUNGSGRENZE' : 'CONTROLLED PROCESSING BOUNDARY'}
                  </span>
                </div>

                {/* Layer 2: Tax Calculation Core */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                      {isGerman ? 'EBENE 02 // KERN DER STEUERBERECHNUNG' : 'LAYER 02 // TAX CALCULATION CORE'}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-blue-600 dark:text-blue-400">
                      {isGerman ? 'KONTROLLIERT' : 'CONTROLLED'}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {(isGerman
                      ? [
                          'Länderspezifische Steuerregeln & Klassifizierungen',
                          'Kontrollierte Steuerberechnungen & Anpassungen',
                          'Allokationen auf Fonds- & Anteilsklassenebene',
                          'Nachvollziehbare Berechnungen & strukturierte Outputs',
                        ]
                      : [
                          'Jurisdiction-specific tax rules & classifications',
                          'Controlled tax calculations & adjustments',
                          'Fund & share-class allocations',
                          'Calculation traceability & structured outputs',
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-500">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Verification Bar */}
                <div className="rounded-lg bg-slate-900 dark:bg-slate-950 p-3 text-white font-mono text-[11px] flex items-center justify-between">
                  <span className="text-slate-400">
                    {isGerman ? 'VERARBEITUNGSMODUS:' : 'EXECUTION MODE:'}
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {isGerman ? 'KONTROLLIERT & NACHVOLLZIEHBAR' : 'CONTROLLED & TRACEABLE'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. ARCHITECTURAL PRINCIPLES: Numbered Detail Points with Bullet Points
        ========================================================== */}
        <section className="mt-20 sm:mt-28">
          <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {isGerman ? 'ARCHITEKTURPRINZIPIEN' : 'ARCHITECTURAL PRINCIPLES'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-950 dark:text-white">
              {isGerman ? (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Eine Architektur{' '}
                  </span>
                  für Kontrolle, Nachvollziehbarkeit und fachliche Prüfung.
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Architecture designed{' '}
                  </span>
                  for control, traceability, and professional oversight.
                </>
              )}
            </h2>
          </div>

          {/* Numbered Detail Points List (Clean points instead of generic box cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {fourPrinciples.map((item) => (
              <div
                key={item.num}
                className="
                  rounded-3xl
                  border-2 border-slate-200 dark:border-slate-800
                  bg-white dark:bg-[#0c152a]
                  p-7 sm:p-8
                  shadow-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
                "
              >
                {/* Number & Title */}
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 dark:bg-slate-800 font-mono text-sm font-bold text-white">
                    {item.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Core Summary Description */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>

                {/* Structured Bullet Points */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    {isGerman ? 'DESIGNPRINZIPIEN' : 'DESIGN PRINCIPLES'}
                  </span>
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                      <span className="leading-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            3. DATA CONNECTIVITY & FLOW
        ========================================================== */}
        <section className="mt-20 sm:mt-28 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-7 sm:p-10 lg:p-12 shadow-sm">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              {isGerman ? 'DATENANBINDUNG' : 'DATA CONNECTIVITY'}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-slate-950 dark:text-white">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Entwickelt für die Integration in Ihre{' '}
                </span>
                <span className="font-sans font-semibold">bestehende Datenlandschaft.</span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Designed to work with your{' '}
                </span>
                <span className="font-sans font-semibold">existing data environment.</span>
              </>
            )}
          </h2>

          {/* Lead Paragraph */}
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {isGerman
              ? 'ZYVORIS bindet strukturierte Finanz- und Fondsdaten über unterstützte APIs und dateibasierte Schnittstellen an und integriert steuerliche Prozesse in bestehende Accounting-, Fondsadministrations- und Datensysteme.'
              : 'ZYVORIS connects to structured financial and fund data through supported APIs and file-based interfaces—integrating tax workflows with existing accounting, fund administration, and data systems.'}
          </p>

          {/* Value Callout Badge */}
          <div className="mt-4 inline-flex items-center gap-2.5 rounded-xl border border-blue-200/80 bg-blue-50/70 px-4 py-2 text-xs sm:text-sm font-medium text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
            <span>
              {isGerman
                ? 'Steuerprozesse modernisieren, ohne bestehende Kernsysteme ersetzen zu müssen.'
                : 'Modernize tax workflows without replacing your existing core systems.'}
            </span>
          </div>

          {/* Visual Architecture Flow: SOURCE SYSTEMS → ZYVORIS DATA LAYER → TAX WORKFLOWS */}
          <div className="mt-10 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#080d1a] p-5 sm:p-7">
            {/* Flow Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {isGerman ? 'UNTERSTÜTZTE DATENSCHNITTSTELLEN' : 'SUPPORTED DATA INTERFACES'}
                </span>
              </div>
              
              {/* Flow Sequence Pipeline: SOURCE SYSTEMS → ZYVORIS DATA LAYER → TAX WORKFLOWS */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[10.5px] sm:text-[11px] font-bold">
                <span className="rounded-md border border-blue-200 dark:border-blue-900/60 bg-white dark:bg-blue-950/50 px-2.5 py-1 text-blue-800 dark:text-blue-300 shadow-2xs">
                  {isGerman ? 'QUELLSYSTEME' : 'SOURCE SYSTEMS'}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm">→</span>
                <span className="rounded-md border border-blue-200 dark:border-blue-900/60 bg-white dark:bg-blue-950/50 px-2.5 py-1 text-blue-800 dark:text-blue-300 shadow-2xs">
                  {isGerman ? 'ZYVORIS DATEN-LAYER' : 'ZYVORIS DATA LAYER'}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm">→</span>
                <span className="rounded-md border border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-emerald-950/50 px-2.5 py-1 text-emerald-800 dark:text-emerald-300 shadow-2xs">
                  {isGerman ? 'STEUER-WORKFLOWS' : 'TAX WORKFLOWS'}
                </span>
              </div>
            </div>

            {/* 3 Columns Pipeline Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {/* STAGE 1: SOURCE SYSTEMS (INPUTS) */}
              <div className="flex flex-col rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 dark:bg-slate-800 font-mono text-[11px] font-bold text-white">
                      01
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {isGerman ? 'QUELLSYSTEME' : 'SOURCE SYSTEMS'}
                    </span>
                  </div>
                  <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[9px] font-bold text-slate-700 dark:text-slate-300">
                    {isGerman ? 'EINGANG' : 'INPUTS'}
                  </span>
                </div>

                {/* The 4 Inputs */}
                <div className="space-y-2.5 flex-1">
                  {connectivityInterfaces.inputs.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-3 transition hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-950 dark:text-white">
                          {item.title}
                        </span>
                        <span className="font-mono text-[8.5px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {item.sub}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    {isGerman ? 'Direkte Anbindung ohne Systemwechsel' : 'Direct integration without replacement'}
                  </span>
                </div>
              </div>

              {/* STAGE 2: ZYVORIS DATA LAYER (PROCESSING & SCHEMA) */}
              <div className="flex flex-col rounded-2xl border-2 border-blue-600/30 dark:border-blue-500/40 bg-white dark:bg-[#0c152a] p-5 shadow-xs relative">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-500 font-mono text-[11px] font-bold text-white">
                      02
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-950 dark:text-blue-200">
                      {isGerman ? 'ZYVORIS DATEN-LAYER' : 'ZYVORIS DATA LAYER'}
                    </span>
                  </div>
                  <span className="rounded bg-blue-100 dark:bg-blue-950 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-800 dark:text-blue-300">
                    {isGerman ? 'VERARBEITUNG' : 'PROCESSING'}
                  </span>
                </div>

                {/* Middle Processing Engine & Format */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {connectivityInterfaces.layer.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 p-3.5"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-blue-950 dark:text-blue-200">
                          {item.title}
                        </span>
                        <span className="font-mono text-[8.5px] font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/60 px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                        {item.sub}
                      </p>
                    </div>
                  ))}

                  <div className="space-y-2 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 p-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-blue-600 dark:text-blue-400">›</span>
                      <span>{isGerman ? 'Automatisiertes Schema-Mapping' : 'Automated schema mapping'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-blue-600 dark:text-blue-400">›</span>
                      <span>{isGerman ? 'Format- & Einheitenstandardisierung' : 'Format & currency normalization'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-blue-600 dark:text-blue-400">›</span>
                      <span>{isGerman ? 'Kontrollierte Schnittstellenvalidierung' : 'Controlled boundary validation'}</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-blue-50 dark:bg-blue-950/40 p-2 text-center">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                      {isGerman ? 'KONTROLLIERTE VERARBEITUNG' : 'CONTROLLED INGESTION'}
                    </span>
                  </div>
                </div>
              </div>

              {/* STAGE 3: TAX WORKFLOWS (OUTPUTS) */}
              <div className="flex flex-col rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 dark:bg-slate-800 font-mono text-[11px] font-bold text-white">
                      03
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {isGerman ? 'STEUER-WORKFLOWS' : 'TAX WORKFLOWS'}
                    </span>
                  </div>
                  <span className="rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-700 dark:text-emerald-300">
                    {isGerman ? 'AUSGABE' : 'OUTPUTS'}
                  </span>
                </div>

                {/* Outputs & Deliverables */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {connectivityInterfaces.workflows.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 transition hover:border-emerald-400"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-slate-950 dark:text-white">
                          {item.title}
                        </span>
                        <span className="font-mono text-[8.5px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                        {item.sub}
                      </p>
                    </div>
                  ))}

                  <div className="space-y-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-emerald-500">✓</span>
                      <span>{isGerman ? 'Fondsebenen-Steuerberechnungen' : 'Fund-level tax calculations'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-emerald-500">✓</span>
                      <span>{isGerman ? 'Anteilsklassen-Allokationen' : 'Share-class tax allocations'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-emerald-500">✓</span>
                      <span>{isGerman ? 'Revisionssichere Steuerberichte' : 'Audit-ready reporting packs'}</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-2 text-center">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      {isGerman ? 'NACHVOLLZIEHBAR & REVISIONSSICHER' : 'TRACEABLE & AUDIT-READY'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. SECURITY & CONTROL: Numbered Institutional Points
        ========================================================== */}
        <section className="mt-20 sm:mt-28">
          <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {isGerman ? 'SICHERHEIT & KONTROLLE' : 'SECURITY & CONTROL'}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {isGerman ? 'Entwickelt für ' : 'Designed for '}
              </span>
              {isGerman ? 'sensible Finanz- und Steuerdaten.' : 'sensitive financial and tax data.'}
            </h2>
          </div>

          {/* Numbered Security Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {securityPillars.map((card) => (
              <div
                key={card.num}
                className="
                  rounded-3xl
                  border-2 border-slate-200 dark:border-slate-800
                  bg-white dark:bg-[#0c152a]
                  p-7 sm:p-8
                  shadow-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
                "
              >
                {/* Number & Title */}
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 dark:bg-slate-800 font-mono text-sm font-bold text-white">
                    {card.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.desc}
                </p>

                {/* Structured Security Points */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    {card.subLabel}
                  </span>
                  {card.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                      <span className="leading-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}