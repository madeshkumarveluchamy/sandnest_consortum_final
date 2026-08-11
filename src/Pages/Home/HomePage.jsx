import React from 'react';
import Home from './Home';
import Studio from './Studio';
import ArchitectureServices from './ArchitectureServices';
import CareSpaces from './CareSpaces';
import FeaturedWorks from './FeaturedWorks';
import ClientStories from './ClientStories';
import ExperienceSection from './ExperienceSection';
import BlogSection from './BlogSection';

import TeamSection from '../Story/TeamSection';
import FaqSection from '../Story/FaqSection';
import FaqsSection from '../Story/FaqSection';


const HomePage = () => {
  return (
    <div>
      <Home />
      <Studio />
      <ArchitectureServices/>
      <CareSpaces/>
      <FeaturedWorks/>
      <ClientStories/>
      <ExperienceSection/>
      <TeamSection />
      <BlogSection/>
      <FaqsSection />
    </div>
  );
};

export default HomePage;