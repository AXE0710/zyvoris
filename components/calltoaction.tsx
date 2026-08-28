
import React from 'react'
import {
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  FileCheck2,
  LockKeyhole,
  Sparkles,
  Check,
} from 'lucide-react'

export default function CallToActionSection() {
  return (
    <section
      id="company"
      className="
        relative
        py-[105px]
        px-[5vw]
        max-[700px]:py-[75px]
        max-[700px]:px-[20px]
        bg-white
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          w-[600px]
          h-[600px]
          right-[-260px]
          top-[-280px]
          rounded-full
          bg-[radial-gradient(circle,rgba(21,159,141,0.065),transparent_68%)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          w-[450px]
          h-[450px]
          left-[-250px]
          bottom-[-280px]
          rounded-full
          bg-[radial-gradient(circle,rgba(91,91,220,0.035),transparent_68%)]
          pointer-events-none
        "
      />


      <div className="relative z-10 max-w-[1180px] mx-auto">

        {/* =================================================
            MAIN CTA
        ================================================== */}

        <div
          className="
            relative
            rounded-[24px]
            max-[700px]:rounded-[19px]
            overflow-hidden
            border border-[rgba(18,31,26,0.09)]
            bg-[#f8faf8]
            shadow-[0_25px_70px_rgba(18,31,26,0.07)]
          "
        >

          {/* Top accent */}

          <div
            className="
              absolute
              top-0
              left-[18%]
              right-[18%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#159f8d]/60
              to-transparent
            "
          />


          {/* =================================================
              CONTENT GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_0.72fr]
              gap-[45px]
              lg:gap-[70px]
              items-center
              px-[65px]
              py-[65px]
              max-[700px]:px-[23px]
              max-[700px]:py-[48px]
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div>

              {/* Kicker */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-[7px]
                  px-[9px]
                  py-[5px]
                  rounded-full
                  bg-white
                  border border-[rgba(18,31,26,0.08)]
                  text-[12px]
                  font-bold
                  tracking-[0.13em]
                  text-[#7e8983]
                "
              >

                <span className="w-[5px] h-[5px] rounded-full bg-[#159f8d]" />

                NEXT STEP

              </div>


              {/* Heading */}

              <h2
                className="
                  mt-[18px]
                  mb-0
                  font-sans
                  text-[43px]
                  sm:text-[51px]
                  lg:text-[62px]
                  leading-[0.95]
                  tracking-[-0.065em]
                  text-[#131c18]
                  font-bold
                "
              >
                Make tax reporting
                <br />

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
                  easier to control.
                </em>
              </h2>


              {/* Description */}

              <p
                className="
                  max-w-[555px]
                  mt-[20px]
                  mb-0
                  text-[#6c7973]
                  text-[13px]
                  leading-[1.75]
                "
              >
                See how Zyvoris transforms complex fund and asset data into
                calculated, validated, and traceable tax reporting outputs —
                without losing visibility into how the numbers were produced.
              </p>


              {/* CTA */}

              <div className="flex items-center gap-[10px] flex-wrap mt-[27px]">

              

                <a
                  href="#platform"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-[7px]
                    px-[16px]
                    py-[10px]
                    rounded-[9px]
                    bg-white
                    border border-[rgba(18,31,26,0.09)]
                    text-[#65726b]
                    text-[15px]
                    font-semibold
                    no-underline
                    transition-all
                    duration-200
                    hover:-translate-y-[2px]
                    hover:border-[#159f8d]/30
                  "
                >
                  See how it works

                  <ArrowDown size={12} />
                </a>

              </div>

            </div>


            {/* =================================================
                RIGHT — PRODUCT FLOW
            ================================================== */}

            <div className="relative">

              <div
                className="
                  relative
                  rounded-[19px]
                  bg-white
                  border border-[rgba(18,31,26,0.08)]
                  p-[18px]
                  shadow-[0_20px_50px_rgba(18,31,26,0.06)]
                "
              >

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div>

                    <span
                      className="
                        block
                        text-[12px]
                        font-bold
                        tracking-[0.14em]
                        text-[#98a19d]
                      "
                    >
                      ZYVORIS WORKFLOW
                    </span>

                    <strong
                      className="
                        block
                        mt-[3px]
                        text-[16px]
                        text-[#2d3933]
                      "
                    >
                      From data to reporting
                    </strong>

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-[5px]
                      px-[7px]
                      py-[5px]
                      rounded-full
                      bg-[#e9f8f3]
                      text-[#159a82]
                      text-[6px]
                      font-bold
                    "
                  >
                    <span className="w-[4px] h-[4px] rounded-full bg-[#159a82]" />
                    ACTIVE
                  </div>

                </div>


                {/* Flow */}

                <div className="relative mt-[22px]">

                  {/* Vertical line */}

                  <div
                    className="
                      absolute
                      left-[16px]
                      top-[22px]
                      bottom-[22px]
                      w-px
                      bg-gradient-to-b
                      from-[#cbded8]
                      via-[#159f8d]
                      to-[#cbded8]
                    "
                  />


                  <FlowStep
                    icon={<DatabaseIcon />}
                    label="FUND DATA"
                    text="Transactions, income & expenses"
                  />

                  <FlowStep
                    icon={<Sparkles size={13} />}
                    label="TAX ENGINE"
                    text="Classify, calculate & allocate"
                    active
                  />

                  <FlowStep
                    icon={<FileCheck2 size={13} />}
                    label="REPORTING"
                    text="Validated, traceable outputs"
                  />

                </div>


                {/* Footer */}

                <div
                  className="
                    mt-[14px]
                    pt-[12px]
                    border-t border-[rgba(18,31,26,0.07)]
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span className="text-[6px] font-bold tracking-[0.12em] text-[#9ba49f]">
                    CONTROLLED WORKFLOW
                  </span>

                  <span className="flex items-center gap-[4px] text-[12px] font-semibold text-[#159f8d]">
                    <ShieldCheck size={10} />
                    TRACEABLE
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              TRUST BAR
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              border-t
              border-[rgba(18,31,26,0.07)]
              bg-white/65
            "
          >

            <TrustItem
              icon={<ShieldCheck size={13} />}
              text="Deterministic calculations"
            />

            <TrustItem
              icon={<FileCheck2 size={13} />}
              text="Traceable reporting outputs"
            />

            <TrustItem
              icon={<LockKeyhole size={13} />}
              text="Controlled data processing"
              last
            />

          </div>

        </div>


        {/* Bottom statement */}

        <div className="flex justify-center mt-[20px]">

          <span
            className="
              text-[13px]
              text-[#929c97]
              flex
              items-center
              gap-[6px]
            "
          >
            <Check size={11} className="text-[#159f8d]" />

            One controlled workflow from source data to tax reporting.

          </span>

        </div>

      </div>

    </section>
  )
}


/* =============================================================
   FLOW STEP
============================================================= */

function FlowStep({
  icon,
  label,
  text,
  active = false,
}) {
  return (
    <div className="relative flex items-center gap-[11px] py-[8px]">

      <div
        className={`
          relative
          z-10
          w-[33px]
          h-[33px]
          shrink-0
          rounded-[10px]
          grid
          place-items-center
          border
          ${
            active
              ? `
                bg-[#e9f8f3]
                border-[#159f8d]/20
                text-[#159f8d]
              `
              : `
                bg-[#f5f7f5]
                border-[rgba(18,31,26,0.07)]
                text-[#7c8882]
              `
          }
        `}
      >
        {icon}
      </div>


      <div>

        <span
          className={`
            block
            text-[12px]
            font-bold
            tracking-[0.12em]
            ${
              active
                ? 'text-[#159f8d]'
                : 'text-[#89948e]'
            }
          `}
        >
          {label}
        </span>

        <span className="block mt-[2px] text-[13px] text-[#9aa39e]">
          {text}
        </span>

      </div>

    </div>
  )
}


/* =============================================================
   TRUST ITEM
============================================================= */

function TrustItem({
  icon,
  text,
  last = false,
}) {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        gap-[7px]
        py-[14px]
        text-[#7f8b85]
        text-[13px]
        font-semibold
        ${
          !last
            ? 'border-b sm:border-b-0 sm:border-r border-[rgba(18,31,26,0.07)]'
            : ''
        }
      `}
    >

      <span className="text-[#159f8d]">
        {icon}
      </span>

      {text}

    </div>
  )
}


/* =============================================================
   SMALL DATABASE ICON
============================================================= */

function DatabaseIcon() {
  return (
    <span
      className="
        relative
        w-[13px]
        h-[13px]
        rounded-[3px]
        border
        border-[#8f9c95]
        inline-block
      "
    >
      <span className="absolute left-[2px] right-[2px] top-[3px] h-[1px] rounded-full bg-[#8f9c95]" />
      <span className="absolute left-[2px] right-[2px] bottom-[3px] h-[1px] rounded-full bg-[#8f9c95]" />
    </span>
  )
}

