import CvHero from '@/components/cv/CvHero'
import CvSummary from '@/components/cv/CvSummary'
import CvExperience from '@/components/cv/CvExperience'
import CvSkills from '@/components/cv/CvSkills'
import CvEducation from '@/components/cv/CvEducation'
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
      <CvExperience messages={messages!.home.cv.experience} />
      <CvSkills messages={messages!.home.cv.skills} />
      <CvEducation messages={messages!.home.cv.education} />
    </main>
  )
}
