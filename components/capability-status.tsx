'use client'

import React, { useState } from 'react'
import { useLanguage } from './language-provider'

export type CapabilityStatus = 'MVP' | 'In Development' | 'Roadmap' | 'Planned Enterprise'

interface CapabilityItem {
  name: string
  category: string
  status: CapabilityStatus
  statusLabel: string
  description: string
  scope: string
}

export default function CapabilityStatusMatrix() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const capabilities: CapabilityItem[] = [
    {
      name: 'Swiss Fund Tax Reporting',
      category: 'Jurisdiction Reporting',
      status: 'MVP',
      statusLabel: 'MVP',
      description: 'End-to-end fund-level tax calculation and reporting datasets for Swiss private market structures.',
      scope: 'Active Production',
    },
    {
      name: 'Share-Class Calculation',
      category: 'Allocation Engine',
      status: 'MVP',
      statusLabel: 'MVP',
      description: 'Deterministic multi-tier share-class tax distribution and tax allocation logic.',
      scope: 'Active Production',
    },
    {
      name: 'Swiss Tax Value Calculation',
      category: 'Valuation & Basis',
      status: 'MVP',
      statusLabel: 'MVP',
      description: 'Automated determination of taxable values and tax equity for Swiss tax filings.',
      scope: 'Active Production',
    },
    {
      name: 'Structured Review Workflow',
      category: 'Governance & Control',
      status: 'MVP',
      statusLabel: 'MVP',
      description: 'Controlled sign-off trails, variance alerts, and immutable calculation lineage.',
      scope: 'Active Production',
    },
    {
      name: 'German InvStG Reporting',
      category: 'Jurisdiction Reporting',
      status: 'In Development',
      statusLabel: 'In Development',
      description: 'German investment fund tax classification and InvStG-aligned calculation workflows.',
      scope: 'Engineering & Testing',
    },
    {
      name: 'Austrian Tax Reporting',
      category: 'Jurisdiction Reporting',
      status: 'Roadmap',
      statusLabel: 'Roadmap',
      description: 'Austrian fund taxation workflows and OeKB-compliant structured reporting packages.',
      scope: 'Planned Expansion',
    },
    {
      name: 'K-1 / K-3 Intelligence',
      category: 'Cross-Border Analytics',
      status: 'Roadmap',
      statusLabel: 'Roadmap',
      description: 'Transform partnership tax data into structured cross-border intelligence: ECI/FDAP, withholding, PFIC indicators, and downstream reporting implications.',
      scope: 'Planned Expansion',
    },
    {
      name: 'Cross-Border Tax Brain',
      category: 'Cross-Border Analytics',
      status: 'Roadmap',
      statusLabel: 'Roadmap',
      description: 'Cross-jurisdictional treaty interpretation and multi-tier pass-through entity graphs.',
      scope: 'Planned Architecture',
    },
    {
      name: 'Pillar Two Framework Extension',
      category: 'Enterprise Compliance',
      status: 'Planned Enterprise',
      statusLabel: 'Roadmap / Future Extension',
      description: 'Architecture designed to extend to additional regimes: Pillar Two minimum tax data aggregation and GloBE rules.',
      scope: 'Future Architecture & Extension',
    },
  ]

  const getStatusBadge = (status: CapabilityStatus, label: string) => {
    switch (status) {
      case 'MVP':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-600 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-emerald-700 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            {label}
          </span>
        )
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-600 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-amber-700 dark:border-amber-500 dark:bg-amber-950/50 dark:text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
            {label}
          </span>
        )
      case 'Roadmap':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-600 bg-blue-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-blue-700 dark:border-blue-500 dark:bg-blue-950/50 dark:text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            {label}
          </span>
        )
      case 'Planned Enterprise':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-purple-600 bg-purple-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-purple-700 dark:border-purple-500 dark:bg-purple-950/50 dark:text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
            {label}
          </span>
        )
    }
  }

  const filtered =
    activeFilter === 'all'
      ? capabilities
      : capabilities.filter((c) => c.status.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <section
      id="capability-status"
      className="
        relative overflow-hidden
        border-t-2 border-slate-900 dark:border-slate-800
        bg-white dark:bg-[#080d1a]
        px-4 sm:px-6 lg:px-[5vw]
        py-16 sm:py-24
        transition-colors duration-200
      "
    >
      <div className="relative mx-auto max-w-[1420px]">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'FUNKTIONSSTATUS & ARCHITEKTUR' : 'STANDARDIZED CAPABILITY STATUS'}
              </span>
            </div>

            <h2 className="max-w-[760px] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {language === 'de' ? 'Klare Trennung zwischen' : 'Clear separation between'}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {language === 'de' ? 'Live-Funktionen und Roadmap.' : 'current functionality and future architecture.'}
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:ml-auto">
            {language === 'de'
              ? 'Wir schaffen Transparenz: Alle Module und Rechenstrecken sind mit standardisierten Status-Kennzeichnungen versehen, von der produktiven MVP-Funktionalität bis zur langfristigen Unternehmensarchitektur.'
              : 'ZYVORIS communicates with rigorous accuracy. Every capability is tagged with standardized operational status labels—ensuring absolute clarity between what is available in production today and what is on our engineering roadmap.'}
          </p>
        </div>

        {/* Standardized Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-y-2 border-slate-900 dark:border-slate-800 py-4">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            {language === 'de' ? 'Alle Module' : 'All Capabilities'} ({capabilities.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('mvp')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              activeFilter === 'mvp'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            MVP (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('development')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              activeFilter === 'development'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            In Development (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('roadmap')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              activeFilter === 'roadmap'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            Roadmap (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('planned')}
            className={`px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold transition-all ${
              activeFilter === 'planned'
                ? 'bg-slate-950 text-white border-black dark:bg-blue-600 dark:border-blue-500'
                : 'bg-white text-slate-900 border-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
            }`}
          >
            Planned Enterprise (1)
          </button>
        </div>

        {/* Table View (Desktop) & Visual Cards (Mobile) */}
        <div className="mt-8">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/80 font-mono text-[11px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  <th className="py-4 px-6">{language === 'de' ? 'Funktion / Modul' : 'Capability'}</th>
                  <th className="py-4 px-6">{language === 'de' ? 'Bereich / Domäne' : 'Domain / Category'}</th>
                  <th className="py-4 px-6">{language === 'de' ? 'Operativer Status' : 'Operational Status'}</th>
                  <th className="py-4 px-6">{language === 'de' ? 'Beschreibung & Umfang' : 'Description & Scope'}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-900/40 dark:divide-slate-800 text-sm">
                {filtered.map((item) => (
                  <tr
                    key={item.name}
                    className="hover:bg-blue-50/40 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-slate-950 dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-blue-600 dark:text-blue-400 text-xs">▸</span>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="rounded border border-slate-900/60 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 font-mono text-[10.5px] font-semibold text-slate-700 dark:text-slate-300">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {getStatusBadge(item.status, item.statusLabel)}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-700 dark:text-slate-300 max-w-md">
                      <p className="font-medium text-slate-900 dark:text-slate-100 mb-0.5">{item.description}</p>
                      <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400">
                        Scope: {item.scope}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Status Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {filtered.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3 border-b border-slate-900/60 dark:border-slate-800 pb-3">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-500">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white mt-0.5">
                      {item.name}
                    </h3>
                  </div>
                  {getStatusBadge(item.status, item.statusLabel)}
                </div>

                <p className="mt-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-900/30 dark:border-slate-800 flex items-center justify-between font-mono text-[10px] text-slate-600 dark:text-slate-400">
                  <span>SCOPE:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-200">{item.scope}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
