'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from './theme-provider'
import { useLanguage } from './language-provider'

export default function ThemeToggle({
  className = '',
}: {
  className?: string
}) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`h-9 w-14 rounded-xl border border-slate-900/40 bg-slate-100/50 dark:border-slate-700 dark:bg-slate-800/50 ${className}`}
        aria-hidden="true"
      />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to Light' : 'Switch to Dark'}
      className={`group relative flex h-9 items-center gap-1.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 shadow-xs transition-all duration-150 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 ${className}`}
    >
      <span className="font-mono text-[10px] opacity-70">THEME</span>
      <span className="font-bold text-blue-600 dark:text-blue-400">
        {isDark ? t('theme_dark', 'Dark') : t('theme_light', 'Light')}
      </span>
    </button>
  )
}
