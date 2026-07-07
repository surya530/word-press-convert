export interface TypesettingTranslation {
  eyebrow: string
  title: string
  subtitle: string
  intro: {
    paragraph1Prefix: string
    paragraph1Bold: string
    paragraph2Prefix: string
    paragraph2Bold1: string
    paragraph2Middle: string
    paragraph2Bold2: string
    paragraph2Suffix: string
  }
  pricePrefix: string
  priceBold: string
  priceSuffix: string
  publicationTypesHeading: string
  publicationTypes: string[]
  outputsHeading: string
  outputsBody: string
  solutions: { title: string; body: string }[]
  whyChooseHeading: string
  whyChooseIntro: string
  whyChooseItems: string[]
  offerHeading: string
  offerItems: string[]
  quotePrompt: string
  mailLabel: string
}

export const typesettingTranslations: Record<'en' | 'de', TypesettingTranslation> = {
  en: {
    eyebrow: 'Typesetting and Formatting',
    title: 'Typesetting and Formatting Services',
    subtitle:
      "Reduce costs and production time with DocAlign's cutting-edge conversion and formatting services for books, articles, journals, trade publications and catalogs.",
    intro: {
      paragraph1Prefix:
        "Reduce costs and production time with DocAlign's cutting-edge conversion and formatting services for ",
      paragraph1Bold: 'books, articles, journals, trade publications and catalogs.',
      paragraph2Prefix: 'Compared to traditional publishing models, DocAlign ',
      paragraph2Bold1: 'reduces costs and production time by 60–90%.',
      paragraph2Middle: ' Your content can be simultaneously converted to multiple output channels (',
      paragraph2Bold2: 'print PDF, online PDF, device-specific PDF, HTML5, EPUB, eBook',
      paragraph2Suffix: ', etc.) with support for publications in multiple language.',
    },
    pricePrefix: 'Prices start from just ',
    priceBold: '€0.60',
    priceSuffix: ' per page.',
    publicationTypesHeading: 'Publication Types',
    publicationTypes: [
      'Scientific and academic journals or books',
      'Legal documents or reference publications',
      'Product catalogs for B2B and B2C (e.g. industrial catalogs, travel brochures, etc.)',
      'Catalogs with the same content in different languages',
      'Frequently updated publications (compendia, manuals, instruction booklets, product data sheets, technical documentations, etc.)',
      'Corporate publications (training material, balance sheets, annual reports, etc.)',
      'Dictionaries, encyclopaedias and other reference books',
      'Time-critical web-to-print publications',
    ],
    outputsHeading: 'Outputs',
    outputsBody:
      'Print PDF | Online PDF | Device-specific PDF | HTML5 | eBook (EPUB, AZW, mobi, Screen PDF) | variable print formats',
    solutions: [
      {
        title: 'Catalog Production',
        body: 'We connect to your existing database, CMS or PIM. Alternatively, we can set up a custom solution to automate your catalog production.',
      },
      {
        title: 'Data Conversion',
        body: 'We specialize in conversions from OCR, scan-to-print, file system, InDesign, or other legacy and proprietary systems to XML, database, or CMS.',
      },
    ],
    whyChooseHeading: 'Why Choose Us?',
    whyChooseIntro: "With DocAlign, you'll benefit from many years of publishing services expertise.",
    whyChooseItems: [
      'High-quality typesetting automation with fast results, thanks to proprietary software, based on open standards',
      'Consistent, optimal use of page space thanks to mathematical algorithms',
      'Strict separation of content and form – so content updates never disrupt styles, and vice versa',
      'Accurate implementation of all typesetting elements including balancing footnotes and page configuration according to your specifications',
      'Variable page sizes and multiple technical formats',
      'Media-neutral archiving of source documents and metadata in XML',
    ],
    offerHeading: 'Our solutions offer you:',
    offerItems: ['Automatic creation of directories, indexes and registers'],
    quotePrompt: 'We are happy to offer you a quotation:',
    mailLabel: 'Mail: welcome@docalign.de',
  },
  de: {
    eyebrow: 'Automatischer Buchsatz',
    title: 'Automatischer Buchsatz',
    subtitle:
      'Reduzieren Sie Produktionskosten und -zeit mit der hochmodernen Software von DocAlign und nutzen Sie diese zur Konvertierung Ihrer Daten und zum Satz von Büchern, wissenschaftlichen Arbeiten, Fachzeitschriften und Katalogen.',
    intro: {
      paragraph1Prefix:
        'Reduzieren Sie Produktionskosten und -zeit mit der hochmodernen Software von DocAlign und nutzen Sie diese zur Konvertierung Ihrer Daten und zum Satz von ',
      paragraph1Bold: 'Büchern, wissenschaftlichen Arbeiten, Fachzeitschriften und Katalogen.',
      paragraph2Prefix: 'Unsere Kunden sparen ',
      paragraph2Bold1: '60 bis 90 %',
      paragraph2Middle: ' im Vergleich zu traditionellen Verlagsmodellen.',
      paragraph2Bold2: '',
      paragraph2Suffix: '',
    },
    pricePrefix: 'Preise ab nur ',
    priceBold: '0,60 €',
    priceSuffix: ' pro Seite!',
    publicationTypesHeading: 'Publikationen',
    publicationTypes: [
      'Wissenschaftliche Fachzeitschriften oder Bücher',
      'Juristische Fachpublikationen',
      'Produktkataloge aus dem B2B- und B2C-Bereich (z. B. Industrie- und Reisekataloge)',
      'Kataloge mit gleichem Inhalt in verschiedenen Sprachversionen',
      'Kompendien, Handbücher, Gebrauchsanleitungen, Produktdatenblätter, technische Dokumentationen und sonstige Publikationen, die häufig aktualisiert werden müssen',
      'Unternehmenspublikationen wie Schulungsunterlagen, Haushaltspläne, Bilanzen, Geschäftsberichte usw.',
      'Wörterbücher, Enzyklopädien und andere Nachschlagewerke',
      'Zeitkritische Web-to-Print-Publikationen',
    ],
    outputsHeading: 'Ausgabeformate',
    outputsBody:
      'Druck-PDF | Online-PDF | gerätespezifisches PDF | HTML5 | E-Book (EPUB, AZW, mobi, Screen-PDF) | variable Druckformate',
    solutions: [
      {
        title: 'Katalogproduktion',
        body: 'Wir erstellen aus Ihren Datenbank-, CMS- oder PIM-Inhalten professionell gestaltete Kataloge. Alternativ richten wir Ihnen eine individuelle Lösung ein, um Ihre Katalogproduktion zu automatisieren.',
      },
      {
        title: 'Datenkonvertierung',
        body: 'Wir konvertieren Daten aus Ihren Dateisystemen, InDesign-Dokumenten, gedruckten Medien (per Scan und Texterkennung) und anderen Quellen in XML-Formate, Content-Management-Systeme oder Datenbanken.',
      },
    ],
    whyChooseHeading: 'Warum DocAlign?',
    whyChooseIntro: 'Mit DocAlign profitieren Sie von langjähriger Erfahrung im Verlagswesen.',
    whyChooseItems: [
      'Hochqualitativer, vollautomatisierter Satz mit schnellen Ergebnissen dank unserer hauseigenen Software',
      'Konsistente, optimale Nutzung der Seiten dank mathematischer Algorithmen',
      'Strikte Trennung von Inhalt und Form',
      'Akkurate Implementierung aller Satzregeln inklusive Fußnotengestaltung und Seiteneinrichtung',
      'Beliebige Seitengrößen und diverse Ausgabeformate',
      'Medienneutrale Archivierung der Quelldokumente und Metadaten in XML',
    ],
    offerHeading: 'Unsere Lösungen bieten Ihnen:',
    offerItems: ['Automatische Erstellung von Verzeichnissen, Indizes und Registern'],
    quotePrompt: 'Gerne unterbreiten wir Ihnen ein Angebot:',
    mailLabel: 'Mail: welcome@docalign.de',
  },
}
