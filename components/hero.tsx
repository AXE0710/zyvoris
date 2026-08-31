
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
  const [activeStage, setActiveStage] = useState<number | null>(3)

  return (
    <section id="top" className="zyvoris-hero">

      {/* Background */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">

        <div className="hero-layout">

          {/* =====================================================
              LEFT — HERO COPY
          ====================================================== */}

          <div className="hero-copy">

            <div className="hero-kicker">
              <span className="kicker-line" />
              <span>TAX INFRASTRUCTURE FOR PRIVATE MARKETS</span>
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

            {/* Actions */}
            <div className="hero-actions">

              <button
                type="button"
                className="hero-primary-btn"
                onClick={() => setDemoOpen(true)}
              >
                <span>Book a Demo</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
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

            {/* Proof */}
            <div className="hero-proof">

              <div className="proof-item">
                <ShieldCheck size={15} />
                <span>Controlled calculations</span>
              </div>

              <div className="proof-item">
                <Network size={15} />
                <span>Source-to-output traceability</span>
              </div>

              <div className="proof-item">
                <Scale size={15} />
                <span>Multi-jurisdiction architecture</span>
              </div>

              <div className="proof-item">
                <FileCheck2 size={15} />
                <span>Human oversight</span>
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT — INFRASTRUCTURE VISUAL
          ====================================================== */}

          <div className="hero-visual">

            <div className="visual-header">

              <div className="visual-title-wrap">
                <span className="visual-label">
                  ZYVORIS PIPELINE
                </span>

                <span className="visual-sublabel">
                  End-to-End Control Layer
                </span>
              </div>

              <div className="visual-status">
                <span className="status-dot" />
                DETERMINISTIC WORKFLOW
              </div>

            </div>

            {/* Workflow */}
            <div className="workflow">

              {STAGES.map((stage, idx) => {
                const Icon = stage.icon

                const isActive = activeStage === idx

                const isConnected =
                  activeStage !== null &&
                  Math.abs(activeStage - idx) <= 1

                return (
                  <React.Fragment key={stage.id}>

                    <div
                      className={[
                        'workflow-node',
                        stage.featured ? 'featured' : '',
                        isActive ? 'active' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onMouseEnter={() => setActiveStage(idx)}
                    >

                      <div className="node-left">

                        <div className="node-icon">
                          <Icon size={17} />
                        </div>

                        <div className="node-content">

                          <div className="node-meta">
                            <span className="node-number">
                              {stage.id}
                            </span>

                            {stage.featured && (
                              <span className="node-badge">
                                CORE ENGINE
                              </span>
                            )}
                          </div>

                          <h3>{stage.title}</h3>

                          <p>{stage.desc}</p>

                        </div>
                      </div>

                      <div className="node-tags">
                        {stage.tags.map((tag) => (
                          <span
                            key={tag}
                            className="node-tag"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Connector */}
                    {idx < STAGES.length - 1 && (
                      <div
                        className={[
                          'workflow-connector',
                          isConnected ? 'active' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <div className="connector-line" />
                        <div className="connector-pulse" />
                        <ArrowDown
                          size={11}
                          className="connector-arrow"
                        />
                      </div>
                    )}

                  </React.Fragment>
                )
              })}

            </div>

            {/* Workflow footer */}
            <div className="visual-footer">

              <div className="footer-step">
                <CheckCircle2 size={12} />
                <span>DATA</span>
              </div>

              <span className="footer-divider">→</span>

              <div className="footer-step">
                <CheckCircle2 size={12} />
                <span>STRUCTURE</span>
              </div>

              <span className="footer-divider">→</span>

              <div className="footer-step">
                <CheckCircle2 size={12} />
                <span>LOGIC</span>
              </div>

              <span className="footer-divider">→</span>

              <div className="footer-step">
                <CheckCircle2 size={12} />
                <span>CALCULATION</span>
              </div>

              <span className="footer-divider">→</span>

              <div className="footer-step">
                <CheckCircle2 size={12} />
                <span>REPORTING</span>
              </div>

            </div>

            {/* Decorative elements */}
            <div className="architecture architecture-one" />
            <div className="architecture architecture-two" />

          </div>

        </div>

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <div className="hero-bottom">

          <div className="bottom-item">
            <span className="bottom-dot" />
            ONE INFRASTRUCTURE LAYER
          </div>

          <div className="bottom-item">
            COMPLEX FUND STRUCTURES
          </div>

          <div className="bottom-item">
            CROSS-BORDER TAX REPORTING
          </div>

          <div className="bottom-arrow">
            <ArrowRight size={14} />
          </div>

        </div>

      </div>

      <style>{`

        /* =====================================================
           BASE
        ====================================================== */

        .zyvoris-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              #fbfcfe 0%,
              #ffffff 100%
            );

          color: #10162b;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;

          padding:
            clamp(120px, 13vh, 160px)
            5vw
            64px;
        }

        /* =====================================================
           BACKGROUND
        ====================================================== */

        .hero-grid {
          position: absolute;
          inset: 0;

          pointer-events: none;

          opacity: 0.55;

          background-image:
            linear-gradient(
              rgba(24, 53, 104, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(24, 53, 104, 0.035) 1px,
              transparent 1px
            );

          background-size: 72px 72px;

          mask-image:
            linear-gradient(
              to bottom,
              black 0%,
              black 48%,
              transparent 92%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              black 0%,
              black 48%,
              transparent 92%
            );
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }

        .hero-glow-one {
          width: 560px;
          height: 560px;

          right: -180px;
          top: -80px;

          background:
            radial-gradient(
              circle,
              rgba(54, 103, 239, 0.075),
              transparent 68%
            );
        }

        .hero-glow-two {
          width: 420px;
          height: 420px;

          left: -180px;
          bottom: -140px;

          background:
            radial-gradient(
              circle,
              rgba(54, 103, 239, 0.045),
              transparent 68%
            );
        }

        /* =====================================================
           CONTAINER
        ====================================================== */

        .hero-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1440px;

          margin: 0 auto;
        }

        .hero-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 0.88fr)
            minmax(560px, 1.12fr);

          gap: clamp(48px, 5.5vw, 88px);

          align-items: center;
        }

        /* =====================================================
           LEFT COPY
        ====================================================== */

        .hero-copy {
          max-width: 690px;
        }

        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 24px;

          color: #2861df;

          font-size: 10px;
          font-weight: 750;

          letter-spacing: 0.16em;
        }

        .kicker-line {
          width: 26px;
          height: 1px;

          background: #2861df;
        }

        .hero-copy h1 {
          margin: 0;

          max-width: 700px;

          font-size:
            clamp(
              3.15rem,
              4.5vw,
              5.1rem
            );

          line-height: 0.99;

          letter-spacing: -0.052em;

          font-weight: 650;

          color: #09132f;
        }

        .hero-copy h1 span {
          color: #2861df;
        }

        .hero-description {
          max-width: 590px;

          margin: 27px 0 0;

          color: #59657a;

          font-size: 16px;

          line-height: 1.68;

          letter-spacing: -0.01em;
        }

        /* =====================================================
           ACTIONS
        ====================================================== */

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 11px;

          margin-top: 32px;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          height: 48px;

          padding: 0 20px;

          border-radius: 8px;

          font-family: inherit;

          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 180ms ease,
            background 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .hero-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          border: 1px solid #2861df;

          background: #2861df;

          color: #ffffff;

          box-shadow:
            0 8px 22px
            rgba(40, 97, 223, 0.16);
        }

        .hero-primary-btn:hover {
          background: #1f53c9;

          transform: translateY(-1px);

          box-shadow:
            0 12px 28px
            rgba(40, 97, 223, 0.22);
        }

        .hero-secondary-btn {
          border: 1px solid #d8dee8;

          background: rgba(255, 255, 255, 0.8);

          color: #172136;
        }

        .hero-secondary-btn:hover {
          border-color: #bdc8d8;

          background: #ffffff;

          transform: translateY(-1px);
        }

        /* =====================================================
           PROOF
        ====================================================== */

        .hero-proof {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 15px 23px;

          margin-top: 38px;

          padding-top: 22px;

          border-top: 1px solid #e5e9f0;
        }

        .proof-item {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #667287;

          font-size: 10.5px;
          font-weight: 600;

          letter-spacing: -0.005em;
        }

        .proof-item svg {
          flex-shrink: 0;
          color: #2861df;
        }

        /* =====================================================
           VISUAL
        ====================================================== */

        .hero-visual {
          position: relative;

          padding: 24px;

          overflow: hidden;

          border: 1px solid #e1e6ef;

          border-radius: 18px;

          background:
            rgba(255, 255, 255, 0.92);

          backdrop-filter: blur(14px);

          box-shadow:
            0 24px 70px
            rgba(15, 30, 60, 0.055),
            inset 0 1px 0
            rgba(255, 255, 255, 0.95);
        }

        .visual-header {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding:
            2px
            2px
            16px;

          border-bottom: 1px solid #edf0f5;
        }

        .visual-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .visual-label {
          color: #111827;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.13em;
        }

        .visual-sublabel {
          color: #8993a5;

          font-size: 9px;
        }

        .visual-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 5px 9px;

          border: 1px solid #dce7fa;

          border-radius: 999px;

          background: #f5f8ff;

          color: #2861df;

          font-size: 8px;
          font-weight: 750;

          letter-spacing: 0.065em;

          white-space: nowrap;
        }

        .status-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #2861df;

          box-shadow:
            0 0 0 3px
            rgba(40, 97, 223, 0.12);
        }

        /* =====================================================
           WORKFLOW
        ====================================================== */

        .workflow {
          position: relative;
          z-index: 2;

          display: flex;
          flex-direction: column;

          margin-top: 16px;
        }

        .workflow-node {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          min-height: 66px;

          padding: 11px 13px;

          border: 1px solid #e7ebf2;

          border-radius: 10px;

          background: #ffffff;

          cursor: pointer;

          transition:
            transform 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
        }

        .workflow-node:hover,
        .workflow-node.active {
          border-color: #b9cdf4;

          background: #fcfdff;

          transform: translateX(2px);

          box-shadow:
            0 8px 24px
            rgba(40, 97, 223, 0.07);
        }

        .workflow-node.featured {
          border-color: #c8d8f6;

          background:
            linear-gradient(
              100deg,
              #f5f8ff 0%,
              #ffffff 100%
            );
        }

        .workflow-node.featured.active {
          border-color: #2861df;

          background: #ffffff;
        }

        .node-left {
          display: flex;
          align-items: center;

          min-width: 0;

          gap: 13px;
        }

        .node-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 37px;
          height: 37px;

          flex-shrink: 0;

          border: 1px solid #e0e7f2;

          border-radius: 9px;

          background: #f4f7fc;

          color: #2861df;

          transition:
            background 180ms ease,
            color 180ms ease,
            border-color 180ms ease;
        }

        .workflow-node.active .node-icon {
          border-color: #2861df;

          background: #2861df;

          color: #ffffff;
        }

        .node-content {
          min-width: 0;

          display: flex;
          flex-direction: column;
        }

        .node-meta {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .node-number {
          color: #a1aabb;

          font-size: 8px;
          font-weight: 800;

          letter-spacing: 0.05em;
        }

        .node-badge {
          padding: 2px 5px;

          border-radius: 4px;

          background: #edf3ff;

          color: #2861df;

          font-size: 7px;
          font-weight: 800;

          letter-spacing: 0.055em;
        }

        .node-content h3 {
          margin: 2px 0 0;

          color: #111a2e;

          font-size: 12.5px;
          font-weight: 650;

          line-height: 1.25;
        }

        .node-content p {
          margin: 3px 0 0;

          color: #758096;

          font-size: 10px;

          line-height: 1.35;
        }

        .node-tags {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          flex-shrink: 0;

          gap: 5px;
        }

        .node-tag {
          padding: 4px 7px;

          border: 1px solid #edf0f4;

          border-radius: 5px;

          background: #f8fafc;

          color: #687489;

          font-size: 8px;
          font-weight: 500;

          white-space: nowrap;
        }

        /* =====================================================
           CONNECTORS
        ====================================================== */

        .workflow-connector {
          position: relative;

          height: 17px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connector-line {
          position: absolute;

          width: 1px;
          height: 100%;

          background: #e3e8f0;
        }

        .workflow-connector.active .connector-line {
          background: #a9c3f4;
        }

        .connector-arrow {
          position: absolute;

          bottom: -1px;

          color: #c9d1dd;

          background: #ffffff;
        }

        .workflow-connector.active .connector-arrow {
          color: #2861df;
        }

        .connector-pulse {
          position: absolute;

          width: 3px;
          height: 5px;

          border-radius: 4px;

          background: #2861df;

          opacity: 0;

          animation:
            pulseDown 2.2s
            infinite
            ease-in-out;
        }

        @keyframes pulseDown {
          0% {
            top: 0;
            opacity: 0;
          }

          35% {
            opacity: 1;
          }

          70% {
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
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 15px;
          padding-top: 13px;

          border-top: 1px solid #edf0f5;
        }

        .footer-step {
          display: flex;
          align-items: center;
          gap: 4px;

          color: #69758a;

          font-size: 8px;
          font-weight: 750;

          letter-spacing: 0.055em;
        }

        .footer-step svg {
          color: #2861df;
        }

        .footer-divider {
          color: #cbd3df;

          font-size: 9px;
        }

        /* =====================================================
           ARCHITECTURE
        ====================================================== */

        .architecture {
          position: absolute;

          pointer-events: none;

          border: 1px solid
            rgba(40, 97, 223, 0.055);

          transform: rotate(45deg);
        }

        .architecture-one {
          width: 220px;
          height: 220px;

          right: -120px;
          top: 110px;
        }

        .architecture-two {
          width: 150px;
          height: 150px;

          left: -90px;
          bottom: 30px;
        }

        /* =====================================================
           BOTTOM STRIP
        ====================================================== */

        .hero-bottom {
          display: flex;
          align-items: center;

          gap: 30px;

          margin-top: 45px;
          padding-top: 19px;

          border-top: 1px solid #e3e8f0;

          color: #748096;

          font-size: 9px;
          font-weight: 750;

          letter-spacing: 0.085em;
        }

        .bottom-item {
          display: flex;
          align-items: center;
          gap: 7px;

          white-space: nowrap;
        }

        .bottom-dot {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #2861df;
        }

        .bottom-arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 29px;
          height: 29px;

          margin-left: auto;

          border: 1px solid #d2d9e4;

          border-radius: 50%;

          color: #2861df;

          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .bottom-arrow:hover {
          border-color: #aebddd;

          background: #f5f8ff;

          transform: translateX(2px);
        }

        /* =====================================================
           1180px
        ====================================================== */

        @media (max-width: 1180px) {

          .zyvoris-hero {
            padding-top: 125px;
          }

          .hero-layout {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .hero-copy {
            max-width: 800px;
          }

          .hero-visual {
            width: 100%;
            max-width: 850px;

            margin: 0 auto;
          }

        }

        /* =====================================================
           768px
        ====================================================== */

        @media (max-width: 768px) {

          .zyvoris-hero {
            padding:
              110px
              5vw
              45px;
          }

          .hero-copy h1 {
            font-size:
              clamp(
                2.75rem,
                9vw,
                4rem
              );
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-proof {
            gap: 13px 18px;
          }

          .workflow-node {
            min-height: 62px;

            padding:
              10px 11px;
          }

          .node-tags {
            display: none;
          }

          .visual-footer {
            flex-wrap: wrap;
            justify-content: flex-start;

            gap: 8px 14px;
          }

          .footer-divider {
            display: none;
          }

          .hero-bottom {
            flex-wrap: wrap;

            gap: 13px 22px;
          }

        }

        /* =====================================================
           640px
        ====================================================== */

        @media (max-width: 640px) {

          .zyvoris-hero {
            min-height: auto;

            padding:
              105px
              20px
              40px;
          }

          .hero-kicker {
            margin-bottom: 18px;

            font-size: 8.5px;

            letter-spacing: 0.13em;
          }

          .kicker-line {
            width: 20px;
          }

          .hero-copy h1 {
            font-size: 2.75rem;

            line-height: 1.01;

            letter-spacing: -0.045em;
          }

          .hero-description {
            margin-top: 20px;

            font-size: 14px;

            line-height: 1.65;
          }

          .hero-actions {
            flex-direction: column;

            align-items: stretch;

            margin-top: 27px;
          }

          .hero-primary-btn,
          .hero-secondary-btn {
            width: 100%;
          }

          .hero-proof {
            margin-top: 30px;

            padding-top: 19px;

            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 13px;
          }

          .proof-item {
            font-size: 9.5px;
          }

          .hero-visual {
            padding: 15px;

            border-radius: 14px;
          }

          .visual-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 10px;
          }

          .visual-status {
            font-size: 7px;
          }

          .workflow-node {
            min-height: 61px;

            border-radius: 9px;
          }

          .node-icon {
            width: 34px;
            height: 34px;

            border-radius: 8px;
          }

          .node-content h3 {
            font-size: 11px;
          }

          .node-content p {
            font-size: 9px;
          }

          .visual-footer {
            display: grid;

            grid-template-columns:
              repeat(3, 1fr);

            gap: 9px;

            padding-top: 12px;
          }

          .footer-step {
            font-size: 7px;
          }

          .hero-bottom {
            margin-top: 32px;

            flex-direction: column;

            align-items: flex-start;

            gap: 11px;
          }

          .bottom-arrow {
            display: none;
          }

        }

      `}</style>
    </section>
  )
}

