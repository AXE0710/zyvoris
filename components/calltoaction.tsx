'use client'

import React from 'react'
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  GitBranch,
  Calculator,
  Database,
} from 'lucide-react'

export default function CallToActionSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-16 text-[#0b1735]"
    >
      {/* Background Radial Orbs */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(39,89,215,0.08),transparent_67%)]" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(39,89,215,0.045),transparent_68%)]" />

      {/* Grid Pattern Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e9eef5 1px, transparent 1px), linear-gradient(to bottom, #e9eef5 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Card Outer Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9fc] shadow-lg">
          {/* Top Decorative Line */}
          <div className="absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#2759d7]/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Content Column */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                {/* Header Tag */}
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#2759d7]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#2759d7]">
                    Next step
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl text-[#0b1735]">
                  Build tax reporting on infrastructure designed for{' '}
                  <span className="text-[#2759d7]">complexity.</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  See how ZYVORIS connects financial data, fund structures, tax logic,
                  calculations, and reporting across complex private-market workflows.
                </p>
              </div>

              {/* Action Buttons */}
{/* ACTION BUTTONS */} <div className="mt-8 flex flex-wrap items-center gap-3"> <a href="mailto:mubashar.khan@me.com?subject=ZYVORIS%20Demo%20Request" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1735] px-5 py-3 text-xs font-semibold text-white no-underline transition-all duration-200 hover:bg-[#17284b]" > Book a Demo <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" /> </a> <a href="mailto:mubashar.khan@me.com?subject=Contact%20ZYVORIS" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-[#26344d] no-underline transition-all duration-200 hover:border-[#2759d7]/40 hover:text-[#2759d7]" > <Mail size={14} /> Contact ZYVORIS </a> </div>
            </div>

            {/* Right Architectural Diagram Column */}
            <div className="relative border-t border-slate-200 bg-white p-6 lg:border-l lg:border-t-0 sm:p-8">
              <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(#edf1f6_1px,transparent_1px),linear-gradient(90deg,#edf1f6_1px,transparent_1px)] bg-[size:32px_32px]" />

              <div className="relative z-10 flex h-full flex-col justify-center gap-2">
                {/* 1. Source Block */}
                <div className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50/50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-[#2759d7] shadow-sm">
                    <Database size={16} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Source
                    </span>
                    <p className="text-xs font-semibold text-slate-700">
                      Financial &amp; fund data
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="ml-[23px] h-3 w-px bg-slate-200" />

                {/* 2. ZYVORIS Core Block */}
                <div className="rounded-xl border border-[#cbd8f3] bg-[#f3f6ff] p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0b1735] text-white">
                      <GitBranch size={16} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-[#2759d7]">
                        ZYVORIS Core
                      </span>
                      <p className="text-xs font-semibold text-[#17284b]">
                        Tax infrastructure engine
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {['Tax logic', 'Calculations', 'Allocations', 'Validation'].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-md border border-[#d9e1f2] bg-white px-3 py-1.5 text-center text-[10px] font-medium text-slate-600"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Connector Line */}
                <div className="ml-[23px] h-3 w-px bg-slate-200" />

                {/* 3. Output Block */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-slate-50/50 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#cbd8f3] bg-[#f3f6ff] text-[#2759d7]">
                      <Calculator size={16} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Output
                      </span>
                      <p className="text-xs font-semibold text-slate-700">
                        Controlled tax reporting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50 px-2.5 py-1">
                    <ShieldCheck size={12} className="text-[#2759d7]" />
                    <span className="text-[10px] font-semibold text-[#2759d7]">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Items Bar */}
          <div className="grid grid-cols-1 border-t border-slate-200 bg-white text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 sm:grid-cols-3">
            <TrustItem text="Financial Data" />
            <TrustItem text="Fund Structures" />
            <TrustItem text="Tax Logic & Reporting" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
      <span className="h-1.5 w-1.5 rounded-full bg-[#2759d7]" />
      {text}
    </div>
  )
}