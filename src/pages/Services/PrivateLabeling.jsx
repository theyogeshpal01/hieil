import React, { useEffect } from 'react';
import './PrivateLabeling.css';
import { Link } from 'react-router-dom';
import { 
  Tag, 
  Package, 
  Barcode, 
  Store, 
  ShieldCheck, 
  PenTool, 
  Leaf, 
  Award, 
  TrendingUp, 
  Target, 
  Globe, 
  Star, 
  HeartHandshake, 
  Scale, 
  Users,
  Search,
  CheckCircle,
  Lightbulb,
  FileText
} from 'lucide-react';

const PrivateLabeling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '10+', label: 'Brands Built' },
    { value: '7+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' },
    { value: '100%', label: 'Brand Exclusivity' }
  ];

  const solutions = [
    { title: 'White-label / Oem Services', icon: <Tag size={40} />, desc: 'High-quality categories manufactured under your brand name with complete customization options and brand exclusivity.' },
    { title: 'Customized Packaging', icon: <Package size={40} />, desc: 'Tailored packaging solutions with your branding, logos, colors, and design elements that reflect your brand identity.' },
    { title: 'Labeling & Barcoding', icon: <Barcode size={40} />, desc: 'Professional labeling, barcoding, and product information systems compliant with global retail standards.' },
    { title: 'Retail-ready Packaging', icon: <Store size={40} />, desc: 'Complete packaging solutions designed for direct shelf placement in retail stores worldwide.' }
  ];

  const services = [
    { 
      title: 'White Label Manufacturing', 
      subtitle: 'Product Level Branding',
      desc: 'Manufacture categories with your brand name, logos, and complete brand identity',
      features: ['Complete brand customization', 'Exclusive product designs', 'Quality assurance', 'Brand protection', 'Global compliance'],
      btnText: 'Start White Label',
      icon: <Tag size={32} />
    },
    { 
      title: 'Custom Packaging', 
      subtitle: 'Packaging Solutions',
      desc: 'Design and produce packaging that showcases your brand and protects your categories',
      features: ['Branded box design', 'Custom inserts & padding', 'Eco-friendly options', 'Premium materials', 'Cost-effective solutions'],
      btnText: 'Design Packaging',
      icon: <Package size={32} />
    },
    { 
      title: 'Retail Ready Solutions', 
      subtitle: 'Store-Ready Packaging',
      desc: 'Complete solutions designed for direct placement in retail environments',
      features: ['Shelf-ready packaging', 'Barcode compliance', 'Pricing labels', 'Security features', 'Display optimization'],
      btnText: 'Get Retail Ready',
      icon: <Store size={32} />
    }
  ];

  const packagingSolutions = [
    { title: 'Brand Design', desc: 'Custom color schemes, logos, and design elements that perfectly represent your brand identity and values.', icon: <PenTool size={32} /> },
    { title: 'Labeling Services', desc: 'Professional labels with barcodes, product information, and compliance details for global markets.', icon: <Barcode size={32} /> },
    { title: 'Sustainable Packaging', desc: 'Eco-friendly packaging options using recycled materials and sustainable practices for conscious brands.', icon: <Leaf size={32} /> },
    { title: 'Premium Packaging', desc: 'Luxury packaging solutions with premium materials and finishes for high-end brand positioning.', icon: <Award size={32} /> }
  ];

  const identityServices = [
    { title: 'Brand Strategy', desc: 'Strategic guidance for brand positioning, target audience identification, and market entry planning.', icon: <Target size={32} /> },
    { title: 'Design Development', desc: 'Creative design services for logos, packaging, and marketing materials that reflect your brand essence.', icon: <PenTool size={32} /> },
    { title: 'Brand Guidelines', desc: 'Comprehensive brand manuals ensuring consistent application across all categories and markets.', icon: <FileText size={32} /> },
    { title: 'Global Adaptation', desc: 'Localization services for different markets while maintaining core brand identity and values.', icon: <Globe size={32} /> }
  ];

  const advantages = [
    { title: 'Brand Equity Building', icon: <TrendingUp size={24} />, desc: 'Develop strong brand recognition and customer loyalty with exclusive, branded categories in the market.' },
    { title: 'Market Differentiation', icon: <Star size={24} />, desc: 'Stand out from competitors with unique branded categories that cannot be replicated by others.' },
    { title: 'Higher Margins', icon: <TrendingUp size={24} />, desc: 'Command premium pricing and better profit margins with exclusive branded categories versus generic alternatives.' },
    { title: 'Brand Protection', icon: <ShieldCheck size={24} />, desc: 'Secure your market position with exclusive categories that competitors cannot easily copy or undercut.' },
    { title: 'Global Expansion', icon: <Globe size={24} />, desc: 'Scale your brand internationally with categories and packaging designed for global markets and compliance.' },
    { title: 'Customer Loyalty', icon: <HeartHandshake size={24} />, desc: 'Build lasting relationships with customers through consistent brand experience and product quality.' },
    { title: 'Ip Ownership Clarity', icon: <FileText size={24} />, desc: '100% Transparency on all design rights and intellectual property, ensuring you own your brand\'s future.' },
    { title: 'Ethical Branding Mission', icon: <Scale size={24} />, desc: 'A commitment to original creativity and ethical sourcing, with zero tolerance for design plagiarism or corruption.' }
  ];

  const testimonials = [
    { title: 'Home Decor Brand', desc: '"Starting from scratch, they helped us build a complete home decor line with custom packaging that now sells in 15 countries. Our brand recognition has grown 300% in two years."', icon: <Star size={32} /> },
    { title: 'Wellness Brand', desc: '"Their private label manufacturing and sustainable packaging solutions helped us launch our wellness categories with a strong brand identity that resonates with eco-conscious consumers."', icon: <Star size={32} /> },
    { title: 'Luxury Brand', desc: '"The attention to detail in their premium packaging and brand consistency across all categories has been instrumental in positioning us as a luxury home accessories brand."', icon: <Star size={32} /> }
  ];

  const processSteps = [
    { num: '1', title: 'Brand Consultation', desc: 'Deep dive into your brand vision, target market, and product requirements to create a customized branding strategy.' },
    { num: '2', title: 'Design & Development', desc: 'Create brand assets, packaging designs, and product specifications that align with your brand identity.' },
    { num: '3', title: 'Production & Quality', desc: 'Manufacture your branded categories with strict quality control and brand consistency across all items.' },
    { num: '4', title: 'Launch & Support', desc: 'Deliver your branded categories with complete documentation and ongoing support for brand growth.' }
  ];

  const partners = [
    { title: 'Brand Expertise', desc: '2+ years of experience building successful brands across multiple product categories and global markets.', icon: <Award size={32} /> },
    { title: 'Creative Excellence', desc: 'Talented design team that understands brand psychology and creates compelling visual identities.', icon: <PenTool size={32} /> },
    { title: 'Scalable Solutions', desc: 'Flexible manufacturing and branding solutions that grow with your business from startup to enterprise.', icon: <TrendingUp size={32} /> },
    { title: 'Partnership Approach', desc: 'We work as your branding partner, invested in your success and committed to your brand growth.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="pl-page">
      
      {/* Page Header */}
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="page-header" data-aos="fade-up">
          <span className="pl-tag" style={{
            display: 'inline-block', padding: '6px 16px', background: 'transparent', 
            border: '1px solid #4a3e35', color: '#c8956c', fontSize: '0.75rem', 
            fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px'
          }}>Service Directory</span>
          <h1 className="page-title">Private Labeling & OEM</h1>
          <p className="page-subtitle">
            End-to-end private label services. Manufacture high-quality products under your brand name with complete customization options, bespoke packaging, and retail-ready solutions.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="pl-stats-section">
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

      {/* Comprehensive Branding Solutions */}
      <section className="pl-offer-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Comprehensive Branding Solutions</h2>
            <p>End-to-End Private Label Services</p>
          </div>
          <div className="offer-grid">
            {solutions.map((solution, index) => (
              <div className="offer-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="offer-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branding Services */}
      <section className="pl-services-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Branding Services</h2>
            <p>Complete Solutions for Brand Building</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-tag">SERVICE</span>
                </div>
                <h3>{service.title}</h3>
                <h4>{service.subtitle}</h4>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={16} /> {feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="pl-btn-outline">{service.btnText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Solutions */}
      <section className="pl-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Packaging Solutions</h2>
            <p>Customized for Your Brand Needs</p>
          </div>
          <div className="advantage-grid">
            {packagingSolutions.map((item, index) => (
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

      {/* Brand Identity Services */}
      <section className="pl-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Brand Identity Services</h2>
            <p>Complete Brand Development Support</p>
          </div>
          <div className="advantage-grid">
            {identityServices.map((item, index) => (
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

      {/* Your Brand Growth Advantage */}
      <section className="pl-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Your Brand Growth Advantage</h2>
            <p>Grow Your Brand Globally with Exclusive categories</p>
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

      {/* Success Stories */}
      <section className="pl-testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Success Stories</h2>
            <p>Brands We've Helped Build</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-icon">{testimonial.icon}</div>
                <div className="testimonial-content">
                  <p className="testimonial-desc">{testimonial.desc}</p>
                  <h4>{testimonial.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pl-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Brand Development Process</h2>
            <p>Simple Steps to Launch Your Brand</p>
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
      <section className="pl-cta-section" data-aos="zoom-in">
        <div className="pl-cta-inner">
          <h2>Ready To Build Your Brand?</h2>
          <p>Partner with us to create exclusive branded categories that stand out in the global marketplace. From white-label manufacturing to customized packaging and retail-ready solutions, we provide everything you need to grow your brand globally with exclusive, high-quality categories.</p>
          <Link to="/contact" className="pl-btn">Start Your Brand Journey</Link>
        </div>
      </section>

      {/* Why Brands Choose Our Services */}
      <section className="pl-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Brands Choose Our Services</h2>
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

export default PrivateLabeling;
