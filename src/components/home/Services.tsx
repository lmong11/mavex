import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Factory, GlobeLock, PiggyBank, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: <Factory className="h-12 w-12 text-copper" />,
    title: "Recycling & Processing",
    description: "State-of-the-art facilities for sorting, processing, and recycling various metals including aluminum, copper, steel, and rare earth metals.",
    link: "/services#recycling"
  },
  {
    icon: <GlobeLock className="h-12 w-12 text-copper" />,
    title: "Global Trade & Logistics",
    description: "Comprehensive trading solutions connecting suppliers and buyers across continents with efficient logistics and supply chain management.",
    link: "/services#trading"
  },
  {
    icon: <PiggyBank className="h-12 w-12 text-copper" />,
    title: "Consulting & Investment",
    description: "Expert advisory services for metal industry businesses, sustainability initiatives, and strategic investment opportunities.",
    link: "/services#consulting"
  }
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-slate-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-copper mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-80">
            Comprehensive metal recycling, trading, and consulting services tailored to meet your business needs.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card bg-slate-light rounded-lg p-8 transform transition-all duration-700 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 opacity-80">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-copper hover:text-copper-light transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;