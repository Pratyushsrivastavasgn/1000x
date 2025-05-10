import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Empowering Finance Professionals & Aspiring Youth with Practical Skills

            </h1>
            <p className="text-lg text-gray-600 md:max-w-md">
            Learn directly from experienced CAs and industry experts. Master accounting software, stay updated on finance trends, and become job-ready with real-world training.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-black text-white 
                  hover:bg-gray-800 transition-colors duration-300
                  text-sm uppercase tracking-wider font-medium"
              >
                Explore Courses!
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto order-1 md:order-2">
            <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
            <div className="absolute inset-8 bg-gray-200 rounded-full 
              transform transition-transform duration-700 hover:scale-105"></div>
            <div className="absolute inset-16 bg-gray-300 rounded-full
              transform transition-transform duration-700 hover:scale-105 delay-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;