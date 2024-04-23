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
    backgroundImage={pictures.aviator}
    heroTitle="Aviator Game"
    heroSubTitle="Discover the exciting world of Aviator Game, an online betting experience with real cash prizes. With odds reaching up to 100 times your bet, a small wager of $10 could win you $1,000! Join now and try your luck."
    btn="Play Now"
  />,
  <HeroSlide
    backgroundImage={pictures.freeFire}
    heroTitle="Free Fire Max"
    heroSubTitle="Next on the list is Garena’s Free Fire Max, which is a battle royal game that drops 50 players on a remote island and players have to fight for their survival and take down others."
    btn="Play Now"
  />,
  <HeroSlide
    backgroundImage={pictures.craxyTime}
    heroTitle="Crazy Time"
    heroSubTitle="Crazy Time sees you looking at a person standing next to a large spinning wheel. The majority of the wheel spindles are made up of numbers – 1, 2, 5 and 10."
    btn="Play Now"
  />,
  <HeroSlide
    backgroundImage={pictures.RoyalMatch}
    heroTitle="Royal Match"
    heroSubTitle="In Royal Match, you help King Robert restore his kingdom’s lost glory by solving match-3 puzzles and collecting rewards from them. There are so many levels to win and more areas to unlock."
    btn="Play Now"
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
      <BestSeller />
      <MostPopular />
      <WhyChoose
        onClick={handleSeeGuidelineClick}
      />
      <Footer
        onClick={handleSeeGuidelineClick}
      />
    </>
  );
}

export default App;
