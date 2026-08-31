import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Globe, Database, Cpu, Mail, Phone, MapPin, Users } from 'lucide-react'

// Company metrics & core highlights
const keyMetrics = [
  { label: 'Primary Target Market', value: '$14T+' },
  { label: 'Global Compliance Engines', value: 'US, DE, CH, UK, LU+' },
  { label: 'Target Launch Phase', value: '2027 MVP' },
  { label: 'Planned Legal Entity', value: 'Luxembourg' },
]

// Team members from Pitch Deck
const teamMembers = [
  {
    name: 'Mubashar Khan',
    role: 'Founder',
    experience: '12+ Years Experience',
    background: 'Ex-KPMG & Ex-Deloitte cross-border tax specialist in private equity, UCITS, and international regulatory workflows.',
    tag: 'Tax & Compliance',
  },
  {
    name: 'Aayush Kewat',
    role: 'Engineering & Infrastructure Architect',
    experience: 'AI & Data Infrastructure Expert',
    background: 'Specialized in scalable SaaS, distributed systems, automated data engineering, and machine learning platforms.',
    tag: 'Engineering & AI',
  },
]

// Core value pillars
const corePillars = [
  {
    icon: Database,
    title: 'Centralized Data Foundation',
    description: 'Creates a single source of truth for investors, fund entities, structures, allocations, and transaction data across jurisdictions.',
  },
  {
    icon: Globe,
    title: 'Multi-Jurisdictional Engine',
    description: 'Codified rule-based tax logic for Luxembourg, Switzerland, US, UK, Germany, and key fund domiciles.',
  },
  {
    icon: ShieldCheck,
    title: 'Embedded Compliance Workflows',
    description: 'Automated validations and outputs for PDF investor reports, K-1s, CRS, FATCA, and regulatory reporting.',
  },
  {
    icon: Cpu,
    title: 'Future-Ready Architecture',
    description: 'API-first platform designed to handle traditional private market funds as well as digital assets and tokenized vehicles.',
  },
]

export default function AboutPage() {
  return (
    <main className=" bg-slate-50 text-[#09132f] pt-28 pb-20">
 
      {/* Problem & Vision Section */}
      <section className="px-[5vw] py-16 bg-white border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Problem & Solution</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2 mb-4">
              Private Markets Infrastructure Was Never Built for Cross-Border Scale.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Today, fund managers and administrators rely on fragmented spreadsheets, manual tax calculations, and disconnected PDF reports. This causes high operational costs, errors, reporting delays, and regulatory compliance risks across jurisdictions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>ZYVORIS bridges this gap.</strong> We provide an API-first operating system that turns complex cross-border fund data into accurate, audit-ready, and automated outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="p-6 bg-slate-50 rounded-[16px] border border-slate-200">
                  <div className="p-3 w-fit rounded-[10px] bg-blue-50 text-blue-600 mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-base mb-1">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-normal">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

   
    </main>
  )
}