import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { getMessages } from '@/i18n'
import WorkListing from '@/components/work/WorkListing'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  
  return {
    title: locale === 'fr' ? 'Projets | Chi Samuel' : 'Work | Chi Samuel',
    description: 'A full index of projects shipped between 2023 and 2026.',
  }
}

export default async function WorkPage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  const messages = await getMessages(locale)

  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'projects',
    locale: locale as 'en' | 'fr',
    limit: 100,
    sort: 'order',
  })

  return (
    <main className="pt-24 lg:pt-32">
      <WorkListing 
        projects={result.docs} 
        locale={locale} 
        messages={messages!.home.index}
      />
    </main>
  )
}
