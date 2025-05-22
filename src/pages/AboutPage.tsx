import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import Timeline from '../components/about/Timeline';
import Leadership from '../components/about/Leadership';
import CoreValues from '../components/about/CoreValues';
import CallToAction from '../components/home/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <CoreValues />
      <Timeline />
      <Leadership />
      <CallToAction />
    </>
  );
};

export default AboutPage;