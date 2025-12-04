import React from 'react';
import Button from '../ui/Button';
import { PlayCircle, ArrowRight, Layers, PenTool, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wide uppercase mb-6">
              New Courses Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Master Essential <span className="text-primary-600">UI/UX Tools</span> and Start Designing Confidently
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Learn Adobe Photoshop, Illustrator, and Figma from scratch. Gain the technical skills you need to bring your creative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" className="gap-2">
                Browse Courses <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg" className="gap-2">
                <PlayCircle size={20} /> Try a Free Lesson
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
               <a href="#details-fi-101" className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-primary-200 hover:scale-105 transition-all duration-200 cursor-pointer">
                 <div className="w-6 h-6 bg-[#31A8FF] rounded flex items-center justify-center text-white text-[10px] font-bold shadow-sm">Ps</div> 
                 <span className="text-sm font-medium text-slate-600 group-hover:text-[#31A8FF] transition-colors">Photoshop</span>
               </a>
               <a href="#course-illustrator" className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-primary-200 hover:scale-105 transition-all duration-200 cursor-pointer">
                 <div className="w-6 h-6 bg-[#FF9A00] rounded flex items-center justify-center text-white text-[10px] font-bold shadow-sm">Ai</div> 
                 <span className="text-sm font-medium text-slate-600 group-hover:text-[#FF9A00] transition-colors">Illustrator</span>
               </a>
               <a href="#course-figma" className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-primary-200 hover:scale-105 transition-all duration-200 cursor-pointer">
                 <div className="w-6 h-6 bg-[#F24E1E] rounded flex items-center justify-center text-white text-[10px] font-bold shadow-sm">Fi</div> 
                 <span className="text-sm font-medium text-slate-600 group-hover:text-[#F24E1E] transition-colors">Figma</span>
               </a>
            </div>
          </div>

          {/* Right Content / Illustration */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none perspective-1000">
            <div className="relative rounded-2xl shadow-2xl bg-gradient-to-br from-white to-slate-50 p-6 border border-slate-100 overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-primary-900/10">
               {/* Abstract UI Mockup */}
               <div className="flex gap-4 mb-6">
                 <div className="w-1/4 h-32 bg-slate-100/80 rounded-lg animate-pulse"></div>
                 <div className="w-3/4 h-32 bg-primary-50/50 rounded-lg border-2 border-dashed border-primary-200 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-primary-400 text-sm font-medium">Wireframe Area</span>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                 <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                 <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-50">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className={`w-9 h-9 rounded-full border-2 border-white bg-slate-200 shadow-sm z-${i*10} flex items-center justify-center overflow-hidden`}>
                            <div className="w-full h-full bg-gradient-to-tr from-slate-200 to-slate-100"></div>
                        </div>
                      ))}
                    </div>
                    <div className="w-28 h-9 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg shadow-lg shadow-primary-500/30"></div>
                 </div>
               </div>

               {/* Floating Icons with animation */}
               <div className="absolute top-12 right-8 p-3 bg-white shadow-xl rounded-2xl border border-slate-50 rotate-12 transition-transform hover:rotate-6 hover:scale-110 duration-300">
                  <PenTool className="text-pink-500 drop-shadow-sm" size={24} />
               </div>
               <div className="absolute bottom-24 left-8 p-3 bg-white shadow-xl rounded-2xl border border-slate-50 -rotate-6 transition-transform hover:rotate-0 hover:scale-110 duration-300">
                  <Layers className="text-indigo-500 drop-shadow-sm" size={24} />
               </div>
               <div className="absolute bottom-6 right-20 p-3 bg-white shadow-xl rounded-2xl border border-slate-50 rotate-3 transition-transform hover:-rotate-3 hover:scale-110 duration-300">
                  <MousePointer2 className="text-green-500 drop-shadow-sm" size={24} />
               </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -z-10 bottom-0 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

