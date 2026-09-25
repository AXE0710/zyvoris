'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

export default function TeamPage() {
  const { t, language } = useLanguage()
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPlayed(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

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
    <div className="relative min-h-screen overflow-hidden bg-[#f0f4f9] text-foreground pt-28 pb-20 sm:pt-32 lg:pt-36 transition-colors duration-200 dark:bg-[#080d1a]">
      {/* Ambient Blue Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)] blur-3xl" />
      
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15 bg-[linear-gradient(rgba(30,58,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative z-10 mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-[5vw]">
        {/* =========================================================
            HERO HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-[1.08]">
            {language === 'de' ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Gegründet von Steuerexperten und{' '}
                </span>
                <span className="relative inline-block whitespace-nowrap px-1">
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    Infrastruktur-Ingenieuren
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
                </span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Built by institutional tax leaders and{' '}
                </span>
                <span className="relative inline-block whitespace-nowrap px-1">
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    infrastructure engineers
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
                </span>
              </>
            )}
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {t(
              'team_desc',
              'We are bridging the divide between multi-jurisdictional private market tax logic and modern, high-throughput cloud infrastructure.'
            )}
          </p>
        </div>

        {/* =========================================================
            FOUNDERS PROFILE CARDS
        ========================================================== */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="
                tap-press
                group relative flex flex-col justify-between
                overflow-hidden
                rounded-3xl
                border-2 border-slate-200 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-6 sm:p-8 lg:p-10
                shadow-sm
                transition-all duration-200
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md
              "
            >
              <div>
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                  {founder.image ? (
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-950 text-white font-mono font-bold text-2xl sm:text-3xl shadow-sm">
                      {founder.initials}
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="inline-block rounded-md border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40 px-2.5 py-0.5 font-mono text-[10.5px] font-bold uppercase text-blue-700 dark:text-blue-300">
                      {founder.tag}
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">
                      {founder.name}
                    </h2>

                    <p className="mt-0.5 text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400">
                      {founder.role}
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {founder.experience}
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {founder.bio}
                </p>

                {/* Founder Quote */}
                <div className="mt-6 rounded-2xl border border-blue-200/80 bg-blue-50/40 dark:border-blue-900/50 dark:bg-blue-950/30 p-4 sm:p-5">
                  <p className="text-xs sm:text-sm italic leading-relaxed text-slate-800 dark:text-slate-200">
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
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {language === 'de' ? 'Ingenieursdisziplin ' : 'Engineering discipline '}
              </span>
              {language === 'de' ? 'trifft Steuergenauigkeit.' : 'meets tax rigor.'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {t('team_principles_desc', 'How our leadership team designs, verifies, and delivers cross-border infrastructure.')}
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="
                  tap-press
                  rounded-2xl
                  border-2 border-slate-200 dark:border-slate-800
                  bg-white dark:bg-[#0c152a]
                  p-6
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md
                "
              >
                <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                  [{v.num}]
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-950 dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA BANNER
        ========================================================== */}
        <div className="mt-16 sm:mt-24 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {language === 'de' ? 'Sprechen Sie ' : 'Speak directly '}
              </span>
              {language === 'de' ? 'mit unserem Führungsteam.' : 'with our leadership team.'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'de'
                ? 'Ob Sie grenzüberschreitende UCITS/AIFM-Meldungen, Private Equity Waterfalls oder die Anbindung an bestehende Buchhaltungsdaten evaluieren – wir freuen uns auf den Austausch über Ihre Fondsstrukturen.'
                : 'Whether you are evaluating cross-border UCITS/AIFM reporting, private equity waterfalls, or integration with existing accounting data feeds, we are ready to discuss your fund structures.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@zyvoris.ai?subject=Leadership%20Inquiry%20-%20ZYVORIS"
                className="
                  tap-press
                  inline-flex items-center gap-2
                  rounded-xl
                  bg-slate-950 dark:bg-blue-600
                  px-5 py-3
                  font-semibold text-xs uppercase tracking-wider
                  text-white
                  hover:bg-slate-800 dark:hover:bg-blue-500
                  shadow-md
                  transition-all
                "
              >
                <span>{language === 'de' ? 'Führungsgespräch anfragen' : 'Schedule Executive Discussion'}</span>
                <span className="font-mono text-sm leading-none">→</span>
              </a>

              <Link
                href="/platform"
                className="
                  tap-press
                  inline-flex items-center gap-2
                  rounded-xl
                  border-2 border-slate-200 dark:border-slate-700
                  bg-white dark:bg-slate-800
                  px-5 py-3
                  font-semibold text-xs uppercase tracking-wider
                  text-slate-900 dark:text-slate-200
                  hover:bg-slate-50 dark:hover:bg-slate-700
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
