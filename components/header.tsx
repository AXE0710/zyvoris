
'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navigation = [
  {
    label: 'Why ZYVORIS',
    href: '#problem',
  },
  {
    label: 'Platform',
    href: '#solutions',
  },
  {
    label: 'How It Works',
    href: '#workflow',
  },
  {
    label: 'Use Cases',
    href: '#use-cases',
  },
  {
    label: 'Technology',
    href: '#technology',
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-[1420px] px-[5vw] pt-4 max-[700px]:px-5">
        <div
          className="
            flex h-[68px] items-center
            justify-between
            rounded-[16px]
            border border-[#0b1533]/[0.08]
            bg-white/95
            px-5
            shadow-[0_8px_35px_rgba(15,35,70,0.06)]
            backdrop-blur-xl
            lg:px-6
          "
        >
          <a
            href="#top"
            className="flex items-center text-[#09132f] no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-[25px] font-bold tracking-[-0.055em]">
              zyvoris
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  rounded-[9px]
                  px-3.5
                  py-2.5
                  text-[13px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#09132f]/60
                  no-underline
                  transition-colors
                  duration-150
                  hover:bg-[#f4f7fb]
                  hover:text-[#09132f]
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="
              hidden
              items-center
              gap-2
              rounded-[9px]
              bg-[#09132f]
              px-4
              py-2.5
              text-[13px]
              font-semibold
              text-white
              no-underline
              transition-colors
              duration-150
              hover:bg-blue-600
              lg:flex
            "
          >
            Talk to ZYVORIS
            <ArrowRight size={14} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="
              grid
              h-[40px]
              w-[40px]
              place-items-center
              rounded-[10px]
              border
              border-[#0b1533]/[0.08]
              bg-[#f7f9fc]
              text-[#09132f]
              lg:hidden
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-[16px]
              border border-[#0b1533]/[0.08]
              bg-white
              p-2
              shadow-[0_15px_45px_rgba(15,35,70,0.08)]
              lg:hidden
            "
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-[10px]
                  px-4
                  py-3.5
                  text-[15px]
                  font-medium
                  text-[#09132f]/70
                  no-underline
                  hover:bg-[#f5f8fc]
                  hover:text-[#09132f]
                "
              >
                {item.label}
                <ArrowRight size={14} className="text-[#09132f]/30" />
              </a>
            ))}

            <div className="mt-1 border-t border-[#0b1533]/[0.07] pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[10px]
                  bg-[#09132f]
                  px-4
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  no-underline
                "
              >
                Talk to ZYVORIS
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}




