import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = ['About', 'Features', 'Courses', 'Mentors', 'Contact'];
  
  const legalLinks = [
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Terms & Conditions', link: '/terms-and-conditions' },
    { label: 'Refunds', link: '/refunds' }
  ];

  return (
    <footer className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">ThousandX</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Empowering Finance Professionals & Aspiring Youth with Practical Skills
            </p>
            <p className="text-gray-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href={`#${service.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map(({ label, link }) => (
                <li key={label}>
                  <Link
                    to={link}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
