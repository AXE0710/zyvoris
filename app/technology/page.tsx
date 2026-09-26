'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import UnderlinedText from '@/components/underlined-text'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function TechnologyPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const [activeStep, setActiveStep] = useState(0)

  const ingressSources = [
    {
      num: '01',
      title: isGerman ? 'Hauptbuch & Saldenlisten' : 'General Ledger & Trial Balances',
      desc: isGerman
        ? 'Kontensalden, Buchungszeilen und Summen- und Saldenlisten direkt aus Ihren Buchhaltungssystemen.'
        : 'Ledger balances, trial balance feeds, and journal entries direct from accounting systems.',
    },
    {
      num: '02',
      title: isGerman ? 'Tabellen & Arbeitsdateien' : 'Excel & CSV Workpapers',
      desc: isGerman
        ? 'Strukturierte Tabellendaten, Bewertungsmodelle und Transaktionsaufstellungen ohne manuelle Neueingabe.'
        : 'Structured spreadsheet pipelines, valuation schedules, and distribution records without manual re-keying.',
    },
    {
      num: '03',
      title: isGerman ? 'Automatisierte Schnittstellen' : 'Direct Custody & System APIs',
      desc: isGerman
        ? 'Direkte automatisierte System-zu-System-Verbindungen für Depotbanken und Datenprovider.'
        : 'Automated institutional system-to-system connections for custodians and market data providers.',
    },
    {
      num: '04',
      title: isGerman ? 'Fondsadministrationsdaten' : 'Fund Administration Feeds',
      desc: isGerman
        ? 'Offizielle NAV-Pakete, Anteilsklassenregister und historische Kapitalabrufe.'
        : 'Official NAV packages, share-class registries, capital call records, and investor registers.',
    },
  ]

  const lifecycleStages = [
    {
      num: '01',
      title: isGerman ? 'Strukturieren' : 'Structure',
      headline: isGerman ? 'Einheitliches Fondsschema' : 'Unified Fund Schema',
      desc: isGerman
        ? 'Eingehende Finanzdaten werden automatisch normalisiert, Währungen harmonisiert und in ein konsistentes Datenmodell überführt.'
        : 'Incoming financial data is normalized into a unified data model, harmonizing currencies, dates, and entity hierarchies.',
    },
    {
      num: '02',
      title: isGerman ? 'Validieren' : 'Validate',
      headline: isGerman ? 'Lückenlose Integritätsprüfung' : 'Comprehensive Integrity Verification',
      desc: isGerman
        ? 'Automatische Abstimmung gegen doppelte Buchführung, Saldenparität und Perioden-Konsistenz vor jeder Berechnung.'
        : 'Automated verification against double-entry principles, trial-balance equality, and cross-period consistency before calculation.',
    },
    {
      num: '03',
      title: isGerman ? 'Berechnen' : 'Calculate',
      headline: isGerman ? 'Deterministische Steuerlogik' : 'Deterministic Tax Rules Engine',
      desc: isGerman
        ? 'Explizite und versionierte Steuerregeln für gewerbesteuerliche Kürzungen, Teilfreistellungen und DBA-Freigaben.'
        : 'Explicit, version-controlled tax calculation logic for statutory exemptions, treaty relief, and capital gain recognition.',
    },
    {
      num: '04',
      title: isGerman ? 'Allokieren' : 'Allocate',
      headline: isGerman ? 'Mehrklassen-Steuerallokation' : 'Multi-Class Tax Allocation',
      desc: isGerman
        ? 'Aufteilung des steuerlichen Fondsergebnisses auf Anteilsklassen anhand definierter Allokationstreiber, klassenspezifischer Merkmale, Währungsparameter und anwendbarer Steuerlogik.'
        : 'Allocate fund-level tax results across share classes using defined allocation drivers, class-specific characteristics, currency parameters, and applicable tax logic.',
    },
    {
      num: '05',
      title: isGerman ? 'Prüfen' : 'Review',
      headline: isGerman ? 'Fachliche Freigabe & Kontrolle' : 'Professional Sign-Off & Verification',
      desc: isGerman
        ? 'Strukturierter Prüf- und Freigabeprozess für Steuerberater mit vollständiger Dokumentation aller Anpassungen.'
        : 'Structured review and sign-off workflow for tax advisors with full documentation of decisions and adjustments.',
    },
    {
      num: '06',
      title: isGerman ? 'Berichten' : 'Report',
      headline: isGerman ? 'Prüfbereite Reporting-Outputs' : 'Review-Ready Reporting Outputs',
      desc: isGerman
        ? 'Erstellung prüffähiger Steuerberichte, behördlicher XML-Meldungen und individueller Anleger-Ertragsaufstellungen.'
        : 'Production of review-ready tax reporting packages, regulatory XML exports, and individualized investor tax statements.',
    },
  ]

  const securityPoints = [
    {
      title: isGerman ? 'Kontrollierter Zugriff' : 'Controlled Access',
      desc: isGerman
        ? 'Rollenbasierte Zugriffs- und Freigabekontrollen für Mandanten, Fonds und Prozesse.'
        : 'Role-based access permissions restricting visibility strictly to relevant fund workflows.',
    },
    {
      title: isGerman ? 'Klare Datentrennung' : 'Strict Separation',
      desc: isGerman
        ? 'Strikte logische Trennung aller Kunden- und Fondsdaten ohne wechselseitigen Datenzugriff.'
        : 'Complete logical segregation of client, fund, and investor data environments.',
    },
    {
      title: isGerman ? 'Lückenlose Nachvollziehbarkeit' : 'Audit Lineage',
      desc: isGerman
        ? 'Jeder Berechnungsschritt ist von der Ausgangsbuchung bis zum Steuerbericht dokumentiert.'
        : 'End-to-end traceability linking final reported values directly to source financial records.',
    },
    {
      title: isGerman ? 'Schutz sensibler Daten' : 'Data Protection',
      desc: isGerman
        ? 'Höchste Standards für Finanzdaten in europäischen, zertifizierten Rechenzentren.'
        : 'Enterprise-grade encryption and hosting within sovereign European data centers.',
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-[#070c18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top spacing below header */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-28 space-y-16 sm:space-y-32">
        
        {/* =========================================================
            1. LARGE OPEN HERO: Bold, Confident, No Cards
        ========================================================== */}
        <section className="text-center space-y-6 sm:space-y-8">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
            {isGerman ? 'Technologie & Architektur' : 'Technology & Architecture'}
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.12] sm:leading-[1.08] break-words">
            {isGerman ? (
              <>
                Kontrollierte Automatisierung für{' '}
                <UnderlinedText textClassName="font-serif italic font-normal text-blue-700 dark:text-blue-400">
                  komplexe
                </UnderlinedText>{' '}
                Steuerprozesse.
              </>
            ) : (
              <>
                Controlled automation for{' '}
                <UnderlinedText textClassName="font-serif italic font-normal text-blue-700 dark:text-blue-400">
                  complex
                </UnderlinedText>{' '}
                tax workflows.
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal">
            {isGerman
              ? 'ZYVORIS verbindet strukturierte Fondsdaten, kontrollierte Steuerlogik, nachvollziehbare Berechnungen und fachliche Prüfung in einer durchgängigen Plattform.'
              : 'ZYVORIS combines structured fund data, controlled tax logic, traceable calculations, and professional review in one continuous platform.'}
          </p>
        </section>

        {/* =========================================================
            2. INGRESS: 4 Streams Converging into Core (Open Flow)
        ========================================================== */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-12 sm:pt-16 space-y-8 sm:space-y-12">
          
          <div className="space-y-3 sm:space-y-4">
         
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-950 dark:text-white tracking-tight break-words">
              {isGerman
                ? 'Integration in Ihre bestehende Datenlandschaft.'
                : 'Direct integration with your existing data environment.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {isGerman
                ? 'Kein Systemwechsel erforderlich. ZYVORIS bindet Daten über bewährte Schnittstellen an und führt unterschiedliche Quellen in einem zentralen Rechenmodell zusammen.'
                : 'No system replacement required. ZYVORIS connects via standard interfaces, unifying disparate feeds into a single structured calculation model.'}
            </p>
          </div>

          {/* 4 Streams List - Open, Clean, Large Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4">
            {ingressSources.map((item) => (
              <div key={item.num} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-bold text-blue-600 dark:text-blue-400">
                    {item.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Central Convergence Connector */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex items-center justify-between flex-wrap gap-4 text-slate-500 font-mono text-sm">
            <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              {isGerman
                ? 'Zentraler Datenkern · Einheitliches Schema · Saldenabstimmung'
                : 'Structured Data Core · Unified Schema · Trial Balance Reconciliation'}
            </span>
          </div>

        </section>

        {/* =========================================================
            3. THE LIFECYCLE: Structure → Validate → Calculate → Allocate → Review → Report
        ========================================================== */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-12 sm:pt-16 space-y-8 sm:space-y-14">
          
          <div className="space-y-3 sm:space-y-4">
          
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-950 dark:text-white tracking-tight break-words">
              {isGerman
                ? 'Vom Rohdatensatz zum prüfbereiten Steuerergebnis.'
                : 'From raw ledger records to review-ready tax deliverables.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {isGerman
                ? 'Sechs klar definierte Phasen gewährleisten Konsistenz, Nachvollziehbarkeit und fachliche Kontrolle.'
                : 'Six clearly defined stages ensure mathematical consistency, complete traceability, and professional review.'}
            </p>
          </div>

          {/* Large Open Step Sequence */}
          <div className="space-y-6 sm:space-y-8 divide-y divide-slate-200 dark:divide-slate-800">
            {lifecycleStages.map((stg, idx) => (
              <div
                key={stg.num}
                onClick={() => setActiveStep(idx)}
                className={`pt-6 sm:pt-8 cursor-pointer transition-colors ${
                  activeStep === idx ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="font-mono text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">
                      {stg.num}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                      {stg.title}
                    </h3>
                  </div>

                  <div className="md:col-span-4">
                    <span className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200">
                      {stg.headline}
                    </span>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-1 md:mt-0">
                      {stg.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================
            4. ALLOCATION: Multi-Tier Share Class Breakdown (Open Numbers)
        ========================================================== */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-12 sm:pt-16 space-y-8 sm:space-y-12">
          
          <div className="space-y-3 sm:space-y-4">
          
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-950 dark:text-white tracking-tight break-words">
              {isGerman
                ? 'Aufteilung des steuerlichen Fondsergebnisses auf Anteilsklassen.'
                : 'Allocating fund-level tax results across distinct share classes.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {isGerman
                ? 'Steuerliche Fondsergebnisse werden anhand definierter Allokationstreiber, klassenspezifischer Merkmale, Währungsparameter und anwendbarer Steuerlogik auf Anteilsklassen aufgeteilt.'
                : 'Fund-level tax results are allocated across share classes using defined allocation drivers, class-specific characteristics, currency parameters, and applicable tax logic.'}
            </p>
          </div>

          {/* Large Open Stat Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="space-y-1.5 sm:space-y-2 border-l-2 border-blue-600 dark:border-blue-400 pl-4">
              <span className="font-mono text-xs sm:text-sm text-slate-500 block">
                {isGerman ? 'KLASSE A // CHF INSTITUTIONELL' : 'CLASS A // CHF INSTITUTIONAL'}
              </span>
              <div className="text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white font-mono">
                CHF
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {isGerman ? 'Thesaurierend · Institutionell' : 'Accumulating · Institutional'}
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2 border-l-2 border-emerald-600 dark:border-emerald-400 pl-4">
              <span className="font-mono text-xs sm:text-sm text-slate-500 block">
                {isGerman ? 'KLASSE B // EUR AUSSCHÜTTEND' : 'CLASS B // EUR DISTRIBUTING'}
              </span>
              <div className="text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white font-mono">
                EUR
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {isGerman ? 'Ausschüttend · Retail' : 'Distributing · Retail'}
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2 border-l-2 border-purple-600 dark:border-purple-400 pl-4">
              <span className="font-mono text-xs sm:text-sm text-slate-500 block">
                {isGerman ? 'KLASSE C // USD INSTITUTIONELL' : 'CLASS C // USD INSTITUTIONAL'}
              </span>
              <div className="text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white font-mono">
                USD
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {isGerman ? 'Thesaurierend · Institutionell' : 'Accumulating · Institutional'}
              </p>
            </div>
          </div>

          {/* Allocation Section Connector */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex items-center justify-between flex-wrap gap-4 text-slate-500 font-mono text-sm">
            <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              {isGerman
                ? 'Kontrollierte Allokation · Multi-Währungs-Support · Steuerergebnisse je Anteilsklasse'
                : 'Controlled allocation · Multi-currency support · Share-class-level tax outputs'}
            </span>
          </div>

        </section>

        {/* =========================================================
            5. SECURITY & INSTITUTIONAL CONTROL (Open 4-Column Layout)
        ========================================================== */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-12 sm:pt-16 space-y-8 sm:space-y-12">
          
          <div className="space-y-3 sm:space-y-4">
           
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-950 dark:text-white tracking-tight break-words">
              {isGerman
                ? 'Entwickelt für sensible Finanz- und Steuerdaten.'
                : 'Engineered for sensitive financial and tax data.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-10 pt-2">
            {securityPoints.map((item, idx) => (
              <div key={idx} className="space-y-1.5 sm:space-y-2">
                <h3 className="text-lg sm:text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================
            6. CLEAR CALL TO ACTION
        ========================================================== */}
        <section className="border-t border-slate-200 dark:border-slate-800 pt-12 sm:pt-16 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-normal text-slate-950 dark:text-white tracking-tight break-words">
            {isGerman
              ? 'Bereit, Ihre Steuerprozesse zu modernisieren?'
              : 'Ready to modernize your fund tax workflows?'}
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              <span>{isGerman ? 'Demo vereinbaren' : 'Book a Demo'}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <Link
              href="/platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base transition-colors"
            >
              <span>{isGerman ? 'Plattform ansehen' : 'Explore Platform'}</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}