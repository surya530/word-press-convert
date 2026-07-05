import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero
        eyebrow="About Us"
        title="About DocAlign"
        subtitle="Learn more about DocAlign and get in touch with our team."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          to="/contact-us"
          className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
        >
          <h2 className="mb-2 text-xl font-bold text-[#1a6b78]">Contact Us</h2>
          <p className="text-sm text-gray-500">Get in touch with our team.</p>
        </Link>

        <Link
          to="/case-studies-2"
          className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
        >
          <h2 className="mb-2 text-xl font-bold text-[#1a6b78]">Case Studies</h2>
          <p className="text-sm text-gray-500">See how we've helped our customers.</p>
        </Link>
      </div>
    </div>
  )
}
