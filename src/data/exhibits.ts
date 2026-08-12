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
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLuU8xF7mgPoKolDCK9kHq-F-hcq5I__xUAmUMeU8UtAHC4DwU8xpFrj_iEQL7wYm6Fzt9cUrDzPXWaRl_hIKXaDezGAkCoksv1lpx5jfsKgLd_rKopyB6pSPTeOCDOC0HgrYEwlhpFFQjW_umCKPyIos-Ew22cE5itk_fFQ6Y9_9cuuRdLfesSZg1DFnjy4nYUnwSwkiIez6_kwGiZxR_5a5lQGe8PWD62K9gJOWNTiYwp5hDYxTQc1PkU',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsDGUDCQODZxLNPurd-_aJx_uyIIIQYNG1X3dZNqJXbD-HFMxUHgYx0SJ-C9Gjg6TBcvuVgAnlTUwN73yuynpsVFXu_hukDPykxaogIFpqmNw5IFplhp4VeAdYeJuRlleIN-SRZidF8q5GCS9X_YcVHIMcsTxfZIobp8SnukVOV8LgfdcZr9_8UtTVkBNswi8t4wPbWsZ6EnN3dRDLNXu98Lo62YvB1-N_2Tgkq6rctk_waGoplh9r6uQ',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsKSTb0uD87F-tQDAWDW66Bdxd2CcJ3wWSjjbDgZBDrxNomGotmBJ-5BREt5fArPccKBzjxAiPzqyyW2vTM2Z_wBK6zpkQ5CR234k3fb1RKXshUTkGoyjbCktVLm3k33vVhjoJS-LXO2SSEWwpHvUmomUfwOBAqHwLPnUx5rEoVCvgH0M5YVgK1hRU5h0qVtPW9iq868VXErPm0Pp8VW2WqEx056_u1OrF8NdlSqvwwx1UeFblW71sJHyg',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLt9AGoQ9qhXHhQ-5V6Z8VDUVcNYvA_Z8i7ri4nLQ2Tg5UGhdIanp8u8TtsjHmtbA6OND24uvGQ5abGuQwr2TfuAhHj7I1iM5HbliAbztrjdgFwLA246AixTos2z2ow5bBD9vvWgIlcAnKz2PfB-RfkDvT1wzRb7-H9mixLGojRH8vLfew4O2ixCVra0N8qjEre3T1EzYDg-CBdIFCIUrAs2z-v3ftyrnyZBaKbJDbv2rd72bQWD3NRdSw',
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
    imageUrl: creatorPortrait,
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
