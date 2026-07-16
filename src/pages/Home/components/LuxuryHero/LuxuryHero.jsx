import React from 'react';
import { Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LuxuryHero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#15110F] text-white py-20 px-5 flex items-center justify-center text-center font-serif">
      <div className="max-w-[800px] flex flex-col items-center relative z-10">
        <div className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-[30px]">
          <span>INSPIRED BY TRADITION</span>
        </div>
        <h1 className="font-serif text-7xl font-normal leading-[1.2] m-0 mb-[25px] text-white max-md:text-[3.5rem]">
          Where Art<br />
          Meets <span className="italic font-serif font-light text-[var(--color-brand-dark)]">Elegance</span>
        </h1>
        <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">
          Crafted for those who understand the language of luxury
        </p>
        <div className="flex gap-5 justify-center max-md:flex-col max-md:w-full relative z-20">
          <button onClick={() => navigate('/shop')} className="bg-transparent border border-[#4a3e35] text-[#c8956c] py-3 px-7 text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer hover:border-[#c8956c] hover:bg-[#c2a3730d] hover:text-[#c8956c] relative z-20">EXPLORE COLLECTION</button>
          <button onClick={() => navigate('/contact')} className="bg-transparent border border-[#4a3e35] text-[#c8956c] py-3 px-7 text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer hover:border-[#c8956c] hover:bg-[#c2a3730d] hover:text-[#c8956c] relative z-20">Request Quote</button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;
