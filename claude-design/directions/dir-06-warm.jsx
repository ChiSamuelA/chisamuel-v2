// Direction 06 — WARM / PERSONAL (the "paper & copper" home)
// Off-white background, generous whitespace, one copper accent.
// Feel: personal, warm, confident without shouting. Like a well-made book.

const Dir06 = () => {
  const W = 1280, H = 2400;
  return (
    <div style={{ width: W, height: H, background: PAPER, color: INK, fontFamily: FONT_SANS, overflow: 'hidden' }}>
      {/* Soft nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '32px 64px', fontSize: 13 }}>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 20, fontStyle: 'italic' }}>Chi Samuel</div>
        <div style={{ display: 'flex', gap: 28, fontFamily: FONT_MONO, fontSize: 12, color: MUTED, letterSpacing: 0.3 }}>
          <span>Work</span><span>CV</span><span>Contact</span>
          <span style={{ color: COPPER }}>● Available May ’26</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '100px 64px 80px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 110, lineHeight: 1, letterSpacing: -3, fontWeight: 400 }}>
            I build <span style={{ fontStyle: 'italic', color: COPPER }}>software</span><br />
            that people <span style={{ fontStyle: 'italic' }}>actually use.</span>
          </div>
        </div>
        <div style={{ paddingBottom: 20 }}>
          <div style={{ width: 48, height: 2, background: COPPER, marginBottom: 20 }} />
          <div style={{ fontSize: 15, lineHeight: 1.6, color: INK, textWrap: 'pretty' }}>
            A senior full-stack engineer from Yaoundé. I work across the stack — UI, backend, Kubernetes — with the attention of someone who's shipped it.
          </div>
          <div style={{ marginTop: 20, fontFamily: FONT_MONO, fontSize: 12, color: MUTED, lineHeight: 1.8 }}>
            Currently → Nextise GmbH<br />
            Founder → Solumentics
          </div>
        </div>
      </div>

      {/* Visual moment — portrait placeholder + note */}
      <div style={{ padding: '0 64px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 48, alignItems: 'stretch' }}>
          <div style={{ aspectRatio: '3/4', background: `repeating-linear-gradient(45deg, oklch(0.88 0.02 60), oklch(0.88 0.02 60) 2px, oklch(0.84 0.02 60) 2px, oklch(0.84 0.02 60) 4px)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 0.5 }}>
            [ portrait · 3:4 ]
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 0' }}>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>— A short note</div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 36, lineHeight: 1.25, letterSpacing: -0.5, textWrap: 'pretty', maxWidth: 640 }}>
                Over the last six months I've shipped sixteen projects — from a WCAG-compliant German accessibility platform to a marketplace to a thrift app to enterprise work with MTN Business. This site is a living record of that.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 48, paddingTop: 40, borderTop: `1px solid oklch(0.85 0.005 80)` }}>
              {[['16', 'projects'], ['99.9%', 'uptime'], ['5+', 'years'], ['MTN', 'enterprise']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: FONT_SERIF, fontSize: 42, fontWeight: 400, letterSpacing: -1, lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: MUTED, marginTop: 6, letterSpacing: 1, textTransform: 'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured work — magazine-style */}
      <div style={{ padding: '40px 64px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 52, letterSpacing: -1 }}>Recent <span style={{ fontStyle: 'italic' }}>work</span></div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 0.5 }}>Showing 4 of 16 · <span style={{ color: COPPER }}>See all →</span></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, rowGap: 56 }}>
          {PROJECTS.filter(p => p.featured).map((p) => (
            <div key={p.n}>
              <div style={{ aspectRatio: '4/3', background: `repeating-linear-gradient(45deg, oklch(0.9 0.02 60), oklch(0.9 0.02 60) 2px, oklch(0.86 0.02 60) 2px, oklch(0.86 0.02 60) 4px)`, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>
                [ {p.name} · screen ]
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1, textTransform: 'uppercase' }}>{p.n} · {p.tag}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>{p.year}</div>
              </div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 36, letterSpacing: -0.7, lineHeight: 1.1, marginBottom: 10 }}>{p.name}</div>
              <div style={{ fontSize: 14, color: INK, lineHeight: 1.55, marginBottom: 14, textWrap: 'pretty' }}>{p.desc}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>{p.stack} &nbsp;<span style={{ color: COPPER }}>— Read case study →</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '80px 64px 48px', borderTop: `1px solid oklch(0.85 0.005 80)` }}>
        <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 72, lineHeight: 1.05, letterSpacing: -1.5 }}>
          Got a project? <span style={{ color: COPPER }}>Let's talk.</span>
        </div>
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 12, color: MUTED, letterSpacing: 0.3 }}>
          <span>{FACTS.email}</span>
          <span>{FACTS.phone}</span>
          <span>Yaoundé · UTC+1</span>
          <span>© MMXXVI</span>
        </div>
      </div>
    </div>
  );
};

window.Dir06 = Dir06;
