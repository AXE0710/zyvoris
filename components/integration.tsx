'use client'

import React from 'react'
import {
  Calculator,
  Database,
  FileSpreadsheet,
  FileJson,
  FileText,
  Layers3,
  Network,
  Server,
  Upload,
  ArrowRight,
  Check,
  Workflow,
} from 'lucide-react'

const SYSTEMS = [
  { icon: Calculator, title: 'Accounting Systems', description: 'Financial records and accounting data' },
  { icon: Layers3, title: 'Fund Administration', description: 'Fund structures, transactions & NAV' },
  { icon: Network, title: 'Portfolio Management', description: 'Portfolio & investment details' },
  { icon: FileText, title: 'Tax Preparation', description: 'Existing tax prep workflows' },
  { icon: Database, title: 'Data Warehouses', description: 'Enterprise data environments' },
  { icon: Workflow, title: 'Investor Reporting', description: 'Investor & fund reporting' },
]

const INTERFACES = [
  { icon: Network, title: 'REST API' },
  { icon: Server, title: 'SFTP' },
  { icon: FileSpreadsheet, title: 'CSV' },
  { icon: FileSpreadsheet, title: 'Excel' },
  { icon: FileJson, title: 'JSON' },
  { icon: Database, title: 'Structured Data' },
  { icon: Upload, title: 'Document Ingestion' },
]

const ZYVORIS_STEPS = ['Data Ingestion', 'Tax Logic', 'Calculation', 'Validation', 'Reporting']

export default function IntegrationSection() {
  return (
    <section id="integrations" className="relative bg-white px-6 py-16 text-[#0b1735]">
      {/* Background Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #edf1f6 1px, transparent 1px), linear-gradient(to bottom, #edf1f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header Block */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-[#2759d7]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2759d7]">
                Integrations
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Built to connect with your <span className="text-[#2759d7]">existing tax stack.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            ZYVORIS operates alongside your existing tools—connecting financial, fund, and tax data
            without forcing expensive system replacements.
          </p>
        </div>

        {/* Connectivity Canvas */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc]">
          {/* Section Sub-header */}
          <div className="border-b border-slate-200 bg-white px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Connectivity Architecture
              </span>
              <h3 className="text-lg font-medium text-slate-900">
                Keep your core infrastructure intact.
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Network size={14} className="text-[#2759d7]" />
              Connect · Transform · Report
            </div>
          </div>

          {/* Core Diagram Grid */}
          <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1fr_auto_320px] lg:items-center">
            {/* Existing Systems List */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Source Layer
                  </span>
                  <h4 className="text-base font-medium">Existing Systems</h4>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <Server size={16} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {SYSTEMS.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-lg border border-slate-100 bg-[#fafbfc] p-3 transition-colors hover:border-slate-200"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white text-[#2759d7] shadow-sm">
                      <Icon size={14} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs font-semibold text-slate-800">{title}</h5>
                      <p className="truncate text-[11px] text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transition Connector */}
            <div className="flex flex-col items-center justify-center gap-2 py-2 lg:px-2">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#2759d7]">
                <span className="hidden h-px w-4 bg-[#2759d7] lg:block" />
                Data Connection
                <ArrowRight size={14} className="rotate-90 lg:rotate-0" />
              </div>
            </div>

            {/* ZYVORIS Platform Node */}
            <div className="relative rounded-xl border border-blue-200 bg-[#f3f6ff] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b1735] text-white">
                  <Layers3 size={18} />
                </div>
                <span className="rounded-full border border-blue-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#2759d7]">
                  Tax Infrastructure
                </span>
              </div>

              <h4 className="text-xl font-medium tracking-tight">ZYVORIS Engine</h4>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Processes incoming feeds into unified classification and reporting logic.
              </p>

              <div className="mt-4 space-y-1.5">
                {ZYVORIS_STEPS.map((step) => (
                  <div
                    key={step}
                    className="flex items-center gap-2.5 rounded-md border border-slate-200/60 bg-white px-3 py-1.5"
                  >
                    <Check size={12} className="text-[#2759d7]" strokeWidth={2.5} />
                    <span className="text-xs font-medium text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interface Formats Row */}
          <div className="border-t border-slate-200 bg-white p-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Supported Interfaces
            </span>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {INTERFACES.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex flex-col items-center justify-center gap-2 rounded-lg border border-slate-100 bg-[#f8fafc] p-3 text-center transition-colors hover:bg-slate-100/80"
                >
                  <Icon size={16} className="text-[#2759d7]" strokeWidth={1.75} />
                  <span className="text-xs font-semibold text-slate-700">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Disclaimer Footnote */}
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-500 border border-slate-200/60">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>
            Integration availability depends on active setup scope. Technology icons denote format
            capabilities rather than active third-party affiliations.
          </span>
        </div>
      </div>
    </section>
  )
}