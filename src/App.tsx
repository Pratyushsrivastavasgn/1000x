import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Feature from './components/Feature';
import OurCourses from './components/OurCourses';
import Mentors from './components/Mentors';
import Contact from './components/Contact';
import Footer from './components/Footer';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Refunds from './components/Refunds';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Feature />
                <OurCourses />
                <Mentors />
                <Contact />
              </>
            } />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refunds" element={<Refunds />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
