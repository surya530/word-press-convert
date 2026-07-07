export interface CaseStudyPost {
  title: string
  date: string
  noComments: string
  excerpt: string
  readMore: string
}

export interface CaseStudiesTranslation {
  eyebrow?: string
  title: string
  postsLabel: string
  posts: CaseStudyPost[]
}

export const caseStudiesTranslations: Record<'en' | 'de', CaseStudiesTranslation> = {
  en: {
    eyebrow: 'Case Studies',
    title: 'Improving Typesetting Efficiency with docAlign',
    postsLabel: 'Posts:',
    posts: [
      {
        title:
          'A Client Success Story Loose-leaf system company: Improving Typesetting Efficiency for Loose-Leaf Systems with docAlign',
        date: 'August 23, 2024',
        noComments: 'No Comments',
        excerpt:
          'A Client Success Story: Improving Typesetting Efficiency for Loose-Leaf Systems with docAlign Overview of the Company docAlign is a leader in fully automated book typesetting',
        readMore: 'Read More »',
      },
      {
        title: 'Transforming Stamp Catalogue Creation with DocAlign',
        date: 'July 22, 2024',
        noComments: 'No Comments',
        excerpt:
          'Case Study: Transforming Stamp Catalogue Creation with docAlign Overview of docAlign At docAlign, we specialize in document automation and management solutions, helping businesses streamline their',
        readMore: 'Read More »',
      },
    ],
  },
  de: {
    title: 'Erfahrungsberichte zum Einsatz von docAlign',
    postsLabel: 'Beiträge:',
    posts: [
      {
        title:
          'Effizienzsteigerung im Schriftsatz mit docAlign: Eine Kundenerfolgsgeschichte Loseblattsystemunternehmen',
        date: 'August 28, 2024',
        noComments: 'Keine Kommentare',
        excerpt:
          'Eine Erfolgsgeschichte: Verbesserung der Schriftsatzeffizienz für Loseblattsysteme mit docAlign Zusammenfassung Die innovative Satzlösung von docAlign hat einem führenden Unternehmen für Loseblattsysteme geholfen, seinen Dokumentformatierungsprozess zu',
        readMore: 'Read More »',
      },
      {
        title: 'Transformation der Briefmarkenkatalog-Erstellung mit DocAlign',
        date: '22. Juli 2024',
        noComments: 'Keine Kommentare',
        excerpt:
          'Fallstudie: Transformation der Briefmarkenkatalog-Erstellung mit docAlign Überblick über docAlign Bei docAlign sind wir auf Dokumentenautomatisierung und -verwaltungslösungen spezialisiert und helfen Unternehmen, ihre Prozesse zu optimieren.',
        readMore: 'Read More »',
      },
    ],
  },
}
