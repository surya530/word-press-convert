import { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLanguage } from '../store/language'
import { bookTypesettingBlogTranslations } from '../translations/bookTypesettingBlog'
import gutenbergImg from '../images/johannes-gutenberg-7610855_1280-2-846x1024.png'
import linotypeImg from '../images/robert-linder-Fx7Z0RO-MWg-unsplash-686x1024.jpg'
import fontsImg from '../images/Font_types.svg.png'
import ebookImg from '../images/pexels-perfecto-capucine-1329571-1024x682.jpg'

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="not-prose">
      <img src={src} alt={alt} className="mx-auto max-w-xs rounded" />
      <figcaption className="mt-2 text-center text-xs text-gray-400">{caption}</figcaption>
    </figure>
  )
}

export default function BookTypesettingBlogPage() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const language = useAppSelector((state) => state.language.current)
  const t = bookTypesettingBlogTranslations[language]

  useEffect(() => {
    dispatch(setLanguage(location.pathname.startsWith('/de/') ? 'de' : 'en'))
  }, [dispatch, location.pathname])

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} />

      <p className="mb-10 -mt-6 text-center text-xs text-gray-400">
        {t.date} /// {t.noComments}
      </p>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        {t.paragraphs.map((paragraph, index) => (
          <Fragment key={paragraph}>
            <p>{paragraph}</p>
            {index === 2 && (
              <ArticleImage src={gutenbergImg} alt="Johannes Gutenberg" caption={t.gutenbergCaption} />
            )}
            {index === 4 && (
              <ArticleImage src={linotypeImg} alt="Linotype" caption={t.linotypeCaption} />
            )}
            {index === 5 && <ArticleImage src={fontsImg} alt="Fonts" caption={t.fontsCaption} />}
          </Fragment>
        ))}

        <div>
          <p>{t.skillsIntro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {t.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <p>{t.requirementsIntro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {t.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>

        <ArticleImage src={ebookImg} alt="E-Book-Reader" caption={t.ebookCaption} />

        <p>{t.conclusion}</p>
      </div>

      <Link
        to="/blog-2"
        className="mt-12 inline-block text-sm font-bold text-[#c2255c] hover:underline"
      >
        {t.backLabel}
      </Link>
    </div>
  )
}
