'use client'

import React from 'react'
import {
  FileSpreadsheet,
  Layers3,
  GitBranch,
  Calculator,
  Globe2,
  CheckCircle2,
  SearchCheck,
  Database,
  Workflow,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

const COMPARISONS = [
  {
    traditional: 'Excel workpapers',
    traditionalDetail: 'Knowledge held in spreadsheets',
    zyvoris: 'Connected data model',
    zyvorisDetail: 'Structured tax data across workflow',
    icon: FileSpreadsheet,
  },
  {
    traditional: 'Manual classifications',
    traditionalDetail: 'Knowledge held by individuals',
    zyvoris: 'Structured classification workflow',
    zyvorisDetail: 'Defined classifications & review paths',
    icon: GitBranch,
  },
  {
    traditional: 'Manual calculations',
    traditionalDetail: 'Calculations across workpapers',
    zyvoris: 'Controlled calculation engine',
    zyvorisDetail: 'Configured logic executes consistently',
    icon: Calculator,
  },
  {
    traditional: 'Separate jurisdiction workflows',
    traditionalDetail: 'Multiple processes & deliverables',
    zyvoris: 'Multi-jurisdiction architecture',
    zyvorisDetail: 'A connected operating model',
    icon: Globe2,
  },
  {
    traditional: 'Manual reconciliation',
    traditionalDetail: 'Review across disconnected sources',
    zyvoris: 'Automated validation',
    zyvorisDetail: 'Structured checks across workflow',
    icon: SearchCheck,
  },
  {
    traditional: 'Difficult traceability',
    traditionalDetail: 'Source and output connections break',
    zyvoris: 'Source-to-output traceability',
    zyvorisDetail: 'Calculation paths stay connected',
    icon: Workflow,
  },
  {
    traditional: 'Knowledge held by individuals',
    traditionalDetail: 'Tax logic lives in people & docs',
    zyvoris: 'Versioned tax rules',
    zyvorisDetail: 'Logic represented as structured rules',
    icon: Layers3,
  },
  {
    traditional: 'Static tax data',
    traditionalDetail: 'Information distributed across files',
    zyvoris: 'Structured tax data',
    zyvorisDetail: 'Data designed to move seamlessly',
    icon: Database,
  },
]

export default function ComparisonSection() {
  return (
    <section id="comparison" className="relative bg-white px-6 py-16 text-[#0b1735]">
      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #edf1f6 1px, transparent 1px), linear-gradient(to bottom, #edf1f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header Block */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-[#2759d7]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2759d7]">
                The Operating Model
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Replace fragmented tax workflows with{' '}
              <span className="text-[#2759d7]">connected infrastructure.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Traditional tax processes rely on disconnected workpapers and manual handoffs. ZYVORIS
            unifies data, rules, logic, and reporting into a single system.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Header Row */}
          <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider md:grid-cols-[1fr_40px_1fr]">
            <div className="px-5 py-3.5 text-slate-500">Traditional Tax Workflow</div>
            <div className="hidden items-center justify-center md:flex" />
            <div className="bg-[#f3f6ff] px-5 py-3.5 text-[#2759d7]">ZYVORIS Model</div>
          </div>

          {/* Compact Comparison Grid */}
          <div className="divide-y divide-slate-100">
            {COMPARISONS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.traditional}
                  className="grid grid-cols-1 text-xs md:grid-cols-[1fr_40px_1fr] md:items-center"
                >
                  {/* Traditional Side */}
                  <div className="flex items-center gap-3 bg-[#fafafa]/60 px-5 py-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white text-slate-400 border border-slate-200">
                      <FileSpreadsheet size={13} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-700 block">{item.traditional}</span>
                      <span className="text-[11px] text-slate-400 truncate block">
                        {item.traditionalDetail}
                      </span>
                    </div>
                  </div>

                  {/* Transition Icon */}
                  <div className="hidden h-full items-center justify-center bg-white md:flex">
                    <ArrowRight size={12} className="text-slate-300" />
                  </div>

                  {/* ZYVORIS Side */}
                  <div className="flex items-center justify-between gap-3 bg-[#f3f6ff]/40 px-5 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white text-[#2759d7] shadow-sm">
                        <Icon size={13} />
                      </div>
                      <div className="min-w-0">
                        <span className="font-semibold text-[#17284b] block">{item.zyvoris}</span>
                        <span className="text-[11px] text-slate-500 truncate block">
                          {item.zyvorisDetail}
                        </span>
                      </div>
                    </div>
                    <CheckCircle2 size={14} className="shrink-0 text-[#2759d7]" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Summary Strip */}
          <div className="grid grid-cols-1 border-t border-slate-200 bg-slate-50/50 text-xs sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="px-5 py-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Traditional
              </span>
              <span className="font-semibold text-slate-600">Files · Handoffs · Individuals</span>
            </div>
            <div className="px-5 py-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Operating Model
              </span>
              <span className="font-semibold text-[#2759d7]">Data · Logic · Workflows</span>
            </div>
            <div className="px-5 py-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Outcome
              </span>
              <span className="font-semibold text-slate-700">Connected · Controlled · Traceable</span>
            </div>
          </div>
        </div>

        {/* Operating Principle Callout */}
        <div className="mt-8 flex items-center gap-3.5 rounded-xl border border-blue-200/80 bg-[#f5f7fc] px-5 py-3.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#2759d7] shadow-sm">
            <ShieldCheck size={15} />
          </div>
          <p className="text-xs text-slate-600 leading-normal">
            <strong className="text-slate-800">Operating Principle:</strong> ZYVORIS bridges the gap
            between manual workpapers and enterprise tax reporting, consolidating logic, rules, and
            traceability into a single workflow.
          </p>
        </div>
      </div>
    </section>
  )
}