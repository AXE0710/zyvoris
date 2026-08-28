import React from 'react'
import {
  ArrowRight,
  Check,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export default function ZyvorisHero({
  setDemoOpen = () => {},
}: {
  setDemoOpen?: (open: boolean) => void
}) {
  const colors = {
    bg: '#F8FAF8',
    white: '#FFFFFF',
    text: '#111713',
    muted: '#68716B',
    soft: '#E9ECE7',
    border: '#DDE2DC',
    accent: '#0C8B72',
    accentDark: '#076652',
    accentSoft: '#E5F4EF',
  }

  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        background: colors.bg,
        color: colors.text,
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '110px 24px 90px',
      }}
    >
      {/* =========================================================
          ANIMATED GIF BACKGROUND
      ========================================================== */}

        <div
        style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: "url('/background.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.22,
            pointerEvents: 'none',
        }}
        />

        {/* White gradient overlay */}
        <div
        style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
            'linear-gradient(90deg, rgba(248,250,248,0.96) 0%, rgba(248,250,248,0.82) 42%, rgba(248,250,248,0.35) 100%)',
            pointerEvents: 'none',
        }}
        />

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.35,
          backgroundImage: `
            linear-gradient(rgba(17,23,19,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,23,19,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, black, transparent 75%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black, transparent 75%)',
        }}
      />

      {/* =========================================================
          SOFT GLOW
      ========================================================== */}

      <div
        style={{
          position: 'absolute',
          width: '650px',
          height: '650px',
          right: '-180px',
          top: '-180px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(12,139,114,0.13), transparent 68%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        style={{
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(460px, 0.9fr)',
            gap: '70px',
            alignItems: 'center',
          }}
        >
          {/* =====================================================
              LEFT — HERO COPY
          ====================================================== */}

          <div
            style={{
              maxWidth: '690px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* KICKER */}

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '7px 12px',
                border: `1px solid ${colors.border}`,
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                marginBottom: '28px',
                fontSize: '12px',
                fontWeight: 650,
                letterSpacing: '0.04em',
                color: colors.muted,
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: colors.accent,
                  boxShadow: `0 0 0 4px ${colors.accentSoft}`,
                }}
              />

              TAX OPERATIONS, AUTOMATED
            </div>

            {/* HEADLINE */}

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(3.3rem, 6vw, 6.3rem)',
                lineHeight: 0.94,
                letterSpacing: '-0.065em',
                fontWeight: 700,
                maxWidth: '760px',
              }}
            >
              Turn complex fund data into{' '}
              <span
                style={{
                  color: colors.accent,
                  fontStyle: 'italic',
                  fontWeight: 500,
                }}
              >
                clear tax reporting.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              style={{
                margin: '30px 0 0',
                maxWidth: '570px',
                fontSize: '17px',
                lineHeight: 1.65,
                color: colors.muted,
                letterSpacing: '-0.01em',
              }}
            >
              Zyvoris automates fund-level and share-class tax calculations,
              transforms complex financial data into structured outputs, and
              keeps every result traceable from source to report.
            </p>

            {/* CTA */}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginTop: '34px',
              }}
            >
              <button
                onClick={() => setDemoOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 21px 15px 23px',
                  borderRadius: '8px',
                  border: 'none',
                  background: colors.text,
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 650,
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(17,23,19,0.14)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow =
                    '0 16px 36px rgba(17,23,19,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow =
                    '0 12px 30px rgba(17,23,19,0.14)'
                }}
              >
                See how it works
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setDemoOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '15px 18px',
                  borderRadius: '8px',
                  border: `1px solid ${colors.border}`,
                  background: 'rgba(255,255,255,0.72)',
                  color: colors.text,
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <Sparkles size={15} color={colors.accent} />
                Interactive demo
              </button>
            </div>

            {/* TRUST ROW */}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '18px',
                marginTop: '34px',
                paddingTop: '24px',
                borderTop: `1px solid ${colors.border}`,
                width: '100%',
              }}
            >
              {[
                'Automated calculations',
                'Traceable outputs',
                'Multi-currency ready',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    color: colors.muted,
                    fontSize: '12px',
                    fontWeight: 550,
                  }}
                >
                  <Check size={14} color={colors.accent} strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT — 3D ENGINE VISUAL
          ====================================================== */}

          <div
            style={{
              position: 'relative',
              minHeight: '590px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '1200px',
            }}
          >
            {/* ORBIT */}

            <div
              style={{
                position: 'absolute',
                width: '470px',
                height: '470px',
                borderRadius: '50%',
                border: '1px solid rgba(12,139,114,0.13)',
                transform: 'rotateX(67deg) rotateZ(-12deg)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                border: '1px dashed rgba(12,139,114,0.18)',
                transform: 'rotateX(67deg) rotateZ(28deg)',
              }}
            />

            {/* GLOW */}

            <div
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(12,139,114,0.2), transparent 68%)',
                filter: 'blur(20px)',
              }}
            />

            {/* MAIN 3D OBJECT */}

            <div
              style={{
                width: '255px',
                height: '255px',
                position: 'relative',
                transform:
                  'rotateX(58deg) rotateZ(-45deg) rotateY(8deg)',
                transformStyle: 'preserve-3d',
                animation: 'zyvorisFloat 6s ease-in-out infinite',
              }}
            >
              {/* TOP */}

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '28px',
                  background:
                    'linear-gradient(145deg, #FFFFFF 0%, #EAF5F1 100%)',
                  border: '1px solid rgba(12,139,114,0.22)',
                  boxShadow:
                    '25px 25px 60px rgba(17,23,19,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
                  transform: 'translateZ(42px)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '25px',
                    left: '25px',
                    right: '25px',
                    height: '6px',
                    borderRadius: '999px',
                    background: colors.accent,
                    opacity: 0.85,
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '58px',
                    left: '25px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: colors.muted,
                  }}
                >
                  ZYVORIS ENGINE
                </div>

                <div
                  style={{
                    position: 'absolute',
                    left: '25px',
                    bottom: '27px',
                    fontSize: '38px',
                    fontWeight: 700,
                    letterSpacing: '-0.05em',
                    color: colors.text,
                  }}
                >
                  TAX
                </div>
              </div>

              {/* SIDE 1 */}

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '28px',
                  background: '#D9E5E0',
                  border: '1px solid rgba(12,139,114,0.15)',
                  transform: 'translateZ(0) translateY(42px)',
                }}
              />

              {/* SIDE 2 */}

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '28px',
                  background: '#C9D9D3',
                  border: '1px solid rgba(12,139,114,0.15)',
                  transform: 'translateZ(0) translateX(42px)',
                }}
              />
            </div>

            {/* FLOATING DATA CARD */}

            <div
              style={{
                position: 'absolute',
                top: '90px',
                right: '8px',
                width: '205px',
                padding: '16px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.82)',
                border: `1px solid ${colors.border}`,
                boxShadow: '0 18px 45px rgba(17,23,19,0.1)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                animation: 'zyvorisCardOne 5s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    color: colors.muted,
                    fontWeight: 650,
                    letterSpacing: '0.08em',
                  }}
                >
                  DATA INPUT
                </span>

                <div
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: colors.accent,
                    boxShadow: `0 0 0 4px ${colors.accentSoft}`,
                  }}
                />
              </div>

              <strong
                style={{
                  fontSize: '22px',
                  letterSpacing: '-0.04em',
                }}
              >
                12,482
              </strong>

              <div
                style={{
                  marginTop: '4px',
                  color: colors.muted,
                  fontSize: '11px',
                }}
              >
                financial data points
              </div>

              <div
                style={{
                  height: '4px',
                  borderRadius: '999px',
                  background: colors.soft,
                  marginTop: '14px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '82%',
                    height: '100%',
                    background: colors.accent,
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>

            {/* FLOATING OUTPUT CARD */}

            <div
              style={{
                position: 'absolute',
                bottom: '82px',
                left: '0px',
                width: '225px',
                padding: '17px',
                borderRadius: '14px',
                background: 'rgba(17,23,19,0.94)',
                color: '#fff',
                boxShadow: '0 22px 50px rgba(17,23,19,0.18)',
                animation: 'zyvorisCardTwo 6s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '13px',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(12,139,114,0.2)',
                  }}
                >
                  <FileCheck2 size={15} color="#6BD5BF" />
                </div>

                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 650,
                    letterSpacing: '0.08em',
                    color: '#A9B5AF',
                  }}
                >
                  VERIFIED OUTPUT
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '24px',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    100%
                  </strong>

                  <span
                    style={{
                      color: '#9AA69F',
                      fontSize: '11px',
                    }}
                  >
                    traceable calculation
                  </span>
                </div>

                <ShieldCheck size={24} color="#6BD5BF" />
              </div>
            </div>

            {/* SMALL FLOATING NODE */}

            <div
              style={{
                position: 'absolute',
                top: '185px',
                left: '40px',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: colors.white,
                border: `1px solid ${colors.border}`,
                boxShadow: '0 15px 35px rgba(17,23,19,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.accent,
                fontSize: '11px',
                fontWeight: 750,
              }}
            >
              FX
            </div>

            {/* LABEL */}

            <div
              style={{
                position: 'absolute',
                right: '25px',
                bottom: '30px',
                fontSize: '10px',
                color: colors.muted,
                letterSpacing: '0.1em',
                fontWeight: 650,
              }}
            >
              DATA → LOGIC → OUTPUT
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          style={{
            marginTop: '70px',
            paddingTop: '24px',
            borderTop: `1px solid ${colors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: colors.muted,
              fontWeight: 650,
            }}
          >
            ONE ENGINE. EVERY CALCULATION. FULL TRACEABILITY.
          </span>

          <span
            style={{
              fontSize: '12px',
              color: colors.muted,
            }}
          >
            Built for complex fund structures and digital assets.
          </span>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS + RESPONSIVE
      ========================================================== */}

      <style>{`
        @keyframes zyvorisFloat {
          0%, 100% {
            transform:
              rotateX(58deg)
              rotateZ(-45deg)
              rotateY(8deg)
              translateY(0);
          }

          50% {
            transform:
              rotateX(58deg)
              rotateZ(-45deg)
              rotateY(8deg)
              translateY(-14px);
          }
        }

        @keyframes zyvorisCardOne {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-9px) rotate(1deg);
          }
        }

        @keyframes zyvorisCardTwo {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @media (max-width: 1050px) {
          section#top > div > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          section#top h1 {
            font-size: clamp(3rem, 9vw, 5rem) !important;
          }

          section#top > div > div > div:nth-child(2) {
            min-height: 500px !important;
            margin-top: 10px;
          }
        }

        @media (max-width: 600px) {
          section#top {
            padding: 90px 18px 60px !important;
          }

          section#top > div > div > div:nth-child(2) {
            transform: scale(0.82);
            transform-origin: center;
            margin: -40px 0 -50px;
          }

          section#top p {
            font-size: 15px !important;
          }

          section#top button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}