export interface BookTypesettingBlogTranslation {
  eyebrow: string
  title: string
  date: string
  noComments: string
  backLabel: string
  paragraphs: string[]
  skillsIntro: string
  skills: string[]
  requirementsIntro: string
  requirements: string[]
  conclusion: string
  gutenbergCaption: string
  linotypeCaption: string
  fontsCaption: string
  ebookCaption: string
}

export const bookTypesettingBlogTranslations: Record<'en' | 'de', BookTypesettingBlogTranslation> = {
  en: {
    eyebrow: 'Blog',
    title: 'Typesetting Yesterday, Today, and Tomorrow',
    date: 'November 3, 2023',
    noComments: 'No Comments',
    backLabel: '← Back to Blog',
    paragraphs: [
      'From its beginnings to the modern digital era, typesetting has made an essential contribution to the dissemination of knowledge, ideas, and culture, and it will continue to do so in the future.',
      'To produce a book in the past, a text had to be copied by hand. This was very time-consuming and costly, and books were correspondingly expensive and rare. This only changed with the invention of the printing press.',
      'Inseparably linked to this is the name Johannes Gutenberg. His groundbreaking invention of movable metal type enabled the efficient and cost-effective mass production of books in Europe for the first time in the 15th century.',
      'In the period that followed, typesetting was continually refined and improved. New layouts and fonts were developed to meet the needs of different texts. Many of the classic typefaces are still used today and shape the aesthetics of printed products.',
      'In the 19th century, typesetting experienced another turning point with the introduction of the Linotype machine, which made it possible to produce entire lines of text in a single casting instead of inserting each letter as an individual lead type. This made typesetting even faster and more cost-effective, leading to an unprecedented rise in the publication of books and newspapers.',
      'In the 20th century, digitization revolutionized typesetting. With the introduction of computers and desktop publishing software, it could be designed more efficiently and flexibly. The variety of available fonts and layout options became almost limitless.',
      'With the advent of the internet, typesetting has undergone a further transformation. In the digital age, books are no longer published only in printed form, but in a variety of media, e.g. e-books, EPUBs or websites. These can be read on the corresponding technical devices. To ensure a pleasant reading experience, the layout must be able to adapt automatically to the most varied technical requirements (screen size, resolution, etc.).',
      'Printed books are still valued, and at the same time e-books and online publications enjoy great popularity. Typesetting remains a decisive aspect of book production, shaping the readability, aesthetics, and overall impression of a work.',
    ],
    skillsIntro:
      'If, in the near future, typesetting is no longer carried out by humans but by software, that software must be reliable and possess many of the skills previously handled by the typesetter:',
    skills: [
      'proper page breaks',
      'correct hyphenation (even in different languages)',
      'overall optical impression (text flow, word and character spacing, grayscale)',
      'integration of images and tables',
      'table typesetting with individual fonts and alignments',
      'the creation of indices and directories',
      'OCR-capability for documents that are only available in printed form',
    ],
    requirementsIntro:
      'It must also meet the modern technical requirements brought about by digitization:',
    requirements: [
      'outputting results in various channels (print files, EPUBs, e-books, HTML files, etc.)',
      'multilingual capabilities',
      'post-processing of images (color space, file format, resolution, etc.)',
      'integration into online portals to allow independent authors to have their publications typeset fully automatically',
      'catalog creation from databases',
    ],
    conclusion:
      "Although a large number of typesetting programs exist, most of them are unable to produce an optimal typesetting result without human post-processing. The proprietary software of the Berlin-based company DocAlign attempts to combine traditional high-level book typesetting with the demands of digital production fully automated.",
    gutenbergCaption: 'Johannes Gutenberg (ca. 1400–1468)',
    linotypeCaption: 'Linotype machine (Photo by Robert Linder at Unsplash)',
    fontsCaption: 'Different fonts',
    ebookCaption: 'E-book reader',
  },
  de: {
    eyebrow: 'Blog',
    title: 'Buchsatz gestern, heute und morgen',
    date: '3. November 2023',
    noComments: 'Keine Kommentare',
    backLabel: '← Zurück zum Blog',
    paragraphs: [
      'Von seinen Anfängen bis zur modernen digitalen Ära hat der Buchsatz einen unverzichtbaren Beitrag zur Verbreitung von Wissen, Ideen und Kultur geleistet und wird dies auch in Zukunft tun.',
      'Um früher ein Buch zu erzeugen, musste ein Text per Hand auf- bzw. abgeschrieben werden. Das war sehr zeit- und kostenaufwendig und Bücher waren entsprechend teuer und selten. Dies änderte sich erst mit der Erfindung des Buchdrucks.',
      'Untrennbar damit verbunden ist der Name Johannes Gutenberg. Seine bahnbrechende Erfindung der beweglichen Metalllettern ermöglichte im 15. Jahrhundert in Europa erstmals eine effiziente und kostengünstige Massenproduktion von Büchern.',
      'In der Folgezeit wurde der Buchsatz immer weiter verfeinert und verbessert. Neue Layouts und Schriftarten wurden entwickelt, um den Bedürfnissen unterschiedlicher Texte gerecht zu werden. Viele der klassischen Schriftarten werden noch heute verwendet und prägen die Ästhetik von Printerzeugnissen.',
      'Im 19. Jahrhundert erlebte der Buchsatz einen weiteren Wendepunkt mit der Einführung der Linotype-Setzmaschine, die es ermöglichte, ganze Textzeilen in einem einzigen Guss herzustellen, statt jeden Buchstaben als einzelne Bleiletter einfügen zu müssen. Dadurch wurde der Buchsatz noch schneller und kostengünstiger. Dies führte zu einem beispiellosen Anstieg der Veröffentlichung von Büchern und Zeitungen.',
      'Im 20. Jahrhundert revolutionierte die Digitalisierung den Buchsatz. Mit der Einführung von Computern und Desktop-Publishing-Software konnte dieser effizienter und flexibler gestaltet werden. Die Vielfalt an verfügbaren Schriftarten und Layoutoptionen wurde nahezu grenzenlos.',
      'Mit dem Aufkommen des Internets hat der Buchsatz eine weitere Transformation erfahren. Bücher werden im digitalen Zeitalter nicht mehr nur in gedruckter Form veröffentlicht, sondern in einer Vielzahl von Medien, z. B. E-Books, EPUBs oder Webseiten. Diese können mit entsprechenden technischen Geräten gelesen werden. Um ein angenehmes Leseerlebnis zu gewährleisten, muss der Satz sich den unterschiedlichsten technischen Erfordernissen (Bildschirmgröße, Auflösung etc.) automatisch anpassen können.',
      'Gedruckte Bücher werden nach wie vor geschätzt, und gleichzeitig erfreuen sich E-Books und Onlinepublikationen großer Beliebtheit. Der Buchsatz bleibt ein entscheidender Aspekt der Buchproduktion, der die Lesbarkeit, Ästhetik und den Gesamteindruck eines Werkes prägt.',
    ],
    skillsIntro:
      'Wenn in naher Zukunft der Buchsatz nicht mehr von Menschen, sondern von Software durchgeführt wird, muss diese verlässlich sein und über viele Fähigkeiten verfügen, die bisher der Setzer übernommen hat:',
    skills: [
      'Seitenumbruch ohne Hurenkinder und Schusterjungen',
      'korrekte Silbentrennung (auch in verschiedenen Sprachen)',
      'optischer Gesamteindruck (Textfluss, Wort- und Zeichenabstände, Grauwert)',
      'Einbindung von Bildern und Tabellen',
      'Tabellensatz mit individuellen Schriften und Ausrichtungen',
      'Register- und Verzeichniserstellung',
      'automatische Schrifterkennung von Dokumenten, die nur in gedruckter Form vorliegen',
    ],
    requirementsIntro:
      'Außerdem muss sie die modernen technischen Anforderungen erfüllen, die die Digitalisierung mit sich gebracht hat:',
    requirements: [
      'Ausgabe der Satzergebnisse in verschiedenen Kanälen (Druckdateien, EPUB, E-Book, HTML etc.)',
      'Vielsprachigkeit',
      'Nachbearbeitung von Bildern (Farbraum, Dateiformat, Auflösung etc.)',
      'Einbindung in Onlineportale, damit auch freischaffende Autoren vollautomatisch ihre Publikationen gesetzt bekommen können',
      'Katalogerstellung aus Datenbanken',
    ],
    conclusion:
      'Obwohl eine Vielzahl von Satzsoftwares existiert, sind die meisten nicht in der Lage, ohne menschliche Nacharbeit ein optimales Satzergebnis zu erstellen. Die proprietäre Software der Berliner Firma DocAlign versucht, klassischen Buchsatz auf höchstem Niveau mit Ansprüchen aus der digitalen Produktion vollautomatisch zu vereinen.',
    gutenbergCaption: 'Johannes Gutenberg (ca. 1400–1468)',
    linotypeCaption: 'Linotype-Setzmaschine (Foto von Robert Linder auf Unsplash)',
    fontsCaption: 'Verschiedene Schriftarten',
    ebookCaption: 'E-Book-Reader',
  },
}
