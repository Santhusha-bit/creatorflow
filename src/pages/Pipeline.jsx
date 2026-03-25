import { useState, useRef, useCallback } from 'react'
import { BRAND_STEPS, PRODUCT_STEPS, streamGenerate, BoltIcon, IgIcon, YtIcon, ArrRight, ChkIcon, BackIcon } from '../App'
import OutputCard from '../components/OutputCard'

export default function Pipeline({ mode, onBack, onSwitchMode }) {
  const steps      = mode === 'brand' ? BRAND_STEPS : PRODUCT_STEPS
  const modeColor  = mode === 'brand' ? '#7C3AED' : 'var(--brand-accent)'
  const modeLabel  = mode === 'brand' ? 'Personal Brand' : 'Sell a Product'
  const modeEmoji  = mode === 'brand' ? '🎭' : '🛍️'

  const [step,   setStep]   = useState(0)
  const [plats,  setPlats]  = useState(['instagram', 'youtube'])
  const [fields, setFields] = useState(steps.map(s => Object.fromEntries(s.fields.map(f => [f.key, '']))))
  const [outs,   setOuts]   = useState(steps.map(() => ({ instagram: '', youtube: '' })))
  const [strm,   setStrm]   = useState(steps.map(() => ({ instagram: false, youtube: false })))
  const aborts = useRef(steps.map(() => ({ instagram: null, youtube: null })))

  const S          = steps[step]
  const vals       = fields[step]
  const allFilled  = S.fields.every(f => vals[f.key]?.trim())
  const isStrm     = plats.some(p => strm[step][p])
  const hasOut     = plats.some(p => outs[step][p])
  const noPlatform = plats.length === 0
  const done       = outs.map(o => o.instagram?.length > 20 || o.youtube?.length > 20)
  const doneCount  = done.filter(Boolean).length

  const platLabel = plats.length === 2 ? 'Instagram + YouTube'
    : plats.length === 1 ? (plats[0] === 'instagram' ? 'Instagram' : 'YouTube')
    : 'a platform'

  const btnCls = isStrm ? 'ld' : (!allFilled || noPlatform) ? 'dis' : 'rdy'

  const toggleP = id => setPlats(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id])
  const setF    = (key, val) => setFields(prev => {
    const n = [...prev]; n[step] = { ...n[step], [key]: val }; return n
  })

  const generate = useCallback(async () => {
    const idx = step
    plats.forEach(p => { if (aborts.current[idx][p]) aborts.current[idx][p].abort() })

    setOuts(prev => {
      const n = [...prev]; const r = { ...n[idx] }
      plats.forEach(p => { r[p] = '' }); n[idx] = r; return n
    })
    setStrm(prev => {
      const n = [...prev]; const s = { ...n[idx] }
      plats.forEach(p => { s[p] = true }); n[idx] = s; return n
    })

    await Promise.all(plats.map(async pid => {
      const ctrl = new AbortController()
      aborts.current[idx][pid] = ctrl
      try {
        await streamGenerate({
          prompt: steps[idx].prompts[pid](fields[idx]),
          signal: ctrl.signal,
          onChunk: t => setOuts(prev => {
            const n = [...prev]; n[idx] = { ...n[idx], [pid]: n[idx][pid] + t }; return n
          }),
        })
      } catch (e) {
        if (e.name !== 'AbortError') {
          setOuts(prev => {
            const n = [...prev]; n[idx] = { ...n[idx], [pid]: `Error: ${e.message}` }; return n
          })
        }
      } finally {
        setStrm(prev => {
          const n = [...prev]; n[idx] = { ...n[idx], [pid]: false }; return n
        })
      }
    }))
  }, [step, fields, plats, steps])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(248,246,242,.94)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(0,0,0,.07)',
        padding: '0 28px', height: 58,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className="btn-ghost" onClick={onBack} style={{ gap: 4 }}>
            <BackIcon />
          </button>
          <div style={{ width: 1, height: 18, background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <BoltIcon />
            </div>
            <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)' }}>Creatorflow</span>
          </div>
          {/* Mode badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 10px', borderRadius: 8,
            background: `${modeColor}12`,
            border: `1px solid ${modeColor}28`,
          }}>
            <span style={{ fontSize: 13 }}>{modeEmoji}</span>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: modeColor }}>{modeLabel}</span>
            <button onClick={onSwitchMode} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 10.5, color: modeColor, fontWeight: 600,
              fontFamily: 'inherit', opacity: .7, marginLeft: 2,
            }}>switch</button>
          </div>
        </div>

        {/* Progress pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              title={s.title}
              className="prog-pip"
              style={{
                width: i === step ? 24 : done[i] ? 14 : 8,
                background: i === step ? 'var(--ink)' : done[i] ? '#888' : '#D4D4D4',
              }}
            />
          ))}
        </div>

        {/* Right */}
        <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink4)' }}>
          {doneCount}/{steps.length} complete
        </div>
      </nav>

      {/* ── Layout ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>

        {/* Sidebar */}
        <aside style={{ width: 196, flexShrink: 0, position: 'sticky', top: 78 }}>
          <div className="card" style={{ padding: '12px 8px' }}>
            <div style={{ padding: '2px 12px 10px', fontSize: 10, fontWeight: 800, color: '#BEBEBE', letterSpacing: '.1em', textTransform: 'uppercase' }}>
              Pipeline
            </div>
            {steps.map((s, i) => (
              <button
                key={i}
                className={`side-btn${step === i ? ' act' : ''}${done[i] ? ' done' : ''}`}
                onClick={() => setStep(i)}
              >
                <span style={{
                  width: 24, height: 24, borderRadius: 7, flexShrink: 0,
                  background: step === i ? 'var(--ink)' : done[i] ? 'var(--bg2)' : 'var(--bg)',
                  color: step === i ? 'white' : done[i] ? 'var(--ink)' : 'var(--ink4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: done[i] && step !== i ? 10 : 11, fontWeight: 800,
                  transition: 'all .15s',
                }}>
                  {done[i] && step !== i ? '✓' : i + 1}
                </span>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: step === i ? 700 : 500, lineHeight: 1.3, color: 'inherit' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 1 }}>{s.emoji}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, animation: 'slideIn .2s ease' }} key={`${mode}-${step}`}>

          {/* Step header */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
              <span style={{ padding: '3px 9px', borderRadius: 6, background: 'var(--bg2)', color: 'var(--ink3)', fontSize: 11, fontWeight: 700, letterSpacing: '.04em' }}>
                STEP {S.id} / {steps.length}
              </span>
              <span style={{ fontSize: 18 }}>{S.emoji}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)', lineHeight: 1.2 }}>
              {S.title}
            </h1>
            <p style={{ fontSize: 14, color: 'var(--ink3)', marginTop: 5, lineHeight: 1.55 }}>
              {S.subtitle}
            </p>
          </div>

          {/* Form card */}
          <div className="card" style={{ padding: '24px', marginBottom: 18 }}>

            {/* Platform selector */}
            <div style={{ marginBottom: 22 }}>
              <label style={{ display: 'block', fontSize: 11.5, fontWeight: 700, color: 'var(--ink4)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }}>
                Generate for
              </label>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { id: 'instagram', l: 'Instagram', Icon: IgIcon, cls: 'ig' },
                  { id: 'youtube',   l: 'YouTube',   Icon: YtIcon, cls: 'yt' },
                ].map(({ id, l, Icon, cls }) => {
                  const on = plats.includes(id)
                  const c  = id === 'instagram' ? 'var(--ig)' : 'var(--yt)'
                  return (
                    <button key={id} className={`plat-btn ${cls}${on ? ' on' : ''}`} onClick={() => toggleP(id)}>
                      {on && (
                        <span style={{
                          position: 'absolute', top: -6, right: -6,
                          width: 16, height: 16, borderRadius: '50%',
                          background: c, color: 'white',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <ChkIcon s={9} />
                        </span>
                      )}
                      <Icon s={15} c={on ? c : '#C0C0C0'} />
                      <span style={{ color: on ? c : 'var(--ink3)' }}>{l}</span>
                    </button>
                  )
                })}
              </div>
              {noPlatform && (
                <p style={{ fontSize: 12, color: '#E8734A', marginTop: 8, fontWeight: 500 }}>
                  ↑ Select at least one platform to continue.
                </p>
              )}
            </div>

            <div className="divider" style={{ marginBottom: 22 }} />

            {/* Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px', marginBottom: 22 }}>
              {S.fields.map(f => (
                <div key={f.key} className="field-group">
                  <label>{f.label}</label>
                  <input
                    className={vals[f.key] ? 'has-val' : ''}
                    value={vals[f.key]}
                    placeholder={f.placeholder}
                    onChange={e => setF(f.key, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {/* Generate button */}
            <button
              className={`gen-btn ${btnCls}`}
              onClick={btnCls === 'rdy' ? generate : undefined}
            >
              {isStrm       ? `Generating for ${platLabel}…`
              : noPlatform  ? 'Select a platform above ↑'
              : !allFilled  ? 'Fill in all fields to generate'
              :               `Generate ${S.label} for ${platLabel} →`}
            </button>
          </div>

          {/* Outputs */}
          {(hasOut || isStrm) && (
            <div style={{ display: 'flex', gap: 16, animation: 'fadeIn .3s ease' }}>
              {plats.map(pid => (
                <OutputCard
                  key={pid}
                  pid={pid}
                  text={outs[step][pid]}
                  isStreaming={strm[step][pid]}
                  stepTitle={S.title}
                  stepSlug={S.slug}
                />
              ))}
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 22 }}>
            <button
              onClick={() => setStep(p => Math.max(0, p - 1))}
              disabled={step === 0}
              className="btn-secondary"
              style={{ padding: '10px 20px', borderRadius: 10, opacity: step === 0 ? .4 : 1, cursor: step === 0 ? 'not-allowed' : 'pointer' }}
            >
              ← Back
            </button>
            <span style={{ fontSize: 12, color: 'var(--ink4)', fontWeight: 500 }}>{S.label}</span>
            <button
              onClick={() => setStep(p => Math.min(steps.length - 1, p + 1))}
              disabled={step === steps.length - 1}
              className="btn-primary"
              style={{ padding: '10px 20px', borderRadius: 10, opacity: step === steps.length - 1 ? .4 : 1, cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer' }}
            >
              Next →
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
