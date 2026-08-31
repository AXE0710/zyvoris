
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  GitBranch,
  Calculator,
  Database,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative overflow-hidden
        border-t border-[#09132f]/[0.08]
        bg-white
        text-[#0b1735]
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute -right-40 -top-40
          h-[500px] w-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(39,89,215,0.07),transparent_68%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-48 -left-48
          h-[450px] w-[450px]
          rounded-full
          bg-[radial-gradient(circle,rgba(39,89,215,0.045),transparent_68%)]
        "
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.18]
        "
        style={{
          backgroundImage:
            'linear-gradient(to right, #e9eef5 1px, transparent 1px), linear-gradient(to bottom, #e9eef5 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-[1420px] px-[5vw]">

        {/* =========================================================
            CTA SECTION
        ========================================================== */}

        <div className="py-20 lg:py-24">

          <div
            className="
              relative
              overflow-hidden
              rounded-[20px]
              border border-[#09132f]/[0.08]
              bg-[#f7f9fc]
              shadow-[0_12px_50px_rgba(15,35,70,0.055)]
            "
          >

            {/* Top accent */}
            <div
              className="
                absolute
                left-[18%] right-[18%] top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#2759d7]/60
                to-transparent
              "
            />

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* =====================================================
                  LEFT — CTA CONTENT
              ====================================================== */}

              <div className="p-8 sm:p-10 lg:p-14">

                {/* Eyebrow */}
                <div className="flex items-center gap-2.5">

                  <span className="h-px w-6 bg-[#2759d7]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#2759d7]
                    "
                  >
                    Next step
                  </span>

                </div>

                {/* Heading */}
                <h2
                  className="
                    mt-5
                    max-w-[680px]
                    text-[34px]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-[#0b1735]
                    sm:text-[42px]
                    lg:text-[52px]
                  "
                >
                  Build tax reporting on infrastructure designed for{' '}
                  <span className="text-[#2759d7]">
                    complexity.
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-[590px]
                    text-[14px]
                    leading-[1.75]
                    text-slate-500
                    sm:text-[15px]
                  "
                >
                  See how ZYVORIS connects financial data, fund structures,
                  tax logic, calculations, and reporting across complex
                  private-market workflows.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {/* Primary */}
                  <a
                    href="mailto:mubashar.khan@me.com?subject=ZYVORIS%20Demo%20Request"
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-[9px]
                      bg-[#09132f]
                      px-5
                      py-3.5
                      text-[13px]
                      font-semibold
                      text-white
                      no-underline
                      transition-all
                      duration-200
                      hover:bg-[#162448]
                    "
                  >
                    Book a Demo

                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </a>

                  {/* Secondary */}
                  <a
                    href="mailto:mubashar.khan@me.com?subject=Contact%20ZYVORIS"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-[9px]
                      border border-slate-300
                      bg-white
                      px-5
                      py-3.5
                      text-[13px]
                      font-semibold
                      text-[#26344d]
                      no-underline
                      transition-all
                      duration-200
                      hover:border-[#2759d7]/40
                      hover:text-[#2759d7]
                    "
                  >
                    <Mail size={14} />

                    Contact ZYVORIS
                  </a>

                </div>
              </div>

              {/* =====================================================
                  RIGHT — SYSTEM ARCHITECTURE
              ====================================================== */}

              <div
                className="
                  relative
                  border-t border-slate-200
                  bg-white
                  p-6
                  sm:p-8
                  lg:border-l
                  lg:border-t-0
                  lg:p-10
                "
              >

                {/* Grid */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.32]
                    bg-[linear-gradient(#edf1f6_1px,transparent_1px),linear-gradient(90deg,#edf1f6_1px,transparent_1px)]
                    bg-[size:32px_32px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    justify-center
                  "
                >

                  {/* SOURCE */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-[10px]
                      border border-slate-200
                      bg-white
                      p-3.5
                      shadow-[0_4px_15px_rgba(15,35,70,0.035)]
                    "
                  >

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-[7px]
                        border border-slate-200
                        bg-white
                        text-[#2759d7]
                      "
                    >
                      <Database size={16} />
                    </div>

                    <div>
                      <span
                        className="
                          block
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-slate-400
                        "
                      >
                        Source
                      </span>

                      <p className="mt-0.5 text-xs font-semibold text-slate-700">
                        Financial &amp; fund data
                      </p>
                    </div>

                  </div>

                  {/* Connector */}
                  <div className="ml-[21px] h-4 w-px bg-slate-200" />

                  {/* ZYVORIS CORE */}
                  <div
                    className="
                      rounded-[12px]
                      border border-[#cbd8f3]
                      bg-[#f3f6ff]
                      p-4
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-[7px]
                          bg-[#09132f]
                          text-white
                        "
                      >
                        <GitBranch size={16} />
                      </div>

                      <div>

                        <span
                          className="
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#2759d7]
                          "
                        >
                          ZYVORIS Core
                        </span>

                        <p className="mt-0.5 text-xs font-semibold text-[#17284b]">
                          Tax infrastructure engine
                        </p>

                      </div>

                    </div>

                    {/* Core functions */}
                    <div className="mt-3 grid grid-cols-2 gap-2">

                      {[
                        'Tax logic',
                        'Calculations',
                        'Allocations',
                        'Validation',
                      ].map((item) => (
                        <div
                          key={item}
                          className="
                            rounded-[6px]
                            border border-[#d9e1f2]
                            bg-white
                            px-3
                            py-1.5
                            text-center
                            text-[10px]
                            font-medium
                            text-slate-600
                          "
                        >
                          {item}
                        </div>
                      ))}

                    </div>

                  </div>

                  {/* Connector */}
                  <div className="ml-[21px] h-4 w-px bg-slate-200" />

                  {/* OUTPUT */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      rounded-[10px]
                      border border-slate-200
                      bg-white
                      p-3.5
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-[7px]
                          border border-[#cbd8f3]
                          bg-[#f3f6ff]
                          text-[#2759d7]
                        "
                      >
                        <Calculator size={16} />
                      </div>

                      <div>

                        <span
                          className="
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-slate-400
                          "
                        >
                          Output
                        </span>

                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                          Controlled tax reporting
                        </p>

                      </div>

                    </div>

                    {/* Verified */}
                    <div
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-full
                        border border-blue-200/80
                        bg-blue-50
                        px-2.5
                        py-1
                      "
                    >
                      <ShieldCheck
                        size={12}
                        className="text-[#2759d7]"
                      />

                      <span className="text-[10px] font-semibold text-[#2759d7]">
                        Verified
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div
              className="
                grid
                grid-cols-1
                border-t border-slate-200
                bg-white
                sm:grid-cols-3
                sm:divide-x
                sm:divide-slate-200
              "
            >
              <TrustItem text="Financial Data" />
              <TrustItem text="Fund Structures" />
              <TrustItem text="Tax Logic & Reporting" />
            </div>

          </div>
        </div>

        {/* =========================================================
            FOOTER NAVIGATION
        ========================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-t border-slate-200
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.8fr_1fr_1fr]
          "
        >

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>

            <Link
              href="/"
              className="
                inline-flex
                items-center
                no-underline
              "
            >
              <Image
                src="/logo.png"
                alt="ZYVORIS"
                width={190}
                height={52}
                className="
                  h-[42px]
                  w-auto
                  object-contain
                "
              />
            </Link>

            <p
              className="
                mt-4
                max-w-[310px]
                text-[12px]
                leading-[1.7]
                text-slate-500
              "
            >
              Tax reporting infrastructure engineered for complex
              private-market asset management.
            </p>

          </div>

          {/* =====================================================
              COMPANY
          ====================================================== */}

          <div>

            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-900
              "
            >
              Company
            </h3>

            <ul className="mt-4 space-y-3">

              <li>
                <Link
                  href="/"
                  className="
                    text-xs
                    font-medium
                    text-slate-500
                    no-underline
                    transition-colors
                    hover:text-[#2759d7]
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="mailto:mubashar.khan@me.com"
                  className="
                    text-xs
                    font-medium
                    text-slate-500
                    no-underline
                    transition-colors
                    hover:text-[#2759d7]
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>

            <h3
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-900
              "
            >
              Get in touch
            </h3>

            <a
              href="mailto:mubashar.khan@me.com"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-slate-500
                no-underline
                transition-colors
                hover:text-[#2759d7]
              "
            >
              <Mail size={13} />

              mubashar.khan@me.com
            </a>

          </div>

        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div
          className="
            flex
            flex-col
            gap-2
            border-t border-slate-200/80
            py-6
            text-xs
            text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} ZYVORIS. All rights reserved.
          </p>

          <p>
            Designed for complex private-market reporting workflows.
          </p>

        </div>

      </div>
    </footer>
  )
}

/* ===============================================================
   TRUST ITEM
================================================================ */

function TrustItem({ text }: { text: string }) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        py-3.5
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.14em]
        text-slate-500
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#2759d7]" />
      {text}
    </div>
  )
}

