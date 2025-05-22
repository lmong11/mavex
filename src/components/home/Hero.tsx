import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Global Metal Recycling & Trading",
    subtitle: "Sustainable solutions for a circular economy"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Expert Consulting Services",
    subtitle: "Strategic guidance for metal industry businesses"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2883509/pexels-photo-2883509.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "International Logistics Network",
    subtitle: "Connecting suppliers and buyers worldwide"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark to-transparent opacity-80"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <h1 
              className="mb-4 font-bold leading-tight tracking-tight animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              {slides[currentSlide].title}
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 animate-slide-up opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              {slides[currentSlide].subtitle}
            </p>
            <div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up opacity-0"
              style={{ animationDelay: '0.6s' }}
            >
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-slate-dark">
                Our Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container-custom">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-copper' : 'w-2 bg-white bg-opacity-50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;