'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { FileText, ArrowLeft, Mail } from 'lucide-react'

export default function TermsPage() {
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
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white no-underline shadow-xs"
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
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {isGerman ? 'NUTZUNGSBEDINGUNGEN' : 'TERMS OF USE'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {isGerman ? 'Nutzungsbedingungen' : 'Terms of Use'}
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
                Diese Nutzungsbedingungen („Nutzungsbedingungen“) regeln den Zugriff auf und die Nutzung der ZYVORIS-Website.
              </p>
              <p>
                Mit dem Zugriff auf oder der Nutzung dieser Website erkennen Sie diese Nutzungsbedingungen an.
              </p>
              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 sm:p-5 dark:border-blue-900/60 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                ZYVORIS wird derzeit als Projekt betrieben, bevor die vorgesehene luxemburgische Gesellschaft gegründet wird. Verweise auf „ZYVORIS“, „wir“, „uns“ oder „unser“ in diesen Nutzungsbedingungen beziehen sich auf die Betreiber des ZYVORIS-Projekts.
              </div>
            </div>

            {/* 1 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                1. Zweck der Website
              </h2>
              <p>
                Die ZYVORIS-Website stellt allgemeine Informationen über ZYVORIS, seine Technologie, geplanten Produkte, Funktionalitäten, Anwendungsfälle und die Entwicklungs-Roadmap bereit.
              </p>
              <p>
                ZYVORIS entwickelt eine technologische Infrastruktur zur Unterstützung steuerbezogener Prozesse im Bereich Private Markets. Hierzu können insbesondere Steuerberechnungen, Allokationen, Validierungs- und Review-Prozesse, Reporting sowie damit verbundene Datenverarbeitungsprozesse gehören.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Die auf dieser Website bereitgestellten Informationen dienen ausschließlich allgemeinen Informations- und Geschäftsentwicklungszwecken.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                2. Keine Steuer-, Rechts-, Rechnungslegungs- oder Anlageberatung
              </h2>
              <p>
                Die Inhalte dieser Website stellen keine Steuer-, Rechts-, Rechnungslegungs-, regulatorische, Anlage-, Finanz- oder sonstige professionelle Beratung dar.
              </p>
              <p>
                Die auf dieser Website bereitgestellten Informationen sind allgemeiner Natur und berücksichtigen nicht die konkreten Tatsachen, Umstände, rechtlichen Strukturen, Jurisdiktionen, Anlagestrategien oder steuerlichen Verhältnisse einer bestimmten Person, Gesellschaft, eines Fonds oder Investors.
              </p>
              <p>
                Vor Entscheidungen, die auf steuerlichen, rechtlichen, bilanziellen, regulatorischen, investitionsbezogenen oder finanziellen Erwägungen beruhen, sollten Sie geeigneten professionellen Rat einholen.
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                Durch die Nutzung dieser Website entsteht zwischen Ihnen und ZYVORIS kein Steuerberater-, Berater-, Mandats-, Treuhand- oder sonstiges professionelles Beratungsverhältnis.
              </div>
            </section>

            {/* 3 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                3. Produktinformationen und Entwicklungsstatus
              </h2>
              <p>
                Bestimmte auf dieser Website beschriebene Funktionen, Integrationen, Jurisdiktionen, Features oder sonstige Funktionalitäten können sich noch in Entwicklung befinden, für eine zukünftige Veröffentlichung vorgesehen sein, lediglich als Konzept dargestellt werden oder anderweitig noch nicht kommerziell verfügbar sein.
              </p>
              <p>
                Hinweise auf Produkt-Roadmaps, geplante Funktionen, Integrationen, Jurisdiktionen oder zukünftige Funktionalitäten dienen ausschließlich Informationszwecken.
              </p>
              <p>
                Sie stellen keine Verpflichtung, Zusicherung oder Garantie dar, dass bestimmte Funktionen, Integrationen, Jurisdiktionen oder Dienstleistungen veröffentlicht, verfügbar gemacht oder innerhalb eines bestimmten Zeitraums bereitgestellt werden.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                ZYVORIS kann seine Produktstrategie, Roadmap, Funktionalitäten, technische Architektur oder sein kommerzielles Angebot jederzeit ändern.
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                4. Richtigkeit der Informationen
              </h2>
              <p>
                Wir bemühen uns, nützliche und zutreffende Informationen bereitzustellen, übernehmen jedoch keine Gewähr dafür, dass die auf dieser Website enthaltenen Informationen vollständig, richtig, aktuell oder fehlerfrei sind.
              </p>
              <p>
                Steuergesetze, Vorschriften, Verwaltungsanweisungen und Reporting-Anforderungen können sich ändern und zwischen verschiedenen Jurisdiktionen erheblich unterscheiden.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Die auf dieser Website bereitgestellten Informationen sollten daher nicht als Ersatz für aktuelle professionelle Beratung oder eine Prüfung des jeweils anwendbaren Rechts herangezogen werden.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                5. Geistiges Eigentum
              </h2>
              <p>
                Soweit nicht anders angegeben, sind die Website und ihre Inhalte, einschließlich insbesondere:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>des Namens und der Marke ZYVORIS;</li>
                <li>der Logos;</li>
                <li>der Produktkonzepte;</li>
                <li>der Texte;</li>
                <li>der Grafiken;</li>
                <li>der visuellen Gestaltung;</li>
                <li>der Benutzeroberflächenkonzepte;</li>
                <li>der Diagramme;</li>
                <li>der softwarebezogenen Beschreibungen;</li>
                <li>der Methoden;</li>
                <li>der Dokumentation; sowie</li>
                <li>sonstiger Materialien</li>
              </ul>
              <p>
                Eigentum von ZYVORIS, an ZYVORIS lizenziert oder werden von ZYVORIS rechtmäßig genutzt und sind durch die anwendbaren Vorschriften zum Schutz geistigen Eigentums geschützt.
              </p>
              <p>
                Sie dürfen auf die Website zugreifen und deren Inhalte für legitime Informations- und Geschäftszwecke einsehen.
              </p>
              <p>
                Soweit dies nicht durch anwendbares Recht gestattet oder ausdrücklich von ZYVORIS genehmigt wurde, dürfen wesentliche Teile der Website oder ihrer geschützten Inhalte nicht vervielfältigt, verbreitet, verändert, veröffentlicht, kommerziell verwertet oder zur Erstellung abgeleiteter Werke verwendet werden.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Durch diese Website wird keine Lizenz oder ein sonstiges Recht zur Nutzung von Marken, Logos, proprietärer Technologie oder sonstigem geistigem Eigentum von ZYVORIS eingeräumt, soweit dies nicht ausdrücklich angegeben ist.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                6. Zulässige Nutzung
              </h2>
              <p>Sie verpflichten sich, die Website nicht zu folgenden Zwecken zu verwenden:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>für rechtswidrige oder betrügerische Zwecke;</li>
                <li>zur Beeinträchtigung des Betriebs oder der Sicherheit der Website;</li>
                <li>zum Versuch eines unbefugten Zugriffs auf Systeme, Infrastruktur oder Daten;</li>
                <li>zur Einschleusung von Malware, Schadcode oder sonstigen schädlichen Technologien;</li>
                <li>zur systematischen Extraktion oder zum Scraping von Website-Inhalten in einer Weise, die den Betrieb der Website wesentlich beeinträchtigt oder anwendbare Rechte verletzt;</li>
                <li>zur unzutreffenden Darstellung einer Verbindung oder Zugehörigkeit zu ZYVORIS; oder</li>
                <li>zur unbefugten Nutzung geistigen Eigentums von ZYVORIS.</li>
              </ul>
            </section>

            {/* 7 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                7. Links zu Websites Dritter
              </h2>
              <p>
                Die Website kann Links zu Websites, Diensten oder Ressourcen Dritter enthalten. Diese Links werden ausschließlich aus Gründen der Benutzerfreundlichkeit oder zu Informationszwecken bereitgestellt.
              </p>
              <p>
                ZYVORIS hat keine Kontrolle über Websites Dritter und ist nicht für deren Verfügbarkeit, Inhalte, Richtigkeit, Sicherheit, Datenschutzpraktiken oder Dienstleistungen verantwortlich.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Die Aufnahme eines Links stellt nicht notwendigerweise eine Empfehlung oder Billigung des jeweiligen Drittanbieters durch ZYVORIS dar.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                8. Verfügbarkeit der Website
              </h2>
              <p>
                Wir können Teile der Website jederzeit ändern, aktualisieren, vorübergehend aussetzen oder einstellen. Wir gewährleisten keine ununterbrochene oder fehlerfreie Verfügbarkeit der Website.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Wartungsarbeiten, technische Probleme, Sicherheitsanforderungen oder Umstände außerhalb unseres angemessenen Einflussbereichs können zu vorübergehenden oder dauerhaften Unterbrechungen führen.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                9. Haftungsbeschränkung
              </h2>
              <p>
                Soweit nach anwendbarem Recht zulässig, haften ZYVORIS und die an der Entwicklung oder dem Betrieb des ZYVORIS-Projekts beteiligten Personen nicht für Verluste oder Schäden, die ausschließlich aus dem Vertrauen auf die auf dieser Website bereitgestellten allgemeinen Informationen oder aus der fehlenden Möglichkeit des Zugriffs auf bzw. der Nutzung der Website entstehen.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Diese Nutzungsbedingungen schließen keine Haftung aus und beschränken keine Haftung, soweit ein solcher Ausschluss oder eine solche Beschränkung nach anwendbarem Recht unzulässig ist.
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                10. Datenschutz
              </h2>
              <p>
                Personenbezogene Daten, die im Zusammenhang mit dieser Website verarbeitet werden, werden gemäß unserer{' '}
                <Link href="/privacy" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  Datenschutzerklärung
                </Link>{' '}
                verarbeitet.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                11. Kein Angebot und keine Aufforderung
              </h2>
              <p>
                Soweit nicht ausdrücklich anders angegeben, stellen die auf dieser Website enthaltenen Informationen weder ein Angebot noch eine Aufforderung oder verbindliche Verpflichtung zum Erwerb, Verkauf oder zur Bereitstellung eines Produkts, einer Dienstleistung, eines Wertpapiers, einer Investition oder eines Finanzinstruments dar.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Die zukünftige Bereitstellung von Produkten oder Dienstleistungen durch ZYVORIS kann gesonderten vertraglichen Bedingungen, Zulässigkeitsvoraussetzungen und kommerziellen Vereinbarungen unterliegen.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                12. Änderungen dieser Nutzungsbedingungen
              </h2>
              <p>
                Wir können diese Nutzungsbedingungen von Zeit zu Zeit ändern, insbesondere um Änderungen der Website, unserer Aktivitäten, des anwendbaren Rechts oder sonstiger relevanter Umstände zu berücksichtigen. Die jeweils auf dieser Website veröffentlichte Fassung ist die aktuelle Fassung der Nutzungsbedingungen.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                13. Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                Diese Nutzungsbedingungen sowie alle Streitigkeiten im Zusammenhang mit der Nutzung dieser Website unterliegen dem Recht des Großherzogtums Luxemburg, unbeschadet zwingender gesetzlicher Bestimmungen, die im Einzelfall Anwendung finden können.
              </p>
              <p>
                Vorbehaltlich zwingender gesetzlicher Bestimmungen unterliegen Streitigkeiten im Zusammenhang mit diesen Nutzungsbedingungen oder der Nutzung dieser Website der Zuständigkeit der zuständigen Gerichte des Großherzogtums Luxemburg.
              </p>
            </section>

            {/* 14 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                14. Kontakt
              </h2>
              <p>Fragen zu diesen Nutzungsbedingungen können gerichtet werden an:</p>
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
                These Terms of Use (“Terms”) govern your access to and use of the ZYVORIS website.
              </p>
              <p>
                By accessing or using this website, you acknowledge these Terms.
              </p>
              <div className="rounded-2xl border border-blue-200/80 bg-blue-50/50 p-4 sm:p-5 dark:border-blue-900/60 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                ZYVORIS is currently operating as a project prior to the incorporation of its intended Luxembourg legal entity. References to “ZYVORIS”, “we”, “us” or “our” in these Terms refer to the operators of the ZYVORIS project.
              </div>
            </div>

            {/* 1 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                1. Purpose of the Website
              </h2>
              <p>
                The ZYVORIS website provides general information about ZYVORIS, its technology, intended products, capabilities, use cases and development roadmap.
              </p>
              <p>
                ZYVORIS is developing technology infrastructure intended to support tax-related processes within private markets, including tax calculations, allocations, validation workflows, reporting and related data-processing activities.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Information presented on this website is provided for general informational and business-development purposes only.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                2. No Tax, Legal, Accounting or Investment Advice
              </h2>
              <p>
                Nothing contained on this website constitutes tax, legal, accounting, regulatory, investment, financial or other professional advice.
              </p>
              <p>
                Information presented on the website is general in nature and does not take into account the particular facts, circumstances, legal structure, jurisdiction, investment strategy or tax position of any person, entity, fund or investor.
              </p>
              <p>
                You should obtain appropriate professional advice before making decisions based on tax, legal, accounting, regulatory, investment or financial considerations.
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                Use of this website does not create an adviser-client, consultant-client, fiduciary or other professional relationship between you and ZYVORIS.
              </div>
            </section>

            {/* 3 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                3. Product Information and Development Status
              </h2>
              <p>
                Certain functionality, integrations, jurisdictions, features or capabilities described on this website may be under development, planned for future release, presented as concepts or otherwise not yet commercially available.
              </p>
              <p>
                References to product roadmaps, planned capabilities, integrations, jurisdictions or future functionality are provided for informational purposes only.
              </p>
              <p>
                They do not constitute a commitment, warranty or guarantee that any particular functionality, integration, jurisdiction or service will be released, made available or delivered within a particular timeframe.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                ZYVORIS may modify its product strategy, roadmap, functionality, technical architecture or commercial offering at any time.
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                4. Accuracy of Information
              </h2>
              <p>
                We seek to provide useful and accurate information but do not warrant that information on this website is complete, accurate, current or free from errors.
              </p>
              <p>
                Tax laws, regulations, administrative guidance and reporting requirements may change and may differ significantly between jurisdictions.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Information on this website should therefore not be relied upon as a substitute for current professional advice or analysis of applicable law.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                5. Intellectual Property
              </h2>
              <p>
                Unless otherwise indicated, the website and its content, including without limitation:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>the ZYVORIS name and branding;</li>
                <li>logos;</li>
                <li>product concepts;</li>
                <li>text;</li>
                <li>graphics;</li>
                <li>visual designs;</li>
                <li>user-interface concepts;</li>
                <li>diagrams;</li>
                <li>software-related descriptions;</li>
                <li>methodologies;</li>
                <li>documentation; and</li>
                <li>other materials</li>
              </ul>
              <p>
                are owned by, licensed to or used by ZYVORIS and are protected by applicable intellectual property laws.
              </p>
              <p>
                You may access and view the website for legitimate informational and business purposes.
              </p>
              <p>
                Except where permitted by applicable law or expressly authorised by ZYVORIS, you may not reproduce, distribute, modify, publish, commercially exploit or create derivative works from substantial parts of the website or its proprietary content.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Nothing on this website grants any licence or other right to use any trademark, logo, proprietary technology or other intellectual property of ZYVORIS except as expressly stated.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                6. Permitted Use
              </h2>
              <p>You agree not to use the website:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>for unlawful or fraudulent purposes;</li>
                <li>to interfere with the operation or security of the website;</li>
                <li>to attempt unauthorised access to systems, infrastructure or data;</li>
                <li>to introduce malware, malicious code or other harmful technology;</li>
                <li>to systematically extract or scrape website content in a manner that materially interferes with the website or infringes applicable rights;</li>
                <li>to misrepresent an affiliation with ZYVORIS; or</li>
                <li>to use ZYVORIS intellectual property without authorisation.</li>
              </ul>
            </section>

            {/* 7 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                7. Third-Party Links
              </h2>
              <p>
                The website may contain links to third-party websites, services or resources. Such links are provided for convenience or informational purposes only.
              </p>
              <p>
                ZYVORIS does not control and is not responsible for the availability, content, accuracy, security, privacy practices or services of third-party websites.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                The inclusion of a link does not necessarily constitute an endorsement or recommendation by ZYVORIS.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                8. Website Availability
              </h2>
              <p>
                We may modify, update, suspend or discontinue any part of the website at any time. We do not guarantee uninterrupted or error-free availability of the website.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Maintenance, technical issues, security requirements or circumstances outside our reasonable control may result in temporary or permanent interruptions.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, ZYVORIS and the persons involved in operating or developing the ZYVORIS project shall not be liable for losses or damages arising solely from reliance on general information provided on this website or from the inability to access or use the website.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited under applicable law.
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                10. Privacy
              </h2>
              <p>
                Personal data processed in connection with this website is handled in accordance with our{' '}
                <Link href="/privacy" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                11. No Offer or Solicitation
              </h2>
              <p>
                Unless expressly stated otherwise, information on this website does not constitute an offer, solicitation or binding commitment to provide or purchase any product, service, security, investment or financial instrument.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Any future provision of ZYVORIS products or services may be subject to separate contractual terms, eligibility requirements and commercial arrangements.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                12. Changes to These Terms
              </h2>
              <p>
                We may modify these Terms from time to time to reflect changes to the website, our activities, applicable law or other relevant circumstances. The version published on this website at the relevant time will be the current version.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                13. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms and any dispute relating to the use of this website shall be governed by the laws of the Grand Duchy of Luxembourg, without prejudice to any mandatory legal provisions that may apply.
              </p>
              <p>
                Subject to mandatory applicable law, disputes relating to these Terms or the use of this website shall fall within the jurisdiction of the competent courts of the Grand Duchy of Luxembourg.
              </p>
            </section>

            {/* 14 */}
            <section className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                14. Contact
              </h2>
              <p>Questions concerning these Terms may be sent to:</p>
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
