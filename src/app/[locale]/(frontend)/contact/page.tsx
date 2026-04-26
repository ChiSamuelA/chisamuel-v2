import ContactHero from '@/components/contact/ContactHero'
import ReachMeCards from '@/components/contact/ReachMeCards'
import { getMessages } from '@/i18n'

export default async function ContactPage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  const messages = await getMessages(locale)

  return (
    <main>
      <ContactHero messages={messages!.home.contact.hero} />
      <ReachMeCards messages={messages!.home.contact.reachMe} />
      {/* Additional sections will be added here */}
    </main>
  )
}
