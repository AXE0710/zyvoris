import React, { useState } from 'react'
import {
  Database,
  Network,
  Scale,
  Calculator,
  Sparkles,
  FileCheck2,
  ChevronRight,
  Cpu,
} from 'lucide-react'

const ARCHITECTURE_LAYERS = [
  {
    number: '01',
    title: 'Data Layer',
    group: 'FOUNDATION',
    description:
      'Ingests and standardizes financial, accounting, portfolio, and operational data into a unified schema.',
    icon: Database,
  },
  {
    number: '02',
    title: 'Structure Layer',
    group: 'FOUNDATION',
    description:
      'Maps funds, entities, share classes, ownership trees, and relationships across complex structures.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Tax Logic Layer',
    group: 'ENGINE & RULES',
    description:
      'Applies jurisdiction-specific tax rules, classifications, and calculation algorithms.',
    icon: Scale,
  },
  {
    number: '04',
    title: 'Calculation Engine',
    group: 'ENGINE & RULES',
    description:
      'Executes deterministic calculations and allocations using controlled, fully auditable logic.',
    icon: Calculator,
  },
  {
    number: '05',
    title: 'AI Intelligence Layer',
    group: 'ENGINE & RULES',
    description:
      'Assists with document interpretation, classification, and workflow automation safely.',
    icon: Sparkles,
  },
  {
    number: '06',
    title: 'Reporting Layer',
    group: 'OUTPUT',
    description:
      'Transforms validated calculations into structured, jurisdiction-ready tax filings and reports.',
    icon: FileCheck2,
  },
]

export default function CompactSolutionsSection() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null)

  return (
    <section
      id="solutions"
      className="relative border-y border-slate-200/80 bg-slate-50/60 px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative mx-auto max-w-5xl">
        {/* SECTION HEADER */}
        <div className="mb-10 text-center">
         
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            One infrastructure layer for{' '}
            <span className="text-blue-600">fund tax reporting.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            ZYVORIS connects source data to final outputs through a unified,
            deterministic pipeline.
          </p>
        </div>

        {/* INTEGRATED ARCHITECTURE DIAGRAM STACK */}
        <div className="relative rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-slate-200/50 sm:p-6 lg:p-8">
          
          {/* Continuous Flow Pipeline Indicator Line */}
          <div className="pointer-events-none absolute top-12 bottom-12 left-8 hidden w-0.5 bg-gradient-to-b from-blue-400 via-blue-600 to-indigo-500 sm:block" />

          <div className="space-y-3">
            {ARCHITECTURE_LAYERS.map((layer, index) => {
              const Icon = layer.icon
              const isHovered = activeLayer === index

              return (
                <div
                  key={layer.number}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group relative flex flex-col gap-4 rounded-xl border p-4 transition-all duration-200 sm:flex-row sm:items-center sm:justify-between sm:pl-12 ${
                    isHovered
                      ? 'border-blue-300 bg-blue-50/30 shadow-md ring-1 ring-blue-400/20'
                      : 'border-slate-200/70 bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Pipeline Connector Node */}
                  <div
                    className={`absolute top-1/2 -left-2.5 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white transition-all duration-200 sm:flex ${
                      isHovered
                        ? 'border-blue-600 bg-blue-600 text-white scale-110'
                        : 'border-slate-300 text-slate-400'
                    }`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        isHovered ? 'bg-white' : 'bg-slate-400'
                      }`}
                    />
                  </div>

                  {/* Left Metadata & Title */}
                  <div className="flex items-center gap-4 sm:w-1/3">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors ${
                        isHovered
                          ? 'border-blue-200 bg-blue-600 text-white'
                          : 'border-slate-200 bg-slate-50 text-blue-600'
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-wider text-slate-400">
                          LAYER {layer.number}
                        </span>
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-500">
                          {layer.group}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {layer.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="border-t border-slate-100 pt-2 sm:w-1/2 sm:border-t-0 sm:pt-0">
                    <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {layer.description}
                    </p>
                  </div>

                  {/* Right Status Indicator */}
                  <div className="hidden items-center justify-end sm:flex sm:w-12">
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 ${
                        isHovered
                          ? 'translate-x-1 text-blue-600'
                          : 'text-slate-300'
                      }`}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* DIAGRAM FOOTER RUNTIME METRICS */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Deterministic & Controlled Execution</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Data</span>
              <ChevronRight size={12} />
              <span>Logic</span>
              <ChevronRight size={12} />
              <span>Calculations</span>
              <ChevronRight size={12} />
              <span className="font-semibold text-blue-600">Filing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}