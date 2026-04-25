// Direction 03 — CINEMATIC / WEBGL HERO
// Dark canvas, one massive 3D-implied hero sphere (CSS radial + blur),
// full-bleed immersive vibe. Feel: Linear × Bruno Simon × Apple keynote.

const Dir03 = () => {
  const W = 1280, H = 2400;
  return (
    <div style={{ width: W, height: H, background: INK_DEEP, color: PAPER, fontFamily: FONT_SANS, overflow: 'hidden', position: 'relative' }}>
      {/* Nav */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 48px', fontSize: 13, color: PAPER }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.4 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: COPPER, boxShadow: `0 0 12px ${COPPER}` }} />
          CHI_SAMUEL
        </div>
        <div style={{ display: 'flex', gap: 36, fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.4, color: PAPER_DIM }}>
          <span style={{ color: PAPER }}>Index</span><span>Case studies</span><span>CV</span><span>Contact</span>
        </div>
      </div>

      {/* HERO — cinematic sphere */}
      <div style={{ height: 1080, position: 'relative', overflow: 'hidden' }}>
        {/* The 3D sphere — radial gradient + inner shadow + noise */}
        <div style={{
          position: 'absolute',
          left: '50%', top: '55%',
          transform: 'translate(-50%, -50%)',
          width: 780, height: 780, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, oklch(0.85 0.15 55) 0%, ${COPPER} 18%, oklch(0.5 0.15 40) 45%, oklch(0.25 0.08 30) 75%, oklch(0.15 0.02 30) 100%)`,
          boxShadow: `inset -80px -140px 200px oklch(0.08 0.01 30), 0 0 200px oklch(0.45 0.2 55 / 0.35), 0 0 400px oklch(0.55 0.2 55 / 0.2)`,
          filter: 'contrast(1.05)',
        }} />
        {/* Glow behind */}
        <div style={{ position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%,-50%)', width: 1100, height: 1100, borderRadius: '50%', background: `radial-gradient(circle, oklch(0.6 0.2 55 / 0.15) 0%, transparent 60%)`, pointerEvents: 'none' }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")` }} />

        {/* Hero copy overlay */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 64px' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
            — Portfolio — MMXXVI —
          </div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 156, lineHeight: 0.96, letterSpacing: -4, fontWeight: 400, mixBlendMode: 'difference', color: PAPER }}>
            Engineer of<br />
            <span style={{ fontStyle: 'italic' }}>things that</span><br />
            actually ship.
          </div>
          <div style={{ position: 'absolute', left: 64, bottom: 72, display: 'flex', gap: 40, alignItems: 'flex-end' }}>
            <div style={{ maxWidth: 360, fontSize: 15, lineHeight: 1.55, color: PAPER_DIM, fontFamily: FONT_SANS }}>
              Full-stack engineer. I build production SaaS from Figma to Kubernetes. Based in Yaoundé, shipping globally.
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 0.5 }}>
              <div>↓ Scroll to explore</div>
              <div style={{ marginTop: 8 }}>16 projects · 2023—2026</div>
            </div>
          </div>
        </div>

        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 30) 95%)', pointerEvents: 'none' }} />
      </div>

      {/* WORK — big bento/immersive cards */}
      <div style={{ padding: '120px 48px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 64, letterSpacing: -1.5 }}>Selected work.</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>/01 — /04</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridAutoRows: 360, gap: 20 }}>
          {/* Featured large */}
          <div style={{ background: `linear-gradient(135deg, oklch(0.22 0.03 40), oklch(0.16 0.02 30))`, border: `1px solid oklch(0.28 0.02 40)`, padding: 40, borderRadius: 6, gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -120, bottom: -120, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${COPPER} 0%, transparent 70%)`, opacity: 0.3 }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1 }}>01 · FEATURED</div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 84, letterSpacing: -2, marginTop: 20, lineHeight: 1 }}>{PROJECTS[0].name}</div>
              <div style={{ fontSize: 15, color: PAPER_DIM, marginTop: 20, maxWidth: 480, lineHeight: 1.55 }}>{PROJECTS[0].desc}</div>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>
              <span>{PROJECTS[0].stack}</span>
              <span>{PROJECTS[0].year} — case study →</span>
            </div>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.28 0.005 80)`, padding: 28, borderRadius: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1 }}>{PROJECTS[i].n} · {PROJECTS[i].tag}</div>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 40, marginTop: 14, letterSpacing: -0.8 }}>{PROJECTS[i].name}</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, display: 'flex', justifyContent: 'space-between' }}>
                <span>{PROJECTS[i].stack}</span><span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '80px 48px 60px', borderTop: `1px solid oklch(0.2 0.005 80)`, marginTop: 40 }}>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>Let's talk. <span style={{ color: COPPER, fontStyle: 'italic' }}>→</span></div>
        <div style={{ marginTop: 32, fontFamily: FONT_MONO, fontSize: 12, color: MUTED, display: 'flex', justifyContent: 'space-between' }}>
          <span>{FACTS.email}</span>
          <span>Yaoundé · UTC+1 · open to remote</span>
        </div>
      </div>
    </div>
  );
};

window.Dir03 = Dir03;
