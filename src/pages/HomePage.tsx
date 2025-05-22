import React from 'react';
import Hero from '../components/home/Hero';
import ValueProps from '../components/home/ValueProps';
import ProcessFlow from '../components/home/ProcessFlow';
import Services from '../components/home/Services';
import ProjectsHighlight from '../components/home/ProjectsHighlight';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16">
        <img src="singapore-3706832_1280.jpg" alt="Welcome" className="w-80 h-80 object-cover rounded-lg shadow-lg mb-6" />
        <h1 className="text-3xl font-bold mb-2">Welcome to Our Home Page!</h1>
        <p className="text-lg text-gray-600">We are glad to have you here. Explore our services and offerings.</p>
      </div>
      <ValueProps />
      <Services />
      <ProcessFlow />
      <ProjectsHighlight />
      <CallToAction />
    </>
  );
};

export default HomePage;