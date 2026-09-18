import ZyvorisHero from '@/components/hero'
import ProblemSection from '@/components/problem'
import SolutionsSection from '@/components/solutions'
import ProductWorkspaces from '@/components/product-workspaces'
import HomeCapabilities from '@/components/home-capabilities'
import CustomerSegments from '@/components/customer-segments'
import Jurisdictions from '@/components/jurisdictions'
import FinalCTA from '@/components/final-cta'

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 1. Hero: Valim typography and interactive pipeline stages */}
      <ZyvorisHero />

      {/* 2. Problem statement: Private markets scaled, tax infrastructure has not */}
      <ProblemSection />

      {/* 3. How ZYVORIS Works: One controlled workflow from fund data to tax reporting */}
      <SolutionsSection />

      {/* 4. Product Workspaces: Clean product screenshots without floating buttons */}
      <ProductWorkspaces />

      {/* 5. Core Capabilities: Structured fund tax calculations & allocations */}
      <HomeCapabilities />

      {/* 6. Who It Is For: Fund managers, administrators, advisors, investors */}
      <CustomerSegments />

      {/* 7. Jurisdiction Roadmap: Switzerland, Germany, Austria, United States */}
      <Jurisdictions />

      {/* 8. Final Call to Action */}
      <FinalCTA />
    </main>
  )
}