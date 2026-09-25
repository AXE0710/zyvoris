'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Shield, ArrowLeft, Mail } from 'lucide-react'

export default function PrivacyPage() {
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
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white no-underline shadow-xs"
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
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 no-underline transition-colors"
            >
              {isGerman ? 'Impressum' : 'Legal Notice'}
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="mt-10 sm:mt-12 space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {isGerman ? 'DATENSCHUTZ' : 'DATA PROTECTION'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {isGerman ? 'Datenschutzerklärung' : 'Privacy Policy'}
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
            {/* Intro */}
            <div className="space-y-4">
              <p>
                ZYVORIS („ZYVORIS“, „wir“, „uns“ oder „unser“) respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz personenbezogener Daten, die im Zusammenhang mit dieser Website verarbeitet werden.
              </p>
              <p>
                Diese Datenschutzerklärung erläutert, wie personenbezogene Daten erhoben, verwendet und geschützt werden können, wenn Sie unsere Website besuchen, mit uns Kontakt aufnehmen oder anderweitig mit ZYVORIS interagieren.
              </p>
              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 sm:p-5 dark:border-blue-900/60 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                ZYVORIS wird derzeit als Projekt betrieben, bevor die vorgesehene luxemburgische Gesellschaft gegründet wird. Nach Gründung der Gesellschaft wird diese Datenschutzerklärung, soweit erforderlich, entsprechend aktualisiert.
              </div>
            </div>

            {/* 1 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                1. Verantwortlicher
              </h2>
              <p>
                Für die Zwecke der Datenschutz-Grundverordnung (EU) 2016/679 („DSGVO“) liegt die Verantwortung für die Verarbeitung personenbezogener Daten im Zusammenhang mit dieser Website derzeit bei den Betreibern des ZYVORIS-Projekts.
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1">
                <p className="font-bold text-slate-950 dark:text-white m-0">Kontakt:</p>
                <p className="m-0 font-mono text-xs sm:text-sm">ZYVORIS</p>
                <p className="m-0 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <a href="mailto:info@zyvoris.ai" className="hover:underline">E-Mail: info@zyvoris.ai</a>
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Nach Gründung der vorgesehenen luxemburgischen Gesellschaft werden die entsprechenden Angaben zur juristischen Person in dieser Datenschutzerklärung ergänzt bzw. aktualisiert.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                2. Personenbezogene Daten, die wir verarbeiten können
              </h2>
              <p>
                Abhängig davon, wie Sie mit unserer Website interagieren, können wir die folgenden Kategorien personenbezogener Daten verarbeiten:
              </p>
              
              <div className="space-y-2">
                <h3 className="font-bold text-slate-950 dark:text-white text-base">
                  Von Ihnen bereitgestellte Informationen
                </h3>
                <p>
                  Wenn Sie mit uns Kontakt aufnehmen, Informationen anfordern, eine Demonstration anfragen oder anderweitig mit uns kommunizieren, können wir insbesondere folgende Informationen erhalten:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Ihren Namen;</li>
                  <li>Ihre geschäftliche E-Mail-Adresse;</li>
                  <li>Ihr Unternehmen oder Ihre Organisation;</li>
                  <li>Ihre Berufsbezeichnung oder berufliche Funktion;</li>
                  <li>Ihre Telefonnummer, sofern angegeben;</li>
                  <li>die in Ihrer Nachricht oder Anfrage enthaltenen Informationen; sowie</li>
                  <li>sonstige Informationen, die Sie uns freiwillig zur Verfügung stellen.</li>
                </ul>
                <div className="rounded-xl border border-amber-200/80 bg-amber-50/60 p-3 sm:p-4 dark:border-amber-900/50 dark:bg-amber-950/30 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                  Bitte übermitteln Sie uns keine vertraulichen Mandanten- oder Kundeninformationen, sensiblen personenbezogenen Daten, Steuerdaten oder sonstigen Informationen, die für Ihre Anfrage nicht erforderlich sind.
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-bold text-slate-950 dark:text-white text-base">
                  Technische Informationen
                </h3>
                <p>
                  Wenn Sie auf unsere Website zugreifen, können bestimmte technische Informationen automatisch durch unsere Hosting- und Infrastruktur-Dienstleister verarbeitet werden. Hierzu können insbesondere gehören:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>IP-Adresse;</li>
                  <li>Browsertyp und Browserversion;</li>
                  <li>Informationen über das verwendete Gerät und Betriebssystem;</li>
                  <li>Datum und Uhrzeit des Zugriffs;</li>
                  <li>aufgerufene Seiten oder Ressourcen;</li>
                  <li>Referrer-URL;</li>
                  <li>technische Protokoll- und Logdaten; sowie</li>
                  <li>sicherheitsbezogene Informationen.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Diese Informationen können erforderlich sein, um die Website bereitzustellen, ihre Sicherheit und Stabilität zu gewährleisten, technische Probleme zu erkennen und Missbrauch zu verhindern.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                3. Zwecke und Rechtsgrundlagen der Verarbeitung
              </h2>
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit hierfür eine geeignete Rechtsgrundlage nach dem anwendbaren Datenschutzrecht besteht.
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Beantwortung von Anfragen</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Wir können die von Ihnen bereitgestellten Informationen verarbeiten, um Anfragen, Informationswünsche, Demo-Anfragen oder sonstige Mitteilungen zu beantworten.
                    Rechtsgrundlage kann Art. 6 Abs. 1 lit. b DSGVO sein, soweit die Verarbeitung erforderlich ist, um auf Ihre Anfrage hin vor Abschluss eines Vertrags Maßnahmen durchzuführen, oder Art. 6 Abs. 1 lit. f DSGVO, soweit unser berechtigtes Interesse darin besteht, geschäftliche Anfragen zu beantworten und mit potenziellen Partnern, Kunden und anderen Stakeholdern zu kommunizieren.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Betrieb und Sicherheit der Website</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Technische Informationen können verarbeitet werden, um die Website bereitzustellen, zu betreiben, zu schützen und abzusichern, technische Probleme zu identifizieren und Missbrauch zu verhindern.
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO auf Grundlage unseres berechtigten Interesses am sicheren und zuverlässigen Betrieb unserer Website.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Geschäftliche Kommunikation</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Wenn Sie ZYVORIS in einem geschäftlichen oder beruflichen Kontext kontaktieren, können wir die relevante Korrespondenz speichern, um die Geschäftsbeziehung zu verwalten, Gespräche weiterzuverfolgen und angemessene geschäftliche Aufzeichnungen zu führen.
                    Je nach den Umständen kann die Rechtsgrundlage Art. 6 Abs. 1 lit. b oder Art. 6 Abs. 1 lit. f DSGVO sein.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Erfüllung rechtlicher Verpflichtungen</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Soweit erforderlich, können personenbezogene Daten verarbeitet werden, um anwendbare gesetzliche oder regulatorische Verpflichtungen zu erfüllen.
                    Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
                  </p>
                </div>
              </div>
            </section>

            {/* 4 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                4. Cookies und Analyse-Tools
              </h2>
              <p>
                ZYVORIS verwendet derzeit keine Werbe-Cookies, Technologien zur verhaltensbezogenen Nachverfolgung, Marketing-Pixel von Drittanbietern oder Webanalyse-Tools zum Zweck der websiteübergreifenden Nachverfolgung von Besuchern.
              </p>
              <p>
                Technische Technologien, die für den Betrieb, die Sicherheit oder die Bereitstellung der Website unbedingt erforderlich sind, können jedoch durch die Website oder deren Infrastruktur-Dienstleister eingesetzt werden.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Sollte ZYVORIS künftig Analyse-Tools, Marketing-Cookies oder vergleichbare Technologien einsetzen, werden diese Datenschutzerklärung sowie – soweit erforderlich – die entsprechenden Einwilligungsmechanismen entsprechend aktualisiert.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                5. Weitergabe personenbezogener Daten
              </h2>
              <p>Wir verkaufen keine personenbezogenen Daten.</p>
              <p>
                Personenbezogene Daten können an Dienstleister weitergegeben werden, soweit dies für den Betrieb und die Sicherheit der Website oder für die Erbringung damit verbundener Leistungen angemessen und erforderlich ist. Hierzu können insbesondere gehören:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Website-Hosting- und Infrastruktur-Dienstleister;</li>
                <li>IT- und Sicherheitsdienstleister;</li>
                <li>E-Mail- und Kommunikationsdienstleister;</li>
                <li>professionelle Berater; sowie</li>
                <li>sonstige Dienstleister, die in unserem Auftrag tätig werden.</li>
              </ul>
              <p>
                Darüber hinaus können wir Informationen offenlegen, wenn dies aufgrund anwendbarer Gesetze oder Vorschriften, eines rechtlichen Verfahrens oder aufgrund einer Anordnung einer zuständigen Behörde erforderlich ist.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Soweit ein Dienstleister personenbezogene Daten in unserem Auftrag verarbeitet, werden – soweit nach anwendbarem Recht erforderlich – geeignete vertragliche und organisatorische Schutzmaßnahmen getroffen.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                6. Internationale Datenübermittlungen
              </h2>
              <p>
                Einige Technologie- oder Infrastruktur-Dienstleister können Informationen außerhalb des Europäischen Wirtschaftsraums („EWR“) verarbeiten.
              </p>
              <p>
                Soweit personenbezogene Daten außerhalb des EWR übermittelt werden, bemühen wir uns sicherzustellen, dass ein nach dem anwendbaren Datenschutzrecht erforderlicher und geeigneter Übermittlungsmechanismus bzw. geeignete Schutzmaßnahmen bestehen, beispielsweise ein Angemessenheitsbeschluss oder geeignete vertragliche Garantien.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                7. Speicherdauer
              </h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für die Zwecke, für die sie erhoben wurden, vernünftigerweise erforderlich ist. Dazu gehören insbesondere die Beantwortung von Anfragen, die Führung angemessener Geschäftsunterlagen, die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen sowie die Erfüllung anwendbarer gesetzlicher Verpflichtungen.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Technische und sicherheitsbezogene Informationen können abhängig von betrieblichen und sicherheitsbezogenen Anforderungen für kürzere Zeiträume gespeichert werden. Die konkrete Speicherdauer kann abhängig von der Art der Informationen und den Umständen der jeweiligen Interaktion variieren.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                8. Datensicherheit
              </h2>
              <p>
                Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten gegen unbeabsichtigte oder unrechtmäßige Zerstörung, Verlust, Veränderung, unbefugte Offenlegung oder unbefugten Zugriff zu schützen.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Keine Methode der Datenübertragung oder Datenspeicherung kann jedoch absolute Sicherheit gewährleisten.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                9. Ihre Rechte
              </h2>
              <p>
                Vorbehaltlich der Voraussetzungen und Einschränkungen des anwendbaren Datenschutzrechts können Ihnen insbesondere folgende Rechte zustehen:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Auskunft über Ihre personenbezogenen Daten zu verlangen;</li>
                <li>die Berichtigung unrichtiger oder unvollständiger personenbezogener Daten zu verlangen;</li>
                <li>die Löschung Ihrer personenbezogenen Daten zu verlangen;</li>
                <li>die Einschränkung der Verarbeitung zu verlangen;</li>
                <li>bestimmten Verarbeitungen, die auf berechtigten Interessen beruhen, zu widersprechen;</li>
                <li>soweit anwendbar, die Übertragbarkeit Ihrer Daten zu verlangen; sowie</li>
                <li>eine erteilte Einwilligung jederzeit zu widerrufen, soweit die Verarbeitung auf Ihrer Einwilligung beruht.</li>
              </ul>
              <p className="pt-2">
                Zur Ausübung Ihrer Rechte können Sie uns unter folgender Adresse kontaktieren:{' '}
                <a href="mailto:info@zyvoris.ai" className="font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  info@zyvoris.ai
                </a>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Sie haben außerdem das Recht, eine Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzureichen. Soweit Luxemburg die zuständige Jurisdiktion ist, ist die zuständige Aufsichtsbehörde die Commission nationale pour la protection des données (CNPD).
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                10. Automatisierte Entscheidungsfindung
              </h2>
              <p>
                Personenbezogene Daten, die über diese Website erhoben werden, werden derzeit nicht für ausschließlich auf automatisierter Verarbeitung beruhende Entscheidungen verwendet, die gegenüber Website-Besuchern rechtliche Wirkung entfalten oder sie in ähnlicher Weise erheblich beeinträchtigen.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                11. Websites Dritter
              </h2>
              <p>
                Unsere Website kann Links zu Websites oder Diensten enthalten, die von Dritten betrieben werden. ZYVORIS ist nicht für die Datenschutzpraktiken, die Sicherheit oder die Inhalte von Websites Dritter verantwortlich. Wir empfehlen Ihnen, die Datenschutzhinweise des jeweiligen Drittanbieters zu prüfen, bevor Sie diesem personenbezogene Daten zur Verfügung stellen.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                12. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, insbesondere um Änderungen unserer Website, unserer Dienstleistungen, der anwendbaren Rechtslage oder unserer Datenverarbeitungstätigkeiten zu berücksichtigen. Die jeweils aktuelle Fassung wird zusammen mit dem Datum der letzten Aktualisierung auf dieser Website veröffentlicht.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                13. Kontakt
              </h2>
              <p>
                Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung personenbezogener Daten im Zusammenhang mit der ZYVORIS-Website kontaktieren Sie uns bitte unter:
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1">
                <p className="font-bold text-slate-950 dark:text-white m-0">ZYVORIS</p>
                <p className="m-0 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <a href="mailto:info@zyvoris.ai" className="hover:underline flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    <span>info@zyvoris.ai</span>
                  </a>
                </p>
              </div>
            </section>
          </div>
        ) : (
          <div className="mt-10 space-y-10 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {/* Intro */}
            <div className="space-y-4">
              <p>
                ZYVORIS (“ZYVORIS”, “we”, “us” or “our”) respects your privacy and is committed to protecting personal data processed in connection with this website.
              </p>
              <p>
                This Privacy Policy explains how personal data may be collected, used and protected when you visit our website, contact us or otherwise interact with ZYVORIS.
              </p>
              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 sm:p-5 dark:border-blue-900/60 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                ZYVORIS is currently operating as a project prior to the incorporation of its intended Luxembourg legal entity. This Privacy Policy will be updated following incorporation where necessary.
              </div>
            </div>

            {/* 1 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                1. Data Controller
              </h2>
              <p>
                For the purposes of the General Data Protection Regulation (EU) 2016/679 (“GDPR”), responsibility for the processing of personal data in connection with this website is currently exercised by the operators of ZYVORIS.
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1">
                <p className="font-bold text-slate-950 dark:text-white m-0">Contact:</p>
                <p className="m-0 font-mono text-xs sm:text-sm">ZYVORIS</p>
                <p className="m-0 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <a href="mailto:info@zyvoris.ai" className="hover:underline">Email: info@zyvoris.ai</a>
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Following incorporation of the intended Luxembourg entity, the relevant legal entity details will be reflected in this Privacy Policy.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                2. Personal Data We May Collect
              </h2>
              <p>
                Depending on how you interact with our website, we may process the following categories of personal data:
              </p>
              
              <div className="space-y-2">
                <h3 className="font-bold text-slate-950 dark:text-white text-base">
                  Information you provide to us
                </h3>
                <p>
                  When you contact us, request information, request a demonstration or otherwise communicate with us, we may receive information such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>your name;</li>
                  <li>business email address;</li>
                  <li>company or organisation;</li>
                  <li>job title or professional role;</li>
                  <li>telephone number, where provided;</li>
                  <li>information contained in your message or enquiry; and</li>
                  <li>any other information you voluntarily provide.</li>
                </ul>
                <div className="rounded-xl border border-amber-200/80 bg-amber-50/60 p-3 sm:p-4 dark:border-amber-900/50 dark:bg-amber-950/30 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                  Please do not provide confidential client information, sensitive personal data, tax data or other information that is not necessary for your enquiry.
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-bold text-slate-950 dark:text-white text-base">
                  Technical information
                </h3>
                <p>
                  When you access the website, certain technical information may be processed automatically by our hosting and infrastructure providers. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>IP address;</li>
                  <li>browser type and version;</li>
                  <li>device and operating system information;</li>
                  <li>date and time of access;</li>
                  <li>requested pages or resources;</li>
                  <li>referring URL;</li>
                  <li>technical log information; and</li>
                  <li>security-related information.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Such information may be required to deliver the website, maintain its security and stability, detect technical problems and prevent misuse.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                3. Purposes and Legal Bases
              </h2>
              <p>
                We process personal data only where there is an appropriate legal basis under applicable data protection law.
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Responding to enquiries</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    We may process information you provide to respond to enquiries, requests for information, demo requests or other communications.
                    The legal basis may be Article 6(1)(b) GDPR where processing is necessary to take steps at your request prior to entering into a contract, or Article 6(1)(f) GDPR where we have a legitimate interest in responding to business enquiries and communicating with prospective partners, clients and other stakeholders.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Operating and securing the website</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Technical information may be processed to provide, maintain, protect and secure the website, identify technical problems and prevent abuse.
                    The legal basis is Article 6(1)(f) GDPR, based on our legitimate interest in operating a secure and reliable website.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Business communications</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Where you contact ZYVORIS in a professional capacity, we may retain relevant correspondence to manage the relationship, follow up on discussions and maintain appropriate business records.
                    The legal basis may be Article 6(1)(b) or Article 6(1)(f) GDPR, depending on the circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">Compliance with legal obligations</h3>
                  <p className="text-xs sm:text-sm mt-1">
                    Where necessary, personal data may be processed to comply with applicable legal or regulatory requirements.
                    The legal basis is Article 6(1)(c) GDPR.
                  </p>
                </div>
              </div>
            </section>

            {/* 4 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                4. Cookies and Analytics
              </h2>
              <p>
                ZYVORIS currently does not use advertising cookies, behavioural tracking technologies, third-party marketing pixels or web analytics tools for the purpose of tracking visitors across websites.
              </p>
              <p>
                Technical technologies that are strictly necessary for the operation, security or delivery of the website may nevertheless be used by the website or its infrastructure providers.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                If ZYVORIS introduces analytics, marketing cookies or similar technologies in the future, this Privacy Policy and, where required, our consent mechanisms will be updated accordingly.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                5. Sharing of Personal Data
              </h2>
              <p>We do not sell personal data.</p>
              <p>
                Personal data may be disclosed to service providers where reasonably necessary to operate and secure the website or provide related services. Such providers may include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>website hosting and infrastructure providers;</li>
                <li>IT and security providers;</li>
                <li>email and communication providers;</li>
                <li>professional advisers; and</li>
                <li>other service providers acting on our behalf.</li>
              </ul>
              <p>
                We may also disclose information where required by applicable law, regulation, legal process or a competent authority.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Where a service provider processes personal data on our behalf, appropriate contractual and organisational safeguards will be used where required by applicable law.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                6. International Data Transfers
              </h2>
              <p>
                Some technology or infrastructure providers may process information outside the European Economic Area (“EEA”).
              </p>
              <p>
                Where personal data is transferred outside the EEA, we will seek to ensure that an appropriate transfer mechanism or safeguard required under applicable data protection law is in place, such as an adequacy decision or appropriate contractual safeguards.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                7. Data Retention
              </h2>
              <p>
                We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, maintaining appropriate business records, establishing or defending legal claims and complying with applicable legal obligations.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Technical and security information may be retained for shorter periods depending on operational and security requirements. Retention periods may vary depending on the nature of the information and the circumstances of the relevant interaction.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                8. Data Security
              </h2>
              <p>
                We take reasonable technical and organisational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                However, no method of transmission or storage can guarantee absolute security.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                9. Your Rights
              </h2>
              <p>
                Subject to the conditions and limitations provided by applicable data protection law, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>request access to your personal data;</li>
                <li>request correction of inaccurate or incomplete personal data;</li>
                <li>request deletion of your personal data;</li>
                <li>request restriction of processing;</li>
                <li>object to certain processing based on legitimate interests;</li>
                <li>request data portability where applicable; and</li>
                <li>withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p className="pt-2">
                You may exercise these rights by contacting:{' '}
                <a href="mailto:info@zyvoris.ai" className="font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  info@zyvoris.ai
                </a>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                You also have the right to lodge a complaint with the competent data protection supervisory authority. Where Luxembourg is the relevant jurisdiction, the supervisory authority is the Commission nationale pour la protection des données (CNPD).
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                10. Automated Decision-Making
              </h2>
              <p>
                Personal data collected through this website is not currently used to make decisions based solely on automated processing that produce legal effects or similarly significantly affect website visitors.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                11. Third-Party Websites
              </h2>
              <p>
                Our website may contain links to websites or services operated by third parties. ZYVORIS is not responsible for the privacy practices, security or content of third-party websites. We recommend reviewing the privacy information provided by the relevant third party before providing personal data.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                12. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to the website, our services, applicable law or our data-processing activities. The current version will be published on this website together with its latest revision date.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                13. Contact
              </h2>
              <p>
                For questions regarding this Privacy Policy or the processing of personal data in connection with the ZYVORIS website, please contact:
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1">
                <p className="font-bold text-slate-950 dark:text-white m-0">ZYVORIS</p>
                <p className="m-0 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <a href="mailto:info@zyvoris.ai" className="hover:underline flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    <span>info@zyvoris.ai</span>
                  </a>
                </p>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  )
}
