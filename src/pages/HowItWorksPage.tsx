import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineDocumentText, HiOutlinePhoto, HiOutlineEnvelopeOpen, HiMinus, HiPlus } from 'react-icons/hi2'
import bookImg from '../images/reading-books-pnz85o4yc6zr3xsz6arh7k3ohyoau0mrzn4eoobeyw.png'
import contactImg from '../images/contact-us.png'
import faqImg from '../images/more-information-image-copy.png'
import PageHero from '../components/PageHero'
import { useAppSelector } from '../store/hooks'
import { howItWorksTranslations } from '../translations/howItWorks'

function renderFaqAnswer(answer: string) {
  const blocks = answer
    .trim()
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
    )

  return blocks.map((lines, i) =>
    lines.length > 1 ? (
      <ul key={i} className="list-disc space-y-1 pl-5">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    ) : (
      <p key={i}>{lines[0]}</p>
    ),
  )
}

const stepIcons = [
  <HiOutlineDocumentText className="w-8 h-8" />,
  <HiOutlinePhoto className="w-8 h-8" />,
  <HiOutlineEnvelopeOpen className="w-8 h-8" />,
]

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const language = useAppSelector((state) => state.language.current)
  const t = howItWorksTranslations[language]

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {t.steps.map((step, index) => (
          <div
            key={step.title}
            className="group rounded-xl border border-[#5b9bd5]/50 bg-[#5b9bd5]/5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5b9bd5] hover:bg-[#5b9bd5]/10 hover:shadow-xl hover:shadow-[#5b9bd5]/20 sm:p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-[#5b9bd5] transition-colors duration-300 group-hover:text-[#0d2b4e]">
              {step.title}
            </h2>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:text-[#e8722a]">
                {stepIcons[index]}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">
                {step.body}
                {step.linkLabel && (
                  <>
                    {' '}
                    <Link to="/pricing" className="text-[#c2255c] font-medium hover:underline">
                      {step.linkLabel}
                    </Link>
                    {step.suffix}
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500 leading-relaxed">{t.note}</p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#f4f7fb] p-6 sm:p-8 lg:col-span-2 lg:flex-row">
          <img
            src={bookImg}
            alt="Illustration of sending a document for review"
            className="w-56 shrink-0 sm:w-64"
          />
          <div>
            <h2 className="text-lg font-bold text-[#c2255c] sm:text-xl">{t.sendDocHeading}</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed sm:text-base">{t.sendDocBody}</p>
            <p className="mt-4 text-sm font-bold text-[#0d2b4e] sm:text-base">{t.sendDocHighlight}</p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed sm:text-base">
              {t.sendDocClosingPrefix}{' '}
              <Link to="/contact-us" className="font-medium text-[#c2255c] hover:underline">
                {t.sendDocContactLabel}
              </Link>{' '}
              {t.sendDocClosingSuffix}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-2xl bg-[#5b9bd5] p-6 text-center sm:p-8">
          <img src={contactImg} alt="Support representative ready to help" className="w-40 sm:w-48" />
          <p className="mt-4 text-sm leading-relaxed text-white/95 sm:text-base">{t.discountBody}</p>
          <Link
            to="/contact-us"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d2b4e] transition hover:bg-gray-100"
          >
            {t.contactUsLabel}
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-[#5b9bd5]">{t.faqHeading}</h2>
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
            {t.faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className={isOpen ? 'border-b-2 border-[#5b9bd5]' : ''}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left"
                  >
                    <span className="shrink-0 text-[#5b9bd5]">
                      {isOpen ? <HiMinus className="h-4 w-4" /> : <HiPlus className="h-4 w-4" />}
                    </span>
                    <span className="text-sm font-medium text-[#5b9bd5] sm:text-base">{faq.question}</span>
                  </button>
                  {isOpen && (
                    <div className="bg-gray-50 px-5 pb-5 pt-1">
                      <div className="space-y-3 pl-7 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {renderFaqAnswer(faq.answer)}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img src={faqImg} alt="Illustration of a team organizing publications" className="w-full max-w-sm" />
        </div>
      </div>
    </div>
  )
}
