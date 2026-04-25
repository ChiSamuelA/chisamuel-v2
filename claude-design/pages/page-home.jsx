// Homepage — extended Cinematic direction
// Adds: about/stack strip, full 16-project index, testimonial-style quote, footer CTA

const PageHome = () => {
  const W = 1440, H = 4400;
  return (
    <div style={{ width: W, height: H, background: INK_DEEP, color: PAPER, fontFamily: FONT_SANS, overflow: 'hidden', position: 'relative' }}>
      {/* Nav */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 56px', fontSize: 13 }}>
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
        <div style={{ position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, -50%)', width: 820, height: 820, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, oklch(0.85 0.15 55) 0%, ${COPPER} 18%, oklch(0.5 0.15 40) 45%, oklch(0.25 0.08 30) 75%, oklch(0.15 0.02 30) 100%)`,
          boxShadow: `inset -80px -140px 200px oklch(0.08 0.01 30), 0 0 200px oklch(0.45 0.2 55 / 0.35), 0 0 400px oklch(0.55 0.2 55 / 0.2)` }} />
        <div style={{ position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%,-50%)', width: 1200, height: 1200, borderRadius: '50%', background: `radial-gradient(circle, oklch(0.6 0.2 55 / 0.15) 0%, transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")` }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>— Portfolio — MMXXVI —</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 176, lineHeight: 0.95, letterSpacing: -4, fontWeight: 400, mixBlendMode: 'difference', color: PAPER }}>
            Engineer of<br /><span style={{ fontStyle: 'italic' }}>things that</span><br />actually ship.
          </div>
          <div style={{ position: 'absolute', left: 72, bottom: 72, display: 'flex', gap: 48, alignItems: 'flex-end' }}>
            <div style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.55, color: PAPER_DIM }}>
              Full-stack engineer. I build production SaaS from Figma to Kubernetes. Based in Yaoundé, shipping globally.
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 0.5 }}>
              <div>↓ Scroll to explore</div>
              <div style={{ marginTop: 8 }}>16 projects · 2023—2026</div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 30) 95%)', pointerEvents: 'none' }} />
      </div>

      {/* ABOUT STRIP */}
      <div style={{ padding: '120px 56px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase' }}>— About —</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 72, lineHeight: 1.05, letterSpacing: -1.5, marginTop: 24 }}>
            I care about the <span style={{ fontStyle: 'italic', color: COPPER }}>whole pipeline</span> — pixels to production.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, fontSize: 16, lineHeight: 1.65, color: PAPER_DIM }}>
          <p style={{ margin: 0, textWrap: 'pretty' }}>I'm a senior software engineer with a holistic view of the lifecycle — UI/UX in Figma, production SaaS in Next.js, and self-healing clusters in Kubernetes.</p>
          <p style={{ margin: 0, textWrap: 'pretty' }}>Currently building at <span style={{ color: PAPER }}>Nextise GmbH</span> (remote, DE), and founder of <span style={{ color: PAPER }}>Solumentics</span> — partnered with MTN Business, Canal+ partners, international SMEs.</p>
          <p style={{ margin: 0, color: COPPER, fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 22, marginTop: 12 }}>"Curious. Always learning."</p>
        </div>
      </div>

      {/* STACK STRIP */}
      <div style={{ padding: '40px 56px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.22 0.005 80)` }}>
          {[
            ['LANG', 'TypeScript · JavaScript · Python · SQL · Go · Dart'],
            ['FRONT', 'Next.js · React · Tailwind · ShadCN · PayloadCMS · Figma'],
            ['BACK', 'Node · Hono · Express · Flask · PostgreSQL · MongoDB'],
            ['INFRA', 'Kubernetes · Docker · GitHub Actions · DO · Nginx · Linux'],
          ].map(([k, v]) => (
            <div key={k} style={{ background: INK_DEEP, padding: '32px 28px' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5 }}>{k}</div>
              <div style={{ fontSize: 15, color: PAPER_DIM, marginTop: 14, lineHeight: 1.55 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED WORK — bento */}
      <div style={{ padding: '0 56px 100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase' }}>— Selected —</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 72, letterSpacing: -1.5, marginTop: 10 }}>Featured work.</div>
          </div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>/01 — /04 · 2024—2026</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridAutoRows: 380, gap: 20 }}>
          <div style={{ background: `linear-gradient(135deg, oklch(0.22 0.03 40), oklch(0.16 0.02 30))`, border: `1px solid oklch(0.28 0.02 40)`, padding: 44, borderRadius: 6, gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -140, bottom: -140, width: 440, height: 440, borderRadius: '50%', background: `radial-gradient(circle, ${COPPER} 0%, transparent 70%)`, opacity: 0.3 }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1 }}>01 · FEATURED — {PROJECTS[0].tag}</div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 96, letterSpacing: -2.5, marginTop: 24, lineHeight: 0.98 }}>{PROJECTS[0].name}</div>
              <div style={{ fontSize: 15, color: PAPER_DIM, marginTop: 24, maxWidth: 520, lineHeight: 1.55 }}>{PROJECTS[0].desc}</div>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>
              <span>{PROJECTS[0].stack}</span>
              <span style={{ color: COPPER }}>{PROJECTS[0].year} — read case study →</span>
            </div>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.28 0.005 80)`, padding: 28, borderRadius: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1 }}>{PROJECTS[i].n} · {PROJECTS[i].tag}</div>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 44, marginTop: 16, letterSpacing: -0.8, lineHeight: 1 }}>{PROJECTS[i].name}</div>
                <div style={{ fontSize: 13, color: PAPER_DIM, marginTop: 14, lineHeight: 1.5 }}>{PROJECTS[i].desc}</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, display: 'flex', justifyContent: 'space-between' }}>
                <span>{PROJECTS[i].stack}</span><span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL INDEX — all 16 */}
      <div style={{ padding: '80px 56px 80px', borderTop: `1px solid oklch(0.2 0.005 80)` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 48, letterSpacing: -1 }}>The full <span style={{ fontStyle: 'italic' }}>index</span></div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>16 projects — 2023—2026</div>
        </div>
        <div>
          {PROJECTS.map((p, i) => (
            <div key={p.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px 220px 100px', alignItems: 'baseline', padding: '22px 0', borderTop: `1px solid oklch(0.2 0.005 80)`, fontSize: 13 }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>{p.n}</div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 28, letterSpacing: -0.4 }}>{p.name}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, textTransform: 'uppercase', letterSpacing: 0.5 }}>{p.tag}</div>
              <div style={{ fontSize: 13, color: PAPER_DIM }}>{p.role}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, textAlign: 'right' }}>{p.year} <span style={{ color: COPPER }}>↗</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div style={{ padding: '120px 56px 60px', borderTop: `1px solid oklch(0.2 0.005 80)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -200, top: -100, width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${COPPER} 0%, transparent 70%)`, opacity: 0.15 }} />
        <div style={{ position: 'relative', fontFamily: FONT_SERIF, fontSize: 128, lineHeight: 0.95, letterSpacing: -3 }}>
          Let's build<br />something <span style={{ color: COPPER, fontStyle: 'italic' }}>real. →</span>
        </div>
        <div style={{ position: 'relative', marginTop: 56, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 12, color: MUTED, borderTop: `1px solid oklch(0.2 0.005 80)`, paddingTop: 28 }}>
          <span style={{ color: PAPER }}>{FACTS.email}</span>
          <span>{FACTS.phone}</span>
          <span>Yaoundé · UTC+1 · Open to remote</span>
          <span>© MMXXVI — chisamuel.com v3</span>
        </div>
      </div>
    </div>
  );
};

window.PageHome = PageHome;
