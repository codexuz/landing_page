import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ResultsCarousel from './components/ResultsCarousel';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Premium dark-first theme selector
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="app-wrapper">
      {/* Premium Sticky Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        {/* Animated Hero section */}
        <Hero />

        {/* Dynamic Achievements & Partners scrolling ticker */}
        <Stats />

        {/* Filterable Courses Grid (Kids English, General English, IELTS, CEFR, Matematika, SAT, Rus tili, Dasturlash) */}
        <Courses />

        {/* Achievements Slider showcasing IELTS & CEFR Student Results */}
        <ResultsCarousel />

        {/* Professional Teachers Faculty grid */}
        <Teachers />

        {/* Lead Capture form with active formatting and custom success states */}
        <BookingForm />

        {/* Locally-focused accordions for questions */}
        <FAQ />
      </main>

      {/* Styled Interactive Footer & HQ radar map tracker */}
      <Footer />
    </div>
  );
}
