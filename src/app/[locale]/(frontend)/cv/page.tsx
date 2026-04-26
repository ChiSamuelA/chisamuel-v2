import CvHero from '@/components/cv/CvHero'
import { getMessages } from '@/i18n'

export default async function CvPage(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  const messages = await getMessages(locale)

  return (
    <main>
      <CvHero messages={messages!.home.cv.hero} />
      {/* Additional sections will be added here */}
    </main>
  )
}
