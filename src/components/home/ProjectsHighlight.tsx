import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "singapore-recycling-hub",
    title: "Singapore Recycling Hub",
    location: "Singapore",
    image: "https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Recycling"
  },
  {
    id: "laos-processing-facility",
    title: "Laos Processing Facility",
    location: "Laos",
    image: "https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Processing"
  },
  {
    id: "europe-distribution-network",
    title: "European Distribution Network",
    location: "Europe",
    image: "https://images.pexels.com/photos/311011/pexels-photo-311011.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Logistics"
  }
];

const ProjectsHighlight: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-copper mx-auto"></div>
          <p className="mt-6 text-lg text-steel-gray max-w-3xl mx-auto">
            Explore our successful projects across Asia, Europe, and beyond.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group card-hover relative rounded-lg overflow-hidden transform transition-all duration-700 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-copper text-sm font-medium mb-2">{project.location}</div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <span className="text-sm bg-copper bg-opacity-30 py-1 px-2 rounded">{project.category}</span>
              </div>
              <Link 
                to={`/projects/${project.id}`} 
                className="absolute inset-0 flex items-center justify-center bg-slate-dark bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="btn-primary">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;