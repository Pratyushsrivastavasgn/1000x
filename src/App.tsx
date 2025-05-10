import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Feature from './components/Feature'; 
import OurCourses from './components/OurCourses';
import Mentors from './components/Mentors'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Feature />
        <OurCourses />
        <Mentors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
