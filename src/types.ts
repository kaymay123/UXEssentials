export interface Course {
  id: string;
  title: string;
  level: string;
  instructor: string;
  duration: string;
  format: string;
  skills: string[];
  description?: string;
  audience?: string[];
  tool: 'Photoshop' | 'Illustrator' | 'Figma';
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  tools: string[];
  bio: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

