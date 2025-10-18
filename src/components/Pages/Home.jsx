import React from 'react';
import HeroSection from '../Sections/HeroSection';
import TeamSection from '../Sections/TeamSection';
import StatsSection from '../Sections/StatsSection';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <TeamSection />
      <StatsSection />
    </div>
  );
}