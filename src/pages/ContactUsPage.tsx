import axios from 'axios'
import toast from 'react-hot-toast'
import PageHero from '../components/PageHero'
import { useAppSelector } from '../store/hooks'
import { contactUsTranslations } from '../translations/contactUs'

const inputClasses =
  'w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 transition-colors focus:border-[#0d2b4e] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0d2b4e]/10'

const labelClasses = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function ContactUsPage() {
  const language = useAppSelector((state) => state.language.current)
  const t = contactUsTranslations[language]

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const sampleFile = formData.get('sample-file')
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      sampleFile: sampleFile instanceof File && sampleFile.size > 0 ? sampleFile : null,
      publicationType: formData.get('publication-type'),
      outputFormats: formData.getAll('output-format'),
      volume: formData.get('volume'),
      comments: formData.get('comments'),
      captcha: formData.get('captcha'),
    }

    // console.log(data)

    try {
      const { sampleFile: _sampleFile, ...payload } = data
      const response = await axios.post('http://localhost:8000/apis/v1/issues/send-email', payload)
      const message = typeof response.data === 'string' ? response.data : response.data?.message ?? 'Success'
      toast.success(message, { style: { background: '#16a34a', color: '#fff' } })
    } catch (error) {
      // let _message : any = axios.isAxiosError(error) ? error.response?.data ?? error.message : String(error)
      // alert(`Request failed: ${typeof message === 'string' ? message : JSON.stringify(message)}`)
      toast.success( "Error occurred while processing your request." , { style: { background: '#FF0000', color: '#fff' } })
    }
  }

  return (
    <div className="bg-linear-to-b from-gray-50 to-white px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  {t.labels.name} <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.placeholders.name}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="company" className={labelClasses}>
                  {t.labels.company} <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder={t.placeholders.company}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  {t.labels.email} <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.placeholders.email}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  {t.labels.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.placeholders.phone}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="sample-file" className={labelClasses}>
                  {t.labels.sampleFile}
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
                    <span className="font-semibold text-[#0d2b4e]">{t.labels.uploadPrompt}</span>
                    {t.labels.uploadSuffix}
                  </span>
                  <input id="sample-file" name="sample-file" type="file" className="sr-only" />
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="publication-type" className={labelClasses}>
                  {t.labels.publicationType}
                </label>
                <select id="publication-type" name="publication-type" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    {t.labels.chooseOption}
                  </option>
                  {t.publicationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className={labelClasses}>{t.labels.outputFormat}</span>
                <div className="grid grid-cols-2 gap-2">
                  {t.outputFormats.map((format) => (
                    <label
                      key={format}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition-colors has-checked:border-[#0d2b4e] has-checked:bg-[#0d2b4e]/5"
                    >
                      <input
                        type="checkbox"
                        name="output-format"
                        value={format}
                        className="h-4 w-4 rounded border-gray-300 text-[#0d2b4e] focus:ring-[#0d2b4e]/40"
                      />
                      {format}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="volume" className={labelClasses}>
                  {t.labels.volume}
                </label>
                <select id="volume" name="volume" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    {t.labels.chooseOption}
                  </option>
                  {t.volumeOptions.map((volume) => (
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
              {t.labels.comments}
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={5}
              placeholder={t.placeholders.comments}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className={labelClasses}>{t.labels.verifyHuman}</span>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-1.5 select-none">
                  <span
                    className="text-lg font-bold tracking-widest text-gray-700 italic"
                    style={{ textDecoration: 'line-through' }}
                  >
                    B9 T6
                  </span>
                </div>
                <input
                  id="captcha"
                  name="captcha"
                  type="text"
                  placeholder={t.placeholders.captcha}
                  className={`${inputClasses} max-w-35`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d2b4e] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d2b4e]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e8722a] hover:shadow-xl"
            >
              {t.submit}
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
