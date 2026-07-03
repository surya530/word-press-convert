const outputFormats = ['Print PDF', 'Online PDF', 'EPUB (eBook)', 'AZW (Amazon eBook)', 'HTML', 'Other']

const publicationTypes = ['Book', 'Magazine', 'Trade Journal', 'Catalog', 'Other']

const volumeOptions = ['1 - 50 pages', '51 - 200 pages', '201 - 500 pages', '500+ pages']

const inputClasses =
  'w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 transition-colors focus:border-[#0d2b4e] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0d2b4e]/10'

const labelClasses = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function ContactUsPage() {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] text-[#e8722a] uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl font-bold text-[#0d2b4e] sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">
            Please provide us with some information about your company — this will help us to find the best
            solution for you.
          </p>
        </div>

        <form className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-10">
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Your Name
                </label>
                <input id="name" type="text" placeholder="John Doe" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company
                </label>
                <input id="company" type="text" placeholder="Your company name" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  E-mail
                </label>
                <input id="email" type="email" placeholder="you@example.com" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input id="phone" type="tel" placeholder="+49 30 740 73960" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="sample-file" className={labelClasses}>
                  Sample File
                </label>
                <label
                  htmlFor="sample-file"
                  className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center transition-colors hover:border-[#0d2b4e]/40 hover:bg-[#0d2b4e]/5"
                >
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m0-9l-3 3m3-3l3 3"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">
                    <span className="font-semibold text-[#0d2b4e]">Click to upload</span> a sample file
                  </span>
                  <input id="sample-file" type="file" className="sr-only" />
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="publication-type" className={labelClasses}>
                  Type of Publication
                </label>
                <select id="publication-type" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    Please choose an option
                  </option>
                  {publicationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className={labelClasses}>Output format</span>
                <div className="grid grid-cols-2 gap-2">
                  {outputFormats.map((format) => (
                    <label
                      key={format}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition-colors has-checked:border-[#0d2b4e] has-checked:bg-[#0d2b4e]/5"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-[#0d2b4e] focus:ring-[#0d2b4e]/40"
                      />
                      {format}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="volume" className={labelClasses}>
                  Volume
                </label>
                <select id="volume" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    Please choose an option
                  </option>
                  {volumeOptions.map((volume) => (
                    <option key={volume} value={volume}>
                      {volume}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="comments" className={labelClasses}>
              Additional comments/questions
            </label>
            <textarea
              id="comments"
              rows={5}
              placeholder="Tell us a bit more about your project..."
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className={labelClasses}>Verify you're human</span>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-1.5 select-none">
                  <span
                    className="text-lg font-bold tracking-widest text-gray-700 italic"
                    style={{ textDecoration: 'line-through' }}
                  >
                    B9 T6
                  </span>
                </div>
                <input id="captcha" type="text" placeholder="Enter code" className={`${inputClasses} max-w-35`} />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d2b4e] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d2b4e]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e8722a] hover:shadow-xl"
            >
              Submit
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
