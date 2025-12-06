import React from 'react';
import Button from '../ui/Button';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-slate-600">Invest in your skills today. No monthly subscriptions.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-2xl p-8 ${
                plan.isPopular 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 border-none z-10' 
                  : 'bg-white border border-slate-200 text-slate-900 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
                  Best Value
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span className={`ml-2 text-sm font-medium ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>/one-time</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check size={20} className={`mr-3 flex-shrink-0 ${plan.isPopular ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                fullWidth 
                className={plan.isPopular ? 'bg-primary-600 hover:bg-primary-500' : ''}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

