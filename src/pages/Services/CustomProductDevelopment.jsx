import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Users, TrendingUp, ShieldCheck, Target, Globe, Star, Clock, HeartHandshake, Search, Scale, Leaf } from 'lucide-react';

const CustomProductDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    { title: 'Market Uniqueness', icon: <Star size={24} />, desc: 'Get categories that are unique to your market and help you stand out from competitors with exclusive designs.' },
    { title: 'Brand Alignment', icon: <Target size={24} />, desc: 'Every product perfectly matches your brand identity, values, and target audience preferences.' },
    { title: 'International Standards', icon: <Globe size={24} />, desc: 'categories designed to meet international quality standards and market-specific regulations.' },
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
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      
      {/* Page Title & Offer Section integrated */}
      <section className="py-10 pb-20 bg-[#15110F] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
            <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
            <h1 className="text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-6">Custom Product <span style={{ color: 'var(--color-brand-base)' }}>Development</span></h1>
            <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
              Every market has unique demands. That's why we offer specialized custom product development services designed to meet your specific business needs. From concept to completion, we create categories that perfectly align with your brand identity.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            <div className="bg-[#15110F] border border-[#2c241c] p-10 text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="100">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><Palette size={32} /></div>
              <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">Tailor-made Designs</h3>
              <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">Custom designs, sizes, and finishes crafted according to your brand needs. We adapt every detail to match your vision and specifications perfectly.</p>
            </div>
            <div className="bg-[#15110F] border border-[#2c241c] p-10 text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="200">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><Users size={32} /></div>
              <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">Professional Collaboration</h3>
              <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">Work directly with architects, interior designers, and retailers to create exclusive collections that set your brand apart in the marketplace.</p>
            </div>
            <div className="bg-[#15110F] border border-[#2c241c] p-10 text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="300">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><TrendingUp size={32} /></div>
              <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">Trend-based Designs</h3>
              <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">Seasonal and trend-based designs that match international market preferences, keeping your product line fresh and competitive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-[140px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Your <br /> <span style={{ color: 'var(--color-brand-base)' }}>Competitive Advantage</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Why Choose Custom Product Development?</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {advantages.map((adv, index) => (
              <div className="bg-[#15110F] border border-[#2c241c] rounded-[4px] p-[2.5rem_2rem] flex flex-col items-start text-left transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="text-[#c8956c] mb-6">{adv.icon}</div>
                <div>
                  <h4 className="font-serif text-[1.15rem] font-medium text-white mb-4 uppercase tracking-[1px]">{adv.title}</h4>
                  <p className="font-sans text-[15.2px] text-[#b5aaa0] leading-[1.8] m-0">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-[80px] bg-[#15110F] border-y border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5" data-aos="fade-up">
          <div className="text-center mb-[60px]">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Product <span style={{ color: 'var(--color-brand-base)' }}>categories</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Custom Development Across Multiple categories</p>
          </div>
          <div className="text-center p-[60px] bg-[rgba(28,23,19,0.4)] border border-dashed border-[#4a3e35]">
            <Search size={48} className="text-[#c8956c] opacity-50 mb-5 inline-block" />
            <p className="text-[#b5aaa0] text-[1.1rem]">No custom categories found at the moment.</p>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-[100px] bg-[#1C1713]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Our <br /> <span style={{ color: 'var(--color-brand-base)' }}>Development Process</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">From Concept to Market-Ready categories</p>
          </div>
          <div className="flex justify-between relative max-w-[1000px] mx-auto max-md:flex-col max-md:gap-10 before:content-[''] before:absolute before:top-[40px] before:left-0 before:right-0 before:h-[1px] before:bg-[#2c241c] before:z-10 max-md:before:hidden">
            {processSteps.map((step, index) => (
              <div className="flex-1 text-center relative z-20 px-[15px] group max-md:flex max-md:text-left max-md:items-center max-md:gap-5" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="w-[80px] h-[80px] mx-auto mb-[30px] bg-[#15110F] border border-[#c8956c] text-[#c8956c] flex items-center justify-center font-serif text-[2rem] transition-all duration-400 ease-in-out group-hover:bg-[#c8956c] group-hover:text-[#15110F] group-hover:shadow-[0_0_30px_rgba(194,163,115,0.2)] max-md:m-0 max-md:shrink-0 max-md:w-[60px] max-md:h-[60px] max-md:text-[1.5rem]">{step.num}</div>
                <div>
                  <h4 className="font-serif text-[1.5rem] text-white mb-[15px]">{step.title}</h4>
                  <p className="text-[#b5aaa0] text-[0.95rem] leading-[1.6]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Why Partner <br /> <span style={{ color: 'var(--color-brand-base)' }}>With Us?</span></h2>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {partners.map((partner, index) => (
              <div className="p-[40px_30px] text-center bg-transparent border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(28,23,19,0.4)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-[25px] flex justify-center">{partner.icon}</div>
                <h4 className="font-sans text-[1.1rem] text-white mb-[15px] uppercase tracking-[1px]">{partner.title}</h4>
                <p className="text-[#8c8279] text-[0.95rem] leading-[1.6]">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] px-5 bg-gradient-to-br from-[#1C1713] to-[#15110F] text-center border-t border-[#2c241c]" data-aos="zoom-in">
        <div className="max-w-[800px] mx-auto">
          <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-5'>Ready To Develop <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Unique Product Line</span>?</h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">Let's collaborate to create categories that set your brand apart in the marketplace. Our expert team is ready to bring your vision to life with custom solutions tailored to your specific needs.</p>
          <Link to="/contact" className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Start Your Custom Project</Link>
        </div>
      </section>

    </div>
  );
};

export default CustomProductDevelopment;
