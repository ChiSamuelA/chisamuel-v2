export type Project = {
  n: string
  name: string
  year: string
  stack: string
  href: string
  slug: string
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
    year: '2025', 
    stack: 'Next.js · PayloadCMS · K8s',     
    href: 'https://barrierehilfe.de/', 
    slug: 'barrierehilfe',
    featured: true 
  },
  { 
    n: '02', 
    name: 'Kodschul',         
    year: '2025', 
    stack: 'Next.js · SSR · AI Agents',                   
    href: 'https://kodschul.com', 
    slug: 'kodschul',
    featured: true 
  },
  { 
    n: '03', 
    name: 'ThriftPlug',       
    year: '2025', 
    stack: 'Next.js · Stripe · Postgres',     
    href: 'https://thrift-plug.com/', 
    slug: 'thrift-plug',
    featured: true 
  },
  { 
    n: '04', 
    name: 'Nextise',          
    year: '2024', 
    stack: 'Next.js · n8n · K8s',         
    href: 'https://nextise.de', 
    slug: 'nextise',
    featured: true 
  },
  { n: '05', name: 'LinkReach',        year: '2025', stack: 'K8s · DigitalOcean',              href: '#', slug: 'linkreach' },
  { n: '06', name: 'Autoreach',        year: '2025', stack: 'K8s · Ingress · CI/CD',           href: '#', slug: 'autoreach' },
  { n: '07', name: 'Automatish AI',    year: '2025', stack: 'Next.js · Python · K8s',          href: '#', slug: 'automatish-ai' },
  { n: '08', name: 'TargetDesk',       year: '2025', stack: 'Next.js · Tailwind · Node',       href: 'https://targetdesk.fr/', slug: 'targetdesk' },
  { n: '09', name: 'Canal+ Wholesale', year: '2024', stack: 'Custom',                          href: '#', slug: 'canal-plus-wholesale' },
  { n: '10', name: 'Nadscam (NGO)',    year: '2024', stack: 'Web platform',                    href: '#', slug: 'nadscam' },
  { n: '11', name: 'CSB-Amasia',       year: '2024', stack: 'Web platform',                    href: '#', slug: 'csb-amasia' },
  { n: '12', name: 'Solumentics',      year: '2023—', stack: 'Multi-stack',                     href: '#', slug: 'solumentics' },
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
  shipped:       '12',
  enterprise:    'MTN Business',
}
