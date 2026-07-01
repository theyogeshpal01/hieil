import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const faqs = [
  { id: 1, question: 'Company Overview', answer: 'We are a leading exporter of authentic Indian handicrafts, dedicated to preserving traditional artistry while meeting global quality standards.' },
  { id: 2, question: 'What categories Do We Export?', answer: 'We export a wide range of handcrafted items including wooden categories, blue pottery, textiles, metal art, and home decor pieces.' },
  { id: 3, question: 'Where Are We Located?', answer: 'Our headquarters is based in India, with an extensive network of artisan clusters across various states to source the finest crafts.' },
  { id: 4, question: 'How To Place An Order?', answer: 'You can place an order by contacting our sales team via email or phone, or by submitting an inquiry through our website contact form.' },
  { id: 5, question: 'Shipping And Delivery', answer: 'We offer fast and reliable shipping worldwide. Delivery times depend on the destination and the size of the order.' },
  { id: 6, question: 'Payment Terms', answer: 'We accept multiple secure payment methods including T/T, SWIFT, PayPal, and Letter of Credit for bulk orders.' },
  { id: 7, question: 'Quality Assurance', answer: 'Every product undergoes strict quality control checks by our experienced team before being packed and dispatched.' },
  { id: 8, question: 'Contact Information', answer: 'You can reach us 24/7 via phone at +91 9050001972 or email us at indiaexport@hieil.com.' }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 px-8 bg-[#15110F]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-white uppercase tracking-[1.5px] m-0 mb-3">FREQUENTLY <span style={{ color: 'var(--color-brand-base)' }}>ASKED QUESTIONS</span></h2>
          <p className="font-sans text-[1.1rem] text-[#b5aaa0] m-0">Find answers to common questions about our categories and services</p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <h3 className="font-serif text-[1.1rem] font-medium text-white uppercase tracking-[2px] m-0 mb-2">INFORMATION</h3>
          <div className="w-[60px] h-[2px] bg-[#c07a5d]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-14 items-start" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`group bg-[#15110F] rounded shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer border transition-all duration-200 ease-in-out ${openId === faq.id ? 'border-[#c07a5d] shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : 'border-transparent hover:border-[#c07a5d] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]'}`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="py-5 px-6 flex justify-between items-center bg-[#15110F]">
                <h4 className="font-serif text-[0.95rem] font-semibold text-[#b5aaa0] uppercase tracking-[1px] m-0">{faq.question}</h4>
                <div className="text-[#c07a5d] flex items-center justify-center">
                  {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
              
              <div className={`overflow-hidden transition-[max-height,padding] duration-400 ease-in-out bg-[#15110F] border-t ${openId === faq.id ? 'border-[#2c241c] py-5 px-6' : 'border-transparent px-6'}`} style={{ maxHeight: openId === faq.id ? '200px' : '0' }}>
                <p className="font-sans text-[0.9rem] text-[#b5aaa0] leading-[1.6] m-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center max-w-[400px] mx-auto">
          <div className="flex-1 h-[1px] bg-[#2c241c]"></div>
          <button className="bg-[#c8956c] text-black font-sans text-[0.9rem] font-medium border-none py-3 px-8 rounded cursor-pointer relative z-10 transition-colors duration-200 ease-in-out hover:bg-[#917751]">Show More Questions</button>
          <div className="flex-1 h-[1px] bg-[#2c241c]"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
