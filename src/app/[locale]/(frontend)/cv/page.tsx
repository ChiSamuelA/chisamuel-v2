import CvHero from '@/components/cv/CvHero'
import CvSummary from '@/components/cv/CvSummary'
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
      <CvSummary messages={messages!.home.cv.summary} />
      {/* Additional sections will be added here */}
    </main>
  )
}
