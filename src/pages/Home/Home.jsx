import React from 'react';
import LuxuryHero from './components/LuxuryHero/LuxuryHero';
import LuxuryHeritage from './components/LuxuryHeritage/LuxuryHeritage';
import LuxuryQuote from './components/LuxuryQuote/LuxuryQuote';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ShopByCategories from './components/ShopByCategories/ShopByCategories';
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import SplitInfoSection from './components/SplitInfoSection/SplitInfoSection';
import HighlightGrid from './components/HighlightGrid/HighlightGrid';
import ProductCatalogue from './components/ProductCatalogue/ProductCatalogue';
import AboutCTASection from './components/AboutCTASection/AboutCTASection';
import FilterBar from './components/FilterBar/FilterBar';
import MeetOurArtisans from './components/MeetOurArtisans/MeetOurArtisans';
import CountryRepresentatives from './components/CountryRepresentatives/CountryRepresentatives';
import SecurePaymentOptions from './components/SecurePaymentOptions/SecurePaymentOptions';
import Certifications from './components/Certifications/Certifications';
import GlobalClients from './components/GlobalClients/GlobalClients';
import FAQ from './components/FAQ/FAQ';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <LuxuryHero />
      <HeroSlider />
      
      <FilterBar />
      <AboutCTASection />

      <LuxuryHeritage />

      <ShopByCategories />
      <FeaturedProducts />
      
      {/* MOQ Section using the Split Layout */}
      <SplitInfoSection 
        subtitle="Flexible Minimum Order Quantity"
        title="TAILORED TO SUPPORT BUSINESSES OF ALL SIZES"
        paragraphs={[
          "To maintain premium quality standards and ensure cost-effective production, our handicraft categories are available with a Minimum Order Quantity (MOQ) of 100 pieces per design.",
          "As each item is carefully handcrafted by skilled artisans, a 100-piece MOQ allows us to efficiently manage raw materials, production time, and quality control while offering competitive international pricing.",
          "We are also open to customisation in design, size, finish, packaging, and branding for bulk orders meeting the MOQ requirement."
        ]}
        buttonText="REQUEST QUOTE"
        imageSrc="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop"
        imageAlt="Pottery details"
      />
      
      <LuxuryQuote />
      
      {/* Our Commitment using the Highlight Grid layout */}
      <HighlightGrid />
      
      {/* Product Catalogue Section */}
      <ProductCatalogue />
      
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
