'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from './language-provider'

export default function ZyvorisHero({
  setDemoOpen = () => {},
}: {
  setDemoOpen?: (open: boolean) => void
}) {
  const [activeIndex, setActiveIndex] = useState<number>(3) // Default to stage 04 CALCULATION
  const [animationPlayed, setAnimationPlayed] = useState(false)
  const [inkKey, setInkKey] = useState(0)
  const { t, language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPlayed(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleUnderlineHover = () => {
    setInkKey((prev) => prev + 1)
  }

  const STAGES = [
    {
      id: '01',
      title: t('stage_1_title', 'DATA'),
    },
    {
      id: '02',
      title: t('stage_2_title', 'STRUCTURE'),
    },
    {
      id: '03',
      title: t('stage_3_title', 'TAX LOGIC'),
    },
    {
      id: '04',
      title: t('stage_4_title', 'CALCULATION'),
      featured: true,
    },
    {
      id: '05',
      title: t('stage_5_title', 'REVIEW'),
    },
    {
      id: '06',
      title: t('stage_6_title', 'REPORTING'),
    },
  ]

  return (
    <section
      id="top"
      className="
        relative min-h-[90vh] flex items-center overflow-hidden
        bg-[#f6f9fd] dark:bg-[#070d18]
        pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-38 lg:pb-28
        px-4 sm:px-6 lg:px-[4vw]
        transition-colors duration-300
      "
    >
      {/* Ambient Blue Radial Gradients (Valim style) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[840px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[360px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.22),transparent_70%)] blur-2xl" />

      {/* Grid Pattern */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-35 dark:opacity-15
          bg-[linear-gradient(rgba(30,58,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]
          bg-[size:52px_52px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =====================================================
              LEFT — HERO COPY WITH VALIM TYPOGRAPHY & ANIMATION
          ====================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Kicker Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 backdrop-blur-md self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-blue-800 dark:text-blue-300">
                {t('hero_kicker', 'TAX INFRASTRUCTURE FOR PRIVATE MARKETS')}
              </span>
            </div>

            {/* Main Headline with Serif Italic & Ink Stroke */}
            <h1
              className="
                text-[34px] sm:text-[50px] lg:text-[58px]
                font-normal
                leading-[1.1]
                tracking-tight
                text-slate-950 dark:text-white
              "
            >
              {language === 'de' ? (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Von{' '}
                  </span>
                  komplexen Fondsdaten zu{' '}
                  <span
                    className="relative inline-block whitespace-nowrap px-1 cursor-pointer select-none"
                    onMouseEnter={handleUnderlineHover}
                    title="Hover to replay underline"
                  >
                    <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                      kontrolliertem
                    </span>
                    <svg
                      key={inkKey}
                      className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-blue-500/80 dark:text-blue-400 overflow-visible pointer-events-none"
                      viewBox="0 0 300 20"
                      fill="none"
                    >
                      <path
                        d="M3 14.5C65 5.5 170 -1.5 295 11.5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className={animationPlayed ? 'ink-path' : ''}
                        style={{ '--len': 320, '--dur': '1.3s', '--delay': inkKey > 0 ? '0s' : '0.3s' } as React.CSSProperties}
                      />
                    </svg>
                  </span>
                  , jurisdiktionsspezifischem Steuerreporting
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Turn{' '}
                  </span>
                  complex fund data into{' '}
                  <span
                    className="relative inline-block whitespace-nowrap px-1 cursor-pointer select-none"
                    onMouseEnter={handleUnderlineHover}
                    title="Hover to replay underline"
                  >
                    <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                      controlled
                    </span>
                    <svg
                      key={inkKey}
                      className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-blue-500/80 dark:text-blue-400 overflow-visible pointer-events-none"
                      viewBox="0 0 300 20"
                      fill="none"
                    >
                      <path
                        d="M3 14.5C65 5.5 170 -1.5 295 11.5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className={animationPlayed ? 'ink-path' : ''}
                        style={{ '--len': 320, '--dur': '1.3s', '--delay': inkKey > 0 ? '0s' : '0.3s' } as React.CSSProperties}
                      />
                    </svg>
                  </span>
                  ,{' '}
                  <span className="font-sans font-semibold">
                    jurisdiction-ready tax reporting
                  </span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p
              className="
                mt-5 sm:mt-6
                max-w-[620px]
                text-base sm:text-lg
                leading-[1.68]
                text-slate-600 dark:text-slate-300
              "
            >
              {language === 'de'
                ? 'ZYVORIS verbindet Fondsdaten, Steuerlogik, Berechnungen, Prüfung und Reporting in einer strukturierten Plattform für Private Markets.'
                : 'ZYVORIS connects fund data, tax logic, calculations, review, and reporting in one structured platform built for private markets.'}
            </p>

            {/* Action Buttons: Book a Demo & Explore the Platform */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/contact"
                className="
                  tap-press
                  shimmer-sweep
                  inline-flex items-center justify-center gap-2
                  h-12 px-6
                  rounded-xl
                  bg-slate-950 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500
                  text-white font-semibold text-xs uppercase tracking-wider
                  shadow-md shadow-slate-950/10 dark:shadow-blue-500/25
                  no-underline transition-all
                "
              >
                <span>{t('nav_book_demo', 'Book a Demo')}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/platform"
                className="
                  tap-press
                  inline-flex items-center justify-center gap-2
                  h-12 px-6
                  rounded-xl
                  border-2 border-slate-900 dark:border-slate-700
                  bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700
                  text-slate-900 dark:text-slate-200
                  font-semibold text-xs uppercase tracking-wider
                  shadow-xs
                  no-underline transition-all
                "
              >
                {t('nav_explore', 'Explore the Platform')}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>{language === 'de' ? 'DETERMINISTISCHE LOGIK' : 'DETERMINISTIC ENGINE'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>{language === 'de' ? '100% NACHVOLLZIEHBAR' : '100% AUDIT LINEAGE'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>{language === 'de' ? 'GRENZÜBERSCHREITENDE JURISDIKTIONEN' : 'CROSS-BORDER JURISDICTIONS'}</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CLEAN MINIMALIST TITLES SHOWCASE (VALIM STYLE)
              (Only the titles: spacious, clean, zero text overload)
          ====================================================== */}
          <div className="lg:col-span-5 w-full">
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border-2 border-slate-200/90 dark:border-slate-800
                bg-white dark:bg-[#0c152a]
                p-5 sm:p-7
                shadow-xl shadow-blue-950/5 dark:shadow-blue-950/40
                transition-all duration-300
              "
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="ml-2 font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t('hero_pipeline_title', 'OPERATIONAL SCOPE')}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-[9.5px] font-mono font-bold text-blue-700 dark:text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                  <span>{t('hero_deterministic', 'STRUCTURED PLATFORM')}</span>
                </div>
              </div>

              {/* 6 Clean Numbered Rows — ONLY TITLES */}
              <div className="mt-4 space-y-2.5">
                {STAGES.map((stage, idx) => {
                  const isActive = activeIndex === idx

                  return (
                    <div
                      key={stage.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`
                        tap-press group relative flex items-center justify-between
                        px-4 py-3 sm:py-3.5 rounded-xl border transition-all duration-200 cursor-pointer
                        ${
                          isActive
                            ? 'border-blue-600 bg-blue-50/80 dark:border-blue-500 dark:bg-blue-950/50 shadow-xs ring-1 ring-blue-500/30'
                            : 'border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/70'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Number Badge */}
                        <span
                          className={`
                            flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors
                            ${
                              isActive
                                ? 'bg-blue-600 text-white'
                                : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-blue-600'
                            }
                          `}
                        >
                          {stage.id}
                        </span>

                        {/* Clean Title */}
                        <span
                          className={`
                            font-sans text-sm sm:text-[15px] font-bold tracking-tight transition-colors
                            ${
                              isActive
                                ? 'text-blue-950 dark:text-white'
                                : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white'
                            }
                          `}
                        >
                          {stage.title}
                        </span>
                      </div>

                      {/* Right Tag / Arrow */}
                      <div className="flex items-center gap-2">
                        {stage.featured && (
                          <span className="rounded bg-blue-600 text-white px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                            {language === 'de' ? 'KERN' : 'CORE'}
                          </span>
                        )}
                        <ArrowRight
                          className={`
                            h-4 w-4 transition-all duration-200
                            ${
                              isActive
                                ? 'text-blue-600 dark:text-blue-400 translate-x-0.5'
                                : 'text-slate-300 dark:text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5'
                            }
                          `}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bottom Pipeline Stepper */}
              <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[9px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <span className="text-blue-600 dark:text-blue-400">{language === 'de' ? 'DATEN' : 'DATA'}</span>
                <span>→</span>
                <span className="text-slate-700 dark:text-slate-300">{language === 'de' ? 'STRUKTUR' : 'STRUCTURE'}</span>
                <span>→</span>
                <span className="text-blue-600 dark:text-blue-400">{language === 'de' ? 'STEUERLOGIK' : 'TAX LOGIC'}</span>
                <span>→</span>
                <span className="text-slate-700 dark:text-slate-300">{language === 'de' ? 'BERECHNUNG' : 'CALCULATION'}</span>
                <span>→</span>
                <span className="text-blue-600 dark:text-blue-400">{language === 'de' ? 'PRÜFUNG' : 'REVIEW'}</span>
                <span>→</span>
                <span className="text-blue-600 dark:text-blue-400 font-extrabold">{language === 'de' ? 'REPORTING' : 'REPORTING'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
