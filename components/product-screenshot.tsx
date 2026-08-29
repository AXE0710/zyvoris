'use client'

import Image from 'next/image'
import {
  CheckCircle2,
  Clock3,
  AlertCircle,
  FileCheck2,
} from 'lucide-react'

export default function ProductScreenshot() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-white px-[5vw] py-20 text-[#0b1533] lg:py-28"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,45,90,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20,45,90,.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ───────────────── INTRO ───────────────── */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                The Platform
              </span>
            </div>

            <h2 className="max-w-[680px] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-[#09132f] sm:text-4xl lg:text-5xl">
              Designed for
              <br />
              <span className="text-[#09132f]/40">
                complex tax operations.
              </span>
            </h2>
          </div>

          <div className="max-w-[570px] lg:ml-auto">
            <p className="text-base leading-relaxed text-[#09132f]/65 sm:text-[17px]">
              ZYVORIS brings fund data, tax calculations, jurisdictional
              requirements and review workflows into one controlled operating
              environment.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-[#09132f]/40 sm:text-sm">
              See what is being calculated, where each reporting workflow
              stands, and which items require review before results move into
              final reporting.
            </p>
          </div>

        </div>

        {/* ───────────────── PRODUCT IMAGE & OVERLAY ───────────────── */}

        <div className="relative mx-auto mt-12 max-w-[1080px] lg:mt-16">

          {/* Main Frame */}
          <div className="relative rounded-2xl border border-[#0b1533]/10 bg-[#f8faff] p-2 shadow-[0_20px_50px_rgba(20,45,90,0.08)]">

            {/* Browser Header Bar */}
            <div className="flex h-10 items-center justify-between border-b border-[#0b1533]/[0.07] px-4">

              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0b1533]/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0b1533]/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0b1533]/15" />
              </div>

              <div className="hidden rounded-md border border-[#0b1533]/[0.07] bg-white px-4 py-1 sm:flex">
                <span className="font-mono text-[10px] tracking-wide text-[#0b1533]/40">
                  app.zyvoris.com / calculations
                </span>
              </div>

              <div className="w-10" />

            </div>

            {/* Uncropped Full Image */}
            <div className="relative w-full overflow-hidden rounded-b-xl bg-white">
              <Image
                src="/product.png"
                alt="ZYVORIS tax reporting platform UI"
                width={1920}
                height={1080}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

          </div>

          {/* ───────────────── REPOSITIONED FLOATING OVERLAY ───────────────── */}
          {/* Sits anchored to the right side without overlapping crucial center content */}
          <div className="mt-6 w-full rounded-2xl border border-[#0b1533]/10 bg-white/95 p-4 backdrop-blur-md shadow-xl xl:absolute xl:-right-10 xl:bottom-6 xl:mt-0 xl:w-[320px] xl:p-5 xl:shadow-[0_25px_60px_rgba(20,45,90,0.18)]">

            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-[#0b1533]/[0.08] pb-3">

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Calculation Trace
                </p>

                <p className="mt-0.5 text-xs font-semibold text-[#09132f] sm:text-sm">
                  Private Equity Fund I
                </p>
              </div>

              <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                Live Audit
              </span>

            </div>

            {/* Trace rows */}
            <div className="grid grid-cols-2 gap-2 pt-3 xl:grid-cols-1 xl:space-y-2 xl:gap-0">

              <TraceRow
                icon={<FileCheck2 size={13} />}
                label="Source Data"
                value="Verified"
              />

              <TraceRow
                icon={<FileCheck2 size={13} />}
                label="Tax Classification"
                value="Validated"
              />

              <TraceRow
                icon={<Clock3 size={13} />}
                label="Tax Logic"
                value="Applied"
              />

              <TraceRow
                icon={<CheckCircle2 size={13} />}
                label="Calculation"
                value="Complete"
              />

              <TraceRow
                icon={<AlertCircle size={13} />}
                label="Exceptions"
                value="None"
              />

              <TraceRow
                icon={<FileCheck2 size={13} />}
                label="Reporting Output"
                value="Ready"
              />

            </div>

            {/* Trace explanation */}
            <div className="mt-3 border-t border-[#0b1533]/[0.08] pt-2.5">
              <p className="text-[10px] leading-relaxed text-[#0b1533]/50">
                Every calculation step remains connected to its source data and applied tax logic.
              </p>
            </div>

          </div>

        </div>

        {/* ───────────────── SUPPORTING POINTS ───────────────── */}

        <div className="mt-20 grid grid-cols-1 border-t border-[#0b1533]/10 md:grid-cols-3 sm:mt-24">

          <InfoItem
            number="01"
            title="Know what is happening"
            description="See calculation, exception and review status across active reporting workflows."
          />

          <InfoItem
            number="02"
            title="Review before reporting"
            description="Surface items requiring attention before results move into final reporting."
          />

          <InfoItem
            number="03"
            title="Trace every result"
            description="Connect reported outputs back to source data, classifications and tax logic."
          />

        </div>

      </div>
    </section>
  )
}


/* ───────────────── TRACE ROW ───────────────── */

function TraceRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-3">

      <div className="flex min-w-0 items-center gap-2">

        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#f0f4fa] text-blue-600">
          {icon}
        </div>

        <span className="truncate text-[11px] font-medium text-[#0b1533]/70">
          {label}
        </span>

      </div>

      <div className="flex shrink-0 items-center gap-1.5">

        <span className="text-[10px] font-medium text-[#0b1533]/60">
          {value}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

      </div>

    </div>
  )
}


/* ───────────────── INFO ITEM ───────────────── */

function InfoItem({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="border-b border-[#0b1533]/10 px-0 py-6 md:border-b-0 md:border-r md:px-6 md:py-8 first:md:pl-0 last:md:border-r-0">

      <span className="text-[10px] font-semibold tracking-[0.18em] text-blue-600">
        {number}
      </span>

      <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-[#09132f] sm:text-lg">
        {title}
      </h3>

      <p className="mt-2 max-w-[320px] text-xs leading-relaxed text-[#09132f]/50 sm:text-[13px]">
        {description}
      </p>

    </div>
  )
}