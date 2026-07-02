import React, { useEffect } from 'react';
import './B2BPartnerships.css';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Hotel, 
  Paintbrush, 
  ShoppingCart, 
  TrendingUp, 
  HeartHandshake, 
  Lock, 
  Clock, 
  PiggyBank, 
  Network, 
  Users, 
  ShieldCheck, 
  Target, 
  Globe, 
  Star, 
  Scale, 
  Search,
  CheckCircle,
  FileText,
  Award,
  Lightbulb
} from 'lucide-react';

const B2BPartnerships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '20+', label: 'Active Partners' },
    { value: '2+', label: 'Years Experience' },
    { value: '98%', label: 'Partnership Retention' },
    { value: '50+', label: 'Countries Served' }
  ];

  const networks = [
    { title: 'Wholesalers & Distributors', icon: <Building2 size={40} />, desc: 'Strategic partnerships with wholesalers and distributors for market expansion and efficient supply chain management.' },
    { title: 'Hotel Chains', icon: <Hotel size={40} />, desc: 'Long-term contracts with hotel chains for consistent supply of premium quality categories and custom solutions.' },
    { title: 'Interior Designers', icon: <Paintbrush size={40} />, desc: 'Collaborations with interior designers for custom product development and exclusive design partnerships.' },
    { title: 'E-commerce Stores', icon: <ShoppingCart size={40} />, desc: 'Partnerships with online retailers for dropshipping, private label, and exclusive product collaborations.' }
  ];

  const partnershipModels = [
    { 
      title: 'Growth Partnership', 
      subtitle: 'Flexible Order Planning',
      desc: 'Scale your business with flexible order planning that matches your growth strategy and market demands',
      features: ['Scalable order quantities', 'Seasonal planning support', 'Inventory management', 'Market trend analysis', 'Growth forecasting'],
      btnText: 'Explore Growth Partnership',
      icon: <TrendingUp size={32} />
    },
    { 
      title: 'Long-term Partnership', 
      subtitle: 'Dedicated Support',
      desc: 'Build lasting business relationships with dedicated support for repeat and contract orders',
      features: ['Dedicated account manager', 'Priority production slots', 'Contract pricing', 'Custom product development', 'Strategic planning sessions'],
      btnText: 'Start Long-Term Partnership',
      icon: <HeartHandshake size={32} />
    },
    { 
      title: 'Exclusive Partnership', 
      subtitle: 'Market Exclusivity',
      desc: 'Secure your market position with exclusive product lines and territory protection',
      features: ['Exclusive product designs', 'Territory protection', 'First right of refusal', 'Co-branding opportunities', 'Joint marketing initiatives'],
      btnText: 'Discuss Exclusivity',
      icon: <Lock size={32} />
    }
  ];

  const advantages = [
    { title: 'Reliable Supply Chain', desc: 'Consistent product quality and on-time delivery that you can depend on for your business operations.', icon: <Network size={32} /> },
    { title: 'Dedicated Support', desc: 'Personal account managers and 24/7 support team dedicated to your business success and growth.', icon: <Users size={32} /> },
    { title: 'Cost Efficiency', desc: 'Competitive pricing and volume discounts that improve your profit margins and business sustainability.', icon: <PiggyBank size={32} /> },
    { title: 'Growth Support', desc: 'Strategic guidance and flexible solutions that support your expansion into new markets and product lines.', icon: <TrendingUp size={32} /> }
  ];

  const flexibleTerms = [
    { title: 'Flexible Order Planning', desc: 'Adapt order quantities and schedules to match your sales cycles, seasonal demands, and inventory needs.', icon: <Clock size={32} /> },
    { title: 'Contract Orders', desc: 'Secure long-term contracts with guaranteed pricing, priority production, and dedicated quality assurance.', icon: <FileText size={32} /> },
    { title: 'Repeat Order Support', desc: 'Streamlined processes for repeat orders with maintained quality consistency and efficient turnaround times.', icon: <HeartHandshake size={32} /> },
    { title: 'Dedicated Relationship', desc: 'Personalized service with account managers who understand your business and growth objectives.', icon: <Users size={32} /> }
  ];

  const reasons = [
    { title: 'Strategic Alliance', icon: <Target size={24} />, desc: 'We become an extension of your team, working strategically to achieve your business objectives and market goals.' },
    { title: 'Growth Acceleration', icon: <TrendingUp size={24} />, desc: 'Leverage our expertise and resources to accelerate your market expansion and product development.' },
    { title: 'Supply Chain Security', icon: <ShieldCheck size={24} />, desc: 'Ensure business continuity with reliable supply chain management and risk mitigation strategies.' },
    { title: 'Innovation Partnership', icon: <Lightbulb size={24} />, desc: 'Collaborate on new product development and market innovations that keep you ahead of competitors.' },
    { title: 'Global Reach', icon: <Globe size={24} />, desc: 'Access international markets with our export expertise and global logistics capabilities.' },
    { title: 'Quality Assurance', icon: <CheckCircle size={24} />, desc: 'Maintain product excellence with our rigorous quality control processes and international certifications.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Complete visibility into pricing, documentation, and tracking for total peace of mind.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Ethical business practices with zero tolerance for corruption across all global operations.' }
  ];

  const testimonials = [
    { title: 'European Distributor', desc: '"Starting with small orders, we\'ve grown to become their primary European distributor. Their flexible order planning and dedicated support helped us expand into 12 new markets."', icon: <Star size={32} /> },
    { title: 'Luxury Hotel Chain', desc: '"Their partnership approach and custom product development have been instrumental in creating unique guest experiences across our 25 hotel properties worldwide."', icon: <Star size={32} /> },
    { title: 'E-commerce Retailer', desc: '"From dropshipping to private label, their scalable solutions supported our growth from startup to multi-million dollar business. Truly a partnership built on mutual success."', icon: <Star size={32} /> }
  ];

  const processSteps = [
    { num: '1', title: 'Discovery & Planning', desc: 'Deep understanding of your business goals, market position, and partnership requirements for mutual success.' },
    { num: '2', title: 'Solution Design', desc: 'Customized partnership model with flexible terms, support structure, and growth roadmap aligned with your strategy.' },
    { num: '3', title: 'Implementation', desc: 'Smooth onboarding with dedicated account management, quality assurance, and operational integration.' },
    { num: '4', title: 'Growth & Optimization', desc: 'Continuous partnership optimization, performance reviews, and strategic planning for ongoing success.' }
  ];

  const partners = [
    { title: 'Proven Track Record', desc: '2+ years of successful partnerships with businesses across 50+ countries and multiple industries.', icon: <Award size={32} /> },
    { title: 'Relationship Focus', desc: 'We invest in long-term relationships, not just transactions, with personalized service and mutual growth focus.', icon: <HeartHandshake size={32} /> },
    { title: 'Flexible Solutions', desc: 'Customized partnership models that adapt to your changing business needs and market dynamics.', icon: <Scale size={32} /> },
    { title: 'Growth Commitment', desc: 'We measure our success by your growth, with dedicated resources and strategic support for your expansion.', icon: <TrendingUp size={32} /> }
  ];

  return (
    <div className="b2b-page">
      

      {/* Stats Section */}
      <section className="b2b-stats-section" style={{ paddingBottom: '80px' }}>
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

      {/* Our Partnership Network */}
      <section className="b2b-offer-section">
        <div className="container">
          <div className="page-header" data-aos="fade-up">
            <span className="b2b-tag">Service Directory</span>
            <h1 className="page-title">Global B2B Partnership <br /> <span style={{ color: 'var(--color-brand-base)' }}>Opportunities</span></h1>
            <p className="page-subtitle">
              We specialize in forging strong, long-lasting business relationships across the globe. Whether you're a wholesaler, retailer, or distributor, our B2B partnership programs are designed to provide you with exclusive categories, reliable supply chains, and dedicated support to scale your business.
            </p>
          </div>
          <div className="offer-grid">
            {networks.map((network, index) => (
              <div className="offer-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="offer-icon">{network.icon}</div>
                <h3>{network.title}</h3>
                <p>{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="b2b-models-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Partnership <br /> <span style={{ color: 'var(--color-brand-base)' }}>Models</span></h2>
            <p>Tailored Solutions for Your Business</p>
          </div>
          <div className="models-grid">
            {partnershipModels.map((model, index) => (
              <div className="offer-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="model-header">
                  <div className="offer-icon">{model.icon}</div>
                  <span className="model-tag">PARTNERSHIP</span>
                </div>
                <h3>{model.title}</h3>
                <h4>{model.subtitle}</h4>
                <p>{model.desc}</p>
                <ul className="model-features">
                  {model.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={16} /> {feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="b2b-btn-outline">{model.btnText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Partnership Advantage */}
      <section className="b2b-advantage-section py-10">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Your <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partnership Advantage</span></h2>
            <p>A Reliable Export Partner Invested in Your Success</p>
          </div>
          <div className="advantage-grid">
            {advantages.map((item, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="adv-icon">{item.icon}</div>
                <div className="adv-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Partnership Terms */}
      <section className="b2b-terms-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="">Flexible <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partnership Terms</span></h2>
            <p>Designed for Your Business Needs</p>
          </div>
          <div className="advantage-grid">
            {flexibleTerms.map((item, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="adv-icon">{item.icon}</div>
                <div className="adv-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="b2b-reasons-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="">Why Partner <br /> <span style={{ color: 'var(--color-brand-base)' }}>With Us</span></h2>
            <p>Building Success Together</p>
          </div>
          <div className="advantage-grid">
            {reasons.map((adv, index) => (
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

      {/* Successful Partnerships */}
      <section className="b2b-testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Successful <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partnerships</span></h2>
            <p>Stories of Growth and Collaboration</p>
          </div>
          <div className="b2b-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="adv-icon">{testimonial.icon}</div>
                <div className="adv-content">
                  <p className="testimonial-desc">{testimonial.desc}</p>
                  <h4>{testimonial.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Partnership <br /> <span style={{ color: 'var(--color-brand-base)' }}>Journey</span></h2>
            <p>Building Our Relationship Step by Step</p>
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
      <section className="b2b-cta-section" data-aos="zoom-in">
        <div className="b2b-cta-inner">
          <h2>Looking For A Trusted <br /> <span style={{ color: 'var(--color-brand-base)' }}>Handicraft Exporter</span>?</h2>
          <p>Let's build a partnership that grows your business and creates lasting value. With our flexible solutions, dedicated support, and commitment to your success, we're more than just a supplier — we're your strategic partner in global expansion.</p>
          <Link to="/contact" className="b2b-btn">Let's Build a Partnership</Link>
        </div>
      </section>

      {/* Why Businesses Choose Our Partnership */}
      <section className="b2b-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Businesses <br /> <span style={{ color: 'var(--color-brand-base)' }}>Choose Our Partnership</span></h2>
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

export default B2BPartnerships;
