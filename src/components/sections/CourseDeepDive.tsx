import React from 'react';
import Button from '../ui/Button';
import { courses, courseDeepDiveData } from '../../data/courses';
import { Check, User, Clock, BarChart } from 'lucide-react';

const CourseDeepDive: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {courses.map((course, index) => {
          const details = courseDeepDiveData[course.id];
          const isEven = index % 2 === 0;
          
          return (
            <div key={course.id} id={`details-${course.id}`} className={`flex flex-col lg:flex-row gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Detailed Text Content */}
              <div className="flex-1">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${
                   course.tool === 'Photoshop' ? 'bg-[#31A8FF]/10 text-[#31A8FF]' : 
                   course.tool === 'Illustrator' ? 'bg-[#FF9A00]/10 text-[#FF9A00]' : 'bg-[#F24E1E]/10 text-[#F24E1E]'
                }`}>
                  {course.tool} Track
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {details?.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">What you'll learn</h4>
                    <ul className="space-y-2">
                      {/* BUG #4: Missing optional chaining - if details is undefined, this will crash with "Cannot read property 'learn' of undefined".
                           Should be: {details?.learn?.map((item, i) => (...))} */}
                      {details.learn.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                          <Check size={16} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">Perfect for you if...</h4>
                    <ul className="space-y-2">
                      {/* BUG #4: Missing optional chaining - if details is undefined, this will crash with "Cannot read property 'perfectFor' of undefined".
                           Should be: {details?.perfectFor?.map((item, i) => (...))} */}
                      {details.perfectFor.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                           <span className="w-1.5 h-1.5 rounded-full bg-primary-300 mr-2 mt-1.5 flex-shrink-0"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button size="lg">Enroll Now</Button>
              </div>

              {/* Stats Card */}
              <div className="w-full lg:w-1/3">
                 <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 sticky top-24">
                    <h4 className="font-bold text-slate-900 text-lg mb-6 border-b border-slate-100 pb-4">Course Snapshot</h4>
                    <div className="space-y-5">
                       <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 mr-4">
                             <User size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-slate-500 uppercase font-semibold">Instructor</p>
                             <p className="text-slate-900 font-medium">{course.instructor}</p>
                          </div>
                       </div>
                       <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 mr-4">
                             <Clock size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-slate-500 uppercase font-semibold">Length</p>
                             <p className="text-slate-900 font-medium">{course.duration}</p>
                          </div>
                       </div>
                       <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 mr-4">
                             <BarChart size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-slate-500 uppercase font-semibold">Difficulty</p>
                             <p className="text-slate-900 font-medium">{course.level}</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseDeepDive;

