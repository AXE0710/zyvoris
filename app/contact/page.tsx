'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'

export default function ContactPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [submitted, setSubmitted] = useState(false)
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPlayed(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const company = String(formData.get('company') ?? '')
    const role = String(formData.get('role') ?? '')
    const jurisdiction = String(formData.get('jurisdiction') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = [
      `Name: ${name}`,
      `Work Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Primary Jurisdiction: ${jurisdiction}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:info@zyvoris.ai?subject=${encodeURIComponent('ZYVORIS Demo Request')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const fieldClassName = 'mt-2 h-12 w-full rounded-xl border-2 border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900'
  const labelClassName = 'font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-400'

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f0f4f9] px-4 pb-20 pt-28 text-foreground transition-colors duration-200 dark:bg-[#080d1a] sm:px-6 sm:pt-32 lg:px-[5vw] lg:pt-36">
      {/* Ambient Blue Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)] blur-3xl" />
      
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15 bg-[linear-gradient(rgba(30,58,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative z-10 mx-auto max-w-355">
        <header className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1.5 backdrop-blur-md dark:border-blue-900/60 dark:bg-blue-950/40">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span className="font-mono text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300">
              {isGerman ? 'KONTAKT' : 'CONTACT'}
            </span>
          </div>

          <h1 className="text-3xl font-normal leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {isGerman ? (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Sprechen wir{' '}
                </span>
                über Ihren{' '}
                <span className="relative inline-block whitespace-nowrap px-1">
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    Steuer-Workflow
                  </span>
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-blue-500/80 dark:text-blue-400 overflow-visible"
                    viewBox="0 0 300 20"
                    fill="none"
                  >
                    <path
                      d="M3 14.5C65 5.5 170 -1.5 295 11.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className={animationPlayed ? 'ink-path' : ''}
                      style={{ '--len': 320, '--dur': '1.3s', '--delay': '0.3s' } as React.CSSProperties}
                    />
                  </svg>
                </span>
              </>
            ) : (
              <>
                <span className="font-serif italic font-normal text-slate-900 dark:text-slate-100">
                  Let&apos;s discuss{' '}
                </span>
                your{' '}
                <span className="relative inline-block whitespace-nowrap px-1">
                  <span className="relative z-10 font-serif italic text-blue-700 dark:text-blue-400">
                    tax workflow
                  </span>
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-blue-500/80 dark:text-blue-400 overflow-visible"
                    viewBox="0 0 300 20"
                    fill="none"
                  >
                    <path
                      d="M3 14.5C65 5.5 170 -1.5 295 11.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className={animationPlayed ? 'ink-path' : ''}
                      style={{ '--len': 320, '--dur': '1.3s', '--delay': '0.3s' } as React.CSSProperties}
                    />
                  </svg>
                </span>
              </>
            )}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'Erzählen Sie uns von Ihren Fondsstrukturen, Reporting-Anforderungen, Jurisdiktionen und Ihrem aktuellen Betriebsmodell.'
              : 'Tell us about your fund structures, reporting requirements, jurisdictions, and current operating model.'}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-12 max-w-4xl rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-[#0c152a] sm:mt-16 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label>
              <span className={labelClassName}>{isGerman ? 'Name' : 'Name'}</span>
              <input className={fieldClassName} name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              <span className={labelClassName}>{isGerman ? 'Geschäftliche E-Mail' : 'Work Email'}</span>
              <input className={fieldClassName} name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              <span className={labelClassName}>{isGerman ? 'Unternehmen' : 'Company'}</span>
              <input className={fieldClassName} name="company" type="text" required autoComplete="organization" />
            </label>
            <label>
              <span className={labelClassName}>{isGerman ? 'Rolle' : 'Role'}</span>
              <input className={fieldClassName} name="role" type="text" required autoComplete="organization-title" />
            </label>
            <label className="sm:col-span-2">
              <span className={labelClassName}>{isGerman ? 'Primäre Jurisdiktion' : 'Primary Jurisdiction'}</span>
              <select className={fieldClassName} name="jurisdiction" defaultValue="" required>
                <option value="" disabled>{isGerman ? 'Bitte auswählen' : 'Select one'}</option>
                <option>Switzerland</option>
                <option>Germany</option>
                <option>Austria</option>
                <option>United States</option>
                <option>Other</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className={labelClassName}>{isGerman ? 'Nachricht' : 'Message'}</span>
              <textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border-2 border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900" name="message" required />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
            <button type="submit" className="tap-press inline-flex h-12 items-center gap-2 rounded-xl bg-slate-950 px-7 font-semibold text-xs uppercase tracking-wider text-white shadow-md transition-all hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500">
              <span>{isGerman ? 'Demo anfragen' : 'Request a Demo'}</span>
              <span className="font-mono text-sm leading-none">→</span>
            </button>
            {submitted && (
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {isGerman ? 'Ihre E-Mail-Anwendung wurde geöffnet.' : 'Your email app should now be open.'}
              </span>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}