'use client'

import React, { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from './language-provider'

export default function LanguageToggle({
  className = '',
  variant = 'compact',
}: {
  className?: string
  variant?: 'compact' | 'full'
}) {
  const { language, setLanguage, toggleLanguage } = useLanguage()
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

  if (variant === 'full') {
    return (
      <div
        className={`flex items-center gap-1 p-1 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 ${className}`}
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'en'
              ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Globe className="h-3.5 w-3.5" />
          <span>English (EN)</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('de')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'de'
              ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Globe className="h-3.5 w-3.5" />
          <span>Deutsch (DE)</span>
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={
        language === 'en'
          ? 'Switch language to German'
          : 'Sprache auf Englisch wechseln'
      }
      title={
        language === 'en'
          ? 'Switch to Deutsch (DE)'
          : 'Switch to English (EN)'
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
      <Globe
        className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-slate-800 dark:text-slate-100 transition-transform duration-300 group-hover:rotate-15"
        strokeWidth={2.2}
      />
      {/* Subtle indicator badge showing active locale */}
      <span
        className="
          absolute -bottom-1 -right-1
          flex h-4 min-w-[18px] items-center justify-center
          rounded-md
          border border-white dark:border-slate-900
          bg-blue-600 dark:bg-blue-500
          px-1
          text-[9px] font-mono font-black uppercase leading-none
          text-white
          shadow-xs
          transition-transform duration-200
          group-hover:scale-110
        "
      >
        {language}
      </span>
    </button>
  )
}
