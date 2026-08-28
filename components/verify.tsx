
import React from 'react'
import {
  ShieldCheck,
  FileCheck2,
  Check,
  LockKeyhole,
  Database,
  Calculator,
  GitBranch,
} from 'lucide-react'

const AUDIT_STEPS = [
  ['01', 'SOURCE DATA', 'Fund transaction data linked to the originating record.'],
  ['02', 'TAX CLASSIFICATION', 'Income and expenses mapped to the applicable rule.'],
  ['03', 'CALCULATION', 'Taxable amounts calculated from configured logic.'],
  ['04', 'ALLOCATION', 'Results distributed across fund structures and units.'],
  ['05', 'TAX OUTPUT', 'Final tax amount generated for reporting.'],
  ['06', 'AUDIT RECORD', 'Source, rules, calculation path and execution details recorded.'],
]

const AUDIT_SUMMARY = [
  ['SOURCE LINKS', '6 / 6 verified'],
  ['CALCULATION PATH', 'Fully traceable'],
  ['OUTPUT STATUS', 'Reporting-ready'],
]

export default function VerificationSection() {
  return (
    <section
      id="verification"
      className="
        relative
        py-[105px]
        px-[5vw]
        max-sm:px-[20px]
        bg-[#f7f9f6]
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          w-[550px]
          h-[550px]
          -left-[260px]
          top-[80px]
          rounded-full
          bg-[radial-gradient(circle,rgba(21,159,141,0.055)_0%,transparent_68%)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          w-[450px]
          h-[450px]
          right-[-220px]
          bottom-[-180px]
          rounded-full
          bg-[radial-gradient(circle,rgba(91,92,220,0.035)_0%,transparent_70%)]
          pointer-events-none
        "
      />

      {/* Flow animation */}

      <style>{`
        @keyframes auditFlow {
          0% {
            transform: translateY(-5px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(45px);
            opacity: 0;
          }
        }

        .audit-flow {
          animation: auditFlow 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .audit-flow {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>


      <div className="max-w-[1180px] mx-auto relative z-10">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_0.72fr]
            gap-[40px]
            lg:gap-[90px]
            items-end
            mb-[48px]
          "
        >

          <div>

            <span
              className="
                inline-flex
                items-center
                gap-[7px]
                text-[13px]
                font-bold
                tracking-[0.14em]
                text-[#159f8d]
              "
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#159f8d]" />
              AUDIT & VERIFICATION
            </span>

            <h2
              className="
                mt-[13px]
                mb-0
                font-sans
                text-[40px]
                sm:text-[47px]
                lg:text-[61px]
                leading-[0.97]
                tracking-[-0.065em]
                text-[#121b17]
                font-bold
              "
            >
              Know exactly
              <br />
              <em
                className="
                  not-italic
                  bg-gradient-to-r
                  from-[#079b82]
                  via-[#408dc5]
                  to-[#695bd9]
                  bg-clip-text
                  text-transparent
                "
              >
                how every number was calculated.
              </em>
            </h2>

          </div>


          <div>

            <p
              className="
                m-0
                text-[#687670]
                text-[13px]
                leading-[1.75]
                max-w-[470px]
              "
            >
              Zyvoris records the complete calculation path behind every
              tax output — connecting source data, tax logic, allocations,
              and final reporting in one continuous audit trail.
            </p>

            <div
              className="
                flex
                items-center
                gap-[7px]
                mt-[16px]
                text-[#159f8d]
                text-[13px]
                font-bold
                tracking-[0.08em]
              "
            >
              <ShieldCheck size={13} />
              SOURCE-LINKED · TRACEABLE · REVIEWABLE
            </div>

          </div>

        </div>


        {/* =====================================================
            MAIN AUDIT PANEL
        ====================================================== */}

        <div
          className="
            relative
            rounded-[20px]
            bg-white
            border border-[rgba(18,31,26,0.08)]
            overflow-hidden
            shadow-[0_25px_65px_rgba(20,35,30,0.065)]
          "
        >

          {/* =================================================
              PRODUCT BAR
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              px-[21px]
              py-[13px]
              border-b
              border-[rgba(18,31,26,0.07)]
              bg-[#fbfcfb]
            "
          >

            <div className="flex items-center gap-[10px]">

              <div
                className="
                  w-[29px]
                  h-[29px]
                  rounded-[8px]
                  bg-[#edf8f5]
                  grid
                  place-items-center
                  text-[#159f8d]
                "
              >
                <FileCheck2 size={14} />
              </div>

              <div>

                <span
                  className="
                    block
                    text-[12px]
                    font-bold
                    tracking-[0.13em]
                    text-[#98a19d]
                  "
                >
                  ZYVORIS TAX ENGINE
                </span>

                <strong
                  className="
                    block
                    mt-[2px]
                    text-[16px]
                    font-semibold
                    text-[#29352f]
                  "
                >
                  Calculation trace
                </strong>

              </div>

            </div>


            <div
              className="
                flex
                items-center
                gap-[6px]
                px-[9px]
                py-[5px]
                rounded-full
                bg-[#e9f8f3]
                text-[#159a82]
                text-[12px]
                font-bold
              "
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#159a82]" />
              TRACE COMPLETE
            </div>

          </div>


          {/* =================================================
              OUTPUT + ENGINE
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_0.55fr]
              border-b
              border-[rgba(18,31,26,0.07)]
            "
          >

            {/* Result */}

            <div className="px-[23px] py-[20px]">

              <span
                className="
                  text-[12px]
                  font-bold
                  tracking-[0.13em]
                  text-[#929c97]
                "
              >
                SELECTED TAX OUTPUT
              </span>

              <div className="flex items-end gap-[9px] mt-[4px]">

                <strong
                  className="
                    font-sans
                    text-[29px]
                    tracking-[-0.055em]
                    text-[#17211d]
                  "
                >
                  2.76
                </strong>

                <span className="mb-[4px] text-[14px] text-[#78847e]">
                  per unit
                </span>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-[6px]
                  mt-[5px]
                  text-[#159f8d]
                  text-[13px]
                  font-semibold
                "
              >
                <Check size={11} />
                Calculation verified
              </div>

            </div>


            {/* Engine */}

            <div
              className="
                relative
                min-h-[110px]
                bg-[#f8faf8]
                border-l
                border-[rgba(18,31,26,0.07)]
                max-lg:border-l-0
                max-lg:border-t
                overflow-hidden
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  opacity-35
                  bg-[linear-gradient(rgba(18,31,26,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(18,31,26,0.035)_1px,transparent_1px)]
                  bg-[length:25px_25px]
                "
              />

              <div className="relative h-full flex items-center justify-center">

                <div
                  className="
                    relative
                    w-[78px]
                    h-[54px]
                    rotate-[10deg]
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[10px]
                      bg-gradient-to-br
                      from-[#e7f7f2]
                      to-[#d9e9e4]
                      border border-[rgba(21,159,141,0.2)]
                      shadow-[9px_9px_20px_rgba(20,40,35,0.07)]
                    "
                  >

                    <div
                      className="
                        absolute
                        top-[10px]
                        left-[10px]
                        w-[29px]
                        h-[3px]
                        rounded-full
                        bg-[#159f8d]
                      "
                    />

                    <span
                      className="
                        absolute
                        left-[10px]
                        bottom-[9px]
                        text-[12px]
                        font-bold
                        tracking-[0.08em]
                        text-[#4d625a]
                      "
                    >
                      TAX
                    </span>

                  </div>

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[10px]
                      bg-[#d0dfda]
                      translate-y-[15px]
                      -z-10
                    "
                  />

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              CALCULATION PATH
          ================================================== */}

          <div>

            <div
              className="
                flex
                items-center
                justify-between
                px-[21px]
                py-[14px]
                border-b
                border-[rgba(18,31,26,0.07)]
              "
            >

              <span
                className="
                  text-[12px]
                  font-bold
                  tracking-[0.13em]
                  text-[#929c97]
                "
              >
                CALCULATION PATH
              </span>

              <span
                className="
                  text-[12px]
                  font-semibold
                  text-[#159f8d]
                "
              >
                6 VERIFIED STEPS
              </span>

            </div>


            <div className="px-[21px]">

              {AUDIT_STEPS.map(([num, label, text], i) => (

                <div
                  key={num}
                  className="
                    relative
                    grid
                    grid-cols-[34px_145px_1fr_25px]
                    max-sm:grid-cols-[32px_1fr_24px]
                    gap-[12px]
                    items-center
                    min-h-[57px]
                    border-b
                    border-[rgba(18,31,26,0.055)]
                    last:border-b-0
                  "
                >

                  {/* Number */}

                  <div
                    className={`
                      relative
                      z-10
                      w-[27px]
                      h-[27px]
                      rounded-[8px]
                      grid
                      place-items-center
                      text-[13px]
                      font-bold
                      ${
                        i === AUDIT_STEPS.length - 1
                          ? 'bg-[#e8f8f3] text-[#159a82]'
                          : 'bg-[#f3f6f4] text-[#87928d]'
                      }
                    `}
                  >
                    {num}
                  </div>


                  {/* Label */}

                  <strong
                    className="
                      text-[12px]
                      tracking-[0.09em]
                      text-[#65726b]
                      max-sm:col-start-2
                    "
                  >
                    {label}
                  </strong>


                  {/* Description */}

                  <p
                    className="
                      m-0
                      text-[#7a8580]
                      text-[14px]
                      leading-[1.4]
                      max-sm:hidden
                    "
                  >
                    {text}
                  </p>


                  {/* Check */}

                  <div
                    className="
                      w-[23px]
                      h-[23px]
                      rounded-full
                      bg-[#edf9f5]
                      grid
                      place-items-center
                      text-[#19a88f]
                    "
                  >
                    <Check size={11} />
                  </div>


                  {/* Flow */}

                  {i !== AUDIT_STEPS.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[13px]
                        top-[42px]
                        bottom-[-1px]
                        w-px
                        bg-[#dfe7e3]
                      "
                    >
                      <span
                        className="
                          audit-flow
                          absolute
                          left-1/2
                          top-0
                          -translate-x-1/2
                          w-[4px]
                          h-[4px]
                          rounded-full
                          bg-[#159f8d]
                        "
                      />
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
              SUMMARY
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              border-t
              border-[rgba(18,31,26,0.07)]
              bg-[#fafcfb]
            "
          >

            {AUDIT_SUMMARY.map(([label, value], i) => (

              <div
                key={label}
                className={`
                  px-[21px]
                  py-[13px]
                  ${
                    i < 2
                      ? 'border-b sm:border-b-0 sm:border-r border-[rgba(18,31,26,0.07)]'
                      : ''
                  }
                `}
              >

                <span
                  className="
                    block
                    text-[6px]
                    font-bold
                    tracking-[0.11em]
                    text-[#98a19d]
                  "
                >
                  {label}
                </span>

                <strong
                  className="
                    block
                    mt-[3px]
                    text-[15px]
                    font-bold
                    text-[#33413a]
                  "
                >
                  {value}
                </strong>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="flex justify-center mt-[20px]">

          <span
            className="
              flex
              items-center
              gap-[7px]
              text-[#89948e]
              text-[13px]
            "
          >
            <LockKeyhole size={11} className="text-[#159f8d]" />
            Every calculation remains linked to its source and logic.
          </span>

        </div>

      </div>

    </section>
  )
}

