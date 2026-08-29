'use client'

import {
  ArrowUpRight,
  Building2,
  Landmark,
  Scale,
  BriefcaseBusiness,
  LucideIcon,
} from 'lucide-react'

interface Segment {
  number: string
  icon: LucideIcon
  audience: string
  headline: string
  description: string
  focus: string
}

const segments: Segment[] = [
  {
    number: '01',
    icon: Building2,
    audience: 'Fund Managers & AIFMs',
    headline: 'Centralize tax reporting across funds, entities and jurisdictions.',
    description:
      'Bring fund structures, financial data and jurisdiction-specific tax workflows into a controlled environment built for complex private-market operations.',
    focus: 'Fund-level oversight',
  },
  {
    number: '02',
    icon: Landmark,
    audience: 'Fund Administrators',
    headline: 'Add scalable tax calculation capabilities to fund administration workflows.',
    description:
      'Extend existing administration processes with structured tax calculations, validation and reporting workflows without replacing existing systems.',
    focus: 'Operational scalability',
  },
  {
    number: '03',
    icon: Scale,
    audience: 'Tax & Accounting Firms',
    headline: 'Standardize complex calculations while maintaining professional review.',
    description:
      'Create repeatable calculation workflows while keeping the review, judgment and oversight expected from professional tax and accounting teams.',
    focus: 'Controlled review',
  },
  {
    number: '04',
    icon: BriefcaseBusiness,
    audience: 'Institutional Investors',
    headline: 'Structure and analyze tax information across private-market investments.',
    description:
      'Bring fragmented tax information into a structured framework that supports analysis across funds, investments, entities and jurisdictions.',
    focus: 'Investment visibility',
  },
]

export default function CustomerSegments() {
  return (
    <section
      id="customer-segments"
      className="relative overflow-hidden border-t border-[#0b1533]/10 bg-[#f8faff] px-[5vw] py-20 text-[#09132f]"
    >
      {/* Background Glow & Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/[0.045] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,45,90,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20,45,90,.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-blue-600" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Customer Segments
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(32px,3.8vw,56px)] font-medium leading-[1.05] tracking-[-0.04em]">
              Built for the{' '}
              <span className="text-[#09132f]/40">
                private-markets ecosystem.
              </span>
            </h2>
          </div>

          <div className="max-w-[460px] lg:ml-auto">
            <p className="text-[14px] leading-[1.65] text-[#09132f]/60">
              Different teams have different responsibilities. ZYVORIS is
              designed to fit the way fund, administration, tax and investment
              organizations actually work.
            </p>
          </div>
        </div>

        {/* Compact Audience Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => (
            <SegmentCard key={segment.number} {...segment} />
          ))}
        </div>

        {/* Ecosystem Footer Line */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#0b1533]/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#09132f]/45">
              One infrastructure layer
            </span>
          </div>

          <p className="max-w-[600px] text-[11px] leading-5 text-[#09132f]/40 md:text-right">
            Designed to connect the responsibilities of fund management,
            administration, tax, accounting and institutional investment
            without forcing every team into the same workflow.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ───────────── COMPACT SEGMENT CARD ───────────── */

function SegmentCard({
  number,
  icon: Icon,
  audience,
  headline,
  description,
  focus,
}: Segment) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#0b1533]/10 bg-white p-5 shadow-[0_4px_20px_rgba(20,45,90,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,45,90,0.08)]">
      <div>
        {/* Top bar: Icon, Number & Hover Arrow */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#0b1533]/10 bg-[#f7f9fc] text-[#09132f]/60 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-600">
              <Icon size={16} strokeWidth={1.8} />
            </div>

            <span className="text-[10px] font-semibold tracking-[0.14em] text-blue-600">
              {number}
            </span>
          </div>

          <ArrowUpRight
            size={15}
            className="text-[#09132f]/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
          />
        </div>

        {/* Audience Tag & Headline */}
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600">
            {audience}
          </p>

          <h3 className="mt-2 text-[17px] font-semibold leading-[1.3] tracking-[-0.025em] text-[#09132f]">
            {headline}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-3 text-[12px] leading-[1.6] text-[#09132f]/55">
          {description}
        </p>
      </div>

      {/* Footer Pill */}
      <div className="mt-6 flex items-center justify-between border-t border-[#0b1533]/[0.06] pt-3">
        <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#09132f]/35">
          Focus
        </span>

        <span className="rounded-full border border-[#0b1533]/10 bg-[#f7f9fc] px-2.5 py-1 text-[9.5px] font-medium text-[#09132f]/60">
          {focus}
        </span>
      </div>
    </article>
  )
}