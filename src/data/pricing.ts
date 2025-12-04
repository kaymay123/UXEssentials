import { PricingPlan } from '../types';

/**
 * Pricing plan data
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: 'single',
    name: 'Single Course',
    price: '$79',
    features: [
      'Access to 1 Full Course',
      'Lifetime Access',
      'Project Files included',
      'Email Support',
      'Certificate of Completion'
    ],
    isPopular: false
  },
  {
    id: 'bundle',
    name: 'All-Access Bundle',
    price: '$199',
    features: [
      'Access to All 3 Courses',
      'Lifetime Access',
      'All Project Files & Assets',
      'Priority Support',
      '3 Certificates of Completion',
      'Bonus: Portfolio Review'
    ],
    isPopular: true
  }
];

