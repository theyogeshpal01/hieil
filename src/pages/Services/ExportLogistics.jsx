import React, { useEffect } from 'react';
import './ExportLogistics.css';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Map, 
  ShieldCheck, 
  FileText, 
  Box, 
  Clock, 
  HeartHandshake, 
  Scale, 
  Users, 
  Ship, 
  Plane, 
  CheckCircle, 
  TrendingUp,
  Briefcase,
  Search
} from 'lucide-react';

const ExportLogistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '500+', label: 'Global Exports' },
    { value: '100+', label: 'Local Partners' },
    { value: '2+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' }
  ];

  const solutions = [
    { title: 'Export Documentation', icon: <FileText size={32} />, desc: 'We handle all export documentation including invoices, packing lists, certificates of origin, and export compliance paperwork.' },
    { title: 'Quality Assurance', icon: <ShieldCheck size={32} />, desc: 'Rigorous quality control and inspection processes to ensure categories meet international export standards.' },
    { title: 'Export Packaging', icon: <Box size={32} />, desc: 'Professional export packaging solutions that ensure your categories are ready for international shipping.' },
    { title: 'Global Markets', desc: 'Export to USA, Europe, Middle East, Asia, and more with our established international market presence.' }
  ];

  const documents = [
    { title: 'Commercial Invoice', desc: 'Detailed invoice specifying goods, values, and terms of sale for customs valuation.', icon: <FileText size={32} /> },
    { title: 'Packing List', desc: 'Comprehensive list detailing contents, weights, and dimensions of each package.', icon: <Box size={32} /> },
    { title: 'Certificate Of Origin', desc: 'Official document certifying the country of manufacture for your categories.'},
    { title: 'Customs Clearance', desc: 'Complete handling of customs documentation and regulatory compliance.', icon: <ShieldCheck size={32} /> },
    { title: 'Bill Of Lading', desc: 'Shipping documents for sea freight and airway bills for air shipments.', icon: <Ship size={32} /> },
    { title: 'Insurance Certificate', desc: 'Cargo insurance documentation to protect your shipment during transit.', icon: <Briefcase size={32} /> }
  ];

  const deliveryNetworks = [
    { title: 'North America', desc: 'USA, Canada, Mexico with established logistics partners and warehouses in major cities.' },
    { title: 'Europe', desc: 'UK, Germany, France, Italy, Spain and all EU countries with customs expertise.' },
    { title: 'Middle East', desc: 'UAE, Saudi Arabia, Qatar, Kuwait with understanding of regional requirements.' },
    { title: 'Asia Pacific', desc: 'Australia, Japan, Singapore, South Korea with efficient shipping routes.' }
  ];

  const advantages = [
    { title: 'Trusted Partner', icon: <HeartHandshake size={24} />, desc: 'Focus on your business growth while we handle all export procedures and documentation.' },
    { title: 'Time Efficient', icon: <Clock size={24} />, desc: 'Save time on export documentation, compliance, and international market procedures.' },
    { title: 'Compliance Assured', icon: <ShieldCheck size={24} />, desc: 'Ensure all export regulations and international standards are met for smooth transactions.' },
    { title: 'Quality Focused', icon: <CheckCircle size={24} />, desc: 'Rigorous quality control to maintain our reputation in international markets.' },
    { title: 'Dedicated Support', icon: <Users size={24} />, desc: 'Personal export manager and customer support for all your international trade needs.' },
    { title: 'Scalable Solutions', icon: <TrendingUp size={24} />, desc: 'Export solutions that grow with your business, from small orders to bulk shipments.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Complete visibility into pricing, documentation, and tracking for total peace of mind.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Ethical business practices with zero tolerance for corruption across all global operations.' }
  ];

  const processSteps = [
    { num: '1', title: 'Order Confirmation', desc: 'Confirm your product requirements and export specifications for international market delivery.' },
    { num: '2', title: 'Production & Quality', desc: 'Our artisans craft your categories with export-quality standards and rigorous quality control.' },
    { num: '3', title: 'Export Documentation', desc: 'We prepare all necessary export documents and ensure compliance with international regulations.' },
    { num: '4', title: 'Ready For Export', desc: 'categories are packaged and ready for export with all documentation for international shipping.' }
  ];

  const partners = [
    { title: 'Experience', desc: '2+ years of expertise in international export and compliance procedures across global markets.', icon: <Clock size={32} /> },
    { title: 'Global Presence', desc: 'Established export relationships with buyers and distributors in 50+ countries worldwide.'},
    { title: 'Quality Assurance', desc: 'Rigorous quality control and export standards compliance for international market requirements.', icon: <ShieldCheck size={32} /> },
    { title: 'Trusted Partner', desc: 'Reliable export services with transparent processes and dedicated support for international trade.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="export-page">
      
      {/* Page Header */}
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="page-header" data-aos="fade-up">
          <span className="ex-tag" style={{
            display: 'inline-block', padding: '6px 16px', background: 'transparent', 
            border: '1px solid #4a3e35', color: '#c8956c', fontSize: '0.75rem', 
            fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px'
          }}>Service Directory</span>
          <h1 className="page-title">Global Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>& Logistics</span></h1>
          <p className="page-subtitle">
            Seamlessly taking your products to international markets. We handle everything from rigorous quality assurance and export packaging to complex customs documentation and global delivery networks.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="ex-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Solutions */}
      <section className="ex-offer-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>Solutions</span></h2>
            <p>Complete Export Management</p>
          </div>
          <div className="ex-offer-grid">
            {solutions.map((solution, index) => (
              <div className="offer-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="offer-index">0{index + 1}</div>
                <div className="offer-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="ex-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>Documentation</span></h2>
            <p>Complete Paperwork Handling</p>
          </div>
          <div className="advantage-grid">
            {documents.map((doc, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="adv-icon">{doc.icon}</div>
                <div className="adv-content">
                  <h4>{doc.title}</h4>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Network */}
      <section className="ex-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Global <br /> <span style={{ color: 'var(--color-brand-base)' }}>Delivery Network</span></h2>
            <p>Serving Customers Worldwide</p>
          </div>
          <div className="partners-grid">
            {deliveryNetworks.map((network, index) => (
              <div className="partner-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h4>{network.title}</h4>
                <p>{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Export Services */}
      <section className="ex-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Choose <br /> <span style={{ color: 'var(--color-brand-base)' }}>Our Export Services</span></h2>
            <p>Professional Export Management</p>
          </div>
          <div className="advantage-grid">
            {advantages.map((adv, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="adv-icon">{adv.icon}</div>
                <div className="adv-content">
                  <h4>{adv.title}</h4>
                  <p>{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="ex-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>Process</span></h2>
            <p>Four Steps to Global Markets</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-step" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="timeline-number">{step.num}</div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ex-cta-section" data-aos="zoom-in">
        <div className="ex-cta-inner">
          <h2>Ready To Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>Globally</span>?</h2>
          <p>Experience professional export services with our comprehensive documentation and quality assurance. Focus on growing your business while we handle all the export procedures and international compliance. Get your personalized export quote today!</p>
          <Link to="/contact" className="ex-btn">Get Export Quote</Link>
        </div>
      </section>

      {/* Why Choose Our Export Services (Bottom) */}
      <section className="ex-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Choose <br /> <span style={{ color: 'var(--color-brand-base)' }}>Our Export Services</span></h2>
          </div>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="partner-icon">{partner.icon}</div>
                <h4>{partner.title}</h4>
                <p>{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExportLogistics;
