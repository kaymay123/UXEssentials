import React from 'react';
import { instructors } from '../../data/instructors';

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Learn from Designers in the Field</h2>
          <p className="mt-4 text-lg text-slate-600">Our instructors work at top companies and bring real-world experience to every lesson.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary-100"
              />
              <h3 className="text-xl font-bold text-slate-900">{instructor.name}</h3>
              <p className="text-primary-600 font-medium text-sm mb-3">{instructor.role}</p>
              
              <div className="flex gap-2 mb-4">
                {instructor.tools.map((tool, idx) => (
                  <span key={tool} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                    {instructor.tools[idx + 1] || tool}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                "{instructor.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;

