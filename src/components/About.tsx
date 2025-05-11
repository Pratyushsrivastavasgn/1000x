import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 px-6 bg-gray-50"
    >
      <div className="container mx-auto max-w-5xl text-justify">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Welcome to Thousandx
            </h2>
            <p className="text-lg text-gray-600 mb-8 ">
            At Thousandx, we believe the most effective way to succeed in finance and accounting is to learn directly from seasoned professionals. Built by Chartered Accountants, our platform offers real mentorship, practical insights, and structured learning designed to help you reach your career goals..
            </p>
            <p className="text-lg text-gray-600">
            We deliver high-quality, industry-relevant education through free webinars and premium courses—perfect for finance professionals and students aspiring to build a future in the field. Our hands-on training in leading accounting software like Zoho Books, QuickBooks, Xero, Tally, and Busy empowers learners to stand out from the crowd, generate passive income, and grow as global professionals.
            </p>
            <p className="text-lg text-gray-600">
            We also host specialized workshops on trending and high-impact topics, led by experts who are masters in their domain—ensuring you stay updated and ahead in your profession.
            </p>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-gray-600">
              Our mission is to bridge the gap between academic knowledge and real-world skills by delivering high-quality training, expert-led webinars, and hands-on learning in accounting, taxation, and finance. We aim to equip individuals with the tools and confidence to excel in their careers and contribute meaningfully to the financial ecosystem.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-gray-600">
              To become the most trusted platform for empowering finance professionals and aspiring individuals through practical, future-ready learning that builds global careers.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;