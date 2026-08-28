import React from 'react'
import {
  Layers3,
  GitBranch,
  CircleDollarSign,
  Users,
  FileCheck2,
  Check,
} from 'lucide-react'

export default function ComplexStructuresSection() {
  return (
    <section
      id="structures"
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
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          w-[550px]
          h-[550px]
          -right-[300px]
          -top-[250px]
          rounded-full
          bg-[radial-gradient(circle,rgba(21,159,141,0.055),transparent_68%)]
          pointer-events-none
        "
      />

      <div className="max-w-[1180px] mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_0.65fr]
            gap-[35px]
            lg:gap-[90px]
            items-end
            mb-[48px]
          "
        >

          <div>

            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.15em]
                text-[#159f8d]
              "
            >
              COMPLEX STRUCTURES
            </span>

            <h2
              className="
                mt-[14px]
                mb-0
                font-sans
                text-[45px]
                sm:text-[54px]
                lg:text-[65px]
                leading-[0.95]
                tracking-[-0.065em]
                text-[#121a16]
                font-bold
              "
            >
              Built for the way
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
                funds are structured.
              </em>
            </h2>

          </div>


          <p
            className="
              m-0
              max-w-[430px]
              text-[#69766f]
              text-[14px]
              leading-[1.75]
              lg:pb-[4px]
            "
          >
            Keep fund-level data, share classes, units, and investor
            allocations connected throughout the tax reporting process.
          </p>

        </div>


        {/* =====================================================
            STRUCTURE DIAGRAM
        ====================================================== */}

        <div
          className="
            relative
            rounded-[22px]
            border border-[rgba(18,31,26,0.09)]
            bg-[#f8faf8]
            shadow-[0_25px_70px_rgba(18,31,26,0.055)]
            overflow-hidden
          "
        >

          {/* Top label */}

          <div
            className="
              flex
              items-center
              justify-between
              px-[25px]
              py-[15px]
              border-b border-[rgba(18,31,26,0.07)]
              bg-white/70
            "
          >

            <div>

              <span
                className="
                  block
                  text-[8px]
                  font-bold
                  tracking-[0.14em]
                  text-[#929c97]
                "
              >
                FUND STRUCTURE
              </span>

              <span
                className="
                  block
                  mt-[3px]
                  text-[10px]
                  text-[#7d8983]
                "
              >
                Connected calculation hierarchy
              </span>

            </div>


            <div
              className="
                flex
                items-center
                gap-[6px]
                text-[8px]
                font-semibold
                text-[#159f8d]
              "
            >
              <Check size={12} />
              STRUCTURE-AWARE
            </div>

          </div>


          {/* =================================================
              DIAGRAM AREA
          ================================================== */}

          <div
            className="
              relative
              px-[45px]
              py-[48px]
              max-[700px]:px-[20px]
              max-[700px]:py-[35px]
            "
          >

            {/* =================================================
                FUND
            ================================================== */}

            <div className="flex justify-center">

              <div
                className="
                  w-[300px]
                  max-[700px]:w-full
                  rounded-[18px]
                  bg-white
                  border border-[#159f8d]/20
                  shadow-[0_15px_40px_rgba(18,31,26,0.075)]
                  px-[23px]
                  py-[19px]
                "
              >

                <div className="flex items-center gap-[13px]">

                  <div
                    className="
                      w-[43px]
                      h-[43px]
                      rounded-[12px]
                      bg-[#e9f8f3]
                      grid
                      place-items-center
                      text-[#159f8d]
                      shrink-0
                    "
                  >
                    <Layers3 size={21} />
                  </div>


                  <div>

                    <span
                      className="
                        block
                        text-[8px]
                        font-bold
                        tracking-[0.13em]
                        text-[#159f8d]
                      "
                    >
                      ROOT LEVEL
                    </span>

                    <h3
                      className="
                        mt-[3px]
                        mb-0
                        text-[20px]
                        font-semibold
                        tracking-[-0.045em]
                        text-[#25312b]
                      "
                    >
                      Fund structure
                    </h3>

                  </div>

                </div>


                <p
                  className="
                    mt-[12px]
                    mb-0
                    text-[11px]
                    leading-[1.6]
                    text-[#7c8782]
                  "
                >
                  The central layer where financial data enters the
                  reporting calculation.
                </p>

              </div>

            </div>


            {/* =================================================
                MAIN CONNECTOR
            ================================================== */}

            <div
              className="
                relative
                h-[55px]
                max-[700px]:h-[40px]
              "
            >

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  bottom-0
                  w-px
                  bg-[#cfdad5]
                "
              />

              <div
                className="
                  absolute
                  left-[16.66%]
                  right-[16.66%]
                  bottom-0
                  h-px
                  bg-[#cfdad5]
                "
              />

            </div>


            {/* =================================================
                SHARE CLASSES
            ================================================== */}

            <div
              className="
                grid
                grid-cols-3
                max-[700px]:grid-cols-1
                gap-[13px]
                relative
              "
            >

              <ClassCard
                icon={<GitBranch size={18} />}
                label="CLASS A"
                title="Share class"
                description="Separate economics and tax allocation."
              />

              <ClassCard
                icon={<CircleDollarSign size={18} />}
                label="CLASS B"
                title="Share class"
                description="Independent calculation and allocation."
                featured
              />

              <ClassCard
                icon={<Users size={18} />}
                label="CLASS C"
                title="Share class"
                description="Connected to the same reporting model."
              />

            </div>


            {/* =================================================
                LOWER CONNECTOR
            ================================================== */}

            <div
              className="
                relative
                h-[50px]
                max-[700px]:hidden
              "
            >

              <div
                className="
                  absolute
                  left-[16.66%]
                  right-[16.66%]
                  top-0
                  h-px
                  bg-[#cfdad5]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  bottom-0
                  w-px
                  bg-[#cfdad5]
                "
              />

            </div>


            {/* =================================================
                TAX OUTPUT
            ================================================== */}

            <div className="flex justify-center">

              <div
                className="
                  flex
                  items-center
                  gap-[12px]
                  px-[21px]
                  py-[13px]
                  rounded-[13px]
                  bg-white
                  border border-[rgba(18,31,26,0.09)]
                  shadow-[0_12px_30px_rgba(18,31,26,0.055)]
                "
              >

                <div
                  className="
                    w-[34px]
                    h-[34px]
                    rounded-[9px]
                    bg-[#eaf8f3]
                    grid
                    place-items-center
                    text-[#159f8d]
                  "
                >
                  <FileCheck2 size={17} />
                </div>


                <div>

                  <span
                    className="
                      block
                      text-[8px]
                      font-bold
                      tracking-[0.12em]
                      text-[#159f8d]
                    "
                  >
                    FINAL OUTPUT
                  </span>

                  <strong
                    className="
                      block
                      mt-[2px]
                      text-[16px]
                      font-semibold
                      tracking-[-0.035em]
                      text-[#28342e]
                    "
                  >
                    Connected tax reporting
                  </strong>

                </div>


                <Check
                  size={16}
                  className="text-[#159f8d]"
                />

              </div>

            </div>

          </div>


          {/* =================================================
              BOTTOM INFORMATION
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              border-t border-[rgba(18,31,26,0.07)]
              bg-white/65
            "
          >

            <InfoBlock
              title="Fund level"
              text="Source data remains connected."
            />

            <InfoBlock
              title="Share classes"
              text="Different structures stay separate."
            />

            <InfoBlock
              title="Tax output"
              text="Results remain traceable."
              last
            />

          </div>

        </div>


        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-[7px]
            mt-[22px]
            text-[10px]
            font-semibold
            text-[#7e8983]
          "
        >

          <Check
            size={13}
            className="text-[#159f8d]"
          />

          Complex fund structures. One connected reporting model.

        </div>

      </div>

    </section>
  )
}


/* =============================================================
   CLASS CARD
============================================================= */

function ClassCard({
  icon,
  label,
  title,
  description,
  featured = false,
}) {
  return (
    <div
      className={`
        relative
        rounded-[15px]
        border
        p-[18px]
        min-h-[155px]
        ${
          featured
            ? `
              bg-white
              border-[#159f8d]/20
              shadow-[0_15px_35px_rgba(18,31,26,0.065)]
            `
            : `
              bg-white/75
              border-[rgba(18,31,26,0.08)]
            `
        }
      `}
    >

      {featured && (
        <div
          className="
            absolute
            top-0
            left-[20px]
            right-[20px]
            h-[2px]
            rounded-full
            bg-[#159f8d]
          "
        />
      )}


      <div className="flex items-center justify-between">

        <div
          className="
            w-[37px]
            h-[37px]
            rounded-[10px]
            bg-[#f0f6f3]
            grid
            place-items-center
            text-[#159f8d]
          "
        >
          {icon}
        </div>


        <span
          className="
            text-[8px]
            font-bold
            tracking-[0.12em]
            text-[#9aa39e]
          "
        >
          {label}
        </span>

      </div>


      <h3
        className="
          mt-[17px]
          mb-0
          text-[18px]
          font-semibold
          tracking-[-0.04em]
          text-[#2c3832]
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-[6px]
          mb-0
          text-[11px]
          leading-[1.55]
          text-[#7c8782]
        "
      >
        {description}
      </p>

    </div>
  )
}


/* =============================================================
   INFO BLOCK
============================================================= */

function InfoBlock({
  title,
  text,
  last = false,
}) {
  return (
    <div
      className={`
        px-[21px]
        py-[15px]
        ${
          !last
            ? 'border-b md:border-b-0 md:border-r border-[rgba(18,31,26,0.07)]'
            : ''
        }
      `}
    >

      <strong
        className="
          block
          text-[9px]
          font-bold
          text-[#536159]
        "
      >
        {title}
      </strong>

      <span
        className="
          block
          mt-[3px]
          text-[9px]
          text-[#929c97]
        "
      >
        {text}
      </span>

    </div>
  )
}