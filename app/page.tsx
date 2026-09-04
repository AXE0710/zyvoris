import ZyvorisHero from '@/components/hero'
import ProblemSection from '@/components/problem'
import SolutionsSection from '@/components/solutions'
import HomeCapabilities from '@/components/home-capabilities'
import CustomerSegments from '@/components/customer-segments'
import Jurisdictions from '@/components/jurisdictions'
import FinalCTA from '@/components/final-cta'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <ZyvorisHero />

      {/* 2. Problem statement */}
      <ProblemSection />

      {/* 3. How ZYVORIS Works */}
      <SolutionsSection />

      {/* 4. Core Capabilities (4 Cards) */}
      <HomeCapabilities />

      {/* 5. Who It Is For (4 Cards) */}
      <CustomerSegments />

      {/* 6. Jurisdiction Roadmap (4 Cards) */}
      <Jurisdictions />

      {/* 7. Final Call to Action */}
      <FinalCTA />
    </>
  )
}