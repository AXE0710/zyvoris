'use client'

import React from 'react'
import { useLanguage } from './language-provider'

interface TechCategory {
  num: string
  titleEn: string
  titleDe: string
  badge: string
  badgeColor: string
  descEn: string
  descDe: string
  technologies: {
    name: string
    role: string
    roleDe: string
    spec: string
  }[]
}

export default function TechStackSection() {
  const { language } = useLanguage()

  const TECH_CATEGORIES: TechCategory[] = [
    {
      num: '01',
      titleEn: 'Institutional Frontend Application',
      titleDe: 'Institutionelle Frontend-Applikation',
      badge: 'PRODUCTION UI',
      badgeColor: 'border-blue-600/40 bg-blue-500/10 text-blue-700 dark:border-blue-500/40 dark:text-blue-300',
      descEn:
        'Client-side application built for sub-second reactive interactions, high-density financial tables, and client-side workbook validation.',
      descDe:
        'Client-Applikation für reaktive Interaktionen, hochdichte Finanztabellen und clientseitige Validierung von Arbeitsmappen.',
      technologies: [
        {
          name: 'React 18 & Vite 5',
          role: 'Core Runtime & Build System',
          roleDe: 'Kern-Runtime & Build-System',
          spec: 'ES Modules, Fast HMR, component tree scoping',
        },
        {
          name: 'BigNumber.js',
          role: 'Financial Arithmetic',
          roleDe: 'Finanzmathematische Arithmetik',
          spec: 'Arbitrary-precision decimal arithmetic avoiding IEEE 754 float drift',
        },
        {
          name: 'SheetJS (xlsx)',
          role: 'Client-Side Ingestion',
          roleDe: 'Clientseitige Dokumentenerfassung',
          spec: 'Direct in-browser parsing of fund NAV, trial balances & LP registers',
        },
        {
          name: 'Tailwind CSS v3 & Lucide',
          role: 'Institutional Design System',
          roleDe: 'Institutionelles Design-System',
          spec: 'Dark luxury styling, glassmorphism, responsive grid layouts',
        },
        {
          name: 'Framer Motion & Recharts',
          role: 'Micro-Interactions & Analytics',
          roleDe: 'Mikrointeraktionen & Analytik',
          spec: 'Hardware-accelerated transitions & allocation charts',
        },
      ],
    },
    {
      num: '02',
      titleEn: 'Backend API & Worker Infrastructure',
      titleDe: 'Backend-API & Worker-Infrastruktur',
      badge: 'DISTRIBUTED SERVICES',
      badgeColor: 'border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-300',
      descEn:
        'Asynchronous job pipelines and resilient RESTful API services handling heavy spreadsheet ingestion and tax workflow orchestration.',
      descDe:
        'Asynchrone Job-Pipelines und RESTful API-Services für performante Tabellenverarbeitung und Steuer-Orchestrierung.',
      technologies: [
        {
          name: 'Node.js & Express 5',
          role: 'Application Server',
          roleDe: 'Applikationsserver',
          spec: 'Stateless REST endpoints, strict request validation, CORS middleware',
        },
        {
          name: 'PostgreSQL (via pg)',
          role: 'Relational Persistence',
          roleDe: 'Relationale Persistenz',
          spec: 'Connection pooling, dynamic parameter mapping, scoped SQL queries',
        },
        {
          name: 'BullMQ & Redis (ioredis)',
          role: 'Job Queue & Workers',
          roleDe: 'Job-Warteschlangen & Worker',
          spec: 'Background parsing, asynchronous taxonomy mapping, worker isolation',
        },
        {
          name: 'JWT & bcryptjs',
          role: 'Security & Authentication',
          roleDe: 'Sicherheit & Authentifizierung',
          spec: 'Stateless bearer tokens, salted credential hashing, role-based guards',
        },
        {
          name: 'Jest',
          role: 'Automated Testing',
          roleDe: 'Automatisierte Tests',
          spec: 'Automated unit, integration, and regression test suites',
        },
      ],
    },
    {
      num: '03',
      titleEn: 'Deterministic Tax Calculation Engines',
      titleDe: 'Deterministische Steuerberechnungs-Engines',
      badge: 'AUDITABLE MATH',
      badgeColor: 'border-amber-600/40 bg-amber-500/10 text-amber-700 dark:border-amber-500/40 dark:text-amber-300',
      descEn:
        'Strictly codified, rule-based execution environments that eliminate probabilistic guesswork from numerical tax allocations.',
      descDe:
        'Kodifizierte, regelbasierte Ausführungsumgebungen ohne probabilistische Schätzungen bei numerischen Steuerallokationen.',
      technologies: [
        {
          name: 'json-rules-engine',
          role: 'Statutory Rule Evaluation',
          roleDe: 'Gesetzliche Regelevaluation',
          spec: 'Declarative, version-controlled compliance logic & criteria gates',
        },
        {
          name: 'expr-eval',
          role: 'Mathematical Expression Engine',
          roleDe: 'Mathematische Formel-Engine',
          spec: 'Safe string formula evaluation for adjustments, waterfall & capital splits',
        },
        {
          name: 'YAML Rule Packs',
          role: 'Jurisdictional Tax Packs',
          roleDe: 'Jurisdiktions-Regelpakete',
          spec: 'Modular tax specifications (e.g. CH_rule_pack.yaml, KS24 circulars)',
        },
        {
          name: 'Server-Side SheetJS',
          role: 'Spreadsheet Parsing & Validation',
          roleDe: 'Tabellenverarbeitung & Validierung',
          spec: 'Normalization of trial balances, NAV sheets, and income statements',
        },
      ],
    },
    {
      num: '04',
      titleEn: 'Data Science & Financial Models',
      titleDe: 'Data Science & Finanzmodelle',
      badge: 'SCIENTIFIC COMPUTING',
      badgeColor: 'border-sky-600/40 bg-sky-500/10 text-sky-700 dark:border-sky-500/40 dark:text-sky-300',
      descEn:
        'Vectorized financial modeling and reference spreadsheets utilized for scenario testing, engine cross-validation, and prototyping.',
      descDe:
        'Vektorisierte Finanzmodellierung und Referenz-Arbeitsmappen für Szenario-Validierung und mathematische Eichung.',
      technologies: [
        {
          name: 'Python 3 (Pandas / NumPy)',
          role: 'Tax Modeling Prototyping',
          roleDe: 'Steuermodell-Prototyping',
          spec: 'High-speed matrix calculations and Swiss Meldesheet allocation algorithms',
        },
        {
          name: 'Financial Benchmark Models',
          role: 'Scenario Testing & Seeding',
          roleDe: 'Szenariotests & Validierung',
          spec: 'Curated institutional Excel calculation workbooks (.xlsx) for engine validation',
        },
        {
          name: 'Multi-Driver DB Support',
          role: 'Adapter Compatibility',
          roleDe: 'Treiber-Kompatibilität',
          spec: 'PostgreSQL primary with optional adapter support for MySQL & SQLite',
        },
      ],
    },
  ]

  return (
    <section
      id="tech-stack"
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
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'PRODUKTIONSTECHNOLOGIE & RUNTIME' : 'IMPLEMENTED CORE ARCHITECTURE'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
              {language === 'de' ? 'Der technische' : 'The implemented'}{' '}
              <span className="text-blue-600 dark:text-blue-400 sm:whitespace-nowrap">
                {language === 'de' ? 'Technologie-Stack' : 'technology stack'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Volle Transparenz für technische Due-Diligence: ZYVORIS stützt sich auf eine erprobte, deterministische Architektur aus modernen Web-Standards, asynchronen Warteschlangen und mathematisch präzisen Rechen-Engines.'
              : 'Full transparency for institutional due diligence: ZYVORIS is built upon a verified, deterministic architecture combining modern web standards, asynchronous queues, and high-precision rule engines.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.num}
              className="
                flex flex-col justify-between
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-8
                shadow-sm
                transition-all duration-150
                hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{cat.num}]
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      {language === 'de' ? cat.titleDe : cat.titleEn}
                    </span>
                  </div>
                  <span
                    className={`rounded-md border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase ${cat.badgeColor}`}
                  >
                    {cat.badge}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
                  {language === 'de' ? cat.descDe : cat.descEn}
                </p>

                {/* Tech List */}
                <div className="mt-5 space-y-2.5">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        rounded-xl
                        border border-slate-200 dark:border-slate-800
                        bg-slate-50/70 dark:bg-slate-800/40
                        p-3
                        transition-all duration-150
                        hover:border-slate-900 dark:hover:border-slate-600
                      "
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="font-mono text-xs font-extrabold text-slate-950 dark:text-white">
                          {tech.name}
                        </span>
                        <span className="font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                          {language === 'de' ? tech.roleDe : tech.role}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                        {tech.spec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Implementation Status
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  Active In Current Codebase
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
