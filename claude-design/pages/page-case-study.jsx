// Case Study template — immersive per-project page
// Using BarriereHilfe as the canonical example (richest content)

const PageCaseStudy = () => {
  const W = 1440, H = 5200;
  const p = PROJECTS[0]; // BarriereHilfe
  return (
    <div style={{ width: W, height: H, background: INK_DEEP, color: PAPER, fontFamily: FONT_SANS, overflow: 'hidden', position: 'relative' }}>
      {/* Nav */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 56px', fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.4 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: COPPER, boxShadow: `0 0 12px ${COPPER}` }} />
          CHI_SAMUEL
        </div>
        <div style={{ display: 'flex', gap: 36, fontFamily: FONT_MONO, fontSize: 12, color: PAPER_DIM }}>
          <span>Index</span><span style={{ color: PAPER }}>Case studies</span><span>CV</span><span>Contact</span>
        </div>
      </div>

      {/* HERO — breadcrumb + big title + meta row */}
      <div style={{ padding: '180px 56px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -200, top: 80, width: 560, height: 560, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, oklch(0.8 0.15 55) 0%, ${COPPER} 22%, oklch(0.4 0.12 40) 60%, oklch(0.16 0.02 30) 100%)`,
          boxShadow: `inset -60px -100px 140px oklch(0.08 0.01 30), 0 0 160px oklch(0.55 0.2 55 / 0.2)`, opacity: 0.85 }} />

        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1.5, marginBottom: 32 }}>
            <span style={{ color: COPPER }}>←</span> &nbsp; Work &nbsp;/&nbsp; 01 — Featured &nbsp;/&nbsp; {p.tag}
          </div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 168, lineHeight: 0.92, letterSpacing: -5 }}>
            {p.name}<span style={{ color: COPPER, fontStyle: 'italic' }}>.</span>
          </div>
          <div style={{ marginTop: 32, fontSize: 20, color: PAPER_DIM, maxWidth: 720, lineHeight: 1.5, fontFamily: FONT_SERIF, fontStyle: 'italic' }}>
            A 3-tier accessibility platform (Platform · Plugin · Admin) ensuring WCAG compliance across German markets.
          </div>

          <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.22 0.005 80)`, borderRadius: 4, overflow: 'hidden' }}>
            {[
              ['CLIENT', 'Nextise GmbH'],
              ['ROLE', 'Full-Stack Lead'],
              ['YEAR', '2025'],
              ['DURATION', '8 months'],
              ['STATUS', 'Live · in production'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: INK_DEEP, padding: '22px 24px' }}>
                <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: COPPER, letterSpacing: 1.5 }}>{k}</div>
                <div style={{ fontSize: 15, marginTop: 8, color: PAPER }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div style={{ padding: '0 56px 100px' }}>
        <div style={{ aspectRatio: '16/9', borderRadius: 6, border: `1px solid oklch(0.22 0.005 80)`, background: `repeating-linear-gradient(45deg, oklch(0.22 0.005 80), oklch(0.22 0.005 80) 2px, oklch(0.2 0.005 80) 2px, oklch(0.2 0.005 80) 4px)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 13, color: MUTED, letterSpacing: 1 }}>
          [ hero screenshot · product shot · 16:9 ]
        </div>
      </div>

      {/* OVERVIEW — two col */}
      <div style={{ padding: '0 56px 120px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>§ 01 — Overview</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 42, lineHeight: 1.05, letterSpacing: -0.8 }}>The <span style={{ fontStyle: 'italic', color: COPPER }}>brief</span>.</div>
        </div>
        <div style={{ fontSize: 20, lineHeight: 1.6, color: PAPER, textWrap: 'pretty', fontFamily: FONT_SERIF, fontWeight: 400 }}>
          Build a WCAG-compliant accessibility platform for German markets, architected as three coordinated systems: a central Platform for content, a Plugin that could be embedded on any site, and an Admin for operators. Everything had to pass German accessibility audits, deploy reliably, and scale.
        </div>
      </div>

      {/* CHALLENGE */}
      <div style={{ padding: '0 56px 120px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>§ 02 — Challenge</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 42, lineHeight: 1.05, letterSpacing: -0.8 }}>What made it <span style={{ fontStyle: 'italic' }}>hard</span>.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            ['Three products, one codebase', 'Platform, Plugin, and Admin had different runtime constraints but needed shared state and identity.'],
            ['Strict WCAG compliance', 'Every component, every state, every focus ring had to meet AA+ standards and audit cleanly.'],
            ['Embeddable plugin', 'Had to run on any client site without breaking their CSS, and carry its own sandboxed state.'],
            ['German market expectations', 'Legal copy, i18n, GDPR, and infrastructure hosted in-region.'],
          ].map(([t, d], i) => (
            <div key={i} style={{ background: 'oklch(0.22 0.005 80)', padding: '24px 28px', borderRadius: 4, border: `1px solid oklch(0.26 0.005 80)` }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, marginBottom: 10 }}>0{i + 1}</div>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 10, letterSpacing: -0.2 }}>{t}</div>
              <div style={{ fontSize: 14, color: PAPER_DIM, lineHeight: 1.55 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY — 3 screenshots */}
      <div style={{ padding: '0 56px 120px' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>§ 03 — The build</div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, gridAutoRows: 360 }}>
          <div style={{ background: `repeating-linear-gradient(45deg, oklch(0.22 0.005 80), oklch(0.22 0.005 80) 2px, oklch(0.2 0.005 80) 2px, oklch(0.2 0.005 80) 4px)`, borderRadius: 6, border: `1px solid oklch(0.26 0.005 80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 13, color: MUTED, gridRow: 'span 2' }}>
            [ platform dashboard · 4:3 ]
          </div>
          <div style={{ background: `repeating-linear-gradient(45deg, oklch(0.22 0.005 80), oklch(0.22 0.005 80) 2px, oklch(0.2 0.005 80) 2px, oklch(0.2 0.005 80) 4px)`, borderRadius: 6, border: `1px solid oklch(0.26 0.005 80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 13, color: MUTED }}>
            [ plugin UI · portrait ]
          </div>
          <div style={{ background: `repeating-linear-gradient(45deg, oklch(0.22 0.005 80), oklch(0.22 0.005 80) 2px, oklch(0.2 0.005 80) 2px, oklch(0.2 0.005 80) 4px)`, borderRadius: 6, border: `1px solid oklch(0.26 0.005 80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 13, color: MUTED }}>
            [ admin console ]
          </div>
        </div>
      </div>

      {/* STACK + APPROACH */}
      <div style={{ padding: '0 56px 120px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>§ 04 — Approach</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 42, lineHeight: 1.05, letterSpacing: -0.8 }}>How I <span style={{ fontStyle: 'italic' }}>built</span> it.</div>
        </div>
        <div>
          <div style={{ fontSize: 17, lineHeight: 1.7, color: PAPER, fontFamily: FONT_SERIF, marginBottom: 40, textWrap: 'pretty' }}>
            I architected a shared TypeScript monorepo with a Next.js Platform, a Preact-compiled Plugin bundle (keeping embed size minimal), and a Next.js Admin. All three shared a core package for auth, design tokens, and accessibility primitives. Deployments ran on DigitalOcean Kubernetes with self-healing Postgres clusters.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, fontFamily: FONT_MONO, fontSize: 12 }}>
            {['Next.js 15', 'PayloadCMS', 'PostgreSQL', 'Kubernetes', 'GitHub Actions', 'TypeScript', 'Tailwind', 'Ingress-NGINX'].map(s => (
              <div key={s} style={{ border: `1px solid oklch(0.28 0.005 80)`, padding: '12px 14px', borderRadius: 4, color: PAPER_DIM, textAlign: 'center' }}>{s}</div>
            ))}
          </div>
        </div>
      </div>

      {/* OUTCOMES */}
      <div style={{ padding: '80px 56px 120px', borderTop: `1px solid oklch(0.2 0.005 80)`, borderBottom: `1px solid oklch(0.2 0.005 80)` }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 32 }}>§ 05 — Outcomes</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            ['99.9%', 'uptime maintained'],
            ['40%', 'deploy-time reduction'],
            ['AA+', 'WCAG compliance'],
            ['3', 'products, 1 codebase'],
          ].map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 112, fontWeight: 400, letterSpacing: -3, lineHeight: 1, color: COPPER }}>{v}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: MUTED, marginTop: 10, letterSpacing: 0.5, textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* NEXT PROJECT */}
      <div style={{ padding: '80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1 }}>↓ NEXT CASE STUDY</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>02 / 16</div>
        </div>
        <div style={{ marginTop: 20, fontFamily: FONT_SERIF, fontSize: 132, letterSpacing: -3, lineHeight: 0.95 }}>
          {PROJECTS[1].name} <span style={{ color: COPPER, fontStyle: 'italic' }}>→</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 15, color: PAPER_DIM, maxWidth: 600 }}>{PROJECTS[1].desc}</div>
      </div>

      {/* Footer */}
      <div style={{ padding: '60px 56px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>
        <span>{FACTS.email}</span>
        <span>© MMXXVI · chisamuel.com</span>
      </div>
    </div>
  );
};

window.PageCaseStudy = PageCaseStudy;
