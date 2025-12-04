import React from 'react';
import Button from '../ui/Button';
import { courses } from '../../data/courses';
import { Clock, Video, CheckCircle2 } from 'lucide-react';

const CourseOverview: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Choose Your Essential UI/UX Track</h2>
          <p className="mt-4 text-lg text-slate-600">Start with the basics or jump into advanced prototyping. Our targeted courses get you up to speed fast.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className={`h-2 w-full ${
                course.tool === 'Photoshop' ? 'bg-[#31A8FF]' : 
                course.tool === 'Illustrator' ? 'bg-[#FF9A00]' : 'bg-[#F24E1E]'
              }`} />
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                   <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wide">
                     {course.level}
                   </span>
                   <span className="text-xs font-medium text-slate-500">{course.tool}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-6">Instructor: {course.instructor}</p>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock size={16} className="mr-2 text-slate-400" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Video size={16} className="mr-2 text-slate-400" />
                    {course.format}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Skills Gained</h4>
                  <ul className="space-y-2 mb-6">
                    {course.skills.map(skill => (
                      <li key={skill} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 size={16} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" fullWidth onClick={() => {
                     const el = document.getElementById(`details-${course.id}`);
                     el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>
                    View Course Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

