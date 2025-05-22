import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Industrial facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-dark opacity-80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Partner with MAVEX?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Contact us today to discuss your metal recycling, trading, or consulting needs.
            Our team of experts is ready to provide tailored solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-slate-dark">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;