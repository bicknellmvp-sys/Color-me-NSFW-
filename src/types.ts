export interface Exhibit {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  category: 'Domination' | 'Restraint' | 'Esoteric' | 'Portrait' | 'High Difficulty';
  difficulty: 'Novice' | 'High' | 'Master' | 'Ritual';
  imageUrl: string;
  svgPath?: string; // Vector representation for digital coloring studio
  lineArtPaths?: Array<{ id: string; d: string; label: string; defaultColor?: string }>;
  description: string;
  isNsfw: boolean;
  featured?: boolean;
  size?: 'large' | 'medium' | 'small';
}

export interface SigilConfig {
  opacity: number; // 0 to 0.5
  rotationSpeed: number; // 0 = off, 1 = slow, 2 = medium, 3 = fast
  colorTint: 'silver' | 'crimson' | 'gold' | 'cyan';
  blendMode: 'lighten' | 'screen' | 'normal' | 'overlay';
  scale: number; // 0.8 to 1.5
  isPulsing: boolean;
}

export type ActiveTab = 'gallery' | 'studio' | 'about' | 'manifesto' | 'upcoming' | 'whatnot';

export interface WaitlistSubmission {
  email: string;
  ritualAccepted: boolean;
}

export interface SupportTier {
  id: string;
  name: string;
  price: string;
  description: string;
  perks: string[];
  popular?: boolean;
}
