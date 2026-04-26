import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import { getMessages } from '@/i18n'

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  const messages = await getMessages(locale)

  return (
    <>
      <Nav locale={locale} messages={messages!.home.nav} />
      <Hero 
        label={messages!.home.hero.label}
        headline={messages!.home.hero.headline}
        tagline={messages!.home.hero.tagline}
        scroll={messages!.home.hero.scroll}
        projects={messages!.home.hero.projects}
      />
    </>
  )
}
