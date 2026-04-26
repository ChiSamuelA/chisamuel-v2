export type Project = {
  n: string
  name: string
  role: string
  year: string
  tag: string
  stack: string
  desc: string
  href: string
  featured?: true
}

export type Facts = {
  name: string
  short: string
  role: string
  subRole: string
  loc: string
  tz: string
  email: string
  phone: string
  deployUptime: string
  deployCut: string
  years: string
  shipped: string
  enterprise: string
}

export const PROJECTS: Project[] = [
  { 
    n: '01', 
    name: 'BarriereHilfe',    
    role: 'Full-Stack Architect', 
    year: '2025', 
    tag: 'Accessibility · Germany',   
    stack: 'Next.js · PayloadCMS · K8s',     
    desc: 'The digital roadmap for accessibility in Germany. Led end-to-end architecture at Nextise GmbH to deliver WCAG-compliant tools and audits. Live at barrierehilfe.de.', 
    href: 'https://barrierehilfe.de/', 
    featured: true 
  },
  { 
    n: '02', 
    name: 'Kodschul',         
    role: 'Performance + SEO',    
    year: '2025', 
    tag: 'EdTech · AI Training',           
    stack: 'Next.js · SSR · AI Agents',                   
    desc: 'Specialized IT & AI training platform. Optimized legacy systems to support hands-on workshops for 3000+ participants and 250+ organizations.', 
    href: 'https://kodschul.com', 
    featured: true 
  },
  { 
    n: '03', 
    name: 'ThriftPlug',       
    role: 'Founder engineer',     
    year: '2025', 
    tag: 'Marketplace · Fashion',     
    stack: 'Next.js · Stripe · Postgres',     
    desc: 'Custom-built thrift & resale marketplace with real-time inventory and Stripe integration. Scalable architecture for high-growth commerce.', 
    href: 'https://thrift-plug.com/', 
    featured: true 
  },
  { 
    n: '04', 
    name: 'Nextise',          
    role: 'Lead Architect',       
    year: '2024', 
    tag: 'AI · Automation · DE',       
    stack: 'Next.js · n8n · K8s',         
    desc: 'Strategic partner for AI integration and process automation. Building scalable, GDPR-compliant AI agents and workflows for German enterprises.', 
    href: 'https://nextise.de', 
    featured: true 
  },
  { n: '05', name: 'LinkReach',        role: 'Infrastructure',       year: '2025', tag: 'SaaS · Automation',         stack: 'K8s · DigitalOcean',              desc: 'Outreach automation platform — deployed on DO Kubernetes with self-healing DB clusters.',                                   href: '#' },
  { n: '06', name: 'Autoreach',        role: 'Infrastructure',       year: '2025', tag: 'SaaS · Automation',         stack: 'K8s · Ingress · CI/CD',           desc: 'Sister product to LinkReach. 40% deploy-time reduction via custom GitHub Actions.',                                         href: '#' },
  { n: '07', name: 'Automatish AI',    role: 'Full-stack + Infra',   year: '2025', tag: 'AI · Automation',           stack: 'Next.js · Python · K8s',          desc: 'AI-powered workflow automation in the Nextise ecosystem.',                                                                    href: '#' },
  { n: '08', name: 'TargetDesk',       role: 'Design + Build',       year: '2025', tag: 'SaaS · CRM',                stack: 'Next.js · Tailwind · Node',       desc: 'Sales intelligence workspace. Live at targetdesk.fr.',                                                                        href: 'https://targetdesk.fr/' },
  { n: '09', name: 'Clenvy.de',        role: 'Design → Deploy',      year: '2024', tag: 'Client · Germany',          stack: 'Next.js · VPS · Nginx',           desc: 'International SME — Figma to Linux server, soup to nuts.',                                                                   href: '#' },
  { n: '10', name: 'Canal+ Wholesale', role: 'Solumentics',          year: '2024', tag: 'Enterprise · Telecom',      stack: 'Custom',                          desc: "Digital solutions via WAP'S CORPORATION (MTN Business Partner).",                                                            href: '#' },
  { n: '11', name: 'Nadscam (NGO)',    role: 'Solumentics',          year: '2024', tag: 'Non-profit',                stack: 'Web platform',                    desc: 'Platform for an NGO client under Solumentics.',                                                                              href: '#' },
  { n: '12', name: 'CSB-Amasia',       role: 'Solumentics',          year: '2024', tag: 'Education',                 stack: 'Web platform',                    desc: 'Education client platform.',                                                                                                 href: '#' },
  { n: '13', name: 'Adipster CRM',     role: 'Backend',              year: '2024', tag: 'CRM · Real estate',         stack: 'Golang · Python LLM',             desc: 'High-throughput Go APIs + Python LLM dashboards for real estate trends.',                                                   href: '#' },
  { n: '14', name: 'Unity Simulations',role: 'Collaborator',         year: '2024', tag: '2D · Interactive',          stack: 'Unity · C#',                      desc: 'Optimized 2D interactive simulations at Adipster.',                                                                          href: '#' },
  { n: '15', name: 'Solumentics',      role: 'Founder',              year: '2023—', tag: 'Agency · Cameroon',        stack: 'Multi-stack',                     desc: 'Partnered w/ MTN Business ecosystem. Digital transformation delivery.',                                                      href: '#' },
  { n: '16', name: 'Portfolio v3',     role: 'Self',                 year: '2026', tag: 'Personal · WebGL',          stack: 'Next.js · Three.js',              desc: 'This site. Built from scratch. No vibe-coded slop.',                                                                         href: '#' },
]

export const FACTS: Facts = {
  name:          'Chi Samuel Apeng',
  short:         'Chi Samuel',
  role:          'Senior Software Engineer',
  subRole:       'Full-Stack · Cloud Infrastructure',
  loc:           'Yaoundé, CM',
  tz:            'UTC+1',
  email:         'chisamuelapeng@gmail.com',
  phone:         '+237 659 224 784',
  deployUptime:  '99.9%',
  deployCut:     '40%',
  years:         '5+',
  shipped:       '16',
  enterprise:    'MTN Business',
}
