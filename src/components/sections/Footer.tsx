import React from 'react';
import { Layout, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-slate-700 text-white p-1.5 rounded-lg">
              <Layout size={20} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">UX Essentials</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Courses</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-white">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-500">
          <p>© UX Essentials, 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

