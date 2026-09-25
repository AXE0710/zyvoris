'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from './language-provider'
import {
  ShieldCheck,
  Bell,
  ArrowUp,
  Download,
  CheckCircle2,
} from 'lucide-react'

const EXCEL_ITEMS = [
  { id: 1, name: 'Swiss Equity Large-Cap', nav: 'CHF 16,800,000', gain: '+CHF 1,528,000', total: 18328000 },
  { id: 2, name: 'Euro Core Infrastructure', nav: 'CHF 14,250,000', gain: '+CHF 1,111,500', total: 15361500 },
  { id: 3, name: 'Global High-Yield Debt', nav: 'CHF 11,400,000', gain: '+CHF 912,000', total: 12312000 },
  { id: 4, name: 'Zurich Prime Real Estate', nav: 'CHF 6,000,000', gain: '+CHF 458,500', total: 6458500 },
]

export default function HomeCapabilities() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [scrollRatio, setScrollRatio] = useState(0)

  // Animated states per step
  const [excelGenCount, setExcelGenCount] = useState(1)
  const [ascentStep, setAscentStep] = useState(0)
  const [tierPercent, setTierPercent] = useState(0)
  const [auditLogCount, setAuditLogCount] = useState(0)
  const [reportGenPercent, setReportGenPercent] = useState(0)

  // Track natural page scrolling to switch 3D scenes
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      if (totalScroll <= 0) return

      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1)
      setScrollRatio(progress)

      if (progress < 0.2) {
        setActiveStep(0)
      } else if (progress < 0.4) {
        setActiveStep(1)
      } else if (progress < 0.62) {
        setActiveStep(2)
      } else if (progress < 0.82) {
        setActiveStep(3)
      } else {
        setActiveStep(4)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-play animations for the active step
  useEffect(() => {
    if (activeStep === 0) {
      setExcelGenCount(1)
      const timer = setInterval(() => {
        setExcelGenCount((prev) => (prev < 4 ? prev + 1 : prev))
      }, 600)
      return () => clearInterval(timer)
    }

    if (activeStep === 1) {
      setAscentStep(0)
      const timer = setInterval(() => {
        setAscentStep((prev) => (prev >= 100 ? 100 : prev + 6))
      }, 50)
      return () => clearInterval(timer)
    }

    if (activeStep === 2) {
      setTierPercent(0)
      const timer = setInterval(() => {
        setTierPercent((prev) => (prev >= 100 ? 100 : prev + 5))
      }, 50)
      return () => clearInterval(timer)
    }

    if (activeStep === 3) {
      // Audit logs pop out sequentially WITHOUT ANY CLICK
      setAuditLogCount(0)
      const t1 = setTimeout(() => setAuditLogCount(1), 350)
      const t2 = setTimeout(() => setAuditLogCount(2), 1100)
      const t3 = setTimeout(() => setAuditLogCount(3), 1850)
      const t4 = setTimeout(() => setAuditLogCount(4), 2600)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
        clearTimeout(t4)
      }
    }

    if (activeStep === 4) {
      setReportGenPercent(0)
      const timer = setInterval(() => {
        setReportGenPercent((prev) => (prev >= 100 ? 100 : prev + 4))
      }, 40)
      return () => clearInterval(timer)
    }
  }, [activeStep])

  const AUDIT_MESSAGES = [
    {
      id: 1,
      title: isGerman ? 'Ledger-Hash verifiziert' : 'Ledger Hash Verified',
      code: 'SHA-256: 0x9f4a8b...31e0',
    },
    {
      id: 2,
      title: isGerman ? 'Mehrebenen-Allokation abgestimmt' : 'Multi-Tier Allocation Reconciled',
      code: 'CHF 52,460,000.00 — Zero Drift',
    },
    {
      id: 3,
      title: isGerman ? '142 Steuerregeln erfüllt' : '142 Tax Rules Evaluated',
      code: 'ESTV & InvStG Compliance Passed',
    },
    {
      id: 4,
      title: isGerman ? '4-Augen-Freigabe gestempelt' : 'Dual 4-Eye Approval Sealed',
      code: 'Ed25519 Cryptographic Signature',
    },
  ]

  const formatCHF = (val: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      maximumFractionDigits: 0,
    }).format(val)
  }

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="
        relative
        border-t border-slate-200 dark:border-slate-800
        bg-slate-50/50 dark:bg-[#080d1a]
        text-slate-900 dark:text-white
        transition-colors duration-300
        min-h-[320vh]
      "
    >
      {/* Sticky 3D Showcase Stage */}
      <div className="sticky top-16 md:top-20 z-10 w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-[6vw] py-8">
        
        {/* Main 3D Container with Perspective */}
        <div
          className="mx-auto w-full max-w-[1340px]"
          style={{
            perspective: '1400px',
            perspectiveOrigin: 'center 45%',
          }}
        >
          {/* Main 3D Tilted Card */}
          <div
            className="
              relative rounded-3xl
              border border-slate-200/90 dark:border-slate-800/90
              bg-white/90 dark:bg-[#0c152a]/90
              backdrop-blur-2xl
              shadow-[0_25px_70px_-15px_rgba(0,0,0,0.07)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)]
              p-6 sm:p-10 lg:p-12
              min-h-[540px] sm:min-h-[580px]
              flex flex-col justify-between
              transition-all duration-700 ease-out
            "
            style={{
              transform: `rotateX(${activeStep === 0 ? 8 : activeStep === 1 ? 5 : 0}deg) rotateY(${
                activeStep === 2 ? -3 : activeStep === 3 ? 3 : 0
              }deg) translateZ(10px)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Header: Pure Bold Heading, Theme-Aware, No Icon, No Number, No Pagination */}
            <div className="pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                {activeStep === 0 && (isGerman ? 'Excel-Zahlen generieren' : 'Excel Data Generation')}
                {activeStep === 1 && (isGerman ? 'Aggregation nach oben' : 'Consolidation Ascent')}
                {activeStep === 2 && (isGerman ? 'Mehrebenen-Allokation' : 'Multi-Tier Distribution')}
                {activeStep === 3 && (isGerman ? 'Automatische Audit-Logs' : 'Live Audit Trail')}
                {activeStep === 4 && (isGerman ? 'Steuerpakete & Berichte' : 'Report Generation')}
              </h3>
            </div>

            {/* 3D Scene Viewport */}
            <div className="flex-1 py-8 flex flex-col justify-center">

              {/* ========================================================================= */}
              {/* STAGE 1: EXCEL NUMBERS GENERATING (3D Spread)                            */}
              {/* ========================================================================= */}
              {activeStep === 0 && (
                <div
                  className="w-full max-w-4xl mx-auto space-y-4"
                  style={{
                    transform: 'translateZ(30px)',
                  }}
                >
                  <div className="grid grid-cols-1 gap-3">
                    {EXCEL_ITEMS.map((item, index) => {
                      const isShown = index < excelGenCount
                      return (
                        <div
                          key={item.id}
                          className={`
                            rounded-2xl border p-4 sm:p-5 flex items-center justify-between
                            transition-all duration-500 ease-out
                            ${
                              isShown
                                ? 'opacity-100 translate-y-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md'
                                : 'opacity-20 translate-y-4 bg-slate-100/50 dark:bg-slate-950/40 border-dashed border-slate-300 dark:border-slate-800'
                            }
                          `}
                          style={{
                            transform: `translateZ(${isShown ? 20 : 0}px)`,
                          }}
                        >
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                              {item.name}
                            </h4>
                            <div className="text-sm font-mono text-slate-500 dark:text-slate-400 mt-1">
                              {item.nav}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-lg sm:text-xl font-mono font-extrabold text-blue-600 dark:text-blue-400">
                              {isShown ? formatCHF(item.total) : 'CHF ---'}
                            </div>
                            <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                              {isShown ? item.gain : '---'}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Grand Total Bar */}
                  <div className="rounded-2xl border-2 border-blue-500/80 bg-blue-50/60 dark:bg-blue-950/40 p-5 sm:p-6 flex items-center justify-between shadow-xl">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                      {isGerman ? 'Gesamter Fondspool' : 'Total Fund Pool'}
                    </h4>
                    <div className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-600 dark:text-blue-400">
                      {formatCHF(
                        EXCEL_ITEMS.slice(0, excelGenCount).reduce((acc, curr) => acc + curr.total, 0)
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* STAGE 2: LITTLE BY LITTLE IT GOES UP (3D Ascent)                         */}
              {/* ========================================================================= */}
              {activeStep === 1 && (
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center space-y-6">
                  
                  {/* Top Elevated Consolidated Master Pool */}
                  <div
                    className="
                      w-full rounded-3xl border-2 border-blue-500
                      bg-gradient-to-b from-blue-600 to-indigo-700 text-white
                      p-8 sm:p-10 text-center shadow-2xl shadow-blue-500/30
                      transition-all duration-700
                    "
                    style={{
                      transform: 'translateZ(60px) rotateX(-4deg)',
                    }}
                  >
                    <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-100 mb-2">
                      {isGerman ? 'Konsolidierter Steuer-Nexus' : 'Consolidated Tax Base Pool'}
                    </h4>
                    <div className="text-4xl sm:text-6xl font-mono font-black tracking-tight my-2">
                      {formatCHF(
                        Math.round((52460000 * Math.min(ascentStep + 20, 100)) / 100)
                      )}
                    </div>
                  </div>

                  {/* Flowing Upward Beams */}
                  <div className="w-full max-w-md h-24 flex items-center justify-around">
                    {EXCEL_ITEMS.map((item) => (
                      <div key={item.id} className="flex flex-col items-center h-full justify-between">
                        <div
                          className="w-2 rounded-full bg-gradient-to-t from-transparent via-blue-500 to-emerald-400 transition-all duration-500"
                          style={{
                            height: `${Math.min(ascentStep, 100)}%`,
                          }}
                        />
                        <div className="text-xs sm:text-sm font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                          <ArrowUp className="h-3.5 w-3.5 animate-bounce" />
                          <span>+{(item.total / 1000000).toFixed(1)}M</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ground Layer */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      {isGerman ? 'Portfolios aggregiert' : 'Portfolios Aggregated Upward'}
                    </h4>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* STAGE 3: MULTI-TIER ALLOCATION DISTRIBUTION (3D Cascading Blocks)         */}
              {/* ========================================================================= */}
              {activeStep === 2 && (
                <div
                  className="w-full max-w-5xl mx-auto space-y-6"
                  style={{
                    transform: 'translateZ(40px)',
                  }}
                >
                  {/* Top Nexus */}
                  <div className="text-center">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {isGerman ? 'Master-Allokation' : 'Master Allocation Pool'}
                    </h4>
                    <div className="text-3xl sm:text-4xl font-mono font-black text-slate-950 dark:text-white mt-1">
                      CHF 52,460,000
                    </div>
                  </div>

                  {/* Three Tiered Classes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Class A */}
                    <div
                      className="
                        rounded-3xl border border-blue-500/60
                        bg-white dark:bg-slate-900
                        p-6 sm:p-7 shadow-xl
                        transition-all duration-500
                      "
                      style={{
                        transform: 'translateZ(30px) rotateY(-4deg)',
                      }}
                    >
                      <h4 className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                        Class A
                      </h4>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-950 dark:text-white mt-2">
                        55%
                      </div>
                      <div className="text-lg font-mono font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-4">
                        {formatCHF(Math.round((28853000 * Math.min(tierPercent + 10, 100)) / 100))}
                      </div>

                      {/* 3D Progress fill */}
                      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(tierPercent, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Class B */}
                    <div
                      className="
                        rounded-3xl border border-indigo-500/60
                        bg-white dark:bg-slate-900
                        p-6 sm:p-7 shadow-xl
                        transition-all duration-500
                      "
                      style={{
                        transform: 'translateZ(40px)',
                      }}
                    >
                      <h4 className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                        Class B
                      </h4>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-950 dark:text-white mt-2">
                        30%
                      </div>
                      <div className="text-lg font-mono font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-4">
                        {formatCHF(Math.round((15738000 * Math.min(tierPercent + 10, 100)) / 100))}
                      </div>

                      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(tierPercent, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Class C */}
                    <div
                      className="
                        rounded-3xl border border-purple-500/60
                        bg-white dark:bg-slate-900
                        p-6 sm:p-7 shadow-xl
                        transition-all duration-500
                      "
                      style={{
                        transform: 'translateZ(30px) rotateY(4deg)',
                      }}
                    >
                      <h4 className="text-xl font-extrabold text-purple-600 dark:text-purple-400">
                        Class C
                      </h4>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-950 dark:text-white mt-2">
                        15%
                      </div>
                      <div className="text-lg font-mono font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-4">
                        {formatCHF(Math.round((7869000 * Math.min(tierPercent + 10, 100)) / 100))}
                      </div>

                      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(tierPercent, 100)}%` }}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* STAGE 4: AUDIT NOTIFICATION BUTTON & AUTO POP-OUT LOGS (WITHOUT CLICK)    */}
              {/* ========================================================================= */}
              {activeStep === 3 && (
                <div
                  className="w-full max-w-3xl mx-auto space-y-6"
                  style={{
                    transform: 'translateZ(50px)',
                  }}
                >
                  {/* Floating 3D Notification Button with pulsing radar */}
                  <div className="flex justify-center">
                    <div className="relative inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-3.5 text-base sm:text-lg font-bold text-white shadow-xl shadow-blue-500/40">
                      <Bell className="h-5 w-5 animate-bounce" />
                      <span>{isGerman ? 'Audit-Monitor Aktiv' : 'Audit Monitor Active'}</span>
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                      </span>
                    </div>
                  </div>

                  {/* Automatic Pop-Out Logs Container (WITHOUT CLICK) */}
                  <div className="space-y-3 min-h-[220px]">
                    {AUDIT_MESSAGES.map((msg, idx) => {
                      const isPopped = idx < auditLogCount
                      if (!isPopped) return null

                      return (
                        <div
                          key={msg.id}
                          className="
                            rounded-2xl border border-slate-200 dark:border-slate-800
                            bg-white dark:bg-slate-900/95
                            p-5 shadow-xl flex items-center justify-between
                            transition-all duration-500 ease-out
                          "
                          style={{
                            animation: 'slideInToast 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                            transform: `translateZ(${40 + idx * 8}px)`,
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                                {msg.title}
                              </h4>
                              <div className="font-mono text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                                {msg.code}
                              </div>
                            </div>
                          </div>

                          <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* STAGE 5: REPORT GENERATION 3D DOCUMENTS                                   */}
              {/* ========================================================================= */}
              {activeStep === 4 && (
                <div
                  className="w-full max-w-4xl mx-auto space-y-6"
                  style={{
                    transform: 'translateZ(40px)',
                  }}
                >
                  {/* Progress Header */}
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                        {isGerman ? 'Steuerpakete & Berichte' : 'Statutory Report Generation'}
                      </h4>
                      <div className="text-2xl font-mono font-extrabold text-blue-600 dark:text-blue-400">
                        {reportGenPercent}%
                      </div>
                    </div>

                    <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-full transition-all duration-300"
                        style={{ width: `${reportGenPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* 3D Generated Document Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* Doc 1 */}
                    <div
                      className={`
                        rounded-2xl border p-6 transition-all duration-500
                        ${
                          reportGenPercent > 30
                            ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-xl'
                            : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-30'
                        }
                      `}
                      style={{
                        transform: 'translateZ(30px) rotateY(-3deg)',
                      }}
                    >
                      <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                        ESTV Form 35
                      </h4>
                      <div className="text-sm font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4">
                        Swiss Tax Return PDF
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                        <Download className="h-4 w-4" /> Download
                      </div>
                    </div>

                    {/* Doc 2 */}
                    <div
                      className={`
                        rounded-2xl border p-6 transition-all duration-500
                        ${
                          reportGenPercent > 60
                            ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-xl'
                            : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-30'
                        }
                      `}
                      style={{
                        transform: 'translateZ(40px)',
                      }}
                    >
                      <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                        InvStG §56 XML
                      </h4>
                      <div className="text-sm font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4">
                        German Authority Feed
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                        <Download className="h-4 w-4" /> Download
                      </div>
                    </div>

                    {/* Doc 3 */}
                    <div
                      className={`
                        rounded-2xl border p-6 transition-all duration-500
                        ${
                          reportGenPercent > 85
                            ? 'bg-white dark:bg-slate-900 border-purple-500 shadow-xl'
                            : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-30'
                        }
                      `}
                      style={{
                        transform: 'translateZ(30px) rotateY(3deg)',
                      }}
                    >
                      <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                        LP Statements
                      </h4>
                      <div className="text-sm font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4">
                        Class A, B, C Vouchers
                      </div>
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                        <Download className="h-4 w-4" /> Download
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
