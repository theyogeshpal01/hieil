import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  DollarSign, 
  Gift, 
  BarChart2, 
  UserPlus, 
  Share2, 
  TrendingUp,
  X
} from 'lucide-react';
import Swal from 'sweetalert2';

const AffiliateProgram = () => {
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
        service: 'Affiliate Program'
      });
      Swal.fire({
        title: 'Success!',
        text: 'Your affiliate program inquiry has been submitted. We will contact you soon.',
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
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      
      {/* Program Benefits */}
      <section className="py-10 pb-20 bg-[#15110F] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
            <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
            <h1 className="font-serif text-[3.5rem] font-normal text-white mb-6 uppercase tracking-[1px] max-md:text-[2.5rem]">Earn with HIEIL Partner <span style={{ color: 'var(--color-brand-base)' }}>Program</span></h1>
            <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
              Join our affiliate program. Make money from your network. We give you commissions help when you need it and marketing tools that work well. These tools help you sell our handcrafted products and earn money. Join our affiliate program. Make money from your network. We give you commissions help when you need it and marketing tools that work well. These tools help you sell our handcrafted products and earn money. 
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-md:grid-cols-1">
            {benefits.map((benefit, index) => (
              <div className="bg-[#15110F] border border-[#2c241c] p-10 text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]">{benefit.icon}</div>
                <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">{benefit.title}</h3>
                <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[100px] bg-[#1C1713]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">How <span style={{ color: 'var(--color-brand-base)' }}>It Works</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Three Simple Steps to Success</p>
          </div>
          <div className="flex justify-between relative max-w-[1000px] mx-auto max-md:flex-col max-md:gap-10 before:content-[''] before:absolute before:top-[40px] before:left-0 before:right-0 before:h-[1px] before:bg-[#2c241c] before:z-10 max-md:before:hidden">
            {processSteps.map((step, index) => (
              <div className="flex-1 text-center relative z-20 px-[15px] group max-md:flex max-md:text-left max-md:items-center max-md:gap-5" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="w-[80px] h-[80px] mx-auto mb-[30px] bg-[#15110F] border border-[#c8956c] text-[#c8956c] flex items-center justify-center font-serif text-[2rem] transition-all duration-400 ease-in-out group-hover:bg-[#c8956c] group-hover:text-[#15110F] group-hover:shadow-[0_0_30px_rgba(194,163,115,0.2)] max-md:m-0 max-md:shrink-0 max-md:w-[60px] max-md:h-[60px] max-md:text-[1.5rem]">0{step.num}</div>
                <div>
                  <div className="flex items-center justify-center gap-3 text-[#c8956c] mb-[15px] max-md:justify-start">
                    {step.icon}
                    <h4 className="font-serif text-[1.5rem] text-white m-0">{step.title}</h4>
                  </div>
                  <p className="text-[#b5aaa0] text-[0.95rem] leading-[1.6]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] px-5 bg-gradient-to-br from-[#1C1713] to-[#15110F] text-center border-t border-[#2c241c]" data-aos="zoom-in">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[3rem] text-white mb-5 font-normal max-md:text-[2.2rem]">Ready To Start <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Journey?</span></h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">Join affiliates who are already making money with HIEIL.They are successful. You can be too.Start your partnership today with HIEIL. Earn more.HIEIL is a brand that people really love.You can grow your earnings with them.
</p>
          <button onClick={() => setShowModal(true)} className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Register As An Affiliate</button>
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
              <h3 className="font-serif text-[2rem] text-white mb-2 text-center">Register As An Affiliate</h3>
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
                  <label className="text-white text-[0.85rem] font-medium">Affiliate Experience *</label>
                  <textarea name="message" required value={formData.message} onChange={handleInputChange} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c] min-h-[120px] resize-y" placeholder="Tell us about your audience and how you plan to promote..."></textarea>
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

export default AffiliateProgram;
