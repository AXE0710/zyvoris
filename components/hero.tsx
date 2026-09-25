'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from './language-provider'
import { ChromaticImage } from './ui/chromatic-image'

export default function ZyvorisHero({
  setDemoOpen = () => {},
}: {
  setDemoOpen?: (open: boolean) => void
}) {
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

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* =====================================================
          ACETERNITY CHROMATIC IMAGE BACKGROUND EFFECT
          (Silky smooth WebGL color separation, liquid wave & 3D tilt)
      ====================================================== */}
      <ChromaticImage
        src="/chromatic-bg.webp"
        alt="Zyvoris Chromatic Background Effect"
        zoom={0.12}
        displacement={0.045}
        chromaticShift={0.012}
        tilt={0.2}
        className="w-full min-h-[90vh] flex items-center justify-center bg-[#f6f9fd] dark:bg-[#070d18] transition-colors duration-500"
      >
        {/* Soft Ambient Overlay for Light & Dark Mode Text Legibility */}
        <div className="absolute inset-0 bg-white/75 dark:bg-[#070d18]/80 backdrop-blur-[2px] pointer-events-none transition-colors duration-500" />

        {/* Ambient Radial Gradient Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[860px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.14),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(246,249,253,0.85)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(7,13,24,0.9)_100%)]" />

        {/* Minimal Grid Pattern */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-25 dark:opacity-10
            bg-[linear-gradient(rgba(30,58,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.06)_1px,transparent_1px)]
            dark:bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        {/* =====================================================
            CENTERED HERO CONTENT (Clear, Smooth, Easy to Understand)
        ====================================================== */}
        <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 flex flex-col items-center text-center">
      
          {/* Main Headline: Simple, Punchy & Clear */}
          <h1
            className="
              text-[36px] sm:text-[54px] lg:text-[64px]
              font-normal
              leading-[1.1]
              tracking-tight
              text-slate-950 dark:text-white
              max-w-4xl
            "
          >
            {language === 'de' ? (
              <>
                Komplexe Fondsdaten in{' '}
                <span
                  className="relative inline-block whitespace-nowrap px-1 cursor-pointer select-none"
                  onMouseEnter={handleUnderlineHover}
                  title="Hover to replay underline"
                >
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    geprüfte
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
                </span>{' '}
                Steuerberichte verwandeln
              </>
            ) : (
              <>
                Turn complex fund data into{' '}
                <span
                  className="relative inline-block whitespace-nowrap px-1 cursor-pointer select-none"
                  onMouseEnter={handleUnderlineHover}
                  title="Hover to replay underline"
                >
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    audit-ready
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
                </span>{' '}
                <span className="font-sans font-semibold">
                  tax reporting
                </span>
              </>
            )}
          </h1>

          {/* Subheadline (Direct, plain language, easy to understand) */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base sm:text-lg lg:text-xl
              leading-[1.6]
              text-slate-600 dark:text-slate-300
            "
          >
            {language === 'de'
              ? 'ZYVORIS automatisiert Fondssteuer-Berechnungen, Allokationen und das Investoren-Reporting in einer zentralen, verlässlichen Plattform.'
              : 'ZYVORIS automates fund tax calculations, multi-tier allocations, and investor reporting in one structured, reliable platform.'}
          </p>

          {/* Action Buttons: Book a Demo & Explore the Platform */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link
              href="/contact"
              className="
                tap-press
                shimmer-sweep
                inline-flex items-center justify-center gap-2
                h-12 px-7
                w-full sm:w-auto
                rounded-xl
                bg-blue-600 dark:bg-blue-600  dark:hover:bg-blue-500
                text-white font-semibold text-xs uppercase tracking-wider
                shadow-md shadow-slate-950/15 dark:shadow-blue-500/25
                no-underline transition-all duration-200
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
                h-12 px-7
                w-full sm:w-auto
                rounded-xl
                border-2 border-slate-900/80 dark:border-slate-700/80
                bg-white/90 dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700
                text-slate-900 dark:text-slate-200
                font-semibold text-xs uppercase tracking-wider
                backdrop-blur-md
                shadow-xs
                no-underline transition-all duration-200
              "
            >
              {t('nav_explore', 'Explore the Platform')}
            </Link>
          </div>

        </div>
      </ChromaticImage>
    </section>
  )
}
