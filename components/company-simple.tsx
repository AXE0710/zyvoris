'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function CompanySimple() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

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
    <main className="relative min-h-screen bg-[#f0f4f9] px-4 pb-20 pt-28 text-foreground transition-colors duration-200 dark:bg-[#080d1a] sm:px-6 sm:pt-32 lg:px-[5vw] lg:pt-36">
      <div className="relative mx-auto max-w-[1420px]">
        {/* =========================================================
            1. COMPANY HERO & MISSION (Side-by-side)
        ========================================================== */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          {/* Left: Company Intro */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400">
              <span>[ {isGerman ? 'UNTERNEHMEN' : 'COMPANY'} ]</span>
            </div>
            <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              {isGerman
                ? 'Die Steuerinfrastruktur-Schicht für Privatmärkte.'
                : 'Building the tax infrastructure layer for private markets.'}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              {isGerman
                ? 'ZYVORIS wurde gegründet, um die Strukturierung, Berechnung, Prüfung und das Reporting komplexer Fondssteuerdaten zu modernisieren.'
                : 'ZYVORIS was created to modernize how complex fund tax data is structured, calculated, reviewed, and reported.'}
            </p>
          </div>

          {/* Right: Mission Card */}
          <div className="rounded-3xl border-2 border-slate-900 bg-white p-7 sm:p-9 lg:p-10 shadow-md dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {isGerman ? 'MISSION' : 'MISSION'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
              {isGerman
                ? 'Moderne Infrastruktur für komplexe Steueroperationen.'
                : 'Modern infrastructure for complex tax operations.'}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
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
          <div className="mb-8 border-b-2 border-slate-900 pb-4 dark:border-slate-800">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'GRÜNDER' : 'FOUNDERS'}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {isGerman ? 'Die Menschen hinter ZYVORIS.' : 'The people behind ZYVORIS.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8"
              >
                <div className="flex items-center gap-5 border-b-2 border-slate-900 pb-5 dark:border-slate-800">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
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
                <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
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
          <div className="mb-8 border-b-2 border-slate-900 pb-4 dark:border-slate-800">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'PRINZIPIEN' : 'PRINCIPLES'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="
                  group relative flex flex-col justify-between
                  rounded-2xl
                  border-2 border-slate-900 dark:border-slate-700
                  bg-white dark:bg-slate-900
                  p-6 sm:p-7
                  shadow-sm
                  transition-all duration-150
                  hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
                "
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-900/80 dark:border-slate-800 pb-3.5">
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                    <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      {isGerman ? 'WERT' : 'VALUE'}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-slate-700 dark:text-slate-300">
                      {principle.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between pt-3 border-t border-slate-900/30 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {isGerman ? 'GRUNDSATZ' : 'FOUNDATION'}
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">→</span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}