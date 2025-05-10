import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & Creative Director',
      imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 15 years in the industry, Alex leads our creative vision and strategic direction.'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Lead UI/UX Designer',
      imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah brings her passion for human-centered design to create intuitive and delightful user experiences.'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Senior Developer',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael transforms complex problems into elegant technical solutions with a focus on performance.'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Project Manager',
      imageUrl: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Emma ensures our projects are delivered on time and exceed client expectations.'
    }
  ];

  return (
    <section id="team" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind our exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-48 h-48">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;