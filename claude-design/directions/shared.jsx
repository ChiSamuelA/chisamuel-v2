// Shared tokens and primitives for all 6 directions

const COPPER = 'oklch(0.72 0.16 55)';
const COPPER_DIM = 'oklch(0.55 0.12 55)';
const INK = 'oklch(0.18 0.005 80)';
const INK_DEEP = 'oklch(0.12 0.005 80)';
const PAPER = 'oklch(0.96 0.005 80)';
const PAPER_DIM = 'oklch(0.88 0.005 80)';
const MUTED = 'oklch(0.60 0.005 80)';

const FONT_SERIF = '"Instrument Serif", "Times New Roman", serif';
const FONT_SANS = '"Inter", -apple-system, system-ui, sans-serif';
const FONT_MONO = '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace';

// Data — real projects from CV + user-provided URLs
const PROJECTS = [
  { n: '01', name: 'BarriereHilfe', role: 'Full-Stack Architect', year: '2025', tag: 'Accessibility · Germany', stack: 'Next.js · PayloadCMS · K8s', desc: 'A 3-tier WCAG-compliant platform (Platform, Plugin, Admin) for German markets. Led end-to-end architecture at Nextise GmbH.', href: '#', featured: true },
  { n: '02', name: 'TargetDesk', role: 'Design + Build', year: '2025', tag: 'SaaS · CRM', stack: 'Next.js · Tailwind · Node', desc: 'Sales intelligence workspace. Live at targetdesk.fr.', href: 'https://targetdesk.fr/', featured: true },
  { n: '03', name: 'ThriftPlug', role: 'Founder engineer', year: '2025', tag: 'Marketplace · Fashion', stack: 'Next.js · Stripe · Postgres', desc: 'Thrift & resale marketplace at thrift-plug.com.', href: 'https://thrift-plug.com/', featured: true },
  { n: '04', name: 'We-Xperience', role: 'Full-stack', year: '2024', tag: 'Experience platform', stack: 'React · Node · Nginx', desc: 'Booking & experience management at we-xperience.com.', href: 'http://we-xperience.com/', featured: true },
  { n: '05', name: 'LinkReach', role: 'Infrastructure', year: '2025', tag: 'SaaS · Automation', stack: 'K8s · DigitalOcean', desc: 'Outreach automation platform — deployed on DO Kubernetes with self-healing DB clusters.', href: '#' },
  { n: '06', name: 'Autoreach', role: 'Infrastructure', year: '2025', tag: 'SaaS · Automation', stack: 'K8s · Ingress · CI/CD', desc: 'Sister product to LinkReach. 40% deploy-time reduction via custom GitHub Actions.', href: '#' },
  { n: '07', name: 'Automatish AI', role: 'Full-stack + Infra', year: '2025', tag: 'AI · Automation', stack: 'Next.js · Python · K8s', desc: 'AI-powered workflow automation in the Nextise ecosystem.', href: '#' },
  { n: '08', name: 'Kodschul', role: 'Performance', year: '2025', tag: 'EdTech · Legacy', stack: 'Next.js · SSR', desc: 'Modernized legacy codebase — core web vitals + SEO lift via SSR.', href: '#' },
  { n: '09', name: 'Clenvy.de', role: 'Design → Deploy', year: '2024', tag: 'Client · Germany', stack: 'Next.js · VPS · Nginx', desc: 'International SME — Figma to Linux server, soup to nuts.', href: '#' },
  { n: '10', name: 'Canal+ Wholesale', role: 'Solumentics', year: '2024', tag: 'Enterprise · Telecom', stack: 'Custom', desc: 'Digital solutions via WAP\'S CORPORATION (MTN Business Partner).', href: '#' },
  { n: '11', name: 'Nadscam (NGO)', role: 'Solumentics', year: '2024', tag: 'Non-profit', stack: 'Web platform', desc: 'Platform for an NGO client under Solumentics.', href: '#' },
  { n: '12', name: 'CSB-Amasia', role: 'Solumentics', year: '2024', tag: 'Education', stack: 'Web platform', desc: 'Education client platform.', href: '#' },
  { n: '13', name: 'Adipster CRM', role: 'Backend', year: '2024', tag: 'CRM · Real estate', stack: 'Golang · Python LLM', desc: 'High-throughput Go APIs + Python LLM dashboards for real estate trends.', href: '#' },
  { n: '14', name: 'Unity Simulations', role: 'Collaborator', year: '2024', tag: '2D · Interactive', stack: 'Unity · C#', desc: 'Optimized 2D interactive simulations at Adipster.', href: '#' },
  { n: '15', name: 'Solumentics', role: 'Founder', year: '2023—', tag: 'Agency · Cameroon', stack: 'Multi-stack', desc: 'Partnered w/ MTN Business ecosystem. Digital transformation delivery.', href: '#' },
  { n: '16', name: 'Portfolio v3', role: 'Self', year: '2026', tag: 'Personal · WebGL', stack: 'Next.js · Three.js', desc: 'This site. Built from scratch. No vibe-coded slop.', href: '#' },
];

const FACTS = {
  name: 'Chi Samuel Apeng',
  short: 'Chi Samuel',
  role: 'Senior Software Engineer',
  subRole: 'Full-Stack · Cloud Infrastructure',
  loc: 'Yaoundé, CM',
  tz: 'UTC+1',
  email: 'chisamuelapeng@gmail.com',
  phone: '+237 659 224 784',
  deployUptime: '99.9%',
  deployCut: '40%',
  years: '5+',
  shipped: '16',
  enterprise: 'MTN Business',
};

Object.assign(window, {
  COPPER, COPPER_DIM, INK, INK_DEEP, PAPER, PAPER_DIM, MUTED,
  FONT_SERIF, FONT_SANS, FONT_MONO,
  PROJECTS, FACTS,
});
