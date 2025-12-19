
import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <AboutMe />
      <Services />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
