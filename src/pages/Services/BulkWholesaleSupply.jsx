import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PackageOpen, TrendingUp, ShieldCheck, Target, Globe, Star, Clock, HeartHandshake, Search, Scale, Package, Users, Award, Box, ChevronRight } from 'lucide-react';

const BulkWholesaleSupply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '50+', label: 'Wholesale Partners' },
    { value: '1M+', label: 'categories Delivered' },
    { value: '2+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' }
  ];

  const advantages = [
    { title: 'Quality Consistency', icon: <ShieldCheck size={24} />, desc: 'Every product undergoes rigorous quality checks to ensure consistent standards across all bulk orders.' },
    { title: 'Reliable Delivery', icon: <Clock size={24} />, desc: 'Streamlined logistics and supply chain management ensure timely delivery of your wholesale orders.' },
    { title: 'Steady Inventory', icon: <Package size={24} />, desc: 'Maintain consistent stock levels with our reliable volume supply, preventing out-of-stock situations.' },
    { title: 'Partnership Approach', icon: <HeartHandshake size={24} />, desc: 'We work as your strategic partner, understanding your business needs and growing together.' },
    { title: 'Global Reach', desc: 'Experience in shipping to multiple countries with understanding of international trade requirements.' },
    { title: 'Dedicated Support', icon: <Users size={24} />, desc: 'Personal account managers and 24/7 customer support for all your wholesale business needs.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Complete visibility into pricing, documentation, and tracking for total peace of mind.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Ethical business practices with zero tolerance for corruption across all global operations.' }
  ];

  const processSteps = [
    { num: '1', title: 'Consultation', desc: 'Discuss your business needs, product requirements, and volume expectations with our wholesale experts.' },
    { num: '2', title: 'Quotation', desc: 'Receive detailed pricing, MOQ information, and delivery timelines tailored to your specific requirements.' },
    { num: '3', title: 'Order Placement', desc: 'Place your order with flexible payment terms and secure your production slot in our manufacturing schedule.' },
    { num: '4', title: 'Delivery', desc: 'Track your order through production and receive timely delivery with complete documentation support.' }
  ];

  const partners = [
    { title: 'Proven Track Record', desc: '2+ years of experience in wholesale supply with hundreds of satisfied business partners worldwide.', icon: <Award size={32} /> },
    { title: 'Scalable Production', desc: 'Manufacturing capabilities to handle orders from hundreds to hundreds of thousands of units.', icon: <TrendingUp size={32} /> },
    { title: 'Quality Assurance', desc: 'Stringent quality control processes ensure every product meets international standards and your expectations.', icon: <ShieldCheck size={32} /> },
    { title: 'Partnership Focus', desc: 'We invest in long-term relationships, providing support and flexibility to help your business grow.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      {/* What We Offer */}
      <section className="py-10 pb-20 bg-[#15110F] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
            <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
            <h1 className="text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-6">Scaling Your Business with Consistent <span style={{ color: 'var(--color-brand-base)' }}>Quality</span></h1>
            <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
              We specialize in handling large-scale bulk orders while maintaining uncompromised quality consistency. With years of experience in wholesale distribution, we understand the unique demands of volume business and provide reliable supply chain solutions that keep your inventory stocked and your customers satisfied.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            <div className="bg-[#15110F] border border-[#2c241c] p-[30px_20px] text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="100">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><TrendingUp size={40} /></div>
              <h3 className="font-serif text-[1.1rem] font-bold text-white mb-3 uppercase tracking-[1px]">Large-scale Production</h3>
              <p className="text-[#b5aaa0] leading-[1.5] text-[14px] m-0">Experienced in handling bulk orders of any size while maintaining consistent quality across all categories.</p>
            </div>
            <div className="bg-[#15110F] border border-[#2c241c] p-[30px_20px] text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="200">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><Box size={40} /></div>
              <h3 className="font-serif text-[1.1rem] font-bold text-white mb-3 uppercase tracking-[1px]">Wide Product Range</h3>
              <p className="text-[#b5aaa0] leading-[1.5] text-[14px] m-0">Rugs, Home Decor, Furniture, Brassware, Wall Art, and more - all available for wholesale purchase.</p>
            </div>
            <div className="bg-[#15110F] border border-[#2c241c] p-[30px_20px] text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="300">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><PackageOpen size={40} /></div>
              <h3 className="font-serif text-[1.1rem] font-bold text-white mb-3 uppercase tracking-[1px]">Flexible MOQ</h3>
              <p className="text-[#b5aaa0] leading-[1.5] text-[14px] m-0">Minimum Order Quantity tailored to support both emerging businesses and established distributors.</p>
            </div>
            <div className="bg-[#15110F] border border-[#2c241c] p-[30px_20px] text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group rounded-none" data-aos="fade-up" data-aos-delay="400">
              <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]"><Target size={40} /></div>
              <h3 className="font-serif text-[1.1rem] font-bold text-white mb-3 uppercase tracking-[1px]">Competitive Pricing</h3>
              <p className="text-[#b5aaa0] leading-[1.5] text-[14px] m-0">Wholesale rates that give you maximum margin while maintaining product quality and value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-[80px] bg-[#15110F] border-y border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Wholesale <br /> <span style={{ color: 'var(--color-brand-base)' }}>Product categories</span></h2>
            <p className="text-[1.1rem] text-white font-normal font-serif">Extensive Range for All Your Business Needs</p>
          </div>
          <div className="flex flex-col gap-10">
            {/* Category 1 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/jaipur.jpeg" alt="Handcrafted Blue Pottery" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[rgba(194,163,115,0.9)] text-[#15110F] py-1.5 px-3 rounded-[30px] font-semibold text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Blue Pottery categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted Blue Pottery is a traditional art form known for its vibrant blue and turquoise designs. Crafted by skilled artisans using a unique blend of quartz, glass, and natural materials, these pieces include plates, bowls, tiles, and decorative items, reflecting rich heritage, fine craftsmanship, and timeless artistic beauty.</p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/carousel4.png" alt="Handcrafted Metal categories" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[rgba(194,163,115,0.9)] text-[#15110F] py-1.5 px-3 rounded-[30px] font-semibold text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Metal categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted metal categories are skillfully created by experienced artisans using high-quality metals such as brass, copper, iron, and aluminum. These items include decorative pieces, sculptures, utensils, and home dÃ©cor accessories. Each product reflects traditional craftsmanship, durability, and artistic elegance.</p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/carousel2.png" alt="Handcrafted Stone categories" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[rgba(194,163,115,0.9)] text-[#15110F] py-1.5 px-3 rounded-[30px] font-semibold text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Stone categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted stone categories are beautifully carved by skilled artisans using natural stones such as marble, sandstone, and granite. These items include sculptures, tabletops, decorative pieces, and architectural elements. Each product reflects traditional craftsmanship, durability, and timeless elegance.</p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/carousel1.png" alt="Handcrafted Wooden categories" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[rgba(194,163,115,0.9)] text-[#15110F] py-1.5 px-3 rounded-[30px] font-semibold text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Wooden categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted wooden categories are carefully created by skilled artisans using high-quality natural wood. These categories include decorative items, furniture, kitchenware, and home dÃ©cor pieces. Each item reflects fine craftsmanship, traditional techniques, and natural beauty.</p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Advantage */}
      <section className="py-[100px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Your <span style={{ color: 'var(--color-brand-base)' }}>Business Advantage</span></h2>
            <p className="text-[1.1rem] text-white font-normal italic font-serif">Why Partner with Us for Wholesale Supply?</p>
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

      {/* Order Process */}
      <section className="py-[100px] bg-[#1C1713]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Simple <br /> <span style={{ color: 'var(--color-brand-base)' }}>Order Process</span></h2>
            <p className="text-[1.1rem] text-white font-normal italic font-serif">Streamlined for Your Convenience</p>
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

      {/* CTA Section */}
      <section className="py-[100px] px-5 bg-gradient-to-br from-[#1C1713] to-[#15110F] text-center border-t border-[#2c241c]" data-aos="zoom-in">
        <div className="max-w-[800px] mx-auto">
          <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-5 text-center'>Are You Ready To Scale <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Business?</span></h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">Partner with us for reliable bulk wholesale supply that ensures steady inventory and consistent quality for your customers. Let's discuss how we can support your growth with our extensive product range and flexible wholesale solutions.</p>
          <Link to="/services/wholesale/partnership-form" className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Start Wholesale Partnership</Link>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Why Wholesale <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partners Choose Us</span></h2>
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

    </div>
  );
};

export default BulkWholesaleSupply;
