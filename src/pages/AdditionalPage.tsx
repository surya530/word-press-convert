import {
  HiOutlineLanguage,
  HiOutlineSwatch,
  HiOutlineMagnifyingGlass,
  HiOutlineDocumentCheck,
  HiOutlineArchiveBox,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import PageHero from '../components/PageHero'

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
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero
        eyebrow="More From DocAlign"
        title="Additional Services"
        subtitle="Explore the additional services we offer alongside typesetting, formatting, and custom software solutions."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  )
}
