import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link: string;
}

interface Webinar {
  id: number;
  title: string;
  type: 'Free' | 'Paid';
  imageUrl: string;
  description: string;
  link: string;
}

const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [webinarFilter, setWebinarFilter] = useState<'Free' | 'Paid'>('Free');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Master zoho books in 3 days.',
      category: 'Accounting',
      imageUrl: '/assets/images/zoho.jpg',
      description: 'A comprehensive e-commerce solution with a focus on user experience and conversion optimization.\n Date: 23th to 24th May 2025 \n Time: 8 AM to 10 AM\n Fee: 6000',
      link: 'https://payments.cashfree.com/forms/zohomay'
    },
    {
      id: 2,
      title: 'Coming Soon',
      category: 'Taxation',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming Soon',
      link: '#'
    },
    {
      id: 3,
      title: 'Coming Soon',
      category: 'Entrepreneurship',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming Soon',
      link: '/assets/images/comingsoon.png'
    },
    {
      id: 4,
      title: 'Coming Soon',
      category: 'Branding',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming Soon.',
      link: '/assets/images/comingsoon.png'
    },
    {
      id: 5,
      title: 'Coming soon',
      category: 'Investments',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming soon.',
      link: '/courses/real-estate-platform'
    },
    {
      id: 6,
      title: 'Coming Soon',
      category: 'Technology',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming Soon',
      link: '/courses/fitness-app'
    } 
  ];

  const webinars: Webinar[] = [
     {
      id: 1,
      title: ' Automation using AI in Excel',
      type: 'Free',
      imageUrl: 'assets/images/Webinars/2.jpg',
      description: 'Discover how AI-driven features in Excel can automate complex calculations, forecasting, and reporting. Enhance your productivity with smart functions and real-time insights.',
      link: 'https://youtube.com/live/kx7Xy3ijS9U?feature=share'
    },
    {
      id: 2,
      title: 'Coming Soon',
      type: 'Paid',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming Soon.',
      link: '#'
    },
    {
      id: 3,
      title: 'Healthy Living made Simple - A Lifestyle Workshop',
      type: 'Free',
      imageUrl: 'assets/images/Webinars/4.jpg',
      description: 'Join us for a practical session focused on balancing professional demands with personal wellness. Learn simple habits for physical and mental health tailored for busy professionals.',
      link: ' https://youtu.be/1zuFq2z6Kbg '
    },
    {
      id: 4,
      title: 'Coming soon',
      type: 'Paid',
      imageUrl: 'https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1',
      description: 'Coming Soon.',
      link: '#'

    },
    {
      id: 5,
      title: 'Banning of Unregulated lending Activities',
      type: 'Free',
      imageUrl: 'assets/images/Webinars/3.jpg',
      description: 'Understand the legal and financial implications of unregulated lending practices. Stay informed on recent regulatory changes and their impact on clients and advisory services.',
      link: 'https://youtube.com/live/_e25WAK5Qgg'
    },{
      id: 6,
      title: 'Mastering Excel for Financial Analysis',
      type: 'Free',
      imageUrl: 'assets/images/Webinars/5.jpg',
      description: 'Sharpen your Excel skills to perform powerful financial modeling and decision-making. Ideal for CAs aiming to deliver deeper insights through advanced analytical techniques.',
      link: ' https://youtube.com/live/Wv1keEF2rl0'
    }   
  ];

  const categories = ['All', 'Accounting', 'Taxation', 'Entrepreneurship', 'Investments', 'Technology'];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const filteredWebinars = webinars.filter(webinar => webinar.type === webinarFilter);

  return (
    <>
      <section id="courses" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses Offered</h2>
          </div>

          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2 md:space-y-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 text-sm tracking-wider transition-colors ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onClick={() => {
                      setModalImage(project.imageUrl); // Set the image in the modal
                      setIsModalOpen(true); // Open the modal
                    }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-4 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section id="webinars" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Webinars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose from free or premium webinars curated by experts</p>
          </div>

          <div className="flex justify-center mb-12 space-x-4">
            {['Free', 'Paid'].map((type) => (
              <button
                key={type}
                onClick={() => setWebinarFilter(type as 'Free' | 'Paid')}
                className={`px-6 py-2 text-sm rounded-full border 
                  ${webinarFilter === type
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={webinar.imageUrl}
                    alt={webinar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onClick={() => setModalImage(webinar.imageUrl)} // Open modal on click
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mt-2 mb-3">{webinar.title}</h3>
                  <p className="text-sm text-gray-600">{webinar.description}</p>
                  <a
                    href={webinar.link}
                    className="inline-block mt-4 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal to display the image */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)} // Close the modal when clicked outside
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking the image
          >
            <img
              src={modalImage}
              alt="Course or Webinar Image"
              className="max-w-[70vh] max-h-[70vw] object-contain" // Make image smaller
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
