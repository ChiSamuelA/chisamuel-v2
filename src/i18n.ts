import { notFound } from 'next/navigation'

export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]

export async function getMessages(locale: string) {
  if (!locales.includes(locale as Locale)) notFound()

  try {
    const home = (await import(`../messages/${locale}/home.json`)).default
    return {
      home,
    }
  } catch (error) {
    notFound()
  }
}
