import { useState } from 'react'

const navItems = [
  {
    label: 'Typesetting and Formatting',
    children: ['How It Works', 'Pricing'],
  },
  { label: 'Custom Software Solutions' },
  { label: 'Additional Services' },
  {
    label: 'About Us',
    children: ['Contact Us', 'Case Studies', 'LinkedIn', 'Facebook'],
  },
  { label: 'Blog' },
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<'EN' | 'DE'>('EN')

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
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#0d2b4e] tracking-tight">
            Doc<span className="text-[#1e7ab8]">Align</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e7ab8] transition-colors rounded-md hover:bg-gray-50">
                {item.label}
                {item.children && (
                  <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.children && openMenu === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg py-1 min-w-[180px]">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1e7ab8] transition-colors"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Language toggle */}
          <div className="flex items-center ml-4 border border-gray-200 rounded-full overflow-hidden text-xs font-semibold">
            {(['EN', 'DE'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-colors ${
                  lang === l
                    ? 'bg-[#0d2b4e] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {l}
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
          {navItems.map((item) => (
            <div key={item.label}>
              <a href="#" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1e7ab8]">
                {item.label}
              </a>
              {item.children?.map((child) => (
                <a key={child} href="#" className="block px-8 py-2 text-sm text-gray-500 hover:text-[#1e7ab8]">
                  {child}
                </a>
              ))}
            </div>
          ))}
          <div className="px-4 py-3 flex gap-2">
            {(['EN', 'DE'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                  lang === l
                    ? 'bg-[#0d2b4e] text-white border-[#0d2b4e]'
                    : 'text-gray-600 border-gray-300'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
