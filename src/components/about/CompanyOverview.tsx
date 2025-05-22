import React from 'react';
import { useInView } from 'react-intersection-observer';

const CompanyOverview: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref}
            className={`transform transition-all duration-700 ${
              inView 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Company</h2>
            <div className="w-20 h-1 bg-copper mb-6"></div>
            <p className="text-lg text-steel-gray mb-6">
              MAVEX INVESTMENTS PTE. LTD. is a Singapore-based metal recycling and trading company, with a strong presence in Southeast Asia through our subsidiary Zhongyu International Metal Materials Industry Co., Ltd. in Laos.
            </p>
            <p className="text-lg text-steel-gray mb-6">
              Our operations span across strategic locations, with our headquarters in Singapore and a key processing facility in Khammouane Province, Laos. We specialize in metal recycling, processing, and international trading.
            </p>
            <p className="text-lg text-steel-gray">
              Through our commitment to sustainability and innovation, we continue to expand our reach while maintaining the highest standards of environmental responsibility and operational excellence.
            </p>
          </div>
          
          <div 
            className={`relative transform transition-all duration-700 ${
              inView 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <img 
              src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Metal recycling facility" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-copper rounded-lg hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-slate-dark rounded-lg transform translate-x-3 translate-y-3 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;