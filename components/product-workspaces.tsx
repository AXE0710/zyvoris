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

const AUTOPLAY_DURATION_MS = 5000

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

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tabsContainerRef = useRef<HTMLDivElement | null>(null)

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

  // Keep active tab horizontally in view within the strip — no full-page scroll
  useEffect(() => {
    const container = tabsContainerRef.current
    const el = tabRefs.current[activeIdx]
    if (!container || !el) return

    const containerLeft = container.scrollLeft
    const containerRight = containerLeft + container.clientWidth
    const elLeft = el.offsetLeft
    const elRight = elLeft + el.offsetWidth

    if (elLeft < containerLeft) {
      container.scrollTo({ left: elLeft - 12, behavior: 'smooth' })
    } else if (elRight > containerRight) {
      container.scrollTo({ left: elRight - container.clientWidth + 12, behavior: 'smooth' })
    }
  }, [activeIdx])

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

    // Detect horizontal swipe if deltaX is larger than vertical scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextTab()
      } else {
        prevTab()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
    // Resume autoplay after brief delay
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'PLATTFORM-WORKSPACE' : 'PLATFORM WORKSPACE'}
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de'
                ? 'Steuer-Workflows an einem Ort verwalten.'
                : 'Manage tax workflows in one place.'}
            </h2>
          </div>

          {/* Controls: Prev, Next, Autoplay indicator */}
          <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
            <div className="flex items-center gap-1.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-1 shadow-xs">
              <button
                type="button"
                onClick={() => {
                  prevTab()
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 3000)
                }}
                aria-label="Previous workspace"
                className="flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                ←
              </button>

              <span className="px-2 font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                0{activeIdx + 1} / 0{TABS.length}
              </span>

              <button
                type="button"
                onClick={() => {
                  nextTab()
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 3000)
                }}
                aria-label="Next workspace"
                className="flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ── Tab strip — compact pill labels only ── */}
        <div
          ref={tabsContainerRef}
          className="
            relative flex items-center gap-2 mb-6
            overflow-x-auto pb-1 sm:pb-0
            scrollbar-none
          "
        >
          {/* Progress bar under the strip */}
          {!isPaused && (
            <div
              key={`${activeIdx}-progress`}
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
              style={{
                animation: `tabProgress ${AUTOPLAY_DURATION_MS}ms linear forwards`,
              }}
            />
          )}

          {TABS.map((t, idx) => {
            const active = idx === activeIdx
            return (
              <button
                key={t.id}
                ref={(el) => { tabRefs.current[idx] = el }}
                type="button"
                onClick={() => {
                  setActiveIdx(idx)
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 3000)
                }}
                className={`
                  shrink-0 flex items-center gap-2
                  rounded-xl border-2 px-4 py-2
                  font-mono text-xs font-bold
                  transition-all duration-200 whitespace-nowrap
                  ${active
                    ? 'border-slate-950 bg-slate-950 text-white dark:border-blue-500 dark:bg-blue-600'
                    : 'border-slate-900/60 bg-white text-slate-700 hover:border-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-500'
                  }
                `}
              >
                <span className={`text-[10px] font-extrabold ${active ? 'text-blue-300 dark:text-blue-200' : 'text-blue-600 dark:text-blue-400'}`}>
                  [{t.num}]
                </span>
                <span className="text-sm font-bold">{t[lang].title}</span>
              </button>
            )
          })}
        </div>

        {/* ── Screenshot Frame with Touch & Swipe support ── */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
            relative rounded-3xl border-2 border-slate-900 dark:border-slate-700
            bg-white dark:bg-slate-900 overflow-hidden shadow-2xl
            cursor-grab active:cursor-grabbing select-none
          "
        >
          {/* Browser chrome top bar */}
          <div className="flex h-11 items-center justify-between border-b-2 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/90 px-3 sm:px-6 gap-2">
            <div className="flex items-center gap-2 shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 hidden font-mono text-xs font-bold text-slate-700 dark:text-slate-300 sm:inline">
                ZYVORIS Platform
              </span>
            </div>

            {/* In-bar browser URL */}
            <div className="flex items-center gap-1.5 truncate rounded-lg border border-slate-900/30 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 max-w-[200px] sm:max-w-none">
              <span className="text-blue-600 dark:text-blue-400 shrink-0">https://</span>
              <span className="truncate">app.zyvoris.ai/{activeTab.urlSlug}</span>
            </div>

            {/* Sub-view switcher (if multiple screenshots exist) */}
            {activeTab.subViews && activeTab.subViews.length > 1 ? (
              <div className="flex items-center gap-1 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-950 p-0.5 sm:p-1 shrink-0">
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
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-bold rounded-lg transition-all ${
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
              <span className="rounded border border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300 shrink-0">
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
