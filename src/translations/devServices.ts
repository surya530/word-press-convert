export interface DevServicesTranslation {
  eyebrow: string
  title: string
  subtitle: string
  intro: {
    paragraph1: string
    paragraph2: string
    paragraph3Prefix: string
    paragraph3Bold: string
    paragraph3Middle: string
    caseStudiesLabel: string
    paragraph3Suffix: string
  }
  solutions: { title: string; body: string }[]
  expertiseHeading: string
  expertiseLeft: string[]
  expertiseRight: string[]
  quotePrompt: string
  mailLabel: string
}

export const devServicesTranslations: Record<'en' | 'de', DevServicesTranslation> = {
  en: {
    eyebrow: 'Custom Software Solutions',
    title: 'Development Services',
    subtitle:
      'We build custom software and tooling tailored to your document workflows — secure, scalable, and robust.',
    intro: {
      paragraph1:
        'Our teams will help you accelerate your digital transformation. We build cutting edge IT solutions based on industry standards and on your business strategy to help your company grow.',
      paragraph2:
        'From database management, workflow optimization, software development, and solutions for the publishing and media industry, we support the needs of your teams with powerful automation tools.',
      paragraph3Prefix: 'Our solutions ',
      paragraph3Bold: 'reduce costs and production time by 60–90%',
      paragraph3Middle: '. Take a look at our ',
      caseStudiesLabel: 'case studies',
      paragraph3Suffix:
        ' to see some examples of how our services have helped our customers with their data and software development needs.',
    },
    solutions: [
      {
        title: 'eLearning',
        body: 'Our eLearning team will support your growth strategy with the most efficient and durable custom solutions for eReaders, eBooks, shopping solutions, DRM, publishing workflow, online courses or bookshelves.',
      },
      {
        title: 'Data Conversion and Digitalization',
        body: 'We specialize in conversions from OCR, scan-to-print, file system, InDesign, or other legacy and proprietary systems to XML, database, or CMS.',
      },
      {
        title: 'Catalog Production',
        body: 'Optimize the production from your existing database, CMS or PIM. No database? No problem! Our automation software can be used directly from file systems.',
      },
    ],
    expertiseHeading: 'Over 20 Years of Software Development Expertise',
    expertiseLeft: [
      'High quality, fast, modular solutions that fit your needs',
      'Extensive expertise in data management, API development, web services integration, and security protocols',
      'Database development and management',
    ],
    expertiseRight: [
      'Through specification and design phase to guaranteed results',
      'Open standards, leveraging open source whenever possible',
      'Technology neutral and agnostic',
    ],
    quotePrompt: 'We are happy to offer you a quotation:',
    mailLabel: 'Mail: welcome@docalign.de',
  },
  de: {
    eyebrow: 'Maßgeschneiderte Software',
    title: 'Entwicklungsdienstleistungen',
    subtitle:
      'Wir erstellen moderne, an Industriestandards und Ihre Unternehmensstrategie angepasste IT-Lösungen für Ihre Dokumenten-Workflows — sicher, skalierbar und robust.',
    intro: {
      paragraph1:
        'Unsere Teams helfen Ihnen bei einer beschleunigten digitalen Transformation. Wir erstellen moderne, an Industriestandards und Ihre Unternehmensstrategie angepasste IT-Lösungen, um das Wachstum Ihres Unternehmens zu unterstützen.',
      paragraph2:
        'Von Datenbankmanagement über Optimierung der Arbeitsabläufe bis zu Lösungen für Verlage und Medienunternehmen: Unser Softwareentwicklungsteam unterstützt Sie mit leistungsfähigen Tools zur Automatisierung all dieser Prozesse.',
      paragraph3Prefix: 'Das reduziert Ihre Produktionskosten und -zeiten ',
      paragraph3Bold: 'um 60 bis 90 %',
      paragraph3Middle: '. Werfen Sie einen Blick auf unsere ',
      caseStudiesLabel: 'Fallstudien',
      paragraph3Suffix:
        ', um zu sehen, wie unsere Dienstleistungen unseren Kunden bei ihren Daten- und Softwareentwicklungsanforderungen geholfen haben.',
    },
    solutions: [
      {
        title: 'E-Learning',
        body: 'Unser E-Learning-Team schult Ihre Belegschaft in Onlinekursen bezüglich E-Readern, E-Books, Datenmanagement, Publishing-Workflow, Shopsystemen etc.',
      },
      {
        title: 'Datenkonvertierung und Digitalisierung',
        body: 'Wir konvertieren Daten aus Ihren Dateisystemen, InDesign-Dokumenten, gedruckten Medien (per Scan und Texterkennung) und anderen Quellen in XML-Formate, Content-Management-Systeme oder Datenbanken.',
      },
      {
        title: 'Katalogerstellung',
        body: 'Wir erstellen aus Ihren Datenbank-, CMS- oder PIM-Inhalten professionell gestaltete Kataloge. Keine Datenbank? Kein Problem! Unsere Automatisierungssoftware funktioniert auch direkt mit Dateisystemen.',
      },
    ],
    expertiseHeading: 'Profitieren Sie von über 20 Jahren Programmiererfahrung',
    expertiseLeft: [
      'Hochqualitative, schnelle und modulare Lösungen für Ihre Anforderungen',
      'Datenmanagement, Schnittstellenentwicklung, Web-Service-Integration und Sicherheitsprotokolle',
      'Datenbankentwicklung und -management',
    ],
    expertiseRight: [
      'Durch Spezifikations- und Entwurfsphase zu garantierten Ergebnissen',
      'Verwendung von offenen Standards, wenn möglich quelloffen',
      'Technologie- und plattformunabhängige Softwareentwicklung',
    ],
    quotePrompt: 'Gerne unterbreiten wir Ihnen ein Angebot:',
    mailLabel: 'Mail: welcome@docalign.de',
  },
}
