'use client'

import React from 'react'
import { useLanguage } from './language-provider'

export default function SecurityPrinciples() {
  const { language } = useLanguage()
  const isGerman = language === 'de'

  const principles = [
    {
      num: '01',
      title: isGerman ? 'Kontrollierter Zugriff' : 'Controlled Access',
      desc: isGerman
        ? 'Rollenbasierte Zugriffs- und Berechtigungskontrollen unterstützen dabei, den Zugriff auf die für die jeweiligen Aufgaben relevanten Fonds, Prozesse und Daten zu beschränken.'
        : 'Role-based access and permission controls help ensure that users access only the funds, workflows, and data relevant to their responsibilities.',
      subLabel: isGerman ? 'SICHERHEITSPRINZIPIEN' : 'SECURITY PRINCIPLES',
      points: isGerman
        ? [
            'Rollenbasierte Zugriffs- und Berechtigungsverwaltung',
            'Kontrollierter Zugriff auf Fonds, Prozesse und Reporting-Daten',
            'Benutzerzugriffe entsprechend definierter Rollen und Verantwortlichkeiten',
          ]
        : [
            'Role-based access and permission management',
            'Controlled access to funds, workflows, and reporting data',
            'User access aligned with defined roles and responsibilities',
          ],
    },
    {
      num: '02',
      title: isGerman ? 'Datentrennung' : 'Data Separation',
      desc: isGerman
        ? 'Konzipiert für eine klare Trennung von Kunden-, Fonds- und Prozessdaten innerhalb der Plattformumgebung.'
        : 'Designed to maintain clear separation between client, fund, and workflow data within the platform environment.',
      subLabel: isGerman ? 'SICHERHEITSPRINZIPIEN' : 'SECURITY PRINCIPLES',
      points: isGerman
        ? [
            'Logische Trennung von Kunden- und Fondsdaten',
            'Kontrollierte Zugriffsgrenzen innerhalb der Plattformumgebung',
            'Strukturierte Verarbeitung von Daten über Kunden und Prozesse hinweg',
          ]
        : [
            'Logical separation of client and fund data',
            'Controlled access boundaries between platform environments',
            'Structured handling of data across clients and workflows',
          ],
    },
    {
      num: '03',
      title: isGerman ? 'Prüfbarkeit' : 'Auditability',
      desc: isGerman
        ? 'Strukturierte Aktivitäts- und Berechnungsaufzeichnungen unterstützen die transparente Prüfung steuerlicher Prozesse, Berechnungen, Anpassungen und Freigaben.'
        : 'Structured activity and calculation records support transparent review of tax workflows, calculations, adjustments, and approvals.',
      subLabel: isGerman ? 'SICHERHEITS- & KONTROLLPRINZIPIEN' : 'SECURITY & CONTROL PRINCIPLES',
      points: isGerman
        ? [
            'Strukturierte Aufzeichnung von Berechnungs- und Prüfaktivitäten',
            'Dokumentation von Anpassungen, Ausnahmen und Freigaben',
            'Nachvollziehbare Prozesshistorie zur Unterstützung fachlicher Prüfungen',
          ]
        : [
            'Structured records of calculation and review activities',
            'Documented adjustments, exceptions, and approvals',
            'Traceable workflow history supporting professional review',
          ],
    },
    {
      num: '04',
      title: isGerman ? 'Datenschutz & Datensicherheit' : 'Data Protection',
      desc: isGerman
        ? 'Konzipiert für den sicheren Umgang mit sensiblen Finanz-, Fonds-, Anleger- und Steuerdaten.'
        : 'Designed to support the secure handling of sensitive financial, fund, investor, and tax data.',
      subLabel: isGerman ? 'SICHERHEITSPRINZIPIEN' : 'SECURITY PRINCIPLES',
      points: isGerman
        ? [
            'Kontrollierte Verarbeitung sensibler Finanz- und Steuerinformationen',
            'Definierte Zugriffs- und Datenschutzkontrollen',
            'Sicherheitsmaßnahmen ausgerichtet auf institutionelle Datenanforderungen',
          ]
        : [
            'Controlled handling of sensitive financial and tax information',
            'Defined access and data protection controls',
            'Security measures designed around institutional data requirements',
          ],
    },
  ]

  return (
    <section
      id="security"
      className="relative overflow-hidden border-t-2 border-slate-900 bg-white px-4 py-16 text-[#0b1735] transition-colors duration-200 dark:border-slate-800 dark:bg-[#080d1a] sm:py-24 sm:px-6 lg:px-[5vw]"
    >
      <div className="relative mx-auto max-w-[1420px]">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {isGerman ? 'SICHERHEIT & KONTROLLE' : 'SECURITY & CONTROL'}
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            {isGerman ? 'Entwickelt für sensible Finanz- und Steuerdaten.' : 'Designed for sensitive financial and tax data.'}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((card) => (
            <article
              key={card.num}
              className="flex flex-col justify-between rounded-2xl border-2 border-slate-900 bg-[#f0f4f9]/50 p-6 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:border-blue-600 dark:border-slate-700 dark:bg-slate-900/90 dark:hover:border-blue-500"
            >
              <div>
                <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">[{card.num}]</span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-slate-950 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{card.desc}</p>
              </div>

              <div className="mt-5 space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  {card.subLabel}
                </span>
                {card.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}