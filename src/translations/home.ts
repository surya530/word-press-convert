export interface HomeTranslation {
  badge: string
  heroHeadingLine1: string
  heroHeadingLine2: string
  heroParagraphBefore: string
  heroParagraphPrice: string
  heroParagraphAfter: string
  ctaQuote: string
  ctaHowItWorks: string
  heroStats: { value: string; label: string }[]
  tagline: string
  featureCards: {
    title: string
    introPrefix: string
    introLink: string
    introSuffix: string
    filesIntro: string
    formats: string[]
    outroPrefix: string
    outroLink: string
    outroSuffix: string
  }[]
  customersHeading: string
  customersSubheading: string
  testimonials: { quote: string; name: string; role: string }[]
}

export const homeTranslations: Record<'en' | 'de', HomeTranslation> = {
  en: {
    badge: 'Automated Typesetting & Formatting',
    heroHeadingLine1: 'State-of-the-art typesetting for books, journals & catalogues.',
    heroHeadingLine2: 'Now automated.',
    heroParagraphBefore:
      'Precise, geometry-based document conversion for publishers — output simultaneously to Print PDF, EPUB, HTML5, and more, at prices as low as ',
    heroParagraphPrice: '€0.60 per page',
    heroParagraphAfter: '.',
    ctaQuote: 'Get a Quote',
    ctaHowItWorks: 'See How It Works',
    heroStats: [
      { value: '€0.60', label: 'starting price / page' },
      { value: '4 hrs', label: 'fastest turnaround' },
      { value: '10+', label: 'output formats' },
      { value: '20+', label: 'years of experience' },
    ],
    tagline: 'High Quality, Low Prices  ·  Fiction Without Friction',
    featureCards: [
      {
        title: 'Prepress and Premedia Formatting',
        introPrefix: 'We offer ',
        introLink: 'text conversion services',
        introSuffix: ' for books, articles, trade journals, and catalogs.',
        filesIntro: 'Your files can simultaneously be converted into:',
        formats: ['Print PDF', 'Online PDF', 'Device-specific PDF', 'HTML5', 'eBook (EPUB, AZW, mobi, Screen PDF)'],
        outroPrefix:
          'Because many steps are fully automated and based on geometrical measures, we can offer high precision typesetting for very ',
        outroLink: 'reasonable prices',
        outroSuffix: '.',
      },
      {
        title: 'Custom Software Solutions',
        introPrefix:
          'High-value custom solutions to give your company better performance, scalable solutions, and a happier, more efficient production team.',
        introLink: '',
        introSuffix: '',
        filesIntro:
          'Our developers, designers, and product team will help you plan your digitization, production, and optimization using open standards — so that you can evolve and grow trusting the solutions in place are durable and efficient.',
        formats: [],
        outroPrefix: '',
        outroLink: 'Our experience',
        outroSuffix: ' spans over decades and in many areas of software development and operations.',
      },
    ],
    customersHeading: 'Our Customers',
    customersSubheading:
      'We have long-standing partnerships with many well-established publishers in Germany and beyond.',
    testimonials: [
      {
        quote:
          "They have a team with very good IT professionals that brings in well-structured and clean, error-free programming approach. With their software solutions we save approximately half of production time along with cost and energy. There is no other company that gives us this much performance.",
        name: 'H. Hohenester',
        role: 'Managing Director, Schwaneberger Verlag',
      },
      {
        quote:
          "With our editing system 'jadis', we have to rely on a powerful and reliable program that runs on Unix servers and quickly computes new variants. Without DocAlign, our editing system will not function. It is the best option in digital production.",
        name: 'Managing Director, Zweitwerk',
        role: '',
      },
      {
        quote:
          'We started in 2000 with databases and XML. There is Unified data management which is a critical factor for streamlined and high quality workflows and all the publishing houses should adopt it in the long run. With DocAlign, we feel that we are in good hands.',
        name: 'Dr. W. Andreae',
        role: '',
      },
    ],
  },
  de: {
    badge: 'Automatisierter Satz & Formatierung',
    heroHeadingLine1: 'Hochmoderner Satz für Bücher, Zeitschriften & Kataloge.',
    heroHeadingLine2: 'Jetzt automatisiert.',
    heroParagraphBefore:
      'Präzise, geometriebasierte Dokumentkonvertierung für Verlage — gleichzeitige Ausgabe als Druck-PDF, EPUB, HTML5 und mehr, zu Preisen ab ',
    heroParagraphPrice: '0,60 € pro Seite',
    heroParagraphAfter: '.',
    ctaQuote: 'Angebot erhalten',
    ctaHowItWorks: 'So funktioniert es',
    heroStats: [
      { value: '0,60 €', label: 'Startpreis / Seite' },
      { value: '4 Std.', label: 'schnellste Bearbeitungszeit' },
      { value: '10+', label: 'Ausgabeformate' },
      { value: '20+', label: 'Jahre Erfahrung' },
    ],
    tagline: 'Hohe Qualität, niedrige Preise  ·  Belletristik ohne Reibungsverluste',
    featureCards: [
      {
        title: 'Prepress- und Premedia-Formatierung',
        introPrefix: 'Wir bieten ',
        introLink: 'Textkonvertierungen',
        introSuffix: ' für Bücher, wissenschaftliche Arbeiten, Fachzeitschriften und Kataloge an.',
        filesIntro: 'Ihre Dateien können gleichzeitig konvertiert werden in:',
        formats: ['Druck-PDF', 'Online-PDF', 'Gerätespezifisches PDF', 'HTML5', 'E-Book (EPUB, AZW, mobi, Screen-PDF)'],
        outroPrefix:
          'Da viele Schritte vollautomatisch ablaufen und auf geometrischen Maßen basieren, können wir hochpräzisen Satz zu sehr ',
        outroLink: 'günstigen Preisen',
        outroSuffix: ' anbieten.',
      },
      {
        title: 'Maßgeschneiderte Software',
        introPrefix:
          'Hochwertige maßgeschneiderte Lösungen verschaffen Ihrem Unternehmen bessere Performance, skalierbare Lösungen und ein zufriedeneres, effizienteres Produktionsteam.',
        introLink: '',
        introSuffix: '',
        filesIntro:
          'Unsere Entwickler, Designer und unser Produktteam unterstützen Sie bei der Planung Ihrer Digitalisierung, Produktion und Optimierung mit offenen Standards — damit Sie sich weiterentwickeln können und darauf vertrauen, dass die eingesetzten Lösungen dauerhaft und effizient sind.',
        formats: [],
        outroPrefix: '',
        outroLink: 'Unsere Erfahrung',
        outroSuffix: ' erstreckt sich über Jahrzehnte und viele Bereiche der Softwareentwicklung und des Betriebs.',
      },
    ],
    customersHeading: 'Unsere Kunden',
    customersSubheading:
      'Wir pflegen langjährige geschäftliche Partnerschaften mit vielen renommierten Verlagen in Deutschland und der ganzen Welt.',
    testimonials: [
      {
        quote:
          "They have a team with very good IT professionals that brings in well-structured and clean, error-free programming approach. With their software solutions we save approximately half of production time along with cost and energy. There is no other company that gives us this much performance.",
        name: 'H. Hohenester',
        role: 'Geschäftsführer, Schwaneberger Verlag',
      },
      {
        quote:
          "With our editing system 'jadis', we have to rely on a powerful and reliable program that runs on Unix servers and quickly computes new variants. Without DocAlign, our editing system will not function. It is the best option in digital production.",
        name: 'Geschäftsführer, Zweitwerk',
        role: '',
      },
      {
        quote:
          'We started in 2000 with databases and XML. There is Unified data management which is a critical factor for streamlined and high quality workflows and all the publishing houses should adopt it in the long run. With DocAlign, we feel that we are in good hands.',
        name: 'Dr. W. Andreae',
        role: '',
      },
    ],
  },
}
