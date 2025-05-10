import React, { useState } from 'react';

interface Courses {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const Courses: Courses[] = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'Web Development',
      imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A comprehensive e-commerce solution with a focus on user experience and conversion optimization.'
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      category: 'UI/UX Design',
      imageUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'An intuitive dashboard for financial data visualization and analytics.'
    },
    {
      id: 3,
      title: 'Travel App',
      category: 'Mobile Design',
      imageUrl: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A mobile application for travelers to discover, plan, and book unique experiences.'
    },
    {
      id: 4,
      title: 'Corporate Identity',
      category: 'Branding',
      imageUrl: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete brand identity design for a technology startup, including logo, color palette, and guidelines.'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'Web Development',
      imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A web platform for real estate listings with advanced search capabilities and virtual tours.'
    },
    {
      id: 6,
      title: 'Health & Fitness App',
      category: 'Mobile Design',
      imageUrl: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A mobile application for fitness tracking, nutrition planning, and workout guidance.'
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Design', 'Branding'];
  
  const filteredCoursess = activeFilter === 'All' 
    ? Courses 
    : Courses.filter(Courses => Courses.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of digital Coursess across various industries and platforms.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2 md:space-y-0">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-sm tracking-wider transition-colors
                ${activeFilter === category 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoursess.map((Courses) => (
            <div 
              key={Courses.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={Courses.imageUrl} 
                  alt={Courses.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{Courses.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{Courses.title}</h3>
                <p className="text-gray-600 text-sm">{Courses.description}</p>
                <a 
                  href="#" 
                  className="inline-block mt-4 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;