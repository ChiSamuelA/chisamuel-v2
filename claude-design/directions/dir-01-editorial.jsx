// Direction 01 — EDITORIAL MONOLITH
// Massive serif typography. Index-style project list. Restrained.
// Feel: New Yorker × dev blog. Serif headline is the wow.

const Dir01 = () => {
  const W = 1280, H = 2400;
  return (
    <div style={{ width: W, height: H, background: PAPER, color: INK, fontFamily: FONT_SANS, overflow: 'hidden', position: 'relative' }}>
      {/* Top nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 64px', fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.5, textTransform: 'uppercase', color: MUTED }}>
        <div>{FACTS.short} <span style={{ color: COPPER }}>●</span></div>
        <div style={{ display: 'flex', gap: 32 }}>
          <span>Work</span><span>CV</span><span>Contact</span>
          <span style={{ color: INK }}>UTC+1 · Yaoundé</span>
        </div>
      </div>

      {/* Hero — one enormous editorial statement */}
      <div style={{ padding: '80px 64px 120px', position: 'relative' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.5, color: MUTED, marginBottom: 32, textTransform: 'uppercase' }}>
          Portfolio — Vol. III — MMXXVI
        </div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 180, lineHeight: 0.92, letterSpacing: -6, fontWeight: 400, color: INK }}>
          Software<br />
          <span style={{ fontStyle: 'italic', color: COPPER }}>&</span> systems,<br />
          shipped to<br />
          <span style={{ fontStyle: 'italic' }}>production.</span>
        </div>
        <div style={{ position: 'absolute', right: 64, bottom: 120, maxWidth: 340, fontSize: 15, lineHeight: 1.55, color: INK, textWrap: 'pretty' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 0.5, color: MUTED, marginBottom: 12, textTransform: 'uppercase' }}>§ Colophon</div>
          I'm Chi Samuel — a full-stack engineer building production SaaS at Nextise GmbH and founder of Solumentics, delivering to enterprise partners including MTN Business. Holistic view of the stack, from Figma to Kubernetes.
        </div>
      </div>

      {/* Marquee of disciplines */}
      <div style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}`, padding: '20px 0', overflow: 'hidden', fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 28, color: INK, whiteSpace: 'nowrap' }}>
        &nbsp;&nbsp;Next.js&nbsp;&nbsp;·&nbsp;&nbsp;Kubernetes&nbsp;&nbsp;·&nbsp;&nbsp;TypeScript&nbsp;&nbsp;·&nbsp;&nbsp;Python&nbsp;&nbsp;·&nbsp;&nbsp;PostgreSQL&nbsp;&nbsp;·&nbsp;&nbsp;Go&nbsp;&nbsp;·&nbsp;&nbsp;CI/CD&nbsp;&nbsp;·&nbsp;&nbsp;PayloadCMS&nbsp;&nbsp;·&nbsp;&nbsp;DigitalOcean&nbsp;&nbsp;·&nbsp;&nbsp;Flutter&nbsp;&nbsp;·&nbsp;&nbsp;Next.js&nbsp;&nbsp;·&nbsp;&nbsp;Kubernetes&nbsp;&nbsp;·
      </div>

      {/* Selected works — index style */}
      <div style={{ padding: '80px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 48, fontWeight: 400 }}>Selected works</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>— 16 projects · 2023—2026</div>
        </div>
        <div>
          {PROJECTS.slice(0, 10).map((p, i) => (
            <div key={p.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px 160px 100px', alignItems: 'baseline', padding: '28px 0', borderTop: `1px solid ${INK}`, fontSize: 14 }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>{p.n}</div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 32, letterSpacing: -0.5 }}>{p.name}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, textTransform: 'uppercase', letterSpacing: 0.5 }}>{p.tag}</div>
              <div style={{ fontSize: 13, color: INK }}>{p.role}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, textAlign: 'right' }}>{p.year} ↗</div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${INK}`, padding: '28px 0', fontFamily: FONT_MONO, fontSize: 12, color: MUTED, textAlign: 'center' }}>
            + 6 more in the archive
          </div>
        </div>
      </div>

      {/* Footer sonnet */}
      <div style={{ padding: '80px 64px', background: INK, color: PAPER, marginTop: 80 }}>
        <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 56, lineHeight: 1.1, maxWidth: 900 }}>
          "Curious, <span style={{ color: COPPER }}>always learning.</span>"
        </div>
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5, color: PAPER_DIM }}>
          <div>{FACTS.email}</div>
          <div>© 2026 — Set in Instrument Serif & Inter</div>
        </div>
      </div>
    </div>
  );
};

window.Dir01 = Dir01;
