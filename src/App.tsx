import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import CourseOverview from './components/sections/CourseOverview';
import CourseDeepDive from './components/sections/CourseDeepDive';
import HowItWorks from './components/sections/HowItWorks';
import Instructors from './components/sections/Instructors';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CourseOverview />
        <CourseDeepDive />
        <HowItWorks />
        <Instructors />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;

