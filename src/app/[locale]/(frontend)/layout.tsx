import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import './styles.css'
import { locales, type Locale, getMessages } from '@/i18n'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  description: 'Chi Samuel Apeng — Full-Stack Developer & Cloud Architect. Leading high-performance Next.js apps, robust Kubernetes deployments, and enterprise-grade tech stacks.',
  title: {
    template: '%s | Chi Samuel Apeng',
    default: 'Chi Samuel Apeng | Full-Stack Developer & Cloud Architect',
  },
  metadataBase: new URL('https://chisamuel.com'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Chi Samuel Apeng | Full-Stack Developer & Cloud Architect',
    description: 'Full-Stack Developer & Cloud Architect specializing in Next.js, Payload CMS, and Kubernetes workloads.',
    url: 'https://chisamuel.com',
    siteName: 'Chi Samuel Apeng Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Samuel Apeng | Full-Stack Developer & Cloud Architect',
    description: 'Full-Stack Developer & Cloud Architect.',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { children } = props
  const params = await props.params
  const { locale } = params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages(locale)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Chi Samuel Apeng',
    'alternateName': 'Chi Samuel',
    'url': 'https://chisamuel.com',
    'image': 'https://chisamuel.com/og-image.jpg',
    'jobTitle': 'Full-Stack Developer & Cloud Architect',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Yaoundé',
      'addressCountry': 'CM',
    },
    'email': 'me@chisamuel.com',
    'telephone': '+237659224784',
    'knowsAbout': [
      'Software Engineering',
      'Full-Stack Web Development',
      'Cloud Infrastructure',
      'Kubernetes (K8s)',
      'Docker',
      'Next.js',
      'React',
      'Payload CMS',
      'TypeScript',
      'DevOps',
      'SEO Optimization',
    ],
    'sameAs': [
      'https://github.com/ChiSamuelA',
      'https://cm.linkedin.com/in/chi-samuel-apeng',
      'https://wa.me/237659224784',
    ],
  }

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ background: 'oklch(0.12 0.005 80)' }}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Nav locale={locale} messages={messages!.home.nav} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
