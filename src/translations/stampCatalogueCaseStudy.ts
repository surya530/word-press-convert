export interface StampCatalogueSection {
  heading: string
  body?: string
  items?: string[]
}

export interface StampCatalogueCaseStudyTranslation {
  eyebrow: string
  title: string
  date: string
  noComments: string
  backLabel: string
  sections: StampCatalogueSection[]
  resultsHeading: string
  results: string[]
  conclusionHeading: string
  conclusion: string
}

export const stampCatalogueCaseStudyTranslations: Record<'en' | 'de', StampCatalogueCaseStudyTranslation> = {
  en: {
    eyebrow: 'Case Study',
    title: 'Transforming Stamp Catalogue Creation with DocAlign',
    date: 'July 22, 2024',
    noComments: 'No Comments',
    backLabel: '← Back to Case Studies',
    sections: [
      {
        heading: 'Overview of docAlign',
        body: 'At docAlign, we specialize in document automation and management solutions, helping businesses streamline their document-related tasks.',
      },
      {
        heading: 'About the Client',
        body: 'A major philatelic organization needed more efficient methods for managing their extensive stamp collection and catalogue production.',
      },
      {
        heading: 'Challenges Faced',
        items: [
          'Manual stamp editing consumed excessive time',
          'Catalogue creation required many labor hours',
          'Proofreading and typesetting verification were time-intensive',
          'No organized, centralized storage for stamp information',
          'Theme-based catalogues were only 80-90% complete with manual work',
        ],
      },
      {
        heading: 'Solution Implemented',
        items: [
          'User-friendly editing interface development',
          'SQL database model (PDB) for stamp data storage',
          'Data import capability from structured JSON files',
          'Keyword assignment system for theme-based catalogues',
          'Printable catalogue version generation',
        ],
      },
    ],
    resultsHeading: 'Results Achieved',
    results: [
      '100% process automation achieved',
      '50% efficiency increase',
      '40% cost reduction',
      'Workload reduction of 50%',
      'Theme-based catalogues reached 100% complete',
      'Simplified, user-friendly system with comprehensive stamp database access',
    ],
    conclusionHeading: 'Conclusion',
    conclusion:
      "docAlign's tailored solution fully automated the client's stamp catalogue production, cutting costs and workload while delivering a comprehensive, user-friendly database system.",
  },
  de: {
    eyebrow: 'Fallstudie',
    title: 'Transformation der Briefmarkenkatalog-Erstellung mit DocAlign',
    date: '22. Juli 2024',
    noComments: 'Keine Kommentare',
    backLabel: '← Zurück zu den Erfahrungsberichten',
    sections: [
      {
        heading: 'Überblick über docAlign',
        body: 'Bei docAlign sind wir auf Dokumentenautomatisierung und -verwaltungslösungen spezialisiert und helfen Unternehmen, ihre dokumentbezogenen Aufgaben zu optimieren.',
      },
      {
        heading: 'Über den Kunden',
        body: 'Eine bedeutende philatelistische Organisation benötigte effizientere Methoden zur Verwaltung ihrer umfangreichen Briefmarkensammlung und Katalogproduktion.',
      },
      {
        heading: 'Herausforderungen',
        items: [
          'Die manuelle Bearbeitung von Briefmarken nahm übermäßig viel Zeit in Anspruch',
          'Die Katalogerstellung erforderte zahlreiche Arbeitsstunden',
          'Korrekturlesen und Satzkontrolle waren sehr zeitintensiv',
          'Es fehlte eine organisierte, zentrale Speicherung der Briefmarkeninformationen',
          'Themenkataloge waren mit manueller Arbeit nur zu 80-90 % vollständig',
        ],
      },
      {
        heading: 'Umgesetzte Lösung',
        items: [
          'Entwicklung einer benutzerfreundlichen Bearbeitungsoberfläche',
          'SQL-Datenbankmodell (PDB) zur Speicherung der Briefmarkendaten',
          'Datenimportfunktion aus strukturierten JSON-Dateien',
          'Schlagwortsystem für themenbasierte Kataloge',
          'Erstellung druckfähiger Katalogversionen',
        ],
      },
    ],
    resultsHeading: 'Erzielte Ergebnisse',
    results: [
      '100 % Prozessautomatisierung erreicht',
      '50 % Effizienzsteigerung',
      '40 % Kostenreduzierung',
      '50 % geringerer Arbeitsaufwand',
      'Themenkataloge erreichten 100 % Vollständigkeit',
      'Vereinfachtes, benutzerfreundliches System mit umfassendem Zugriff auf die Briefmarkendatenbank',
    ],
    conclusionHeading: 'Fazit',
    conclusion:
      'Die maßgeschneiderte Lösung von docAlign automatisierte die Briefmarkenkatalog-Produktion des Kunden vollständig, senkte Kosten und Arbeitsaufwand und lieferte ein umfassendes, benutzerfreundliches Datenbanksystem.',
  },
}
