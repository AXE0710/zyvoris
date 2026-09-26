'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'
import {
  Database,
  Network,
  FileText,
  Calculator,
  ShieldCheck,
  FileBarChart,
  ArrowRight,
  Table2,
  SlidersHorizontal,
  Coins,
  PieChart,
  Scale,
  CheckCircle2,
  BarChart3,
  Users,
  FileUp,
  Filter,
  CheckCheck,
  FileCode,
  FolderTree,
  GitBranch,
  Layers,
  Sparkles,
  Globe,
  Tag,
  History,
  Eye,
  AlertTriangle,
  Download,
  Lock,
  Search,
} from 'lucide-react'

interface SubStep {
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
}

interface PlatformStep {
  num: string
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
  panelTitle: string
  panelDesc: string
  subSteps: SubStep[]
}

export default function PlatformSteps() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  // Default to step 3 (04 Calculation & Allocation) as featured in design
  const [activeStep, setActiveStep] = useState(3)

  const steps: PlatformStep[] = [
    {
      num: '01',
      title: isGerman ? 'Datenaufnahme' : 'Data Ingestion',
      desc: isGerman
        ? 'Fondsdaten aus unterschiedlichen Quellen importieren und normalisieren.'
        : 'Import and normalize fund data from multiple sources.',
      icon: Database,
      panelTitle: isGerman
        ? 'Was geschieht innerhalb der Datenaufnahme-Ebene'
        : 'What happens inside the Data Ingestion layer',
      panelDesc: isGerman
        ? 'Die Datenaufnahme-Ebene bindet heterogene Buchhaltungssysteme, Depotbank-Feeds und Transaktionsdaten an und normalisiert sie in ein einheitliches Schema.'
        : 'The ingestion layer connects to disparate accounting systems, custodian feeds, and transaction records — normalizing heterogenous datasets into a unified schema.',
      subSteps: [
        {
          title: isGerman ? 'Quellimport' : 'Source Ingestion',
          desc: isGerman
            ? 'Saldenbilanzen, Transaktionsprotokolle und Hauptbuch-Feeds importieren.'
            : 'Ingest trial balances, transaction logs, and ledger feeds.',
          icon: FileUp,
        },
        {
          title: isGerman ? 'Normalisierung' : 'Normalization',
          desc: isGerman
            ? 'Heterogene Datenformate, Datums- und Währungsangaben bereinigen.'
            : 'Cleanse and standardize heterogenous data formats and fields.',
          icon: Filter,
        },
        {
          title: isGerman ? 'Schemazuordnung' : 'Schema Mapping',
          desc: isGerman
            ? 'Sachkonten und Transaktionen einheitlichen Steuerkategorien zuweisen.'
            : 'Map fund ledger accounts to unified tax schema categories.',
          icon: Table2,
        },
        {
          title: isGerman ? 'Vollständigkeitsprüfung' : 'Completeness Check',
          desc: isGerman
            ? 'Prüfsummen und Salden gegen Quelldaten der Fondsbuchhaltung abgleichen.'
            : 'Verify balances and checksums against source fund accounts.',
          icon: Scale,
        },
        {
          title: isGerman ? 'Revisionssichere Ablage' : 'Immutable Staging',
          desc: isGerman
            ? 'Rohdaten mit Zeitstempel unveränderlich für den Audit Trail sichern.'
            : 'Store timestamped raw data securely for downstream audit trails.',
          icon: Database,
        },
      ],
    },
    {
      num: '02',
      title: isGerman ? 'Strukturmodellierung' : 'Structure Modeling',
      desc: isGerman
        ? 'Fondsstrukturen, Gesellschaften und Anteilsklassen abbilden.'
        : 'Model fund structures, entities and share classes.',
      icon: Network,
      panelTitle: isGerman
        ? 'Was geschieht innerhalb der Strukturmodellierungs-Ebene'
        : 'What happens inside the Structure Modeling layer',
      panelDesc: isGerman
        ? 'Die Strukturebene bildet mehrstufige Entitäten, Feeder-Vehikel, Blocker-Strukturen und Anteilsklassen ab – inklusive Kapitalflüssen und steuerlicher Transparenz.'
        : 'The structure layer models multi-tier legal entities, feeder vehicles, blocker corporations, and share classes — establishing relationships, capital flows, and tax transparent pathways.',
      subSteps: [
        {
          title: isGerman ? 'Entitäten-Hierarchie' : 'Entity Hierarchy',
          desc: isGerman
            ? 'Fondsgesellschaften, SPVs, HoldCos und Feeder-Vehikel abbilden.'
            : 'Map legal fund vehicles, SPVs, HoldCos, and feeder tiers.',
          icon: FolderTree,
        },
        {
          title: isGerman ? 'Anteilsklassen' : 'Share Classes',
          desc: isGerman
            ? 'Rechte, Gebührenstrukturen und Währungen je Anteilsklasse modellieren.'
            : 'Model share-class rights, fee structures, and currency classes.',
          icon: Layers,
        },
        {
          title: isGerman ? 'Kapitalströme' : 'Flow of Funds',
          desc: isGerman
            ? 'Kapitalabrufe, Ausschüttungskaskaden und Rückflüsse nachvollziehen.'
            : 'Track commitments, drawdowns, and distribution cascades.',
          icon: GitBranch,
        },
        {
          title: isGerman ? 'Steuertransparenz' : 'Look-Through Rules',
          desc: isGerman
            ? 'Durchsichtsregeln und steuerlichen Klassifizierungsstatus konfigurieren.'
            : 'Configure tax transparency and entity classification rules.',
          icon: Eye,
        },
        {
          title: isGerman ? 'Versionierung' : 'Structure Registry',
          desc: isGerman
            ? 'Versionierte Strukturhistorie über alle Berichtsperioden führen.'
            : 'Maintain versioned ownership maps across fiscal years.',
          icon: Network,
        },
      ],
    },
    {
      num: '03',
      title: isGerman ? 'Steuerlogik' : 'Tax Logic',
      desc: isGerman
        ? 'Länderspezifische Steuerregeln und Klassifizierungen anwenden.'
        : 'Apply jurisdiction-specific tax rules and classifications.',
      icon: FileText,
      panelTitle: isGerman
        ? 'Was geschieht innerhalb der Steuerlogik-Ebene'
        : 'What happens inside the Tax Logic layer',
      panelDesc: isGerman
        ? 'Die Steuerlogik-Ebene überführt Gesetze, Doppelbesteuerungsabkommen und Verwaltungserlasse in deterministische Regeln – strikt getrennt vom Berechnungscode.'
        : 'The tax logic layer translates statutory regimes, treaties, and circulars into deterministic rules — keeping regulatory logic strictly decoupled from calculation code.',
      subSteps: [
        {
          title: isGerman ? 'Regimewahl' : 'Regime Selection',
          desc: isGerman
            ? 'Zielregeln anwenden (ESTV, InvStG, UK OVD, etc.).'
            : 'Activate target jurisdictions (ESTV, InvStG, UK OVD, etc.).',
          icon: Globe,
        },
        {
          title: isGerman ? 'Ertragscharakterisierung' : 'Income Characterization',
          desc: isGerman
            ? 'Dividenden, Zinsen, Veräußerungsgewinne und Einlagenrückgewähr klassifizieren.'
            : 'Distinguish dividends, interest, capital gains, and returns of capital.',
          icon: Tag,
        },
        {
          title: isGerman ? 'Abkommenslogik' : 'Treaty Application',
          desc: isGerman
            ? 'Doppelbesteuerungsabkommen und Quellensteuererleichterungen berücksichtigen.'
            : 'Apply double taxation treaties and withholding tax reliefs.',
          icon: Sparkles,
        },
        {
          title: isGerman ? 'Befreiungslogik' : 'Exemption Logic',
          desc: isGerman
            ? 'Schachtelprivilegien und gesetzliche Freistellungen prüfen.'
            : 'Evaluate participation exemptions and statutory allowances.',
          icon: Scale,
        },
        {
          title: isGerman ? 'Regelversionierung' : 'Rule Versioning',
          desc: isGerman
            ? 'Regelversionen passend zum jeweiligen Steuerjahr fixieren.'
            : 'Lock tax rule versions matching the relevant fiscal year.',
          icon: History,
        },
      ],
    },
    {
      num: '04',
      title: isGerman ? 'Berechnung & Allokation' : 'Calculation & Allocation',
      desc: isGerman
        ? 'Steuerwerte berechnen und über Fondsstrukturen allokieren.'
        : 'Calculate tax values and allocate across fund structures.',
      icon: Calculator,
      panelTitle: isGerman
        ? 'Was geschieht innerhalb der Ebene Berechnung & Allokation'
        : 'What happens inside the Calculation & Allocation layer',
      panelDesc: isGerman
        ? 'Die Berechnungsebene überführt strukturierte Fondsdaten in länderspezifische Steuerergebnisse. Sie wendet steuerliche Klassifizierungen, Anpassungen und Allokationen an – einschließlich FX- und Anteilsklassenlogik – mit vollständiger Nachvollziehbarkeit zu den Quelldaten.'
        : 'The calculation layer transforms structured fund data into jurisdiction-specific tax results. It applies tax classifications, adjustments and allocations — including FX and share-class logic — with full traceability to source data.',
      subSteps: [
        {
          title: isGerman ? 'Klassifizierung' : 'Classification',
          desc: isGerman
            ? 'Erträge, Gewinne und andere Posten nach steuerlichen Regeln klassifizieren.'
            : 'Classify income, gains and other items according to tax rules.',
          icon: Table2,
        },
        {
          title: isGerman ? 'Steuerliche Anpassungen' : 'Tax Adjustments',
          desc: isGerman
            ? 'Länderspezifische Anpassungen und Befreiungen anwenden.'
            : 'Apply jurisdiction-specific adjustments and exemptions.',
          icon: SlidersHorizontal,
        },
        {
          title: isGerman ? 'Währungsumrechnung' : 'FX Conversion',
          desc: isGerman
            ? 'Fonds- und Anteilsklassenstrukturen in mehreren Währungen verarbeiten.'
            : 'Handle multi-currency fund and share-class structures.',
          icon: Coins,
        },
        {
          title: isGerman ? 'Allokation' : 'Allocation',
          desc: isGerman
            ? 'Ergebnisse nach definierten Schlüsseln auf Gesellschaften und Anteilsklassen verteilen.'
            : 'Allocate results across entities and share classes using defined drivers.',
          icon: PieChart,
        },
        {
          title: isGerman ? 'Abstimmung' : 'Reconciliation',
          desc: isGerman
            ? 'Abstimmung mit Quelldaten und Fondskonten durchführen.'
            : 'Reconcile to source data and fund accounts.',
          icon: Scale,
        },
        {
          title: isGerman ? 'Validierung' : 'Validation',
          desc: isGerman
            ? 'Integrierte Kontrollen und Plausibilitätsprüfungen.'
            : 'Built-in controls and reasonableness checks.',
          icon: CheckCircle2,
        },
        {
          title: isGerman ? 'Steuerwerte' : 'Tax Value',
          desc: isGerman
            ? 'Steuerwerte auf Fonds- und Anteilsklassenebene berechnen.'
            : 'Calculate tax values per fund and per share class.',
          icon: BarChart3,
        },
        {
          title: isGerman ? 'Berechnung pro Anteil' : 'Per-Share Calculation',
          desc: isGerman
            ? 'Steuerpflichtiges Einkommen pro Anteilschein auf Basis der Endallokation ermitteln.'
            : 'Determine taxable income per unit based on final allocations.',
          icon: Users,
        },
      ],
    },
    {
      num: '05',
      title: isGerman ? 'Prüfung & Validierung' : 'Review & Validation',
      desc: isGerman
        ? 'Integrierte Kontrollen und Nachvollziehbarkeit für das fachliche Review.'
        : 'Built-in controls and traceability for professional review.',
      icon: ShieldCheck,
      panelTitle: isGerman
        ? 'Was geschieht innerhalb der Prüfungs- & Validierungs-Ebene'
        : 'What happens inside the Review & Validation layer',
      panelDesc: isGerman
        ? 'Die Prüfungsebene bietet strukturierte Prüf-Workspaces, Vier-Augen-Freigaben, lückenlose Audit-Trails und Ausnahmemarkierungen für Steuerberater und Fondsverwalter.'
        : 'The review layer provides structured review workspaces, four-eye approval workflows, audit trails, and exception flagging for fund controllers and tax advisors.',
      subSteps: [
        {
          title: isGerman ? 'Ausnahmemarkierung' : 'Exception Flagging',
          desc: isGerman
            ? 'Inkonsistenzen, Grenzwertüberschreitungen oder unkategorisierte Posten hervorheben.'
            : 'Highlight anomalies, threshold breaches, and unmapped entries.',
          icon: AlertTriangle,
        },
        {
          title: isGerman ? 'Quelldaten-Drilldown' : 'Source Traceability',
          desc: isGerman
            ? 'Jede Endzahl lückenlos bis zum originären Buchungsbeleg zurückverfolgen.'
            : 'Drill down from any reported tax line directly to source ledgers.',
          icon: Search,
        },
        {
          title: isGerman ? 'Vier-Augen-Freigabe' : 'Four-Eye Review',
          desc: isGerman
            ? 'Strukturierte Freigabekaskade durch Ersteller und prüfenden Steuerexperten.'
            : 'Multi-stage approval by preparer and certifying tax professional.',
          icon: CheckCheck,
        },
        {
          title: isGerman ? 'Revisionsprotokoll' : 'Audit Trail',
          desc: isGerman
            ? 'Jede Anpassung, jeden Kommentar und jeden Freigabestempel unveränderlich protokollieren.'
            : 'Log every edit, comment, and sign-off timestamp permanently.',
          icon: Lock,
        },
        {
          title: isGerman ? 'Freigabebestätigung' : 'Sign-Off Seal',
          desc: isGerman
            ? 'Abgenommene Steuerpositionen mit digitalem Siegel für das Reporting sperren.'
            : 'Seal approved datasets cryptographically to prevent modifications.',
          icon: ShieldCheck,
        },
      ],
    },
    {
      num: '06',
      title: isGerman ? 'Reporting & Datenausgabe' : 'Reporting Outputs',
      desc: isGerman
        ? 'Strukturierte, prüffertige Steuerberichte generieren.'
        : 'Generate structured, review-ready tax reports.',
      icon: FileBarChart,
      panelTitle: isGerman
        ? 'Was geschieht innerhalb der Reporting-Ebene'
        : 'What happens inside the Reporting Outputs layer',
      panelDesc: isGerman
        ? 'Die Reporting-Ebene erzeugt offizielle Behördenformulare, maschinenlesbare XML-Feeds, LP-Steuerbescheinigungen und strukturierte Datenauszüge.'
        : 'The reporting layer outputs approved figures into official authority return formats, machine-readable XML feeds, LP tax statements, and structured downstream data feeds.',
      subSteps: [
        {
          title: isGerman ? 'Behördenformulare' : 'Statutory Returns',
          desc: isGerman
            ? 'Offizielle länderspezifische Steuererklärungen erstellen (z.B. ESTV Form 35).'
            : 'Produce official country tax returns (e.g. Swiss ESTV Form 35).',
          icon: FileText,
        },
        {
          title: isGerman ? 'Elektronische Feeds' : 'Electronic Feeds',
          desc: isGerman
            ? 'Validierte XML-Schemas für Behördeneinreichungen exportieren (z.B. InvStG §56).'
            : 'Export validated XML schemas for authority filing (e.g. InvStG §56).',
          icon: FileCode,
        },
        {
          title: isGerman ? 'Anlegerbescheinigungen' : 'LP Tax Statements',
          desc: isGerman
            ? 'Individuelle Steuerertragsnachweise je Anteilsklasse und Anleger erzeugen.'
            : 'Produce unit-level tax statements and tax vouchers for investors.',
          icon: Users,
        },
        {
          title: isGerman ? 'Multi-Format Export' : 'Multi-Format Export',
          desc: isGerman
            ? 'Sofortiger Export nach PDF, Excel und strukturierte API-Schnittstellen.'
            : 'Instant export in PDF, Excel workbooks, and downstream API feeds.',
          icon: Download,
        },
        {
          title: isGerman ? 'Archivierung & Siegel' : 'Archive & Delivery',
          desc: isGerman
            ? 'Revisionssichere Archivierung finaler Steuerpakete mit Vollständigkeitsnachweis.'
            : 'Deliver locked reporting packages to portals and custodian networks.',
          icon: FileBarChart,
        },
      ],
    },
  ]

  const currentStep = steps[activeStep]

  return (
    <section
      id="platform-workflow"
      className="
        relative overflow-hidden
        border-t border-slate-200 dark:border-slate-800
        bg-[#f8fafc]/80 dark:bg-[#080d1a]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#09132f] dark:text-slate-100
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1440px]">
        {/* Outer White Card Container with rounded corners & border (as in screenshot) */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0c152a] p-5 sm:p-9 lg:p-11 shadow-sm">
          
          {/* Header row: Left Title with Eyebrow, Right Description */}
          <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-8 pb-7 border-b border-slate-100 dark:border-slate-800/80">
            <div>
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
                PLATFORM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-950 dark:text-white max-w-lg leading-[1.18]">
                {isGerman
                  ? 'Eine strukturierte Plattform für das Fondssteuerreporting'
                  : 'A structured platform for fund tax reporting'}
              </h2>
            </div>
            <p className="max-w-xl text-xs sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {isGerman
                ? 'ZYVORIS trennt Quelldaten, länderspezifische Steuerlogik, Berechnungen und fachliche Prüfung in klar definierte Ebenen – und überführt komplexe Fondsdaten in strukturierte, prüfbare Steuerergebnisse.'
                : 'ZYVORIS separates source data, jurisdiction-specific tax logic, calculations, and professional review into clearly defined layers — turning complex fund data into structured, review-ready tax outputs.'}
            </p>
          </div>

          {/* ============================================================
              6 HORIZONTAL STEP CARDS WITH CONNECTING ARROWS
              Responsive grid on mobile/tablet, full horizontal chain on desktop
              ============================================================ */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-stretch">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              const Icon = step.icon

              return (
                <div key={step.num} className="relative flex items-center">
                  <div
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveStep(idx)
                      }
                    }}
                    className={`
                      w-full h-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between
                      ${
                        isActive
                          ? 'bg-[#18163f] dark:bg-[#1a1744] border-indigo-600 dark:border-indigo-500 shadow-xl shadow-indigo-950/20 ring-2 ring-indigo-500/30 text-white -translate-y-1'
                          : 'bg-white dark:bg-[#0c152a] border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
                      }
                    `}
                  >
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isActive ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="mt-3 sm:mt-4">
                      <h3
                        className={`font-bold text-[13px] sm:text-sm leading-snug ${
                          isActive ? 'text-white' : 'text-slate-950 dark:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-[11px] sm:text-xs leading-relaxed mt-1 sm:mt-1.5 ${
                          isActive ? 'text-indigo-100/80' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Arrow between cards on desktop (hidden for the last card) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center absolute -right-2 sm:-right-2.5 z-10 pointer-events-none text-slate-300 dark:text-slate-600">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* ============================================================
              BOTTOM DETAIL PANEL: SHOWN ON HOVER / ACTIVE
              Displays sub-pipeline with detailed actions and flow
              ============================================================ */}
          <div className="mt-6 sm:mt-7 rounded-2xl border border-indigo-200/90 dark:border-indigo-900/60 bg-gradient-to-b from-indigo-50/40 via-white to-white dark:from-[#0d162d]/50 dark:via-[#0c152a] dark:to-[#0c152a] p-4 sm:p-7 shadow-xs transition-all duration-300">
            
            {/* Header of Detail Panel */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-indigo-100/90 dark:border-slate-800/80">
              <div className="flex items-start sm:items-center gap-2.5">
                <span className="shrink-0 bg-[#18163f] text-white px-2 py-0.5 rounded font-mono text-xs font-bold">
                  {currentStep.num}
                </span>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-950 dark:text-white">
                  {currentStep.panelTitle}
                </h4>
              </div>
              <p className="max-w-2xl text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 lg:text-right">
                {currentStep.panelDesc}
              </p>
            </div>

            {/* Sub-steps flow with connecting arrows */}
            <div className="pt-5 overflow-x-auto scrollbar-thin">
              <div className="flex items-start gap-2 sm:gap-3 min-w-max pb-2">
                {currentStep.subSteps.map((sub, sIdx) => {
                  const SubIcon = sub.icon

                  return (
                    <React.Fragment key={sub.title}>
                      <div className="w-[125px] sm:w-[138px] lg:w-[145px] shrink-0 text-left">
                        {/* Sub-step Icon */}
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2">
                          <SubIcon className="h-4 w-4" />
                        </div>
                        {/* Sub-step Title */}
                        <h5 className="font-bold text-xs text-slate-950 dark:text-white leading-tight mb-1">
                          {sub.title}
                        </h5>
                        {/* Sub-step Description */}
                        <p className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          {sub.desc}
                        </p>
                      </div>

                      {/* Small Arrow between sub-steps */}
                      {sIdx < currentStep.subSteps.length - 1 && (
                        <div className="shrink-0 self-center text-indigo-300 dark:text-indigo-600 pt-1">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}