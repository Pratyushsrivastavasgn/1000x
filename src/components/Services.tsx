import React from 'react';
import { Paintbrush, Code, Globe, Smartphone, LineChart, Clock } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Webinars & Masterclass',
      description: 'Stay ahead with free and premium sessions led by practicing professionals.',
      icon: <Paintbrush size={32} />
    },
    {
      title: 'Software Training',
      description: 'Practical training on Zoho Books, QuickBooks, Xero, Tally, and Busy.',
      icon: <Code size={32} />
    },
    {
      title: 'Job-Ready Courses',
      description: 'Skill-building programs for youth and career switchers.',
      icon: <Globe size={32} />
    },
    {
      title: 'Global Career Support',
      description: 'Learn how to earn online, build passive income, and work with international clients.',
      icon: <Smartphone size={32} />
    },
    {
      title: 'Mentorship by Experts',
      description: 'Learn from professionals who’ve walked the path you’re on.',
      icon: <LineChart size={32} />
    },
    {
      title: 'Certification',
      description: 'Get certified and showcase your practical knowledge with confidence.',
      icon: <Clock size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn from Experts. Grow with Confidence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;