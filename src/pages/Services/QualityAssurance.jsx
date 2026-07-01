import React, { useEffect } from 'react';
import './QualityAssurance.css';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle, 
  Award, 
  ClipboardCheck, 
  Eye, 
  Settings, 
  Scale, 
  ThumbsUp, 
  FileText, 
  Target,
  Box,
  HeartHandshake,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';

const QualityAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '100%', label: 'Inspection Rate' },
    { value: '0', label: 'Compromise' },
    { value: '5+', label: 'Quality Stages' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  const standards = [
    { title: 'Material Inspection', icon: <Search size={40} />, desc: 'Thorough inspection of raw materials before production begins to ensure they meet our premium standards.' },
    { title: 'In-Process Control', icon: <Settings size={40} />, desc: 'Continuous monitoring during the manufacturing process to identify and correct any deviations immediately.' },
    { title: 'Final Inspection', icon: <Eye size={40} />, desc: 'Comprehensive final review of the finished categories against approved samples and specifications.' },
    { title: 'Packaging Check', icon: <Box size={40} />, desc: 'Verification of packaging materials and methods to ensure safe transit across global destinations.' }
  ];

  const qualityChecks = [
    { title: 'Dimensional Accuracy', desc: 'Precise measurement checks to ensure categories match required specifications and tolerances.', icon: <Scale size={32} /> },
    { title: 'Finish & Texture', desc: 'Detailed visual and tactile inspection of surfaces, coatings, and finishes.', icon: <CheckCircle size={32} /> },
    { title: 'Durability Testing', desc: 'Stress and load testing relevant to the product category to guarantee longevity.', icon: <ShieldCheck size={32} /> },
    { title: 'Aesthetic Review', desc: 'Assessment of color consistency, patterns, and overall visual appeal.', icon: <Target size={32} /> },
    { title: 'Functional Testing', desc: 'Ensuring all moving parts and intended functions operate smoothly and correctly.', icon: <Settings size={32} /> },
    { title: 'Compliance Verification', desc: 'Checking against international standards and specific client requirements.', icon: <ClipboardCheck size={32} /> }
  ];

  const advantages = [
    { title: 'Zero Defects Goal', icon: <Target size={24} />, desc: 'We strive for perfection in every batch, aiming to eliminate defects before shipping.' },
    { title: 'Expert Inspectors', icon: <Users size={24} />, desc: 'A dedicated team of quality control professionals with years of industry experience.' },
    { title: 'Detailed Reporting', icon: <FileText size={24} />, desc: 'Comprehensive inspection reports provided for transparency and record-keeping.' },
    { title: 'Consistent Output', icon: <ThumbsUp size={24} />, desc: 'Maintaining uniform quality across bulk orders, regardless of volume.' },
    { title: 'International Standards', desc: 'Adherence to global quality benchmarks suitable for export markets.' },
    { title: 'Continuous Improvement', icon: <TrendingUp size={24} />, desc: 'Regular review of our processes to enhance quality and efficiency continually.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Open communication regarding quality metrics and any potential issues.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Strict ethical guidelines ensuring unbiased and honest quality assessments.' }
  ];

  const processSteps = [
    { num: '1', title: 'Criteria Definition', desc: 'Establishing clear quality parameters based on product specifications and client expectations.' },
    { num: '2', title: 'Sample Approval', desc: 'Creating and approving a master sample that serves as the benchmark for bulk production.' },
    { num: '3', title: 'Production Monitoring', desc: 'Conducting random inline inspections to ensure the process stays true to the master sample.' },
    { num: '4', title: 'Pre-Shipment Inspection', desc: 'A final, rigorous check of the completed order before it is packed and dispatched.' }
  ];

  const partners = [
    { title: 'Uncompromising Standards', desc: 'We never cut corners. Our commitment to quality is the foundation of our reputation.', icon: <Award size={32} /> },
    { title: 'Risk Mitigation', desc: 'Thorough quality control minimizes the risk of returns, complaints, and brand damage.', icon: <ShieldCheck size={32} /> },
    { title: 'Brand Protection', desc: 'Delivering consistently high-quality categories helps protect and elevate your brand image.', icon: <CheckCircle size={32} /> },
    { title: 'Long-term Reliability', desc: 'Our dependable quality assurance processes make us a trusted long-term partner.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="qa-page">
      
      {/* Page Header */}
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="page-header" data-aos="fade-up">
          <span className="qa-tag" style={{
            display: 'inline-block', padding: '6px 16px', background: 'transparent', 
            border: '1px solid #4a3e35', color: '#c8956c', fontSize: '0.75rem', 
            fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px'
          }}>Service Directory</span>
          <h1 className="page-title">Quality <span style={{ color: 'var(--color-brand-base)' }}>Assurance</span></h1>
          <p className="page-subtitle">
            Uncompromising standards and rigorous testing protocols to ensure every single product meets the highest global benchmarks. We protect your brand reputation with flawless execution.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="qa-stats-section">
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

      {/* Quality Standards */}
      <section className="qa-offer-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our <br /> <span style={{ color: 'var(--color-brand-base)' }}>Quality Framework</span></h2>
            <p>Comprehensive Quality Management</p>
          </div>
          <div className="offer-grid">
            {standards.map((standard, index) => (
              <div className="offer-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="offer-icon">{standard.icon}</div>
                <h3>{standard.title}</h3>
                <p>{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Checks */}
      <section className="qa-advantage-section" style={{ borderTop: '1px solid #2c241c' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Detailed <br /> <span style={{ color: 'var(--color-brand-base)' }}>Quality Checks</span></h2>
            <p>Rigorous Testing Protocols</p>
          </div>
          <div className="advantage-grid">
            {qualityChecks.map((check, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="adv-icon">{check.icon}</div>
                <div className="adv-content">
                  <h4>{check.title}</h4>
                  <p>{check.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="qa-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Quality <br /> <span style={{ color: 'var(--color-brand-base)' }}>Control Process</span></h2>
            <p>Four Steps to Perfection</p>
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

      {/* Business Advantage */}
      <section className="qa-advantage-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>The <br /> <span style={{ color: 'var(--color-brand-base)' }}>QA Advantage</span></h2>
            <p>Why Our Quality Assurance Matters</p>
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

      {/* CTA Section */}
      <section className="qa-cta-section" data-aos="zoom-in">
        <div className="qa-cta-inner">
          <h2>Experience <br /> <span style={{ color: 'var(--color-brand-base)' }}>Premium Quality</span></h2>
          <p>Partner with us and experience the peace of mind that comes with reliable, top-tier quality assurance. We protect your brand reputation by delivering categories that speak of excellence.</p>
          <Link to="/contact" className="qa-btn">Discuss Your Requirements</Link>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="qa-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Partners <br /> <span style={{ color: 'var(--color-brand-base)' }}>Trust Our Quality</span></h2>
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

export default QualityAssurance;
