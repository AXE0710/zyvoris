'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

export default function TeamPage() {
  const { t, language } = useLanguage()

  const founders = [
    {
      name: 'Mubashar Khan',
      role: t('team_mubashar_role', 'Co-Founder & Managing Director'),
      tag: t('team_mubashar_tag', 'Tax & Fund Infrastructure'),
      initials: 'MK',
      image: '/mubashar-cropped.jpg',
      experience: language === 'de' ? '12+ Jahre Branchenerfahrung' : '12+ Years Institutional Experience',
      bio:
        language === 'de'
          ? '12+ Jahre Erfahrung in internationaler und grenzüberschreitender Besteuerung, Privatmarktfonds-Strukturen, Steuerberichterstattung, operativen Betriebsmodellen und technologiegestützten Steuerprozessen (Luxemburg, Schweiz, USA, UK, Deutschland).'
          : '12+ years of experience across international and cross-border taxation, private-market fund structures, tax reporting, operating models, and technology-enabled tax processes.',
      quote:
        language === 'de'
          ? 'Privatmärkte sind zu einer $14T+ Anlageklasse gewachsen, doch das Steuer-Reporting beruht weiterhin auf manuellen Tabellen. ZYVORIS liefert die geschäftskritische Infrastruktur, die Fondsmanager seit langem benötigen.'
          : 'Private markets have grown into a $14T+ asset class, yet tax compliance still relies on manual workpapers and disconnected spreadsheets. ZYVORIS provides the controlled operating infrastructure the ecosystem has needed.',
      responsibilities: [
        language === 'de' ? 'Fonds-Strukturierung & Domizilregeln' : 'Fund Structuring & Domicile Rules',
        language === 'de' ? 'Grenzüberschreitende Steuerlogik' : 'Cross-Border Tax Logic & Treaties',
        language === 'de' ? 'Regulatorische Berichts-Frameworks' : 'Regulatory Reporting Frameworks',
        language === 'de' ? 'Strategische Partnerschaften' : 'Strategic Partnerships & Operations',
      ],
      email: 'info@zyvoris.ai',
    },
    {
      name: 'Sikandar Khan',
      role: t('team_cto_role', 'Co-Founder & CTO'),
      tag: t('team_cto_tag', 'Engineering & AI Architecture'),
      initials: 'SK',
      image: '/sikandar.jpeg',
      experience: language === 'de' ? 'System- & KI-Architekt' : 'Enterprise Systems & AI Architect',
      bio:
        language === 'de'
          ? 'Spezialisiert auf skalierbare verteilte Architekturen, deterministische Berechnungs-Engines, automatisierte Datenpipelines und Zero-Retention KI-Workflows für Finanzinfrastruktur.'
          : 'Specialized in scalable distributed architectures, deterministic calculation engines, automated high-throughput data engineering, and zero-retention AI workflows for financial infrastructure.',
      quote:
        language === 'de'
          ? 'Steuerberechnungen dulden keine Schätzungen oder mathematischen Ungenauigkeiten. ZYVORIS wurde mit 100% mathematischem Determinismus, lückenloser Audit-Traceability und höchster Performance konstruiert.'
          : 'Tax calculations cannot tolerate black-box guesswork. We engineered ZYVORIS with strict mathematical determinism, source-to-output lineage, and high-performance scalability from day one.',
      responsibilities: [
        language === 'de' ? 'Deterministische Rechen-Engine' : 'Deterministic Calculation Engine',
        language === 'de' ? 'Verteilte Datenpipeline-Architektur' : 'Distributed Data Pipeline Architecture',
        language === 'de' ? 'KI-Extraktions- & Klassifikationsmodelle' : 'AI Extraction & Classification Models',
        language === 'de' ? 'Mandantentrennung & Audit-Architektur' : 'Tenant Isolation & Audit Trail Architecture',
      ],
      email: 'info@zyvoris.ai',
    },
  ]

  const values = [
    {
      num: '01',
      title: language === 'de' ? 'Deterministisch aus Prinzip' : 'Deterministic by Principle',
      desc:
        language === 'de'
          ? 'Keine Kompromisse bei der Präzision. Alle Berechnungen und Allokationen erfolgen über mathematisch deterministische Logik.'
          : 'We never compromise accuracy. All calculations, allocations, and filings are executed through auditable, deterministic logic.',
    },
    {
      num: '02',
      title: language === 'de' ? 'Institutionelle Governance' : 'Institutional Governance',
      desc:
        language === 'de'
          ? 'Entwickelt mit vollständiger Mandantentrennung, granularen Benutzerrechten und manipulationssicheren Prüfpfaden.'
          : 'Built with enterprise-grade tenant isolation, granular role controls, and immutable timestamped calculation lineages.',
    },
    {
      num: '03',
      title: language === 'de' ? 'Steuerexpertise trifft Software' : 'Domain & Tech Harmony',
      desc:
        language === 'de'
          ? 'Tiefes Fachwissen über Privatmarktfonds wird direkt in performante, grenzüberschreitende Software übersetzt.'
          : 'Codifying deep private-market tax expertise directly into performant software systems built for cross-border scale.',
    },
    {
      num: '04',
      title: language === 'de' ? 'Erweiterbare Infrastruktur' : 'Extendable Infrastructure',
      desc:
        language === 'de'
          ? 'Primärer Fokus auf Privatmärkte. ZYVORIS arbeitet unabhängig von der zugrundeliegenden Eigentumsinfrastruktur, sodass dieselbe Steuerlogik sowohl auf herkömmliche als auch auf tokenisierte Fondsstrukturen angewendet werden kann.'
          : 'Primary focus on private markets. ZYVORIS is designed to operate independently of underlying ownership infrastructure, allowing structured tax logic to be applied across both conventional and tokenized investment structures.',
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] dark:bg-[#080d1a] text-foreground pt-28 pb-20 sm:pt-32 lg:pt-36 transition-colors duration-200">
      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw]">
        {/* =========================================================
            HERO HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400 mb-5">
            <span>[ {t('team_kicker', 'Leadership & Architecture')} ]</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.08]">
            {t('team_title_1', 'Built by institutional tax leaders and')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('team_title_2', 'infrastructure engineers.')}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {t(
              'team_desc',
              'We are bridging the divide between multi-jurisdictional private market tax logic and modern, high-throughput cloud infrastructure.'
            )}
          </p>
        </div>

        {/* =========================================================
            FOUNDERS PROFILE CARDS (Bold Black Borders, No Icons)
        ========================================================== */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="
                group relative flex flex-col justify-between
                overflow-hidden
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-8 lg:p-10
                shadow-lg
                transition-all duration-200
                hover:-translate-y-1 hover:border-blue-600
              "
            >
              <div>
                {/* Profile Header without icons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pb-6 border-b-2 border-slate-900 dark:border-slate-800">
                  {/* Photo or Avatar Placeholder */}
                  {founder.image ? (
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-900 shadow-md bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-2xl border-2 border-slate-900 bg-slate-950 text-white font-mono font-bold text-2xl sm:text-3xl shadow-md">
                      {founder.initials}
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="inline-block rounded-md border border-slate-900 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 px-2.5 py-0.5 font-mono text-[11px] font-bold text-slate-900 dark:text-slate-200">
                      {founder.tag}
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">
                      {founder.name}
                    </h2>

                    <p className="mt-0.5 text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400">
                      {founder.role}
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold">
                      {founder.experience}
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {founder.bio}
                </p>

                {/* Founder Quote */}
                <div className="mt-6 rounded-2xl border-2 border-slate-900/60 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5">
                  <p className="text-xs sm:text-sm italic leading-relaxed text-slate-900 dark:text-slate-200">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </div>

              
              </div>

             
            </div>
          ))}
        </div>

        {/* =========================================================
            CORE PHILOSOPHY & VALUES SECTION
        ========================================================== */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {t('team_principles_kicker', 'Foundational Principles')}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              {t('team_principles_title', 'Engineering discipline meets tax rigor.')}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400">
              {t('team_principles_desc', 'How our leadership team designs, verifies, and delivers cross-border infrastructure.')}
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="
                  rounded-2xl
                  border-2 border-slate-900 dark:border-slate-700
                  bg-white dark:bg-slate-900
                  p-6
                  shadow-sm
                  transition-all
                  hover:-translate-y-1 hover:border-blue-600
                "
              >
                <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                  [{v.num}]
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-950 dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA BANNER
        ========================================================== */}
        <div className="mt-16 sm:mt-24 rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-slate-950 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
              {language === 'de' ? 'Institutioneller Dialog' : 'Institutional Engagement'}
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight">
              {language === 'de'
                ? 'Sprechen Sie direkt mit unserem Führungsteam.'
                : 'Speak directly with our leadership team.'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'de'
                ? 'Ob Sie grenzüberschreitende UCITS/AIFM-Meldungen, Private Equity Waterfalls oder die Anbindung an bestehende Buchhaltungsdaten evaluieren – wir freuen uns auf den Austausch über Ihre Fondsstrukturen.'
                : 'Whether you are evaluating cross-border UCITS/AIFM reporting, private equity waterfalls, or integration with existing accounting data feeds, we are ready to discuss your fund structures.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@zyvoris.ai?subject=Leadership%20Inquiry%20-%20ZYVORIS"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  bg-blue-600
                  border-2 border-blue-500
                  px-5 py-3
                  font-bold text-sm
                  text-white
                  hover:bg-blue-500
                  shadow-sm
                  transition-all
                "
              >
                <span>{language === 'de' ? 'Führungsgespräch anfragen' : 'Schedule Executive Discussion'}</span>
                <span>→</span>
              </a>

              <Link
                href="/product"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  border-2 border-slate-700
                  bg-slate-900
                  px-5 py-3
                  font-bold text-sm
                  text-slate-200
                  hover:bg-slate-800
                  transition-all
                "
              >
                <span>{language === 'de' ? 'Plattform-Architektur erkunden' : 'Explore Platform Architecture'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
