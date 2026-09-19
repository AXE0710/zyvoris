'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PlatformSteps from '@/components/platform-steps'

import CoreCapabilities from '@/components/core-capabilities'
import PlatformArchitecture from '@/components/platform-architecture'
import Jurisdictions from '@/components/jurisdictions'
import { useLanguage } from '@/components/language-provider'

export default function PlatformPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPlayed(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#f0f4f9] text-foreground transition-colors duration-200 dark:bg-[#080d1a]">

      {/* =========================================================
          1. PLATFORM HERO — centered text
      ========================================================== */}
      <section className="relative overflow-hidden border-b-2 border-slate-900 pb-16 pt-28 dark:border-slate-800 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        {/* Ambient Blue Radial Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)] blur-3xl" />
        
        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15 bg-[linear-gradient(rgba(30,58,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1.5 backdrop-blur-md dark:border-blue-900/60 dark:bg-blue-950/40">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span className="font-sans text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'DIE PLATTFORM' : 'THE PLATFORM'}
            </span>
          </div>

          {/* Headline with Serif Italic & Ink Underline */}
          <h1 className="text-3xl font-normal leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Steuerinfrastruktur{' '}
                </span>
                für{' '}
                <span className="relative inline-block whitespace-nowrap px-1">
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    komplexe
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
                <span className="font-sans font-semibold">Private Markets.</span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Tax infrastructure{' '}
                </span>
                built for{' '}
                <span className="relative inline-block whitespace-nowrap px-1">
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    complex
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
                <span className="font-sans font-semibold">private markets.</span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-relaxed">
            {isGerman
              ? 'ZYVORIS überführt komplexe Fondsdaten in kontrolliertes, länderspezifisch aufbereitetes Steuerreporting – mit Strukturmodellierung, Steuerlogik, Berechnungen, fachlicher Prüfung und Reporting in einer Plattform.'
              : 'ZYVORIS transforms complex fund data into controlled, jurisdiction-ready tax reporting — combining structure, tax logic, calculations, review, and reporting in one platform.'}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="tap-press inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-7 font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/35 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              <span>{isGerman ? 'DEMO VEREINBAREN' : 'BOOK A DEMO'}</span>
              <span className="font-mono text-sm leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM — HOW IT WORKS (6 concise steps) */}
      <PlatformSteps />

      {/* 4. PLATFORM — CORE CAPABILITIES (Clean 8-item grid) */}
      <CoreCapabilities />

      {/* 5. PLATFORM — ARCHITECTURE PRINCIPLE (Separate data, logic, calculation, and review) */}
      <PlatformArchitecture />

      {/* 6. PLATFORM — ROADMAP (Simple jurisdiction cards) */}
      <Jurisdictions />

    </div>
  )
}
