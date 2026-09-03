'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function IntegrationSection() {
  const { language } = useLanguage()

  const SOURCES = [
    {
      title: language === 'de' ? 'Fund Accounting Systeme' : 'Fund Accounting Systems',
      desc: language === 'de' ? 'Investran, eFront, Yardi, Allvue' : 'Investran, eFront, Yardi, Allvue',
      type: 'GL & TRIAL BALANCE',
    },
    {
      title: language === 'de' ? 'General Ledger Daten' : 'General Ledger Data',
      desc: language === 'de' ? 'SAP, Oracle NetSuite, Microsoft Dynamics' : 'SAP, Oracle NetSuite, Microsoft Dynamics',
      type: 'ACCOUNTING FEEDS',
    },
    {
      title: language === 'de' ? 'Administrator-Systeme' : 'Administrator Systems',
      desc: language === 'de' ? 'Apex, Citco, State Street, Northern Trust' : 'Apex, Citco, State Street, Northern Trust',
      type: 'NAV & ACTIVITY',
    },
    {
      title: language === 'de' ? 'Investoren-Register' : 'Investor Registers',
      desc: language === 'de' ? 'Cap-Table-Engines, Zeichnungsscheine, LP-Register' : 'Cap tables, subscription books, LP registries',
      type: 'SHARE CLASSES',
    },
    {
      title: language === 'de' ? 'Dokumenten-Repositories' : 'Document Repositories',
      desc: language === 'de' ? 'Intralinks, Datasite, SharePoint, S3 Buckets' : 'Intralinks, Datasite, SharePoint, S3 Buckets',
      type: 'LPAs & FINANCIALS',
    },
    {
      title: language === 'de' ? 'Data Warehouses' : 'Data Warehouses',
      desc: language === 'de' ? 'Snowflake, Databricks, BigQuery, Postgres' : 'Snowflake, Databricks, BigQuery, Postgres',
      type: 'DATA LAKES',
    },
    {
      title: language === 'de' ? 'Steuersysteme' : 'Tax Systems',
      desc: language === 'de' ? 'K-1/K-3 Vorbereitung, E-Bilanz, lokale Tools' : 'K-1/K-3 preparation, local tax software',
      type: 'TAX STACK',
    },
    {
      title: language === 'de' ? 'Reporting-Plattformen' : 'Reporting Platforms',
      desc: language === 'de' ? 'ESTV ICTax, OeKB, ELSTER, Partner-Portale' : 'ESTV ICTax, OeKB, ELSTER, Partner Portals',
      type: 'FILING GATEWAYS',
    },
    {
      title: language === 'de' ? 'APIs & Webhooks' : 'APIs & Webhooks',
      desc: language === 'de' ? 'RESTful OpenAPI 3.1, GraphQL, Event-Streams' : 'RESTful OpenAPI 3.1, GraphQL, Event Streams',
      type: 'REAL-TIME SYNC',
    },
    {
      title: language === 'de' ? 'Tokenisierungs-Plattformen' : 'Tokenization Platforms',
      desc: language === 'de' ? 'Digitale Fonds-Ledger, regulierte On-Chain-Strukturen' : 'Digital fund ledgers, regulated on-chain vehicles',
      type: 'DIGITAL ASSETS',
    },
  ]

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
      <div className="relative mx-auto max-w-[1420px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'OPERATIVE INTEGRATION' : 'OPERATIONAL INTEGRATION'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-[1.08]">
              {language === 'de' ? 'Entwickelt für bestehende' : 'Designed to fit existing'}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'Fondsprozesse.' : 'fund operations.'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto max-w-[540px]">
            {language === 'de'
              ? 'ZYVORIS erfordert keinen Austausch bestehender Fondsinfrastruktur. Es stellt eine spezialisierte Steuerschicht bereit, die sich nahtlos an die Systeme anbindet, die bereits über den gesamten Investment-Lebenszyklus im Einsatz sind.'
              : 'ZYVORIS does not require firms to replace their existing fund infrastructure. It provides a specialized tax layer that connects to the systems already used across the investment lifecycle.'}
          </p>
        </div>

        {/* Integration Grid Container */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl">
          {/* Top Callout Bar */}
          <div className="p-6 sm:p-8 border-b-2 border-slate-900 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-50/70 dark:bg-slate-800/40">
            <div>
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                {language === 'de' ? 'INTEGRATIONSQUELLEN & DATENFLÜSSE' : 'POTENTIAL INTEGRATION SOURCES & WORKFLOW CONNECTORS'}
              </span>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {language === 'de'
                  ? 'API-first by Design: ZYVORIS agiert als offene Steuerschicht für traditionelle und tokenisierte Vehikel.'
                  : 'API-first by design: ZYVORIS acts as an open tax infrastructure layer across traditional and tokenized structures.'}
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="rounded border border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 font-bold text-slate-900 dark:text-slate-200">
                ZERO RIP-AND-REPLACE
              </span>
              <span className="rounded border border-blue-600 bg-blue-600 text-white px-3 py-1 font-bold">
                10 CONNECTORS
              </span>
            </div>
          </div>

          {/* 10 Source Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x-2 divide-slate-900/30 dark:divide-slate-800 border-b-2 border-slate-900 dark:border-slate-800">
            {SOURCES.slice(0, 5).map((source, idx) => (
              <div key={source.title} className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                      [0{idx + 1}]
                    </span>
                    <span className="font-mono text-[8.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {source.type}
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm sm:text-base font-bold text-slate-950 dark:text-white leading-snug">
                    {source.title}
                  </h4>

                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {source.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x-2 divide-slate-900/30 dark:divide-slate-800">
            {SOURCES.slice(5, 10).map((source, idx) => (
              <div key={source.title} className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                      [{idx + 6 < 10 ? `0${idx + 6}` : idx + 6}]
                    </span>
                    <span className="font-mono text-[8.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {source.type}
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm sm:text-base font-bold text-slate-950 dark:text-white leading-snug">
                    {source.title}
                  </h4>

                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {source.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Callout Banner */}
          <div className="p-6 sm:p-7 bg-slate-50 dark:bg-slate-900/80 border-t-2 border-slate-900 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">
              {language === 'de'
                ? 'Schlüsselbotschaft: ZYVORIS agiert als verbindende Infrastruktur – nicht als isolierte Anwendung.'
                : 'Core Architecture: ZYVORIS acts as connecting infrastructure—not another isolated application.'}
            </span>
            <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
              REST · GRAPHQL · SFTP · CSV · JSON · WEBHOOKS
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}