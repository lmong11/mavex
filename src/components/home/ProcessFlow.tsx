import React from 'react';
import { useInView } from 'react-intersection-observer';
import { PackageSearch, Hammer, Truck, Ship } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <PackageSearch className="h-12 w-12 text-copper" />,
    title: "Collect",
    description: "Sourcing metal scrap from industrial partners, recycling centers, and manufacturing facilities."
  },
  {
    icon: <Hammer className="h-12 w-12 text-copper" />,
    title: "Process",
    description: "Sorting, shredding, and separating materials using advanced recycling technology."
  },
  {
    icon: <Truck className="h-12 w-12 text-copper" />,
    title: "Refine",
    description: "Converting processed materials into high-quality refined metal products ready for reuse."
  },
  {
    icon: <Ship className="h-12 w-12 text-copper" />,
    title: "Distribute",
    description: "Shipping refined metals to manufacturers worldwide through our global logistics network."
  }
];

const ProcessFlow: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process Flow</h2>
          <div className="w-20 h-1 bg-copper mx-auto"></div>
          <p className="mt-6 text-lg text-steel-gray max-w-3xl mx-auto">
            From collection to distribution, our comprehensive process ensures maximum efficiency and sustainability.
          </p>
        </div>
        
        <div 
          ref={ref} 
          className="relative"
        >
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center text-center transform transition-all duration-700 ${
                  inView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-copper rounded-full opacity-20 transform scale-110 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-steel-gray">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-copper">
            <div className={`transition-all duration-1000 h-full bg-copper ${
              inView ? 'w-full' : 'w-0'
            }`} style={{ transitionDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;