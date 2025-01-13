// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/layouts/Navigation';
import Hero from './components/home/Hero';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Research from './components/research/Research';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <ThemeProvider defaultDark>
      {/* Remove any width constraints from the main container */}
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
        <Navigation />
        
        {/* Make the hero section full-width */}
        <section id="home" className="w-full min-h-screen">
          <Hero />
        </section>
        
        {/* Wrap other sections in a max-width container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="education">
            <div className="section-gradient" />
            <div className="section-wrapper">
              <Education />
            </div>
          </section>
          
          <section id="experience">
            <div className="section-gradient" />
            <div className="section-wrapper">
              <Experience />
            </div>
          </section>
          
          <section id="projects">
            <div className="section-gradient" />
            <div className="section-wrapper">
              <Projects />
            </div>
          </section>
          
          <section id="research">
            <div className="section-gradient" />
            <div className="section-wrapper">
              <Research />
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;