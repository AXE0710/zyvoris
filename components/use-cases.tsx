
'use client'

import {
  ArrowUpRight,
  Calculator,
  Layers3,
  FileText,
  Globe2,
  ReceiptText,
  UserCheck,
  CheckCircle2,
} from 'lucide-react'

const useCases = [
  {
    id: 'fund-tax',
    number: '01',
    icon: Calculator,
    title: 'Fund Tax Calculation',
    shortDesc: 'Automated, jurisdiction-specific tax calculations.',
    problem:
      'Turn complex fund-level financial data into structured, jurisdiction-specific tax calculations without relying on fragmented spreadsheets and manual processes.',
    users: 'Fund managers, AIFMs, fund administrators, and tax teams',
    output: 'Controlled fund-level tax calculation and reporting data',
  },
  {
    id: 'share-class',
    number: '02',
    icon: Layers3,
    title: 'Share-Class Tax Allocation',
    shortDesc: 'Precise multi-tier share-class tax distribution.',
    problem:
      'Allocate tax results across different share classes while accounting for the underlying fund structure and relevant allocation logic.',
    users: 'Fund administrators, tax teams, and fund operations',
    output: 'Share-class level tax allocations ready for review',
  },
  {
    id: 'investor-reporting',
    number: '03',
    icon: FileText,
    title: 'Investor Tax Reporting',
    shortDesc: 'Standardized investor tax statement generation.',
    problem:
      'Transform fund-level results into investor-relevant tax information without rebuilding the reporting process for every investor or reporting period.',
    users: 'Fund administrators, tax firms, and investor reporting teams',
    output: 'Structured investor tax reporting data and outputs',
  },
  {
    id: 'cross-border',
    number: '04',
    icon: Globe2,
    title: 'Cross-Border Tax Analysis',
    shortDesc: 'Multi-jurisdictional tax compliance logic.',
    problem:
      'Understand how fund structures, investments, and investor positions interact with different jurisdictional tax requirements.',
    users: 'International tax teams, fund managers, and advisors',
    output: 'Jurisdiction-aware tax analysis and review information',
  },
  {
    id: 'k1-k3',
    number: '05',
    icon: ReceiptText,
    title: 'K-1 / K-3 Intelligence',
    shortDesc: 'Partnership tax data extraction and modeling.',
    problem:
      'Bring complex partnership tax information into a structured workflow so teams can analyze, validate, and use the underlying information efficiently.',
    users: 'US tax teams, fund administrators, and cross-border tax professionals',
    output: 'Structured K-1 / K-3 intelligence for downstream workflows',
  },
]

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden border-t border-[#0b1533]/10 bg-white px-[5vw] py-16 text-[#09132f] lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-[180px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[130px]" />

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

        {/* HEADER */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Use Cases
              </span>
            </div>

            <h2 className="max-w-[720px] text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Built around real
              <br />

              <span className="text-[#09132f]/35">
                private-market tax workflows.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-sm leading-relaxed text-[#09132f]/60 sm:text-base lg:ml-auto">
            ZYVORIS connects data, calculations, review steps, and reporting
            outputs into unified workflows for private-market tax teams.
          </p>
        </div>

        {/* ALL USE CASE CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">

          {useCases.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.id}
                className="
                  relative overflow-hidden
                  rounded-2xl
                  border border-[#0b1533]/10
                  bg-white
                  p-6
                  shadow-[0_12px_35px_rgba(20,45,90,0.035)]
                "
              >
                {/* BLUE TOP LINE */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-blue-600/70" />

                {/* CARD HEADER */}
                <div className="flex items-start justify-between gap-6">

                  <div className="flex items-start gap-4">

                    {/* ICON */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-600/10 bg-blue-50 text-blue-600">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.18em] text-blue-600">
                          {item.number}
                        </span>

                        <span className="h-px w-4 bg-[#0b1533]/10" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-[#09132f]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#09132f]/50">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[#09132f]/20"
                  />
                </div>

                {/* CARD INFORMATION */}
                <div className="mt-7 grid grid-cols-1 gap-6 border-t border-[#0b1533]/10 pt-6 sm:grid-cols-2">

                  {/* PROBLEM */}
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#09132f]/35">
                      Problem Solved
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-[#09132f]/70">
                      {item.problem}
                    </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="space-y-5">

                    {/* USERS */}
                    <div>
                      <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#09132f]/35">
                        <UserCheck
                          size={12}
                          className="text-blue-600"
                        />

                        Who Uses It?
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-[#09132f]/70">
                        {item.users}
                      </p>
                    </div>

                    {/* OUTPUT */}
                    <div>
                      <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#09132f]/35">
                        <CheckCircle2
                          size={12}
                          className="text-emerald-600"
                        />

                        Generated Output
                      </p>

                      <p className="mt-2 text-sm font-medium leading-relaxed text-[#09132f]/85">
                        {item.output}
                      </p>
                    </div>

                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* SMALL CLOSING STATEMENT */}
        <div className="mt-8 border-t border-[#0b1533]/10 pt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-[#09132f]/45">
            Each workflow is designed to turn complex tax data into a
            controlled, reviewable process with structured outputs for the
            teams responsible for reporting and compliance.
          </p>
        </div>

      </div>
    </section>
  )
}

