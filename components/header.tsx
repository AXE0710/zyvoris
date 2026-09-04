'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './theme-toggle'
import LanguageToggle from './language-toggle'
import { useLanguage } from './language-provider'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    {
      label: t('nav_platform', 'Platform'),
      href: '/platform',
    },
    {
      label: t('nav_use_cases', 'Use Cases'),
      href: '/use-cases',
    },
    {
      label: t('nav_technology', 'Technology'),
      href: '/technology',
    },
    {
      label: t('nav_company', 'Company'),
      href: '/company',
    },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 transition-all duration-200">
      <div className="mx-auto max-w-[1420px] px-4 pt-3.5 sm:pt-4 md:px-[4vw]">
        {/* Main Header Container with strong black border in Light Mode */}
        <div
          className="
            flex h-[72px] sm:h-[76px] items-center justify-between
            rounded-2xl
            border-2 border-slate-900 dark:border-slate-700
            bg-white/98 dark:bg-[#0e1628]/98
            px-4 sm:px-6 lg:px-7
            shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            transition-all duration-200
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center no-underline gap-2 group py-1"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative flex items-center">
              <Image
                src="/logo.png"
                alt="ZYVORIS"
                width={210}
                height={56}
                priority
                className="
                  h-[40px] sm:h-[45px] lg:h-[48px]
                  w-auto
                  object-contain
                  dark:brightness-0 dark:invert
                  transition-transform duration-200 group-hover:scale-[1.02]
                "
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  rounded-xl
                  px-3.5 py-2
                  text-[13.5px]
                  font-semibold
                  tracking-[-0.01em]
                  text-slate-800 dark:text-slate-200
                  no-underline
                  transition-all
                  duration-150
                  hover:bg-slate-900 hover:text-white
                  dark:hover:bg-slate-800 dark:hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls (Language Toggle + Theme Toggle + CTA) */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <LanguageToggle />
            <ThemeToggle />

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex items-center gap-2
                rounded-xl
                bg-blue-600 dark:bg-blue-600
                border-2 border-blue-700 dark:border-blue-500
                px-4.5 py-2
                text-[13px]
                font-bold
                tracking-[-0.01em]
                text-white
                no-underline
                shadow-xs
                transition-all
                duration-200
                hover:bg-blue-700 dark:hover:bg-blue-500
                hover:-translate-y-0.5
              "
            >
              <span>{t('nav_book_demo', 'Book a Demo')}</span>
              <span className="font-mono text-sm leading-none">→</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="
                flex items-center justify-center
                h-9 px-3
                rounded-xl
                border-2 border-slate-900 dark:border-slate-700
                bg-white dark:bg-slate-800
                text-slate-900 dark:text-slate-200
                font-mono text-[11px] font-bold uppercase
                transition-colors
                hover:bg-slate-900 hover:text-white
              "
            >
              {menuOpen ? t('menu_close', 'Close') : t('menu_open', 'Menu')}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div
            className="
              mt-2.5
              overflow-hidden
              rounded-2xl
              border-2 border-slate-900 dark:border-slate-700
              bg-white dark:bg-[#0e1628]
              p-3.5
              shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              backdrop-blur-xl
              transition-all
              lg:hidden
              animate-in fade-in slide-in-from-top-2 duration-200
            "
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex items-center justify-between
                    rounded-xl
                    px-4 py-3
                    text-[14px]
                    font-semibold
                    text-slate-900 dark:text-slate-200
                    no-underline
                    transition-colors
                    hover:bg-slate-900 hover:text-white
                    dark:hover:bg-slate-800
                  "
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-sm leading-none">→</span>
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t-2 border-slate-900 dark:border-slate-700 pt-3 flex flex-col gap-2.5">
              <LanguageToggle variant="full" className="w-full" />

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-center gap-2
                  rounded-xl
                  bg-blue-600 dark:bg-blue-600
                  border-2 border-blue-700 dark:border-blue-500
                  px-4 py-3.5
                  text-[14px]
                  font-bold
                  text-white
                  no-underline
                  transition-all
                  hover:bg-blue-700
                "
              >
                <span>{t('nav_book_demo', 'Book a Demo')}</span>
                <span className="font-mono text-sm leading-none">→</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
