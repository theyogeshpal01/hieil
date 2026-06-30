import React, { useEffect } from 'react';
import './CustomProductDevelopment.css';
import { Link } from 'react-router-dom';
import { Palette, Users, TrendingUp, ShieldCheck, Target, Globe, Star, Clock, HeartHandshake, Search, Scale, Leaf } from 'lucide-react';

const CustomProductDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    { title: 'Market Uniqueness', icon: <Star size={24} />, desc: 'Get categories that are unique to your market and help you stand out from competitors with exclusive designs.' },
    { title: 'Brand Alignment', icon: <Target size={24} />, desc: 'Every product perfectly matches your brand identity, values, and target audience preferences.' },
    { title: 'International Standards', desc: 'categories designed to meet international quality standards and market-specific regulations.' },
    { title: 'Exclusive Collections', icon: <ShieldCheck size={24} />, desc: 'Create proprietary product lines that can\'t be replicated by competitors, giving you market exclusivity.' },
    { title: 'Timely Delivery', icon: <Clock size={24} />, desc: 'Efficient production timelines that ensure your categories reach the market when you need them.' },
    { title: 'Ongoing Support', icon: <HeartHandshake size={24} />, desc: 'Continuous consultation and support throughout the development process and beyond launch.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Complete visibility into development costs, material sourcing, and production timelines.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Zero-tolerance for unethical practices, ensuring fair and honest product development cycles.' }
  ];

  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your market needs, brand identity, and specific requirements through detailed discussions.' },
    { num: '02', title: 'Concept Design', desc: 'Creating initial designs and prototypes that align with your vision and market trends.' },
    { num: '03', title: 'Refinement', desc: 'Iterating on designs based on your feedback to ensure perfect alignment with expectations.' },
    { num: '04', title: 'Production', desc: 'Manufacturing your custom categories using premium materials and expert craftsmanship.' }
  ];

  const partners = [
    { title: 'Proven Expertise', desc: 'Years of experience in custom product development for diverse markets and industries worldwide.', icon: <Star size={32} /> },
    { title: 'Collaborative Approach', desc: 'We work as your partner, not just a vendor, ensuring your success in the market.', icon: <Users size={32} /> },
    { title: 'Reliable Delivery', desc: 'On-time delivery with consistent quality across all orders, large or small.', icon: <Clock size={32} /> },
    { title: 'Sustainable Practices', desc: 'Environmentally responsible manufacturing processes and ethically sourced materials for conscious businesses.', icon: <Leaf size={32} /> }
  ];

  return (
    <div className="custom-services-page">
      
      {/* Page Title & Offer Section integrated */}
      <section className="cs-offer-section">
        <div className="container">
          <div className="page-header" data-aos="fade-up">
            <span className="cs-tag">Service Directory</span>
            <h1 className="page-title">Custom Product <span style={{ color: 'var(--color-brand-base)' }}>Development</span></h1>
            <p className="page-subtitle">
              Every market has unique demands. That's why we offer specialized custom product development services designed to meet your specific business needs. From concept to completion, we create categories that perfectly align with your brand identity.
            </p>
          </div>
          
          <div className="custom-offer-grid">
            <div className="offer-card" data-aos="fade-up" data-aos-delay="100">
              <div className="offer-icon"><Palette size={32} /></div>
              <h3>Tailor-made Designs</h3>
              <p>Custom designs, sizes, and finishes crafted according to your brand needs. We adapt every detail to match your vision and specifications perfectly.</p>
            </div>
            <div className="offer-card" data-aos="fade-up" data-aos-delay="200">
              <div className="offer-icon"><Users size={32} /></div>
              <h3>Professional Collaboration</h3>
              <p>Work directly with architects, interior designers, and retailers to create exclusive collections that set your brand apart in the marketplace.</p>
            </div>
            <div className="offer-card" data-aos="fade-up" data-aos-delay="300">
              <div className="offer-icon"><TrendingUp size={32} /></div>
              <h3>Trend-based Designs</h3>
              <p>Seasonal and trend-based designs that match international market preferences, keeping your product line fresh and competitive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="cs-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Your <br /> <span style={{ color: 'var(--color-brand-base)' }}>Competitive Advantage</span></h2>
            <p>Why Choose Custom Product Development?</p>
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

      {/* Product Categories */}
      <section className="cs-categories-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Product <br /> <span style={{ color: 'var(--color-brand-base)' }}>categories</span></h2>
            <p>Custom Development Across Multiple categories</p>
          </div>
          <div className="empty-state">
            <Search size={48} className="empty-icon" />
            <p>No custom categories found at the moment.</p>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="cs-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our <br /> <span style={{ color: 'var(--color-brand-base)' }}>Development Process</span></h2>
            <p>From Concept to Market-Ready categories</p>
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

      {/* Why Partner With Us */}
      <section className="cs-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Partner <br /> <span style={{ color: 'var(--color-brand-base)' }}>With Us?</span></h2>
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

      {/* CTA Section */}
      <section className="cs-cta-section" data-aos="zoom-in">
        <div className="cs-cta-inner">
          <h2>Ready To Develop <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Unique Product Line</span>?</h2>
          <p>Let's collaborate to create categories that set your brand apart in the marketplace. Our expert team is ready to bring your vision to life with custom solutions tailored to your specific needs.</p>
          <Link to="/contact" className="cs-btn">Start Your Custom Project</Link>
        </div>
      </section>

    </div>
  );
};

export default CustomProductDevelopment;
