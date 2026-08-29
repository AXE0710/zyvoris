'use client'

import ZyvorisHero from '@/components/hero'
import Header from '@/components/header'

import SolutionsSection from '@/components/solutions'
import VerificationSection from '@/components/verify'
import CallToActionSection from '@/components/calltoaction'
import ProblemSection from '@/components/problem'
import ComplexStructuresSection from '@/components/complex'
import ProductScreenshot from '@/components/product-screenshot'
import Jurisdictions from '@/components/jurisdictions'
import UseCases from '@/components/use-cases'
import CustomerSegments from '@/components/customer-segments'
import AISection from '@/components/ai'
import SecuritySection from '@/components/security'
import IntegrationSection from '@/components/integration'
import ComparisonSection from '@/components/comparison'

export default function Page() {
  return (
  <main id="top">
    <Header />

    <ZyvorisHero />

    <section id="problem">
      <ProblemSection />
    </section>

    <section id="solutions">
      <SolutionsSection />
      <ComplexStructuresSection />
    </section>

    <section id="workflow">
      <ProductScreenshot />
    </section>

    <section id="use-cases">
      <UseCases />
      <Jurisdictions />
    </section>

    <section id="technology">
      <AISection />
      <VerificationSection />
    </section>

    <CustomerSegments />
    <SecuritySection />
    <IntegrationSection />
    <ComparisonSection />

    <section id="contact">
      <CallToActionSection />
    </section>
  </main>
  )
}

// Step	Customer question	Component
// 01	What is ZYVORIS?	<ZyvorisHero />
// 02	Why do I need it?	<ProblemSection />
// 03	What does ZYVORIS change?	<SolutionsSection /> + <ComplexStructuresSection />
// 04	How does it work?	<ProductScreenshot />
// 05	What can I use it for?	<UseCases /> + <Jurisdictions />
// 06	Why is the technology different?	<AISection /> + <VerificationSection />
// 07	Is this built for my organization?	<CustomerSegments />
// 08	Can we trust it?	<SecuritySection />
// 09	Will it fit into our current environment?	<IntegrationSection />
// 10	How do I learn more?	<ComparisonSection /> + <CallToActionSection />