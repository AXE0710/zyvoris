'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

export default function ContactPage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'
  const [submitted, setSubmitted] = useState(false)

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

  const fieldClassName = 'mt-2 h-12 w-full rounded-xl border-2 border-slate-900 bg-white px-4 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-500'
  const labelClassName = 'font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-400'

  return (
    <main className="relative min-h-screen bg-[#f0f4f9] px-4 pb-20 pt-28 text-foreground transition-colors duration-200 dark:bg-[#080d1a] sm:px-6 sm:pt-32 lg:px-[5vw] lg:pt-36">
      <div className="relative mx-auto max-w-355">
        <header className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-400">
            [ {isGerman ? 'KONTAKT' : 'CONTACT'} ]
          </div>
          <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {isGerman ? 'Sprechen wir über Ihren Steuer-Workflow.' : "Let's discuss your tax workflow."}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {isGerman
              ? 'Erzählen Sie uns von Ihren Fondsstrukturen, Reporting-Anforderungen, Jurisdiktionen und Ihrem aktuellen Betriebsmodell.'
              : 'Tell us about your fund structures, reporting requirements, jurisdictions, and current operating model.'}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-12 max-w-4xl rounded-3xl border-2 border-slate-900 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:mt-16 sm:p-8 lg:p-10">
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
              <textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-500" name="message" required />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t-2 border-slate-900 pt-6 dark:border-slate-800">
            <button type="submit" className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-950 px-6 font-mono text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500">
              <span>{isGerman ? 'Demo anfragen' : 'Request a Demo'}</span>
              <span>→</span>
            </button>
            {submitted && (
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {isGerman ? 'Ihre E-Mail-Anwendung wurde geöffnet.' : 'Your email app should now be open.'}
              </span>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}