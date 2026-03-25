import { BoltIcon, BackIcon } from '../App'
import { useState } from 'react'

export default function Terms({ onBack }) {
  const [effectiveDate] = useState('2026-03-25')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(248,246,242,.94)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(0,0,0,.07)',
          padding: '0 28px',
          height: 58,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className="btn-ghost" onClick={onBack} style={{ gap: 4 }}>
            <BackIcon />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                background: 'var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <BoltIcon />
            </div>
            <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)' }}>Creatorflow</span>
          </div>
        </div>
        <span style={{ fontSize: 12.5, color: 'var(--ink4)', fontWeight: 600 }}>Terms of Service</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '28px 24px 60px' }}>
        <section className="card" style={{ padding: 24 }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 600, letterSpacing: '-.02em', marginBottom: 10 }}>Terms of Service</h1>
          <p style={{ color: 'var(--ink4)', fontSize: 12.5, marginBottom: 18 }}>
            Effective date: <b>{effectiveDate}</b>
          </p>

          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 14 }}>
            These Terms describe the rules for using Creatorflow’s website and AI-powered content pipeline (the “Service”).
          </p>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 22 }}>
            Please note: this is not legal advice. You should have these Terms reviewed before relying on them.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>1. Acceptance</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            By using the Service, you agree to these Terms. If you do not agree, do not use the Service.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>2. Your Content</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            You are responsible for the text and information you submit. Do not submit content that infringes others or violates applicable laws.
          </p>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We may process your submissions to generate outputs. Outputs may be based on your prompts and may not always be accurate.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>3. AI Outputs</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            AI-generated content is provided “as is”. You should review and edit outputs before publishing.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>4. Availability and Changes</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We may modify or discontinue the Service at any time. We are not liable for interruptions or changes.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>5. Beta / Pricing</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            The Service may be free during beta. Any future pricing or paid plans will be disclosed separately.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>6. Prohibited Use</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 0 }}>
            You may not misuse the Service, attempt to disrupt it, or use it for unlawful purposes.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>7. Limitation of Liability</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 0 }}>
            To the maximum extent permitted by law, Creatorflow is not liable for indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service.
          </p>

          <div style={{ height: 18 }} />
          <p style={{ lineHeight: 1.75, color: 'var(--ink4)', fontSize: 12.5, margin: 0 }}>
            Contact: <b>support@creatorflow.com</b>
          </p>
        </section>
      </main>
    </div>
  )
}

