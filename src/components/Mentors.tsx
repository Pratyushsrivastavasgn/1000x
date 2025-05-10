import React from 'react';

interface Mentors {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const Mentors: React.FC = () => {
  const mentors: Mentors[] = [
    {
      id: 1,
      name: 'CA Manoj Mangal',
      role: 'Strategic Mentor & Advisor',
      imageUrl:'/assets/images/Manoj.jpg',
      bio: 'CA Manoj Mangal is a highly respected Chartered Accountant with 25 years of experience in professional practice, recognized for his dynamic personality, sharp communication skills, and deep domain knowledge across all major areas of the CA profession.'
    },
    {
      id: 2,
      name: 'CA Pawan Agarwal',
      role: 'Advisor & Mentor',
      imageUrl: '/assets/images/pawan.jpg',
      bio: 'CA Pawan Agarwal brings over 25 years of rich experience in practice as a Chartered Accountant, with deep-rooted expertise in Income Tax, Internal Audits, Funding Solutions, and the Stock Market. Known for his practical insights and sharp financial acumen, he has been a trusted advisor to businesses across industries.'
    },
    {
      id: 3,
      name: 'Mrs. Shweta Mangal',
      role: 'Director',
      imageUrl: '/assets/images/shweta.jpg',
      bio: 'Mrs. Shweta Mangal is a dynamic entrepreneur with a strong background in Commerce and a passion for professional development. She co-founded Thousandx with a mission to enable individuals and enterprises to realize their true potential. Before Thousandx, she led a successful venture offering career-focused training in Accountancy and Taxation, which deepened her insight into the evolving needs of finance professionals and students. Through Thousandx, she aims to bridge critical gaps in access to funding, government schemes, and essential industry linkages—empowering the next generation of Chartered Accountants, Company Secretaries, MBAs, and other financial experts.'
    },
    {
      id: 4,
      name: 'Mrs. Arti Agarwal',
      role: 'Director',
      imageUrl: '/assets/images/Arti.jpg',
      bio: 'Mrs. Arti Agarwal is a seasoned entrepreneur with a strong background in commerce and years of experience in skill development and training. She has successfully led a reputed center in Bareilly, offering career-focused courses in Accountancy, Taxation, and Computers. Known for her commitment to student success, she co-founded Thousandx to extend her vision of empowering aspiring professionals with practical, industry-relevant knowledge.'
    }
    
  ];

  return (
    <section id="mentors" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mentors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented mentors behind our exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id} 
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-48 h-48">
                <img 
                  src={mentor.imageUrl} 
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-gray-500 mb-3">{mentor.role}</p>
              <p className="text-gray-600 text-sm">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
