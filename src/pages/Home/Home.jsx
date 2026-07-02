import React from 'react';
import LuxuryHero from './components/LuxuryHero/LuxuryHero';
import LuxuryHeritage from './components/LuxuryHeritage/LuxuryHeritage';
import LuxuryQuote from './components/LuxuryQuote/LuxuryQuote';
import ShopByCategories from './components/ShopByCategories/ShopByCategories';
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import SplitInfoSection from './components/SplitInfoSection/SplitInfoSection';
import AboutCTASection from './components/AboutCTASection/AboutCTASection';
import MeetOurArtisans from './components/MeetOurArtisans/MeetOurArtisans';
import CountryRepresentatives from './components/CountryRepresentatives/CountryRepresentatives';
import SecurePaymentOptions from './components/SecurePaymentOptions/SecurePaymentOptions';
import Certifications from './components/Certifications/Certifications';
import GlobalClients from './components/GlobalClients/GlobalClients';
import FAQ from './components/FAQ/FAQ';

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden bg-[#15110F]">
      <LuxuryHero />
      
      <AboutCTASection />

      <ShopByCategories />
      <FeaturedProducts />
      

      <MeetOurArtisans />
      <CountryRepresentatives />
      
      <SecurePaymentOptions />
      <Certifications />
      <GlobalClients />
      <FAQ />

    </main>
  );
};

export default Home;
