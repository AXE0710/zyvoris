import ZyvorisHero from '@/components/hero'
import ProblemSection from '@/components/problem'
import SolutionsSection from '@/components/solutions'
import Jurisdictions from '@/components/jurisdictions'
import ProductWorkspaces from '@/components/product-workspaces'
import BusinessOutcomes from '@/components/business-outcomes'
import AISection from '@/components/ai'
import VerificationSection from '@/components/verify'
import UseCasesSection from '@/components/use-cases'
import CustomerSegments from '@/components/customer-segments'
import IntegrationSection from '@/components/integration'
import SecuritySection from '@/components/security'
import TeamSection from '@/components/team-section'

export default function HomePage() {
  return (
    <>
      {/* 1 & 2. Hero & Trusted positioning / short product statement */}
      <ZyvorisHero />

      {/* 3. Problem statement */}
      <ProblemSection />

      {/* 4. ZYVORIS architecture / process */}
      <SolutionsSection />

      {/* 5. What ZYVORIS Does Today & Jurisdiction coverage (CH MVP, DE, AT, US) */}
      <Jurisdictions />

      {/* 6. Product UI (6 interactive workspaces) */}
      <ProductWorkspaces />

      {/* 7. Business outcomes (From Manual Operations to Controlled Execution) */}
      <BusinessOutcomes />

      {/* 8. Technology architecture (AI Layer -> Deterministic Engine -> Human Review) */}
      <AISection />

      {/* 9 & 12. Calculation Lineage & Human review / audit control */}
      <VerificationSection />

      {/* 10. Use cases */}
      <UseCasesSection />

      {/* 11. Customer segments (Fund Managers, Administrators, Tax Firms, Investors) */}
      <CustomerSegments />

      {/* API-First Integration Layer (Fund Accounting, Admins, Portals, Infrastructure) */}
      <IntegrationSection />

      {/* 13. Security / enterprise readiness (17 controls & architecture topics) */}
      <SecuritySection />

      {/* 14. Team (Founders & Leadership) */}
      <TeamSection />
    </>
  )
}