export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: 'Core Focus' | 'Developing' | 'Practice Ready';
  icon: string;
  deliverables: string[];
  toolsUsed: string[];
  enabled?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Administration' | 'Tools & Software' | 'Communication & Research';
  description: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Scheduling' | 'Data & Systems' | 'Documentation';
  badgeLabel: 'Practice Project' | 'Sample Work';
  shortDescription: string;
  fullDescription: string;
  image: string;
  objectives: string[];
  keyFeatures: string[];
  toolsUsed: string[];
  previewType: 'calendar' | 'spreadsheet' | 'document';
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  headline: string;
  shortIntro: string;
  aboutText: string;
  email: string;
  linkedInUrl: string;
  whatsAppNumber: string;
  isWhatsAppActive: boolean;
  location: string;
  availability: string;
}
