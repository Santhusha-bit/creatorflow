import { useState } from 'react'
import { BoltIcon, ArrRight, PersonIcon, ShopIcon, BRAND_STEPS, PRODUCT_STEPS } from '../App'

export default function ModeSelector({ onSelect }) {
  const [hovered, setHovered] = useState(null)

  const brandFeatures   = ['Brand identity & content pillars', '30-day content calendars', 'Hook & caption writing', 'Community building sequences', 'Monetization roadmap']
  const productFeatures = ['Digital product ideation', 'Product outline builder', 'Sales carousel scripts', 'Story-selling Reel scripts', 'DM automation sequences']

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px', background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: 700, width: '100%', animation: 'fadeUp .5s cubic-bezier(.22,1,.36,1)' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, justifyContent: 'center', marginBottom: 52 }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <BoltIcon />
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)' }}>Creatorflow</span>
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 400, letterSpacing: '-.03em', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 16 }}>
            What are you building?
          </h1>
          <p style={{ fontSize: 16, color: 'var(--ink3)', lineHeight: 1.6, maxWidth: 440, margin: '0 auto' }}>
            Choose your goal and we'll generate the exact content you need — for Instagram, YouTube, or both.
          </p>
        </div>

        {/* Mode cards */}
        <div style={{ display: 'flex', gap: 16 }}>

          {/* Personal Brand */}
          <button
            className={`mode-card${hovered === 'brand' ? ' sel-brand' : ''}`}
            onClick={() => onSelect('brand')}
            onMouseEnter={() => setHovered('brand')}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14, marginBottom: 18, transition: 'all .2s',
              background: hovered === 'brand' ? 'rgba(124,58,237,.12)' : 'var(--bg2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: hovered === 'brand' ? '#7C3AED' : 'var(--ink3)',
            }}>
              <PersonIcon />
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', marginBottom: 10 }}>
              Personal Brand
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 20 }}>
              Build your identity, grow your audience, and become a recognized creator in your niche.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {brandFeatures.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--ink2)' }}>
                  <span style={{
                    width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                    background: hovered === 'brand' ? 'rgba(124,58,237,.15)' : 'var(--bg3)',
                    color: hovered === 'brand' ? '#7C3AED' : 'var(--ink3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 800, transition: 'all .2s',
                  }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 24, display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 13.5, fontWeight: 700, transition: 'all .2s',
              color: hovered === 'brand' ? '#7C3AED' : 'var(--ink3)',
            }}>
              Start building <ArrRight s={14} />
            </div>
          </button>

          {/* Sell a Product */}
          <button
            className={`mode-card${hovered === 'product' ? ' sel-product' : ''}`}
            onClick={() => onSelect('product')}
            onMouseEnter={() => setHovered('product')}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14, marginBottom: 18, transition: 'all .2s',
              background: hovered === 'product' ? 'rgba(255,92,53,.1)' : 'var(--bg2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: hovered === 'product' ? 'var(--brand-accent)' : 'var(--ink3)',
            }}>
              <ShopIcon />
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', marginBottom: 10 }}>
              Sell a Product
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 20 }}>
              Launch and sell a digital product through Instagram and YouTube without feeling salesy.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {productFeatures.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--ink2)' }}>
                  <span style={{
                    width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                    background: hovered === 'product' ? 'rgba(255,92,53,.12)' : 'var(--bg3)',
                    color: hovered === 'product' ? 'var(--brand-accent)' : 'var(--ink3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 800, transition: 'all .2s',
                  }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 24, display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 13.5, fontWeight: 700, transition: 'all .2s',
              color: hovered === 'product' ? 'var(--brand-accent)' : 'var(--ink3)',
            }}>
              Start selling <ArrRight s={14} />
            </div>
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 28, fontSize: 12.5, color: 'var(--ink4)' }}>
          You can switch modes anytime from inside the app
        </p>
      </div>
    </div>
  )
}
