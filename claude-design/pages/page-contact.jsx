// Contact Page — portrait lives here. Warmer feel (still on dark),
// copper accent more present, quieter than home.

const PageContact = () => {
  const W = 1440, H = 2800;
  return (
    <div style={{ width: W, height: H, background: INK_DEEP, color: PAPER, fontFamily: FONT_SANS, overflow: 'hidden', position: 'relative' }}>
      {/* Nav */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.4 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: COPPER, boxShadow: `0 0 12px ${COPPER}` }} />
          CHI_SAMUEL
        </div>
        <div style={{ display: 'flex', gap: 36, fontFamily: FONT_MONO, fontSize: 12, color: PAPER_DIM }}>
          <span>Index</span><span>Case studies</span><span>CV</span><span style={{ color: PAPER }}>Contact</span>
        </div>
      </div>

      {/* HERO — portrait + greeting */}
      <div style={{ padding: '160px 56px 100px', position: 'relative', overflow: 'hidden' }}>
        {/* Small sphere, softer, top-right */}
        <div style={{ position: 'absolute', right: -120, top: -80, width: 340, height: 340, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, oklch(0.8 0.15 55) 0%, ${COPPER} 22%, oklch(0.4 0.12 40) 60%, oklch(0.16 0.02 30) 100%)`,
          opacity: 0.7, filter: 'blur(0.5px)' }} />

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '420px 1fr', gap: 80, alignItems: 'end' }}>
          {/* Portrait slot */}
          <div style={{ aspectRatio: '3/4', borderRadius: 6, border: `1px solid oklch(0.28 0.005 80)`, overflow: 'hidden', position: 'relative',
            background: `repeating-linear-gradient(45deg, oklch(0.22 0.005 80), oklch(0.22 0.005 80) 2px, oklch(0.2 0.005 80) 2px, oklch(0.2 0.005 80) 4px)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_MONO, fontSize: 13, color: MUTED, letterSpacing: 1 }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 80, height: 80, borderRadius: 40, background: 'oklch(0.28 0.005 80)', border: `1px solid oklch(0.32 0.005 80)` }} />
              <div>[ portrait · 3:4 · drop image here ]</div>
            </div>
          </div>

          {/* Greeting */}
          <div style={{ paddingBottom: 20 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>— Hello —</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 140, lineHeight: 0.92, letterSpacing: -4 }}>
              Let's <span style={{ fontStyle: 'italic', color: COPPER }}>talk</span>.
            </div>
            <div style={{ marginTop: 32, fontSize: 19, lineHeight: 1.55, color: PAPER_DIM, maxWidth: 580, fontFamily: FONT_SERIF, fontStyle: 'italic', textWrap: 'pretty' }}>
              I'm Chi Samuel — the person behind the work. Whether you're a recruiter, a founder, or a fellow engineer, I'd love to hear what you're building.
            </div>
            <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 10, background: COPPER, color: INK_DEEP, padding: '16px 28px', fontFamily: FONT_MONO, fontSize: 13, letterSpacing: 0.5, borderRadius: 4, fontWeight: 500 }}>
              → Send me an email
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT CARDS */}
      <div style={{ padding: '40px 56px 100px' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>§ Reach me</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.22 0.005 80)`, borderRadius: 4, overflow: 'hidden' }}>
          {[
            { k: 'Email', v: FACTS.email, tag: 'Primary · reply within 24h' },
            { k: 'Phone / WhatsApp', v: FACTS.phone, tag: 'Yaoundé — UTC+1' },
            { k: 'GitHub', v: '/chisamuelapeng', tag: 'Code · open source' },
            { k: 'LinkedIn', v: '/in/chisamuel', tag: 'Professional network' },
          ].map(c => (
            <div key={c.k} style={{ background: INK_DEEP, padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>{c.k}</div>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 38, letterSpacing: -0.6 }}>{c.v}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, marginTop: 10 }}>{c.tag}</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 20, color: COPPER }}>↗</div>
            </div>
          ))}
        </div>
      </div>

      {/* INLINE MESSAGE FORM */}
      <div style={{ padding: '40px 56px 100px' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>§ Or send a note</div>
        <div style={{ background: 'oklch(0.22 0.005 80)', border: `1px solid oklch(0.26 0.005 80)`, borderRadius: 6, padding: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Your name</div>
              <div style={{ borderBottom: `1px solid oklch(0.32 0.005 80)`, padding: '10px 0', fontSize: 16, color: PAPER_DIM, fontFamily: FONT_SERIF, fontStyle: 'italic' }}>e.g. Jane Founder</div>
            </div>
            <div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Your email</div>
              <div style={{ borderBottom: `1px solid oklch(0.32 0.005 80)`, padding: '10px 0', fontSize: 16, color: PAPER_DIM, fontFamily: FONT_SERIF, fontStyle: 'italic' }}>jane@startup.io</div>
            </div>
          </div>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>What are you building?</div>
            <div style={{ borderBottom: `1px solid oklch(0.32 0.005 80)`, padding: '10px 0 60px', fontSize: 16, color: PAPER_DIM, fontFamily: FONT_SERIF, fontStyle: 'italic' }}>A line or two about the project, timeline, or role…</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED }}>→ Delivered directly to {FACTS.email}</div>
            <div style={{ background: COPPER, color: INK_DEEP, padding: '14px 28px', fontFamily: FONT_MONO, fontSize: 13, letterSpacing: 0.5, borderRadius: 4, fontWeight: 500 }}>Send message →</div>
          </div>
        </div>
      </div>

      {/* AVAILABILITY */}
      <div style={{ padding: '40px 56px 80px', borderTop: `1px solid oklch(0.2 0.005 80)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48 }}>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Availability</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 24, letterSpacing: -0.3, lineHeight: 1.3 }}>Open to <span style={{ fontStyle: 'italic', color: COPPER }}>contract</span> and <span style={{ fontStyle: 'italic', color: COPPER }}>full-time</span> roles starting May 2026.</div>
          </div>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Timezone</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 24, letterSpacing: -0.3, lineHeight: 1.3 }}>Yaoundé · <span style={{ fontStyle: 'italic' }}>UTC+1</span>. Comfortable overlapping with EU and most US zones.</div>
          </div>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Rate / Range</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 24, letterSpacing: -0.3, lineHeight: 1.3 }}>Happy to share on ask. <span style={{ fontStyle: 'italic' }}>Flexible</span> for the right team.</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '60px 56px', borderTop: `1px solid oklch(0.2 0.005 80)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 56, lineHeight: 1 }}>
          Thanks for reading. <span style={{ color: COPPER }}>—CSA</span>
        </div>
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>
          <span>© MMXXVI · chisamuel.com v3</span>
          <span>Set in Instrument Serif · Inter · JetBrains Mono</span>
        </div>
      </div>
    </div>
  );
};

window.PageContact = PageContact;
