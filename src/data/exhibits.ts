import { Exhibit, SupportTier } from '../types';
import creatorPortrait from '../assets/images/creator_portrait_1786524998826.jpg';

export const EXHIBITS_DATA: Exhibit[] = [
  {
    id: 'exh-01',
    code: 'EXH. 01 / DOMINATION',
    title: 'The Sovereign Throne',
    subtitle: 'High difficulty line art showing intense editorial action & restraint',
    category: 'Domination',
    difficulty: 'Master',
    imageUrl: '/pages/exh-01.jpg',
    description: 'A study in power, posture, and geometric tension. Over 1,200 individual contour lines engineered for extreme precision coloring.',
    isNsfw: true,
    featured: true,
    size: 'large',
    lineArtPaths: [
      { id: 'path-1', d: 'M 100,100 L 300,100 L 300,300 L 100,300 Z', label: 'Outer Frame' },
      { id: 'path-2', d: 'M 150,150 L 250,150 L 250,250 L 150,250 Z', label: 'Crown Sigil' },
      { id: 'path-3', d: 'M 200,100 L 200,300 M 100,200 L 300,200', label: 'Altar Axis' }
    ]
  },
  {
    id: 'exh-02',
    code: 'EXH. 02 / RESTRAINT',
    title: 'Velvet Bindings',
    subtitle: 'Intricate ropework & high-contrast editorial symmetry',
    category: 'Restraint',
    difficulty: 'High',
    imageUrl: '/pages/exh-02.jpg',
    description: 'Continuous line drawing exploring tension, suspension, and negative space. Designed with layered line depths.',
    isNsfw: true,
    featured: true,
    size: 'medium'
  },
  {
    id: 'exh-03',
    code: 'EXH. 03 / BASEMENT',
    title: 'Basement Protocol',
    subtitle: 'Brutalist portrait series with high-contrast shadows',
    category: 'Portrait',
    difficulty: 'Ritual',
    imageUrl: '/pages/exh-03.jpg',
    description: 'Atmospheric monochrome line composition derived from underground performance art and nocturnal rituals.',
    isNsfw: true,
    featured: true,
    size: 'medium'
  },
  {
    id: 'exh-04',
    code: 'EXH. 04 / SOLOMONIC',
    title: 'First Rule: The Bound Demon',
    subtitle: 'Esoteric demonology & classical line etching',
    category: 'Esoteric',
    difficulty: 'Ritual',
    imageUrl: '/pages/exh-04.jpg',
    description: 'An homage to 17th-century grimoires merged with modern graphic novel line weight. Features the iconic FIRST RULE header.',
    isNsfw: false,
    featured: false,
    size: 'large'
  },
  {
    id: 'exh-05',
    code: 'EXH. 05 / ARCHITECT',
    title: 'The Forbidden Veil',
    subtitle: 'Editorial creator portrait & shadow geometry',
    category: 'Portrait',
    difficulty: 'High',
    imageUrl: '/pages/exh-05.jpg',
    description: 'Editorial line art portrait of the creator wearing the iconic cap and chain, juxtaposing modern street fashion with occult iconography.',
    isNsfw: false,
    featured: false,
    size: 'medium'
  }
];

export const SUPPORT_TIERS: SupportTier[] = [
  {
    id: 'initiate',
    name: 'Secret Initiate',
    price: '$5 / mo',
    description: 'Access to monthly digital line art downloads and high-resolution PDF archives.',
    perks: [
      'Digital download access to all released exhibits',
      'High-res vector printable PDFs (Vector 300 DPI)',
      'Community Discord access & Sigil role'
    ]
  },
  {
    id: 'high-priest',
    name: 'High Priest',
    price: '$15 / mo',
    description: 'Full unblurred gallery access, physical prints, and priority coloring studio tools.',
    perks: [
      'All Secret Initiate perks',
      '1x Physical heavy-stock limited line art print mailed monthly',
      'Unblurred permanent gallery streaming mode',
      'Early access to "Slave a Demon" chapter drops'
    ],
    popular: true
  },
  {
    id: 'grand-master',
    name: 'Grand Master',
    price: '$50 / mo',
    description: 'Exclusive custom line art commission request & signed collector ritual hardcover.',
    perks: [
      'All High Priest perks',
      'Custom 1-on-1 line art commission request from The Architect',
      'Signed physical copy of every printed coloring book release',
      'Name credited in the official grimoire ledger'
    ]
  }
];

export const MANIFESTO_TEXT = `
# THE ARCHITECT MANIFESTO

### I. REJECTION OF THE SOFT
Adult coloring books have been diluted into therapy tools for gentle minds—mandalas, floral patterns, and playful fauna. We reject this sentimentality. We believe that true meditation requires tension. It requires focus so sharp that the external world fades into monochrome static.

### II. THE SURGICAL LINE
Each piece in COLOR ME NSFW is drafted with unrelenting architectural logic. There are no safe spaces on these pages; only razor-thin boundaries between ink and void. You do not merely color these pages—you perform a ritual of precision.

### III. THE PROVOCATIVE AS SACRED
We bridge high-fashion editorial styling with classical demonology and visceral human emotion. Bound figures, esoteric sigils, and shadow protocols are rendered with dignity, complexity, and unapologetic intensity.

### IV. THE INK & THE LEDGER
Color is an act of reclamation. When you apply pigment to our dark archives, you complete the artwork. You decide what stays in the shadows and what is brought into the light.

— The Architect, COLOR ME NSFW
`;
