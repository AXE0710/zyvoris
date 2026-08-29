'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'

type StatusType = 'all' | 'mvp' | 'development' | 'roadmap'

interface Jurisdiction {
  country: string
  code: string
  title: string
  status: string
  statusType: 'mvp' | 'development' | 'roadmap'
  description: string
  capabilities: string[]
}

const jurisdictions: Jurisdiction[] = [
  {
    country: 'Switzerland',
    code: 'CH',
    title: 'Swiss Fund Tax Reporting',
    status: 'MVP',
    statusType: 'mvp',
    description:
      'Fund-level tax calculations and reporting workflows designed specifically for Swiss private-market structures.',
    capabilities: [
      'Fund & share-class calculations',
      'Taxable income allocation',
      'Tax value calculations',
      'Reporting datasets',
    ],
  },
  {
    country: 'Germany',
    code: 'DE',
    title: 'German Investment Tax Reporting',
    status: 'In Development',
    statusType: 'development',
    description:
      'Jurisdiction-specific workflows tailored for German investment tax reporting (InvStG) and fund structures.',
    capabilities: [
      'Fund tax classifications',
      'Investment tax calculations',
      'Share-class workflows',
      'Reporting datasets',
    ],
  },
  {
    country: 'Austria',
    code: 'AT',
    title: 'Austrian Fund Tax Reporting',
    status: 'Roadmap',
    statusType: 'roadmap',
    description:
      'Planned infrastructure for Austrian fund taxation and jurisdiction-specific reporting requirements.',
    capabilities: [
      'Fund-level calculations',
      'Fund reporting',
      'Allocation logic',
      'Structured outputs',
    ],
  },
  {
    country: 'United States',
    code: 'US',
    title: 'US Partnership Tax Intelligence',
    status: 'Roadmap',
    statusType: 'roadmap',
    description:
      'Planned workflows for complex partnership structures and US-related private-market tax intelligence.',
    capabilities: [
      'K-1 / K-3 data workflows',
      'Source & character analysis',
      'Withholding-related data',
      'Cross-border intelligence',
    ],
  },
]

export default function Jurisdictions() {
  const [filter, setFilter] = useState<StatusType>('all')

  const filteredJurisdictions =
    filter === 'all'
      ? jurisdictions
      : jurisdictions.filter((j) => j.statusType === filter)

  return (
    <section
      id="jurisdictions"
      className="relative overflow-hidden border-t border-[#0b1533]/10 bg-white px-[5vw] py-20 lg:py-28"
    >
      {/* Background radial highlights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[80px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.035] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,45,90,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20,45,90,.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ───────────────── HEADER ───────────────── */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Global Coverage
              </span>
            </div>

            <h2 className="max-w-[760px] text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-[#09132f] sm:text-4xl lg:text-5xl">
              One tax infrastructure.
              <br />
              <span className="text-[#09132f]/40">
                Multiple jurisdictions.
              </span>
            </h2>
          </div>

          <div className="max-w-[510px] lg:ml-auto">
            <p className="text-base leading-relaxed text-[#09132f]/60 sm:text-[17px]">
              Tax reporting requirements vary by jurisdiction. ZYVORIS is
              designed to provide a common infrastructure layer while keeping
              jurisdiction-specific tax logic and reporting requirements
              distinct.
            </p>

            <div className="mt-5 flex items-center gap-2.5 text-xs font-semibold text-[#09132f]/60">
              <MapPin size={15} className="text-blue-600 shrink-0" />
              <span>Isolated tax rulesets per target jurisdiction</span>
            </div>
          </div>

        </div>

        {/* ───────────────── FILTER & LEGEND BAR ───────────────── */}

        <div className="mt-12 flex flex-col justify-between gap-4 border-y border-[#0b1533]/10 py-4 sm:flex-row sm:items-center">

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <FilterTab
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              label="All Jurisdictions"
              count={jurisdictions.length}
            />
            <FilterTab
              active={filter === 'mvp'}
              onClick={() => setFilter('mvp')}
              label="Available (MVP)"
              count={jurisdictions.filter((j) => j.statusType === 'mvp').length}
              dotColor="bg-blue-600"
            />
            <FilterTab
              active={filter === 'development'}
              onClick={() => setFilter('development')}
              label="In Development"
              count={jurisdictions.filter((j) => j.statusType === 'development').length}
              dotColor="bg-amber-500"
            />
            <FilterTab
              active={filter === 'roadmap'}
              onClick={() => setFilter('roadmap')}
              label="Roadmap"
              count={jurisdictions.filter((j) => j.statusType === 'roadmap').length}
              dotColor="bg-slate-300"
            />
          </div>

          {/* Status Indicators */}
          <div className="hidden items-center gap-4 lg:flex">
            <StatusLegendDot type="mvp" label="Production Ready" />
            <StatusLegendDot type="development" label="Active Build" />
            <StatusLegendDot type="roadmap" label="Planned" />
          </div>

        </div>

        {/* ───────────────── JURISDICTION CARDS ───────────────── */}

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredJurisdictions.map((jurisdiction) => (
            <JurisdictionCard key={jurisdiction.country} {...jurisdiction} />
          ))}
        </div>

     

      </div>
    </section>
  )
}

/* ───────────────── JURISDICTION CARD ───────────────── */

function JurisdictionCard({
  country,
  code,
  title,
  status,
  statusType,
  description,
  capabilities,
}: Jurisdiction) {
  const isAvailable = statusType === 'mvp'
  const isDevelopment = statusType === 'development'

  return (
    <article
      className={`group relative flex min-h-[460px] flex-col rounded-2xl border transition-all duration-200 ${
        isAvailable
          ? 'border-blue-600/20 bg-white shadow-[0_12px_35px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.1)]'
          : isDevelopment
          ? 'border-amber-500/20 bg-white shadow-sm hover:border-amber-500/40'
          : 'border-[#0b1533]/10 bg-[#fafbfc] opacity-80 hover:opacity-100'
      } p-6`}
    >
      {/* Visual Accent Bar */}
      <div
        className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${
          isAvailable
            ? 'bg-blue-600'
            : isDevelopment
            ? 'bg-amber-500'
            : 'bg-slate-200'
        }`}
      />

      {/* Top Meta */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0b1533]/10 bg-[#f4f6fa] font-mono text-xs font-bold tracking-wider text-[#0b1533]/70">
          {code}
        </div>

        <StatusBadge type={statusType} label={status} />
      </div>

      {/* Title Header */}
      <div className="mt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
          {country}
        </p>

        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[#09132f]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-3 text-xs leading-relaxed text-[#09132f]/55">
        {description}
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-[#0b1533]/[0.08]" />

      {/* Capability List */}
      <div className="space-y-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#09132f]/35">
          Engine Capabilities
        </p>

        {capabilities.map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <CheckCircle2
              size={14}
              className={`shrink-0 ${
                isAvailable
                  ? 'text-blue-600'
                  : isDevelopment
                  ? 'text-amber-500'
                  : 'text-[#09132f]/20'
              }`}
            />
            <span
              className={`text-xs ${
                isAvailable
                  ? 'font-medium text-[#09132f]/80'
                  : 'text-[#09132f]/50'
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Status Ribbon */}
      <div className="mt-auto pt-6">
        <div
          className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-medium ${
            isAvailable
              ? 'bg-blue-50 text-blue-700'
              : isDevelopment
              ? 'bg-amber-50 text-amber-800'
              : 'bg-slate-100/80 text-slate-500'
          }`}
        >
          {isAvailable && <CheckCircle2 size={14} className="text-blue-600 shrink-0" />}
          {isDevelopment && <Clock3 size={14} className="text-amber-600 shrink-0" />}
          {!isAvailable && !isDevelopment && <Sparkles size={14} className="text-slate-400 shrink-0" />}

          <span className="text-[11px]">
            {isAvailable && 'Available in Live Platform'}
            {isDevelopment && 'In Active Engineering'}
            {!isAvailable && !isDevelopment && 'Planned on Roadmap'}
          </span>
        </div>
      </div>
    </article>
  )
}

/* ───────────────── FILTER TAB ───────────────── */

function FilterTab({
  active,
  onClick,
  label,
  count,
  dotColor,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
  dotColor?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
        active
          ? 'bg-[#09132f] text-white shadow-sm'
          : 'bg-transparent text-[#09132f]/60 hover:bg-[#0b1533]/[0.04]'
      }`}
    >
      {dotColor && <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />}
      <span>{label}</span>
      <span
        className={`rounded-md px-1.5 py-0.5 text-[10px] ${
          active
            ? 'bg-white/20 text-white'
            : 'bg-[#0b1533]/[0.06] text-[#09132f]/50'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

/* ───────────────── STATUS BADGE ───────────────── */

function StatusBadge({
  type,
  label,
}: {
  type: 'mvp' | 'development' | 'roadmap'
  label: string
}) {
  const styles = {
    mvp: 'border-blue-600/20 bg-blue-50 text-blue-700',
    development: 'border-amber-500/20 bg-amber-50 text-amber-700',
    roadmap: 'border-[#0b1533]/10 bg-slate-100 text-slate-500',
  }

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide ${styles[type]}`}
    >
      {label}
    </span>
  )
}

/* ───────────────── LEGEND DOT ───────────────── */

function StatusLegendDot({
  type,
  label,
}: {
  type: 'mvp' | 'development' | 'roadmap'
  label: string
}) {
  const colors = {
    mvp: 'bg-blue-600',
    development: 'bg-amber-500',
    roadmap: 'bg-slate-300',
  }

  return (
    <div className="flex items-center gap-1.5 text-xs text-[#09132f]/50">
      <span className={`h-2 w-2 rounded-full ${colors[type]}`} />
      <span>{label}</span>
    </div>
  )
}