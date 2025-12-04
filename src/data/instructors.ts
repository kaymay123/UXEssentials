import { Instructor } from '../types';

/**
 * Instructor data for all course instructors
 */
export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Alex Nguyen',
    role: 'Senior UI Designer',
    tools: ['Photoshop', 'After Effects'],
    bio: 'Alex has 10+ years of experience designing interfaces for top fintech startups. He loves simplifying complex workflows.',
    image: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: '2',
    name: 'Maya Lee',
    role: 'Brand Identity Expert',
    tools: ['Illustrator', 'Indesign'],
    bio: 'Maya specializes in vector illustration and branding systems. She teaches you how to think in shapes and paths.',
    image: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: '3',
    name: 'Daniel Park',
    role: 'Product Design Lead',
    tools: ['Figma', 'Protopie'],
    bio: 'Daniel leads design systems at a major tech company. He is obsessed with component scalability and efficiency.',
    image: 'https://picsum.photos/200/200?random=3'
  }
];

