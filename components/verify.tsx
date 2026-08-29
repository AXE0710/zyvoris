'use client'

import React from 'react'
import {
  Database,
  Tags,
  Scale,
  Calculator,
  GitBranch,
  FileOutput,
  Check,
  Clock3,
  UserCheck,
  Fingerprint,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

const TRACE_STEPS = [
  {
    number: '01',
    title: 'Source Data',
    description: 'Financial & fund data',
    icon: Database,
  },
  {
    number: '02',
    title: 'Tax Classification',
    description: 'Transaction grouping',
    icon: Tags,
  },
  {
    number: '03',
    title: 'Tax Rule',
    description: 'Configured logic',
    icon: Scale,
  },
  {
    number: '04',
    title: 'Calculation',
    description: 'Deterministic engine',
    icon: Calculator,
  },
  {
    number: '05',
    title: 'Allocation',
    description: 'Structure mapping',
    icon: GitBranch,
  },
  {
    number: '06',
    title: 'Reporting Output',
    description: 'Jurisdiction ready',
    icon: FileOutput,
  },
]

const METADATA = [
  { label: 'Rule version', value: 'TX-CH-2026.04', icon: GitBranch },
  { label: 'Calculation ID', value: 'CALC-8F42A91', icon: Fingerprint },
  { label: 'Source ref', value: 'TXN-004829', icon: Database },
  { label: 'Timestamp', value: '29 Aug 2026 · 14:32 UTC', icon: Clock3 },
  { label: 'Reviewer', value: 'Tax Operations', icon: UserCheck },
  { label: 'Status', value: 'Reviewed', icon: ShieldCheck },
]

export default function TraceabilitySection() {
  return (
    <section
      id="traceability"
      className="relative overflow-hidden border-t border-slate-200 bg-white px-[5vw] py-16 text-[#0b1735]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e9eef6 1px, transparent 1px), linear-gradient(to bottom, #e9eef6 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#2759d7]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2759d7]">
                Traceability
              </span>
            </div>

            <h2 className="text-[clamp(32px,3.5vw,52px)] font-medium leading-[1.05] tracking-[-0.04em]">
              No black-box
              <br />
              <span className="text-[#2759d7]">tax calculations.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <div>
              <p className="max-w-[500px] text-[14px] leading-[1.6] text-slate-600">
                Every tax output should be understandable. ZYVORIS connects the
                final result directly back through the underlying source data,
                classification, rule, calculation, and allocation that produced it.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                <ShieldCheck size={14} className="text-[#2759d7]" />
                Source-linked · Reviewable · Traceable
              </div>
            </div>
          </div>
        </div>

        {/* Trace Visual */}
        <div className="mt-10 overflow-hidden rounded-[20px] border border-slate-200 bg-[#f8fafc] shadow-sm">
          {/* Visual Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Calculation path
              </span>
              <h3 className="text-[16px] font-medium tracking-[-0.01em]">
                From source to output
              </h3>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-[#cbd8f5] bg-[#f2f5ff] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#2759d7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2759d7]" />
              Fully traceable
            </div>
          </div>

          {/* Desktop Flow (Horizontal) */}
          <div className="hidden px-6 py-8 lg:block">
            <div className="relative">
              <div className="absolute left-[6%] right-[6%] top-[24px] h-[1px] bg-slate-200" />

              <div className="grid grid-cols-6 gap-2">
                {TRACE_STEPS.map((step, index) => {
                  const Icon = step.icon
                  const isLast = index === TRACE_STEPS.length - 1

                  return (
                    <div
                      key={step.number}
                      className="relative flex flex-col items-center text-center"
                    >
                      <div
                        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white ${
                          isLast
                            ? 'border-[#2759d7] bg-[#edf2ff] text-[#2759d7] shadow-sm'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <Icon size={16} strokeWidth={1.8} />
                      </div>

                      <span className="mt-2.5 text-[9px] font-semibold tracking-[0.14em] text-[#2759d7]">
                        {step.number}
                      </span>
                      <h4 className="mt-0.5 text-[12px] font-semibold text-slate-800">
                        {step.title}
                      </h4>
                      <p className="mt-0.5 text-[10.5px] leading-tight text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Flow (Vertical) */}
          <div className="px-5 py-6 lg:hidden">
            <div className="relative space-y-4">
              <div className="absolute bottom-4 left-[17px] top-4 w-[1px] bg-slate-200" />
              {TRACE_STEPS.map((step, index) => {
                const Icon = step.icon
                const isLast = index === TRACE_STEPS.length - 1
                return (
                  <div
                    key={step.number}
                    className="relative flex items-center gap-4"
                  >
                    <div
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white ${
                        isLast
                          ? 'border-[#2759d7] bg-[#edf2ff] text-[#2759d7]'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-semibold text-[#2759d7]">
                          {step.number}
                        </span>
                        <h4 className="text-[13px] font-semibold text-slate-800">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Flow Indicator Footer */}
          <div className="flex items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-2.5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Source
            </span>
            <div className="h-[1px] w-10 bg-slate-200" />
            <ArrowRight size={12} className="text-[#2759d7]" />
            <div className="h-[1px] w-10 bg-slate-200" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Output
            </span>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2759d7]">
              Audit Metadata
            </span>
            <h3 className="mt-1 text-[22px] font-medium leading-tight tracking-[-0.02em]">
              Calculations attached to verifiable context.
            </h3>
            <p className="mt-2 text-[13px] text-slate-500">
              Each execution persists rule versions, entity references, timestamping, and explicit approval states for complete operational review.
            </p>
          </div>

          <div className="overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3">
              {METADATA.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex flex-col justify-between bg-white p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {item.label}
                      </span>
                      <Icon size={13} className="text-[#2759d7]" />
                    </div>
                    <span className="mt-2 truncate text-[12px] font-medium text-slate-800">
                      {item.value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#edf2ff] text-[#2759d7]">
              <Check size={13} strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
              Reviewable by design
            </span>
          </div>

          <p className="max-w-[550px] text-[13px] leading-relaxed text-slate-500 md:text-right">
            Traceability gives tax professionals clear operational transparency, streamlining audits and reducing exception handling overhead.
          </p>
        </div>
      </div>
    </section>
  )
}