export interface AdditionalTranslation {
  eyebrow: string
  title: string
  subtitle: string
  intro: string
  ctaPrefix: string
  ctaLinkLabel: string
  ctaSuffix: string
}

export const additionalTranslations: Record<'en' | 'de', AdditionalTranslation> = {
  en: {
    eyebrow: 'More From DocAlign',
    title: 'Additional Services',
    subtitle:
      'Explore the additional services we offer alongside typesetting, formatting, and custom software solutions.',
    intro:
      'DocAlign offers a range of additional services on request, such as translation and editing services, as well as workshops and training.',
    ctaPrefix: 'Please ',
    ctaLinkLabel: 'get in touch',
    ctaSuffix: ' to discuss your needs.',
  },
  de: {
    eyebrow: 'Mehr von DocAlign',
    title: 'Zusätzliche Leistungen',
    subtitle: 'DocAlign bietet auf Anfrage zusätzliche Dienstleistungen an.',
    intro:
      'Gerne unterstützen wir Sie bei Übersetzungen und Lektoratsarbeiten sowie mit Workshops und Schulungen.',
    ctaPrefix: '',
    ctaLinkLabel: 'Fragen Sie uns',
    ctaSuffix: '.',
  },
}
