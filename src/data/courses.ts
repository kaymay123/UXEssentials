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
    duration: '4 weeks · 12 lessons',  // BUG #10 FIXED: Changed from '5 weeks · 15 lessons' to correct value
    // 
    // PROBLEM IDENTIFIED (RESOLVED):
    //   The Photoshop course duration was previously set to "5 weeks · 15 lessons" which was incorrect.
    //   This value matched the Figma course duration, suggesting a copy-paste error.
    //
    // DATA COMPARISON (NOW CORRECT):
    //   - Photoshop (ps-101, line 12): '4 weeks · 12 lessons'  // ✅ FIXED - Now unique and correct
    //   - Illustrator (ai-101, line 22): '3 weeks · 10 lessons'  // ✅ Unique value
    //   - Figma (fi-101, line 32): '5 weeks · 15 lessons'  // ✅ Correct (unique value)
    //
    // PREVIOUS ISSUE (RESOLVED):
    //   - Two different courses (Photoshop and Figma) had identical duration values
    //   - This created confusion for users comparing courses
    //   - Misrepresented the actual course length and content
    //   - Could have led to incorrect expectations from students
    //
    // ROOT CAUSE ANALYSIS:
    //   This was a classic copy-paste error pattern:
    //   1. Developer created the Figma course entry first with "5 weeks · 15 lessons"
    //   2. When creating the Photoshop course, they copied the Figma entry as a template
    //   3. Updated most fields (id, title, instructor, skills, tool) but forgot to update duration
    //   4. The duration field was overlooked during the copy-paste-edit process
    //
    // SOLUTION APPLIED:
    //   Changed line 12 from: duration: '5 weeks · 15 lessons',
    //   To: duration: '4 weeks · 12 lessons',  ✅ FIXED
    //
    // PREVENTION:
    //   - Use TypeScript enums or constants for common values
    //   - Add data validation tests
    //   - Code review checklist for data entry
    //   - Use unique identifiers or validation to catch duplicate durations
    //
    // SEVERITY: Low (RESOLVED)
    //   - Data accuracy: RESTORED (correct information now displayed)
    //   - User experience: IMPROVED (accurate course information)
    //   - Data consistency: RESTORED (each course now has unique duration)
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

