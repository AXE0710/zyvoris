'use client'

import ZyvorisHero from '@/components/hero'
import Header from '@/components/header'

import SolutionsSection from '@/components/solutions'
import VerificationSection from '@/components/verify'
import CallToActionSection from '@/components/calltoaction'
import ProblemSection from '@/components/problem'
import ComplexStructuresSection from '@/components/complex'

export default function Page() {
  return (
    <main>

      <Header />

      <ZyvorisHero />

      <ProblemSection />

      <SolutionsSection />

      <ComplexStructuresSection />

      <VerificationSection />

      <CallToActionSection />

    </main>
  )
}