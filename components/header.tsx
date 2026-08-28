'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = [
    {
      label: 'Platform',
      href: '#solutions',
    },
    {
      label: 'Workflow',
      href: '#problem',
    },
    {
      label: 'Structures',
      href: '#structures',
    },
    {
      label: 'Verification',
      href: '#verification',
    },
  ]

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-[rgba(18,31,26,0.07)] shadow-[0_8px_30px_rgba(18,31,26,0.035)]'
            : 'bg-transparent'
        }
      `}
    >

      <div
        className="
          max-w-[1420px]
          mx-auto
          px-[5vw]
          max-[700px]:px-[20px]
          h-[76px]
          flex
          items-center
          justify-between
        "
      >

        {/* =================================================
            LOGO
        ================================================== */}

        <a
          href="#"
          className="
            group
            flex
            items-center
            gap-[10px]
            no-underline
          "
        >

          


          <div className="leading-none">

            <span
              className="
                block
                text-[24px]
                font-bold
                tracking-[-0.045em]
                text-[#17221d]
              "
            >
              zyvoris
            </span>

          
          </div>

        </a>


        {/* =================================================
            DESKTOP NAV
        ================================================== */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-[5px]
            absolute
            left-1/2
            -translate-x-1/2
          "
        >

          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                flex
                items-center
                gap-[5px]
                px-[13px]
                py-[8px]
                rounded-[8px]
                text-[#69766f]
                text-[20px]
                font-semibold
                no-underline
                transition-all
                duration-200
                hover:bg-[#f3f7f5]
                hover:text-[#17221d]
              "
            >
              {item.label}

              {item.label === 'Platform' && (
                <ChevronDown
                  size={11}
                  className="
                    text-[#a0aaa5]
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
              )}
            </a>
          ))}

        </nav>


   


        {/* =================================================
            MOBILE BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="
            lg:hidden
            w-[40px]
            h-[40px]
            rounded-[10px]
            bg-white
            border border-[rgba(18,31,26,0.08)]
            grid
            place-items-center
            text-[#26322c]
          "
        >
          {menuOpen ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? 'max-h-[420px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >

        <div
          className="
            mx-[20px]
            mb-[15px]
            rounded-[16px]
            border border-[rgba(18,31,26,0.08)]
            bg-white/95
            backdrop-blur-xl
            p-[9px]
            shadow-[0_20px_50px_rgba(18,31,26,0.08)]
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
                px-[13px]
                py-[13px]
                rounded-[9px]
                text-[#536159]
                text-[16px]
                font-semibold
                no-underline
                hover:bg-[#f4f7f5]
              "
            >
              {item.label}

              <ArrowRight
                size={12}
                className="text-[#9ba49f]"
              />
            </a>
          ))}


       
        </div>

      </div>

    </header>
  )
}