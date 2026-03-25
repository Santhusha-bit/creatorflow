import { useState } from 'react'
import { BoltIcon, ArrRight, StarIcon, PersonIcon, ShopIcon, IgIcon, YtIcon, BRAND_STEPS, PRODUCT_STEPS } from '../App'

export default function Landing({ onStart, onNavigate }) {
  const features = [
    { ic: '🎭', t: 'Two Complete Pipelines',  d: 'Personal brand building and digital product selling — two distinct 7-step pipelines, each with tailored prompts for your exact goal.' },
    { ic: '⚡', t: 'Parallel Generation',      d: 'Generate for Instagram and YouTube at the same time. One prompt. Two platform-native outputs. Zero extra effort.' },
    { ic: '🎯', t: 'Platform-Native Copy',     d: 'Not repurposed. Instagram captions and YouTube scripts are built differently because they convert differently.' },
    { ic: '🪞', t: 'Your Voice, Not AI Voice', d: 'Every prompt is designed to take your personal story and expertise and write in a way that sounds genuinely like you.' },
    { ic: '📤', t: 'Export Everything',        d: 'Stream outputs live, copy with one click, or export individual steps as text files. Ready to paste and post.' },
    { ic: '🔄', t: 'Iterative by Design',      d: 'Your details carry through the whole pipeline. Change one thing and regenerate — we never reset your work.' },
  ]

  const testimonials = [
    { q: 'I spent 4 hours on one carousel. This thing did 9 slides for both platforms in 90 seconds and they were actually good.', n: 'Jasmine R.', r: 'Finance creator, 42k followers' },
    { q: 'Finally a tool that understands the difference between YouTube hooks and Instagram hooks. They\'re completely different and this nails both.', n: 'Marcus T.', r: 'Fitness coach, 18k subscribers' },
    { q: 'I\'m not selling a product — just building my brand. This gave me a full 30-day content plan and my first week of captions in 10 minutes.', n: 'Priya K.', r: 'Career coach, 12k followers' },
  ]

  const marqueeItems = [
    'Brand Identity', 'Content Pillars', 'Instagram Bio', 'YouTube Channel Description',
    '30-Day Calendar', 'Hook Writing', 'Carousel Scripts', 'Reel Scripts', 'YouTube Scripts',
    'Community Building', 'DM Sequences', 'Monetization Roadmap', 'Product Ideas', 'Sales Captions',
  ]

  const [featHover, setFeatHover] = useState(null)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(248,246,242,.9)', backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,0,0,.07)',
        padding: '0 40px', height: 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <BoltIcon />
          </div>
          <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)' }}>Creatorflow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink3)' }}>Free while in beta</span>
          <button className="btn-primary" onClick={onStart} style={{ padding: '9px 22px', fontSize: 14 }}>
            Get started free
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '148px 40px 100px', textAlign: 'center' }}>
        <div className="au" style={{ animationDelay: '0s', marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 16px', borderRadius: 100, background: 'var(--white)', border: '1px solid var(--border)', fontSize: 12.5, fontWeight: 600, color: 'var(--ink2)', boxShadow: 'var(--sh-sm)' }}>
            <StarIcon /> AI content pipeline for creators & entrepreneurs
          </div>
        </div>

        <h1 className="au" style={{ animationDelay: '.07s', fontFamily: 'var(--serif)', fontSize: 'clamp(48px,7.5vw,92px)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-.03em', color: 'var(--ink)', marginBottom: 30 }}>
          Grow your brand.<br />
          <span style={{ fontStyle: 'italic', color: 'var(--brand-accent)' }}>Sell your product.</span><br />
          Both at once.
        </h1>

        <p className="au" style={{ animationDelay: '.14s', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--ink3)', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 44px' }}>
          Two complete AI pipelines — one for building your personal brand, one for selling digital products — generating Instagram and YouTube content simultaneously, in your voice.
        </p>

        <div className="au" style={{ animationDelay: '.21s', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
          <button className="btn-primary" onClick={onStart} style={{ padding: '15px 34px', fontSize: 15.5, gap: 10, borderRadius: 13 }}>
            Choose your goal <ArrRight s={15} />
          </button>
        </div>

        <div className="au" style={{ animationDelay: '.26s' }}>
          <span style={{ fontSize: 12.5, color: 'var(--ink4)', fontWeight: 500 }}>No login · No credit card · Just generate</span>
        </div>

        {/* Floating badges + mockup */}
        <div className="au" style={{ animationDelay: '.32s', marginTop: 76, position: 'relative' }}>
          {/* Floating chips */}
          {[
            { style: { position:'absolute', top:-24, left:'5%', zIndex:2, animation:'floatA 5.5s ease-in-out infinite' }, content: <><span style={{fontSize:16}}>🎭</span><span style={{fontSize:12.5,fontWeight:700,color:'var(--ink2)'}}>Personal Brand</span><span style={{width:6,height:6,borderRadius:'50%',background:'#7C3AED',animation:'bounce3 1s ease-in-out infinite'}}/></> },
            { style: { position:'absolute', top:-24, right:'5%', zIndex:2, animation:'floatB 6s ease-in-out infinite' }, content: <><span style={{fontSize:16}}>🛍️</span><span style={{fontSize:12.5,fontWeight:700,color:'var(--ink2)'}}>Sell a Product</span><span style={{width:6,height:6,borderRadius:'50%',background:'var(--brand-accent)',animation:'bounce3 1.2s ease-in-out infinite'}}/></> },
            { style: { position:'absolute', bottom:60, left:'1%', zIndex:2, animation:'floatC 7s ease-in-out infinite' }, content: <><IgIcon s={13} c="var(--ig)"/><span style={{fontSize:11.5,fontWeight:700,color:'var(--ig)'}}>Instagram</span><span style={{display:'flex',gap:3}}>{[0,.15,.3].map((d,i)=><span key={i} style={{width:4,height:4,borderRadius:'50%',background:'var(--ig)',animation:'bounce3 .9s ease-in-out infinite',animationDelay:`${d}s`}}/>)}</span></> },
            { style: { position:'absolute', bottom:60, right:'1%', zIndex:2, animation:'floatA 6.5s ease-in-out infinite .5s' }, content: <><YtIcon s={13} c="var(--yt)"/><span style={{fontSize:11.5,fontWeight:700,color:'var(--yt)'}}>YouTube</span><span style={{display:'flex',gap:3}}>{[0,.15,.3].map((d,i)=><span key={i} style={{width:4,height:4,borderRadius:'50%',background:'var(--yt)',animation:'bounce3 .9s ease-in-out infinite',animationDelay:`${d}s`}}/>)}</span></> },
          ].map((chip, i) => (
            <div key={i} style={chip.style}>
              <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:14, padding:'11px 16px', boxShadow:'var(--sh-md)', display:'flex', alignItems:'center', gap:8, whiteSpace:'nowrap' }}>
                {chip.content}
              </div>
            </div>
          ))}

          {/* Browser mockup */}
          <div style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:26, boxShadow:'var(--sh-xl)', overflow:'hidden', maxWidth:880, margin:'0 auto' }}>
            {/* Chrome bar */}
            <div style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'13px 22px', display:'flex', alignItems:'center', gap:8 }}>
              {['#FF5F57','#FFBD2E','#27C93F'].map((c,i) => <span key={i} style={{ width:11, height:11, borderRadius:'50%', background:c, display:'inline-block' }}/>)}
              <div style={{ flex:1, background:'white', borderRadius:7, padding:'5px 16px', fontSize:11.5, color:'var(--ink4)', textAlign:'center', maxWidth:360, margin:'0 auto', border:'1px solid var(--border)' }}>
                creatorflow.app
              </div>
            </div>
            {/* App mockup */}
            <div style={{ padding:'22px', display:'flex', gap:18, alignItems:'flex-start', minHeight:240 }}>
              <div style={{ width:120, flexShrink:0, background:'var(--bg)', borderRadius:12, padding:'8px 6px' }}>
                {['Identity','Profile','Content','Hooks','Scripts','Community','Monetize'].map((l,i) => (
                  <div key={l} style={{ display:'flex', alignItems:'center', gap:6, padding:'6px 8px', borderRadius:7, marginBottom:2, background:i===3?'white':'transparent', boxShadow:i===3?'var(--sh-xs)':'none', fontSize:10.5, fontWeight:i===3?700:500, color:i===3?'var(--ink)':i<3?'var(--ink3)':'var(--ink4)' }}>
                    <span style={{ width:16, height:16, borderRadius:5, background:i===3?'var(--ink)':i<3?'var(--bg3)':'var(--bg3)', color:i===3?'white':i<3?'var(--ink2)':'var(--ink4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:8, fontWeight:800, flexShrink:0 }}>
                      {i < 3 ? '✓' : i + 1}
                    </span>
                    {l}
                  </div>
                ))}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ marginBottom:12 }}>
                  <span style={{ fontSize:9.5, fontWeight:700, color:'var(--ink4)', letterSpacing:'.08em', textTransform:'uppercase' }}>Personal Brand · Step 4 / 7 ✍️</span>
                  <h3 style={{ fontSize:16, fontWeight:800, letterSpacing:'-.03em', marginTop:2, color:'var(--ink)' }}>Hook & Caption Writer</h3>
                </div>
                <div style={{ display:'flex', gap:10 }}>
                  {[{c:'var(--ig)',bg:'var(--ig-bg)',bd:'var(--ig-bd)',l:'Instagram',Icon:IgIcon},{c:'var(--yt)',bg:'var(--yt-bg)',bd:'var(--yt-bd)',l:'YouTube',Icon:YtIcon}].map(({c,bg,bd,l,Icon}) => (
                    <div key={l} style={{ flex:1, border:`1.5px solid ${c}`, borderRadius:10, overflow:'hidden', background:'white', boxShadow:`0 0 0 3px ${c}14` }}>
                      <div style={{ padding:'7px 10px', background:bg, borderBottom:`1px solid ${bd}`, display:'flex', alignItems:'center', gap:5 }}>
                        <Icon s={11} c={c}/><span style={{ fontSize:10.5, fontWeight:700, color:c }}>{l}</span>
                        <span style={{ marginLeft:'auto', display:'flex', gap:2 }}>
                          {[0,.15,.3].map((d,i) => <span key={i} style={{ width:3.5, height:3.5, borderRadius:'50%', background:c, animation:'bounce3 .9s ease-in-out infinite', animationDelay:`${d}s` }}/>)}
                        </span>
                      </div>
                      <div style={{ padding:'9px 11px' }}>
                        {[82,68,91,54,76,60].map((w,i) => <div key={i} style={{ height:6, borderRadius:3, background:`${c}1A`, width:`${w}%`, marginBottom:i<5?6:0 }}/>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', background:'var(--white)', padding:'18px 0', overflow:'hidden' }}>
        <div className="mq-track">
          {[...marqueeItems,...marqueeItems].map((item,i) => (
            <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'7px 18px', borderRadius:100, border:'1px solid var(--border)', fontSize:13, fontWeight:600, color:'var(--ink2)', whiteSpace:'nowrap', background:i%4===0||i%4===2?'var(--bg)':'white' }}>
              <span style={{ color:'var(--brand-accent)', fontSize:12 }}>✦</span> {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Two pipelines showcase ── */}
      <section style={{ maxWidth:1100, margin:'0 auto', padding:'88px 40px' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,5vw,58px)', fontWeight:400, letterSpacing:'-.03em', lineHeight:1.1 }}>
            One tool.<br/><span style={{ fontStyle:'italic' }}>Two complete pipelines.</span>
          </h2>
          <p style={{ fontSize:16, color:'var(--ink3)', marginTop:16, maxWidth:500, margin:'16px auto 0', lineHeight:1.65 }}>
            Whether you're a creator growing an audience or an entrepreneur launching a product — Creatorflow has a full 7-step pipeline built exactly for your goal.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
          {[
            { steps: BRAND_STEPS,   icon: PersonIcon, label:'Personal Brand',  sub:'7-step brand building pipeline',  desc:'For creators who want to grow their audience, establish authority, and become known in their niche.', accent:'rgba(124,58,237,.08)', accentBg:'rgba(124,58,237,.1)', accentColor:'#7C3AED' },
            { steps: PRODUCT_STEPS, icon: ShopIcon,   label:'Sell a Product',  sub:'7-step product selling pipeline', desc:'For entrepreneurs who want to launch digital products and build a sales machine on social media.',  accent:'rgba(255,92,53,.07)',  accentBg:'rgba(255,92,53,.1)',  accentColor:'var(--brand-accent)' },
          ].map(({ steps: pSteps, icon: Icon, label, sub, desc, accent, accentBg, accentColor }, i) => (
            <div key={i} style={{ background:'var(--white)', border:'1px solid var(--border)', borderRadius:22, overflow:'hidden' }}>
              <div style={{ background:`linear-gradient(135deg, ${accent} 0%, transparent 100%)`, borderBottom:'1px solid var(--border)', padding:'28px 28px 24px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                  <div style={{ width:42, height:42, borderRadius:12, background:accentBg, display:'flex', alignItems:'center', justifyContent:'center', color:accentColor }}><Icon /></div>
                  <div>
                    <div style={{ fontSize:16, fontWeight:800, letterSpacing:'-.02em', color:'var(--ink)' }}>{label}</div>
                    <div style={{ fontSize:12, color:'var(--ink3)' }}>{sub}</div>
                  </div>
                </div>
                <p style={{ fontSize:14, color:'var(--ink3)', lineHeight:1.6 }}>{desc}</p>
              </div>
              <div style={{ padding:'20px 28px' }}>
                {pSteps.map((s, j) => (
                  <div key={j} style={{ display:'flex', alignItems:'center', gap:12, padding:'9px 0', borderBottom:j < pSteps.length-1?'1px solid var(--bg2)':'none' }}>
                    <span style={{ width:28, height:28, borderRadius:8, background:accentBg, color:accentColor, display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, flexShrink:0 }}>{s.emoji}</span>
                    <div>
                      <div style={{ fontSize:13, fontWeight:700, color:'var(--ink)' }}>{s.title}</div>
                      <div style={{ fontSize:11.5, color:'var(--ink4)', marginTop:1 }}>{s.subtitle.split(',')[0]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:36 }}>
          <button className="btn-primary" onClick={onStart} style={{ padding:'14px 32px', fontSize:15, gap:10, borderRadius:13 }}>
            Choose your pipeline <ArrRight s={15}/>
          </button>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background:'var(--white)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'52px 40px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1 }}>
          {[{n:'14',l:'Total pipeline steps'},{n:'2×',l:'Platform outputs'},{n:'<3min',l:'Per complete step'},{n:'2',l:'Distinct pipelines'}].map(({n,l},i) => (
            <div key={i} style={{ textAlign:'center', padding:'8px 20px', borderRight:i<3?'1px solid var(--border)':'none' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:52, color:'var(--ink)', lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:13.5, color:'var(--ink3)', marginTop:6, fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ maxWidth:1100, margin:'0 auto', padding:'88px 40px' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(36px,5vw,54px)', fontWeight:400, letterSpacing:'-.03em', lineHeight:1.1 }}>
            Built for how creators<br/><span style={{ fontStyle:'italic' }}>actually work.</span>
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {features.map((f,i) => (
            <div key={i} className="feat-card"
              onMouseEnter={() => setFeatHover(i)}
              onMouseLeave={() => setFeatHover(null)}
              style={{ transform: featHover===i?'translateY(-4px)':'none', boxShadow: featHover===i?'var(--sh-lg)':'var(--sh-sm)' }}
            >
              <div style={{ width:46, height:46, borderRadius:13, background:'var(--bg)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, marginBottom:18 }}>{f.ic}</div>
              <h3 style={{ fontSize:16, fontWeight:800, letterSpacing:'-.02em', marginBottom:9, color:'var(--ink)' }}>{f.t}</h3>
              <p style={{ fontSize:14, color:'var(--ink3)', lineHeight:1.65 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ background:'var(--ink)', padding:'88px 40px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:400, letterSpacing:'-.03em', color:'white', lineHeight:1.1 }}>
              Creators are already<br/><span style={{ fontStyle:'italic', color:'#FFB085' }}>shipping faster.</span>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
            {testimonials.map((t,i) => (
              <div key={i} style={{ background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:20, padding:'26px 28px' }}>
                <div style={{ display:'flex', gap:2, marginBottom:16 }}>
                  {[...Array(5)].map((_,j) => <span key={j} style={{ color:'#F59E0B', fontSize:13 }}>★</span>)}
                </div>
                <p style={{ fontFamily:'var(--serif)', fontSize:16, lineHeight:1.7, color:'rgba(255,255,255,.9)', fontStyle:'italic', marginBottom:20 }}>"{t.q}"</p>
                <div style={{ fontSize:13.5, fontWeight:700, color:'white' }}>{t.n}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginTop:2 }}>{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth:1100, margin:'0 auto', padding:'88px 40px' }}>
        <div style={{ background:'var(--ink)', borderRadius:28, padding:'68px 56px', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, opacity:.04, backgroundImage:'radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,5vw,58px)', fontWeight:400, letterSpacing:'-.03em', color:'white', lineHeight:1.1, marginBottom:22 }}>
              Your next piece of content<br/><span style={{ fontStyle:'italic', color:'#FFB085' }}>starts right now.</span>
            </h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.5)', marginBottom:38, maxWidth:440, margin:'0 auto 38px', lineHeight:1.7 }}>
              Free in beta. No account. No credit card. Choose your goal and start generating in 30 seconds.
            </p>
            <button className="btn-primary" onClick={onStart} style={{ padding:'16px 44px', fontSize:16, gap:10, borderRadius:14, background:'white', color:'var(--ink)' }}>
              Get started free <ArrRight s={16}/>
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop:'1px solid var(--border)', padding:'28px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:24, height:24, borderRadius:6, background:'var(--ink)', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}><BoltIcon/></div>
          <span style={{ fontSize:14, fontWeight:800, letterSpacing:'-.03em', color:'var(--ink)' }}>Creatorflow</span>
        </div>
        <span style={{ fontSize:12.5, color:'var(--ink4)' }}>© 2025 Creatorflow · For creators who mean it</span>
        <div style={{ display:'flex', gap:20 }}>
          <button
            type="button"
            onClick={() => onNavigate?.('privacy')}
            style={{ background:'none', border:'none', cursor:'pointer', fontSize:12.5, color:'var(--ink4)', fontWeight:600, padding:0 }}
          >
            Privacy
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('terms')}
            style={{ background:'none', border:'none', cursor:'pointer', fontSize:12.5, color:'var(--ink4)', fontWeight:600, padding:0 }}
          >
            Terms
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('contact')}
            style={{ background:'none', border:'none', cursor:'pointer', fontSize:12.5, color:'var(--ink4)', fontWeight:600, padding:0 }}
          >
            Contact
          </button>
        </div>
      </footer>
    </div>
  )
}
