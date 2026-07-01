import React from 'react';

const LuxuryHeritage = () => {
  return (
    <section className="bg-[#15110F] text-white py-[100px] px-5 flex justify-start font-serif">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="max-w-[650px]">
          <div className="mb-10">
            <span className="font-sans text-[0.75rem] tracking-[4px] uppercase text-[var(--color-brand-base)] block mb-[15px]">OUR HERITAGE</span>
            <div className="h-[1px] w-[60px] bg-[#eeeeee]"></div>
          </div>
          
          <h2 className="text-[3.5rem] font-normal leading-[1.1] m-0 mb-10 tracking-[-0.5px] max-md:text-[3.5rem]">
            Born from<br />
            a <span className="italic text-[var(--color-brand-dark)]">Passion</span><br />
            for Perfection
          </h2>
          
          <div className="font-sans text-[#b5aaa0] text-[1.05rem] leading-[1.8] mb-[50px] font-light">
            <p className="mb-5">
              Since 1994, HIEIL has stood at the intersection of art and wearable luxury. 
              Each piece is conceived in our Paris atelier and handcrafted by master 
              artisans who have devoted their lives to the pursuit of flawlessness.
            </p>
            <p className="mb-5">
              We do not follow trends. We set the quiet standard by which true 
              connoisseurs measure refinement.
            </p>
          </div>
          
          <button className="bg-transparent border border-[#4a3e35] text-[#c8956c] py-3 px-7 text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer hover:border-[#c8956c] hover:bg-[#c2a3730d] hover:text-[#c8956c]">DISCOVER OUR STORY</button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHeritage;
