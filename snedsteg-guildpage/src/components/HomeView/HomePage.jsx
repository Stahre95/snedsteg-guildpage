import React from 'react';
import '../HomeView/HomePage.css';

import HeroBanner from '../HeroView/HeroBanner';
import AboutPage from '../AboutView/AboutPage';
import RosterPage from '../RosterView/RosterPage';
import VideoPage from '../VideoView/VideoPage';
import QuotesPage from '../QuotesView/QuotesPage';

function HomePage() {
  return (
    <div className="content-container">
      <div className="hero-container">
        <HeroBanner />
      </div>
      
      <div className="about-us-container">
        <AboutPage />
      </div>

      <div className="roster-container">
        <RosterPage />
      </div>

      <div className="video-container">
        <VideoPage />
      </div>

      <div className="quotes-container">
        <QuotesPage />
      </div>
    </div>
  );
}

export default HomePage;
