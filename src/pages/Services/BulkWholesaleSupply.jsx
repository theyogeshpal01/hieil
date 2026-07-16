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
              We do orders, lots of them and we make sure everything is good every time. We have been doing this for a time so we know what people need when they buy a lot of things. We help them get what they need when they need it so they have stuff in stock and their customers are happy. We are good, at getting things from one place to another. That helps our customers a lot. Big orders are what we do. We do them well. 
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
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Extensive Range for All Your Business Needs</p>
          </div>
          <div className="flex flex-col gap-10">
            {/* Category 1 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/bluepottarycategory.png" alt="Handcrafted Blue Pottery" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[#c8956c] text-[#15110F] py-1.5 px-3 rounded-[30px] font-normal text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Blue Pottery categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted Blue Pottery is an old way of making things that people like because of the bright blue and turquoise patterns. People who are very good, at making things use mix of quartz, glass and things they find in nature to create these things. They make plates, bowls, tiles and things that look nice and these things show how rich our past is, how well they are made and how beautiful Handcrafted Blue Pottery is. Handcrafted Blue Pottery is something that people will always like because it is very pretty. </p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/metalcategory.png" alt="Handcrafted Metal categories" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[#c8956c] text-[#15110F] py-1.5 px-3 rounded-[30px] font-normal text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Metal categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted metal things are made by workers who know what they are doing. They use metals, like brass, copper, iron and aluminum to make these things. The handcrafted metal categories include things to look at, sculptures things you use to eat with and stuff to make your home look nice. Each handcrafted metal product shows that it was made with care will last a time and looks really nice. The handcrafted metal categories are special because of the way they are made how strong they are and how pretty the handcrafted metal things look. </p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/stonecategory.png" alt="Handcrafted Stone categories" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[#c8956c] text-[#15110F] py-1.5 px-3 rounded-[30px] font-normal text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Stone categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted stone categories are really pretty because they are carved by artisans who use natural stones like marble, sandstone and granite. <br />
                The handcrafted stone categories include things, like sculptures and tabletops and decorative pieces and architectural elements. <br />
                Each handcrafted stone product is special because it shows craftsmanship and it is durable and it has a timeless elegance that people like. <br />
                The handcrafted stone categories are made to last. They look nice for a very long time.

                </p>
                <Link to="/contact" className="self-start inline-block py-3 px-[30px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)]">Request Catalog</Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="flex items-stretch bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] max-[992px]:flex-col group" data-aos="fade-up">
              <div className="flex-[0_0_50%] relative overflow-hidden max-[992px]:min-h-[300px]">
                <img src="/woodencategory.png" alt="Handcrafted Wooden categories" className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" />
                <span className="absolute top-5 right-5 bg-[#c8956c] text-[#15110F] py-1.5 px-3 rounded-[30px] font-normal text-[0.85rem] uppercase tracking-[1px]">MOQ: 100 pcs</span>
              </div>
              <div className="flex-[0_0_50%] p-[50px_40px] flex flex-col justify-center">
                <h3 className="font-serif text-[2rem] text-white mb-5 font-normal">Handcrafted Wooden categories</h3>
                <p className="text-[#b5aaa0] leading-[1.8] mb-[30px]">Handcrafted wooden categories are made with care by artisans. They use quality natural wood. <br />
These categories include things, like items, furniture, kitchenware and home decor pieces made from wood. <br />
Each wooden item shows craftsmanship. <br />
It also shows techniques and the natural beauty of wood. <br />
The artisans make sure every item is made with attention to detail. <br />
They use wood to create beautiful things for the home.
</p>
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
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Why Partner with Us for Wholesale Supply?</p>
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
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Streamlined for Your Convenience</p>
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
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">We want to work with you to make sure you have a supply of products for your customers. This means you will always have items in stock and they will always be of good quality. Let us talk about how we can help your business grow with the different products we offer and the different ways we can sell them to you in bulk. We have a lot of products. We are happy to work with you to find a wholesale solution that is right, for you and your customers. </p>
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
