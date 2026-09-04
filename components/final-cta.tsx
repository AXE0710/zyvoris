'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from './language-provider'

export default function FinalCTA() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  return (
    <section className="relative overflow-hidden border-t-2 border-slate-900 bg-white px-4 py-16 transition-colors duration-200 dark:border-slate-800 dark:bg-[#080d1a] sm:px-6 sm:py-24 lg:px-[5vw]">
      <div className="relative mx-auto max-w-[1420px]">
        <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-[#f0f4f9] p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:p-12 lg:p-16">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {isGerman
                ? 'Modernisieren Sie Ihren Steuer-Workflow für Privatmärkte.'
                : 'Modernize your private markets tax workflow.'}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              {isGerman
                ? 'Sehen Sie, wie ZYVORIS Struktur, Kontrolle und Skalierbarkeit in komplexe Steuer-Reporting-Prozesse bringt.'
                : 'See how ZYVORIS can bring structure, control, and scalability to complex tax reporting processes.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-950 px-6 font-bold text-white shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-slate-800 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <span>{isGerman ? 'Demo anfragen' : 'Book a Demo'}</span>
                <span className="font-mono text-sm leading-none">→</span>
              </Link>

              <a
                href="mailto:info@zyvoris.ai?subject=Contact%20ZYVORIS"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 font-bold text-slate-900 shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
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
