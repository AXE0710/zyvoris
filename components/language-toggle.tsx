'use client'

import React, { useEffect, useState } from 'react'
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
        className={`h-9 w-14 rounded-xl border border-slate-900/40 bg-slate-100/50 dark:border-slate-700 dark:bg-slate-800/50 ${className}`}
        aria-hidden="true"
      />
    )
  }

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-1 p-1 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'en'
              ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <span>EN</span>
          <span className="text-[10px] opacity-70">English</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('de')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'de'
              ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <span>DE</span>
          <span className="text-[10px] opacity-70">Deutsch</span>
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch language to German' : 'Sprache auf Englisch wechseln'}
      title={language === 'en' ? 'Switch to Deutsch' : 'Switch to English'}
      className={`group relative flex h-9 items-center gap-1 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-[11px] font-bold text-slate-900 dark:text-slate-200 shadow-xs transition-all duration-150 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 ${className}`}
    >
      <span className="font-mono text-[10px] opacity-70">LANG</span>
      <span className="font-mono font-extrabold text-blue-600 dark:text-blue-400">
        {language === 'en' ? 'EN' : 'DE'}
      </span>
    </button>
  )
}
