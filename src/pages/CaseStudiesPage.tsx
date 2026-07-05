import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const caseStudies = [
  {
    client: 'Schwaneberger Verlag',
    role: 'H. Hohenester, Managing Director',
    result: '~50% reduction in production time and cost',
    quote:
      'They have a team with very good IT professionals that brings in a well-structured and clean, error-free programming approach. There is no other company that gives us this much performance.',
  },
  {
    client: 'Zweitwerk',
    role: 'Managing Director',
    result: 'Reliable Unix-based editing pipeline, "jadis"',
    quote:
      'We rely on a powerful and reliable program that runs on Unix servers and quickly computes new variants. Without DocAlign, our editing system will not function.',
  },
  {
    client: 'Lexxion',
    role: 'Dr. W. Andreae',
    result: 'Unified data management since 2000',
    quote:
      'Unified data management is a critical factor for streamlined, high-quality workflows. With DocAlign, we feel that we are in good hands.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero
        eyebrow="About Us"
        title="Case Studies"
        subtitle="Real projects, real results — see how DocAlign has helped our clients."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <div
            key={study.client}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
          >
            <span className="inline-block w-fit rounded-full bg-[#1a6b78]/10 px-3 py-1 text-xs font-semibold text-[#1a6b78]">
              {study.result}
            </span>
            <p className="mt-5 flex-1 text-sm italic leading-relaxed text-gray-600">&ldquo;{study.quote}&rdquo;</p>
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-[#0d2b4e]">{study.client}</p>
              <p className="text-xs text-gray-500">{study.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-[#0d2b4e] p-8 text-center text-white sm:mt-20 sm:p-12">
        <h2 className="text-xl font-bold sm:text-2xl">Want to be our next success story?</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          Tell us about your publication and we&apos;ll show you how automated typesetting can save you time and
          cost.
        </p>
        <Link
          to="/contact-us"
          className="mt-2 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0d2b4e] transition hover:bg-gray-100"
        >
          Get in touch
        </Link>
      </div>
    </div>
  )
}
