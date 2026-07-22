import React from 'react';
import { ArrowUp } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import LazyImage from '../../../../components/common/LazyMedia/LazyImage';

const SplitInfoSection = ({ 
  subtitle, 
  title, 
  paragraphs, 
  buttonText, 
  imageSrc, 
  imageAlt, 
  reverse = false 
}) => {
  const imgRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  return (
    <section className={`relative w-full max-w-[1200px] mx-auto my-20 min-h-[500px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex max-lg:flex-col ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="absolute inset-0 z-0 max-lg:relative max-lg:min-h-[350px] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[rgba(21,17,15,0.95)] after:via-[rgba(21,17,15,0.7)] after:to-[rgba(21,17,15,0.3)]" ref={imgRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <LazyImage src={imageSrc} alt={imageAlt} className="w-full h-full [&>img]:object-cover" />
      </div>
      
      <div className="relative z-10 py-20 px-16 flex flex-col justify-center max-w-[700px] max-lg:p-12 max-lg:px-8" ref={contentRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[12px] border border-[rgba(194,163,115,0.2)] p-12 rounded-xl">
          {subtitle && <h4 className="font-sans text-[#c8956c] text-[1.1rem] font-semibold tracking-[3px] uppercase mb-6 border-l-[3px] border-[#c8956c] pl-4">{subtitle}</h4>}
          <h2 className="font-serif text-[3.5rem] font-normal text-white mb-8 leading-[1.2] max-lg:text-[3.5rem]">{title}</h2>
          
          <div className="mb-12">
            {paragraphs.map((text, idx) => (
              <p key={idx} className="font-sans text-base text-[#b5aaa0] leading-[1.8] mb-4">{text}</p>
            ))}
          </div>
          
          {buttonText && (
            <button className="bg-transparent border border-[#c8956c] text-[#c8956c] py-3 px-7 text-xs font-medium tracking-[2px] uppercase transition-all duration-300 ease-in-out cursor-pointer inline-block hover:bg-[rgba(194,163,115,0.1)]">
              {buttonText}
            </button>
          )}
        </div>
        
        <button className="absolute bottom-8 right-8 w-[45px] h-[45px] rounded-full bg-[#c8956c] text-[#15110F] border-none flex items-center justify-center cursor-pointer transition-transform duration-200 ease-in-out hover:bg-[#a88c60] hover:-translate-y-[3px] max-lg:hidden" aria-label="Scroll up">
          <ArrowUp size={20} />
        </button>
      </div>
    </section>
  );
};

export default SplitInfoSection;
