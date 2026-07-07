export interface ContactUsTranslation {
  eyebrow: string
  title: string
  subtitle: string
  labels: {
    name: string
    company: string
    email: string
    phone: string
    sampleFile: string
    uploadPrompt: string
    uploadSuffix: string
    publicationType: string
    chooseOption: string
    outputFormat: string
    volume: string
    comments: string
    verifyHuman: string
  }
  placeholders: {
    name: string
    company: string
    email: string
    phone: string
    comments: string
    captcha: string
  }
  publicationTypes: string[]
  outputFormats: string[]
  volumeOptions: string[]
  submit: string
}

export const contactUsTranslations: Record<'en' | 'de', ContactUsTranslation> = {
  en: {
    eyebrow: 'Get In Touch',
    title: 'Contact Us',
    subtitle:
      'Please provide us with some information about your company — this will help us to find the best solution for you.',
    labels: {
      name: 'Your Name',
      company: 'Company',
      email: 'E-mail',
      phone: 'Phone',
      sampleFile: 'Sample File',
      uploadPrompt: 'Click to upload',
      uploadSuffix: ' a sample file',
      publicationType: 'Type of Publication',
      chooseOption: 'Please choose an option',
      outputFormat: 'Output format',
      volume: 'Volume',
      comments: 'Additional comments/questions',
      verifyHuman: "Verify you're human",
    },
    placeholders: {
      name: 'John Doe',
      company: 'Your company name',
      email: 'you@example.com',
      phone: '+49 30 740 73960',
      comments: 'Tell us a bit more about your project...',
      captcha: 'Enter code',
    },
    publicationTypes: ['Book', 'Magazine', 'Trade Journal', 'Catalog', 'Other'],
    outputFormats: ['Print PDF', 'Online PDF', 'EPUB (eBook)', 'AZW (Amazon eBook)', 'HTML', 'Other'],
    volumeOptions: ['1 - 50 pages', '51 - 200 pages', '201 - 500 pages', '500+ pages'],
    submit: 'Submit',
  },
  de: {
    eyebrow: 'Kontaktieren Sie uns',
    title: 'Kontakt',
    subtitle:
      'Bitte geben Sie uns einige Angaben zu Ihrem Unternehmen – so können wir für Sie die optimale Lösung finden.',
    labels: {
      name: 'Ihr Name',
      company: 'Unternehmen',
      email: 'E-Mail',
      phone: 'Telefon',
      sampleFile: 'Beispieldatei',
      uploadPrompt: 'Klicken zum Hochladen',
      uploadSuffix: ' einer Beispieldatei',
      publicationType: 'Art der Publikation',
      chooseOption: 'Bitte wählen Sie eine Option',
      outputFormat: 'Ausgabeformat',
      volume: 'Umfang',
      comments: 'Anmerkungen und Fragen',
      verifyHuman: 'Bestätigen Sie, dass Sie ein Mensch sind',
    },
    placeholders: {
      name: 'Max Mustermann',
      company: 'Name Ihres Unternehmens',
      email: 'sie@beispiel.de',
      phone: '+49 30 740 73960',
      comments: 'Erzählen Sie uns mehr über Ihr Projekt...',
      captcha: 'Code eingeben',
    },
    publicationTypes: ['Roman/Sachbuch', 'Wissenschaftliche Arbeit', 'Fachzeitschrift', 'Katalog', 'Sonstige'],
    outputFormats: ['Druck-PDF', 'Online-PDF', 'EPUB (E-Book)', 'AZW (Amazon E-Book)', 'HTML', 'Sonstige'],
    volumeOptions: ['bis 1.000 Seiten p. a.', 'bis 10.000 Seiten p. a.', 'bis 100.000 Seiten p. a.', 'ab 100.000 Seiten p. a.'],
    submit: 'Absenden',
  },
}
