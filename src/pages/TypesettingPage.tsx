import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function TypesettingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero
        eyebrow="Typesetting and Formatting"
        title="Typesetting and Formatting"
        subtitle="Professional document typesetting and formatting services for books, articles, trade journals, and catalogs."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          to="/how-docalign-works"
          className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
        >
          <h2 className="mb-2 text-xl font-bold text-[#1a6b78]">How It Works</h2>
          <p className="text-sm text-gray-500">A look at our typesetting and formatting process, from submission to final output.</p>
        </Link>

        <Link
          to="/pricing"
          className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
        >
          <h2 className="mb-2 text-xl font-bold text-[#1a6b78]">Pricing</h2>
          <p className="text-sm text-gray-500">See our pricing for typesetting and formatting services.</p>
        </Link>
      </div>
    </div>
  )
}
