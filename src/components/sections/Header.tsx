import React, { useState, useEffect } from 'react';
import { Menu, X, Layout } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },  // BUG #7 FIXED: Changed from '#faqs' to '#faq' to match section ID
  ];
  // 
  // PROBLEM IDENTIFIED (RESOLVED):
  //   The FAQ navigation link was previously using '#faqs' (plural) but the actual section ID is '#faq' (singular).
  //   This mismatch prevented the navigation link from correctly scrolling to the FAQ section.
  //
  // ID MISMATCH (RESOLVED):
  //   - Navigation link (line 23): href: '#faq'  // ✅ FIXED - now matches section ID
  //   - Actual section ID (FAQ.tsx line 13): id="faq"  // ✅ CORRECT - singular
  //
  // PREVIOUS FUNCTIONAL IMPACT (RESOLVED):
  //   - Clicking "FAQ" in navigation now correctly scrolls to the FAQ section
  //   - Browser can now find the element with id="faq"
  //   - User experience is restored - navigation link works as expected
  //   - Works in both desktop and mobile navigation (both use navLinks array)
  //
  // HOW ANCHOR LINKS WORK:
  //   - Browser looks for an element with matching id attribute
  //   - #faq now correctly finds <section id="faq">
  //   - Navigation now works as expected
  //
  // ROOT CAUSE:
  //   This was a simple typo/inconsistency error:
  //   - Developer added an 's' by mistake when creating the navigation link
  //   - Inconsistent with naming convention (other links match their section IDs exactly)
  //   - Could be copy-paste error or oversight during development
  //   - No validation to catch ID mismatches between navigation and sections
  //
  // NAMING CONSISTENCY CHECK (NOW CORRECT):
  //   - Courses: href: '#courses' → id="courses" ✅
  //   - How It Works: href: '#how-it-works' → id="how-it-works" ✅
  //   - Instructors: href: '#instructors' → id="instructors" ✅
  //   - Pricing: href: '#pricing' → id="pricing" ✅
  //   - FAQ: href: '#faq' → id="faq" ✅ FIXED - Now matches
  //
  // SOLUTION APPLIED:
  //   Changed line 23 from: { name: 'FAQ', href: '#faqs' },
  //   To: { name: 'FAQ', href: '#faq' },  ✅ FIXED
  //
  // PREVENTION:
  //   - Use constants for section IDs shared between components
  //   - Add automated tests to verify navigation links match section IDs
  //   - Code review checklist for anchor link consistency
  //   - TypeScript types for navigation links with validation
  //
  // SEVERITY: Low (RESOLVED)
  //   - Functional impact: RESTORED (navigation link now works)
  //   - User experience: FIXED (users can navigate to FAQ section)
  //   - All navigation links now correctly match their section IDs

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' 
          : 'bg-gray-50 border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Layout size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">UX Essentials</span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">Learn UI/UX From Scratch</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-700 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full left-0 top-16">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="secondary" fullWidth onClick={() => setIsMenuOpen(false)}>Log In</Button>
              <Button variant="primary" fullWidth onClick={() => setIsMenuOpen(false)}>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

