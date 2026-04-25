// Direction 04 — ARCHIVE / SPREADSHEET
// Dense, data-forward, archival. Numbers everywhere. Feel: Craig Mod × tabular.
// The typography IS the design. No decorative elements.

const Dir04 = () => {
  const W = 1280, H = 2400;
  const kern = { fontVariantNumeric: 'tabular-nums' };
  return (
    <div style={{ width: W, height: H, background: PAPER, color: INK, fontFamily: FONT_MONO, fontSize: 13, overflow: 'hidden' }}>
      {/* Header strip — like a journal masthead */}
      <div style={{ borderBottom: `2px solid ${INK}`, padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', ...kern }}>
        <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' }}>Vol. III · No. 01 · Est. 2020</div>
        <div style={{ fontSize: 11 }}>Yaoundé · {new Date().toDateString()}</div>
      </div>
      <div style={{ padding: '60px 48px 40px', textAlign: 'center', borderBottom: `1px solid ${INK}` }}>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 140, lineHeight: 0.95, letterSpacing: -3, fontWeight: 400 }}>
          Chi Samuel <span style={{ fontStyle: 'italic' }}>Apeng</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 13, letterSpacing: 0.5, textTransform: 'uppercase' }}>
          Software Engineer — A Working Archive, 2020—2026
        </div>
      </div>

      {/* Key metrics row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', borderBottom: `1px solid ${INK}` }}>
        {[
          ['16', 'PROJECTS'],
          ['99.9%', 'UPTIME'],
          ['40%', 'DEPLOY TIME ↓'],
          ['5+', 'YEARS'],
          ['03', 'CONTINENTS'],
        ].map(([v, l], i) => (
          <div key={l} style={{ padding: '28px 24px', borderRight: i < 4 ? `1px solid ${INK}` : 'none', textAlign: 'center', ...kern }}>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 56, fontWeight: 400, lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 10, letterSpacing: 1.5, marginTop: 8, color: MUTED }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Body: left = bio column, right = project ledger */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr' }}>
        <div style={{ padding: '32px 28px', borderRight: `1px solid ${INK}`, fontFamily: FONT_SANS, fontSize: 13, lineHeight: 1.6, color: INK }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: MUTED, marginBottom: 14 }}>§ About the engineer</div>
          <p style={{ textWrap: 'pretty', marginBottom: 16 }}>Versatile Software Engineer with a holistic view of the software lifecycle, from UI/UX design to Kubernetes orchestration.</p>
          <p style={{ textWrap: 'pretty', marginBottom: 16 }}>Founder of Solumentics, partnering with enterprise clients (MTN Business) to deliver secure, scalable digital transformation.</p>
          <p style={{ textWrap: 'pretty', marginBottom: 28, fontStyle: 'italic', color: MUTED }}>Curious. Always learning.</p>

          <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: MUTED, marginBottom: 14 }}>§ Stack</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, lineHeight: 1.8, color: INK }}>
            <div><span style={{ color: MUTED }}>lang&nbsp;&nbsp;→</span> ts, js, py, sql, go</div>
            <div><span style={{ color: MUTED }}>front →</span> next, react, tw, shadcn</div>
            <div><span style={{ color: MUTED }}>back&nbsp;&nbsp;→</span> node, hono, flask, pg</div>
            <div><span style={{ color: MUTED }}>infra →</span> k8s, docker, gh actions</div>
            <div><span style={{ color: MUTED }}>cms&nbsp;&nbsp;&nbsp;→</span> payloadcms</div>
          </div>

          <div style={{ marginTop: 28, fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: MUTED, marginBottom: 14 }}>§ Current</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, lineHeight: 1.8 }}>
            Nextise GmbH <span style={{ color: COPPER }}>●</span><br />
            Solumentics <span style={{ color: COPPER }}>●</span>
          </div>
        </div>

        {/* Ledger */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr 160px 180px 90px 30px', padding: '12px 24px', borderBottom: `1px solid ${INK}`, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: MUTED, ...kern }}>
            <div>№</div><div>Project</div><div>Role</div><div>Stack</div><div style={{ textAlign: 'right' }}>Year</div><div />
          </div>
          {PROJECTS.map((p, i) => (
            <div key={p.n} style={{ display: 'grid', gridTemplateColumns: '50px 1fr 160px 180px 90px 30px', padding: '14px 24px', borderBottom: `1px solid oklch(0.85 0.005 80)`, fontSize: 12, alignItems: 'baseline', ...kern }}>
              <div style={{ color: MUTED }}>{p.n}</div>
              <div>
                <span style={{ fontFamily: FONT_SERIF, fontSize: 22, letterSpacing: -0.4 }}>{p.name}</span>
                <span style={{ color: MUTED, marginLeft: 10, fontSize: 11 }}>— {p.tag}</span>
              </div>
              <div style={{ color: INK }}>{p.role}</div>
              <div style={{ color: MUTED, fontSize: 11 }}>{p.stack}</div>
              <div style={{ textAlign: 'right' }}>{p.year}</div>
              <div style={{ textAlign: 'right', color: COPPER }}>↗</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: `2px solid ${INK}`, padding: '24px 48px', display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: 0.5, textTransform: 'uppercase', ...kern }}>
        <div>{FACTS.email}</div>
        <div>+237 659 224 784</div>
        <div>Yaoundé · UTC+1</div>
        <div>© MMXXVI — "An archive, not a pitch"</div>
      </div>
    </div>
  );
};

window.Dir04 = Dir04;
