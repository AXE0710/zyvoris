'use client'

import React from 'react'
import {
  ShieldCheck,
  LockKeyhole,
  UsersRound,
  FileClock,
  Database,
  BrainCircuit,
  CheckCircle2,
  Eye,
  UserCheck,
} from 'lucide-react'

/*
  Only include controls here that are actually implemented
  in the current product/environment.
*/
const SECURITY_CONTROLS = [
  {
    icon: LockKeyhole,
    title: 'Encryption',
    text: 'Data is protected using end-to-end encryption across supported environments.',
  },
  {
    icon: UsersRound,
    title: 'Role-Based Access Control',
    text: 'Access is strictly restricted according to defined user roles and granular permissions.',
  },
  {
    icon: FileClock,
    title: 'Audit Logging',
    text: 'Comprehensive activity records are preserved to support compliance and operational review.',
  },
  {
    icon: Database,
    title: 'Tenant Isolation',
    text: 'Customer environments and data stores are logically isolated.',
  },
  {
    icon: FileClock,
    title: 'Data Retention Controls',
    text: 'Data lifecycle and retention schedules can be managed according to policy.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Data Governance',
    text: 'AI workflows operate under strict zero-retention and data privacy boundaries.',
  },
]

const PRINCIPLES = [
  {
    number: '01',
    title: 'Controlled access',
    text: 'Access should be limited to the people and systems that require it.',
    icon: UsersRound,
  },
  {
    number: '02',
    title: 'Operational visibility',
    text: 'Relevant activity and workflow events should remain reviewable.',
    icon: Eye,
  },
  {
    number: '03',
    title: 'Data governance',
    text: 'Sensitive financial and tax information should be handled according to defined controls.',
    icon: Database,
  },
  {
    number: '04',
    title: 'Human oversight',
    text: 'Professional users remain responsible for review, judgement and approval.',
    icon: UserCheck,
  },
]

export default function SecuritySection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-t border-slate-200 bg-white px-4 py-16 md:px-8 md:py-24 text-[#0b1735]"
    >
      {/* BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #edf1f6 1px, transparent 1px), linear-gradient(to bottom, #edf1f6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#2759d7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2759d7]">
                Security & Governance
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Built for{' '}
              <span className="text-[#2759d7]">
                sensitive financial and tax data.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <div>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                ZYVORIS is designed around controlled access, operational
                visibility, data governance, and professional oversight. Security
                is built directly into the infrastructure rather than treated as an
                afterthought.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <ShieldCheck
                  size={14}
                  strokeWidth={1.8}
                  className="text-[#2759d7]"
                />
                Security · Governance · Control
              </div>
            </div>
          </div>
        </div>

        {/* ARCHITECTURE & GOVERNANCE */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Security Architecture */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f9fc] p-6 md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Security Architecture
            </span>

            <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-tight">
              Sensitive data stays inside a controlled operating environment.
            </h3>

            <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-500">
              Security controls protect data, restrict access, preserve visibility,
              and support responsible operations across the tax reporting workflow.
            </p>

            {/* Diagram Flow */}
            <div className="mt-6 space-y-2">
              {/* Data Node */}
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#edf2ff] text-[#2759d7]">
                  <Database size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Data Layer
                  </span>
                  <p className="text-xs font-medium">Financial & Tax Data</p>
                </div>
              </div>

              <div className="ml-6 h-4 w-px bg-slate-300" />

              {/* Control Layer */}
              <div className="rounded-xl border border-[#cdd8ef] bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#edf2ff] text-[#2759d7]">
                    <LockKeyhole size={17} />
                  </div>
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#2759d7] block">
                      Controlled Layer
                    </span>
                    <p className="text-xs font-semibold">Access · Governance · Visibility</p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded bg-[#f6f8fb] py-2 text-center">
                    <UsersRound size={12} className="mx-auto text-slate-500" />
                    <span className="mt-1 block text-[9px] font-medium text-slate-500">
                      Access
                    </span>
                  </div>
                  <div className="rounded bg-[#f6f8fb] py-2 text-center">
                    <FileClock size={12} className="mx-auto text-slate-500" />
                    <span className="mt-1 block text-[9px] font-medium text-slate-500">
                      Activity
                    </span>
                  </div>
                  <div className="rounded bg-[#f6f8fb] py-2 text-center">
                    <ShieldCheck size={12} className="mx-auto text-slate-500" />
                    <span className="mt-1 block text-[9px] font-medium text-slate-500">
                      Governance
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-6 h-4 w-px bg-slate-300" />

              {/* Oversight Node */}
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f1f4f8] text-slate-600">
                  <UserCheck size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Professional Oversight
                  </span>
                  <p className="text-xs font-medium">Review · Judgement · Approval</p>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Principles */}
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2759d7]">
                Governance Principles
              </span>
              <h3 className="mt-1 text-xl font-medium tracking-tight">
                Security should be observable, controlled, and accountable.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {PRINCIPLES.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.number}
                    className={`p-5 md:p-6 ${
                      index % 2 === 0 ? 'sm:border-r border-slate-200' : ''
                    } ${index < 2 ? 'border-b border-slate-200' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f4f8] text-[#2759d7]">
                        <Icon size={16} />
                      </div>
                      <span className="text-[9px] font-semibold text-slate-300">
                        {item.number}
                      </span>
                    </div>

                    <h4 className="mt-4 text-sm font-semibold">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* IMPLEMENTED CONTROLS GRID */}
        {SECURITY_CONTROLS.length > 0 && (
          <div className="mt-12">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2759d7]">
                  Implemented Controls
                </span>
                <h3 className="mt-1 text-xl font-medium tracking-tight md:text-2xl">
                  Verified security controls in place.
                </h3>
              </div>
              <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:block">
                Verified capabilities only
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SECURITY_CONTROLS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#2759d7] shadow-xs">
                        <Icon size={16} />
                      </div>
                      <CheckCircle2 size={14} className="text-[#2759d7]" />
                    </div>

                    <h4 className="mt-3 text-xs font-semibold md:text-sm">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] md:text-xs leading-relaxed text-slate-500">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* TRUST STATEMENT */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.5fr_1.5fr]">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf2ff] text-[#2759d7]">
                <ShieldCheck size={16} />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Trust Principle
                </span>
                <p className="mt-1 text-xs font-medium md:text-sm">
                  No unsupported security claims.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                ZYVORIS communicates security capabilities based solely on controls
                that are technically implemented and verified. Formal regulatory
                certifications or third-party audits are only declared once officially completed.
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                <span>• Evidence-Led</span>
                <span>• Governance-Focused</span>
                <span>• Professionally Reviewed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}