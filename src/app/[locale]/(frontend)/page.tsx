import Hero from '@/components/home/Hero'
import AboutStrip from '@/components/home/AboutStrip'
import StackStrip from '@/components/home/StackStrip'
import FeaturedWork from '@/components/home/FeaturedWork'
import ProjectIndex from '@/components/home/ProjectIndex'
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
      <StackStrip />
      <FeaturedWork 
        locale={locale} 
        messages={messages!.home.featured} 
        projectMessages={messages!.home.projects}
      />
      <ProjectIndex 
        locale={locale} 
        messages={messages!.home.index} 
        projectMessages={messages!.home.projects}
      />
    </>
  )
}
