import ZyvorisHero from '@/components/hero'
import HomeCapabilities from '@/components/home-capabilities'
import CustomerSegments from '@/components/customer-segments'
import FinalCTA from '@/components/final-cta'

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 1. Hero: Centered with Aceternity Chromatic Image interactive background effect */}
      <ZyvorisHero />

      {/* 2. Core Capabilities: 3D interactive multi-stage scroll showcase */}
      <HomeCapabilities />

      {/* 3. Customer Segments: Photo showcase for teams responsible for fund tax reporting */}
      <CustomerSegments />

      {/* 4. Final Call to Action */}
      <FinalCTA />
    </main>
  )
}