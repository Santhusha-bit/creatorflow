import { BoltIcon, BackIcon } from '../App'
import { useState } from 'react'

export default function Privacy({ onBack }) {
  // Keep everything static for deployment simplicity.
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
        <span style={{ fontSize: 12.5, color: 'var(--ink4)', fontWeight: 600 }}>Privacy Policy</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '28px 24px 60px' }}>
        <section className="card" style={{ padding: 24 }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 600, letterSpacing: '-.02em', marginBottom: 10 }}>Privacy Policy</h1>
          <p style={{ color: 'var(--ink4)', fontSize: 12.5, marginBottom: 18 }}>
            Effective date: <b>{effectiveDate}</b>
          </p>

          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 14 }}>
            This Privacy Policy describes how Creatorflow (“we”, “us”) collects, uses, and shares information when you use our AI-powered content pipeline (the “Service”).
          </p>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 22 }}>
            Please note: this is not legal advice. You should have your policies reviewed before going live.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>1. Information We Collect</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We collect information you provide to the Service, such as the inputs you enter into forms (for example, your prompts, niche, product details, and other text you submit).
          </p>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We may also collect basic technical information automatically, such as IP address, browser type, pages viewed, and approximate location derived from IP address.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>2. How We Use Information</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We use your information to provide, maintain, and improve the Service; to generate outputs; to respond to your requests; and to monitor for abuse or security issues.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>3. Anthropic (AI Model) Processing</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            When you submit prompts, we send that content to Anthropic’s API to generate responses. Anthropic is a third-party processor, and its handling of data is governed by its own policies.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>4. Data Sharing</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We do not sell your personal information. We may share information with service providers that help us operate the Service (for example, hosting and security providers) and with Anthropic as described above.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>5. Cookies and Similar Technologies</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We may use cookies or similar technologies to operate the Service and remember preferences. You can control cookies via your browser settings.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>6. Security</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            We take reasonable measures to protect information from unauthorized access. However, no method of transmission or storage is 100% secure.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>7. Your Choices</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 10 }}>
            You can contact us to request access, correction, or deletion of your information where applicable.
          </p>

          <h2 style={{ fontSize: 14, marginTop: 18, marginBottom: 6 }}>8. Changes to This Policy</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 0 }}>
            We may update this Privacy Policy from time to time. The “Effective date” will reflect the latest updates.
          </p>

          <div style={{ height: 18 }} />

          <p style={{ lineHeight: 1.75, color: 'var(--ink4)', fontSize: 12.5 }}>
            Contact: <b>support@creatorflow.com</b>
          </p>
        </section>
      </main>
    </div>
  )
}

