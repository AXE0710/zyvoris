'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function CompanySimple() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
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
      role: isGerman ? 'Mitgründer & Managing Director' : 'Co-Founder & Managing Director',
      image: '/mubashar-cropped.jpg',
      bio: isGerman
        ? 'Mubashar bringt mehr als 12 Jahre Erfahrung in internationaler Besteuerung, Fondsstrukturen in den Privatmärkten, Steuerreporting und technologiegestützten Steuerprozessen mit.'
        : 'Mubashar brings more than 12 years of experience across international taxation, private markets fund structures, tax reporting, and technology-enabled tax processes.',
    },
    {
      name: 'Sikandar Khan',
      role: isGerman ? 'Mitgründer & CTO' : 'Co-Founder & CTO',
      image: '/sikandar.jpeg',
      bio: isGerman
        ? 'Sikandar leitet die Technologiearchitektur von ZYVORIS mit Fokus auf skalierbare Dateninfrastruktur, Berechnungssysteme, Workflow-Automatisierung und KI-Integration.'
        : 'Sikandar leads the technology architecture of ZYVORIS, focusing on scalable data infrastructure, calculation systems, workflow automation, and AI integration.',
    },
  ]

  const principles = [
    {
      title: isGerman ? 'Fachliche Expertise' : 'Domain Expertise',
      description: isGerman
        ? 'Entwickelt für die Realität komplexer Steuer-Workflows in den Privatmärkten.'
        : 'Built around the realities of complex private markets tax workflows.',
    },
    {
      title: isGerman ? 'Kontrolle' : 'Control',
      description: isGerman
        ? 'Automatisierung soll das fachliche Urteil stärken, nicht ersetzen.'
        : 'Automation should strengthen professional judgment, not replace it.',
    },
    {
      title: isGerman ? 'Nachvollziehbarkeit' : 'Traceability',
      description: isGerman
        ? 'Materielle Steuerergebnisse sollen verständlich und prüfbar bleiben.'
        : 'Material tax results should remain understandable and reviewable.',
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
            1. COMPANY HERO & MISSION (Side-by-side)
        ========================================================== */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          {/* Left: Company Intro */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1.5 backdrop-blur-md dark:border-blue-900/60 dark:bg-blue-950/40">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="font-mono text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
                {isGerman ? 'UNTERNEHMEN' : 'COMPANY'}
              </span>
            </div>

            <h1 className="text-3xl font-normal leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              {isGerman ? (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Die Steuerinfrastruktur-{' '}
                  </span>
                  <span className="relative inline-block px-1">
                    <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                      Schicht
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
                  für Privatmärkte.
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Building{' '}
                  </span>
                  the tax infrastructure{' '}
                  <span className="relative inline-block px-1">
                    <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                      layer
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
                  for private markets.
                </>
              )}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              {isGerman
                ? 'ZYVORIS wurde gegründet, um die Strukturierung, Berechnung, Prüfung und das Reporting komplexer Fondssteuerdaten zu modernisieren.'
                : 'ZYVORIS was created to modernize how complex fund tax data is structured, calculated, reviewed, and reported.'}
            </p>
          </div>

          {/* Right: Mission Card */}
          <div className="rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-7 sm:p-9 lg:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {isGerman ? 'MISSION' : 'MISSION'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal leading-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {isGerman ? 'Moderne Infrastruktur ' : 'Modern infrastructure '}
              </span>
              {isGerman ? 'für komplexe Steueroperationen.' : 'for complex tax operations.'}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {isGerman
                ? 'Privatmärkte haben sich schnell entwickelt, während viele Steuerprozesse weiterhin auf fragmentierten Daten und tabellenbasierten Workflows beruhen. ZYVORIS baut die Infrastruktur, um diese Prozesse strukturierter, nachvollziehbarer und skalierbarer zu machen.'
                : 'Private markets have evolved rapidly, while many tax processes still depend on fragmented data and spreadsheet-based workflows. ZYVORIS is building the infrastructure to make those processes more structured, traceable, and scalable.'}
            </p>
          </div>
        </section>

        {/* =========================================================
            3. COMPANY — FOUNDERS
        ========================================================== */}
        <section className="mt-16 sm:mt-24">
          <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {isGerman ? 'GRÜNDER' : 'FOUNDERS'}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal tracking-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {isGerman ? 'Die Menschen ' : 'The people '}
              </span>
              {isGerman ? 'hinter ZYVORIS.' : 'behind ZYVORIS.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="tap-press group rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c152a] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md sm:p-8"
              >
                <div className="flex items-center gap-5 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      {founder.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  {founder.bio}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. COMPANY — PRINCIPLES
        ========================================================== */}
        <section className="mt-16 sm:mt-24">
          <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40">
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {isGerman ? 'PRINZIPIEN' : 'PRINCIPLES'}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal tracking-tight text-slate-950 dark:text-white">
              <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                {isGerman ? 'Unsere Werte ' : 'Our core '}
              </span>
              {isGerman ? 'für den Betrieb.' : 'operating values.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="
                  tap-press
                  group relative flex flex-col justify-between
                  rounded-2xl
                  border-2 border-slate-200 dark:border-slate-800
                  bg-white dark:bg-[#0c152a]
                  p-6 sm:p-7
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md
                "
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                    <span className="rounded-md border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40 px-2 py-0.5 font-mono text-[9.5px] font-bold text-blue-700 dark:text-blue-300 uppercase">
                      {isGerman ? 'WERT' : 'VALUE'}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-slate-600 dark:text-slate-300">
                      {principle.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {isGerman ? 'GRUNDSATZ' : 'FOUNDATION'}
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}