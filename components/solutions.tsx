import React from 'react';
import {
  Calculator,
  FileCheck2,
  GitBranch,
  Layers3,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const MODULES_DATA = [
  [
    '01',
    'Data Intake',
    'Bring together NAV, transactions, income, expenses, distributions, and asset data in one structured layer.',
    Calculator,
  ],
  [
    '02',
    'Tax Calculation',
    'Apply configurable tax rules to calculate taxable income, deductions, gains, and fund-level obligations.',
    GitBranch,
  ],
  [
    '03',
    'Allocation Engine',
    'Automatically distribute calculated tax amounts across funds, share classes, investors, and eligible units.',
    Layers3,
  ],
  [
    '04',
    'Reporting & Audit',
    'Generate structured tax outputs with every calculation traceable back to its underlying source data.',
    FileCheck2,
  ],
];

const STATS_DATA = [
  ['01', 'Unified tax engine', 'One workflow from source data to reporting'],
  ['100%', 'Traceable outputs', 'Every result linked to its calculation path'],
  ['24/7', 'Automated processing', 'Consistent rules applied at scale'],
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative py-[130px] px-[5vw] bg-[#f7f8f5] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute w-[720px] h-[720px] -right-[300px] top-[40px] rounded-full bg-[radial-gradient(circle,rgba(18,170,145,0.07)_0%,transparent_68%)] pointer-events-none" />

      <div className="absolute w-[500px] h-[500px] -left-[250px] bottom-[0] rounded-full bg-[radial-gradient(circle,rgba(80,105,220,0.045)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.72fr] gap-8 lg:gap-[120px] items-end mb-[72px]">

          <div>
           
         

            <h2 className="mt-[19px] font-sans text-4xl lg:text-[70px] leading-[0.96] tracking-[-0.065em] text-[#121a16] font-bold">
              From financial data
              <br />
              to{' '}
              <em className="not-italic bg-gradient-to-r from-[#079c83] via-[#398fc7] to-[#695cda] bg-clip-text text-transparent">
                tax-ready output.
              </em>
            </h2>
          </div>

          <div className="pb-[4px]">
            <p className="m-0 text-[#69766f] text-[15px] leading-[1.8] max-w-[510px]">
              Zyvoris brings the complete tax reporting workflow into one
              controlled engine — from raw fund data and calculations to
              allocation, validation, and final reporting.
            </p>

            <div className="flex items-center gap-2 mt-6 text-[#7d8883] text-[14px] font-bold tracking-[0.08em]">
              <ShieldCheck size={14} color="#159f8d" />
              CONTROLLED · TRACEABLE · REPORTING-READY
            </div>
          </div>
        </div>

        {/* =====================================================
            PROCESS / MODULE GRID
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]">

          {MODULES_DATA.map(
            ([num, title, text, Icon], i) => (
              <ModuleCard
                key={num}
                num={num}
                title={title}
                text={text}
                Icon={Icon}
                featured={i === 0}
              />
            )
          )}

        </div>

        {/* =====================================================
            FLOW LINE
        ====================================================== */}
        <div className="hidden lg:flex items-center justify-center gap-3 mt-[24px] mb-[18px]">
          <span className="text-[13px] font-bold tracking-[0.12em] text-[#99a29d]">
            SOURCE DATA
          </span>

          <div className="w-[80px] h-px bg-[rgba(18,31,26,0.12)]" />

          <ArrowRight size={12} className="text-[#159f8d]" />

          <div className="w-[80px] h-px bg-[rgba(18,31,26,0.12)]" />

          <span className="text-[13px] font-bold tracking-[0.12em] text-[#99a29d]">
            TAX LOGIC
          </span>

          <div className="w-[80px] h-px bg-[rgba(18,31,26,0.12)]" />

          <ArrowRight size={12} className="text-[#159f8d]" />

          <div className="w-[80px] h-px bg-[rgba(18,31,26,0.12)]" />

          <span className="text-[13px] font-bold tracking-[0.12em] text-[#99a29d]">
            REPORTING
          </span>
        </div>

        {/* =====================================================
            PLATFORM BAR
        ====================================================== */}
        <div className="mt-[18px] grid grid-cols-1 md:grid-cols-3 border border-[rgba(18,31,26,0.08)] rounded-[15px] overflow-hidden bg-white">

          {STATS_DATA.map(([value, label, description], i) => (
            <StatItem
              key={label}
              value={value}
              label={label}
              description={description}
              isLast={i === STATS_DATA.length - 1}
            />
          ))}

        </div>

      </div>
    </section>
  );
}


/* =============================================================
   MODULE CARD
============================================================= */


function ModuleCard({
  num,
  title,
  text,
  Icon,
  featured,
}) {
  return (
    <article
      className={`
        group relative min-h-[340px]
        rounded-[24px]
        border
        overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-2
        ${
          featured
            ? `
              bg-gradient-to-br
              from-[#edf9f5]
              via-white
              to-[#f3f5ff]
              border-[#159f8d]/20
              shadow-[0_18px_55px_rgba(21,159,141,0.08)]
            `
            : `
              bg-white
              border-[rgba(18,31,26,0.08)]
              shadow-[0_15px_45px_rgba(18,31,26,0.035)]
            `
        }
      `}
    >

      {/* Soft hover glow */}
      <div
        className="
          absolute
          -right-[80px]
          -top-[80px]
          w-[190px]
          h-[190px]
          rounded-full
          bg-[#159f8d]/[0.045]
          blur-[2px]
          transition-all duration-500
          group-hover:scale-[1.35]
          group-hover:bg-[#159f8d]/[0.08]
        "
      />

      {/* Large background number */}
      <span
        className={`
          absolute
          right-[-5px]
          top-[-22px]
          font-sans
          text-[130px]
          font-extrabold
          tracking-[-0.1em]
          leading-none
          select-none
          pointer-events-none
          transition-all duration-500
          group-hover:translate-x-[-6px]
          ${
            featured
              ? 'text-[#159f8d]/[0.065]'
              : 'text-[#18221e]/[0.035]'
          }
        `}
      >
        {num}
      </span>

      {/* Main content */}
      <div className="relative z-10 h-full p-[28px] flex flex-col">

        {/* Top row */}
        <div className="flex items-start justify-between">

          {/* Step indicator */}
          <div>
            <span
              className={`
                inline-flex
                items-center
                gap-[7px]
                text-[13px]
                font-bold
                tracking-[0.16em]
                ${
                  featured
                    ? 'text-[#159f8d]'
                    : 'text-[#929c97]'
                }
              `}
            >
              <span
                className={`
                  w-[5px]
                  h-[5px]
                  rounded-full
                  ${
                    featured
                      ? 'bg-[#159f8d]'
                      : 'bg-[#b8c0bc]'
                  }
                `}
              />

              STEP {num}
            </span>
          </div>

          {/* Icon */}
          <div
            className={`
              relative
              w-[48px]
              h-[48px]
              rounded-[15px]
              grid
              place-items-center
              border
              transition-all
              duration-500
              group-hover:rotate-[-4deg]
              group-hover:scale-110
              ${
                featured
                  ? `
                    bg-white
                    border-[#159f8d]/15
                    text-[#159f8d]
                    shadow-[0_8px_25px_rgba(21,159,141,0.10)]
                  `
                  : `
                    bg-[#f6f8f6]
                    border-[rgba(18,31,26,0.07)]
                    text-[#69766f]
                    group-hover:bg-[#eef7f4]
                    group-hover:text-[#159f8d]
                  `
              }
            `}
          >
            <Icon
              size={20}
              strokeWidth={1.7}
            />
          </div>

        </div>

        {/* Divider */}
        <div
          className={`
            mt-[30px]
            w-full
            h-px
            ${
              featured
                ? 'bg-[#159f8d]/10'
                : 'bg-[rgba(18,31,26,0.07)]'
            }
          `}
        />

        {/* Text */}
        <div className="mt-[28px]">

          <h3
            className="
              m-0
              font-sans
              text-[23px]
              leading-[1.08]
              tracking-[-0.055em]
              text-[#18221e]
              font-semibold
              max-w-[250px]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-[13px]
              mb-0
              max-w-[285px]
              text-[#748079]
              text-[16px]
              leading-[1.75]
            "
          >
            {text}
          </p>

        </div>

        {/* Bottom */}
        <div className="mt-auto pt-[28px] flex items-end justify-between">

          <div>
            <span
              className="
                block
                text-[12px]
                font-bold
                tracking-[0.14em]
                text-[#a0aaa5]
              "
            >
              {featured
                ? 'CORE INPUT'
                : 'ENGINE LAYER'}
            </span>

            <span
              className="
                block
                mt-[4px]
                text-[13px]
                text-[#aab2ae]
              "
            >
              Zyvoris platform
            </span>
          </div>

          {/* Arrow */}
          <span
            className={`
              w-[36px]
              h-[36px]
              rounded-full
              grid
              place-items-center
              transition-all
              duration-500
              group-hover:translate-x-1
              ${
                featured
                  ? `
                    bg-[#e2f5f0]
                    text-[#159f8d]
                    group-hover:bg-[#159f8d]
                    group-hover:text-white
                  `
                  : `
                    bg-[#f3f5f3]
                    text-[#748079]
                    group-hover:bg-[#e8f5f1]
                    group-hover:text-[#159f8d]
                  `
              }
            `}
          >
            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </span>

        </div>

      </div>

      {/* Bottom accent */}
      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[2px]
          transition-all duration-500
          ${
            featured
              ? 'w-full bg-[#159f8d]/50'
              : 'w-0 bg-[#159f8d]/40 group-hover:w-full'
          }
        `}
      />

    </article>
  )
}



/* =============================================================
   STAT ITEM
============================================================= */

function StatItem({
  value,
  label,
  description,
  isLast,
}) {
  return (
    <div
      className={`
        flex items-center gap-4
        p-5 md:px-[25px]
        ${
          !isLast
            ? 'border-b md:border-b-0 md:border-r border-[rgba(18,31,26,0.07)]'
            : ''
        }
      `}
    >

      <strong className="font-sans text-[22px] tracking-[-0.04em] text-[#159f8d] font-bold">
        {value}
      </strong>

      <div>
        <span className="block text-[#39453f] text-[15px] font-bold">
          {label}
        </span>

        <span className="block mt-[3px] text-[#8a948f] text-[14px]">
          {description}
        </span>
      </div>

    </div>
  );
}