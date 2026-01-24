'use client'

import { useState, useEffect } from 'react'

// ============ LOGO COMPONENT ============
const Logo = ({ width = 280, color = "#E07850", glow = false }: { width?: number, color?: string, glow?: boolean }) => (
  <svg 
    viewBox="0 0 207 50" 
    width={width} 
    height={width * 0.222}
    fill="none" 
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
style={{
      filter: glow 
        ? `drop-shadow(0 0 6px ${color}90) drop-shadow(0 0 20px ${color}50) drop-shadow(0 0 35px ${color}25)` 
        : 'none'
    }}
  >
    <path d="M 5 2 L 35 2" />
    <path d="M 5 25 L 28 25" />
    <path d="M 5 48 L 35 48" />
    <path d="M 50 2 L 69 30 L 88 2" />
    <path d="M 50 12 L 50 48" />
    <path d="M 88 12 L 88 48" />
    <path d="M 105 2 L 105 48" />
    <path d="M 111 2 L 124 2 Q 136 2 136 13.5 Q 136 25 124 25 L 111 25" />
    <path d="M 111 25 L 127 25 Q 141 25 141 36.5 Q 141 48 127 48 L 111 48" />
    <path d="M 158 2 L 158 48" />
    <path d="M 164 2 L 179 2 Q 193 2 193 13.5 Q 193 25 179 25 L 164 25" />
    <path d="M 174 25 L 202 48" />
  </svg>
)

// ============ PURE BLACK EVERYWHERE ============
const BLACK = '#000000'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: BLACK,
      color: 'white',
      fontFamily: "'Poppins', 'Segoe UI', system-ui, sans-serif"
    }}>
      
      {/* ============ HERO SECTION ============ */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: BLACK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center'
      }}>
        {/* Coming Soon Badge */}
        <div style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s ease',
          marginBottom: '56px'
        }}>
          <span style={{
            fontSize: '10px',
            letterSpacing: '4px',
            color: '#57534e',
            textTransform: 'uppercase',
            padding: '8px 16px',
            border: '1px solid #292524',
            borderRadius: '20px'
          }}>
            Coming Soon
          </span>
        </div>

        {/* Logo with GLOW */}
        <div style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.15s',
          marginBottom: '20px'
        }}>
          <Logo width={420} glow />
        </div>

        {/* Secondary Tagline */}
        <p style={{
          fontSize: '16px',
          fontWeight: 300,
          color: 'white',
          letterSpacing: '2px',
          margin: '0 0 64px 0',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.25s'
        }}>
          The lasting glow.
        </p>

        {/* Primary Tagline */}
        <h1 style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: 300,
          color: '#E07850',
          margin: '0 0 20px 0',
          letterSpacing: '-0.5px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.35s'
        }}>
          Your formula, not theirs.
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '15px',
          color: '#78716c',
          maxWidth: '380px',
          lineHeight: 1.7,
          margin: '0 0 40px 0',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.45s'
        }}>
          Precision-dosed vitamins, tailored to you.<br />
          Join the waitlist for early access.
        </p>

        {/* Email Capture */}
        <div style={{
          width: '100%',
          maxWidth: '420px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.55s'
        }}>
          {!submitted ? (
            <>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    backgroundColor: BLACK,
                    border: '1px solid #292524',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={() => email && setSubmitted(true)}
                  style={{
                    padding: '16px 24px',
                    backgroundColor: '#E07850',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Join Waitlist
                </button>
              </div>
              <p style={{ fontSize: '12px', color: '#57534e', margin: 0 }}>
                No spam. Just updates on our launch.
              </p>
            </>
          ) : (
            <div style={{
              padding: '24px',
              backgroundColor: 'rgba(224, 120, 80, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(224, 120, 80, 0.25)'
            }}>
              <p style={{ color: '#E07850', fontSize: '18px', fontWeight: 500, margin: '0 0 6px 0' }}>
                You&apos;re in.
              </p>
              <p style={{ color: '#78716c', fontSize: '14px', margin: 0 }}>
                We&apos;ll let you know when we launch.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ VALUES SECTION ============ */}
      <section style={{ backgroundColor: BLACK, padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '4px',
            color: '#57534e',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '72px'
          }}>
            What We Believe
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '56px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '56px', fontWeight: 200, color: '#E07850', margin: '0 0 12px 0' }}>01</p>
              <h3 style={{ fontSize: '22px', fontWeight: 400, color: 'white', margin: '0 0 14px 0' }}>Transparency</h3>
              <p style={{ fontSize: '15px', color: '#78716c', lineHeight: 1.8, margin: 0 }}>Clear labels, real ingredients. Nothing hidden, nothing unnecessary.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '56px', fontWeight: 200, color: '#E07850', margin: '0 0 12px 0' }}>02</p>
              <h3 style={{ fontSize: '22px', fontWeight: 400, color: 'white', margin: '0 0 14px 0' }}>Precision</h3>
              <p style={{ fontSize: '15px', color: '#78716c', lineHeight: 1.8, margin: 0 }}>100-200% DV. No mega-doses. Your body gets what it needs.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '56px', fontWeight: 200, color: '#E07850', margin: '0 0 12px 0' }}>03</p>
              <h3 style={{ fontSize: '22px', fontWeight: 400, color: 'white', margin: '0 0 14px 0' }}>Evolution</h3>
              <p style={{ fontSize: '15px', color: '#78716c', lineHeight: 1.8, margin: 0 }}>Track, measure, adjust. Your formula grows with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section style={{ backgroundColor: BLACK, padding: '80px 24px', textAlign: 'center' }}>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 26px)',
          fontWeight: 300,
          color: '#a8a29e',
          lineHeight: 1.6,
          maxWidth: '480px',
          margin: '0 auto 32px auto'
        }}>
          No mega-doses. No hidden formulas.<br />
          <span style={{ color: 'white' }}>Just results.</span>
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#292524' }} />
          <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#57534e', textTransform: 'uppercase' }}>
            myembr.ca
          </span>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#292524' }} />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ backgroundColor: BLACK, borderTop: '1px solid #292524', padding: '28px 24px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <Logo width={60} />
          <p style={{ fontSize: '11px', color: '#57534e', margin: 0 }}>
            © 2025 EMBR. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}