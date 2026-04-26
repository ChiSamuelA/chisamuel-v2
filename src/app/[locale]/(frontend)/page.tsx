import Hero from '@/components/home/Hero'
import AboutStrip from '@/components/home/AboutStrip'
import { getMessages } from '@/i18n'

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  const messages = await getMessages(locale)

  return (
    <>
      <Hero 
        label={messages!.home.hero.label}
        headline={messages!.home.hero.headline}
        tagline={messages!.home.hero.tagline}
        scroll={messages!.home.hero.scroll}
        projects={messages!.home.hero.projects}
      />
      <AboutStrip
        label={messages!.home.about.label}
        headline={messages!.home.about.headline}
        p1={messages!.home.about.p1}
        p2={messages!.home.about.p2}
        p3={messages!.home.about.p3}
        quote={messages!.home.about.quote}
      />
    </>
  )
}
