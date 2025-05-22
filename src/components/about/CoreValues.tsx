import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Leaf, Users, BarChart3 } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-copper" />,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our business dealings, building trust with clients, partners, and communities."
  },
  {
    icon: <Leaf className="h-12 w-12 text-copper" />,
    title: "Sustainability",
    description: "Environmental responsibility is at the core of our operations, driving innovation in recycling processes and resource efficiency."
  },
  {
    icon: <Users className="h-12 w-12 text-copper" />,
    title: "Collaboration",
    description: "We foster strong partnerships across the supply chain, working closely with clients to understand and meet their unique needs."
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-copper" />,
    title: "Excellence",
    description: "We are committed to continuous improvement and delivering the highest quality services and products to our clients."
  }
];

const CoreValues: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-slate-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-copper mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-80">
            The principles that guide our operations and relationships.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div 
              key={index}
              className={`p-6 border border-slate-light rounded-lg text-center transform transition-all duration-700 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-light rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="opacity-80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;