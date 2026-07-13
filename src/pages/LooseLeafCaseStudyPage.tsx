import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLanguage } from '../store/language'
import { looseLeafCaseStudyTranslations } from '../translations/looseLeafCaseStudy'

export default function LooseLeafCaseStudyPage() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const language = useAppSelector((state) => state.language.current)
  const t = looseLeafCaseStudyTranslations[language]

  useEffect(() => {
    dispatch(setLanguage(location.pathname.startsWith('/de/') ? 'de' : 'en'))
  }, [dispatch, location.pathname])

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} />

      <p className="mb-10 -mt-6 text-center text-xs text-gray-400">
        {t.date} /// {t.noComments}
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-gray-700 sm:text-base">
        {t.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-2 text-xl font-bold text-[#0d2b4e]">{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section>
          <h2 className="mb-2 text-xl font-bold text-[#0d2b4e]">{t.resultsHeading}</h2>
          <ul className="list-disc space-y-1 pl-5">
            {t.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-[#0d2b4e]">{t.conclusionHeading}</h2>
          <p>{t.conclusion}</p>
        </section>
      </div>

      <Link
        to="/case-studies-2"
        className="mt-12 inline-block text-sm font-bold text-[#c2255c] hover:underline"
      >
        {t.backLabel}
      </Link>
    </div>
  )
}
