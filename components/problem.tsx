import React from 'react'
import {
  Database,
  GitBranch,
  Globe2,
  SearchCheck,
} from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      number: '01',
      category: 'DATA',
      icon: Database,
      title: 'Fragmented Data',
      text: 'Important fund data sits across different systems, administrators, spreadsheets, and operational sources.',
    },
    {
      number: '02',
      category: 'LOGIC',
      icon: GitBranch,
      title: 'Manual Tax Logic',
      text: 'Complex classifications and calculations often depend on spreadsheets, workpapers, and institutional knowledge.',
    },
    {
      number: '03',
      category: 'GLOBAL',
      icon: Globe2,
      title: 'Cross-Border Complexity',
      text: 'Each jurisdiction introduces different rules, classifications, allocation methods, and reporting requirements.',
    },
    {
      number: '04',
      category: 'AUDIT',
      icon: SearchCheck,
      title: 'Limited Traceability',
      text: 'Reviewers often need to reconstruct how a number moved from source data through calculation to final reporting.',
    },
  ]

  return (
    <section
      id="problem"
      className="
        relative
        overflow-hidden
        bg-[#fcfdfe]
        px-[5vw]
        py-[120px]
        max-[700px]:px-[20px]
        max-[700px]:py-[80px]
      "
    >
      {/* Background Radial Glows */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          top-[80px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(40,97,223,0.04)_0%,transparent_70%)]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          bottom-[-250px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[radial-gradient(circle,rgba(40,97,223,0.03)_0%,transparent_70%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1420px]">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-end
            gap-[28px]
            lg:grid-cols-[1.1fr_0.8fr]
            lg:gap-[90px]
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-[10px]
                text-[11px]
                font-extrabold
                tracking-[0.14em]
                text-[#2861df]
              "
            >
              <span className="h-[1px] w-[24px] bg-[#2861df]" />
              THE OPERATING PROBLEM
            </div>

            <h2
              className="
                mt-[20px]
                mb-0
                max-w-[850px]
                font-sans
                text-[42px]
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0b132a]
                sm:text-[54px]
                lg:text-[68px]
              "
            >
              Private markets have scaled.{' '}
              <span className="text-[#2861df]">
                Tax infrastructure has not.
              </span>
            </h2>
          </div>

          <div className="pb-[6px]">
            <p
              className="
                m-0
                max-w-[520px]
                text-[16px]
                leading-[1.7]
                text-[#556075]
              "
            >
              As fund structures become more complex and reporting expands
              across jurisdictions, tax workflows increasingly depend on
              fragmented data, manual processes, and knowledge that is
              difficult to reproduce and review.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROBLEM CARDS
        ====================================================== */}
        <div
          className="
            mt-[64px]
            grid
            grid-cols-1
            gap-[20px]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {problems.map((problem) => {
            const Icon = problem.icon

            return (
              <div
                key={problem.number}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-[16px]
                  border
                  border-[#e5e9f0]
                  bg-white
                  p-[32px]
                  shadow-[0_10px_30px_rgba(15,23,42,0.03)]
                  transition-all
                  duration-250
                  ease-in-out
                  hover:-translate-y-[4px]
                  hover:border-[#2861df]/40
                  hover:shadow-[0_20px_40px_rgba(40,97,223,0.08)]
                "
              >
                {/* Accent Top Bar on Hover */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[3px]
                    rounded-t-[16px]
                    bg-[#2861df]
                    opacity-0
                    transition-opacity
                    duration-200
                    group-hover:opacity-100
                  "
                />

                {/* Card Top: Header Metadata & Icon */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#f0f3f8] pb-[20px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="font-mono text-[12px] font-bold text-[#2861df]">
                        {problem.number}
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.1em] text-[#94a3b8]">
                        / {problem.category}
                      </span>
                    </div>

                    <div
                      className="
                        flex
                        h-[40px]
                        w-[40px]
                        items-center
                        justify-center
                        rounded-[10px]
                        bg-[#f1f5fd]
                        text-[#2861df]
                        transition-colors
                        duration-200
                        group-hover:bg-[#2861df]
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="mt-[24px]">
                    <h3
                      className="
                        m-0
                        text-[20px]
                        font-semibold
                        leading-[1.25]
                        tracking-[-0.02em]
                        text-[#0f172a]
                      "
                    >
                      {problem.title}
                    </h3>

                    <p
                      className="
                        mt-[12px]
                        mb-0
                        text-[14px]
                        leading-[1.65]
                        text-[#64748b]
                      "
                    >
                      {problem.text}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Indicator */}
                <div className="mt-[32px] flex items-center gap-[6px]">
                  <span className="h-[4px] w-[4px] rounded-full bg-[#cbd5e1] group-hover:bg-[#2861df]" />
                  <span className="text-[10px] font-bold tracking-[0.08em] text-[#a1a9b6] uppercase group-hover:text-[#2861df]">
                    Operating Bottleneck
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* =====================================================
            BOTTOM SUMMARY BAR
        ====================================================== */}
        <div
          className="
            mt-[48px]
            flex
            flex-col
            items-start
            justify-between
            gap-[16px]
            border-t
            border-[#e2e8f0]
            pt-[24px]
            sm:flex-row
            sm:items-center
          "
        >
          <p
            className="
              m-0
              text-[13px]
              font-semibold
              text-[#64748b]
            "
          >
            The complexity sits upstream of the final report.
          </p>

          <div
            className="
              flex
              items-center
              gap-[8px]
              text-[10px]
              font-extrabold
              tracking-[0.1em]
              text-[#2861df]
            "
          >
            <span className="h-[1px] w-[20px] bg-[#2861df]" />
            DATA
            <span className="text-[#cbd5e1]">→</span>
            LOGIC
            <span className="text-[#cbd5e1]">→</span>
            REPORTING
          </div>
        </div>
      </div>
    </section>
  )
}