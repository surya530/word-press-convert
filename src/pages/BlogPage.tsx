import { HiArrowRight } from 'react-icons/hi2'
import PageHero from '../components/PageHero'

const posts = [
  {
    date: 'June 12, 2026',
    category: 'Automation',
    title: 'How Geometry-Based Typesetting Cuts Turnaround Time in Half',
    excerpt:
      'A look under the hood at how automated, measurement-driven layout lets us go from manuscript to print-ready file in days, not weeks.',
    gradient: 'from-[#0d2b4e] to-[#1a6b78]',
  },
  {
    date: 'May 28, 2026',
    category: 'Publishing',
    title: 'Fiction Without Friction: Streamlining Multi-Format Releases',
    excerpt:
      'Why publishing simultaneously to Print PDF, EPUB, and HTML5 no longer means tripling your production cost.',
    gradient: 'from-[#1a6b78] to-[#5b9bd5]',
  },
  {
    date: 'May 9, 2026',
    category: 'Case Study',
    title: 'Inside a 4-Hour Turnaround: Repeat Editions Done Right',
    excerpt:
      'How a well-prepared source file and a repeatable house style let one publisher hit same-day turnarounds.',
    gradient: 'from-[#5b9bd5] to-[#c2255c]',
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero
        eyebrow="Insights"
        title="Blog"
        subtitle="News, tips, and updates from the DocAlign team."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className={`h-36 bg-linear-to-br ${post.gradient}`} />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                <span className="text-[#e8722a]">{post.category}</span>
                <span className="text-gray-400">{post.date}</span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-[#0d2b4e] leading-snug">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a6b78] transition-colors group-hover:text-[#e8722a]"
              >
                Read more
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
