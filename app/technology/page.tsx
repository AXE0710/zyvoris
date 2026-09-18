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
      title: isGerman ? 'Deterministische Berechnungen' : 'Deterministic Calculations',
      desc: isGerman
        ? 'Explizite Berechnungslogik für reproduzierbare Steuerergebnisse ohne unvorhersehbare Rundungsfehler oder Näherungswerte.'
        : 'Explicit calculation logic designed for reproducible tax results without unverified approximations or drift.',
      points: isGerman
        ? [
            'Null Approximationsdrift über mehrstufige Master-Feeder-Fondsvehikel',
            'Mathematisch geschlossene Abstimmung zwischen Fondsebene und Anteilsklassen',
            'Deterministischer Replay: Historische Berechnungen jederzeit identisch wiederholen',
          ]
        : [
            'Zero mathematical drift across multi-tier master-feeder fund structures',
            'Mathematically closed reconciliation between fund-level and share-class ledgers',
            'Deterministic replay: reproduce historic calculation results with bit-level accuracy',
          ],
    },
    {
      num: '02',
      title: isGerman ? 'Lückenlose Nachvollziehbarkeit' : 'End-to-End Traceability',
      desc: isGerman
        ? 'Verbindet finale Steuer-Outputs direkt mit Quelldaten und angewandter Steuerlogik in einem transparenten Herkunftsgraphen.'
        : 'Connects reported tax values directly to source data and applied statutory rules in an immutable lineage graph.',
      points: isGerman
        ? [
            'Knoten-für-Knoten-Rückverfolgbarkeit von der Steuererklärung bis zum Buchungssatz',
            'Volle Prüfbarkeit für Wirtschaftsprüfer und externe Steuerberater',
            'Klare mathematische Trennung zwischen regulatorischen Regeln und Fondsdaten',
          ]
        : [
            'Node-by-node DAG lineage connecting final tax returns to trial balance entries',
            'Complete audit inspection trail for third-party tax advisors and statutory auditors',
            'Clear demarcation between statutory logic rules and underlying fund records',
          ],
    },
    {
      num: '03',
      title: isGerman ? 'Fachliche Kontrolle' : 'Professional Control',
      desc: isGerman
        ? 'Materielle Steuerentscheidungen und Ausnahmen verbleiben unter verbindlicher fachlicher Prüfung und formalem Sign-Off.'
        : 'Keep material tax decisions and exceptions subject to mandatory professional oversight and formal sign-off.',
      points: isGerman
        ? [
            'Mehrstufige Freigabe- und Genehmigungsworkflows vor behördlicher Einreichung',
            'Automatische Schwellenwertprüfung triggert manuelle Fachprüfung bei Abweichungen',
            'Strukturierte Ausnahme- und Korrekturprotokolle mit Revisionshistorie',
          ]
        : [
            'Multi-tier review and approval workflows before statutory submission',
            'Material variance thresholds trigger mandatory practitioner intervention',
            'Structured exception logs and adjustment journals preserved indefinitely',
          ],
    },
    {
      num: '04',
      title: isGerman ? 'Sicherer Umgang mit Daten' : 'Secure Data Handling',
      desc: isGerman
        ? 'Entwickelt für kontrollierten, mandantenspezifischen Zugriff auf sensible institutionelle Finanz- und Anlegersteuerdaten.'
        : 'Engineered for strictly partitioned access to sensitive institutional fund and investor tax data.',
      points: isGerman
        ? [
            'Strikte Trennung von Mandantenumgebungen ohne Vermischung von Datenbeständen',
            'Ende-zu-Ende-Verschlüsselung nach institutionellen Sicherheitsstandards',
            'Feingranulare rollenbasierte Zugriffssteuerung (RBAC) für GPs, Admins und Berater',
          ]
        : [
            'Isolated tenant architecture preventing cross-tenant data pollination',
            'End-to-end encryption in transit and at rest meeting institutional criteria',
            'Fine-grained role-based access control (RBAC) across GPs, admins, and advisors',
          ],
    },
  ]

  const connectivityTags = [
    'REST APIs',
    'General Ledger (GL) Feeds',
    'ICTax XML',
    'Excel / CSV Pipelines',
    'Structured JSON Payloads',
    'Custodian Data Feeds',
  ]

  const securityPillars = [
    {
      num: '01',
      title: isGerman ? 'Kontrollierter Zugriff' : 'Controlled Access',
      desc: isGerman
        ? 'Rollenbasierter Zugriff auf Fonds, Workflows und Reporting-Daten mit feingranularer Rechtestruktur.'
        : 'Role-based access to funds, workflows, and reporting data with granular permission scopes.',
      points: isGerman
        ? [
            'Rollenprofile für Fondsmanager, Fondsbuchhalter, Steuerberater und Auditoren',
            'Zwei-Faktor-Authentifizierung und SSO-Integration (SAML / Okta)',
          ]
        : [
            'Scoped access profiles for GPs, administrators, tax practitioners, and auditors',
            'Enforced MFA and institutional SSO integration (SAML 2.0 / Okta / Azure AD)',
          ],
    },
    {
      num: '02',
      title: isGerman ? 'Mandantentrennung' : 'Tenant Separation',
      desc: isGerman
        ? 'Strikte logische und kryptographische Segregation zwischen Mandantenumgebungen und Datenspeichern.'
        : 'Strict architectural segregation between client environments, data stores, and access keys.',
      points: isGerman
        ? [
            'Dedizierte Verschlüsselungsschlüssel pro Mandant',
            'Vollständige logische Isolierung aller Rechen- und Workflow-Pipelines',
          ]
        : [
            'Dedicated encryption keys per institutional tenant',
            'Total logical and computational workload isolation across pipelines',
          ],
    },
    {
      num: '03',
      title: isGerman ? 'Revisionssicherheit' : 'Auditability',
      desc: isGerman
        ? 'Strukturierte Protokollierung aller Berechnungs-, Allokations- und Workflow-Aktivitäten.'
        : 'Structured, immutable audit logs tracking every calculation run and user approval action.',
      points: isGerman
        ? [
            'Unveränderbare Audit-Logs für sämtliche System- und Nutzereingriffe',
            'Exportierbare Prüfpfade für formale Due-Diligence-Prüfungen',
          ]
        : [
            'Append-only immutable audit logs for all calculation runs and approvals',
            'Full compliance audit trails exportable for regulatory reviews',
          ],
    },
    {
      num: '04',
      title: isGerman ? 'Datenschutz & Compliance' : 'Data Protection & Compliance',
      desc: isGerman
        ? 'Modernste Verschlüsselungs- und Sicherheitskontrollen speziell für sensible Finanz- und Steuerdaten.'
        : 'Enterprise-grade encryption and privacy controls built specifically for institutional private markets.',
      points: isGerman
        ? [
            'AES-256 Verschlüsselung im Ruhezustand und TLS 1.3 während der Übertragung',
            'Konform mit DSGVO und europäischen Datenschutzanforderungen',
          ]
        : [
            'AES-256 encryption at rest and TLS 1.3 in transit with strict key rotation',
            'Full compliance with GDPR and European financial confidentiality standards',
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
                {isGerman ? 'ARCHITEKTUR & SYSTEMDESIGN' : 'TECHNOLOGY ARCHITECTURE'}
              </span>
            </div>

            <h1 className="text-3xl font-normal leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[54px]">
              {isGerman ? (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Kontrollierte Automatisierung{' '}
                  </span>
                  für{' '}
                  <span className="relative inline-block px-1">
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
                  <span className="font-sans font-semibold">Steuer-Workflows.</span>
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Controlled automation{' '}
                  </span>
                  for{' '}
                  <span className="relative inline-block px-1">
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
                ? 'ZYVORIS kombiniert strukturierte Fondsdaten, deterministische Berechnungslogik, lückenlose mathematische Herkunft und kontrollierte Arbeitsabläufe in einer einheitlichen Betriebsumgebung.'
                : 'ZYVORIS combines structured fund data, deterministic calculation logic, immutable mathematical lineage, and governed tax workflows into one institutional environment.'}
            </p>

            {/* Core Principle Callout */}
            <div className="mt-8 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0c152a] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  {isGerman ? 'KERNPRINZIP DER ARCHITEKTUR' : 'ARCHITECTURAL CORE PRINCIPLE'}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  {isGerman ? 'KI für Interpretation. ' : 'AI for interpretation. '}
                </span>
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400">
                  {isGerman ? 'Deterministische Logik für Berechnungen.' : 'Deterministic logic for calculation.'}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {isGerman
                  ? 'KI-gestützte Workflows unterstützen bei Datenextraktion, Schemamapping und Ausnahmeklassifizierung. Alle numerischen Steuerberechnungen und Allokationen bleiben strikt getrennt und werden über deterministische Rechenmodule ausgeführt.'
                  : 'AI-assisted workflows support data ingestion, schema mapping, and exception classification. All numerical tax calculations and allocations remain strictly isolated and execute through deterministic compilation engines.'}
              </p>
            </div>

            {/* Architectural Guarantees Pill List */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                isGerman ? '0% Näherungsfehler' : '0% Numerical Drift',
                isGerman ? 'Deterministische Wiederholbarkeit' : 'Deterministic Replay',
                isGerman ? 'DAG-Herkunftsgraph' : 'Full DAG Lineage Graph',
                isGerman ? 'Revisionssichere Trennung' : 'Statutory Air-Gap Isolation',
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-3 py-1.5 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 shadow-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{pill}</span>
                </div>
              ))}
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
                    ENGINE_TOPOLOGY.SPEC
                  </span>
                </div>
                <span className="rounded bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 font-mono text-[9.5px] font-bold text-emerald-800 dark:text-emerald-300">
                  DETERMINISTIC
                </span>
              </div>

              {/* Console Body: Dual-Engine Partition */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Layer 1: Semantic Layer */}
                <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      LAYER 01 // SEMANTIC & INGESTION
                    </span>
                    <span className="font-mono text-[9px] font-semibold text-blue-600 dark:text-blue-400">
                      AI-ASSISTED
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">›</span>
                      <span>Unstructured document parsing (LPAs, PPMs)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">›</span>
                      <span>GL & chart-of-accounts schema harmonization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">›</span>
                      <span>Automated anomaly & variance flagging</span>
                    </li>
                  </ul>
                </div>

                {/* Hard Partition Boundary */}
                <div className="relative py-2 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-dashed border-slate-300 dark:border-slate-700" />
                  </div>
                  <span className="relative z-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    STRICT ISOLATION BOUNDARY
                  </span>
                </div>

                {/* Layer 2: Deterministic Core */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                      LAYER 02 // CALCULATION CORE
                    </span>
                    <span className="font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                      DETERMINISTIC
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>Closed-form share-class waterfall allocation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>Direct-source DAG calculation lineage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>Statutory rule engines (ICTax, K-1, Sec 892)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>Signed audit outputs & XML regulatory files</span>
                    </li>
                  </ul>
                </div>

                {/* System Verification Bar */}
                <div className="rounded-lg bg-slate-900 dark:bg-slate-950 p-3 text-white font-mono text-[11px] flex items-center justify-between">
                  <span className="text-slate-400">EXECUTION_MODE:</span>
                  <span className="text-emerald-400 font-bold">100% AUDITABLE LINEAGE</span>
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
                {isGerman ? 'LEITLINIEN' : 'ARCHITECTURAL PRINCIPLES'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {isGerman ? 'Architektur-Prinzipien ' : 'Architectural principles '}
              </span>
              {isGerman ? 'für institutionelle Verlässlichkeit.' : 'for institutional rigor.'}
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
                    {isGerman ? 'SPEZIFIKATION:' : 'TECHNICAL GUARANTEES:'}
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
            3. CONNECTIVITY & INTEGRATION
        ========================================================== */}
        <section className="mt-20 sm:mt-28 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-8 shadow-sm sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {isGerman ? 'KONNEKTIVITÄT' : 'CONNECTIVITY'}
              </span>
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {isGerman ? 'Entwickelt für ' : 'Designed to work with '}
              </span>
              {isGerman ? 'Ihre bestehende Datenumgebung.' : 'your existing data environment.'}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {isGerman
                ? 'ZYVORIS kann strukturierte Finanz- und Fondsdaten über unterstützte Schnittstellen und dateibasierte Formate aufnehmen, sodass Teams ihre Steuer-Workflows modernisieren können, ohne bestehende Buchhaltungs- oder Administrationssysteme ersetzen zu müssen.'
                : 'ZYVORIS can ingest structured financial and fund data through supported APIs and file-based interfaces, allowing teams to modernize tax workflows without replacing their core accounting or administration systems.'}
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {connectivityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs hover:shadow-md transition-all"
                >
                  {tag}
                </span>
              ))}
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
                {isGerman ? 'Für sensible Finanz- ' : 'Designed for sensitive '}
              </span>
              {isGerman ? 'und Steuerdaten entwickelt.' : 'financial and tax data.'}
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
                    {isGerman ? 'SICHERHEITSMASSNAHMEN:' : 'SECURITY CONTROLS:'}
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