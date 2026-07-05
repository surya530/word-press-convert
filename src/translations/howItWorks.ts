export interface HowItWorksTranslation {
  eyebrow: string
  title: string
  subtitle: string
  steps: { title: string; body: string; linkLabel?: string; suffix?: string }[]
  note: string
  sendDocHeading: string
  sendDocBody: string
  sendDocHighlight: string
  sendDocClosingPrefix: string
  sendDocContactLabel: string
  sendDocClosingSuffix: string
  discountBody: string
  contactUsLabel: string
  faqHeading: string
  faqs: { question: string; answer: string }[]
}

export const howItWorksTranslations: Record<'en' | 'de', HowItWorksTranslation> = {
  en: {
    eyebrow: 'Typesetting and Formatting',
    title: 'How DocAlign Works',
    subtitle: 'A look at our typesetting and formatting process, from submission to final output.',
    steps: [
      { title: 'Step 1', body: 'Upload your document.*' },
      { title: 'Step 2', body: 'You get an offer according to our', linkLabel: 'prices', suffix: ' by e-mail.' },
      { title: 'Step 3', body: "We'll send you a professionally formatted file by e-mail within 3 working days." },
    ],
    note: "* If your publications already have a branded style, upload your stylesheets or a sample of a past publication and we'll match the look and feel.",
    sendDocHeading: 'Send us your document',
    sendDocBody:
      '(Word or .odt file) and tell us which rules and styles are important to you (e.g., fixed number of pages, no widows or orphans, or starting chapters on odd-numbered pages). We’ll send your text back to you in your desired format.',
    sendDocHighlight: 'High volume? Different output formats? Multiple languages?',
    sendDocClosingPrefix: "No problem, that's what we do best!",
    sendDocContactLabel: 'Contact us',
    sendDocClosingSuffix: 'to find out more.',
    discountBody:
      'We offer special discounts based on volume and publication type. Get in touch to discuss the best solution for your projects.',
    contactUsLabel: 'Contact us',
    faqHeading: 'FAQ',
    faqs: [
      {
        question: 'What output formats does DocAlign support?',
        answer:
          'DocAlign supports online PDF, print PDF, device-specific PDF, XML (TEI, DocBook, DOM tree), HTML5/CSS3, EPUB, AZW and mobi (other eBook formats are available if required).',
      },
      {
        question: 'How long does the publication process take?',
        answer: `
        The actual typesetting is the quickest part of the process. Careful preliminary work and accurate specifications are the key to ensuring optimum speed and efficiency – so well-prepared data minimizes the time it takes to process a publication.

Your finished publication will usually be ready within a few days. Your first project will typically take about 3 days. Subsequent publications of the same type have a turnaround time of a maximum of 4 hours, depending on the complexity and volume of data.

Other publications types using the same corporate design will take a maximum of 1.5 days.
      `,
      },
      {
        question: 'What format should my source documents be in?',
        answer: `
      Documents to be typeset must be in a digital format. The source should have a structured format (Word, Excel, structured text file(s), XML, json, databases, CMS data or data from editorial systems). If your document format is not suitable, our Solutions Team can take care of the formatting.

Image data and graphics can either be integrated in the text or delivered separately. If images are delivered separately, a reference to each image is required in the text. The image quality should correspond with the quality requirements for the output channel (DPI, color profile, intended output and size). Images can be in many formats (jpg, tiff, gif, svg, eps or png).
    `,
      },
      {
        question: 'Is DocAlign the right solution for my publication(s)?',
        answer: `
      DocAlign software and processes are ideal for publications with any of the following characteristics:

High volumes of text
High pagination
High volumes of specific data
Multiple large and complex tables
Channel-specific outputs
Multiple language versions
Frequent new editions
Cross-column and formatted footnotes
Footnote numbering by page or by chapter
Switches from footnotes to endnotes (and vice versa)
Numbered headings (especially using Roman numerals)
Optimal image placement
Directories: ToC (Table of Contents), LoF (List of Figures), LoT (List of Topics)
Indexes (names, subjects and multiple hierarchical levels)
Multiple formatted columns
    `,
      },
    ],
  },
  de: {
    eyebrow: 'Satz und Formatierung',
    title: 'So funktioniert DocAlign',
    subtitle: 'Ein Blick auf unseren Satz- und Formatierungsprozess, von der Einreichung bis zur finalen Ausgabe.',
    steps: [
      { title: 'Schritt 1', body: 'Laden Sie Ihr Dokument hoch.*' },
      { title: 'Schritt 2', body: 'Sie erhalten ein Angebot per E-Mail gemäß unserer', linkLabel: 'Preisliste', suffix: '.' },
      { title: 'Schritt 3', body: 'Sie erhalten innerhalb von drei Werktagen per E-Mail ein professionell gesetztes Dokument.' },
    ],
    note: 'Wenn Ihre Publikationen eine von Ihnen vorgegebene Gestaltung haben sollen, können Sie ein Stylesheet oder ein Beispieldokument hochladen, sodass wir Ihr Layout übernehmen können.',
    sendDocHeading: 'Schicken Sie uns Ihr Dokument',
    sendDocBody:
      '(Word- oder ODT-Datei) und teilen Sie uns mit, was bei der Gestaltung beachtet werden soll (z. B. keine Schusterjungen und Hurenkinder, eine bestimmte Seitenzahl, Kapitelanfänge auf ungeraden Seiten). Sie erhalten von uns dann zeitnah eine druckfertige PDF-Datei.',
    sendDocHighlight: 'Hohe Seitenzahl? Verschiedene Ausgabekanäle? Mehrere Sprachen?',
    sendDocClosingPrefix: 'Kein Problem, darin sind wir unübertroffen!',
    sendDocContactLabel: 'Kontaktieren Sie uns',
    sendDocClosingSuffix: 'um mehr zu erfahren.',
    discountBody:
      'Wir bieten Sonderrabatte je nach Auflagenhöhe und Publikationsform. Gerne finden wir gemeinsam mit Ihnen die beste Lösung für Ihre Projekte.',
    contactUsLabel: 'Kontakt',
    faqHeading: 'FAQ',
    faqs: [
      {
        question: 'Welche Ausgabeformate unterstützt DocAlign?',
        answer:
          'Unterstützte Medienkanäle: Online-PDF, Druck-PDF, gerätespezifisches PDF, XML (TEI, DocBook, DOM tree), HTML5 mit CSS3, EPUB, AZW und mobi (weitere E-Book-Formate sind auf Anfrage möglich).',
      },
      {
        question: 'Wie lange dauert die Herstellung einer Publikation?',
        answer: `
        Der eigentliche Satz nimmt die geringste Zeit in Anspruch. Sorgfältige Vorarbeit und präzise Spezifikationen sind entscheidend, um Geschwindigkeit und Effizienz zu optimieren – gut vorbereitete Daten minimieren so die Bearbeitungszeit einer Publikation.

Ihre fertige Publikation liegt in der Regel innerhalb weniger Tage vor. Üblicherweise nimmt ein Erstprojekt etwa drei Tage in Anspruch. Folgepublikationen derselben Kategorie dauern je nach Komplexität und Umfang maximal vier Stunden.

Publikationen anderer Kategorien mit demselben Corporate Design dauern maximal 1,5 Tage.
      `,
      },
      {
        question: 'In welchem Format sollten meine Quelldokumente vorliegen?',
        answer: `
      Dokumente, die gesetzt werden sollen, müssen in digitaler Form vorliegen. Die Quelle sollte ein strukturiertes Format haben (Word, Excel, strukturierte Textdateien, XML, JSON, Datenbanken, CMS-Daten oder Daten aus Redaktionssystemen). Falls Ihr Dateiformat nicht geeignet ist, übernimmt unser Solutions-Team die Formatierung.

Bild- und Grafikdaten können entweder im Text integriert oder separat geliefert werden. Bei separater Lieferung ist ein Verweis auf jedes Bild im Text erforderlich. Die Bildqualität sollte den Anforderungen des Ausgabekanals entsprechen (DPI, Farbprofil, Ausgabeziel und Größe). Bilder können in vielen Formaten vorliegen (jpg, tiff, gif, svg, eps oder png).
    `,
      },
      {
        question: 'Ist DocAlign die richtige Lösung für meine Publikation(en)?',
        answer: `
      Die Software und Prozesse von DocAlign eignen sich ideal für Publikationen mit einem oder mehreren der folgenden Merkmale:

Hohes Textvolumen
Hoher Seitenumfang
Große Mengen spezifischer Daten
Mehrere große und komplexe Tabellen
Kanalspezifische Ausgaben
Mehrere Sprachversionen
Häufige Neuauflagen
Spaltenübergreifende und formatierte Fußnoten
Fußnotennummerierung nach Seite oder Kapitel
Wechsel zwischen Fuß- und Endnoten (und umgekehrt)
Nummerierte Überschriften (insbesondere mit römischen Ziffern)
Optimale Bildplatzierung
Verzeichnisse: Inhaltsverzeichnis, Abbildungsverzeichnis, Themenverzeichnis
Register (Namen, Themen und mehrere hierarchische Ebenen)
Mehrspaltiger, formatierter Satz
    `,
      },
    ],
  },
}
