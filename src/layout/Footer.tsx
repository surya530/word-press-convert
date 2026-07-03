import logo from '../images/docalign-pnz85o4s8x1va7og9rruwpsvi6u966jrvexgy56ry8.png'

const footerLinks = {
  Services: [
    'Typesetting and Formatting',
    'Custom Software Solutions',
    'Additional Services',
  ],
  Company: ['About Us', 'Case Studies', 'Blog', 'Contact Us'],
  Connect: ['LinkedIn', 'Facebook', 'Twitter'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0d2b4e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img src={logo} alt="DocAlign" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional typesetting, formatting, and document conversion services — precise, fast, and reliable.
            </p>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p>
                <a href="tel:+493074073960" className="hover:text-[#e8722a] transition-colors">
                  +49 30 740 73960
                </a>
              </p>
              <p>
                <a href="mailto:Welcome@docalign.de" className="hover:text-[#e8722a] transition-colors">
                  Welcome@docalign.de
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-[#e8722a] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} DocAlign. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#e8722a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e8722a] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#e8722a] transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
