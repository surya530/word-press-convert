import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { caseStudiesTranslations } from '../translations/caseStudies'

export default function CaseStudiesPage() {
  const language = useAppSelector((state) => state.language.current)
  const t = caseStudiesTranslations[language]

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <div className="mb-10 text-center">
        {t.eyebrow && <p className="text-2xl font-bold text-[#1a6b78] sm:text-3xl">{t.eyebrow}</p>}
        <h1 className="mt-1 text-2xl font-bold text-[#1a6b78] sm:text-3xl">{t.title}</h1>
      </div>

      <h2 className="mb-6 text-xl font-bold text-[#0d2b4e]">{t.postsLabel}</h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {t.posts.map((post) => (
          <article key={post.title}>
            <Link to="#" className="text-lg font-bold text-[#5b9bd5] hover:underline sm:text-xl">
              {post.title}
            </Link>
            <p className="mt-1 text-xs text-gray-400">
              {post.date} /// {post.noComments}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">{post.excerpt}</p>
            <Link to="#" className="mt-3 inline-block text-sm font-bold text-[#c2255c] hover:underline">
              {post.readMore}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
