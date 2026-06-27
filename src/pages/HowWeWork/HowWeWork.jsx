import React, { useEffect } from 'react';
import './HowWeWork.css';
import { Link } from 'react-router-dom';
import { Phone, FileText, CheckCircle, Hammer, Package, Plane } from 'lucide-react';

const HowWeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Inquiry & Consultation',
      subtitle: 'Discovery',
      description: 'Begin your journey with us by sharing your requirements. Our team of experts will guide you through our extensive collection and help you select the perfect handcrafted pieces for your specific needs.',
      features: ['Detailed Consultation', 'Customization Options', 'Sample Requests', 'Timeline Planning'],
    },
    {
      number: '02',
      title: 'Detailed Quotation',
      subtitle: 'Estimation',
      description: 'Receive a comprehensive quotation outlining all costs, including product pricing, customization charges, packaging, and shipping. We ensure complete transparency with no hidden fees.',
      features: ['Transparent Pricing', 'Shipping Estimations', 'Flexible Terms', 'Cost Optimization'],
    },
    {
      number: '03',
      title: 'Approval & Secure Payment',
      subtitle: 'Confirmation',
      description: 'Once you approve the quotation, we\'ll send a formal order confirmation. Secure payments can be made through multiple channels, ensuring your financial safety at every step.',
      features: ['Secure Transactions', 'Multiple Channels', 'Order Verification', 'Digital Receipts'],
    },
    {
      number: '04',
      title: 'Artisan Production',
      subtitle: 'Crafting',
      description: 'Our skilled artisans begin crafting your order using traditional techniques passed down through generations. We maintain regular updates and maintain strict quality control.',
      features: ['Expert Craftsmanship', 'Quality Control', 'Progress Updates', 'Material Sourcing'],
    },
    {
      number: '05',
      title: 'Secure Packaging',
      subtitle: 'Protection',
      description: 'Each piece is carefully packaged using premium, eco-friendly materials to ensure it reaches you in perfect condition. We follow international standards for safe transport.',
      features: ['Custom Crating', 'Eco-Friendly Materials', 'Impact Resistance', 'Final Inspection'],
    },
    {
      number: '06',
      title: 'Global Shipping & Delivery',
      subtitle: 'Logistics',
      description: 'We partner with reliable logistics providers for timely worldwide delivery. Track your order in real-time and receive support for customs and documentation.',
      features: ['Global Delivery', 'Real-time Tracking', 'Customs Support', 'Safe Handover'],
    }
  ];

  const simpleWorkflow = [
    { title: 'Inquiry', desc: 'Expert consultation', icon: <Phone size={40} strokeWidth={1.5} /> },
    { title: 'Quotation', desc: 'Detailed pricing', icon: <FileText size={40} strokeWidth={1.5} /> },
    { title: 'Approval', desc: 'Secure payment', icon: <CheckCircle size={40} strokeWidth={1.5} /> },
    { title: 'Production', desc: 'Skilled crafting', icon: <Hammer size={40} strokeWidth={1.5} /> },
    { title: 'Packaging', desc: 'Safe wrapping', icon: <Package size={40} strokeWidth={1.5} /> },
    { title: 'Shipping', desc: 'Global delivery', icon: <Plane size={40} strokeWidth={1.5} /> }
  ];

  return (
    <div className="how-we-work-page">
      {/* Main Process Timeline */}
      <section className="hww-process-section">
        <div className="container">
          <div className="page-header" data-aos="fade-up">
            <span className="hww-tag">Service Directory</span>
            <h1 className="page-title">How We Work</h1>
            <p className="page-subtitle">
              Experience our dedicated approach to handcrafted excellence through these six simple steps. From initial consultation to global delivery, we ensure complete transparency and premium quality at every stage.
            </p>
          </div>
          <div className="hww-process-timeline">
            {processSteps.map((step, index) => (
              <div className={`process-card ${index % 2 === 0 ? 'left' : 'right'}`} key={step.number}>
                <div className="process-card-inner" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="process-number">{step.number}</div>
                  <div className="process-content">
                    <span className="process-subtitle">{step.subtitle}</span>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-desc">{step.description}</p>
                    <ul className="process-features">
                      {step.features.map((feature, i) => (
                        <li key={i}>
                          <span className="feature-dot"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {step.image && (
                  <div className="process-side-image" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                    <img src={step.image} alt={step.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Workflow Section */}
      <section className="hww-workflow-section">
        <div className="container">
          <h2 className="workflow-title" data-aos="fade-up">Our Simple Workflow</h2>
          <div className="workflow-grid">
            {simpleWorkflow.map((item, index) => (
              <div className="workflow-item" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="workflow-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hww-cta-section">
        <div className="hww-cta-content" data-aos="fade-up">
          <h2>Ready To Start Your Order?</h2>
          <p>
            Join hundreds of satisfied clients worldwide who trust us for authentic Indian handicrafts. Let's create something beautiful together.
          </p>
          <div className="hww-cta-buttons">
            <Link to="/contact" className="hww-btn primary-btn">Start Your Inquiry</Link>
            <Link to="/shop" className="hww-btn secondary-btn">Browse Collection</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
