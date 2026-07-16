export interface LayoutTranslation {
  nav: {
    home: string
    typesetting: string
    howItWorks: string
    pricing: string
    customSoftware: string
    additionalServices: string
    aboutUs: string
    contactUs: string
    caseStudies: string
    linkedin: string
    facebook: string
    blog: string
  }
  footer: {
    description: string
    companyHeading: string
    resourcesHeading: string
    companyLinks: string[]
    resourceLinks: string[]
    copyrightSuffix: string
    privacyPolicy: string
    termsOfService: string
  }
}

export const layoutTranslations: Record<'en' | 'de', LayoutTranslation> = {
  en: {
    nav: {
      home: 'Home',
      typesetting: 'Typesetting and Formatting',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      customSoftware: 'Custom Software Solutions',
      additionalServices: 'Additional Services',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      caseStudies: 'Case Studies',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      blog: 'Blog',
    },
    footer: {
      description:
        'Providing high-quality typesetting, formatting, and document conversion solutions to empower creators and developers around the world.',
      companyHeading: 'Company',
      resourcesHeading: 'Resources',
      companyLinks: ['About Us', 'Services', 'Our Team', 'Careers', 'Contact Us'],
      resourceLinks: ['Blog', 'Help Center / FAQ', 'Press Kit', 'Case Studies'],
      copyrightSuffix: 'DocAlign.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      typesetting: 'Satz und Formatierung',
      howItWorks: 'So funktioniert es',
      pricing: 'Preise',
      customSoftware: /*'Maßgeschneiderte Software'*/ 'Softwarelösungen', 
      additionalServices: 'Zusätzliche Leistungen',
      aboutUs: 'Über uns',
      contactUs: 'Kontakt',
      caseStudies: 'Fallstudien',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      blog: 'Blog',
    },
    footer: {
      description:
        'Wir bieten hochwertige Satz-, Formatierungs- und Dokumentkonvertierungslösungen, um Kreative und Entwickler weltweit zu unterstützen.',
      companyHeading: 'Unternehmen',
      resourcesHeading: 'Ressourcen',
      companyLinks: ['Über uns', 'Leistungen', 'Unser Team', 'Karriere', 'Kontakt'],
      resourceLinks: ['Blog', 'Hilfe-Center / FAQ', 'Pressemappe', 'Fallstudien'],
      copyrightSuffix: 'DocAlign.',
      privacyPolicy: 'Datenschutz',
      termsOfService: 'Nutzungsbedingungen',
    },
  },
}
