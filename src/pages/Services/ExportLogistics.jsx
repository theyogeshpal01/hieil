import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../config/api';
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
  Search,
  X
} from 'lucide-react';
import Swal from 'sweetalert2';

const ExportLogistics = () => {
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
      await api.post('/service-inquiries', {
        ...formData,
        service: 'Export Quote'
      });
      Swal.fire({
        title: 'Success!',
        text: 'Your export quote inquiry has been submitted. We will contact you soon.',
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
    { value: '500+', label: 'Global Exports' },
    { value: '100+', label: 'Local Partners' },
    { value: '2+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' }
  ];

  const solutions = [
    { title: 'Export Documentation', icon: <FileText size={32} />, desc: 'We handle all export documentation including invoices, packing lists, certificates of origin, and export compliance paperwork.' },
    { title: 'Quality Assurance', icon: <ShieldCheck size={32} />, desc: 'Rigorous quality control and inspection processes to ensure categories meet international export standards.' },
    { title: 'Export Packaging', icon: <Box size={32} />, desc: 'Professional export packaging solutions that ensure your categories are ready for international shipping.' },
    { title: 'Global Markets', icon: <Globe size={32} />, desc: 'Export to USA, Europe, Middle East, Asia, and more with our established international market presence.' }
  ];

  const documents = [
    { title: 'Commercial Invoice', desc: 'Detailed invoice specifying goods, values, and terms of sale for customs valuation.', icon: <FileText size={32} /> },
    { title: 'Packing List', desc: 'Comprehensive list detailing contents, weights, and dimensions of each package.', icon: <Box size={32} /> },
    { title: 'Certificate Of Origin', desc: 'Official document certifying the country of manufacture for your categories.', icon: <Globe size={32} /> },
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
    { title: 'Global Presence', desc: 'Established export relationships with buyers and distributors in 50+ countries worldwide.', icon: <Globe size={32} /> },
    { title: 'Quality Assurance', desc: 'Rigorous quality control and export standards compliance for international market requirements.', icon: <ShieldCheck size={32} /> },
    { title: 'Trusted Partner', desc: 'Reliable export services with transparent processes and dedicated support for international trade.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      
      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-5 mt-[40px]">
        <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
          <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
          <h1 className="font-serif text-[3.5rem] font-normal text-white mb-6 uppercase tracking-[1px] max-md:text-[3.5rem] max-sm:text-[2.5rem]">Global Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>& Logistics</span></h1>
          <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
          We help you sell your products in countries. Our team takes care of making sure your products are quality and packaged well for shipping. We also do all the paperwork for customs. Get your products to people all around the world. We handle your products every step of the way from quality checks, to getting them delivered to markets. 

          </p>
        </div>
      </div>

      {/* Export Solutions */}
      <section className="py-[80px] pb-[100px] bg-[radial-gradient(circle_at_center_top,rgba(28,23,19,1)_0%,#15110F_100%)] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Export <span style={{ color: 'var(--color-brand-base)' }}>Solutions</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Complete Export Management</p>
          </div>
          <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {solutions.map((solution, index) => (
              <div className="relative bg-gradient-to-br from-[rgba(35,28,24,0.8)] to-[rgba(20,15,12,0.9)] backdrop-blur-[12px] border border-[rgba(194,163,115,0.1)] p-[30px] text-center transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[rgba(194,163,115,0.3)] hover:shadow-[0_15px_40px_rgba(194,163,115,0.08)] hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[rgba(40,32,28,0.9)] hover:to-[rgba(20,15,12,0.95)] group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#c8956c] before:to-transparent before:opacity-0 before:transition-opacity before:duration-400 before:ease-in-out group-hover:before:opacity-100" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute -top-2.5 -right-2.5 font-serif text-[6rem] text-[rgba(194,163,115,0.03)] font-bold pointer-events-none z-0 transition-all duration-400 ease-in-out group-hover:text-[rgba(194,163,115,0.06)] group-hover:scale-105">0{index + 1}</div>
                <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-all duration-400 ease-in-out relative z-10 mx-auto group-hover:bg-[rgba(194,163,115,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(194,163,115,0.2)]">{solution.icon}</div>
                <h3 className="font-serif text-[1.25rem] font-bold uppercase tracking-[1px] text-white mb-3 relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#c8956c]">{solution.title}</h3>
                <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0 relative z-10">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-[100px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>Documentation</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Complete Paperwork Handling</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {documents.map((doc, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-5">{doc.icon}</div>
                <div className="adv-content">
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{doc.title}</h4>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Network */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Global <br /> <span style={{ color: 'var(--color-brand-base)' }}>Delivery Network</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Serving Customers Worldwide</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {deliveryNetworks.map((network, index) => (
              <div className="p-[40px_30px] text-left bg-transparent border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(28,23,19,0.4)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h4 className="font-sans text-[1.1rem] text-white mb-[15px] uppercase tracking-[1px]">{network.title}</h4>
                <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Export Services */}
      <section className="py-[100px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Why Choose <br /> <span style={{ color: 'var(--color-brand-base)' }}>Our Export Services</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Professional Export Management</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {advantages.map((adv, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="text-[#c8956c] mb-5">{adv.icon}</div>
                <div className="adv-content">
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{adv.title}</h4>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-[100px] bg-[#1C1713]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Export <span style={{ color: 'var(--color-brand-base)' }}>Process</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Four Steps to Global Markets</p>
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

      {/* CTA Section */}
      <section className="py-[100px] px-5 bg-gradient-to-br from-[#1C1713] to-[#15110F] text-center border-t border-[#2c241c]" data-aos="zoom-in">
        <div className="max-w-[800px] mx-auto">
          <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-5'>Ready To Export <br /> <span style={{ color: 'var(--color-brand-base)' }}>Globally?</span></h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">When you work with us you get help with sending things to other countries. We take care of all the paperwork. Make sure everything is okay. This way you can focus on making your business bigger. We do all the work for export. Make sure we follow all the rules, in other countries. You can get a quote for your export needs today.</p>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">We handle all the export procedures so you do not have to worry about them. You can just think about growing your business. We will take care of the rest. Our export services are complete. We make sure everything is of good quality.</p>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">Get your personalized export quote from us today. Let us help you with your export needs.</p>
          <button onClick={() => setShowModal(true)} className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Get Export Quote</button>
        </div>
      </section>

      {/* Why Choose Our Export Services (Bottom) */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Why Choose <br /> <span style={{ color: 'var(--color-brand-base)' }}>Our Export Services</span></h2>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {partners.map((partner, index) => (
              <div className="p-[40px_30px] text-left bg-transparent border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(28,23,19,0.4)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
              <h3 className="font-serif text-[2rem] text-white mb-2 text-center">Get Export Quote</h3>
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
                  <label className="text-white text-[0.85rem] font-medium">Export Requirements *</label>
                  <textarea name="message" required value={formData.message} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c] min-h-[120px] resize-y" placeholder="Tell us about your export logistics needs..."></textarea>
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

export default ExportLogistics;
