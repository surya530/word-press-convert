import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  HiOutlineDocumentText,
  HiOutlineCodeBracketSquare,
  HiChevronLeft,
  HiChevronRight,
  HiArrowRight,
  HiOutlineCurrencyEuro,
  HiOutlineBolt,
  HiOutlineSquares2X2,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import { useAppSelector } from '../store/hooks'
import { homeTranslations } from '../translations/home'
import weka from '../images/weka-1.jpg'
import client1 from '../images/client.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'
import client6 from '../images/client6.png'
import client7 from '../images/client7.png'
import client8 from '../images/client8.png'
import client9 from '../images/client9.png'

const clientLogos = [weka, client1, client2, client3, client4, client5, client6, client7, client8, client9]

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous"
      className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-400 shadow hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronLeft className="w-5 h-5" />
    </button>
  )
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next"
      className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-400 shadow hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronRight className="w-5 h-5" />
    </button>
  )
}

const clientSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
}

function TestimonialPrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous testimonial"
      className="absolute left-0 top-[38%] sm:top-[42%] z-20 -translate-y-1/2 text-gray-300 hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
    </button>
  )
}

function TestimonialNextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next testimonial"
      className="absolute right-0 top-[38%] sm:top-[42%] z-20 -translate-y-1/2 text-gray-300 hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
    </button>
  )
}

const testimonialSliderSettings = {
  centerMode: true,
  centerPadding: '18%',
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: true,
  prevArrow: <TestimonialPrevArrow />,
  nextArrow: <TestimonialNextArrow />,
  responsive: [{ breakpoint: 768, settings: { centerPadding: '0px' } }],
}

const heroStatIcons = [
  <HiOutlineCurrencyEuro className="w-5 h-5" />,
  <HiOutlineBolt className="w-5 h-5" />,
  <HiOutlineSquares2X2 className="w-5 h-5" />,
  <HiOutlineSparkles className="w-5 h-5" />,
]

const featureCardIcons = [<HiOutlineDocumentText className="w-7 h-7" />, <HiOutlineCodeBracketSquare className="w-7 h-7" />]

export default function HomePage() {
  const language = useAppSelector((state) => state.language.current)
  const t = homeTranslations[language]
  return (
    <div className="">
      <div className="relative overflow-hidden bg-linear-to-br from-[#0d2b4e] via-[#0d2b4e] to-[#1a6b78]">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#5b9bd5]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#c2255c]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5b9bd5] ring-1 ring-white/20">
            {t.badge}
          </span>

          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            {t.heroHeadingLine1}
            <span className="block text-[#5b9bd5]">{t.heroHeadingLine2}</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-base sm:text-lg leading-relaxed">
            {t.heroParagraphBefore}
            <span className="font-semibold text-white">{t.heroParagraphPrice}</span>
            {t.heroParagraphAfter}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#e8722a] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#e8722a]/30 transition-all hover:-translate-y-0.5 hover:bg-[#e8722a]/90 hover:shadow-xl"
            >
              {t.ctaQuote}
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-docalign-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
            >
              {t.ctaHowItWorks}
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 max-w-3xl mx-auto">
            {t.heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-5 ring-1 ring-white/10 backdrop-blur"
              >
                <span className="text-[#5b9bd5]">{heroStatIcons[index]}</span>
                <span className="text-xl sm:text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/60 text-center leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 sm:py-6 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#1a6b78]">
          {t.tagline}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6 sm:mt-10">
        {t.featureCards.map((card, index) => (
          <div
            key={card.title}
            className="group rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 px-6 sm:px-12 lg:px-24 py-16 sm:py-20"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1a6b78]/10 text-[#1a6b78] mb-5 group-hover:bg-[#1a6b78] group-hover:text-white transition-colors duration-300">
              {featureCardIcons[index]}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a6b78] mb-4 leading-tight">{card.title}</h2>
            {index === 0 ? (
              <>
                <p className="text-gray-600 leading-relaxed">
                  {card.introPrefix}
                  <a href="#" className="text-[#c2255c] font-medium hover:underline">
                    {card.introLink}
                  </a>
                  {card.introSuffix}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">{card.filesIntro}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.formats.map((format) => (
                    <span
                      key={format}
                      className="inline-flex items-center rounded-full bg-[#0d2b4e]/5 px-3 py-1 text-xs sm:text-sm font-semibold text-[#0d2b4e]"
                    >
                      {format}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  {card.outroPrefix}
                  <a href="#" className="text-[#c2255c] font-medium hover:underline">
                    {card.outroLink}
                  </a>
                  {card.outroSuffix}
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed">{card.introPrefix}</p>
                <p className="text-gray-600 leading-relaxed mt-4 bg-gray-50 rounded-lg p-4">{card.filesIntro}</p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <a href="#" className="text-[#c2255c] font-medium hover:underline">
                    {card.outroLink}
                  </a>
                  {card.outroSuffix}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 py-16 sm:py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0d2b4e] mb-3">{t.customersHeading}</h2>
          <p className="text-center text-gray-500 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
            {t.customersSubheading}
          </p>

          <div className="relative px-8 sm:px-10">
            <Slider {...clientSliderSettings}>
              {clientLogos.map((logo, index) => (
                <div key={index} className="px-2 sm:px-3">
                  <div className="flex h-24 sm:h-28 items-center justify-center rounded-lg bg-white shadow-sm px-6">
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="max-h-12 sm:max-h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="relative">
            <Slider {...testimonialSliderSettings}>
              {t.testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <div className="relative">
                    <div className="relative z-10 rounded-lg bg-[#5b9bd5] px-6 sm:px-10 py-8 sm:py-10 text-center">
                      <p className="text-white italic text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                    <div className="absolute left-1/2 top-full h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#5b9bd5]" />
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-[#1a6b78] italic mt-1">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

    </div>
  )
}
