export interface LinotypeTechSection {
  heading: string
  body: string
}

export interface LinotypeMachineBlogTranslation {
  eyebrow: string
  title: string
  date: string
  noComments: string
  backLabel: string
  paragraphs: string[]
  mergenthalerCaption: string
  machineCaption: string
  technicalHeading: string
  technicalSections: LinotypeTechSection[]
}

export const linotypeMachineBlogTranslations: Record<'en' | 'de', LinotypeMachineBlogTranslation> = {
  en: {
    eyebrow: 'Blog',
    title: 'The Linotype Machine',
    date: 'February 7, 2024',
    noComments: 'No Comments',
    backLabel: '← Back to Blog',
    paragraphs: [
      'The Linotype machine was a revolutionary mechanical typesetting device that played a significant role in the history of printing and publishing newspapers, magazines, and books. Developed by German-American inventor Ottmar Mergenthaler, the Linotype Machine was first used commercially in 1886. It remained a key technology in the printing industry until the late 20th century when photo and digital typesetting took over.',
      'The name of the machine comes from its ability of producing an entire line of types at once.',
      'It was a significant improvement over the previous industry standard of letter-by-letter manual typesetting which was in use since the days of Johannes Gutenberg.',
      'The linotype machine enabled much faster typesetting than had previously been possible. It was now possible for a typesetter to process up to 6,000 characters per hour. With later models, even up to 25,000 characters per hour were possible thanks to the use of punched tape technology.',
      "Mode of operation: The typesetter enters letters via a keyboard. The corresponding matrices are then automatically removed from the machine's magazine and arranged into a line. Liquid lead is then used to create a metal line, which is inserted into the page grid of the print template. The metal lines are melted down again after the printing process and the matrices are returned to the magazine.",
      'The Linotype machine soon began its triumphal march around the world, helping to satisfy the ever-increasing demand for print products. The machines were manufactured in the USA, Great Britain, and Germany, and competing products emerged that largely made use of the original Linotype technology.',
      'Over time, the Linotype machines were continuously improved, e.g. additional fonts and font sizes were implemented and new character sets for international use (Cyrillic, Arabic, etc.) were developed.',
      'The end of the Linotype era did not come until the 1970s, when phototypesetting quickly replaced the now obsolete technology.',
    ],
    mergenthalerCaption: 'Ottmar Mergenthaler (1854–1899), the inventor of the Linotype machine',
    machineCaption: 'Linotype machine from the late 19th century',
    technicalHeading: 'Technical Aspects of the Linotype Typesetting Process',
    technicalSections: [
      {
        heading: 'Matrix Assembly',
        body: 'When a key was pressed, a brass matrix for that letter or character would fall into place in a composing stick. Each matrix contained the character form for a single font and size.',
      },
      {
        heading: 'Magazine',
        body: 'The magazine section is the part of the machine where the matrices are held when not in use, and released as the operator touches keys on the keyboard. It functioned as a flat box with vertical separators organizing characters by channel.',
      },
      {
        heading: 'Keyboard',
        body: 'By operating the keyboard, the matrices are fed into the composing stick. Upper and lower case letters each occupied separate keys on the Linotype keyboard.',
      },
      {
        heading: 'Molding',
        body: 'Molten metal, typically an alloy of lead, antimony, and tin, would be injected into the mold created by the assembled matrices.',
      },
      {
        heading: 'Casting Mechanism',
        body: "Once the metal solidified, it formed a solid line of type, known as a 'slug.' The casting section automatically processed completed lines through a series of cams and levers to produce these type slugs.",
      },
      {
        heading: 'Distribution Mechanism',
        body: 'After the typesetting line has been cast, the matrices are automatically returned to the correct place in the magazine. Metal lines were melted following printing completion.',
      },
    ],
  },
  de: {
    eyebrow: 'Blog',
    title: 'Die Linotype-Maschine',
    date: '7. Februar 2024',
    noComments: 'Keine Kommentare',
    backLabel: '← Zurück zum Blog',
    paragraphs: [
      'Die Linotype-Maschine war ein revolutionäres mechanisches Setzgerät, das in der Geschichte der Herstellung und der Veröffentlichung von Zeitungen, Zeitschriften und Büchern eine bedeutende Rolle spielte. Sie wurde von Ottmar Mergenthaler entwickelt und 1886 kommerziell eingeführt.',
      'Der Name der Maschine kommt von ihrer Fähigkeit, eine ganze Druckzeile (line of types) auf einmal zu produzieren.',
      'Sie stellte eine erhebliche Verbesserung gegenüber dem bisherigen Industriestandard des manuellen Setzens einzelner Buchstaben dar, der seit den Tagen Johannes Gutenbergs verwendet wurde.',
      'Die Linotype-Maschine ermöglichte ein wesentlich schnelleres Setzen als zuvor. Mit ihr konnten nun bis zu 6.000 Zeichen pro Stunde verarbeitet werden. Bei späteren Modellen waren durch den Einsatz der Lochstreifentechnik sogar bis zu 25.000 Zeichen pro Stunde möglich.',
      'Funktionsweise: Der Setzer gibt die Buchstaben über eine Tastatur ein. Die entsprechenden Matrizen werden dann automatisch aus dem Magazin der Maschine entnommen und zu einer Zeile angeordnet. Mit flüssigem Blei wird dann eine Druckzeile erzeugt, die in das Seitenraster eingesetzt wird. Nach Abschluss des Druckvorgangs werden die Druckzeilen wieder eingeschmolzen und die Matrizen in das Magazin zurückgelegt.',
      'Die Linotype-Maschine trat ihren Siegeszug um die Welt an und trug dazu bei, die ständig steigende Nachfrage nach Druckerzeugnissen zu befriedigen.',
      'Im Laufe der Zeit wurden die Linotype-Maschinen kontinuierlich verbessert, z. B. wurden zusätzliche Schriftarten und -größen eingeführt und neue Zeichensätze für den internationalen Gebrauch (Kyrillisch, Arabisch usw.) entwickelt.',
      'Das Ende der Linotype-Ära kam erst in den 1970er-Jahren, als der Fotosatz die inzwischen veraltete Technologie rasch ablöste.',
    ],
    mergenthalerCaption: 'Ottmar Mergenthaler (1854–1899), der Erfinder der Linotype-Maschine',
    machineCaption: 'Linotype-Maschine aus dem späten 19. Jahrhundert',
    technicalHeading: 'Technischer Ablauf des Linotype-Satzprozesses',
    technicalSections: [
      {
        heading: 'Matrizen und Satzstock',
        body: 'Wenn eine Taste gedrückt wird, fällt eine Messingmatrize für diesen Buchstaben oder dieses Zeichen in einen Setzstock. Die Matrizen sind kleine Metallplättchen, in die jeweils ein Buchstabe in einer bestimmten Schriftart und in einer bestimmten Schriftgröße eingeprägt ist.',
      },
      {
        heading: 'Magazin',
        body: 'Das Magazin ist ein flacher Kasten mit vertikalen Trennwänden, in denen die Matrizen lagern. Wenn die Tastatur bedient wird, fällt die entsprechende Matrize durch einen Kanal in den Satzstock. Es gibt verschiedene Magazine für Schriftart und -größe, die bei Bedarf eingelegt werden.',
      },
      {
        heading: 'Tastatur',
        body: 'Durch Bedienung der Tastatur werden die Matrizen in den Satzstock geleitet. Bei der Linotype-Tastatur haben Groß- und Kleinbuchstaben jeweils eigene Tasten.',
      },
      {
        heading: 'Zeilenguss',
        body: 'Geschmolzenes Metall, in der Regel eine Legierung aus Blei, Antimon und Zinn, wurde in die Form gespritzt, die durch die zusammengesetzten Matrizen entstanden ist.',
      },
      {
        heading: 'Druckseitenmontage',
        body: 'Sobald das Metall erstarrt ist, bildet es eine feste Schriftzeile. Die Metallzeilen werden dann zur fertigen Druckseite montiert.',
      },
      {
        heading: 'Rückführung der Matrizen',
        body: 'Nach dem Gießen der Satzzeile werden die Matrizen automatisch wieder an den jeweils richtigen Platz im Magazin befördert. Diese automatische Rückführung der Matrizen hatte es vor Einführung der Linotype-Maschine noch nicht gegeben. Die Metallzeilen werden nach dem Druck wieder eingeschmolzen.',
      },
    ],
  },
}
