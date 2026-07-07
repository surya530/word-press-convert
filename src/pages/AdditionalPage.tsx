import { Link } from 'react-router-dom'
import {
  HiOutlineLanguage,
  HiOutlineSwatch,
  HiOutlineMagnifyingGlass,
  HiOutlineDocumentCheck,
  HiOutlineArchiveBox,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import PageHero from '../components/PageHero'
import bookImg from '../images/reading-books-pnz85o4yc6zr3xsz6arh7k3ohyoau0mrzn4eoobeyw.png'
import { useAppSelector } from '../store/hooks'
import { additionalTranslations } from '../translations/additional'

const services = [
  {
    icon: <HiOutlineLanguage className="w-6 h-6" />,
    title: 'Translation & Localization',
    body: 'Multi-language publication support so a single source can ship to every market you serve.',
  },
  {
    icon: <HiOutlineSwatch className="w-6 h-6" />,
    title: 'Corporate Design Matching',
    body: 'We match your existing house style — fonts, spacing, and layout rules — across every new edition.',
  },
  {
    icon: <HiOutlineMagnifyingGlass className="w-6 h-6" />,
    title: 'Proofreading & QA',
    body: 'A dedicated quality pass to catch widows, orphans, broken cross-references, and formatting drift.',
  },
  {
    icon: <HiOutlineDocumentCheck className="w-6 h-6" />,
    title: 'Indexing & Cross-Referencing',
    body: 'Automated generation of tables of contents, indexes, and multi-level cross-references.',
  },
  {
    icon: <HiOutlineArchiveBox className="w-6 h-6" />,
    title: 'Archive & Format Migration',
    body: 'Migrate legacy publications into modern, structured, future-proof formats.',
  },
  {
    icon: <HiOutlineChartBar className="w-6 h-6" />,
    title: 'Production Reporting',
    body: 'Clear visibility into turnaround times and volumes across all of your active publications.',
  },
]

export default function AdditionalPage() {
  const language = useAppSelector((state) => state.language.current)
  const t = additionalTranslations[language]

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="border-l-4 border-[#0d2b4e] rounded-l-sm py-1 pl-6">
          <p className="text-sm leading-relaxed text-[#0d2b4e] sm:text-base">{t.intro}</p>
          <p className="mt-5 text-sm font-medium text-[#c2255c] sm:text-base">
            {t.ctaPrefix}
            <Link to="/contact-us" className="hover:underline">
              {t.ctaLinkLabel}
            </Link>
            {t.ctaSuffix}
          </p>
        </div>

        <img src={bookImg} alt="People researching among stacks of books" className="mx-auto w-full max-w-md" />
      </div>

      {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#5b9bd5]/10 text-[#5b9bd5] mb-4 group-hover:bg-[#5b9bd5] group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h2 className="text-base font-bold text-[#0d2b4e] mb-2">{service.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{service.body}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}
