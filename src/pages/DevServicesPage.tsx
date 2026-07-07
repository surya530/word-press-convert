import { Link } from 'react-router-dom'
import { HiOutlineLightBulb } from 'react-icons/hi2'
import PageHero from '../components/PageHero'
import premedia from '../images/premedia.png'
import ebook from '../images/ebook.png'
import database from '../images/database-150x150.png'
import production from '../images/production-150x150.png'
import solution1 from '../images/solution1.png'
import { useAppSelector } from '../store/hooks'
import { devServicesTranslations } from '../translations/devServices'

const solutionIcons = [ebook, database, production]
const solutionAccents = ['#1a6b78', '#5b9bd5', '#c2255c']

export default function DevServicesPage() {
  const language = useAppSelector((state) => state.language.current)
  const t = devServicesTranslations[language]

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16">
        <img src={premedia} alt="Developer working on a laptop" className="mx-auto w-full max-w-sm" />

        <div className="space-y-5 text-sm text-gray-600 sm:text-base">
          <p>{t.intro.paragraph1}</p>
          <p>{t.intro.paragraph2}</p>
          <p>
            {t.intro.paragraph3Prefix}
            <strong className="font-semibold text-[#0d2b4e]">{t.intro.paragraph3Bold}</strong>
            {t.intro.paragraph3Middle}
            <Link to="/case-studies-2" className="text-[#e8557a] hover:underline">
              {t.intro.caseStudiesLabel}
            </Link>
            {t.intro.paragraph3Suffix}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
        {t.solutions.map((solution, index) => (
          <div
            key={solution.title}
            className="group rounded-2xl border-2 border-white/25 px-6 py-10 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-xl"
            style={{ backgroundColor: solutionAccents[index] }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-105">
              <img src={solutionIcons[index]} alt={solution.title} className="h-9 w-9" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{solution.title}</h3>
            <p className="text-sm leading-relaxed text-white/85">{solution.body}</p>
          </div>
        ))}
      </div>

      <div className="py-10">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#5b9bd5] sm:text-3xl">
          {t.expertiseHeading}
        </h2>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-4">
            {t.expertiseLeft.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-[#5b9bd5] px-5 py-4 text-white"
              >
                <HiOutlineLightBulb className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <img src={solution1} alt="Team collaborating on ideas" className="mx-auto w-full max-w-xs" />

          <div className="flex flex-col gap-4">
            {t.expertiseRight.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-[#5b9bd5] px-5 py-4 text-white"
              >
                <HiOutlineLightBulb className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-10 text-center">
        <p className="text-sm font-semibold text-[#e8722a] sm:text-base">{t.quotePrompt}</p>
        <a
          href="tel:+493074073960"
          className="mt-1 block text-sm font-semibold text-[#e8722a] hover:underline sm:text-base"
        >
          +49 30 740 739 60
        </a>
        <a
          href="mailto:Welcome@docalign.de"
          className="mt-1 block text-sm font-semibold text-[#e8722a] hover:underline sm:text-base"
        >
          {t.mailLabel}
        </a>
      </div>

    </div>
  )
}
