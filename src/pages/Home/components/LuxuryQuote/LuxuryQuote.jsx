import React from 'react';

const LuxuryQuote = () => {
  return (
    <section className="bg-[#15110F] text-white py-[120px] px-5 flex items-center justify-center text-center font-['Playfair_Display','Georgia',serif]">
      <div className="max-w-[900px] flex flex-col items-center">
        <div className="text-6xl leading-none text-[#dddddd] mb-5 font-['Georgia',serif]">"</div>
        <p className="text-[2.2rem] italic font-light leading-[1.4] m-0 mb-[50px] text-white tracking-[0.5px] max-md:text-[1.6rem]">
          HIEIL does not dress you in fabric. It dresses you<br />
          in intention. Every seam is a sentence in a<br />
          language only the discerning can read.
        </p>
        <div className="flex flex-col items-center gap-5">
          <div className="h-[1px] w-[40px] bg-[var(--color-brand-base)]"></div>
          <p className="font-['Inter','Outfit',sans-serif] text-xs tracking-[3px] uppercase text-[var(--color-brand-base)] flex items-center gap-[10px]">
            ARIA MEHTA <span className="text-[#aaaaaa]">&middot;</span> CREATIVE DIRECTOR, VOGUE INDIA
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxuryQuote;
