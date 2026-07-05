import logo from '../images/docalign-pnz85o4s8x1va7og9rruwpsvi6u966jrvexgy56ry8.png'
import { useAppSelector } from '../store/hooks'
import { layoutTranslations } from '../translations/layout'

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  const language = useAppSelector((state) => state.language.current)
  const t = layoutTranslations[language].footer

  return (
    <footer className="bg-[#1e2228] text-white">
      <div className="max-w-7xl mx-auto px-12 md:px-24 py-16">

        {/* Main grid: brand takes left half, Company + Resources split the right half */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 items-start">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <a href="/">
              <img
                src={logo}
                alt="DocAlign"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.description}
            </p>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold text-white tracking-wide">{t.companyHeading}</h3>
            <ul className="flex flex-col gap-3">
              {t.companyLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold text-white tracking-wide">{t.resourcesHeading}</h3>
            <ul className="flex flex-col gap-3">
              {t.resourceLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {t.copyrightSuffix}{' '}
            <a href="#" className="hover:text-white transition-colors duration-200">{t.privacyPolicy}</a>
            {' | '}
            <a href="#" className="hover:text-white transition-colors duration-200">{t.termsOfService}</a>
          </p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
