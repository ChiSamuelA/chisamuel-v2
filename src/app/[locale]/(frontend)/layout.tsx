import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import './styles.css'
import { locales, type Locale } from '@/i18n'
import { notFound } from 'next/navigation'

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
  description: 'Chi Samuel — Senior Software Engineer. Full-stack · Cloud Infrastructure.',
  title: 'Chi Samuel',
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

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ background: 'oklch(0.12 0.005 80)' }}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
