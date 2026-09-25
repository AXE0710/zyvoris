'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from './language-provider'
import { useInView } from '@/hooks/use-in-view'

export default function FinalCTA() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const { ref: sectionRef, isInView, replayKey, triggerReplay } = useInView({ threshold: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200/80 bg-white px-4 py-16 transition-colors duration-300 dark:border-slate-800/80 dark:bg-[#070d18] sm:px-6 sm:py-24 lg:px-[5vw]"
    >
      <div className="relative mx-auto max-w-[1420px]">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-[#f8fafc] p-5 sm:p-12 lg:p-16 shadow-xl dark:border-slate-800 dark:bg-[#0c152a]">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.14] tracking-tight text-slate-950 dark:text-white break-words">
              {isGerman ? (
                <>
                  <span
                    className="relative inline-block sm:whitespace-nowrap px-1 cursor-pointer select-none"
                    onMouseEnter={triggerReplay}
                    title="Hover to trigger double swish"
                  >
                    <span className="relative z-10 font-serif italic font-normal text-blue-700 dark:text-blue-400">
                      Modernisieren Sie
                    </span>
                    <svg
                      key={replayKey}
                      className="absolute -bottom-2.5 left-0 w-[calc(100%+14px)] h-4 text-blue-500/80 dark:text-blue-400 pointer-events-none overflow-visible"
                      viewBox="0 0 280 20"
                      fill="none"
                    >
                      <path
                        d="M 4 8 C 80 14, 180 15, 270 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className={isInView ? 'ink-path' : 'opacity-0'}
                        style={{ '--len': 290, '--dur': '0.9s', '--delay': '0.2s' } as React.CSSProperties}
                      />
                      <path
                        d="M 35 14 C 90 18, 200 18, 245 12"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        className={isInView ? 'ink-path' : 'opacity-0'}
                        style={{ '--len': 230, '--dur': '0.8s', '--delay': '0.45s' } as React.CSSProperties}
                      />
                    </svg>
                  </span>{' '}
                  Ihren Steuer-Workflow für Privatmärkte
                </>
              ) : (
                <>
                  <span
                    className="relative inline-block sm:whitespace-nowrap px-1 cursor-pointer select-none"
                    onMouseEnter={triggerReplay}
                    title="Hover to trigger double swish"
                  >
                    <span className="relative z-10 font-serif italic font-normal text-blue-700 dark:text-blue-400">
                      Modernize
                    </span>
                    <svg
                      key={replayKey}
                      className="absolute -bottom-2.5 left-0 w-[calc(100%+12px)] h-4 text-blue-500/80 dark:text-blue-400 pointer-events-none overflow-visible"
                      viewBox="0 0 200 20"
                      fill="none"
                    >
                      <path
                        d="M 4 8 C 50 14, 120 15, 190 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className={isInView ? 'ink-path' : 'opacity-0'}
                        style={{ '--len': 220, '--dur': '0.9s', '--delay': '0.2s' } as React.CSSProperties}
                      />
                      <path
                        d="M 28 14 C 70 18, 140 18, 175 12"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        className={isInView ? 'ink-path' : 'opacity-0'}
                        style={{ '--len': 170, '--dur': '0.8s', '--delay': '0.45s' } as React.CSSProperties}
                      />
                    </svg>
                  </span>{' '}
                  your private markets tax workflow
                </>
              )}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {isGerman
                ? 'Sehen Sie, wie ZYVORIS Struktur, Kontrolle und Skalierbarkeit in komplexe Steuer-Reporting-Prozesse bringt.'
                : 'See how ZYVORIS can bring structure, control, and scalability to complex tax reporting processes.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="tap-press shimmer-sweep w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/35 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <span>{isGerman ? 'Demo anfragen' : 'Book a Demo'}</span>
                <span className="font-mono text-sm leading-none">→</span>
              </Link>

              <a
                href="mailto:info@zyvoris.ai?subject=Contact%20ZYVORIS"
                className="tap-press w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 font-semibold text-xs uppercase tracking-wider text-slate-900 shadow-xs transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <span>{isGerman ? 'Kontakt' : 'Contact Us'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
