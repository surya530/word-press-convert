export interface PricingTierContent {
  price: string
  unit: string
  complexity: string
  volume: string
  note: string
}

export interface PricingTranslation {
  eyebrow: string
  title: string
  intro: {
    line1: string
    basicPrefix: string
    basicSuffix: string
    premiumPrefix: string
    premiumSuffix: string
    volumePrefix: string
    volumeSuffix: string
  }
  tiers: PricingTierContent[]
  getQuoteLabel: string
  subscriptionHeading: string
  subscriptionBodyPrefix: string
  getInTouchLabel: string
  subscriptionBodySuffix: string
  additionalServicesHeading: string
  additionalServices: string[]
  whyChooseHeading: string
  whyChooseItems: string[]
  ctaPrefix: string
  ctaSuffix: string
  outputsLabel: string
  outputsBody: string
}

export const pricingTranslations: Record<'en' | 'de', PricingTranslation> = {
  en: {
    eyebrow: 'Typesetting and Formatting',
    title: 'Pricing',
    intro: {
      line1: 'Our prices vary according to the complexity of the text.',
      basicPrefix: 'Most novels will fall into the',
      basicSuffix: 'pricing model.',
      premiumPrefix:
        'Most journals and some complex academic texts with many tables or complex footnote logic (e.g. between columns) will fall into the',
      premiumSuffix: 'pricing model.',
      volumePrefix: '',
      volumeSuffix: 'pricing generally applies to large publishers.',
    },
    tiers: [
      {
        price: '€1.20',
        unit: 'per page',
        complexity: 'Low complexity',
        volume: 'Low volume',
        note: 'Ideal for self-publishers and small/medium-sized publishers.',
      },
      {
        price: '€2.00',
        unit: 'per page',
        complexity: 'High complexity',
        volume: 'High volume',
        note: 'E.g. catalogues, journals or reports.',
      },
      {
        price: '€0.60',
        unit: 'per page',
        complexity: 'Low complexity',
        volume: 'High volume',
        note: 'E.g. fiction with a minimum order of 10,000 pages/year.',
      },
    ],
    getQuoteLabel: 'Get a quote',
    subscriptionHeading: 'Are you a formatting/typesetting services company?',
    subscriptionBodyPrefix:
      'We offer subscription services, where you buy packets of pages (in multiples of 1000) which you can use over the course of a year.',
    getInTouchLabel: 'Get in touch',
    subscriptionBodySuffix: 'to discuss your projects.',
    additionalServicesHeading: 'Additional Services',
    additionalServices: ['Image processing', 'Copy editing', 'Database integration'],
    whyChooseHeading: 'Why Choose DocAlign?',
    whyChooseItems: [
      'Our automated publication process lightens the editorial and proofreading loads – so you save time and money.',
      'You define the styles and layout – these are not based on standard templates.',
      "Your texts and other elements are placed and repositioned by our measurement algorithms – so a last-minute change won't require manual adjustments throughout the publication.",
      'You can publish content across multiple media at little or no extra cost – this includes media and device-specific layouts (e.g. eBook format).',
      'Your costs are reduced by 60–90% and your editors and proofreaders can focus on the content.',
    ],
    ctaPrefix: 'Get in touch to discuss your projects',
    ctaSuffix: "and we'll find the best solution for you.",
    outputsLabel: 'Outputs supported:',
    outputsBody:
      'online PDF, print PDF, device-specific PDF, XML (TEI, DocBook, DOM tree), HTML5/CSS3, EPUB, AZW and mobi (other eBook formats are available upon request).',
  },
  de: {
    eyebrow: 'Satz und Formatierung',
    title: 'Preise',
    intro: {
      line1: 'Unsere Preise richten sich nach der Komplexität des Textes.',
      basicPrefix: 'Die meisten Romane fallen in die Kategorie',
      basicSuffix: '.',
      premiumPrefix:
        'Die meisten Zeitschriften und einige komplexe wissenschaftliche Texte mit vielen Tabellen oder komplexer Fußnotenlogik (z. B. zwischen Spalten) fallen in die Kategorie',
      premiumSuffix: '.',
      volumePrefix: 'Die Kategorie',
      volumeSuffix: 'ist vor allem für große Verlage geeignet.',
    },
    tiers: [
      {
        price: '€1,20',
        unit: 'pro Seite',
        complexity: 'Geringe Komplexität',
        volume: 'Geringes Volumen',
        note: 'Ideal für Selbstverleger und kleine/mittelgroße Verlage.',
      },
      {
        price: '€2,00',
        unit: 'pro Seite',
        complexity: 'Hohe Komplexität',
        volume: 'Hohes Volumen',
        note: 'Z. B. Kataloge, Zeitschriften oder Berichte.',
      },
      {
        price: '€0,60',
        unit: 'pro Seite',
        complexity: 'Geringe Komplexität',
        volume: 'Hohes Volumen',
        note: 'Z. B. Romane mit einer Mindestbestellung von 10.000 Seiten/Jahr.',
      },
    ],
    getQuoteLabel: 'Angebot anfordern',
    subscriptionHeading: 'Sind Sie ein Formatierungs-/Satzdienstleister?',
    subscriptionBodyPrefix:
      'Wir bieten Abonnementdienste an, bei denen Sie Seitenpakete (in Vielfachen von 1000) kaufen, die Sie über das Jahr verteilt nutzen können.',
    getInTouchLabel: 'Kontaktieren Sie uns',
    subscriptionBodySuffix: 'um Ihre Projekte zu besprechen.',
    additionalServicesHeading: 'Weitere Leistungen',
    additionalServices: ['Bildbearbeitung', 'Lektoratsarbeiten', 'Datenbankintegration'],
    whyChooseHeading: 'Warum DocAlign wählen?',
    whyChooseItems: [
      'Mit unserem automatisierten Publikationsprozess werden Redaktion und Lektoratsarbeiten entlastet – so sparen Sie Zeit und Geld.',
      'Die Formate und das Layout definieren Sie – diese basieren nicht auf Standardvorlagen.',
      'Unsere Messalgorithmen platzieren und positionieren Ihre Texte und andere Elemente – eine Last-Minute-Änderung erfordert daher keine manuellen Anpassungen in der gesamten Publikation.',
      'Sie können Inhalte über verschiedene Medienkanäle veröffentlichen, ohne oder mit geringen Zusatzkosten – inklusive medien- und gerätespezifischer Layouts (z. B. eBook-Format).',
      'Ihre Kosten werden um 60–90 % reduziert, und Ihre Redaktion und Ihr Lektoratsarbeiten können sich auf den Inhalt konzentrieren.',
    ],
    ctaPrefix: 'Kontaktieren Sie uns, damit wir Ihre Projekte besprechen können',
    ctaSuffix: 'und die beste Lösung für Sie finden.',
    outputsLabel: 'Unterstützte Ausgabeformate:',
    outputsBody:
      'Online-PDF, Druck-PDF, gerätespezifisches PDF, XML (TEI, DocBook, DOM tree), HTML5/CSS3, EPUB, AZW und mobi (weitere E-Book-Formate sind auf Anfrage verfügbar).',
  },
}
