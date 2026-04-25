// Direction 02 — TERMINAL / DEV-TOOL
// Dark, monospace-forward, command-palette aesthetic.
// Interactive-feeling static hero. Feel: an IDE you want to use.

const Dir02 = () => {
  const W = 1280, H = 2400;
  return (
    <div style={{ width: W, height: H, background: INK_DEEP, color: PAPER, fontFamily: FONT_MONO, overflow: 'hidden', position: 'relative' }}>
      {/* Top nav — looks like a terminal chrome */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px', borderBottom: `1px solid oklch(0.24 0.005 80)`, fontSize: 12, color: MUTED }}>
        <div style={{ display: 'flex', gap: 6, marginRight: 20 }}>
          <div style={{ width: 11, height: 11, borderRadius: 6, background: 'oklch(0.5 0.18 25)' }} />
          <div style={{ width: 11, height: 11, borderRadius: 6, background: 'oklch(0.7 0.15 90)' }} />
          <div style={{ width: 11, height: 11, borderRadius: 6, background: 'oklch(0.6 0.15 145)' }} />
        </div>
        <div style={{ flex: 1 }}>~/chisamuel — zsh — 132×42</div>
        <div style={{ display: 'flex', gap: 24, fontSize: 11 }}>
          <span>work.ts</span><span>cv.md</span><span>contact.sh</span>
          <span style={{ color: COPPER }}>● online</span>
        </div>
      </div>

      {/* Hero — terminal log */}
      <div style={{ padding: '72px 60px 100px', fontSize: 15, lineHeight: 1.7 }}>
        <div style={{ color: MUTED }}>$ whoami --verbose</div>
        <div style={{ marginTop: 20, fontFamily: FONT_SANS, fontSize: 96, lineHeight: 1.0, letterSpacing: -3, fontWeight: 200, color: PAPER }}>
          Chi Samuel<br /><span style={{ color: COPPER }}>Apeng.</span>
        </div>
        <div style={{ marginTop: 28, color: PAPER_DIM, maxWidth: 720, fontSize: 16, lineHeight: 1.55 }}>
          → Senior Software Engineer. Full-stack from UI/UX to Kubernetes.<br />
          → Building at Nextise GmbH (Germany, remote). Founder of Solumentics.<br />
          → Shipping to <span style={{ color: COPPER }}>MTN Business</span>, <span style={{ color: COPPER }}>Canal+ partners</span>, and international SMEs.
        </div>

        <div style={{ marginTop: 48, color: MUTED }}>$ stats --since 2023</div>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: `1px dashed oklch(0.3 0.005 80)`, borderBottom: `1px dashed oklch(0.3 0.005 80)`, padding: '24px 0' }}>
          {[
            ['16', 'projects shipped'],
            ['99.9%', 'uptime'],
            ['40%', 'deploy-time cut'],
            ['5+', 'years building'],
          ].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: FONT_SANS, fontSize: 56, fontWeight: 300, letterSpacing: -2, color: PAPER, lineHeight: 1 }}>{n}</div>
              <div style={{ marginTop: 8, fontSize: 12, color: MUTED }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Work — file tree + cards */}
      <div style={{ padding: '40px 60px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 48 }}>
        <div style={{ fontSize: 12, color: MUTED, lineHeight: 2 }}>
          <div style={{ color: PAPER, marginBottom: 8 }}>~/work</div>
          {PROJECTS.slice(0, 9).map((p, i) => (
            <div key={p.n} style={{ color: i === 0 ? COPPER : MUTED, display: 'flex', gap: 8 }}>
              <span>{i === PROJECTS.length - 1 ? '└' : '├'}</span>
              <span>{p.name.toLowerCase().replace(/\s+/g, '-')}.mdx</span>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: MUTED, marginBottom: 24 }}>// featured — last 12 months</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {PROJECTS.filter(p => p.featured).slice(0, 4).map((p) => (
              <div key={p.n} style={{ background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.28 0.005 80)`, padding: 24, borderRadius: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: MUTED, marginBottom: 20 }}>
                  <span>{p.n} — {p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <div style={{ fontFamily: FONT_SANS, fontSize: 28, fontWeight: 400, color: PAPER, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: PAPER_DIM, lineHeight: 1.55, marginBottom: 20, fontFamily: FONT_SANS }}>{p.desc}</div>
                <div style={{ borderTop: `1px solid oklch(0.28 0.005 80)`, paddingTop: 14, fontSize: 11, color: COPPER, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{p.stack}</span>
                  <span>read case study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer cli */}
      <div style={{ padding: '60px 60px 80px', marginTop: 60, borderTop: `1px solid oklch(0.24 0.005 80)` }}>
        <div style={{ color: MUTED, fontSize: 13 }}>$ contact --open</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 40, fontWeight: 300, marginTop: 16, color: PAPER }}>
          let's build something. <span style={{ color: COPPER }}>→ {FACTS.email}</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 11, color: MUTED, display: 'flex', gap: 32 }}>
          <span>GitHub ↗</span><span>LinkedIn ↗</span><span>chisamuel.com</span>
          <span style={{ marginLeft: 'auto' }}>▊</span>
        </div>
      </div>
    </div>
  );
};

window.Dir02 = Dir02;
