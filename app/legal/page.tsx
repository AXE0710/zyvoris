'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Scale, ArrowLeft, Mail } from 'lucide-react'

export default function LegalNoticePage() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
        
        {/* Navigation & Legal Switcher Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors no-underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{isGerman ? 'ZURÜCK ZUR STARTSEITE' : 'BACK TO HOME'}</span>
          </Link>

          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Link
              href="/privacy"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 no-underline transition-colors"
            >
              {isGerman ? 'Datenschutz' : 'Privacy Policy'}
            </Link>
            <Link
              href="/terms"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 no-underline transition-colors"
            >
              {isGerman ? 'Nutzung' : 'Terms of Use'}
            </Link>
            <Link
              href="/legal"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white no-underline shadow-xs"
            >
              {isGerman ? 'Impressum' : 'Legal Notice'}
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="mt-10 sm:mt-12 space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {isGerman ? 'IMPRESSUM & RECHTLICHE HINWEISE' : 'LEGAL NOTICE & IMPRESSUM'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {isGerman ? 'Rechtliche Hinweise' : 'Legal Notice'}
          </h1>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
            <span>
              {isGerman ? 'Zuletzt aktualisiert: 21. September 2026' : 'Last updated: 21 September 2026'}
            </span>
          </div>
        </header>

        {/* Content Body */}
        {isGerman ? (
          <div className="mt-10 space-y-10 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            
            {/* Betreiber der Website */}
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Betreiber der Website
              </h2>
              <p>
                Diese Website wird unter der Bezeichnung <strong>ZYVORIS</strong> betrieben.
              </p>
              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 sm:p-5 dark:border-blue-900/60 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                ZYVORIS befindet sich derzeit als Projekt in der Entwicklungsphase. Die vorgesehene luxemburgische Gesellschaft wurde noch nicht gegründet. Nach Gründung der Gesellschaft werden diese rechtlichen Hinweise aktualisiert und um die rechtliche Firmierung, den eingetragenen Sitz, die Registrierungsdaten sowie weitere gesetzlich erforderliche Unternehmensangaben ergänzt.
              </div>
            </section>

            {/* Kontakt */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Kontakt
              </h2>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1">
                <p className="font-bold text-slate-950 dark:text-white m-0">ZYVORIS</p>
                <p className="m-0 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <a href="mailto:info@zyvoris.ai" className="hover:underline flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    <span>E-Mail: info@zyvoris.ai</span>
                  </a>
                </p>
              </div>
            </section>

            {/* Zweck der Website */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Zweck der Website
              </h2>
              <p>
                Diese Website stellt Informationen über ZYVORIS, seine Technologie, geplanten Produkte, Funktionalitäten, Anwendungsfälle und die Entwicklungs-Roadmap zur Verfügung.
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                Die auf dieser Website veröffentlichten Informationen dienen ausschließlich allgemeinen Informationszwecken und stellen keine Steuer-, Rechts-, Rechnungslegungs-, regulatorische, Anlage- oder Finanzberatung dar.
              </div>
            </section>

            {/* Geistiges Eigentum */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Geistiges Eigentum
              </h2>
              <p>
                Soweit nicht anders angegeben, sind die auf dieser Website bereitgestellten Inhalte, Markenbestandteile, Designelemente, Grafiken, Produktbeschreibungen und sonstigen geschützten Materialien Eigentum von ZYVORIS, an ZYVORIS lizenziert oder werden von ZYVORIS rechtmäßig genutzt.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Die unbefugte Vervielfältigung, Verbreitung oder kommerzielle Nutzung geschützter Inhalte ist untersagt, soweit sie nicht nach anwendbarem Recht zulässig ist.
              </p>
            </section>

            {/* Haftung */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Haftung
              </h2>
              <p>
                Obwohl angemessene Anstrengungen unternommen werden, um die auf dieser Website enthaltenen Informationen zutreffend und aktuell zu halten, übernimmt ZYVORIS keine Gewähr dafür, dass sämtliche Informationen vollständig, richtig oder aktuell sind.
              </p>
              <p>
                Die Nutzung der auf dieser Website bereitgestellten Informationen erfolgt nach eigenem Ermessen des Nutzers.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Diese rechtlichen Hinweise schließen keine Haftung aus und beschränken keine Haftung, soweit ein solcher Ausschluss oder eine solche Beschränkung gesetzlich unzulässig ist.
              </p>
            </section>

            {/* Externe Links */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Externe Links
              </h2>
              <p>
                Soweit diese Website Links zu externen Websites enthält, hat ZYVORIS keine Kontrolle über diese Websites und ist nicht für deren Inhalte, Verfügbarkeit, Sicherheit oder Datenschutzpraktiken verantwortlich.
              </p>
            </section>

            {/* Anwendbares Recht */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Anwendbares Recht
              </h2>
              <p>
                Vorbehaltlich zwingender gesetzlicher Bestimmungen unterliegen die Nutzung dieser Website und diese rechtlichen Hinweise dem Recht des Großherzogtums Luxemburg.
              </p>
            </section>
          </div>
        ) : (
          <div className="mt-10 space-y-10 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            
            {/* Website Operator */}
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Website Operator
              </h2>
              <p>
                This website is operated under the name: <strong>ZYVORIS</strong>
              </p>
              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 sm:p-5 dark:border-blue-900/60 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                ZYVORIS is currently a project in development. The intended Luxembourg legal entity has not yet been incorporated. Following incorporation, this Legal Notice will be updated to include the legal name, registered office, registration details and other legally required corporate information.
              </div>
            </section>

            {/* Contact */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Contact
              </h2>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1">
                <p className="font-bold text-slate-950 dark:text-white m-0">ZYVORIS</p>
                <p className="m-0 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <a href="mailto:info@zyvoris.ai" className="hover:underline flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    <span>Email: info@zyvoris.ai</span>
                  </a>
                </p>
              </div>
            </section>

            {/* Website Purpose */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Website Purpose
              </h2>
              <p>
                This website provides information about ZYVORIS, its technology, intended products, capabilities, use cases and development roadmap.
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                Information published on this website is provided for general informational purposes only and does not constitute tax, legal, accounting, regulatory, investment or financial advice.
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Intellectual Property
              </h2>
              <p>
                Unless otherwise indicated, the content, branding, design elements, graphics, product descriptions and other proprietary materials made available on this website are owned by, licensed to or used by ZYVORIS.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Unauthorised reproduction, distribution or commercial use of protected content is prohibited except where permitted by applicable law.
              </p>
            </section>

            {/* Liability */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Liability
              </h2>
              <p>
                While reasonable efforts are made to maintain accurate and current information, ZYVORIS does not guarantee that all information on this website is complete, accurate or up to date.
              </p>
              <p>
                Use of information provided on this website is at the user’s own discretion.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Nothing in this Legal Notice excludes liability that cannot lawfully be excluded or limited.
              </p>
            </section>

            {/* External Links */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                External Links
              </h2>
              <p>
                Where this website contains links to external websites, ZYVORIS does not control and is not responsible for the content, availability, security or privacy practices of those websites.
              </p>
            </section>

            {/* Applicable Law */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                Applicable Law
              </h2>
              <p>
                Subject to mandatory applicable law, the use of this website and this Legal Notice are governed by the laws of the Grand Duchy of Luxembourg.
              </p>
            </section>
          </div>
        )}

      </div>
    </div>
  )
}
