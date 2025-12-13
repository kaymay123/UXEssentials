import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../../data/faq';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-slate-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-slate-400" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}  // BUG #6 FIXED: Added missing closing parenthesis
          // 
          // STRUCTURE BREAKDOWN:
          // Line 18: {faqData.map((item, index) => (
          //   - '{' opens JSX expression
          //   - 'faqData.map(' opens map function call
          //   - '(item, index) => (' opens arrow function with parentheses for implicit return
          //   - The JSX element <div>...</div> follows
          // 
          // EXPECTED CLOSING STRUCTURE:
          //   - ')' closes the arrow function body parentheses (implicit return)
          //   - ')' closes the map function call
          //   - '}' closes the JSX expression
          //   Result: ))}}  ✅ FIXED
          //
          // PREVIOUS ISSUE (Line 38):
          //   - Had: )}  // MISSING ONE CLOSING PARENTHESIS
          //   - Now: ))}  // CORRECT - Two closing parentheses
          //
          // IMPACT (RESOLVED):
          //   - Syntax error has been fixed
          //   - TypeScript/JavaScript parser can now parse the JSX correctly
          //
          // ROOT CAUSE:
          //   When using arrow functions with implicit return in JSX, the parentheses
          //   structure is: map((params) => (jsx)) requiring two closing parens before the }
          //
          // FIX APPLIED:
          //   Changed line 38 from: )}  to: ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

