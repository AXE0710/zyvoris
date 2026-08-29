'use client'

import React, { useState } from 'react'
import {
  ArrowRight,
  Database,
  Network,
  Scale,
  Calculator,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowDown,
} from 'lucide-react'

const STAGES = [
  {
    id: '01',
    title: 'Source Data Ingestion',
    desc: 'Financial, portfolio & transaction feeds',
    tags: ['Raw Extracts', 'ERP Sync', 'GL Data'],
    icon: Database,
  },
  {
    id: '02',
    title: 'Entity & Structure Mapping',
    desc: 'Multi-tier fund, GP/LP & holding graphs',
    tags: ['Ownership %', 'Jurisdictions', 'Look-Through'],
    icon: Network,
  },
  {
    id: '03',
    title: 'Tax Logic Engine',
    desc: 'Cross-border tax rules & treaties',
    tags: ['WHT Treaties', 'Pillar Two', 'Local Code'],
    icon: Scale,
  },
  {
    id: '04',
    title: 'Deterministic Calculation',
    desc: 'Automated allocations & tax basis tracking',
    tags: ['Audit Logging', 'Versioned Rules'],
    icon: Calculator,
    featured: true,
  },
  {
    id: '05',
    title: 'Jurisdiction Reporting',
    desc: 'Filing-ready outputs & partner statements',
    tags: ['XML/PDF Output', 'Human Sign-off'],
    icon: FileCheck2,
  },
]

export default function ZyvorisHero({
  setDemoOpen = () => {},
}: {
  setDemoOpen?: (open: boolean) => void
}) {
  const [activeStage, setActiveStage] = useState<number | null>(3) // Default highlighted to Calculation Engine

  return (
    <section id="top" className="zyvoris-hero">
      {/* Background Grids & Ambient Glows */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        <div className="hero-layout">
          {/* =================================================
              LEFT — HERO COPY
          ================================================= */}
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="kicker-line" />
              TAX INFRASTRUCTURE FOR PRIVATE MARKETS
            </div>

            <h1>
              Turn complex fund data into{' '}
              <span>jurisdiction-ready tax reporting.</span>
            </h1>

            <p className="hero-description">
              ZYVORIS connects financial data, fund structures, tax logic,
              calculations, and reporting in one controlled infrastructure
              layer built for cross-border private markets.
            </p>

            <div className="hero-actions">
              <button
                className="hero-primary-btn"
                onClick={() => setDemoOpen(true)}
              >
                Book a Demo
                <ArrowRight size={16} />
              </button>

              <button
                className="hero-secondary-btn"
                onClick={() => {
                  document
                    .getElementById('platform')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore the Platform
              </button>
            </div>

            {/* Proof Badges */}
            <div className="hero-proof">
              <div className="proof-item">
                <ShieldCheck size={16} />
                <span>Controlled calculations</span>
              </div>
              <div className="proof-item">
                <Network size={16} />
                <span>Source-to-output traceability</span>
              </div>
              <div className="proof-item">
                <Scale size={16} />
                <span>Multi-jurisdiction architecture</span>
              </div>
              <div className="proof-item">
                <FileCheck2 size={16} />
                <span>Human oversight</span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — ENHANCED INFRASTRUCTURE DIAGRAM
          ================================================= */}
          <div className="hero-visual">
            {/* Visual Top Header */}
            <div className="visual-header">
              <div className="visual-title-wrap">
                <span className="visual-label">ZYVORIS PIPELINE</span>
                <span className="visual-sublabel">End-to-End Control Layer</span>
              </div>

              <div className="visual-status">
                <span className="status-dot" />
                DETERMINISTIC WORKFLOW
              </div>
            </div>

            {/* Interactive Workflow Diagram */}
            <div className="workflow">
              {STAGES.map((stage, idx) => {
                const Icon = stage.icon
                const isActive = activeStage === idx
                const isConnected =
                  activeStage !== null && Math.abs(activeStage - idx) <= 1

                return (
                  <React.Fragment key={stage.id}>
                    <div
                      className={`workflow-node ${stage.featured ? 'featured' : ''} ${
                        isActive ? 'active' : ''
                      }`}
                      onMouseEnter={() => setActiveStage(idx)}
                    >
                      <div className="node-left">
                        <div className="node-icon">
                          <Icon size={18} />
                        </div>
                        <div className="node-content">
                          <div className="node-meta">
                            <span className="node-number">{stage.id}</span>
                            {stage.featured && (
                              <span className="node-badge">CORE ENGINE</span>
                            )}
                          </div>
                          <h3>{stage.title}</h3>
                          <p>{stage.desc}</p>
                        </div>
                      </div>

                      {/* Micro Tags */}
                      <div className="node-tags">
                        {stage.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="node-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Connecting Line with Flow Animation */}
                    {idx < STAGES.length - 1 && (
                      <div
                        className={`workflow-connector ${
                          isConnected ? 'active' : ''
                        }`}
                      >
                        <div className="connector-line" />
                        <div className="connector-pulse" />
                        <ArrowDown size={12} className="connector-arrow" />
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            {/* Visual Footer Stage Summary */}
            <div className="visual-footer">
              <div className="footer-step">
                <CheckCircle2 size={12} className="check-icon" />
                <span>DATA</span>
              </div>
              <span className="footer-divider">→</span>
              <div className="footer-step">
                <CheckCircle2 size={12} className="check-icon" />
                <span>STRUCTURE</span>
              </div>
              <span className="footer-divider">→</span>
              <div className="footer-step">
                <CheckCircle2 size={12} className="check-icon" />
                <span>LOGIC</span>
              </div>
              <span className="footer-divider">→</span>
              <div className="footer-step">
                <CheckCircle2 size={12} className="check-icon" />
                <span>CALCULATION</span>
              </div>
              <span className="footer-divider">→</span>
              <div className="footer-step">
                <CheckCircle2 size={12} className="check-icon" />
                <span>REPORTING</span>
              </div>
            </div>

            {/* Decorative Architectural Elements */}
            <div className="architecture architecture-one" />
            <div className="architecture architecture-two" />
          </div>
        </div>

        {/* Bottom Banner Statements */}
        <div className="hero-bottom">
          <div className="bottom-item">
            <span className="bottom-dot" />
            ONE INFRASTRUCTURE LAYER
          </div>
          <div className="bottom-item">COMPLEX FUND STRUCTURES</div>
          <div className="bottom-item">CROSS-BORDER TAX REPORTING</div>
          <div className="bottom-arrow">
            <ArrowRight size={15} />
          </div>
        </div>
      </div>

      <style>{`
        /* =====================================================
           HERO BASE & LAYOUT
        ====================================================== */
        .zyvoris-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #fbfcfe;
          color: #10162b;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
          padding: 140px 5vw 60px;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.4;
          background-image:
            linear-gradient(rgba(24, 53, 104, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24, 53, 104, 0.04) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 95%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 95%);
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }

        .hero-glow-one {
          width: 550px;
          height: 550px;
          right: -150px;
          top: 0px;
          background: radial-gradient(circle, rgba(54, 103, 239, 0.08), transparent 65%);
        }

        .hero-glow-two {
          width: 400px;
          height: 400px;
          left: -150px;
          bottom: -100px;
          background: radial-gradient(circle, rgba(54, 103, 239, 0.05), transparent 65%);
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(520px, 1.1fr);
          gap: clamp(40px, 5vw, 80px);
          align-items: center;
        }

        /* =====================================================
           LEFT CONTENT
        ====================================================== */
        .hero-copy {
          max-width: 680px;
        }

        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          color: #2861df;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.14em;
        }

        .kicker-line {
          width: 24px;
          height: 1px;
          background: #2861df;
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(3.2rem, 4.8vw, 5.2rem);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 650;
          color: #0b132a;
        }

        .hero-copy h1 span {
          color: #2861df;
        }

        .hero-description {
          max-width: 580px;
          margin: 24px 0 0;
          color: #556075;
          font-size: 17px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          height: 48px;
          padding: 0 22px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #2861df;
          background: #2861df;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(40, 97, 223, 0.2);
        }

        .hero-primary-btn:hover {
          background: #1e52c8;
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(40, 97, 223, 0.28);
        }

        .hero-secondary-btn {
          border: 1px solid #d4dbe8;
          background: #ffffff;
          color: #172136;
        }

        .hero-secondary-btn:hover {
          border-color: #b0bdbe;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        .hero-proof {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px 24px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #e5e9f0;
        }

        .proof-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #616e85;
          font-size: 11px;
          font-weight: 600;
        }

        .proof-item svg {
          color: #2861df;
          flex-shrink: 0;
        }

        /* =====================================================
           RIGHT VISUAL — ARCHITECTURE CONTAINER
        ====================================================== */
        .hero-visual {
          position: relative;
          padding: 24px;
          border: 1px solid #e2e7f0;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          box-shadow:
            0 20px 50px rgba(15, 30, 60, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .visual-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #ecf0f6;
        }

        .visual-title-wrap {
          display: flex;
          flex-direction: column;
        }

        .visual-label {
          color: #111827;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .visual-sublabel {
          color: #717d93;
          font-size: 10px;
        }

        .visual-status {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #2861df;
          background: #f0f5ff;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.06em;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2861df;
          box-shadow: 0 0 0 3px rgba(40, 97, 223, 0.18);
        }

        /* =====================================================
           WORKFLOW NODES
        ====================================================== */
        .workflow {
          display: flex;
          flex-direction: column;
          gap: 0px;
          margin-top: 16px;
        }

        .workflow-node {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border: 1px solid #e6ebf3;
          border-radius: 12px;
          background: #ffffff;
          transition: all 0.25 ease;
          cursor: pointer;
        }

        .workflow-node:hover,
        .workflow-node.active {
          border-color: #2861df;
          box-shadow: 0 8px 20px rgba(40, 97, 223, 0.08);
          transform: scale(1.01);
        }

        .workflow-node.featured {
          background: linear-gradient(95deg, #f8fafc 0%, #ffffff 100%);
          border-color: #cbdcfc;
        }

        .workflow-node.featured.active,
        .workflow-node.featured:hover {
          border-color: #2861df;
          background: #ffffff;
        }

        .node-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .node-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #f1f5fd;
          color: #2861df;
          border: 1px solid #e1ebfa;
          flex-shrink: 0;
        }

        .workflow-node.active .node-icon {
          background: #2861df;
          color: #ffffff;
          border-color: #2861df;
        }

        .node-content {
          display: flex;
          flex-direction: column;
        }

        .node-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .node-number {
          color: #94a3b8;
          font-size: 9px;
          font-weight: 800;
        }

        .node-badge {
          font-size: 8px;
          font-weight: 800;
          color: #2861df;
          background: #eef4ff;
          padding: 1px 5px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .node-content h3 {
          margin: 1px 0 0;
          color: #0f172a;
          font-size: 13.5px;
          font-weight: 650;
        }

        .node-content p {
          margin: 1px 0 0;
          color: #64748b;
          font-size: 11px;
        }

        .node-tags {
          display: flex;
          gap: 6px;
        }

        .node-tag {
          font-size: 9.5px;
          color: #475569;
          background: #f1f5f9;
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 500;
          white-space: nowrap;
        }

        /* CONNECTORS & ANIMATED PULSE */
        .workflow-connector {
          position: relative;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connector-line {
          position: absolute;
          width: 1px;
          height: 100%;
          background: #e2e8f0;
        }

        .workflow-connector.active .connector-line {
          background: #93c5fd;
        }

        .connector-arrow {
          position: absolute;
          bottom: -2px;
          color: #cbd5e1;
        }

        .workflow-connector.active .connector-arrow {
          color: #2861df;
        }

        .connector-pulse {
          position: absolute;
          width: 3px;
          height: 6px;
          background: #2861df;
          border-radius: 3px;
          opacity: 0;
          animation: pulseDown 2s infinite ease-in-out;
        }

        @keyframes pulseDown {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        /* =====================================================
           VISUAL FOOTER
        ====================================================== */
        .visual-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid #ecf0f6;
        }

        .footer-step {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #475569;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.05em;
        }

        .check-icon {
          color: #2861df;
        }

        .footer-divider {
          color: #cbd5e1;
          font-size: 10px;
        }

        /* DECORATIVE BACKGROUND SQUARES */
        .architecture {
          position: absolute;
          pointer-events: none;
          border: 1px solid rgba(40, 97, 223, 0.06);
        }

        .architecture-one {
          width: 240px;
          height: 240px;
          right: -100px;
          top: 100px;
          transform: rotate(45deg);
        }

        .architecture-two {
          width: 160px;
          height: 160px;
          left: -80px;
          bottom: 40px;
          transform: rotate(45deg);
        }

        /* =====================================================
           BOTTOM BAR
        ====================================================== */
        .hero-bottom {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 48px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.08em;
        }

        .bottom-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bottom-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2861df;
        }

        .bottom-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          margin-left: auto;
          border: 1px solid #cbd5e1;
          border-radius: 50%;
          color: #2861df;
        }

        /* =====================================================
           RESPONSIVE BREAKPOINTS
        ====================================================== */
        @media (max-width: 1180px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-copy {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .node-tags {
            display: none;
          }
          .visual-footer {
            flex-wrap: wrap;
            gap: 8px;
          }
          .footer-divider {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .zyvoris-hero {
            padding-top: 110px;
          }
          .hero-primary-btn,
          .hero-secondary-btn {
            width: 100%;
            justify-content: center;
          }
          .hero-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .bottom-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}