import React from 'react';
import Hero from '../components/home/Hero';
import CompanyProfile from '../components/home/CompanyProfile';
import PolicyAnnouncement from '../components/home/PolicyAnnouncement';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PolicyAnnouncement />
      <CompanyProfile />
    </>
  );
};

export default HomePage;
