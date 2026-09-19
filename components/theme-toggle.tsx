'use client'

import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'
import { useLanguage } from './language-provider'

export default function ThemeToggle({
  className = '',
}: {
  className?: string
}) {
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl border-2 border-slate-900/20 dark:border-slate-700/40 bg-slate-100/50 dark:bg-slate-800/50 ${className}`}
        aria-hidden="true"
      />
    )
  }

  const isDark = theme === 'dark'
  const isGerman = language === 'de'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? isGerman
            ? 'Zu hellem Modus wechseln'
            : 'Switch to light mode'
          : isGerman
            ? 'Zu dunklem Modus wechseln'
            : 'Switch to dark mode'
      }
      title={
        isDark
          ? isGerman
            ? 'Heller Modus'
            : 'Switch to Light Mode'
          : isGerman
            ? 'Dunkler Modus'
            : 'Switch to Dark Mode'
      }
      className={`
        group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
        rounded-xl
        border-2 border-slate-900 dark:border-slate-700
        bg-white dark:bg-slate-800
        text-slate-800 dark:text-slate-100
        shadow-xs
        transition-all duration-200
        hover:border-blue-600 dark:hover:border-blue-400
        hover:bg-slate-100 dark:hover:bg-slate-700
        hover:shadow-sm
        active:scale-95
        ${className}
      `}
    >
      <div className="relative h-4.5 w-4.5 sm:h-5 sm:w-5 flex items-center justify-center">
        {/* Sun Icon (Visible in Dark Mode -> click to switch to Light) */}
        <Sun
          className={`
            h-full w-full
            text-amber-400
            transition-all duration-300
            ${isDark ? 'rotate-0 scale-100 opacity-100' : 'absolute rotate-90 scale-0 opacity-0'}
            group-hover:rotate-45
          `}
          strokeWidth={2.2}
        />
        {/* Moon Icon (Visible in Light Mode -> click to switch to Dark) */}
        <Moon
          className={`
            h-full w-full
            text-slate-800 dark:text-slate-100
            transition-all duration-300
            ${!isDark ? 'rotate-0 scale-100 opacity-100' : 'absolute -rotate-90 scale-0 opacity-0'}
            group-hover:-rotate-12
          `}
          strokeWidth={2.2}
        />
      </div>
    </button>
  )
}
