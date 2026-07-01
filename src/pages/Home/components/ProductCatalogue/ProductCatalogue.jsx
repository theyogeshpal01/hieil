import React from 'react';
import { Download, Phone, Mail, Clock, BookOpen, Palette, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const catalogues = [
  {
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    tag: 'Full Range',
    title: 'Product Catalogue',
    desc: 'Browse our complete collection of authentic handcrafted Indian categories — from home d\u00e9cor to gifting essentials.',
    highlights: ['200+ Unique categories', 'HD Product Images', 'Pricing & MOQ Details'],
  },
  {
    icon: <Palette size={28} strokeWidth={1.5} />,
    tag: 'Bespoke',
    title: 'Custom categories',
    desc: 'Get tailored solutions for your brand — custom sizes, finishes, packaging, and exclusive artisan designs.',
    highlights: ['Custom Sizing & Finish', 'Private Label Options', 'Bulk Order Support'],
  },
];

const contacts = [
  { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Call Us', value: '+91-90500 01972' },
  { icon: <Mail  size={18} strokeWidth={1.5} />, label: 'Email Inquiry', value: 'indiaexport@hieil.com' },
  { icon: <Clock size={18} strokeWidth={1.5} />, label: 'Response Time', value: 'Within 2 Business Hours' },
];

const ProductCatalogue = () => {
  const headerRef  = useScrollAnimation();
  const gridRef    = useScrollAnimation();
  const contactRef = useScrollAnimation();
  return (
    <section className="py-24 px-8 bg-[#15110F]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        <div className="text-center" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className="font-['Inter','Outfit',sans-serif] text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>RESOURCES</span>
            </div>
          <h2 className="font-serif text-[3.5rem] font-medium text-white m-0 mb-4 leading-[1.2] max-lg:text-[3.5rem]">Product Catalogue <br /> <span style={{ color: 'var(--color-brand-base)' }}>& Quotation</span></h2>
          <p className="font-sans text-[1.1rem] text-[#888888] leading-[1.7] max-w-[520px] mx-auto m-0">
            Get detailed product information and customized pricing for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6" ref={gridRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.1s'}}>
          {catalogues.map((cat, i) => (
            <div key={i} className="bg-[#15110F] border border-[#2c241c] rounded-2xl p-10 flex flex-col gap-5 transition-all duration-300 ease-in-out hover:border-[var(--color-brand-base)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-base)] text-white flex items-center justify-center">{cat.icon}</div>
                <span className="font-sans text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-white bg-[var(--color-brand-base)] border border-[var(--color-brand-base)] rounded-full py-1 px-[0.85rem]">{cat.tag}</span>
              </div>
              <h3 className="font-serif text-[1.5rem] font-medium text-white m-0">{cat.title}</h3>
              <p className="font-sans text-[0.88rem] text-[#b5aaa0] leading-[1.7] m-0">{cat.desc}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 pt-2 border-t border-[#2c241c]">
                {cat.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 font-sans text-[0.85rem] text-[#b5aaa0]">
                    <ArrowRight size={13} className="text-[var(--color-brand-base)] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <button className="flex items-center justify-center gap-2 mt-auto py-3.5 px-6 bg-[var(--color-brand-base)] text-black border-none rounded-xl font-sans text-[0.85rem] font-semibold cursor-pointer transition-colors duration-200 ease-in-out tracking-[0.3px] hover:bg-[var(--color-brand-accent-dark)]">
                <Download size={16} /> Download Catalogue (PDF)
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1px] bg-[#2c241c] border border-[#2c241c] rounded-2xl overflow-hidden" ref={contactRef} style={{opacity:0,transform:'translateY(20px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.2s'}}>
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-4 py-7 px-8 bg-[#15110F] transition-colors duration-200 ease-in-out hover:bg-[#15110F]">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-base)] text-white flex items-center justify-center shrink-0">{c.icon}</div>
              <div>
                <p className="font-sans text-[0.72rem] font-semibold tracking-[1px] uppercase text-[#aaaaaa] m-0 mb-1">{c.label}</p>
                <p className="font-sans text-[0.88rem] font-medium text-white m-0">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCatalogue;
