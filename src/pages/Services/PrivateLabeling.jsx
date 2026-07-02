import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tag, 
  Package, 
  Barcode, 
  Store, 
  ShieldCheck, 
  PenTool, 
  Leaf, 
  Award, 
  TrendingUp, 
  Target, 
  Globe, 
  Star, 
  HeartHandshake, 
  Scale, 
  Users,
  Search,
  CheckCircle,
  Lightbulb,
  FileText
} from 'lucide-react';

const PrivateLabeling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '10+', label: 'Brands Built' },
    { value: '2+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' },
    { value: '100%', label: 'Brand Exclusivity' }
  ];

  const solutions = [
    { title: 'White-label / Oem Services', icon: <Tag size={40} />, desc: 'High-quality categories manufactured under your brand name with complete customization options and brand exclusivity.' },
    { title: 'Customized Packaging', icon: <Package size={40} />, desc: 'Tailored packaging solutions with your branding, logos, colors, and design elements that reflect your brand identity.' },
    { title: 'Labeling & Barcoding', icon: <Barcode size={40} />, desc: 'Professional labeling, barcoding, and product information systems compliant with global retail standards.' },
    { title: 'Retail-ready Packaging', icon: <Store size={40} />, desc: 'Complete packaging solutions designed for direct shelf placement in retail stores worldwide.' }
  ];

  const services = [
    { 
      title: 'White Label Manufacturing', 
      subtitle: 'Product Level Branding',
      desc: 'Manufacture categories with your brand name, logos, and complete brand identity',
      features: ['Complete brand customization', 'Exclusive product designs', 'Quality assurance', 'Brand protection', 'Global compliance'],
      btnText: 'Start White Label',
      icon: <Tag size={32} />
    },
    { 
      title: 'Custom Packaging', 
      subtitle: 'Packaging Solutions',
      desc: 'Design and produce packaging that showcases your brand and protects your categories',
      features: ['Branded box design', 'Custom inserts & padding', 'Eco-friendly options', 'Premium materials', 'Cost-effective solutions'],
      btnText: 'Design Packaging',
      icon: <Package size={32} />
    },
    { 
      title: 'Retail Ready Solutions', 
      subtitle: 'Store-Ready Packaging',
      desc: 'Complete solutions designed for direct placement in retail environments',
      features: ['Shelf-ready packaging', 'Barcode compliance', 'Pricing labels', 'Security features', 'Display optimization'],
      btnText: 'Get Retail Ready',
      icon: <Store size={32} />
    }
  ];

  const packagingSolutions = [
    { title: 'Brand Design', desc: 'Custom color schemes, logos, and design elements that perfectly represent your brand identity and values.', icon: <PenTool size={32} /> },
    { title: 'Labeling Services', desc: 'Professional labels with barcodes, product information, and compliance details for global markets.', icon: <Barcode size={32} /> },
    { title: 'Sustainable Packaging', desc: 'Eco-friendly packaging options using recycled materials and sustainable practices for conscious brands.', icon: <Leaf size={32} /> },
    { title: 'Premium Packaging', desc: 'Luxury packaging solutions with premium materials and finishes for high-end brand positioning.', icon: <Award size={32} /> }
  ];

  const identityServices = [
    { title: 'Brand Strategy', desc: 'Strategic guidance for brand positioning, target audience identification, and market entry planning.', icon: <Target size={32} /> },
    { title: 'Design Development', desc: 'Creative design services for logos, packaging, and marketing materials that reflect your brand essence.', icon: <PenTool size={32} /> },
    { title: 'Brand Guidelines', desc: 'Comprehensive brand manuals ensuring consistent application across all categories and markets.', icon: <FileText size={32} /> },
    { title: 'Global Adaptation', desc: 'Localization services for different markets while maintaining core brand identity and values.'}
  ];

  const advantages = [
    { title: 'Brand Equity Building', icon: <TrendingUp size={24} />, desc: 'Develop strong brand recognition and customer loyalty with exclusive, branded categories in the market.' },
    { title: 'Market Differentiation', icon: <Star size={24} />, desc: 'Stand out from competitors with unique branded categories that cannot be replicated by others.' },
    { title: 'Higher Margins', icon: <TrendingUp size={24} />, desc: 'Command premium pricing and better profit margins with exclusive branded categories versus generic alternatives.' },
    { title: 'Brand Protection', icon: <ShieldCheck size={24} />, desc: 'Secure your market position with exclusive categories that competitors cannot easily copy or undercut.' },
    { title: 'Global Expansion', desc: 'Scale your brand internationally with categories and packaging designed for global markets and compliance.' },
    { title: 'Customer Loyalty', icon: <HeartHandshake size={24} />, desc: 'Build lasting relationships with customers through consistent brand experience and product quality.' },
    { title: 'Ip Ownership Clarity', icon: <FileText size={24} />, desc: '100% Transparency on all design rights and intellectual property, ensuring you own your brand\'s future.' },
    { title: 'Ethical Branding Mission', icon: <Scale size={24} />, desc: 'A commitment to original creativity and ethical sourcing, with zero tolerance for design plagiarism or corruption.' }
  ];

  const testimonials = [
    { title: 'Home Decor Brand', desc: '"Starting from scratch, they helped us build a complete home decor line with custom packaging that now sells in 15 countries. Our brand recognition has grown 300% in two years."', icon: <Star size={32} /> },
    { title: 'Wellness Brand', desc: '"Their private label manufacturing and sustainable packaging solutions helped us launch our wellness categories with a strong brand identity that resonates with eco-conscious consumers."', icon: <Star size={32} /> },
    { title: 'Luxury Brand', desc: '"The attention to detail in their premium packaging and brand consistency across all categories has been instrumental in positioning us as a luxury home accessories brand."', icon: <Star size={32} /> }
  ];

  const processSteps = [
    { num: '1', title: 'Brand Consultation', desc: 'Deep dive into your brand vision, target market, and product requirements to create a customized branding strategy.' },
    { num: '2', title: 'Design & Development', desc: 'Create brand assets, packaging designs, and product specifications that align with your brand identity.' },
    { num: '3', title: 'Production & Quality', desc: 'Manufacture your branded categories with strict quality control and brand consistency across all items.' },
    { num: '4', title: 'Launch & Support', desc: 'Deliver your branded categories with complete documentation and ongoing support for brand growth.' }
  ];

  const partners = [
    { title: 'Brand Expertise', desc: '2+ years of experience building successful brands across multiple product categories and global markets.', icon: <Award size={32} /> },
    { title: 'Creative Excellence', desc: 'Talented design team that understands brand psychology and creates compelling visual identities.', icon: <PenTool size={32} /> },
    { title: 'Scalable Solutions', desc: 'Flexible manufacturing and branding solutions that grow with your business from startup to enterprise.', icon: <TrendingUp size={32} /> },
    { title: 'Partnership Approach', desc: 'We work as your branding partner, invested in your success and committed to your brand growth.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      
      {/* Page Header */}
      <section className="max-w-[1200px] mx-auto px-5 mt-[40px]">
        <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
          <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
          <h1 className="font-serif text-[3.5rem] font-normal text-white mb-6 uppercase tracking-[1px] max-md:text-[3.5rem] max-sm:text-[2.5rem]">Private Labeling <span style={{ color: 'var(--color-brand-base)' }}>& OEM</span></h1>
          <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
            End-to-end private label services. Manufacture high-quality products under your brand name with complete customization options, bespoke packaging, and retail-ready solutions.
          </p>
        </div>
      </section>

      {/* Comprehensive Branding Solutions */}
      <section className="py-[100px] pb-[120px] bg-[#15110F] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Comprehensive <br /> <span style={{ color: 'var(--color-brand-base)' }}>Branding Solutions</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">End-to-End Private Label Services</p>
          </div>
          <div className="grid grid-cols-2 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {solutions.map((solution, index) => (
              <div className="bg-[#15110F] border border-[#2c241c] p-[40px] text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-1.5 group rounded-none" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]">{solution.icon}</div>
                <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">{solution.title}</h3>
                <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branding Services */}
      <section className="py-[120px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Our <br /> <span style={{ color: 'var(--color-brand-base)' }}>Branding Services</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Complete Solutions for Brand Building</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[992px]:grid-cols-2 max-[768px]:grid-cols-1">
            {services.map((service, index) => (
              <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] p-[40px] transition-all duration-400 ease-in-out flex flex-col hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-1.5" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-between items-start mb-[25px]">
                  <div className="text-[#c8956c]">{service.icon}</div>
                  <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-1.5 px-4 inline-flex items-center gap-3 bg-transparent">SERVICE</span>
                </div>
                <h3 className="font-serif text-[1.8rem] text-white mb-2.5 leading-tight">{service.title}</h3>
                <h4 className="text-[#c8956c] text-[1rem] mb-[15px] font-medium">{service.subtitle}</h4>
                <p className="text-[#b5aaa0] leading-[1.7] mb-[25px]">{service.desc}</p>
                <ul className="list-none p-0 m-0 mb-[30px] flex-grow">
                  {service.features.map((feature, i) => (
                    <li className="flex items-center gap-2.5 text-[#8c8279] mb-3 text-[0.95rem]" key={i}><CheckCircle size={16} className="text-[#c8956c]" /> {feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block py-3 px-[25px] border border-[#c8956c] text-white no-underline uppercase text-[0.8rem] tracking-[2px] text-center transition-all duration-300 ease-in-out rounded-[30px] hover:bg-[#c8956c] hover:text-[#15110F]">{service.btnText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Solutions */}
      <section className="py-[120px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Packaging <br /> <span style={{ color: 'var(--color-brand-base)' }}>Solutions</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Customized for Your Brand Needs</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {packagingSolutions.map((item, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-5">{item.icon}</div>
                <div>
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{item.title}</h4>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity Services */}
      <section className="py-[120px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Brand <br /> <span style={{ color: 'var(--color-brand-base)' }}>Identity Services</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Complete Brand Development Support</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {identityServices.map((item, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-5">{item.icon}</div>
                <div>
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{item.title}</h4>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Brand Growth Advantage */}
      <section className="py-[120px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Your Brand <br /> <span style={{ color: 'var(--color-brand-base)' }}>Growth Advantage</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Grow Your Brand Globally with Exclusive categories</p>
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

      {/* Success Stories */}
      <section className="py-[120px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Success <br /> <span style={{ color: 'var(--color-brand-base)' }}>Stories</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Brands We've Helped Build</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[992px]:grid-cols-2 max-[768px]:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[40px_30px] transition-all duration-400 ease-in-out rounded-[20px] hover:border-[#4a3e35] hover:bg-[rgba(28,23,19,0.4)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-5 opacity-50">{testimonial.icon}</div>
                <div>
                  <p className="text-[#b5aaa0] italic leading-[1.8] mb-[25px] text-[1.05rem] m-0">{testimonial.desc}</p>
                  <h4 className="text-[#c8956c] font-sans text-[1rem] uppercase tracking-[1px] m-0">{testimonial.title}</h4>
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
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Brand <br /> <span style={{ color: 'var(--color-brand-base)' }}>Development Process</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Simple Steps to Launch Your Brand</p>
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
      <section className="py-[120px] px-5 bg-gradient-to-br from-[#1C1713] to-[#15110F] text-center border-t border-[#2c241c]" data-aos="zoom-in">
        <div className="max-w-[800px] mx-auto">
          <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-5'>Ready To Build <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Brand</span>?</h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">Partner with us to create exclusive branded categories that stand out in the global marketplace. From white-label manufacturing to customized packaging and retail-ready solutions, we provide everything you need to grow your brand globally with exclusive, high-quality categories.</p>
          <Link to="/contact" className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Start Your Brand Journey</Link>
        </div>
      </section>

      {/* Why Brands Choose Our Services */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Why Brands <br /> <span style={{ color: 'var(--color-brand-base)' }}>Choose Our Services</span></h2>
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

    </div>
  );
};

export default PrivateLabeling;
