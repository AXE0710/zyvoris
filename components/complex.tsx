import React, { useState } from 'react'
import {
  Database,
  Network,
  Tags,
  Calculator,
  GitBranch,
  CheckCircle2,
  FileCheck2,
  ChevronRight,
} from 'lucide-react'

const WORKFLOW_STAGES = [
  { number: '01', title: 'Connect', description: 'Integrate raw data from existing systems and files.', icon: Database },
  { number: '02', title: 'Structure', description: 'Map entities, funds, ownership, and relationships.', icon: Network },
  { number: '03', title: 'Classify', description: 'Identify tax categories, income, and transactions.', icon: Tags },
  { number: '04', title: 'Calculate', description: 'Apply deterministic tax logic for repeatable outputs.', icon: Calculator },
  { number: '05', title: 'Allocate', description: 'Distribute results across funds, classes, and partners.', icon: GitBranch },
  { number: '06', title: 'Validate', description: 'Reconcile figures, handle exceptions, and verify data.', icon: CheckCircle2 },
  { number: '07', title: 'Report', description: 'Generate structured, audit-ready compliance filings.', icon: FileCheck2 },
]

export default function CompactWorkflowSection() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section id="workflow" className="relative overflow-hidden bg-slate-50 px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-blue-600 uppercase">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Operating Model
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From source data to tax reporting in{' '}
            <span className="text-blue-600">one controlled workflow.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A single, connected pipeline that maintains complete auditability from raw ingestion to final jurisdiction reporting.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          
          {/* Desktop Flow: Ultra-Compact Horizontal Grid */}
          <div className="hidden lg:grid lg:grid-cols-7 lg:gap-3">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const Icon = stage.icon
              const isLast = idx === WORKFLOW_STAGES.length - 1

              return (
                <div key={stage.number} className="relative flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm">
                  {/* Step Connector Arrow */}
                  {!isLast && (
                    <div className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 text-slate-300">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  )}

                  <div>
                    {/* Header: Icon + Step # */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100/60 text-blue-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">{stage.number}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">{stage.title}</h3>
                    
                    {/* One-Line Explanation */}
                    <p className="mt-1 text-xs leading-normal text-slate-500">{stage.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile/Tablet View: Interactive Stepper */}
          <div className="block lg:hidden">
            {/* Step Selection Tabs */}
            <div className="flex snap-x snap-mandatory overflow-x-auto pb-4 pt-1 gap-2 border-b border-slate-100">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const Icon = stage.icon
                const isActive = activeStage === idx

                return (
                  <button
                    key={stage.number}
                    onClick={() => setActiveStage(idx)}
                    className={`flex shrink-0 snap-center items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{stage.number}. {stage.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Stage Detail */}
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/40 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Stage {WORKFLOW_STAGES[activeStage].number} of 07
                </span>
                <span className="text-xs text-slate-400">Step Detail</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {WORKFLOW_STAGES[activeStage].title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {WORKFLOW_STAGES[activeStage].description}
              </p>
            </div>
          </div>

          {/* Bottom Micro Summary Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 text-xs text-slate-500">
            <span className="font-medium text-slate-700">
              Complete Lineage Auditability
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
              <span>Ingestion</span>
              <span>→</span>
              <span>Calculation</span>
              <span>→</span>
              <span>Filing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}