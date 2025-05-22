import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail } from 'lucide-react';

interface LeadershipMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Ding Jing",
    title: "Chief Executive Officer",
    bio: "With over 20 years of experience in the metal industry, Ding has led MAVEX's growth since its founding, establishing key partnerships across Asia and Europe.",
    image: "https://images.pexels.com/photos/5792638/pexels-photo-5792638.jpeg?auto=compress&cs=tinysrgb&w=1600",
    linkedin: "https://linkedin.com",
    email: "ding.jing@mavexinvestments.com"
  },
  {
    name: "Li Xuanmao",
    title: "Chief Operations Officer",
    bio: "Li oversees MAVEX's global operations, focusing on optimizing processes and expanding our recycling and processing capabilities.",
    image: "https://images.pexels.com/photos/5793913/pexels-photo-5793913.jpeg?auto=compress&cs=tinysrgb&w=1600",
    linkedin: "https://linkedin.com",
    email: "li.xuanmao@mavexinvestments.com"
  },
  {
    name: "Michael Chang",
    title: "Head of Trading",
    bio: "Michael leads our international trading division, leveraging his extensive network and market expertise to connect suppliers and buyers worldwide.",
    image: "https://images.pexels.com/photos/8292808/pexels-photo-8292808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    linkedin: "https://linkedin.com",
    email: "michael.chang@mavexinvestments.com"
  },
  {
    name: "Sarah Wong",
    title: "Director of Sustainability",
    bio: "Sarah drives our sustainability initiatives, ensuring our operations meet the highest environmental standards while maximizing resource efficiency.",
    image: "https://images.pexels.com/photos/5318961/pexels-photo-5318961.jpeg?auto=compress&cs=tinysrgb&w=1600",
    linkedin: "https://linkedin.com",
    email: "sarah.wong@mavexinvestments.com"
  }
];

const Leadership: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Leadership</h2>
          <div className="w-20 h-1 bg-copper mx-auto"></div>
          <p className="mt-6 text-lg text-steel-gray max-w-3xl mx-auto">
            Meet the experienced team driving MAVEX's vision and success.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leadershipTeam.map((member, index) => (
            <div 
              key={index}
              className={`card-hover transform transition-all duration-700 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3 justify-center">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full text-slate-dark hover:text-copper transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="bg-white p-2 rounded-full text-slate-dark hover:text-copper transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-copper mb-2">{member.title}</p>
              <p className="text-steel-gray">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;