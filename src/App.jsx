import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import HeroSlide from './components/HeroSlide';
import pictures from './assets/assets';
import WhyChoose from './components/WhyChoose';
import BestSeller from './components/BestSeller';
import MostPopular from './components/MostPopular';
import PrivacyPolicy from './components/PrivacyPolicy';

const slidesContent = [
  <HeroSlide
    backgroundImage={pictures.banner1}
    heroTitle="Playing UFC 4"
    heroSubTitle="lorem"
    btn="Play Now"
  />,
  <HeroSlide
    backgroundImage={pictures.banner2}
    heroTitle="Playing UFC 4"
    heroSubTitle="lorem"
    btn="Join Now"
  />,
  <HeroSlide
    backgroundImage={pictures.banner3}
    heroTitle="Playing UFC 4"
    heroSubTitle="lorem"
    btn="Join Now"
  />,
];

function App() {

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const handleSeeGuidelineClick = () => {
    setShowPrivacyPolicy(true);
  };

  if (showPrivacyPolicy) {
    return (
      <>
        <Header />
        <PrivacyPolicy />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Sliders
        slides={slidesContent}
        className="hero_section" />
      <WhyChoose
        onClick={handleSeeGuidelineClick}
      />
      <BestSeller />
      <MostPopular />
      <Footer
        onClick={handleSeeGuidelineClick}
      />
    </>
  );
}

export default App;
