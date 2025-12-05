import React from 'react';
import { MousePointerClick, PlaySquare, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-primary-600" />,
      title: "Pick your course",
      description: "Select a specialized track for Photoshop, Illustrator, or Figma based on your career goals."
    },
    {
      icon: <PlaySquare className="w-8 h-8 text-primary-600" />,
      title: "Learn with guided lessons",
      description: "Follow along with expert instructors through step-by-step video tutorials and exercises."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Build a portfolio project",
      description: "Apply what you've learned to create real-world design assets for your professional portfolio."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-lg text-slate-600">Three simple steps to upgrading your design toolkit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 transform -translate-y-1/2 scale-x-75"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary-100 group-hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                   {steps[index].icon}  // BUG #11 ANALYSIS: Redundant array access
                </div>
              </div>
          // 
          // PROBLEM IDENTIFIED:
          //   Line 39 uses steps[index].icon instead of step.icon, which is redundant and inefficient.
          //   The map callback already provides the 'step' variable, making the array access unnecessary.
          //
          // CURRENT CODE ISSUE:
          //   - Line 35: steps.map((step, index) => (
          //   - Line 39: {steps[index].icon}  // ❌ Redundant array access
          //   - Line 42: {step.title}  // ✅ Correctly uses step variable
          //   - Line 43: {step.description}  // ✅ Correctly uses step variable
          //
          // INCONSISTENCY:
          //   The code inconsistently uses both patterns:
          //   - Uses steps[index].icon (redundant)
          //   - Uses step.title and step.description (correct)
          //   This suggests the developer didn't fully understand the map callback or
          //   copied code from different sources without consistency.
          //
          // PERFORMANCE IMPACT:
          //   - steps[index] requires an array lookup operation
          //   - step is already available in the callback scope
          //   - While the performance difference is negligible for small arrays,
          //     it's still unnecessary overhead and poor practice
          //
          // CODE QUALITY ISSUES:
          //   1. Redundant array access when variable is already available
          //   2. Inconsistent code style (mixing array access and direct variable use)
          //   3. Suggests misunderstanding of how map() callback works
          //   4. Makes code less readable and maintainable
          //
          // ROOT CAUSE:
          //   Developer likely didn't fully understand that the map callback's first parameter
          //   (step) already contains the current array element. They may have:
          //   - Learned array access patterns first and defaulted to steps[index]
          //   - Copied code from a different context where index was needed
          //   - Not realized that step.icon is equivalent to steps[index].icon
          //
          // RECOMMENDED SOLUTION:
          //   Change line 39 from: {steps[index].icon}
          //   To: {step.icon}
          //
          // BENEFITS OF FIXING:
          //   - More efficient (no array lookup needed)
          //   - Consistent code style (matches step.title and step.description)
          //   - Better demonstrates understanding of map() callback
          //   - Cleaner, more readable code
          //   - Follows React/JavaScript best practices
          //
          // SEVERITY: Low
          //   - Code still works correctly (no functional bug)
          //   - Performance impact is minimal for small arrays
          //   - Primarily a code quality and maintainability issue
          //   - Indicates developer may need better understanding of array methods
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

