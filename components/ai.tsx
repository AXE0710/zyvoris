'use client'

import React from 'react'
import {
  BrainCircuit,
  Search,
  Tags,
  FileSearch,
  TriangleAlert,
  Scale,
  Calculator,
  GitBranch,
  FileOutput,
  UserCheck,
  Eye,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'

const aiCapabilities = [
  {
    icon: FileSearch,
    title: 'Data extraction',
    text: 'Extract relevant information from financial and tax documents.',
  },
  {
    icon: Tags,
    title: 'Classification',
    text: 'Identify and classify transactions, entities and tax-relevant data.',
  },
  {
    icon: Search,
    title: 'Interpretation',
    text: 'Assist professionals in interpreting complex source information.',
  },
  {
    icon: TriangleAlert,
    title: 'Anomaly detection',
    text: 'Surface unusual data, inconsistencies and potential exceptions.',
  },
  {
    icon: Scale,
    title: 'Tax research support',
    text: 'Support research and contextual understanding of tax requirements.',
  },
  {
    icon: BrainCircuit,
    title: 'Exception handling',
    text: 'Help identify cases that require professional attention.',
  },
]

const deterministicCapabilities = [
  {
    icon: Calculator,
    title: 'Calculations',
    text: 'Execute controlled and reproducible tax calculations.',
  },
  {
    icon: GitBranch,
    title: 'Allocations',
    text: 'Apply defined allocation methodologies across structures.',
  },
  {
    icon: Scale,
    title: 'Tax rules',
    text: 'Execute configured jurisdiction-specific tax logic.',
  },
  {
    icon: FileOutput,
    title: 'Reporting mappings',
    text: 'Transform calculated results into defined reporting outputs.',
  },
]

const professionalResponsibilities = [
  'Review',
  'Judgement',
  'Approval',
  'Exceptions',
]

export default function AISection() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden border-t border-slate-200 bg-white px-[5vw] py-20 text-[#0b1735]"
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
                AI &amp; Controlled Intelligence
              </span>
            </div>

            <h2 className="text-[clamp(32px,3.5vw,52px)] font-medium leading-[1.05] tracking-[-0.04em]">
              AI where interpretation matters.
              <br />
              <span className="text-[#2759d7]">
                Deterministic logic where calculation matters.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[500px] text-[14px] leading-[1.6] text-slate-600">
              ZYVORIS uses AI to assist with the parts of tax workflows that
              require interpretation and pattern recognition — while controlled
              logic executes the calculations and reporting processes that
              require consistency and traceability.
            </p>
          </div>
        </div>

        {/* Main architecture */}
        <div className="mt-14 overflow-hidden rounded-[20px] border border-slate-200 bg-[#f8fafc] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Layer 01: AI */}
            <div className="flex flex-col border-b border-slate-200 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf0ff] text-[#2759d7]">
                    <BrainCircuit size={15} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Layer 01
                  </span>
                </div>
                <h3 className="text-[20px] font-medium tracking-[-0.02em]">
                  AI assistance
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  Supports interpretation without becoming the uncontrolled calculation layer.
                </p>
              </div>

              <div className="flex-1 space-y-4">
                {aiCapabilities.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-3">
                      <Icon size={16} className="mt-0.5 shrink-0 text-slate-400" />
                      <div>
                        <h4 className="text-[13px] font-semibold text-slate-800">
                          {item.title}
                        </h4>
                        <p className="text-[12px] leading-snug text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Layer 02: Deterministic */}
            <div className="flex flex-col border-b border-slate-200 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf0ff] text-[#2759d7]">
                    <Calculator size={15} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Layer 02
                  </span>
                </div>
                <h3 className="text-[20px] font-medium tracking-[-0.02em]">
                  Deterministic logic
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  Executes defined calculations, allocations, rules and mappings consistently.
                </p>
              </div>

              <div className="flex-1 space-y-4">
                {deterministicCapabilities.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-3">
                      <Icon size={16} className="mt-0.5 shrink-0 text-slate-400" />
                      <div>
                        <h4 className="text-[13px] font-semibold text-slate-800">
                          {item.title}
                        </h4>
                        <p className="text-[12px] leading-snug text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 rounded-lg border border-[#cdd9f7] bg-[#f3f6ff] p-3">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#2759d7]" />
                  <p className="text-[11.5px] leading-snug text-slate-700">
                    Logic remains defined, reproducible and independently reviewable.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 03: Human */}
            <div className="flex flex-col p-6 lg:p-8">
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800 text-white">
                    <UserCheck size={15} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Layer 03
                  </span>
                </div>
                <h3 className="text-[20px] font-medium tracking-[-0.02em]">
                  Professional control
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  Professionals review outputs, exercise judgement and approve the final result.
                </p>
              </div>

              <div className="flex-1">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  Retained Responsibilities
                </div>
                <div className="flex flex-wrap gap-2">
                  {professionalResponsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5"
                    >
                      <CheckCircle2 size={13} className="text-[#2759d7]" strokeWidth={2.5} />
                      <span className="text-[12px] font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2.5 px-1">
                <Eye size={16} className="mt-0.5 shrink-0 text-slate-400" />
                <p className="text-[11.5px] leading-snug text-slate-500">
                  Outputs are designed to support review and traceability, rather than obscure how a result was produced.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 md:flex-row md:items-start md:gap-12">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2759d7]">
            Responsible AI
          </span>
          <p className="max-w-[700px] text-[clamp(18px,2vw,24px)] font-medium leading-[1.3] tracking-[-0.02em] text-[#0b1735]">
            AI helps professionals understand the data.
            <br />
            <span className="text-slate-400">
              Controlled infrastructure determines how it is calculated, reviewed and reported.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}