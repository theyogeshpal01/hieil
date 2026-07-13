import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Hotel, 
  Paintbrush, 
  ShoppingCart, 
  TrendingUp, 
  HeartHandshake, 
  Lock, 
  Clock, 
  PiggyBank, 
  Network, 
  Users, 
  ShieldCheck, 
  Target, 
  Globe, 
  Star, 
  Scale, 
  Search,
  CheckCircle,
  FileText,
  Award,
  Lightbulb
} from 'lucide-react';

const B2BPartnerships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '20+', label: 'Active Partners' },
    { value: '2+', label: 'Years Experience' },
    { value: '98%', label: 'Partnership Retention' },
    { value: '50+', label: 'Countries Served' }
  ];

  const networks = [
    { title: 'Wholesalers & Distributors', icon: <Building2 size={40} />, desc: 'Strategic partnerships with wholesalers and distributors for market expansion and efficient supply chain management.' },
    { title: 'Hotel Chains', icon: <Hotel size={40} />, desc: 'Long-term contracts with hotel chains for consistent supply of premium quality categories and custom solutions.' },
    { title: 'Interior Designers', icon: <Paintbrush size={40} />, desc: 'Collaborations with interior designers for custom product development and exclusive design partnerships.' },
    { title: 'E-commerce Stores', icon: <ShoppingCart size={40} />, desc: 'Partnerships with online retailers for dropshipping, private label, and exclusive product collaborations.' }
  ];

  const partnershipModels = [
    { 
      title: 'Growth Partnership', 
      subtitle: 'Flexible Order Planning',
      desc: 'Scale your business with flexible order planning that matches your growth strategy and market demands',
      features: ['Scalable order quantities', 'Seasonal planning support', 'Inventory management', 'Market trend analysis', 'Growth forecasting'],
      btnText: 'Explore Growth Partnership',
      icon: <TrendingUp size={32} />
    },
    { 
      title: 'Long-term Partnership', 
      subtitle: 'Dedicated Support',
      desc: 'Build lasting business relationships with dedicated support for repeat and contract orders',
      features: ['Dedicated account manager', 'Priority production slots', 'Contract pricing', 'Custom product development', 'Strategic planning sessions'],
      btnText: 'Start Long-Term Partnership',
      icon: <HeartHandshake size={32} />
    },
    { 
      title: 'Exclusive Partnership', 
      subtitle: 'Market Exclusivity',
      desc: 'Secure your market position with exclusive product lines and territory protection',
      features: ['Exclusive product designs', 'Territory protection', 'First right of refusal', 'Co-branding opportunities', 'Joint marketing initiatives'],
      btnText: 'Discuss Exclusivity',
      icon: <Lock size={32} />
    }
  ];

  const advantages = [
    { title: 'Reliable Supply Chain', desc: 'Consistent product quality and on-time delivery that you can depend on for your business operations.', icon: <Network size={32} /> },
    { title: 'Dedicated Support', desc: 'Personal account managers and 24/7 support team dedicated to your business success and growth.', icon: <Users size={32} /> },
    { title: 'Cost Efficiency', desc: 'Competitive pricing and volume discounts that improve your profit margins and business sustainability.', icon: <PiggyBank size={32} /> },
    { title: 'Growth Support', desc: 'Strategic guidance and flexible solutions that support your expansion into new markets and product lines.', icon: <TrendingUp size={32} /> }
  ];

  const flexibleTerms = [
    { title: 'Flexible Order Planning', desc: 'Adapt order quantities and schedules to match your sales cycles, seasonal demands, and inventory needs.', icon: <Clock size={32} /> },
    { title: 'Contract Orders', desc: 'Secure long-term contracts with guaranteed pricing, priority production, and dedicated quality assurance.', icon: <FileText size={32} /> },
    { title: 'Repeat Order Support', desc: 'Streamlined processes for repeat orders with maintained quality consistency and efficient turnaround times.', icon: <HeartHandshake size={32} /> },
    { title: 'Dedicated Relationship', desc: 'Personalized service with account managers who understand your business and growth objectives.', icon: <Users size={32} /> }
  ];

  const reasons = [
    { title: 'Strategic Alliance', icon: <Target size={24} />, desc: 'We become an extension of your team, working strategically to achieve your business objectives and market goals.' },
    { title: 'Growth Acceleration', icon: <TrendingUp size={24} />, desc: 'Leverage our expertise and resources to accelerate your market expansion and product development.' },
    { title: 'Supply Chain Security', icon: <ShieldCheck size={24} />, desc: 'Ensure business continuity with reliable supply chain management and risk mitigation strategies.' },
    { title: 'Innovation Partnership', icon: <Lightbulb size={24} />, desc: 'Collaborate on new product development and market innovations that keep you ahead of competitors.' },
    { title: 'Global Reach', icon: <Globe size={24} />, desc: 'Access international markets with our export expertise and global logistics capabilities.' },
    { title: 'Quality Assurance', icon: <CheckCircle size={24} />, desc: 'Maintain product excellence with our rigorous quality control processes and international certifications.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Complete visibility into pricing, documentation, and tracking for total peace of mind.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Ethical business practices with zero tolerance for corruption across all global operations.' }
  ];

  const testimonials = [
    { title: 'European Distributor', desc: '"Starting with small orders, we\'ve grown to become their primary European distributor. Their flexible order planning and dedicated support helped us expand into 12 new markets."', icon: <Star size={32} /> },
    { title: 'Luxury Hotel Chain', desc: '"Their partnership approach and custom product development have been instrumental in creating unique guest experiences across our 25 hotel properties worldwide."', icon: <Star size={32} /> },
    { title: 'E-commerce Retailer', desc: '"From dropshipping to private label, their scalable solutions supported our growth from startup to multi-million dollar business. Truly a partnership built on mutual success."', icon: <Star size={32} /> }
  ];

  const processSteps = [
    { num: '1', title: 'Discovery & Planning', desc: 'Deep understanding of your business goals, market position, and partnership requirements for mutual success.' },
    { num: '2', title: 'Solution Design', desc: 'Customized partnership model with flexible terms, support structure, and growth roadmap aligned with your strategy.' },
    { num: '3', title: 'Implementation', desc: 'Smooth onboarding with dedicated account management, quality assurance, and operational integration.' },
    { num: '4', title: 'Growth & Optimization', desc: 'Continuous partnership optimization, performance reviews, and strategic planning for ongoing success.' }
  ];

  const partners = [
    { title: 'Proven Track Record', desc: '2+ years of successful partnerships with businesses across 50+ countries and multiple industries.', icon: <Award size={32} /> },
    { title: 'Relationship Focus', desc: 'We invest in long-term relationships, not just transactions, with personalized service and mutual growth focus.', icon: <HeartHandshake size={32} /> },
    { title: 'Flexible Solutions', desc: 'Customized partnership models that adapt to your changing business needs and market dynamics.', icon: <Scale size={32} /> },
    { title: 'Growth Commitment', desc: 'We measure our success by your growth, with dedicated resources and strategic support for your expansion.', icon: <TrendingUp size={32} /> }
  ];

  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden pt-[50px]">
      
      {/* Stats Section */}
      <section className="pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {stats.map((stat, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col text-center transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="font-serif text-[2.5rem] font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-[#8c8279] text-[0.95rem] m-0 uppercase tracking-[1px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partnership Network */}
      <section className="py-10 pb-20 bg-[#15110F] border-b border-[#2c241c]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[80px] pt-[40px]" data-aos="fade-up">
            <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px] bg-transparent">Service Directory</span>
            <h1 className="font-serif text-[3.5rem] font-normal text-white mb-6 uppercase tracking-[1px] max-md:text-[3.5rem] max-sm:text-[2.5rem]">Global B2B Partnership <br /> <span style={{ color: 'var(--color-brand-base)' }}>Opportunities</span></h1>
            <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
              We help people make business friendships that last a long time all around the world. If you sell things in amounts or in stores or if you help get things from one place to another our business to business partnership programs are made just for you. These programs give you kinds of products that others do not have ways to get things to you that you can count on and people who will help you whenever you need it so your business can get bigger. Our B2B partnership programs are really good, at doing this. 

            </p>
          </div>
          <div className="grid grid-cols-2 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {networks.map((network, index) => (
              <div className="bg-[#15110F] border border-[#2c241c] p-10 text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-[48px] h-[48px] mb-6 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]">{network.icon}</div>
                <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">{network.title}</h3>
                <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">{network.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Partnership <br /> <span style={{ color: 'var(--color-brand-base)' }}>Models</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Tailored Solutions for Your Business</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {partnershipModels.map((model, index) => (
              <div className="bg-[#15110F] border border-[#2c241c] p-10 text-left transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-[5px] group flex flex-col" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-between items-center mb-5">
                  <div className="w-[48px] h-[48px] mb-0 flex items-center justify-center bg-transparent border border-[rgba(200,149,108,0.3)] text-[#c8956c] rounded-full transition-colors duration-400 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]">{model.icon}</div>
                  <span className="bg-[rgba(200,149,108,0.1)] text-[#c8956c] py-1 px-3 text-[0.75rem] font-semibold rounded-full border border-[rgba(200,149,108,0.3)]">PARTNERSHIP</span>
                </div>
                <h3 className="font-serif text-[1.25rem] font-bold text-white mb-3 uppercase tracking-[1px]">{model.title}</h3>
                <h4 className="font-sans text-[#c8956c] text-[0.95rem] mb-[15px] uppercase tracking-[1px]">{model.subtitle}</h4>
                <p className="text-[#b5aaa0] leading-[1.6] text-[15.2px] m-0">{model.desc}</p>
                <ul className="list-none p-0 my-[25px]">
                  {model.features.map((feature, i) => (
                    <li className="text-[#b5aaa0] text-[0.95rem] mb-3 flex items-center gap-[10px]" key={i}><CheckCircle size={16} className="text-[#c8956c] shrink-0" /> {feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block w-full text-center py-3 px-6 border border-[#c8956c] text-[#c8956c] no-underline text-[0.9rem] font-semibold tracking-[1px] uppercase transition-all duration-300 ease-in-out rounded-full mt-auto hover:bg-[#c8956c] hover:text-[#15110F]">{model.btnText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Partnership Advantage */}
      <section className="py-[100px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Your <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partnership Advantage</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">A Reliable Export Partner Invested in Your Success</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {advantages.map((item, index) => (
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

      {/* Flexible Partnership Terms */}
      <section className="py-[100px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Flexible <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partnership Terms</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Designed for Your Business Needs</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {flexibleTerms.map((item, index) => (
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

      {/* Why Partner With Us */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Why Partner <br /> <span style={{ color: 'var(--color-brand-base)' }}>With Us</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Building Success Together</p>
          </div>
          <div className="grid grid-cols-4 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {reasons.map((adv, index) => (
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

      {/* Successful Partnerships */}
      <section className="py-[100px] bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Successful <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partnerships</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Stories of Growth and Collaboration</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-md:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <div className="bg-transparent border border-[#2c241c] p-[30px] flex flex-col transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:bg-[rgba(255,255,255,0.02)]" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-[#c8956c] mb-5">{testimonial.icon}</div>
                <div>
                  <p className="text-[#8c8279] text-[0.95rem] leading-[1.6] m-0 mb-4">{testimonial.desc}</p>
                  <h4 className="font-sans text-[1.1rem] text-white mb-3 uppercase tracking-[1px]">{testimonial.title}</h4>
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
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Partnership <br /> <span style={{ color: 'var(--color-brand-base)' }}>Journey</span></h2>
            <p className="text-[1.1rem] text-[#c8956c] font-normal italic font-serif">Building Our Relationship Step by Step</p>
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
          <h2 className="font-serif text-[3rem] text-white mb-5 font-normal max-md:text-[2.2rem]">Looking For A Trusted <br /> <span style={{ color: 'var(--color-brand-base)' }}>Handicraft Exporter</span>?</h2>
          <p className="text-[1.1rem] text-[#b5aaa0] mb-10 leading-[1.8]">We want to work with you to make your business bigger and better. Our company has solutions that can be changed to fit your needs, people who will help you. We really want you to succeed. This means we are not a company that sells you things we are a company that helps you grow all around the world. We are your partner when you want to expand. .</p>
          <Link to="/contact" className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c] rounded-none">Let's Build a Partnership</Link>
        </div>
      </section>

      {/* Why Businesses Choose Our Partnership */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px] uppercase tracking-[1px]">Why Businesses <br /> <span style={{ color: 'var(--color-brand-base)' }}>Choose Our Partnership</span></h2>
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

export default B2BPartnerships;
