import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/docalign-pnz85o4s8x1va7og9rruwpsvi6u966jrvexgy56ry8.png'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLanguage } from '../store/language'
import { layoutTranslations } from '../translations/layout'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dispatch = useAppDispatch()

  const openMenuNow = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setOpenMenu(label)
  }

  const closeMenuSoon = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 150)
  }
  const language = useAppSelector((state) => state.language.current)
  const t = layoutTranslations[language]

  const navItems = [
    {
      label: t.nav.typesetting,
      to: '/typesetting/',
      children: [{ label: t.nav.howItWorks, to: '/how-docalign-works' }, { label: t.nav.pricing, to: '/pricing' }],
    },
    { label: t.nav.customSoftware, to: '/devservices' },
    { label: t.nav.additionalServices, to: '/additional' },
    {
      label: t.nav.aboutUs,
      to: '/about-us/',
      children: [
        { label: t.nav.contactUs, to: '/contact-us' },
        { label: t.nav.caseStudies, to: '/case-studies-2' },
        { label: t.nav.linkedin },
        { label: t.nav.facebook },
      ],
    },
    { label: t.nav.blog, to: '/blog-2' },
  ]

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-[#0d2b4e] text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6">
          <a href="tel:+493074073960" className="hover:text-blue-300 transition-colors">
            +49 30 740 73960
          </a>
          <a href="mailto:Welcome@docalign.de" className="hover:text-blue-300 transition-colors">
            Welcome@docalign.de
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DocAlign" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && openMenuNow(item.label)}
              onMouseLeave={() => item.children && closeMenuSoon()}
            >
              {item.to ? (
                <Link
                  to={item.to}
                  className="flex items-center gap-1.5 py-2 text-sm font-medium text-gray-700 hover:text-[#e8722a] transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ) : (
                <button className="flex items-center gap-1.5 py-2 text-sm font-medium text-gray-700 hover:text-[#e8722a] transition-colors whitespace-nowrap">
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              )}
              {item.children && openMenu === item.label && (
                <div className="absolute top-full left-0 pt-2 min-w-[180px]">
                  <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-1">
                    {item.children.map((child) =>
                      child.to ? (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setOpenMenu(null)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e8722a] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <a
                          key={child.label}
                          href="#"
                          onClick={() => setOpenMenu(null)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e8722a] transition-colors"
                        >
                          {child.label}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Home button */}
          <Link
            to="/"
            className="px-4 py-1.5 text-sm font-medium text-white bg-[#0d2b4e] rounded-full hover:bg-[#e8722a] transition-colors whitespace-nowrap"
          >
            {t.nav.home}
          </Link>

          {/* Language toggle */}
          <div className="flex items-center ml-4 border border-gray-200 rounded-full overflow-hidden text-xs font-semibold">
            {(['en', 'de'] as const).map((l) => (
              <button
                key={l}
                onClick={() => dispatch(setLanguage(l))}
                className={`px-3 py-1.5 transition-colors ${
                  language === l
                    ? 'bg-[#0d2b4e] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#e8722a]"
          >
            {t.nav.home}
          </Link>
          {navItems.map((item) => (
            <div key={item.label}>
              {item.to ? (
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#e8722a]"
                >
                  {item.label}
                </Link>
              ) : (
                <a href="#" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#e8722a]">
                  {item.label}
                </a>
              )}
              {item.children?.map((child) =>
                child.to ? (
                  <Link
                    key={child.label}
                    to={child.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-2 text-sm text-gray-500 hover:text-[#e8722a]"
                  >
                    {child.label}
                  </Link>
                ) : (
                  <a key={child.label} href="#" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#e8722a]">
                    {child.label}
                  </a>
                ),
              )}
            </div>
          ))}
          <div className="px-4 py-3 flex gap-2">
            {(['en', 'de'] as const).map((l) => (
              <button
                key={l}
                onClick={() => dispatch(setLanguage(l))}
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                  language === l
                    ? 'bg-[#0d2b4e] text-white border-[#0d2b4e]'
                    : 'text-gray-600 border-gray-300'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
