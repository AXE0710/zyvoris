
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'

const navigation = [
  {
    label: 'Platform',
    href: '/product',
  },
  {
    label: 'Use Cases',
    href: '/use-cases',
  },
  {
    label: 'Technology',
    href: '/technology',
  },
  {
    label: 'Company',
    href: '/about',
  },
  {
    label: 'Compare',
    href: '/compare',
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const footer = document.getElementById('footer')

    if (footer) {
      e.preventDefault()
      footer.scrollIntoView({ behavior: 'smooth' })
    }

    setMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-[1420px] px-[4vw] pt-4 max-[700px]:px-4">
        {/* Main Header */}
        <div
          className="
            flex h-[70px] items-center justify-between
            rounded-[15px]
            border border-[#09132f]/[0.08]
            bg-white/[0.97]
            px-5
            shadow-[0_8px_35px_rgba(15,35,70,0.055)]
            backdrop-blur-xl
            lg:px-6
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              flex shrink-0 items-center
              no-underline
            "
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="ZYVORIS"
              width={190}
              height={52}
              priority
              className="
                h-[42px]
                w-auto
                object-contain
                max-[700px]:h-[36px]
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  rounded-[8px]
                  px-3.5 py-2.5
                  text-[13px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#09132f]/60
                  no-underline
                  transition-all
                  duration-150
                  hover:bg-[#f5f7fa]
                  hover:text-[#09132f]
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              href="#footer"
              onClick={scrollToFooter}
              className="
                group
                flex items-center gap-3
                rounded-[10px]
                bg-[#09132f]
                px-4 py-3
                text-[13px]
                font-semibold
                tracking-[-0.01em]
                text-white
                no-underline
                transition-all
                duration-200
                hover:bg-[#111d3d]
              "
            >
              <span>Talk to ZYVORIS</span>

              <ArrowRight
                size={14}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="
              grid h-10 w-10 place-items-center
              rounded-[9px]
              border border-[#09132f]/[0.08]
              bg-[#f7f9fc]
              text-[#09132f]
              transition-colors
              hover:bg-[#f1f4f8]
              lg:hidden
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-[15px]
              border border-[#09132f]/[0.08]
              bg-white
              p-2
              shadow-[0_15px_45px_rgba(15,35,70,0.08)]
              lg:hidden
            "
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-between
                  rounded-[9px]
                  px-4 py-3
                  text-[14px]
                  font-medium
                  text-[#09132f]/70
                  no-underline
                  transition-colors
                  hover:bg-[#f5f8fc]
                  hover:text-[#09132f]
                "
              >
                {item.label}

                <ArrowRight
                  size={14}
                  className="text-[#09132f]/30"
                />
              </Link>
            ))}

            <div className="mt-1 border-t border-[#09132f]/[0.07] pt-2">
              <Link
                href="#footer"
                onClick={scrollToFooter}
                className="
                  flex items-center justify-between
                  rounded-[9px]
                  bg-[#09132f]
                  px-4 py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  no-underline
                "
              >
                Talk to ZYVORIS

                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
