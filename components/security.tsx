'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export type SecurityTier = 'implemented' | 'architecture' | 'roadmap'
type CategoryFilter = 'all' | 'data' | 'access' | 'infrastructure' | 'compliance'

interface EnterpriseSecurityItem {
  id: string
  topic: string
  titleEn: string
  titleDe: string
  descEn: string
  descDe: string
  tier: SecurityTier
  category: 'data' | 'access' | 'infrastructure' | 'compliance'
  technicalDetail: string
}

export default function SecuritySection() {
  const { language } = useLanguage()
  const [activeTier, setActiveTier] = useState<SecurityTier | 'all'>('all')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

  const CONTROLS: EnterpriseSecurityItem[] = [
    // =========================================================================
    // 1. IMPLEMENTED SECURITY CONTROLS (Active & verified in current codebase)
    // =========================================================================
    {
      id: 'IMP-01',
      topic: 'Stateless Authentication',
      titleEn: 'Stateless Bearer Token Authentication (JWT)',
      titleDe: 'Zustandslose Bearer-Token-Authentifizierung (JWT)',
      descEn:
        'All API routes enforce cryptographically signed JSON Web Token (JWT) validation with granular role claims and strict session expiration.',
      descDe:
        'Alle API-Routen erzwingen kryptografisch signierte JSON-Web-Token (JWT) mit rollenspezifischen Rechten und strikter Sitzungsdauer.',
      tier: 'implemented',
      category: 'access',
      technicalDetail: 'Active jsonwebtoken verification middleware with role-scoped route guards.',
    },
    {
      id: 'IMP-02',
      topic: 'Credential Hashing',
      titleEn: 'Cryptographic Credential Hashing (bcryptjs)',
      titleDe: 'Kryptografisches Passwort-Hashing (bcryptjs)',
      descEn:
        'User credentials and access secrets are salted and hashed using bcryptjs prior to storage in PostgreSQL, preventing plaintext exposure.',
      descDe:
        'Nutzerpasswörter und Zugangsgeheimnisse werden vor der Speicherung in PostgreSQL mit bcryptjs gesalzen und gehasht.',
      tier: 'implemented',
      category: 'access',
      technicalDetail: 'Salted multi-round cryptographic hashing verified before database persistence.',
    },
    {
      id: 'IMP-03',
      topic: 'Relational Scoping',
      titleEn: 'Parameterized SQL & Relational Workspace Scoping',
      titleDe: 'Parametrisierte SQL-Abfragen & Mandantenscoping',
      descEn:
        'Database access strictly utilizes parameterized SQL queries via connection pools (pg) to eliminate SQL injection, scoped strictly by fund and tenant IDs.',
      descDe:
        'Datenbankzugriffe erfolgen ausschließlich über parametrisierte SQL-Queries via pg-Verbindungspools gegen SQL-Injections, isoliert nach Fonds-IDs.',
      tier: 'implemented',
      category: 'data',
      technicalDetail: 'Parameterized database.js query mapping with authenticated tenant/fund boundary filtering.',
    },
    {
      id: 'IMP-04',
      topic: 'CORS & Origin Security',
      titleEn: 'Strict Cross-Origin Resource Sharing (CORS)',
      titleDe: 'Strikte Cross-Origin-Ressourcenteilung (CORS)',
      descEn:
        'Backend application servers enforce origin whitelisting via Express cors middleware, rejecting unauthenticated cross-domain browser requests.',
      descDe:
        'Backend-Server erzwingen strikte Whitelists via Express-CORS-Middleware und blockieren unautorisierte Cross-Domain-Anfragen.',
      tier: 'implemented',
      category: 'infrastructure',
      technicalDetail: 'Configured application-level CORS middleware restricting API access to verified client origins.',
    },
    {
      id: 'IMP-05',
      topic: 'Deterministic Rules',
      titleEn: 'Deterministic Rule Engine (Zero AI Guesswork)',
      titleDe: 'Deterministische Rechen-Engine (Keine KI-Schätzungen)',
      descEn:
        'All tax adjustments, statutory classifications, and allocations are executed through codified logic (json-rules-engine, expr-eval, BigNumber.js) rather than probabilistic AI.',
      descDe:
        'Alle Steueranpassungen und Allokationen werden über fest kodifizierte Regeln (json-rules-engine, expr-eval, BigNumber.js) statt probabilistischer KI berechnet.',
      tier: 'implemented',
      category: 'compliance',
      technicalDetail: 'Declarative rule evaluation and arbitrary-precision arithmetic eliminating floating-point rounding errors.',
    },
    {
      id: 'IMP-06',
      topic: 'Audit Trail',
      titleEn: 'Structured Execution Audit & Lineage Logging',
      titleDe: 'Strukturierte Rechenlauf- & Audit-Protokollierung',
      descEn:
        'Every calculation run, tax rule pack version, and user action is logged with server timestamps, actor identifiers, and execution status in PostgreSQL.',
      descDe:
        'Jeder Rechenlauf, Versionswechsel von Steuerregelpaketen und Nutzereingriff wird mit Serverzeitstempeln und Akteurs-IDs in PostgreSQL protokolliert.',
      tier: 'implemented',
      category: 'compliance',
      technicalDetail: 'Relational audit tables capturing run IDs, timestamps, user context, and status transitions.',
    },

    // =========================================================================
    // 2. SECURITY ARCHITECTURE (Technical & cloud infrastructure specifications)
    // =========================================================================
    {
      id: 'ARC-01',
      topic: 'Encryption at Rest',
      titleEn: 'Encryption at Rest (AES-256)',
      titleDe: 'Verschlüsselung im Ruhezustand (AES-256)',
      descEn:
        'Underlying cloud infrastructure and database storage architecture enforces AES-256 volume-level encryption at rest across databases and snapshot volumes.',
      descDe:
        'Cloud-Infrastruktur und Datenbank-Volumes erzwingen AES-256-Verschlüsselung auf Block- und Speicherebene für alle Daten und Snapshots.',
      tier: 'architecture',
      category: 'data',
      technicalDetail: 'Cloud-managed Key Management Services (KMS) with automated volume and disk encryption.',
    },
    {
      id: 'ARC-02',
      topic: 'Encryption in Transit',
      titleEn: 'Encryption in Transit (TLS 1.3)',
      titleDe: 'Verschlüsselung bei der Übertragung (TLS 1.3)',
      descEn:
        'Edge reverse proxy, API gateways, and web traffic terminate with enforced TLS 1.3 transport security using modern, forward-secret cipher suites.',
      descDe:
        'Edge-Reverse-Proxies, API-Gateways und Webtraffic erzwingen TLS 1.3 mit modernen Cipher Suites für den gesamten Netzwerkverkehr.',
      tier: 'architecture',
      category: 'infrastructure',
      technicalDetail: 'Edge-enforced HTTPS / TLS 1.3 termination at reverse proxy and load balancer ingress.',
    },
    {
      id: 'ARC-03',
      topic: 'Tenant Isolation',
      titleEn: 'Strict Tenant Isolation Architecture',
      titleDe: 'Strikte logische Mandanten- und Schematrennung',
      descEn:
        'Multi-tenant architecture is designed with strict schema-level boundaries and logical namespaces to prevent cross-tenant data contamination.',
      descDe:
        'Multi-Tenant-Architektur mit strikter Schematrennung und logischen Namensräumen zur Verhinderung jeglicher Datenvermischung.',
      tier: 'architecture',
      category: 'infrastructure',
      technicalDetail: 'Dedicated database schemas and isolated workspace runtime boundaries.',
    },
    {
      id: 'ARC-04',
      topic: 'Zero-Retention AI',
      titleEn: 'Zero-Retention AI Governance Architecture',
      titleDe: 'Zero-Retention KI-Governance-Architektur',
      descEn:
        'Architecture boundary: AI-assisted document intake operates statelessly. Customer fund data is strictly prohibited from model training or permanent vendor retention.',
      descDe:
        'Architekturvorgabe: Dokumentenextraktion arbeitet zustandslos. Kundendaten werden niemals für Modelltrainings oder dauerhaft bei KI-Providern gespeichert.',
      tier: 'architecture',
      category: 'compliance',
      technicalDetail: 'Stateless API endpoints operating under contractual zero-data-retention agreements.',
    },
    {
      id: 'ARC-05',
      topic: 'Key Management',
      titleEn: 'Centralized Key Management Infrastructure (KMS)',
      titleDe: 'Zentrales Schlüsselmanagement (KMS)',
      descEn:
        'Dedicated Cloud KMS architecture manages encryption key lifecycles and cryptographic separation independently from core application databases.',
      descDe:
        'Dedizierte Cloud-KMS-Architektur verwaltet kryptografische Schlüssel und Rotationszyklen unabhängig von Anwendungsdatenbanken.',
      tier: 'architecture',
      category: 'data',
      technicalDetail: 'FIPS 140-2 compliant hardware security module integration with automated key rotation.',
    },
    {
      id: 'ARC-06',
      topic: 'Tamper-Resistant Lineage',
      titleEn: 'Tamper-Resistant Lineage & Immutable Timestamps',
      titleDe: 'Manipulationssichere Lineage & Unveränderliche Zeitstempel',
      descEn:
        'Architecture specification for cryptographically verifiable, append-only calculation lineage with immutable execution fingerprints across calculation cycles.',
      descDe:
        'Architekturspezifikation für kryptografisch überprüfbare, unveränderliche Prüfpfade mit kryptografischen Prüfsummen je Rechenlauf.',
      tier: 'architecture',
      category: 'compliance',
      technicalDetail: 'Cryptographic hash-chaining and append-only audit ledger design.',
    },
    {
      id: 'ARC-07',
      topic: 'Backups & DR',
      titleEn: 'Automated Backups & Disaster Recovery (DR)',
      titleDe: 'Automatisierte Backups & Disaster Recovery (DR)',
      descEn:
        'Continuous point-in-time automated backups replicated across secondary availability zones with defined recovery metrics (RTO < 4h, RPO < 1h).',
      descDe:
        'Kontinuierliche Point-in-Time-Backups repliziert über sekundäre Verfügbarkeitszonen mit garantierten Zielen (RTO < 4h, RPO < 1h).',
      tier: 'architecture',
      category: 'infrastructure',
      technicalDetail: 'Automated snapshot lifecycle with cross-region disaster recovery replication.',
    },
    {
      id: 'ARC-08',
      topic: 'EU / Swiss Hosting',
      titleEn: 'EU & Swiss Cloud Hosting Region',
      titleDe: 'EU- & Schweizer Cloud-Hosting',
      descEn:
        'Infrastructure and managed persistence operate exclusively in enterprise Tier-3+ data centers within Switzerland and the European Union.',
      descDe:
        'Infrastruktur und Datenbanken werden ausschließlich in Tier-3+ Rechenzentren in der EU und Schweiz betrieben.',
      tier: 'architecture',
      category: 'infrastructure',
      technicalDetail: 'Dedicated European availability zones with strict regional data residency enforcement.',
    },

    // =========================================================================
    // 3. ENTERPRISE SECURITY ROADMAP (Planned enterprise capabilities & audits)
    // =========================================================================
    {
      id: 'RDM-01',
      topic: 'Cryptographic Separation / BYOK',
      titleEn: 'Cryptographically Separated Environments & BYOK',
      titleDe: 'Kryptografisch getrennte Umgebungen & BYOK',
      descEn:
        'Single-tenant virtual private clouds (VPCs) with customer-held encryption keys (Bring-Your-Own-Key) and dedicated database instances.',
      descDe:
        'Physisch und kryptografisch dedizierte Enterprise-Bereitstellungen mit kundeneigenen Schlüsseln (BYOK) in isolierten VPCs.',
      tier: 'roadmap',
      category: 'infrastructure',
      technicalDetail: 'Planned for Enterprise Tier deployments on AWS, Azure, or Google Cloud.',
    },
    {
      id: 'RDM-02',
      topic: 'SSO & SAML 2.0',
      titleEn: 'Enterprise SSO & SAML 2.0 / Okta Integration',
      titleDe: 'Enterprise SSO & SAML 2.0 / Okta-Integration',
      descEn:
        'Enterprise Single Sign-On (SSO) via SAML 2.0 / OpenID Connect with centralized directory synchronization and automated SCIM provisioning.',
      descDe:
        'Unternehmensweites Single Sign-On (SSO) via SAML 2.0 / OIDC mit Identity-Providern (Okta, Azure AD) und automatischer SCIM-Bereitstellung.',
      tier: 'roadmap',
      category: 'access',
      technicalDetail: 'Centralized directory sync with automated institutional deprovisioning.',
    },
    {
      id: 'RDM-03',
      topic: 'MFA Enforcement',
      titleEn: 'Mandatory Multi-Factor Authentication (MFA / FIDO2)',
      titleDe: 'Erzwungene Multi-Faktor-Authentifizierung (MFA)',
      descEn:
        'Administrative policy enforcement for hardware security keys (FIDO2 / WebAuthn) and TOTP multi-factor authentication across all accounts.',
      descDe:
        'Organisationsweite Richtlinien zur Durchsetzung hardwarebasierter FIDO2/WebAuthn-Sicherheitsschlüssel und Authenticator-MFA.',
      tier: 'roadmap',
      category: 'access',
      technicalDetail: 'Tenant-wide enforcement controls and session anomaly verification.',
    },
    {
      id: 'RDM-04',
      topic: 'SOC 2 Type II',
      titleEn: 'AICPA SOC 2 Type II Certification Roadmap',
      titleDe: 'AICPA SOC 2 Type II Zertifizierungs-Roadmap',
      descEn:
        'Formal audit preparation and continuous automated evidence collection for independent third-party AICPA SOC 2 Type II attestation.',
      descDe:
        'Strukturierte Vorbereitung auf unabhängige AICPA SOC 2 Type II Prüfungen für Sicherheit, Verfügbarkeit und Vertraulichkeit.',
      tier: 'roadmap',
      category: 'compliance',
      technicalDetail: 'Continuous compliance monitoring against AICPA Trust Services Criteria.',
    },
    {
      id: 'RDM-05',
      topic: 'ISO 27001',
      titleEn: 'ISO/IEC 27001:2022 Certification Roadmap',
      titleDe: 'ISO/IEC 27001:2022 Zertifizierungs-Roadmap',
      descEn:
        'Implementation and formal third-party accreditation of an Information Security Management System (ISMS) adhering to ISO/IEC 27001:2022.',
      descDe:
        'Aufbau und Zertifizierung eines Informationssicherheits-Managementsystems (ISMS) nach internationalem ISO/IEC 27001:2022 Standard.',
      tier: 'roadmap',
      category: 'compliance',
      technicalDetail: 'Formalized internal security steering, risk registry, and annual audit cycle.',
    },
    {
      id: 'RDM-06',
      topic: 'Penetration Testing',
      titleEn: 'Independent Annual Penetration Testing',
      titleDe: 'Regelmäßige externe Penetrationstests',
      descEn:
        'Scheduled third-party penetration testing and vulnerability assessments conducted by accredited independent cybersecurity firms.',
      descDe:
        'Regelmäßige Whitebox- und Blackbox-Sicherheitsprüfungen durch anerkannte externe Cybersicherheits-Prüfstellen.',
      tier: 'roadmap',
      category: 'compliance',
      technicalDetail: 'Formal audit summary reports provided to institutional clients during procurement.',
    },
  ]

  const TIERS_CONFIG: {
    key: SecurityTier
    heading: string
    headingDe: string
    subtitle: string
    subtitleDe: string
    badge: string
    badgeColor: string
    borderTheme: string
  }[] = [
    {
      key: 'implemented',
      heading: 'Implemented Security Controls',
      headingDe: 'Implemented Security Controls (Aktiv in Produktion)',
      subtitle:
        'Verified security controls fully operational and enforced in the current production codebase.',
      subtitleDe:
        'Verifizierte Sicherheitskontrollen, die in der aktuellen Produktions-Codebasis aktiv und funktional implementiert sind.',
      badge: 'VERIFIED IN CODEBASE',
      badgeColor: 'border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-300',
      borderTheme: 'border-emerald-600/60 dark:border-emerald-500/60',
    },
    {
      key: 'architecture',
      heading: 'Security Architecture',
      headingDe: 'Security Architecture (Technische Infrastruktur)',
      subtitle:
        'Verified technical architecture and cloud-level infrastructure specifications in active deployment.',
      subtitleDe:
        'Verifizierte technische Architektur und Cloud-Infrastruktur-Spezifikationen in aktiver Bereitstellung.',
      badge: 'INFRASTRUCTURE & ARCHITECTURE',
      badgeColor: 'border-blue-600/40 bg-blue-500/10 text-blue-700 dark:border-blue-500/40 dark:text-blue-300',
      borderTheme: 'border-blue-600/60 dark:border-blue-500/60',
    },
    {
      key: 'roadmap',
      heading: 'Enterprise Security Roadmap',
      headingDe: 'Enterprise Security Roadmap (Geplante Erweiterungen)',
      subtitle:
        'Planned enterprise capabilities, customer-held encryption features, and formal external third-party attestations.',
      subtitleDe:
        'Geplante Enterprise-Erweiterungen, kundeneigene Schlüsselverwaltung und formelle externe Zertifizierungen.',
      badge: 'ENTERPRISE ROADMAP',
      badgeColor: 'border-purple-600/40 bg-purple-500/10 text-purple-700 dark:border-purple-500/40 dark:text-purple-300',
      borderTheme: 'border-purple-600/60 dark:border-purple-500/60',
    },
  ]

  const filteredTiers =
    activeTier === 'all'
      ? TIERS_CONFIG
      : TIERS_CONFIG.filter((t) => t.key === activeTier)

  return (
    <section
      id="security"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-white dark:bg-[#080d1a]
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
                {language === 'de'
                  ? 'SICHERHEIT, GOVERNANCE & AUDITABILITY'
                  : 'ENTERPRISE DUE DILIGENCE & GOVERNANCE'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white leading-tight">
              {language === 'de' ? 'Entwickelt für hochsensible' : 'Built for sensitive'}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'Finanz- und Steuerdaten.' : 'financial and tax data.'}
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Für institutionelle Due-Diligence-Prüfungen unterscheiden wir transparent und verbindlich zwischen produktiv implementierten Kontrollen, verifizierter Systemarchitektur und unserer Enterprise-Roadmap.'
              : 'Institutional private market funds demand rigorous technical security. ZYVORIS provides total transparency for technical due diligence by strictly distinguishing what is implemented in code today from our system architecture and enterprise roadmap.'}
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y-2 border-slate-900 dark:border-slate-800 py-4">
          {/* Status View Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTier('all')}
              className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                activeTier === 'all'
                  ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                  : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
              }`}
            >
              All Sections ({CONTROLS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTier('implemented')}
              className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                activeTier === 'implemented'
                  ? 'bg-slate-950 text-white border-black dark:bg-emerald-600 dark:border-emerald-500'
                  : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
              }`}
            >
              Implemented Security Controls (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveTier('architecture')}
              className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                activeTier === 'architecture'
                  ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                  : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
              }`}
            >
              Security Architecture (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTier('roadmap')}
              className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
                activeTier === 'roadmap'
                  ? 'bg-slate-950 text-white border-black dark:bg-purple-600 dark:border-purple-500'
                  : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
              }`}
            >
              Enterprise Security Roadmap (6)
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-slate-500 font-bold uppercase text-[10px] mr-1">Filter:</span>
            {(['all', 'data', 'access', 'infrastructure', 'compliance'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-2 py-0.5 rounded uppercase text-[10px] font-bold border ${
                  activeCategory === cat
                    ? 'border-blue-600 bg-blue-50 text-blue-800 dark:border-blue-500 dark:bg-blue-950/60 dark:text-blue-300'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Explicit Due Diligence Sections */}
        <div className="mt-10 space-y-16">
          {filteredTiers.map((tierConfig) => {
            const tierItems = CONTROLS.filter(
              (item) =>
                item.tier === tierConfig.key &&
                (activeCategory === 'all' || item.category === activeCategory)
            )

            if (tierItems.length === 0) return null

            return (
              <div key={tierConfig.key} className="space-y-6">
                {/* REQUIRED HEADING */}
                <div className="border-b-2 border-slate-900 dark:border-slate-800 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400">
                          Due Diligence Tier
                        </span>
                        <span className="text-slate-400 font-mono text-xs">/</span>
                        <span
                          className={`rounded-md border px-2 py-0.5 font-mono text-[9.5px] font-extrabold uppercase ${tierConfig.badgeColor}`}
                        >
                          {tierConfig.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                        {language === 'de' ? tierConfig.headingDe : tierConfig.heading}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {tierItems.length} {tierItems.length === 1 ? 'Control' : 'Controls'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
                    {language === 'de' ? tierConfig.subtitleDe : tierConfig.subtitle}
                  </p>
                </div>

                {/* Grid of Controls */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {tierItems.map((item) => (
                    <article
                      key={item.id}
                      className="
                        flex flex-col justify-between
                        rounded-3xl
                        border-2 border-slate-900 dark:border-slate-700
                        bg-white dark:bg-slate-900
                        p-6 sm:p-7
                        shadow-sm
                        transition-all duration-150
                        hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
                      "
                    >
                      <div>
                        <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                              [{item.id}]
                            </span>
                            <span className="font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                              {item.topic}
                            </span>
                          </div>
                          <span
                            className={`rounded-md border px-2 py-0.5 font-mono text-[9.5px] font-extrabold uppercase ${tierConfig.badgeColor}`}
                          >
                            {item.category}
                          </span>
                        </div>

                        <h4 className="mt-4 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                          {language === 'de' ? item.titleDe : item.titleEn}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                          {language === 'de' ? item.descDe : item.descEn}
                        </p>
                      </div>

                      <div className="mt-6 pt-3.5 border-t border-slate-900/30 dark:border-slate-800">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                          Technical Verification Scope
                        </span>
                        <p className="font-mono text-[11px] text-slate-800 dark:text-slate-200">
                          {item.technicalDetail}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Due Diligence Statement Callout */}
        <div className="mt-14 rounded-2xl border-2 border-slate-900 dark:border-slate-800 bg-[#f0f4f9] dark:bg-slate-900/80 p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                Institutional Trust & Evidence Principle
              </span>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                {language === 'de'
                  ? 'Keine unbestätigten Sicherheitsversprechen: ZYVORIS trennt verifizierbare Produktionskontrollen rigoros von geplanter Enterprise-Roadmap. Detaillierte Prüfunterlagen und Architekturdokumente stehen autorisierten Prüfern zur Verfügung.'
                  : 'No unsupported security claims: ZYVORIS strictly separates verified production controls from planned enterprise architecture. Detailed audit evidence and technical architecture dossiers are available to authorized institutional reviewers.'}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 font-mono text-xs">
              <span className="rounded border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 font-bold text-slate-900 dark:text-slate-200">
                EVIDENCE-LED
              </span>
              <span className="rounded border-2 border-blue-600 bg-blue-600 text-white px-3 py-1 font-bold">
                AUDITABLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}