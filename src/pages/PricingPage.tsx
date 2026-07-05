import { Link } from 'react-router-dom'
import { HiOutlineSparkles, HiOutlineBookOpen, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import PageHero from '../components/PageHero'
import { useAppSelector } from '../store/hooks'
import { pricingTranslations } from '../translations/pricing'
import imageProcessingIcon from '../images/image-processing-pnz85o4suufsux36b6v7p7b1txpyv461ikh50d5wtw.png'
import copyEditingIcon from '../images/copy-pnz85o4suufsux36b6v7p7b1txpyv461ikh50d5wtw.png'
import databaseIntegrationIcon from '../images/distributed-pnz85o4suufsux36b6v7p7b1txpyv461ikh50d5wtw.png'
import handshakeImg from '../images/solution-img2.png'
import automationIcon from '../images/automation-pnz85o4t802qcbjamv4kc0yk54zggn4ra3uousb2u8.png'
import layoutIcon from '../images/square-layout-pnz85o4t802qcbjamv4kc0yk54zggn4ra3uousb2u8.png'
import measurementIcon from '../images/graphic-design-pnz85o4sz8bg0pwjr2ybwt6vxo54qahm3qxnmi7mu0.png'
import multiMediaIcon from '../images/free-delivery-pnz85o4t802qcbjamv4kc0yk54zggn4ra3uousb2u8.png'
import costIcon from '../images/salary-pnz85o4t802qcbjamv4kc0yk54zggn4ra3uousb2u8.png'

const tierMeta = [
  { name: 'Basic', icon: HiOutlineBookOpen, accent: '#5b9bd5' },
  { name: 'Premium', icon: HiOutlineSparkles, accent: '#e8722a' },
  { name: 'Volume', icon: HiOutlineBuildingOffice2, accent: '#1a6b78' },
]

const additionalServiceIcons = [imageProcessingIcon, copyEditingIcon, databaseIntegrationIcon]

const whyChooseIcons = [automationIcon, layoutIcon, measurementIcon, multiMediaIcon, costIcon]

export default function PricingPage() {
  const language = useAppSelector((state) => state.language.current)
  const t = pricingTranslations[language]

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <PageHero eyebrow={t.eyebrow} title={t.title} />

      <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
        <p>{t.intro.line1}</p>
        <p>
          {t.intro.basicPrefix} <span className="font-semibold text-[#5b9bd5]">Basic</span> {t.intro.basicSuffix}
        </p>
        <p>
          {t.intro.premiumPrefix} <span className="font-semibold text-[#e8722a]">Premium</span> {t.intro.premiumSuffix}
        </p>
        <p>
          {t.intro.volumePrefix} <span className="font-semibold text-[#1a6b78]">Volume</span> {t.intro.volumeSuffix}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3">
        {tierMeta.map((meta, index) => {
          const tier = t.tiers[index]
          return (
            <div
              key={meta.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ backgroundColor: meta.accent }}
                aria-hidden="true"
              />
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: `${meta.accent}1a`, color: meta.accent }}
              >
                <meta.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-[#0d2b4e]">{meta.name}</h2>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#0d2b4e]">{tier.price}</span>
                <span className="text-sm text-gray-500">{tier.unit}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${meta.accent}1a`, color: meta.accent }}
                >
                  {tier.complexity}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${meta.accent}1a`, color: meta.accent }}
                >
                  {tier.volume}
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-600">{tier.note}</p>
              <Link
                to="/contact-us"
                className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: meta.accent }}
              >
                {t.getQuoteLabel}
              </Link>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-gray-100 bg-[#f4f7fb] p-8 sm:mt-20 sm:p-10">
        <h2 className="text-lg font-bold text-[#0d2b4e] sm:text-xl">{t.subscriptionHeading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          {t.subscriptionBodyPrefix}{' '}
          <Link to="/contact-us" className="font-semibold text-[#c2255c] hover:underline">
            {t.getInTouchLabel}
          </Link>{' '}
          {t.subscriptionBodySuffix}
        </p>
      </div>

      <div className="mt-16 sm:mt-20">
        <h2 className="text-lg font-bold text-[#0d2b4e] sm:text-xl">{t.additionalServicesHeading}</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.additionalServices.map((label, index) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#5b9bd5]/60 hover:shadow-md"
            >
              <img src={additionalServiceIcons[index]} alt="" className="h-10 w-10 shrink-0" />
              <span className="text-sm font-semibold text-[#0d2b4e] sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-[#5b9bd5] sm:text-3xl">{t.whyChooseHeading}</h2>
          </div>
          {t.whyChooseItems.map((body, index) => (
            <div
              key={body}
              className="rounded-xl bg-[#f4f7fb] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5b9bd5]/10 hover:shadow-md"
            >
              <img src={whyChooseIcons[index]} alt="" className="h-10 w-10" />
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 items-center gap-10 sm:mt-20 lg:grid-cols-2">
        <img src={handshakeImg} alt="Two teams shaking hands to agree on a project" className="w-full" />
        <div>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            <Link to="/contact-us" className="font-semibold text-[#c2255c] hover:underline">
              {t.ctaPrefix}
            </Link>{' '}
            <span className="font-semibold text-[#0d2b4e]">{t.ctaSuffix}</span>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
            <span className="font-semibold text-[#0d2b4e]">{t.outputsLabel}</span> {t.outputsBody}
          </p>
        </div>
      </div>
    </div>
  )
}
