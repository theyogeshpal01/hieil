import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, PenTool, Camera, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('http://localhost:3000/api/testimonials')
      .then(res => setTestimonials(res.data))
      .catch(err => console.error(err));
  }, []);

  const stats = [
    { value: '100%', label: 'Customizations' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  // Placeholder for brand logos
  const brands = [
    'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'
  ];

  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)] text-white pt-[120px] px-5 pb-[100px] text-center relative border-b border-[#2c241c]">
        <div className="max-w-[800px] mx-auto relative z-[2]" data-aos="fade-up">
          <span className="inline-block py-1.5 px-4 bg-transparent border border-[#4a3e35] text-[#c8956c] text-[0.75rem] font-semibold tracking-[3px] uppercase mb-[30px] rounded-[50px]">Testimonials</span>
          <h1 className="font-serif text-[3.5rem] font-normal mb-6 leading-[1.1] text-white max-md:text-[3.5rem] uppercase tracking-[1px]">What Our Customers <span style={{ color: 'var(--color-brand-base)' }}>Say</span></h1>
          <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[700px] mx-auto">
            Discover why thousands of customers trust HIEIL for their handicraft needs.They have helped homeowners, interior designers and businesses.These customers have transformed their spaces with HIEIL handmade products and great services.Many customers have shared their feedback.Homeowners and businesses read these testimonials to know more, about HIEIL.They see how HIEIL handmade categories and services are exceptional.HIEILs customers are very happy with their handicraft needs met.They trust HIEIL for all their handicraft requirements.

          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-[100px] pb-[100px] bg-[#15110F] relative z-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-center gap-[40px] flex-wrap max-md:gap-5">
            {stats.map((stat, index) => (
              <div className="bg-[rgba(21,17,15,0.95)] backdrop-blur-[10px] py-[40px] px-[60px] border border-[#2c241c] shadow-[0_20px_40px_rgba(0,0,0,0.6)] text-center w-[380px] transition-all duration-300 ease-in-out hover:border-[#4a3e35] hover:-translate-y-[5px] max-md:min-w-full" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="font-serif text-[2.5rem] font-normal text-[#c8956c] mb-[5px]">{stat.value}</h3>
                <p className="text-[#b5aaa0] font-medium text-[0.8rem] tracking-[1px] uppercase m-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-[60px] pb-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial._id || idx} className="max-w-[800px] mx-auto bg-[#1C1713] py-[60px] px-[80px] max-[992px]:px-[40px] max-md:py-[40px] max-md:px-[20px] border border-[#2c241c] text-center relative transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:shadow-[0_10px_50px_rgba(194,163,115,0.05)] mb-[40px]" data-aos="zoom-in">
              <Quote className="text-[#c8956c] opacity-[0.15] absolute top-[40px] left-[40px] max-md:hidden" size={80} />
              <div className="text-[#c8956c] mb-[40px] flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill={i < (testimonial.rating || 5) ? "currentColor" : "none"} stroke={i < (testimonial.rating || 5) ? "currentColor" : "#dddddd"} />
                ))}
              </div>
              <p className="font-serif text-[1.5rem] text-white leading-[1.6] italic font-light mb-[40px] relative z-1 max-md:text-[1.4rem] whitespace-pre-line">
                "{testimonial.message}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-[40px] h-[2px] bg-[#c8956c] mb-[20px]"></div>
                <div className="testimonial-author">
                  <p className="text-[#b5aaa0] text-[0.9rem] tracking-[1px] m-0">I live in {testimonial.city}, and I work as a {testimonial.userDesignation}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-[100px] bg-[#1C1713] border-t border-[#2c241c] border-b">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Trusted By <br /> <span style={{ color: 'var(--color-brand-base)' }}>Leading Brands</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Our clients include some of the most prestigious names in the industry</p>
          </div>
          <div className="flex justify-center flex-wrap gap-[30px]" data-aos="fade-up">
            {brands.map((brand, index) => (
              <div className="w-[180px] h-[100px] bg-[#15110F] border border-[#2c241c] flex items-center justify-center transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_4px_20px_rgba(194,163,115,0.1)] hover:-translate-y-[5px] group" key={index}>
                <span className="text-[#8c8279] font-serif font-medium text-[1.3rem] tracking-[2px] uppercase transition-colors duration-400 ease-in-out group-hover:text-[#c8956c]">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Sections */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-[40px] max-[992px]:grid-cols-1">
            {/* CTA 1: Create Success Story */}
            <div className="py-[60px] px-[50px] text-center flex flex-col items-center justify-center border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] bg-gradient-to-br from-[#1C1713] to-[#15110F]" data-aos="fade-right">
              <CheckCircle className="mb-[25px] text-[#c8956c]" size={48} />
              <h2 className="font-serif text-[2.5rem] text-white mb-[20px] font-normal">Ready To Create <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Success Story</span>?</h2>
              <p className="text-[1rem] text-[#b5aaa0] mb-[40px] leading-[1.8]">Join thousands of satisfied customers who have transformed their spaces with HIEIL handicrafts</p>
              <Link to="/contact" className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Start Your Project</Link>
            </div>

            {/* CTA 2: Share Experience */}
            <div className="py-[60px] px-[50px] text-center flex flex-col items-center justify-center border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] bg-[#15110F]" data-aos="fade-left">
              <h2 className="font-serif text-[2.5rem] text-white mb-[20px] font-normal">Share <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Experience</span></h2>
              <p className="text-[#b5aaa0] text-[1rem] leading-[1.8] mb-[40px]">Loved our categories and services? We'd love to hear about your experience! Share your story and help others discover the quality and craftsmanship of HIEIL handicrafts.</p>
              <div className="flex gap-[15px] flex-wrap justify-center max-md:flex-col">
                <button className="flex items-center gap-[10px] py-[12px] px-[25px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c] max-md:w-full max-md:justify-center"><PenTool size={18} /> Write a Review</button>
                <button className="flex items-center gap-[10px] py-[12px] px-[25px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c] max-md:w-full max-md:justify-center"><Camera size={18} /> Share Photos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
