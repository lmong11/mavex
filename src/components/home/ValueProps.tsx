import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Recycle, Globe, Truck, Award } from 'lucide-react';

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: <Recycle className="h-10 w-10 text-copper" />,
    title: "Sustainable Recycling",
    description: "State-of-the-art processing facilities that maximize metal recovery while minimizing environmental impact."
  },
  {
    icon: <Globe className="h-10 w-10 text-copper" />,
    title: "Global Reach",
    description: "Operating across Asia, Europe and Africa with a network of trusted partners and logistics capabilities."
  },
  {
    icon: <Truck className="h-10 w-10 text-copper" />,
    title: "Efficient Logistics",
    description: "Optimized supply chain solutions ensuring timely delivery and cost-effective transportation."
  },
  {
    icon: <Award className="h-10 w-10 text-copper" />,
    title: "Industry Expertise",
    description: "Over 15 years of experience in metal recycling, trading, and consulting services."
  }
];

const ValueProps: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className={`card p-6 flex flex-col items-center text-center transform transition-all duration-500 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-steel-gray">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;