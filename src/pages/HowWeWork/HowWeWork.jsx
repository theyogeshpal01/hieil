import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText, CheckCircle, Hammer, Package, Plane } from 'lucide-react';

const HowWeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Inquiry & Consultation',
      subtitle: 'Discovery',
      description: `Start your journey with us. Tell us what you are looking for. Our team of experts will show you all the things we have and help you pick the perfect handcrafted pieces that are just right, for you.\n\nWe can do a lot of things to help you, such as:`,
      features: ['Consultation', 'Customization Options', 'Sample Requests', 'Timeline Planning'],
    },
    {
      number: '02',
      title: 'Detailed Quotation',
      subtitle: 'Estimation',
      description: 'When you ask us for a price we will give you a list of all the costs. This includes how much the product is, any fees for making changes the cost of packaging and the cost of shipping. We want to be very clear about what you have to pay so you will not find any surprise fees.',
      features: ['Transparent Pricing', 'Shipping Estimations', 'Flexible Terms', 'Cost Optimization'],
      postDescription: 'We think it is very important to be open, about the costs of the product. You will get an idea of what you are paying for. We can also work with you to find the way to pay and to reduce the costs.',
    },
    {
      number: '03',
      title: 'Approval & Secure Payment',
      subtitle: 'Confirmation',
      description: 'Once you say yes to the quotation we will send you an order confirmation. You can make payments through many channels and we make sure your money is safe every step of the way.',
      features: ['Secure Transactions', 'Many Payment Options', 'Check Your Order', 'Get Digital Receipts'],
    },
    {
      number: '04',
      title: 'Artisan Production',
      subtitle: 'Crafting',
      description: "We have people who're very good at making things and they start working on your order using methods that have been used for a very long time. We keep you informed, about what's happening with your order and we make sure that everything is made to a high standard.",
      features: ['Expert Craftsmanship', 'Quality Control', 'Progress Updates', 'Material Sourcing'],
      postDescription: 'Our artisans are people who make things with their hands and they are very careful when they are working on your order. They use techniques that have been used by our company for a long time. We also make sure that we get the materials for your order.',
    },
    {
      number: '05',
      title: 'Secure Packaging',
      subtitle: 'Protection',
      description: 'We make sure to pack each piece well using good materials that are safe for the earth. This way the piece will get to you in shape. We do things the way everyone else does, around the world to keep things safe while they are being moved.',
      features: ['Custom Crating', 'Eco-Friendly Materials', 'Impact Resistance', 'Final Inspection'],
      postDescription: 'We use Custom Crating and Eco-Friendly Materials to keep each piece safe. We also make sure it can handle bumps and knocks with Impact Resistance. Then we do a Final Inspection to double check everything is okay.',
    },
    {
      number: '06',
      title: 'Global Shipping & Delivery',
      subtitle: 'Logistics',
      description: 'We work with shipping companies to get things to you on time all around the world. You can see where your order is, at any moment. We help you with customs and paperwork.',
      features: ['Global Delivery', 'Real-time Tracking', 'Customs Support', 'Safe Handover'],
    }
  ];

  const simpleWorkflow = [
    { title: 'Inquiry', desc: 'Expert consultation', icon: <Phone size={40} strokeWidth={1.5} /> },
    { title: 'Quotation', desc: 'Detailed pricing', icon: <FileText size={40} strokeWidth={1.5} /> },
    { title: 'Approval', desc: 'Secure payment', icon: <CheckCircle size={40} strokeWidth={1.5} /> },
    { title: 'Production', desc: 'Skilled crafting', icon: <Hammer size={40} strokeWidth={1.5} /> },
    { title: 'Packaging', desc: 'Safe wrapping', icon: <Package size={40} strokeWidth={1.5} /> },
    { title: 'Shipping', desc: 'Global delivery', icon: <Plane size={40} strokeWidth={1.5} /> }
  ];

  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden">
      {/* Main Process Timeline */}
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-20 pt-10" data-aos="fade-up">
            <span className="font-sans text-xs tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-8 bg-transparent">
              Service Directory
            </span>
            <h1 className="font-serif text-[3.5rem] font-normal text-white mb-6 uppercase tracking-[1px] max-md:text-[2.5rem]">
              How We <span className="text-[#c8956c]">Work</span>
            </h1>
            <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[800px] mx-auto">
              Experience our dedicated approach to handcrafted excellence through these six simple steps. From initial consultation to global delivery, we ensure complete transparency and premium quality at every stage.
            </p>
          </div>
          
          <div className="relative max-w-[1000px] mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:bg-[#e6c89c] before:-translate-x-1/2 before:opacity-30 max-lg:before:left-[40px] max-md:before:hidden">
            {processSteps.map((step, index) => (
              <div className={`flex justify-between items-center relative mb-20 w-full max-lg:flex-col max-lg:items-start max-lg:pl-[90px] max-md:pl-0 ${index % 2 === 0 ? '' : 'flex-row-reverse max-lg:flex-col'}`} key={step.number}>
                <div className="w-[45%] bg-[#1c171399] backdrop-blur-[10px] p-10 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-[#2c241c] hover:-translate-y-[10px] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:border-[#c8956c] group max-lg:w-full max-lg:p-[30px] max-lg:mb-[30px]" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="absolute -top-[30px] left-[30px] text-[5rem] font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(194,163,115,0.15)] leading-none z-0 select-none transition-all duration-400 group-hover:[-webkit-text-stroke:1.5px_rgba(194,163,115,0.4)] group-hover:scale-105 max-lg:left-[20px] max-lg:text-[4rem]">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <span className="text-[#c8956c] font-semibold text-[1.1rem] uppercase tracking-[1.5px] block mb-2.5">{step.subtitle}</span>
                    <h3 className="font-serif text-[2rem] font-semibold mb-[15px] text-white">{step.title}</h3>
                    <p className="text-[#b5aaa0] leading-[1.7] mb-[25px] text-[1rem] whitespace-pre-line">{step.description}</p>
                    <ul className="list-none p-0 m-0 grid grid-cols-2 gap-3 max-md:grid-cols-1">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-[0.9rem] text-[#b5aaa0] font-medium">
                          <span className="w-[6px] h-[6px] bg-[#c8956c] rounded-full mr-2.5 inline-block"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {step.postDescription && (
                      <p className="text-[#b5aaa0] leading-[1.7] mt-[25px] text-[1rem] whitespace-pre-line">{step.postDescription}</p>
                    )}
                  </div>
                </div>
                {/* Dot */}
                <div className={`absolute top-[50px] w-[20px] h-[20px] rounded-full bg-[#15110F] border-[4px] border-[#c8956c] z-10 transition-all duration-400 group-hover:scale-110 group-hover:bg-[#c8956c] group-hover:shadow-[0_0_20px_rgba(139,90,43,0.4)] max-md:hidden ${index % 2 === 0 ? 'right-[calc(50%-10px)] max-lg:left-[30px] max-lg:right-auto' : 'left-[calc(50%-10px)] max-lg:left-[30px] max-lg:right-auto'}`}></div>

                {step.image && (
                  <div className="w-[45%] relative max-lg:w-full max-lg:max-w-[400px] group-hover:scale-105 transition-transform duration-500 ease-in-out" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                    <img src={step.image} alt={step.title} className="w-full h-auto rounded-[20px] block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Workflow Section */}
      <section className="py-20 bg-[#1C1713] text-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-[3.5rem] font-normal mb-[60px] max-md:text-[2.5rem]" data-aos="fade-up">Our <br /> <span className="text-[#c8956c]">Simple Workflow</span></h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[30px] max-md:grid-cols-2 max-sm:grid-cols-1">
            {simpleWorkflow.map((item, index) => (
              <div className="text-center py-[30px] px-5 bg-[#1c171399] backdrop-blur-[10px] border border-[#2c241c] rounded-[15px] transition-all duration-400 hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] hover:-translate-y-1" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="text-[2.5rem] mb-5 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] flex justify-center items-center text-[#c8956c]">{item.icon}</div>
                <h4 className="text-[1.1rem] font-semibold mb-2.5">{item.title}</h4>
                <p className="text-[0.9rem] text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-[100px] px-5 bg-[#15110F]">
        <div className="max-w-[800px] mx-auto text-center bg-gradient-to-br from-[#1C1713] to-[#15110F] border border-[#2c241c] py-[60px] px-[40px] rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden max-md:p-10" data-aos="fade-up">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#c8956c] to-[#d4a373]"></div>
          <h2 className="text-[2.5rem] font-normal mb-5 text-white max-md:text-[2rem]">Ready To Start <br /> <span className="text-[#c8956c]">Your Order</span>?</h2>
          <p className="text-[#b5aaa0] text-[1.1rem] leading-[1.7] mb-10 max-w-[600px] mx-auto">
            Join hundreds of satisfied clients worldwide who trust us for authentic Indian handicrafts. Let's create something beautiful together.
          </p>
          <div className="flex justify-center gap-5 flex-wrap max-sm:flex-col">
            <Link to="/contact" className="px-[35px] py-[15px] rounded-[30px] text-[1rem] font-normal no-underline inline-flex items-center justify-center bg-[#c8956c] text-[#15110F] border border-[#c8956c] shadow-[0_10px_20px_rgba(194,163,115,0.2)] transition-all duration-400 hover:bg-transparent hover:text-[#c8956c] hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(194,163,115,0.4)] max-sm:w-full">Start Your Inquiry</Link>
            <Link to="/shop" className="px-[35px] py-[15px] rounded-[30px] text-[1rem] font-normal no-underline inline-flex items-center justify-center bg-transparent text-[#c8956c] border border-[#c8956c] transition-all duration-400 hover:bg-[#c8956c] hover:text-[#15110F] hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(194,163,115,0.4)] max-sm:w-full">Browse Collection</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
