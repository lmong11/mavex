import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Industrial factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-dark to-slate-dark/70"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl opacity-90">
            A leading Singapore-based metal recycling and trading company with global reach and sustainable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;