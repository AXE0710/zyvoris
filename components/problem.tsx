
import React from 'react'

import {
  Calculator,
  AlertCircle,
  ArrowRight,
  Layers3,
  Clock3,
  GitBranch,
} from 'lucide-react'

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="
        relative
        py-[135px]
        px-[5vw]
        max-[700px]:py-[85px]
        max-[700px]:px-[20px]
        bg-white
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute w-[650px] h-[650px] -right-[300px] top-[100px] rounded-full bg-[radial-gradient(circle,rgba(91,105,226,0.055)_0%,transparent_68%)] pointer-events-none" />

      <div className="absolute w-[500px] h-[500px] -left-[300px] bottom-[-200px] rounded-full bg-[radial-gradient(circle,rgba(21,159,141,0.055)_0%,transparent_68%)] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.72fr] gap-8 lg:gap-[110px] items-end mb-[75px]">

          <div>
            <h2
              className="
                mt-[19px]
                mb-0
                font-sans
                text-[44px]
                sm:text-[52px]
                lg:text-[70px]
                leading-[0.96]
                tracking-[-0.065em]
                text-[#121a16]
                font-bold
              "
            >
              Tax reporting gets
              <br />
              complicated{' '}
              <em
                className="
                  not-italic
                  bg-gradient-to-r
                  from-[#079b82]
                  via-[#438ec6]
                  to-[#695bd9]
                  bg-clip-text
                  text-transparent
                "
              >
                before the report.
              </em>
            </h2>
          </div>

          <div className="pb-[3px]">
            <p className="m-0 text-[#69766f] text-[15px] leading-[1.8] max-w-[525px]">
              The difficult part is rarely the final document. It is bringing
              together the underlying data, applying the right logic, managing
              allocations, and proving how every number was produced.
            </p>
          </div>

        </div>

        {/* =====================================================
            MAIN VISUAL
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[16px]">

          {/* =================================================
              LEFT — FULL EXCEL IMAGE
          ================================================== */}

          <div
            className="
              relative
              min-h-[475px]
              rounded-[22px]
              overflow-hidden
              border border-[rgba(18,31,26,0.08)]
              bg-[#f7f8f6]
              shadow-[0_20px_60px_rgba(18,31,26,0.035)]
            "
          >
            <img
              src="/excel.jpg"
              alt="Financial data in Excel"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            <div className="absolute inset-0 bg-white/5 pointer-events-none" />
          </div>

          {/* =================================================
              RIGHT — MANUAL WORKFLOW
          ================================================== */}

          <div
            className="
              relative
              min-h-[475px]
              rounded-[22px]
              overflow-hiddenMap financial data
              border border-[rgba(18,31,26,0.08)]
              bg-white
              shadow-[0_20px_60px_rgba(18,31,26,0.045)]
            "
          >

            {/* Header */}

            <div className="p-[28px] max-sm:p-[21px]">
              <span className="text-[13px] font-bold tracking-[0.14em] text-[#929c97]">
                THE MANUAL LAYER
              </span>

              <h3 className="mt-[10px] mb-0 text-[25px] tracking-[-0.045em] text-[#202a25] font-semibold">
                More steps. More room for inconsistency.
              </h3>
            </div>

            {/* Workflow */}

            <div className="px-[28px] max-sm:px-[21px] pb-[30px]">

              {[
                {
                  icon: Calculator,
                  title: 'Map financial data',
                  text: 'Identify and classify relevant income, costs, and transactions.',
                },
                {
                  icon: GitBranch,
                  title: 'Apply tax logic',
                  text: 'Determine which calculations and rules apply to each item.',
                },
                {
                  icon: Layers3,
                  title: 'Allocate results',
                  text: 'Distribute calculated amounts across the relevant structures.',
                },
                {
                  icon: Clock3,
                  title: 'Reconcile & review',
                  text: 'Check calculations, resolve differences, and prepare reporting.',
                },
              ].map((item, i) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="relative flex gap-[16px] py-[16px]"
                  >

                    {/* Timeline */}

                    {i !== 3 && (
                      <div className="absolute left-[15px] top-[45px] bottom-[-16px] w-px bg-[#e4e8e5]" />
                    )}

                    {/* Icon */}

                    <div
                      className="
                        relative
                        z-10
                        w-[31px]
                        h-[31px]
                        shrink-0
                        rounded-[9px]
                        bg-[#f3f6f4]
                        border border-[rgba(18,31,26,0.06)]
                        grid place-items-center
                        text-[#68766f]
                      "
                    >
                      <Icon size={14} />
                    </div>

                    {/* Text */}

                    <div className="pt-[1px]">
                      <strong className="block text-[16px] font-bold text-[#35413b]">
                        {item.title}
                      </strong>

                      <p className="mt-[5px] mb-0 max-w-[390px] text-[15px] leading-[1.6] text-[#89938e]">
                        {item.text}
                      </p>
                    </div>

                  </div>
                )
              })}

            </div>

            {/* Bottom warning */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                px-[28px]
                py-[17px]
                max-sm:px-[21px]
                bg-[#faf8f4]
                border-t border-[rgba(18,31,26,0.07)]
              "
            >

              <div className="flex items-center gap-[9px]">

                <div className="w-[28px] h-[28px] rounded-full bg-[#f3eadc] grid place-items-center text-[#a17f53]">
                  <AlertCircle size={14} />
                </div>

                <div>
                  <strong className="block text-[14px] font-bold text-[#625747]">
                    Manual dependency
                  </strong>

                  <span className="block mt-[2px] text-[13px] text-[#948a7d]">
                    More handoffs make consistency harder to maintain.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-[30px] flex items-center justify-center gap-[10px] text-[#8a9590] text-[14px] font-semibold">

          <span>
            THE GOAL ISN&apos;T MORE SPREADSHEETS.
          </span>

          <ArrowRight
            size={12}
            className="text-[#159f8d]"
          />

          <span className="text-[#159f8d]">
            IT&apos;S A CONTROLLED TAX WORKFLOW.
          </span>

        </div>

      </div>
    </section>
  )
}

