import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/images/mavex-storefront.jpg)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-dark via-slate-dark/70 to-transparent opacity-90"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              MAVEX INVESTMENTS
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Specializing in rare and precious metals processing, trading, and investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;