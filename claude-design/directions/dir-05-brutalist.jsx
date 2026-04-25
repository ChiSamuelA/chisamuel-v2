// Direction 05 — BRUTALIST / SWISS GRID
// Hard grid lines, massive display type, no rounded corners, raw structure.
// Feel: Helvetica meets dev tool. Confident, structural.

const Dir05 = () => {
  const W = 1280, H = 2400;
  return (
    <div style={{ width: W, height: H, background: PAPER, color: INK, fontFamily: FONT_SANS, overflow: 'hidden' }}>
      {/* 12-col grid overlay feel via header */}
      <div style={{ borderBottom: `2px solid ${INK}`, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'stretch' }}>
        <div style={{ gridColumn: 'span 3', padding: '18px 24px', borderRight: `2px solid ${INK}`, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>CHI/SAMUEL/APENG</div>
        <div style={{ gridColumn: 'span 6', padding: '18px 24px', borderRight: `2px solid ${INK}`, fontFamily: FONT_MONO, fontSize: 12, color: MUTED, display: 'flex', alignItems: 'center' }}>SENIOR SOFTWARE ENGINEER · FULL-STACK / CLOUD</div>
        <div style={{ gridColumn: 'span 3', padding: '18px 24px', fontFamily: FONT_MONO, fontSize: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>WORK</span><span>CV</span><span>CONTACT</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', borderBottom: `2px solid ${INK}` }}>
        <div style={{ gridColumn: 'span 12', padding: '48px 24px 24px', borderBottom: `1px solid ${INK}`, fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
          <span>§01 — Introduction</span>
          <span>2026 / v3.0</span>
        </div>
        <div style={{ gridColumn: 'span 12', padding: '40px 24px 64px' }}>
          <div style={{ fontSize: 240, lineHeight: 0.85, letterSpacing: -10, fontWeight: 900, textTransform: 'uppercase' }}>
            Ships.<br />Systems.<br /><span style={{ color: COPPER }}>Scale.</span>
          </div>
        </div>
        <div style={{ gridColumn: '1 / span 4', padding: '0 24px 32px', fontSize: 14, lineHeight: 1.5 }}>
          Full-stack engineer. From Figma to Kubernetes. Building at Nextise GmbH (DE) and running Solumentics (CM) — delivering to MTN Business, Canal+ partners, international SMEs.
        </div>
        <div style={{ gridColumn: '5 / span 4', padding: '0 24px 32px', fontFamily: FONT_MONO, fontSize: 12, lineHeight: 1.7, color: MUTED }}>
          <div>→ 16 projects shipped</div>
          <div>→ 99.9% uptime maintained</div>
          <div>→ 40% deploy-time reduction</div>
          <div>→ 5+ years in production</div>
        </div>
        <div style={{ gridColumn: '9 / span 4', padding: '0 24px 32px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <div style={{ background: INK, color: PAPER, padding: '20px 28px', fontFamily: FONT_MONO, fontSize: 13 }}>→ HIRE ME</div>
        </div>
      </div>

      {/* Work grid — brutalist cards */}
      <div style={{ padding: '24px 24px', borderBottom: `1px solid ${INK}`, fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
        <span>§02 — Selected work (16)</span><span>↓ Scroll or Tab</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: `2px solid ${INK}` }}>
        {PROJECTS.slice(0, 9).map((p, i) => (
          <div key={p.n} style={{
            borderRight: (i + 1) % 3 !== 0 ? `1px solid ${INK}` : 'none',
            borderBottom: i < 6 ? `1px solid ${INK}` : 'none',
            padding: '28px 24px 24px',
            minHeight: 240,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: i === 0 ? INK : PAPER,
            color: i === 0 ? PAPER : INK,
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: 12, right: 16, fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, color: i === 0 ? PAPER_DIM : MUTED }}>{p.n}</div>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: i === 0 ? COPPER : MUTED, marginBottom: 14 }}>{p.tag}</div>
              <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.05 }}>{p.name}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 14, color: i === 0 ? PAPER_DIM : INK, maxWidth: 300 }}>{p.desc}</div>
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: i === 0 ? PAPER_DIM : MUTED, display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
              <span>{p.year}</span>
              <span>{p.stack.split('·')[0].trim()} →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
        <div style={{ gridColumn: 'span 6', padding: '48px 24px', borderRight: `2px solid ${INK}` }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: MUTED, marginBottom: 20 }}>§03 — Get in touch</div>
          <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: -3, lineHeight: 0.95 }}>Let's build.<br /><span style={{ color: COPPER }}>→</span></div>
        </div>
        <div style={{ gridColumn: 'span 6', padding: '48px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 13, lineHeight: 2 }}>
            <div>EMAIL → {FACTS.email}</div>
            <div>PHONE → {FACTS.phone}</div>
            <div>GITHUB → /chisamuelapeng</div>
            <div>LINKEDIN → /in/chisamuel</div>
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, color: MUTED, textTransform: 'uppercase' }}>
            © MMXXVI / Set in Inter & JetBrains Mono / Yaoundé
          </div>
        </div>
      </div>
    </div>
  );
};

window.Dir05 = Dir05;
