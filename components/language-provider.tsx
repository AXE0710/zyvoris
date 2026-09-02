'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: keyof typeof translations['en'], defaultText?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  defaultLanguage = 'en',
  storageKey = 'zyvoris-language',
}: {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(storageKey) as Language | null
      if (savedLang === 'en' || savedLang === 'de') {
        setLanguageState(savedLang)
      }
    } catch {
      // ignore
    }
    setMounted(true)
  }, [storageKey])

  const setLanguage = (newLang: Language) => {
    try {
      localStorage.setItem(storageKey, newLang)
    } catch {
      // ignore
    }
    setLanguageState(newLang)
  }

  const toggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'de' : 'en'
    setLanguage(nextLang)
  }

  const t = (key: keyof typeof translations['en'], defaultText?: string): string => {
    const langDict = translations[language] || translations.en
    return langDict[key] || defaultText || key
  }

  return (
    <LanguageContext.Provider
      value={{
        language: mounted ? language : 'en',
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
