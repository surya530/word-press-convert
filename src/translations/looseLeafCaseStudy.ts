export interface LooseLeafCaseStudyTranslation {
  eyebrow: string
  title: string
  date: string
  noComments: string
  backLabel: string
  sections: {
    heading: string
    body: string
  }[]
  resultsHeading: string
  results: string[]
  conclusionHeading: string
  conclusion: string
}

export const looseLeafCaseStudyTranslations: Record<'en' | 'de', LooseLeafCaseStudyTranslation> = {
  en: {
    eyebrow: 'Case Study',
    title:
      'A Client Success Story Loose-leaf system company: Improving Typesetting Efficiency for Loose-Leaf Systems with docAlign',
    date: 'August 23, 2024',
    noComments: 'No Comments',
    backLabel: '← Back to Case Studies',
    sections: [
      {
        heading: 'Overview of the Company',
        body: 'docAlign is a leader in fully automated book typesetting solutions, enabling clients to generate high-quality documents with precision and speed.',
      },
      {
        heading: 'About the Client',
        body: 'The client specializes in creating and updating loose-leaf systems containing technical content such as legal regulations and work instructions, which require regular updates and close collaboration with external partners.',
      },
      {
        heading: 'Challenges Faced',
        body: 'The organization struggled with complex, variable typesetting requirements across projects. Manual tracking and implementation of these requirements often led to data entry errors and inconsistencies, which compromised document quality and increased operational costs.',
      },
      {
        heading: 'Solution Implemented',
        body: "docAlign provided automated document formatting configured for the client's intricate specifications, involving XML data transformation and customized page and style setup.",
      },
    ],
    resultsHeading: 'Results Achieved',
    results: [
      '60% reduction in typesetting costs',
      '25% improvement in document quality through error reduction',
      'Timely document delivery ahead of deadlines',
    ],
    conclusionHeading: 'Conclusion',
    conclusion:
      "The solution delivered by docAlign resulted in significant cost savings, improved accuracy, and enhanced operational efficiency for the client's loose-leaf system production.",
  },
  de: {
    eyebrow: 'Fallstudie',
    title:
      'Effizienzsteigerung im Schriftsatz mit docAlign: Eine Kundenerfolgsgeschichte Loseblattsystemunternehmen',
    date: '28. August 2024',
    noComments: 'Keine Kommentare',
    backLabel: '← Zurück zu den Erfahrungsberichten',
    sections: [
      {
        heading: 'Zusammenfassung',
        body: 'Die docAlign-Satzlösung unterstützte ein Loseblattsystem-Unternehmen erheblich: Kostenreduzierung um 60 %, Fehlerreduzierung um 25 % und Verbesserung der Dokumentkonsistenz durch Automatisierung komplexer Formatierungsvorgaben.',
      },
      {
        heading: 'Einführung',
        body: 'docAlign bietet vollautomatischen Buchsatz an, wobei Kundenvorgaben bei der Konfiguration beachtet werden. Der Kunde produziert umfangreiche technische Loseblattsysteme, die regelmäßig aktualisiert werden und schnelle Bearbeitung mit mehreren Partnern erfordern.',
      },
      {
        heading: 'Problemstellung',
        body: 'Jedes Projekt verfügte über sehr spezielle Satzvorgaben, was menschlichen Bearbeitern Schwierigkeiten bereitete. Dies führte zu Erfassungsfehlern und Ungenauigkeiten, erhöhten Kosten und Ineffizienz.',
      },
      {
        heading: 'Problemlösung',
        body: 'docAlign automatisierte den komplexen Satzprozess vollständig und sicherte die Homogenität der Texte. Die Software handhabt auch fehlerhafte Textauszeichnungen. Trotz notwendiger Vorarbeit bei der Konfiguration reduzieren die Automatisierungsfunktionen manuelle Eingriffe erheblich.',
      },
    ],
    resultsHeading: 'Ergebnisse',
    results: [
      'Satzkosten sanken um 60 %',
      'Dokumentqualität verbesserte sich um 25 %',
      'Liefertermine wurden oft übertroffen',
    ],
    conclusionHeading: 'Fazit',
    conclusion:
      'Die docAlign-Lösung transformierte die Arbeitsabläufe, erbrachte Kosteneinsparungen, höhere Genauigkeit und verbesserte Effizienz für den Kunden.',
  },
}
