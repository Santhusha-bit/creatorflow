import { BoltIcon, BackIcon } from '../App'
import { useMemo, useState } from 'react'

export default function Contact({ onBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const to = 'support@creatorflow.com'
    const subject = `Creatorflow contact${name ? ` - ${name}` : ''}`
    const body = [
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      ``,
      message || '',
    ].join('\n')
    const params = new URLSearchParams({
      subject,
      body,
    })
    return `mailto:${to}?${params.toString()}`
  }, [name, email, message])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's mail client. No backend needed.
    window.location.href = mailto
  }

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
        <span style={{ fontSize: 12.5, color: 'var(--ink4)', fontWeight: 600 }}>Contact</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '28px 24px 60px' }}>
        <section className="card" style={{ padding: 24 }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 600, letterSpacing: '-.02em', marginBottom: 10 }}>Contact Us</h1>
          <p style={{ lineHeight: 1.75, color: 'var(--ink3)', marginBottom: 18 }}>
            Send a message and we’ll get back to you. (This uses your email client via a `mailto:` link.)
          </p>

          <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="field-group" style={{ gridColumn: 'span 1' }}>
              <label>Your name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Maya Chen" />
            </div>
            <div className="field-group" style={{ gridColumn: 'span 1' }}>
              <label>Your email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. maya@email.com" />
            </div>
            <div className="field-group contact-span2" style={{ gridColumn: 'span 2' }}>
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What can we help with?"
                style={{
                  width: '100%',
                  minHeight: 120,
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1.5px solid var(--border)',
                  fontSize: 14,
                  color: 'var(--ink)',
                  background: 'var(--white)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <div className="contact-span2" style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <a
                href={mailto}
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  if (!message.trim()) {
                    e.preventDefault()
                    alert('Please type a message first.')
                  }
                }}
              >
                Open email client
              </a>
              <button type="submit" className="btn-primary" style={{ padding: '12px 22px' }}>
                Send message
              </button>
            </div>
          </form>

          <p style={{ color: 'var(--ink4)', fontSize: 12.5, marginTop: 14 }}>
            Or email: <b>support@creatorflow.com</b>
          </p>
        </section>
      </main>
    </div>
  )
}

