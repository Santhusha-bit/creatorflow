import { useState } from 'react'
import { IgIcon, YtIcon } from '../App'

export default function OutputCard({ pid, text, isStreaming, stepTitle, stepSlug }) {
  const [copied, setCopied] = useState(false)
  const ig    = pid === 'instagram'
  const color = ig ? 'var(--ig)' : 'var(--yt)'
  const bg    = ig ? 'var(--ig-bg)' : 'var(--yt-bg)'
  const bd    = ig ? 'var(--ig-bd)' : 'var(--yt-bd)'
  const label = ig ? 'Instagram' : 'YouTube'
  const Icon  = ig ? IgIcon : YtIcon

  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const exp = () => {
    const blob = new Blob(
      [`${stepTitle} — ${label}\n${'─'.repeat(50)}\n\n${text}`],
      { type: 'text/plain' }
    )
    const url = URL.createObjectURL(blob)
    const a   = document.createElement('a')
    a.href     = url
    a.download = `${pid}-${stepSlug}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className={`out-card${isStreaming ? (ig ? ' s-ig' : ' s-yt') : ''}`}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '11px 15px',
        borderBottom: `1px solid ${isStreaming ? bd : 'var(--border)'}`,
        background: isStreaming ? bg : 'var(--bg)',
        transition: 'all .25s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icon s={13} c={color} />
          <span style={{ fontSize: 12.5, fontWeight: 700, color }}>{label}</span>
          {isStreaming && (
            <span style={{ display: 'flex', gap: 3, marginLeft: 4 }}>
              {[0, 0.15, 0.3].map((d, i) => (
                <span key={i} style={{
                  width: 4, height: 4, borderRadius: '50%', background: color,
                  animation: 'bounce3 .9s ease-in-out infinite',
                  animationDelay: `${d}s`,
                }} />
              ))}
            </span>
          )}
        </div>
        {!isStreaming && text && (
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={copy} style={{
              padding: '4px 11px', borderRadius: 7,
              border: `1px solid ${copied ? '#BBF7D0' : 'var(--border)'}`,
              background: copied ? '#F0FFF4' : 'white',
              color: copied ? 'var(--green)' : 'var(--ink3)',
              fontSize: 11.5, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'inherit', transition: 'all .15s',
            }}>
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
            <button onClick={exp} style={{
              padding: '4px 11px', borderRadius: 7,
              border: `1.5px solid ${bd}`,
              background: bg, color,
              fontSize: 11.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Export
            </button>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{
        padding: '16px 18px', flex: 1,
        fontSize: 13.5, lineHeight: 1.85, color: 'var(--ink)',
        whiteSpace: 'pre-wrap', overflowY: 'auto', maxHeight: 440, minHeight: 140,
        fontFamily: 'Georgia, serif',
      }}>
        {text ? (
          <>
            {text}
            {isStreaming && (
              <span style={{
                display: 'inline-block', width: 2, height: 14,
                background: color, marginLeft: 2, verticalAlign: 'middle',
                animation: 'blink .65s ease-in-out infinite',
              }} />
            )}
          </>
        ) : (
          <span style={{ color: 'var(--ink4)', fontSize: 13, fontStyle: 'italic', fontFamily: 'inherit' }}>
            Output will appear here once you generate…
          </span>
        )}
      </div>
    </div>
  )
}
