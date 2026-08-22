import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import './index.css';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const WhyChooseUs = lazy(() => import('./pages/About/WhyChooseUs'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Product = lazy(() => import('./pages/Product/Product')); 
const Enquiry = lazy(() => import('./pages/Enquiry/Enquiry'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const HowWeWork = lazy(() => import('./pages/HowWeWork/HowWeWork'));
const CustomProductDevelopment = lazy(() => import('./pages/Services/CustomProductDevelopment'));
const BulkWholesaleSupply = lazy(() => import('./pages/Services/BulkWholesaleSupply'));
const PartnershipForm = lazy(() => import('./pages/Services/PartnershipForm'));
const ExportLogistics = lazy(() => import('./pages/Services/ExportLogistics'));
const QualityAssurance = lazy(() => import('./pages/Services/QualityAssurance'));
const PrivateLabeling = lazy(() => import('./pages/Services/PrivateLabeling'));
const B2BPartnerships = lazy(() => import('./pages/Services/B2BPartnerships'));
const AffiliateProgram = lazy(() => import('./pages/Services/AffiliateProgram'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials/Testimonials'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService/TermsOfService'));
const LegalInfo = lazy(() => import('./pages/LegalInfo/LegalInfo'));
import Breadcrumb from './components/common/Breadcrumb/Breadcrumb';
import GlobalLoader from './components/common/GlobalLoader/GlobalLoader';

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
        behavior: 'auto'
      });
    }
  }, [pathname, hash]);

  return null;
}

const AdminApp = lazy(() => import('./admin/AdminApp'));
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
      <GlobalLoader />
      <div className="app-container">
        <Suspense fallback={<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className="hieil-spinner"></div></div>}>
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
              
              {/* Catch-all route to redirect /index or any unknown URL to Home */}
              <Route path="/index" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>

            {/* Admin Panel Route */}
            <Route path="/admin/*" element={<AdminApp />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
