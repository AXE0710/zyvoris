'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useLanguage } from './language-provider'

// ─── Tab configuration ────────────────────────────────────────────────────────

type TabId = 'calculate' | 'review' | 'trace' | 'report'

interface SubView {
  id: string
  labelEn: string
  labelDe: string
  image: string
  alt: string
}

interface Tab {
  id: TabId
  num: string
  en: { title: string; desc: string }
  de: { title: string; desc: string }
  defaultImage: string
  subViews?: SubView[]
  urlSlug: string
}

const TABS: Tab[] = [
  {
    id: 'calculate',
    num: '01',
    en: { title: 'Calculate', desc: 'Run structured tax calculations and allocations.' },
    de: { title: 'Berechnen',  desc: 'Strukturierte Steuerberechnungen und Allokationen ausführen.' },
    defaultImage: '/2_calculation_workspace.png',
    subViews: [
      {
        id: 'calc-workspace',
        labelEn: 'Calculation Workspace',
        labelDe: 'Berechnungs-Workspace',
        image: '/2_calculation_workspace.png',
        alt: 'ZYVORIS calculation workspace',
      },
      {
        id: 'calc-allocation',
        labelEn: 'Share-Class Allocation',
        labelDe: 'Anteilsklassen-Allokation',
        image: '/3_share_class_allocation.png',
        alt: 'ZYVORIS share-class allocation',
      },
    ],
    urlSlug: 'calculate',
  },
  {
    id: 'review',
    num: '02',
    en: { title: 'Review', desc: 'Identify exceptions and validate results before reporting.' },
    de: { title: 'Prüfen',  desc: 'Ausnahmen identifizieren und Ergebnisse vor dem Reporting validieren.' },
    defaultImage: '/4_validation_exceptions.png',
    urlSlug: 'review',
  },
  {
    id: 'trace',
    num: '03',
    en: { title: 'Trace', desc: 'Understand how outputs connect back to source data and applied tax logic.' },
    de: { title: 'Nachverfolgen', desc: 'Verstehen, wie Outputs mit Quelldaten und angewandter Steuerlogik verbunden sind.' },
    defaultImage: '/5_calculation_trace.png',
    subViews: [
      {
        id: 'trace-dag',
        labelEn: 'Lineage Pipeline',
        labelDe: 'Lineage-Pipeline',
        image: '/5_calculation_trace.png',
        alt: 'ZYVORIS calculation trace lineage pipeline',
      },
      {
        id: 'trace-table',
        labelEn: 'Lineage Table',
        labelDe: 'Lineage-Tabelle',
        image: '/5b_calculation_trace_lineage_table.png',
        alt: 'ZYVORIS calculation trace lineage table',
      },
    ],
    urlSlug: 'trace',
  },
  {
    id: 'report',
    num: '04',
    en: { title: 'Report', desc: 'Prepare structured jurisdiction-specific reporting outputs.' },
    de: { title: 'Reporting', desc: 'Strukturierte jurisdiktionsspezifische Reporting-Outputs erstellen.' },
    defaultImage: '/6_reporting_output.png',
    subViews: [
      {
        id: 'report-dataset',
        labelEn: 'Tax Dataset & ICTax',
        labelDe: 'Steuerdatensatz & ICTax',
        image: '/6_reporting_output.png',
        alt: 'ZYVORIS reporting output dataset',
      },
      {
        id: 'report-approval',
        labelEn: 'PDF / XML & Sign-Off',
        labelDe: 'PDF / XML & Freigabe',
        image: '/6b_reporting_pdf_xml_and_approval.png',
        alt: 'ZYVORIS PDF XML sign-off approval',
      },
    ],
    urlSlug: 'report',
  },
]

const AUTOPLAY_DURATION_MS = 6000

export default function ProductWorkspaces() {
  const { language } = useLanguage()
  const lang = language === 'de' ? 'de' : 'en'

  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [subSel, setSubSel] = useState<Record<string, string>>({
    calculate: 'calc-workspace',
    trace: 'trace-dag',
    report: 'report-dataset',
  })

  // Touch gesture state
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const activeTab = TABS[activeIdx]

  const nextTab = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % TABS.length)
  }, [])

  const prevTab = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + TABS.length) % TABS.length)
  }, [])

  // Auto-scroll / autoplay timer
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextTab()
    }, AUTOPLAY_DURATION_MS)

    return () => clearInterval(timer)
  }, [isPaused, nextTab, activeIdx])

  // Touch handlers for swipe scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextTab()
      } else {
        prevTab()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
    setTimeout(() => setIsPaused(false), 2500)
  }

  // Active image calculation
  const activeImage = (() => {
    if (activeTab.subViews?.length) {
      const selId = subSel[activeTab.id] ?? activeTab.subViews[0].id
      const sv = activeTab.subViews.find((s) => s.id === selId) ?? activeTab.subViews[0]
      return { src: sv.image, alt: sv.alt }
    }
    return { src: activeTab.defaultImage, alt: `ZYVORIS ${activeTab.en.title} workspace` }
  })()

  return (
    <section
      id="product-workspaces"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-[#f0f4f9] dark:bg-[#090e1c]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        text-[#0b1533] dark:text-slate-100
        transition-colors duration-200
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto max-w-[1420px]">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
                {language === 'de' ? 'PLATTFORM-WORKSPACE' : 'PLATFORM WORKSPACE'}
              </span>
            </div>

            <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Steuer-Workflows{' '}
                  </span>
                  an einem Ort verwalten.
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                    Manage tax workflows{' '}
                  </span>
                  in one place.
                </>
              )}
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-900 dark:text-white">
              [{activeTab.num}] {activeTab[lang].title}
            </span>
            <span>—</span>
            <span>{activeTab[lang].desc}</span>
          </div>
        </div>

        {/* ── Screenshot Frame with Integrated Chrome & Navigation (No Distracting Above Buttons) ── */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
            relative rounded-3xl border-2 border-slate-900 dark:border-slate-700
            bg-white dark:bg-slate-900 overflow-hidden shadow-2xl
            cursor-grab active:cursor-grabbing select-none
          "
        >
          {/* Browser chrome top bar with sleek embedded tab switches */}
          <div className="flex h-12 items-center justify-between border-b-2 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/90 px-3 sm:px-6 gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 hidden font-mono text-xs font-bold text-slate-700 dark:text-slate-300 md:inline">
                ZYVORIS Platform
              </span>
            </div>

            {/* Embedded Minimal Workspace Tabs inside Window Bar */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
              {TABS.map((t, idx) => {
                const active = idx === activeIdx
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveIdx(idx)
                      setIsPaused(true)
                      setTimeout(() => setIsPaused(false), 3000)
                    }}
                    className={`
                      px-2.5 sm:px-3.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all whitespace-nowrap
                      ${active
                        ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs border border-slate-300 dark:border-slate-700'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }
                    `}
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-1">{t.num}</span>
                    <span>{t[lang].title}</span>
                  </button>
                )
              })}
            </div>

            {/* Sub-view switcher (if multiple screenshots exist for current workspace) */}
            {activeTab.subViews && activeTab.subViews.length > 1 ? (
              <div className="flex items-center gap-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-0.5 shrink-0">
                {activeTab.subViews.map((sv) => {
                  const isCurrent = (subSel[activeTab.id] ?? activeTab.subViews![0].id) === sv.id
                  return (
                    <button
                      key={sv.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSubSel((prev) => ({ ...prev, [activeTab.id]: sv.id }))
                      }}
                      className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded-md transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {lang === 'de' ? sv.labelDe : sv.labelEn}
                    </button>
                  )
                })}
              </div>
            ) : (
              <span className="hidden sm:inline-block rounded border border-emerald-600/60 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300 shrink-0">
                PROD-CH
              </span>
            )}
          </div>

          {/* Screenshot image container */}
          <div className="relative bg-slate-950 overflow-hidden">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] max-h-[680px]">
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                className="object-contain object-top transition-opacity duration-300"
              />
            </div>

            {/* Overlay Navigation Buttons on Screenshot */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prevTab()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 3000)
              }}
              aria-label="Previous image"
              className="
                absolute left-3 top-1/2 -translate-y-1/2 z-10
                flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center
                rounded-full border-2 border-slate-900/80 bg-white/90 dark:bg-slate-900/90
                text-slate-900 dark:text-white font-mono text-base font-bold shadow-lg
                backdrop-blur-sm transition-transform hover:scale-110 active:scale-95
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                nextTab()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 3000)
              }}
              aria-label="Next image"
              className="
                absolute right-3 top-1/2 -translate-y-1/2 z-10
                flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center
                rounded-full border-2 border-slate-900/80 bg-white/90 dark:bg-slate-900/90
                text-slate-900 dark:text-white font-mono text-base font-bold shadow-lg
                backdrop-blur-sm transition-transform hover:scale-110 active:scale-95
              "
            >
              →
            </button>
          </div>

          {/* Bottom helper bar: dots & swipe indicator */}
          <div className="flex items-center justify-between border-t border-slate-900/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/95 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              {TABS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setActiveIdx(i)
                    setIsPaused(true)
                    setTimeout(() => setIsPaused(false), 3000)
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${i === activeIdx
                      ? 'w-6 bg-blue-600 dark:bg-blue-400'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }
                  `}
                />
              ))}
            </div>

            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400">
              {lang === 'de' ? '← Wischen oder Pfeile nutzen →' : '← Swipe or use arrows to navigate →'}
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
