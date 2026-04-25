// CV Page — structured, dense, readable at a glance. Same dark canvas.

const PageCV = () => {
  const W = 1440, H = 3400;
  return (
    <div style={{ width: W, height: H, background: INK_DEEP, color: PAPER, fontFamily: FONT_SANS, overflow: 'hidden', position: 'relative' }}>
      {/* Nav */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 0.4 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: COPPER, boxShadow: `0 0 12px ${COPPER}` }} />
          CHI_SAMUEL
        </div>
        <div style={{ display: 'flex', gap: 36, fontFamily: FONT_MONO, fontSize: 12, color: PAPER_DIM }}>
          <span>Index</span><span>Case studies</span><span style={{ color: PAPER }}>CV</span><span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '180px 56px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -260, top: 40, width: 520, height: 520, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, oklch(0.8 0.15 55) 0%, ${COPPER} 22%, oklch(0.4 0.12 40) 60%, oklch(0.16 0.02 30) 100%)`,
          boxShadow: `inset -60px -100px 140px oklch(0.08 0.01 30)`, opacity: 0.65 }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>— Curriculum Vitae · MMXXVI —</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 156, lineHeight: 0.92, letterSpacing: -4 }}>
            Chi Samuel<br /><span style={{ fontStyle: 'italic', color: COPPER }}>Apeng.</span>
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 48, fontFamily: FONT_MONO, fontSize: 13, color: PAPER_DIM }}>
            <span>Senior Software Engineer</span>
            <span>Full-Stack · Cloud Infrastructure</span>
            <span style={{ color: PAPER }}>Yaoundé · UTC+1</span>
            <span style={{ marginLeft: 'auto', color: COPPER, cursor: 'pointer' }}>↓ Download PDF</span>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div style={{ padding: '60px 56px 80px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 80 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase' }}>§ 01 — Summary</div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 32, lineHeight: 1.25, letterSpacing: -0.4, maxWidth: 900, textWrap: 'pretty' }}>
          Versatile Software Engineer with a holistic view of the lifecycle — from UI/UX design to Kubernetes orchestration. Proven track record building high-performance SaaS with <span style={{ color: COPPER }}>99.9% uptime</span>. Founder of Solumentics, partnering with enterprise clients including <span style={{ color: COPPER }}>MTN Business</span>.
        </div>
      </div>

      {/* EXPERIENCE */}
      <div style={{ padding: '60px 56px 80px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase' }}>§ 02 — Experience</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: MUTED, marginTop: 12 }}>3 roles · active</div>
        </div>
        <div>
          {[
            {
              title: 'Software Engineer',
              org: 'Nextise GmbH · Remote, Germany',
              span: 'Jan 2025 — Present',
              bullets: [
                'Led full-stack development of BarriereHilfe — a 3-tier WCAG-compliant platform for German markets.',
                'Orchestrated deployment of LinkReach, Autoreach, Automatish AI and other SaaS on DO Kubernetes with self-healing database clusters.',
                'Reduced deploy time by 40% via custom GitHub Actions pipelines (test, build, push).',
                'Modernized legacy Kodschul codebase — core web vitals + SEO lift via Next.js SSR.',
              ],
            },
            {
              title: 'Founder & Technical Lead',
              org: 'Solumentics · Yaoundé, Cameroon',
              span: 'Dec 2023 — Present',
              bullets: [
                'Partnered with WAP\'S CORPORATION (MTN Business Partner) to architect solutions for Canal+ Wholesale partners, Nadscam (NGO), and CSB-Amasia (education).',
                'Provisioned VPS environments + Nginx reverse proxies with SSL and load balancing.',
                'Launched custom platforms for international SMEs (e.g. clenvy.de) — Figma to Linux server, end-to-end.',
              ],
            },
            {
              title: 'Full Stack Developer',
              org: 'Adipster Tech Limited',
              span: 'Dec 2023 — Sep 2024',
              bullets: [
                'Developed high-throughput Golang APIs for a CRM system, optimizing queries on large datasets.',
                'Integrated Python LLM analysis tools into web dashboards visualizing real-estate trends.',
                'Collaborated on optimized 2D interactive simulations in Unity.',
              ],
            },
          ].map((job, i) => (
            <div key={i} style={{ paddingBottom: 40, marginBottom: 40, borderBottom: i < 2 ? `1px solid oklch(0.2 0.005 80)` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 40, letterSpacing: -0.8 }}>{job.title}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: COPPER }}>{job.span}</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: PAPER_DIM, marginBottom: 20 }}>{job.org}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', fontSize: 15, color: PAPER, lineHeight: 1.55 }}>
                    <span style={{ color: COPPER, fontFamily: FONT_MONO }}>→</span><span style={{ textWrap: 'pretty' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div style={{ padding: '60px 56px 80px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 80 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase' }}>§ 03 — Technical skills</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {[
            ['Languages', 'TypeScript · JavaScript (ES6+) · Python · SQL · Dart (Flutter) · Go'],
            ['Frontend', 'React · Next.js · Tailwind CSS · ShadCN UI · PayloadCMS · Figma'],
            ['Backend', 'Node.js · Express · Hono API · Flask · PostgreSQL · MongoDB · MySQL'],
            ['DevOps & Cloud', 'Kubernetes · Docker · GitHub Actions · DigitalOcean · Nginx · Linux'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 1.5, marginBottom: 10 }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: 16, color: PAPER, lineHeight: 1.55 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div style={{ padding: '60px 56px 80px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 80 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: COPPER, letterSpacing: 2, textTransform: 'uppercase' }}>§ 04 — Education</div>
        <div>
          {[
            { deg: "Bachelor's Degree — Computer Science", org: 'University of Yaoundé I', span: '2022 — 2023' },
            { deg: 'Higher National Diploma — Software Engineering', org: 'Siantou University Institute', span: '2020 — 2022' },
          ].map((e, i) => (
            <div key={i} style={{ padding: '20px 0', borderBottom: i < 1 ? `1px solid oklch(0.2 0.005 80)` : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 28, letterSpacing: -0.4 }}>{e.deg}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: PAPER_DIM, marginTop: 6 }}>{e.org}</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: COPPER }}>{e.span}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '60px 56px', borderTop: `1px solid oklch(0.2 0.005 80)`, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 12, color: MUTED }}>
        <span style={{ color: PAPER }}>{FACTS.email}</span>
        <span>{FACTS.phone}</span>
        <span>github.com/chisamuelapeng</span>
        <span>linkedin.com/in/chisamuel</span>
        <span>© MMXXVI</span>
      </div>
    </div>
  );
};

window.PageCV = PageCV;
