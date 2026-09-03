'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from './language-provider'

type WorkspaceTabId = 'overview' | 'workspace' | 'allocation' | 'validation' | 'trace' | 'reporting'

interface SubView {
  id: string
  labelEn: string
  labelDe: string
  image: string
  alt: string
  captionEn: string
  captionDe: string
}

interface WorkspaceTabConfig {
  id: WorkspaceTabId
  num: string
  titleEn: string
  titleDe: string
  tag: string
  defaultImage: string
  subViews?: SubView[]
  highlightsEn: { title: string; desc: string; badge?: string }[]
  highlightsDe: { title: string; desc: string; badge?: string }[]
}

const WORKSPACES: WorkspaceTabConfig[] = [
  {
    id: 'overview',
    num: '01',
    titleEn: 'Fund Overview',
    titleDe: 'Fonds-Übersicht',
    tag: 'PORTFOLIO STATUS',
    defaultImage: '/1_fund_overview.png',
    highlightsEn: [
      {
        title: 'Master Vehicle & Domiciles',
        desc: 'Alpine Global PE Fund IV (SCSp) mapped across Swiss ESTV Circular 24/25 and Luxembourg jurisdictions.',
        badge: 'SCSp / CH-LU',
      },
      {
        title: 'Multi-Class Directory',
        desc: 'Real-time tracking of Class A (CHF Inst.), Class B (EUR Retail), Class C (USD Carry), and Class S (Seed/GP).',
        badge: '4 CLASSES',
      },
      {
        title: 'Filing Readiness',
        desc: 'Automated reconciliation and cut-off status tracking across fiscal year accounting cycles.',
        badge: 'IN-REVIEW',
      },
    ],
    highlightsDe: [
      {
        title: 'Master-Vehikel & Domizile',
        desc: 'Alpine Global PE Fund IV (SCSp) abgebildet über ESTV-Kreisschreiben 24/25 und Luxemburger Rechtsräume.',
        badge: 'SCSp / CH-LU',
      },
      {
        title: 'Mehrklassen-Verzeichnis',
        desc: 'Echtzeit-Tracking von Klasse A (CHF Inst.), Klasse B (EUR Retail), Klasse C (USD Carry) und Klasse S (Seed/GP).',
        badge: '4 KLASSEN',
      },
      {
        title: 'Meldereife & Status',
        desc: 'Automatische Abstimmung und Stichtags-Tracking über gesamte Geschäftsjahres-Zyklen.',
        badge: 'IN-PRÜFUNG',
      },
    ],
  },
  {
    id: 'workspace',
    num: '02',
    titleEn: 'Calculation Workspace',
    titleDe: 'Berechnungs-Workspace',
    tag: 'DETERMINISTIC ENGINE',
    defaultImage: '/2_calculation_workspace.png',
    highlightsEn: [
      {
        title: 'Versioned Statutory Rules',
        desc: 'Codified Swiss ESTV KS24 capital gains exemption and KS25 dividend gross-up rules executed deterministically.',
        badge: 'ESTV KS 24/25',
      },
      {
        title: 'Real-Time Financial Ledger',
        desc: 'Live reconciliation between accounting valuation, statutory tax adjustments, and taxable net yields.',
        badge: 'ZERO GUESSWORK',
      },
      {
        title: 'Mathematical Precision',
        desc: 'Apportioned operating expenses and tax exemptions calculated without probabilistic approximation.',
        badge: 'EXACT MATH',
      },
    ],
    highlightsDe: [
      {
        title: 'Versionierte Steuerregeln',
        desc: 'Kodifizierte ESTV KS24 Kapitalgewinnbefreiungen und KS25 Dividenden-Gross-Up-Regeln deterministisch ausgeführt.',
        badge: 'ESTV KS 24/25',
      },
      {
        title: 'Echtzeit-Steuerledger',
        desc: 'Live-Abstimmung zwischen handelsrechtlicher Bewertung, Steuerkorrekturen und steuerbaren Nettoerträgen.',
        badge: 'NULL SCHÄTZUNG',
      },
      {
        title: 'Mathematische Exaktheit',
        desc: 'Aufgeteilte Betriebsausgaben und Steuerbefreiungen ohne probabilistische Ungenauigkeiten berechnet.',
        badge: 'EXAKTE MATHEMATIK',
      },
    ],
  },
  {
    id: 'allocation',
    num: '03',
    titleEn: 'Share-Class Allocation',
    titleDe: 'Anteilsklassen-Allokation',
    tag: 'WATERFALL & ALLOCATION',
    defaultImage: '/3_share_class_allocation.png',
    subViews: [
      {
        id: 'allocation-waterfall',
        labelEn: 'Class Allocation Waterfall',
        labelDe: 'Klassen-Allokations-Wasserfall',
        image: '/3_share_class_allocation.png',
        alt: 'ZYVORIS share-class allocation waterfall screenshot',
        captionEn: 'Primary weighted equity allocation waterfall across all investor unit tranches.',
        captionDe: 'Primärer gewichteter Eigenkapital-Allokations-Wasserfall über alle Anteilsklassen.',
      },
      {
        id: 'allocation-reconciliation',
        labelEn: 'Reconciliation Matrix',
        labelDe: 'Abstimmungs-Matrix',
        image: '/3b_share_class_reconciliation.png',
        alt: 'ZYVORIS share-class reconciliation matrix screenshot',
        captionEn: 'Detailed trial balance reconciliation matrix confirming 0.00 variance across classes.',
        captionDe: 'Detaillierte Saldenabstimmungsmatrix mit Bestätigung von 0,00 Abweichung über alle Klassen.',
      },
    ],
    highlightsEn: [
      {
        title: 'Weighted Equity Allocation',
        desc: 'Deterministic distribution of taxable net income and tax asset basis under Swiss Circular 24.',
        badge: 'CIRCULAR 24',
      },
      {
        title: 'Investor Equalization',
        desc: 'Automated equalization adjustments reconciling entry and exit cash flows across tranches.',
        badge: 'EQUALIZATION',
      },
      {
        title: '100% Reconciled Balance',
        desc: 'Sum of share-class allocated taxable income matches fund trial balance within CHF 0.00 tolerance.',
        badge: '0.00 VARIANCE',
      },
    ],
    highlightsDe: [
      {
        title: 'Gewichtete Eigenkapitalallokation',
        desc: 'Deterministische Verteilung von steuerbarem Nettoeinkommen und Steuerwerten nach ESTV-KS 24.',
        badge: 'KREISSCHREIBEN 24',
      },
      {
        title: 'Anleger-Equalization',
        desc: 'Automatisierte Equalization-Korrekturen zum Ausgleich von Ein- und Austrittsflüssen über Tranchen.',
        badge: 'EQUALISATION',
      },
      {
        title: '100% Abgestimmter Saldo',
        desc: 'Summe der allokierten steuerbaren Erträge stimmt exakt mit dem Fondssaldo überein (0,00 CHF Toleranz).',
        badge: '0,00 ABWEICHUNG',
      },
    ],
  },
  {
    id: 'validation',
    num: '04',
    titleEn: 'Validation & Exceptions',
    titleDe: 'Validierung & Ausnahmen',
    tag: 'EXCEPTION TRIAGE',
    defaultImage: '/4_validation_exceptions.png',
    highlightsEn: [
      {
        title: 'Automated Pre-Filing Triage',
        desc: 'Real-time detection of data variances, withholding tax ceiling breaches, and classification gaps.',
        badge: 'PRE-FILING GATE',
      },
      {
        title: 'Security Master Integrity',
        desc: 'Full ISIN verification against official Swiss Federal Tax Administration (ESTV) security masters.',
        badge: 'ESTV MATCH',
      },
      {
        title: 'Professional Override Log',
        desc: 'Structured audit trail capturing professional reviewer notes, rationale, and timestamps for every adjustment.',
        badge: 'AUDIT LOGGED',
      },
    ],
    highlightsDe: [
      {
        title: 'Automatisierte Vorab-Triage',
        desc: 'Echtzeit-Erkennung von Datenabweichungen, Quellensteuer-DBA-Deckelüberschreitungen und Klassifikationslücken.',
        badge: 'VORAB-PRÜFGATE',
      },
      {
        title: 'Wertpapierstamm-Integrität',
        desc: 'Vollständige ISIN-Verifikation gegen offizielle ESTV-Wertschriftenverzeichnisse.',
        badge: 'ESTV-ABGLEICH',
      },
      {
        title: 'Revisionssicheres Override-Protokoll',
        desc: 'Strukturierter Audit-Trail zur Dokumentation von Fachkommentaren, Begründungen und Zeitstempeln.',
        badge: 'REVISIONSFEST',
      },
    ],
  },
  {
    id: 'trace',
    num: '05',
    titleEn: 'Calculation Trace',
    titleDe: 'Berechnungs-Lineage',
    tag: 'AUDIT TRAIL',
    defaultImage: '/5_calculation_trace.png',
    subViews: [
      {
        id: 'trace-pipeline',
        labelEn: 'Lineage Pipeline DAG',
        labelDe: 'Lineage-Pipeline-Graph',
        image: '/5_calculation_trace.png',
        alt: 'ZYVORIS calculation trace pipeline screenshot',
        captionEn: 'Visual directed acyclic graph (DAG) tracing source data through classifications and calculations.',
        captionDe: 'Visueller Graph zur lückenlosen Nachverfolgung vom Quelldatum bis zur Berechnung.',
      },
      {
        id: 'trace-table',
        labelEn: 'Lineage Audit Table',
        labelDe: 'Lineage-Audit-Tabelle',
        image: '/5b_calculation_trace_lineage_table.png',
        alt: 'ZYVORIS calculation trace lineage table screenshot',
        captionEn: 'Granular step-by-step transaction table with SHA-256 cryptographic hashes and formula traces.',
        captionDe: 'Detaillierte Transaktions-Lineage-Tabelle mit kryptografischen SHA-256-Prüfsummen.',
      },
    ],
    highlightsEn: [
      {
        title: 'Source-to-Output Lineage',
        desc: 'Unbroken chain connecting final report numbers to raw custody transactions, GL feeds, and rule IDs.',
        badge: 'UNBROKEN CHAIN',
      },
      {
        title: 'Cryptographic Proof',
        desc: 'SHA-256 data integrity hashes guaranteeing that source records and formulas remain untampered.',
        badge: 'SHA-256 VERIFIED',
      },
      {
        title: 'Inspection-Ready Audit',
        desc: 'Engineered specifically for Big 4 audit teams, tax authorities, and institutional LP due diligence.',
        badge: 'AUDITOR READY',
      },
    ],
    highlightsDe: [
      {
        title: 'Vollständige Ursprungs-Lineage',
        desc: 'Lückenlose Kette vom finalen Meldewert zu Rohdaten der Verwahrstelle, Hauptbuchfeeds und Regel-IDs.',
        badge: 'LÜCKENLOSE KETTE',
      },
      {
        title: 'Kryptografischer Nachweis',
        desc: 'SHA-256-Prüfsummen gewährleisten die Unveränderbarkeit von Quelldaten und Rechenregeln.',
        badge: 'SHA-256 GEPRÜFT',
      },
      {
        title: 'Prüfungsbereiter Nachweis',
        desc: 'Entwickelt für Big-4-Wirtschaftsprüfer, Steuerverwaltungen und Due Diligence institutioneller Anleger.',
        badge: 'REVISIONSSICHER',
      },
    ],
  },
  {
    id: 'reporting',
    num: '06',
    titleEn: 'Reporting Output',
    titleDe: 'Berichts-Output',
    tag: 'TAX PACKAGES',
    defaultImage: '/6_reporting_output.png',
    subViews: [
      {
        id: 'reporting-package',
        labelEn: 'Tax Datasets & ICTax',
        labelDe: 'Steuer-Datensätze & ICTax',
        image: '/6_reporting_output.png',
        alt: 'ZYVORIS reporting output package screenshot',
        captionEn: 'Standardized jurisdiction datasets ready for Swiss ESTV ICTax filing integration.',
        captionDe: 'Standardisierte Steuerdatensätze für die Schweizer ESTV ICTax-Einreichung.',
      },
      {
        id: 'reporting-approval',
        labelEn: 'PDF/XML & Dual Sign-Off',
        labelDe: 'PDF/XML & Freigabe-Gate',
        image: '/6b_reporting_pdf_xml_and_approval.png',
        alt: 'ZYVORIS reporting PDF XML and sign-off screenshot',
        captionEn: 'Dual-sign-off approval workflow and downloadable investor tax certificates (PDF/XML).',
        captionDe: 'Vier-Augen-Freigabe-Workflow und druckfertige Anleger-Steuerausweise (PDF/XML).',
      },
    ],
    highlightsEn: [
      {
        title: 'ESTV ICTax Schema Ready',
        desc: 'Structured electronic dataset formatted to Swiss Federal Tax Administration reporting specifications.',
        badge: 'CH-ESTV XML',
      },
      {
        title: 'Investor Certificates',
        desc: 'Review-ready investor tax certificates breaking down taxable dividends, capital gains, and wealth tax base.',
        badge: 'PDF / CSV',
      },
      {
        title: 'Dual-Approval Governance',
        desc: 'Controlled four-eyes review gate requiring senior tax advisor sign-off prior to filing dispatch.',
        badge: 'DUAL SIGN-OFF',
      },
    ],
    highlightsDe: [
      {
        title: 'ESTV-ICTax-Konformität',
        desc: 'Strukturierte elektronische Meldedatensätze nach Vorgaben der Eidgenössischen Steuerverwaltung.',
        badge: 'CH-ESTV XML',
      },
      {
        title: 'Anleger-Steuerausweise',
        desc: 'Prüffähige Steuerausweise mit Aufgliederung in Dividenden, steuerfreie Kapitalgewinne und Vermögenssteuer.',
        badge: 'PDF / CSV',
      },
      {
        title: 'Vier-Augen-Governance',
        desc: 'Kontrolliertes Freigabe-Gate mit verpflichtender Bestätigung durch den leitenden Steuerexperten.',
        badge: 'VIER-AUGEN-PRINZIP',
      },
    ],
  },
]

export default function ProductWorkspaces() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<WorkspaceTabId>('overview')
  const [subViewSelection, setSubViewSelection] = useState<Record<string, string>>({
    allocation: 'allocation-waterfall',
    trace: 'trace-pipeline',
    reporting: 'reporting-package',
  })

  const currentTab = WORKSPACES.find((w) => w.id === activeTab) || WORKSPACES[0]

  // Determine current active image for current tab
  const getCurrentImage = (): { src: string; alt: string; caption: string } => {
    if (currentTab.subViews && currentTab.subViews.length > 0) {
      const selectedSubId = subViewSelection[currentTab.id] || currentTab.subViews[0].id
      const subView = currentTab.subViews.find((sv) => sv.id === selectedSubId) || currentTab.subViews[0]
      return {
        src: subView.image,
        alt: subView.alt,
        caption: language === 'de' ? subView.captionDe : subView.captionEn,
      }
    }
    return {
      src: currentTab.defaultImage,
      alt: `ZYVORIS ${currentTab.titleEn} platform screenshot`,
      caption:
        language === 'de'
          ? `Authentische Benutzeroberfläche: ${currentTab.titleDe}`
          : `Authentic platform interface: ${currentTab.titleEn}`,
    }
  }

  const activeImage = getCurrentImage()
  const highlights = language === 'de' ? currentTab.highlightsDe : currentTab.highlightsEn

  return (
    <section
      id="product-workspaces"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#0b1533] dark:text-slate-100
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
                {language === 'de' ? 'PRODUKT-OBERFLÄCHE & WORKSPACES' : 'LIVE PLATFORM WORKSPACES'}
              </span>
            </div>

            <h2 className="max-w-[780px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? 'Echte Software für' : 'Controlled Software for'}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'institutionelle Steueroperationen.' : 'Institutional Tax Operations.'}
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Keine abstrakten Folien: Erkunden Sie die interaktiven Berechnungs- und Prüf-Workspaces von ZYVORIS, die Fondsdaten, Steuergesetze und Freigabeworkflows in einer produktionsreifen Oberfläche vereinen.'
              : 'Functioning tax software, not conceptual mockups. Explore the six operational workspaces connecting fund records, rule-based execution, exception triage, and verified tax outputs.'}
          </p>
        </div>

        {/* Workspace Primary Tab Navigation Bar */}
        <div className="mt-12 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {WORKSPACES.map((tab) => {
            const isSelected = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`group flex shrink-0 items-center gap-2.5 rounded-xl border-2 px-4 py-2.5 font-mono text-xs font-bold transition-all ${
                  isSelected
                    ? 'border-slate-950 bg-slate-950 text-white shadow-md dark:border-blue-500 dark:bg-blue-600'
                    : 'border-slate-900 bg-white text-slate-800 hover:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500'
                }`}
              >
                <span
                  className={`text-[11px] font-extrabold ${
                    isSelected ? 'text-blue-400 dark:text-blue-200' : 'text-blue-600 dark:text-blue-400'
                  }`}
                >
                  [{tab.num}]
                </span>
                <span>{language === 'de' ? tab.titleDe : tab.titleEn}</span>
              </button>
            )
          })}
        </div>

        {/* Workspace Display Container (Browser Frame with Bold Black Borders) */}
        <div className="mt-6 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
          {/* Top Browser Window Header */}
          <div className="flex h-11 items-center justify-between border-b-2 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/90 px-4 sm:px-6">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-800 dark:text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 hidden font-bold sm:inline text-slate-800 dark:text-slate-200">
                ZYVORIS Platform Engine
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-900/40 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 font-mono text-[11px] text-slate-900 dark:text-slate-200 shadow-xs">
              <span className="text-blue-600 dark:text-blue-400">https://</span>
              <span>app.zyvoris.com/{activeTab}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded border border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                ENV: PROD-CH
              </span>
            </div>
          </div>

          {/* Sub-Header Context Bar & Sub-View Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-900/40 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-4 sm:px-7 py-3">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="rounded-md border border-slate-900 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 px-2.5 py-0.5 font-mono text-xs font-bold text-slate-900 dark:text-white">
                Alpine Global PE Fund IV (SCSp)
              </span>
              <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
                DOMICILE: <strong>CH / LU</strong>
              </span>
              <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
                PERIOD: <strong>FY 2025</strong>
              </span>
            </div>

            {/* Sub-view switcher for workspaces with multiple screenshots */}
            {currentTab.subViews && currentTab.subViews.length > 1 && (
              <div className="flex items-center gap-1.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-950 p-1">
                {currentTab.subViews.map((sub) => {
                  const isCurrent = (subViewSelection[currentTab.id] || currentTab.subViews![0].id) === sub.id
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() =>
                        setSubViewSelection((prev) => ({
                          ...prev,
                          [currentTab.id]: sub.id,
                        }))
                      }
                      className={`px-3 py-1 font-mono text-[11px] font-bold rounded-lg transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {language === 'de' ? sub.labelDe : sub.labelEn}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Product Screenshot Showcase Panel */}
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-100/50 dark:bg-slate-950/40">
            {/* Screenshot Container */}
            <div className="relative rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-950 overflow-hidden shadow-xl">
              {/* Status bar above image */}
              <div className="flex items-center justify-between border-b border-slate-900/20 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    {activeImage.caption}
                  </span>
                </div>
                <span className="rounded border border-slate-900/20 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400">
                  1920 × 945
                </span>
              </div>

              {/* Main Image Rendering */}
              <div className="relative overflow-hidden bg-slate-950">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={1920}
                  height={945}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Contextual Feature Highlights Grid Below Screenshot */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-slate-900/80 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between border-b border-slate-900/10 dark:border-slate-800 pb-2.5">
                    <span className="font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                      [ 0{idx + 1} ]
                    </span>
                    {h.badge && (
                      <span className="rounded border border-slate-900/30 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[9.5px] font-bold text-slate-800 dark:text-slate-300">
                        {h.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2.5 text-sm font-bold text-slate-950 dark:text-white">{h.title}</h4>
                  <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
