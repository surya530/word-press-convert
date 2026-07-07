import { HiOutlineTicket, HiOutlineBookOpen, HiOutlineLightBulb } from 'react-icons/hi2'
import PageHero from '../components/PageHero'
import readingBooksImg from '../images/reading-books-pnz85o4yc6zr3xsz6arh7k3ohyoau0mrzn4eoobeyw.png'
import ebookIcon from '../images/ebook.png'
import productionIcon from '../images/production-150x150.png'
import databaseIcon from '../images/database-150x150.png'
import solution1 from '../images/solution1.png'
import { useAppSelector } from '../store/hooks'
import { typesettingTranslations } from '../translations/typesetting'

export default function TypesettingPage() {
  const language = useAppSelector((state) => state.language.current)
  const t = typesettingTranslations[language]

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-1 items-center gap-10 py-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 text-sm text-gray-600 sm:text-base">
          <p>
            {t.intro.paragraph1Prefix}
            <strong className="font-semibold text-[#0d2b4e]">{t.intro.paragraph1Bold}</strong>
          </p>
          <p>
            {t.intro.paragraph2Prefix}
            <strong className="font-semibold text-[#0d2b4e]">{t.intro.paragraph2Bold1}</strong>
            {t.intro.paragraph2Middle}
            <strong className="font-semibold text-[#0d2b4e]">{t.intro.paragraph2Bold2}</strong>
            {t.intro.paragraph2Suffix}
          </p>

          <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-5 py-4">
            <HiOutlineTicket className="h-6 w-6 shrink-0 text-[#1a6b78]" />
            <p className="text-sm font-medium text-[#0d2b4e] sm:text-base">
              {t.pricePrefix}
              <span className="font-semibold text-[#e8557a]">{t.priceBold}</span>
              {t.priceSuffix}
            </p>
          </div>
        </div>

        <img
          src={readingBooksImg}
          alt="Illustration of people researching among stacks of books"
          className="mx-auto w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-center text-2xl font-bold text-[#5b9bd5] sm:text-3xl">
            {t.publicationTypesHeading}
          </h2>
          <div className="flex flex-col gap-3">
            {t.publicationTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#5b9bd5] px-5 py-4 text-white"
              >
                <HiOutlineBookOpen className="h-5 w-5 shrink-0" />
                <p className="text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-bold text-[#5b9bd5] sm:text-3xl">
            {t.outputsHeading}
          </h2>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#1a6b78] px-9 py-14 text-center">
              <img src={ebookIcon} alt="" className="mx-auto mb-4 h-20 w-20" />
              <p className="text-sm leading-relaxed text-white">{t.outputsBody}</p>
            </div>

            <div className="rounded-2xl bg-[#e8722a] px-8 py-14 text-center">
              <img src={productionIcon} alt="" className="mx-auto mb-4 h-20 w-20" />
              <h3 className="mb-2 text-xl font-bold text-[#0d2b4e]">{t.solutions[0].title}</h3>
              <p className="text-sm leading-relaxed text-white">{t.solutions[0].body}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#5b9bd5] px-6 py-6 sm:flex-row sm:px-10">
        <img src={databaseIcon} alt="" className="h-16 w-16 shrink-0" />
        <div className="text-center sm:text-left">
          <h3 className="mb-2 text-xl font-bold text-white">{t.solutions[1].title}</h3>
          <p className="text-sm leading-relaxed text-white/90">{t.solutions[1].body}</p>
        </div>
      </div>

      <div className="py-14 text-center">
        <h2 className="mb-3 text-2xl font-bold text-[#5b9bd5] sm:text-3xl">{t.whyChooseHeading}</h2>
        <p className="mb-10 text-sm text-gray-600 sm:text-base">{t.whyChooseIntro}</p>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-4">
            {t.whyChooseItems.slice(0, 3).map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-[#5b9bd5] px-5 py-4 text-left text-white"
              >
                <HiOutlineLightBulb className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <img src={solution1} alt="Team collaborating on ideas" className="mx-auto w-full max-w-xs" />

          <div className="flex flex-col gap-4">
            {t.whyChooseItems.slice(3).map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-[#5b9bd5] px-5 py-4 text-left text-white"
              >
                <HiOutlineLightBulb className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
