import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  TrendingUp,
  X
} from 'lucide-react';
import Swal from 'sweetalert2';

const QualityAssurance = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/service-inquiries`, {
        ...formData,
        service: 'Quality Assurance'
      });
      Swal.fire({
        title: 'Success!',
        text: 'Your quality assurance inquiry has been submitted. We will contact you soon.',
        icon: 'success',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
      setShowModal(false);
      setFormData({ customerName: '', email: '', phone: '', location: '', message: '' });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to submit inquiry. Please try again.',
        icon: 'error',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
    }
    setIsSubmitting(false);
  };

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
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      
      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-5 mt-[40px]">
        <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
          <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
          <h1 className="font-serif text-[3.5rem] font-normal text-white mb-6 uppercase tracking-[1px] max-md:text-[3.5rem] max-sm:text-[2.5rem]">Quality <span style={{ color: 'var(--color-brand-base)' }}>Assurance</span></h1>
          <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto whitespace-pre-line">
            Uncompromising standards and strict testing to ensure every product meets the global standards.

We protect your brand reputation with execution.

Our products are tested thoroughly.

This way we ensure they are of the quality.

We care about your brand image.

So we do everything flawlessly.

Every product meets benchmarks.

Quality is our priority.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="pb-[60px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-4 max-[992px]:grid-cols-2 max-[576px]:grid-cols-1 gap-[30px] max-[992px]:gap-0 bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] p-[40px]">
            {stats.map((stat, index) => (
              <div className="text-center border-r border-[#2c241c] last:border-r-0 max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:border-[#2c241c] max-[992px]:py-[30px] max-[992px]:px-0 max-[992px]:even:border-l max-[992px]:even:border-[#2c241c] max-[576px]:border-l-0 max-[576px]:border-b max-[576px]:border-[#2c241c] max-[576px]:last:border-b-0" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="font-serif text-[2.5rem] color-[#c8956c] text-[#c8956c] mb-[15px] font-normal">{stat.value}</h3>
                <p className="text-white font-sans text-[0.8rem] uppercase tracking-[1px] m-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-[40px] pb-[80px] bg-[#15110F] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Our <br /> <span style={{ color: 'var(--color-brand-base)' }}>Quality Framework</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Comprehensive Quality Management</p>
          </div>
          <div className="grid grid-cols-2 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {standards.map((standard, index) => (
              <div className="bg-[#15110F] border border-[#2c241c] p-[40px] text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-1.5 group rounded-none" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]">{standard.icon}</div>
                <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">{standard.title}</h3>
                <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Checks */}
      <section className="py-[80px] pb-[120px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)] border-t border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Detailed <br /> <span style={{ color: 'var(--color-brand-base)' }}>Quality Checks</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Rigorous Testing Protocols</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {qualityChecks.map((check, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-5">{check.icon}</div>
                <div className="adv-content">
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{check.title}</h4>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{check.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[100px] bg-[#1C1713]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Quality <br /> <span style={{ color: 'var(--color-brand-base)' }}>Control Process</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Four Steps to Perfection</p>
          </div>
          <div className="flex justify-between relative max-w-[1000px] mx-auto max-md:flex-col max-md:gap-10 before:content-[''] before:absolute before:top-[40px] before:left-0 before:right-0 before:h-[1px] before:bg-[#2c241c] before:z-10 max-md:before:hidden">
            {processSteps.map((step, index) => (
              <div className="flex-1 text-center relative z-20 px-[15px] group max-md:flex max-md:text-left max-md:items-center max-md:gap-5" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="w-[80px] h-[80px] mx-auto mb-[30px] bg-[#15110F] border border-[#c8956c] text-[#c8956c] flex items-center justify-center font-serif text-[2rem] transition-all duration-400 ease-in-out group-hover:bg-[#c8956c] group-hover:text-[#15110F] group-hover:shadow-[0_0_30px_rgba(194,163,115,0.2)] max-md:m-0 max-md:shrink-0 max-md:w-[60px] max-md:h-[60px] max-md:text-[1.5rem]">{step.num}</div>
                <div>
                  <h4 className="font-serif text-[1.5rem] text-white mb-[15px]">{step.title}</h4>
                  <p className="text-[#b5aaa0] text-[0.95rem] leading-[1.6] m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Advantage */}
      <section className="py-[180px] pb-[120px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>The <br /> <span style={{ color: 'var(--color-brand-base)' }}>QA Advantage</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Why Our Quality Assurance Matters</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {advantages.map((adv, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="text-[#c8956c] mb-5">{adv.icon}</div>
                <div>
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{adv.title}</h4>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] px-5 bg-gradient-to-br from-[#1C1713] to-[#15110F] text-center border-t border-[#2c241c]" data-aos="zoom-in">
        <div className="max-w-[800px] mx-auto">
          <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-5'>Experience <br /> <span style={{ color: 'var(--color-brand-base)' }}>Premium Quality</span></h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">Partner with us. Feel secure, with our high-quality checks. We safeguard your brand image by providing top-notch products that show excellence. 
</p>
          <button onClick={() => setShowModal(true)} className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Discuss Your Requirements</button>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Why Partners <br /> <span style={{ color: 'var(--color-brand-base)' }}>Trust Our Quality</span></h2>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {partners.map((partner, index) => (
              <div className="p-[40px_30px] text-center bg-transparent border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(28,23,19,0.4)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-[25px] flex justify-center">{partner.icon}</div>
                <h4 className="font-sans text-[1.1rem] text-white mb-[15px] uppercase tracking-[1px]">{partner.title}</h4>
                <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-5 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-[#1C1713] w-full max-w-[600px] rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-[#2c241c] relative animate-[slideUp_0.4s_ease-out]">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-transparent border-none text-[#b5aaa0] hover:text-[#c8956c] cursor-pointer transition-colors duration-200"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h3 className="font-serif text-[2rem] text-white mb-2 text-center">Discuss Your Requirements</h3>
              <p className="text-[#b5aaa0] text-center mb-6 text-[0.95rem]">Fill out the details below and we'll get in touch with you shortly.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Name *</label>
                    <input type="text" name="customerName" required value={formData.customerName} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="Your Name" />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="Your Email" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Phone *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="Phone Number" />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="City, Country" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-white text-[0.85rem] font-medium">Quality Assurance Needs *</label>
                  <textarea name="message" required value={formData.message} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c] min-h-[120px] resize-y" placeholder="Tell us about your requirements..."></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="mt-2 bg-[#c8956c] text-[#110e0c] border border-[#c8956c] rounded py-3 px-6 font-semibold text-[0.95rem] tracking-[1px] uppercase cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-[#c8956c] disabled:opacity-50">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default QualityAssurance;
