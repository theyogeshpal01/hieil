import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import WhyChooseUs from './pages/About/WhyChooseUs';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product'; 
import Enquiry from './pages/Enquiry/Enquiry';
import './index.css';

import Shop from './pages/Shop/Shop';
import HowWeWork from './pages/HowWeWork/HowWeWork';
import CustomProductDevelopment from './pages/Services/CustomProductDevelopment';
import BulkWholesaleSupply from './pages/Services/BulkWholesaleSupply';
import PartnershipForm from './pages/Services/PartnershipForm';
import ExportLogistics from './pages/Services/ExportLogistics';
import QualityAssurance from './pages/Services/QualityAssurance';
import PrivateLabeling from './pages/Services/PrivateLabeling';
import B2BPartnerships from './pages/Services/B2BPartnerships';
import AffiliateProgram from './pages/Services/AffiliateProgram';
import Blog from './pages/Blog/Blog';
import Gallery from './pages/Gallery/Gallery';
import Testimonials from './pages/Testimonials/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import LegalInfo from './pages/LegalInfo/LegalInfo';
import Breadcrumb from './components/common/Breadcrumb/Breadcrumb';

import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);

  return null;
}

import AdminApp from './admin/AdminApp';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          {/* Main Website Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about/us" element={<About />} />
            <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/about/how-we-work" element={<HowWeWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/products/:categoryId" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/:id/enquiry" element={<Enquiry />} />
            <Route path="/services/custom" element={<CustomProductDevelopment />} />
            <Route path="/services/wholesale" element={<BulkWholesaleSupply />} />
            <Route path="/services/wholesale/partnership-form" element={<PartnershipForm />} />
            <Route path="/services/export" element={<ExportLogistics />} />
            <Route path="/services/quality" element={<QualityAssurance />} />
            <Route path="/services/private-labeling" element={<PrivateLabeling />} />
            <Route path="/services/b2b" element={<B2BPartnerships />} />
            <Route path="/services/affiliate" element={<AffiliateProgram />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal-info" element={<LegalInfo />} />
          </Route>

          {/* Admin Panel Route */}
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
