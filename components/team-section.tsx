'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from './language-provider'

export default function TeamSection() {
  const { language } = useLanguage()

  const founders = [
    {
      name: 'Mubashar Khan',
      role: language === 'de' ? 'Mitgründer & Managing Director' : 'Co-Founder & Managing Director',
      tag: 'TAX & FUND INFRASTRUCTURE',
      image: '/mubashar-cropped.jpg',
      experience: language === 'de' ? '12+ Jahre Branchenerfahrung' : '12+ Years Institutional Experience',
      bio:
        language === 'de'
          ? '12+ Jahre Erfahrung in internationaler und grenzüberschreitender Besteuerung, Privatmarktfonds-Strukturen, Steuerreporting, operativen Betriebsmodellen und technologiegestützten Steuerprozessen (Luxemburg, Schweiz, USA, UK, Deutschland).'
          : '12+ years of experience across international and cross-border taxation, private-market fund structures, tax reporting, operating models, and technology-enabled tax processes.',
      focus: ['Fund Structuring & Domiciles', 'Cross-Border Tax Logic', 'Regulatory Frameworks', 'Institutional Operations'],
    },
    {
      name: 'Sikandar Khan',
      role: language === 'de' ? 'Mitgründer & CTO' : 'Co-Founder & CTO',
      tag: 'ENGINEERING & AI ARCHITECTURE',
      image: '/sikandar.jpeg',
      experience: language === 'de' ? 'System- & KI-Architekt' : 'Enterprise Systems & AI Architect',
      bio:
        language === 'de'
          ? 'Spezialisiert auf skalierbare verteilte Architekturen, deterministische Berechnungs-Engines, automatisierte Datenpipelines und Zero-Retention KI-Workflows für Finanzinfrastruktur.'
          : 'Specialized in scalable distributed architectures, deterministic calculation engines, automated high-throughput data engineering, and zero-retention AI workflows for financial infrastructure.',
      focus: ['Deterministic Engine', 'Data Pipeline Architecture', 'Zero-Retention AI', 'Tenant Isolation & Audit Lineage'],
    },
  ]

  return (
    <section
      id="team"
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'FÜHRUNG & ARCHITEKTUR' : 'LEADERSHIP & ARCHITECTURE'}
              </span>
            </div>

            <h2 className="max-w-[780px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? 'Entwickelt von Steuerexperten und' : 'Built by institutional tax leaders and'}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'Infrastruktur-Ingenieuren.' : 'infrastructure engineers.'}
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Wir verbinden tiefes institutionelles Fachwissen über internationale Fondsstrukturen mit deterministischer Software-Architektur für höchste Rechenpräzision.'
              : 'We bridge the divide between multi-jurisdictional private market tax logic and modern, high-throughput cloud infrastructure.'}
          </p>
        </div>

        {/* Founders Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {founders.map((f) => (
            <div
              key={f.name}
              className="
                rounded-3xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-900
                p-6 sm:p-8
                shadow-md
                transition-all duration-150
                hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500
              "
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-5 border-b-2 border-slate-900/80 dark:border-slate-800">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                  <Image src={f.image} alt={f.name} fill className="object-cover object-top" />
                </div>
                <div>
                  <span className="inline-block rounded border border-slate-900/60 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200">
                    {f.tag}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{f.name}</h3>
                  <p className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">{f.role}</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{f.experience}</p>
                </div>
              </div>

              <p className="mt-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {f.bio}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-900/20 dark:border-slate-800 flex flex-wrap gap-2">
                {f.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-slate-900/40 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-900 dark:text-slate-200"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Leadership CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-2.5 font-mono text-xs font-bold text-slate-900 dark:text-white shadow-xs hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-700 transition-all"
          >
            <span>{language === 'de' ? 'VOLLSTÄNDIGES TEAM ANSEHEN' : 'VIEW FULL LEADERSHIP & VALUES'}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
