import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2008",
    title: "Company Founded",
    description: "MAVEX INVESTMENTS established in Singapore as a metal trading company."
  },
  {
    year: "2011",
    title: "Expansion to Hong Kong",
    description: "Opened our first international office to facilitate Asian market operations."
  },
  {
    year: "2014",
    title: "Launch of Recycling Division",
    description: "Established first recycling facility in Singapore, focusing on copper and aluminum."
  },
  {
    year: "2016",
    title: "Laos Processing Facility",
    description: "Opened state-of-the-art metal processing facility in Laos to serve Southeast Asian markets."
  },
  {
    year: "2019",
    title: "European Market Entry",
    description: "Established trading office in Rotterdam to expand European operations."
  },
  {
    year: "2022",
    title: "Consulting Services Launch",
    description: "Expanded service offerings to include industry consulting and sustainability advisory."
  },
  {
    year: "2024",
    title: "African Expansion",
    description: "Initiated operations in East Africa with new partnerships and supply chain networks."
  }
];

const Timeline: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-copper mx-auto"></div>
          <p className="mt-6 text-lg text-steel-gray max-w-3xl mx-auto">
            From our humble beginnings to becoming a global player in the metal recycling industry.
          </p>
        </div>
        
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className={`timeline-item transform transition-all duration-700 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="mb-1">
                <span className="inline-block px-3 py-1 bg-copper text-white text-sm font-semibold rounded-full">
                  {event.year}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-steel-gray">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;