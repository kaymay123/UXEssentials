import { Course } from '../types';

/**
 * Course data for all available courses
 */
export const courses: Course[] = [
  {
    id: 'ps-101',
    title: 'Photoshop for UI Designers',
    level: 'Beginner',
    instructor: 'Alex Nguyen',
    duration: '5 weeks · 15 lessons',
    format: 'Video lessons + practice files',
    skills: ['UI-ready layouts', 'Visual hierarchy', 'Exporting assets'],
    tool: 'Photoshop',
  },
  {
    id: 'ai-101',
    title: 'Illustrator for Icons & Branding',
    level: 'Beginner – Intermediate',
    instructor: 'Maya Lee',
    duration: '3 weeks · 10 lessons',
    format: 'Video lessons + projects',
    skills: ['Vector icons', 'Logo basics', 'Brand visuals'],
    tool: 'Illustrator',
  },
  {
    id: 'fi-101',
    title: 'Figma for Product Design',
    level: 'Intermediate',
    instructor: 'Daniel Park',
    duration: '5 weeks · 15 lessons',
    format: 'Video lessons + design system',
    skills: ['Wireframes', 'Prototyping', 'Components & variants'],
    tool: 'Figma',
  },
];

/**
 * Deep dive details for each course
 */
export interface CourseDeepDive {
  description: string;
  learn: string[];
  perfectFor: string[];
}

export const courseDeepDiveData: Record<string, CourseDeepDive> = {
  'ps-101': {
    description: "Photoshop is the industry standard for digital manipulation. In this course, we strip away the photo-editing complexity and focus purely on the tools UI designers use daily for creating rich, textured interfaces.",
    learn: [
      "Mastering layers, groups, and artboards for UI",
      "Non-destructive editing with Smart Objects",
      "Creating precise pixel-perfect grid systems",
      "Designing responsive layout mockups",
      "Advanced masking techniques for UI elements",
      "Optimizing and exporting assets for development"
    ],
    perfectFor: [
      "Graphic designers transitioning to UI",
      "Beginners wanting to learn industry tools",
      "Developers needing to edit design assets"
    ]
  },
  'ai-101': {
    description: "Vectors are scalable and essential for modern web design. Learn how to craft crisp icons, logos, and illustrations that look sharp on any screen size using Adobe Illustrator's powerful vector engine.",
    learn: [
      "Pen tool mastery for custom shapes",
      "Iconography principles and grid alignment",
      "Creating SVG assets for the web",
      "Typography manipulation for logos",
      "Color theory and palette management",
      "Building a reusable vector asset library"
    ],
    perfectFor: [
      "Designers wanting to create their own assets",
      "Brand identity enthusiasts",
      "Illustrators looking to digitize work"
    ]
  },
  'fi-101': {
    description: "Figma has taken the product design world by storm. This course covers the end-to-end workflow, from low-fidelity wireframing to high-fidelity clickable prototypes that behave like real apps.",
    learn: [
      "Setting up a scalable design system",
      "Using Auto Layout for responsive components",
      "Interactive prototyping with smart animate",
      "Team collaboration and developer handoff",
      "Component properties and variants",
      "Plugin workflows to speed up design"
    ],
    perfectFor: [
      "Aspiring Product Designers",
      "Teams moving from Sketch/XD to Figma",
      "Designers who want to work in tech"
    ]
  }
};

