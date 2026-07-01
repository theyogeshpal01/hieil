import React, { useEffect } from 'react';
import './AffiliateProgram.css';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Gift, 
  BarChart2, 
  UserPlus, 
  Share2, 
  TrendingUp 
} from 'lucide-react';

const AffiliateProgram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { title: 'Competitive Commission', desc: 'Earn high commission rates on every successful referral. Your earning potential is unlimited with HIEIL.', icon: <DollarSign size={40} /> },
    { title: 'Exclusive Offers', desc: 'Get access to special discounts and categories for your audience, helping you convert more leads.', icon: <Gift size={40} /> },
    { title: 'Real-time Tracking', desc: 'Monitor your performance with our dedicated affiliate dashboard and real-time reporting tools.', icon: <BarChart2 size={40} /> }
  ];

  const processSteps = [
    { num: '1', title: 'Sign Up', desc: "Apply to our affiliate program. It's quick, easy, and free to join our network.", icon: <UserPlus size={24} /> },
    { num: '2', title: 'Promote', desc: 'Share HIEIL categories with your unique link through your blog, social media, or network.', icon: <Share2 size={24} /> },
    { num: '3', title: 'Earn', desc: 'Collect commissions on every purchase made through your affiliate link.', icon: <TrendingUp size={24} /> }
  ];

  return (
    <div className="affiliate-page">
      

      {/* Program Benefits */}
      <section className="ap-offer-section">
        <div className="container">
          <div className="page-header" data-aos="fade-up">
            <span className="ap-tag">Service Directory</span>
            <h1 className="page-title">Earn with HIEIL Partner <span style={{ color: 'var(--color-brand-base)' }}>Program</span></h1>
            <p className="page-subtitle">
              Join our exclusive affiliate program and turn your network into a revenue stream. We offer competitive commissions, dedicated support, and high-converting marketing materials to help you succeed in promoting our premium handcrafted categories.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="offer-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="offer-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="ap-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How <br /> <span style={{ color: 'var(--color-brand-base)' }}>It Works</span></h2>
            <p>Three Simple Steps to Success</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-step" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="timeline-number">0{step.num}</div>
                <div className="timeline-content">
                  <div className="step-header">
                    {step.icon}
                    <h4>{step.title}</h4>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ap-cta-section" data-aos="zoom-in">
        <div className="ap-cta-inner">
          <h2>Ready To Start <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Journey</span>?</h2>
          <p>Join hundreds of successful affiliates who are already earning with HIEIL. Start your partnership today and grow your earnings with a brand that people love.</p>
          <Link to="/contact" className="ap-btn">Register As An Affiliate</Link>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgram;
