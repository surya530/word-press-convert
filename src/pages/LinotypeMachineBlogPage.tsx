import { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLanguage } from '../store/language'
import { linotypeMachineBlogTranslations } from '../translations/linotypeMachineBlog'
import mergenthalerImg from '../images/Ottmar_Mergenthaler-1.jpg'
import machineImg from '../images/LINOTYPE_Composing_Machine_1889.jpg'

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <img src={src} alt={alt} className="mx-auto max-w-xs rounded" />
      <figcaption className="mt-2 text-center text-xs text-gray-400">{caption}</figcaption>
    </figure>
  )
}

export default function LinotypeMachineBlogPage() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const language = useAppSelector((state) => state.language.current)
  const t = linotypeMachineBlogTranslations[language]

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
            {index === 4 && (
              <>
                <ArticleImage
                  src={mergenthalerImg}
                  alt="Ottmar Mergenthaler"
                  caption={t.mergenthalerCaption}
                />
                <ArticleImage
                  src={machineImg}
                  alt="Linotype machine"
                  caption={t.machineCaption}
                />
              </>
            )}
          </Fragment>
        ))}

        <section>
          <h2 className="mb-2 text-xl font-bold text-[#0d2b4e]">{t.technicalHeading}</h2>
          <div className="space-y-4">
            {t.technicalSections.map((section) => (
              <div key={section.heading}>
                <h3 className="mb-1 font-bold text-[#0d2b4e]">{section.heading}</h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
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
