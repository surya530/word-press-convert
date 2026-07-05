import { Link } from 'react-router-dom'
import {
  HiOutlineCodeBracketSquare,
  HiOutlineCircleStack,
  HiOutlineCog6Tooth,
  HiOutlineCloudArrowUp,
} from 'react-icons/hi2'
import PageHero from '../components/PageHero'

const capabilities = [
  {
    icon: <HiOutlineCodeBracketSquare className="w-7 h-7" />,
    title: 'Editorial & Production Systems',
    body: 'Custom editing and production software — like the Unix-based systems trusted by publishers to compute new variants quickly and reliably.',
  },
  {
    icon: <HiOutlineCircleStack className="w-7 h-7" />,
    title: 'Data & Content Management',
    body: 'Unified, structured data management (XML, databases, CMS) so your workflows stay consistent as you scale across editions and channels.',
  },
  {
    icon: <HiOutlineCog6Tooth className="w-7 h-7" />,
    title: 'Workflow Automation',
    body: 'We automate repetitive production steps end-to-end, cutting turnaround time and manual error while freeing your team for higher-value work.',
  },
  {
    icon: <HiOutlineCloudArrowUp className="w-7 h-7" />,
    title: 'Integration & APIs',
    body: 'Secure, scalable integrations that connect your existing tools — editorial systems, DAM, e-commerce — into one coherent pipeline.',
  },
]

export default function DevServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero
        eyebrow="Custom Software Solutions"
        title="Development Services"
        subtitle="We build custom software and tooling tailored to your document workflows — secure, scalable, and robust."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {capabilities.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1a6b78]/10 text-[#1a6b78] mb-5 group-hover:bg-[#1a6b78] group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <h2 className="text-lg font-bold text-[#0d2b4e] mb-2 sm:text-xl">{item.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed sm:text-base">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-[#0d2b4e] p-8 text-center text-white sm:mt-20 sm:p-12">
        <h2 className="text-xl font-bold sm:text-2xl">Decades of experience, built to last</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          Our developers, designers, and product team plan your digitization, production, and optimization using
          open standards — so your solutions stay durable and easy to evolve.
        </p>
        <Link
          to="/contact-us"
          className="mt-2 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0d2b4e] transition hover:bg-gray-100"
        >
          Talk to our team
        </Link>
      </div>
    </div>
  )
}
