'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function CustomerSegments() {
  const { t, language } = useLanguage()
  const isGerman = language === 'de'

  const segments = [
    {
      number: '01',
      audience: t('seg_1_aud', 'Fund Managers & AIFMs'),
      description: t(
        'seg_1_desc',
        'Gain control across tax calculations, reporting workflows, and jurisdictions.'
      ),
      badge: 'PORTFOLIO STRATEGY',
      image: '/segments/fund-managers.jpg',
      superpower: isGerman
        ? 'Volle Kontrolle & automatisierte Abstimmungen über alle Vehikel.'
        : 'Holistic cross-vehicle control and automated reconciliations.',
      featured: false,
    },
    {
      number: '02',
      audience: t('seg_2_aud', 'Fund Administrators'),
      description: t(
        'seg_2_desc',
        'Add structured tax workflows to existing fund operations.'
      ),
      badge: 'GL OPERATIONS',
      image: '/segments/fund-admins.jpg',
      superpower: isGerman
        ? 'Nahtlose Integration in bestehende Fondsbuchhaltungs-Engines.'
        : 'Seamless integration into existing fund accounting GLs.',
      featured: false,
    },
    {
      number: '03',
      audience: t('seg_3_aud', 'Tax & Accounting Firms'),
      description: t(
        'seg_3_desc',
        'Standardize execution while preserving professional review.'
      ),
      badge: 'AUDIT & COMPLIANCE',
      image: '/segments/tax-firms.jpg',
      superpower: isGerman
        ? 'Revisionssichere Arbeitsberichte & Skalierung ohne Personalengpass.'
        : 'Audit-ready workpapers and execution scale without bottlenecks.',
      featured: false,
    },
    {
      number: '04',
      audience: t('seg_4_aud', 'Institutional Investors'),
      description: t(
        'seg_4_desc',
        'Bring structure and visibility to complex fund tax data.'
      ),
      badge: 'LP ALLOCATION',
      image: '/segments/investors.jpg',
      superpower: isGerman
        ? 'Durchsichtstransparenz & einheitliche Steuerreporting-Pakete.'
        : 'Look-through tax transparency and unified investor tax packs.',
      featured: false,
    },
  ]

  return (
    <section
      id="customer-segments"
      className="
        relative overflow-hidden
        border-t border-slate-200/90 dark:border-slate-800/80
        bg-white dark:bg-[#080d1a]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        transition-colors duration-300
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Section Heading - No capsule buttons */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            {isGerman ? (
              <>
                Für die zuständigen Teams <br />
                <span className="font-serif italic font-normal text-blue-600 dark:text-blue-400">
                  für komplexes Steuerreporting
                </span>
              </>
            ) : (
              <>
                For the teams{' '}
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  responsible
                </span>
                <br />
                <span className="font-sans font-semibold text-blue-600 dark:text-blue-400">
                  for complex fund tax reporting
                </span>
              </>
            )}
          </h2>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <article
              key={segment.number}
              className={`
                group relative flex flex-col justify-between overflow-hidden
                rounded-3xl
                bg-white dark:bg-[#0c152a]
                p-5
                shadow-xs
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-blue-950/40
                ${
                  segment.featured
                    ? 'border-2 border-blue-500/80 ring-1 ring-blue-500/30'
                    : 'border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700'
                }
              `}
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={segment.image}
                    alt={segment.audience}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Tag Badge */}
                  <span className="absolute bottom-2.5 left-2.5 rounded-md bg-black/85 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider text-white select-none">
                    {segment.badge}
                  </span>
                </div>

                {/* Audience Title & Description */}
                <div className="mt-4">
                  <h3 className="m-0 text-base sm:text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                    {segment.audience}
                  </h3>

                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {segment.description}
                  </p>
                </div>
              </div>

              {/* Bottom Outcome Box */}
              <div className="mt-5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/60 p-3">
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  {isGerman ? 'MEHRWERT:' : 'KEY OUTCOME:'}
                </span>
                <span className="font-mono text-xs text-slate-700 dark:text-slate-300 leading-normal block">
                  {segment.superpower}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}