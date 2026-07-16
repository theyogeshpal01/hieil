import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import axios from 'axios';

const CountryRepresentatives = () => {
  const [representatives, setRepresentatives] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const headerRef = useScrollAnimation();
  const sliderRef = useScrollAnimation();

  useEffect(() => {
    // Fetch leaders from backend
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/leaders`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setRepresentatives(res.data);
        }
      })
      .catch(err => console.error('Error fetching leaders:', err));
  }, []);

  const handleSlideChange = (direction) => {
    if (isAnimating || representatives.length === 0) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex === representatives.length - 1 ? 0 : prevIndex + 1));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? representatives.length - 1 : prevIndex - 1));
      }
      setIsAnimating(false);
    }, 300);
  };

  const nextSlide = () => handleSlideChange('next');
  const prevSlide = () => handleSlideChange('prev');

  const currentRep = representatives[currentIndex] || {};

  return (
    <section className="py-12 px-8 bg-[#15110F] flex flex-col items-center">
      <div className="text-center mb-14" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className="text-3xl md:text-5xl font-serif font-normal text-white mb-2 uppercase tracking-[1.5px]">COUNTRY <span style={{ color: 'var(--color-brand-base)' }}>REPRESENTATIVE</span></h2>
        <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0]">Building Trust Across Borders</p>
      </div>

      <div className="relative max-w-[1100px] w-full flex items-center justify-center" ref={sliderRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        {representatives.length > 0 ? (
          <>
            <button className="absolute top-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center cursor-pointer z-10 transition-all duration-200 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-[var(--color-brand-base)] hover:border-[var(--color-brand-base)] hover:text-[#15110F] active:-translate-y-1/2 active:scale-95 -left-5 max-md:-left-2.5" onClick={prevSlide} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>

            <div className="bg-[#15110F] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex w-full p-12 gap-12 min-h-[420px] items-center max-md:min-h-[650px] max-md:h-auto max-md:p-8 max-md:text-center max-md:py-10">
              <div className={`w-full flex items-center gap-12 max-md:flex-col max-md:gap-8 transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex-none w-[300px] h-[300px] rounded-xl overflow-hidden bg-[#15110F] max-md:w-[250px] max-md:h-[250px] max-md:mx-auto">
                  <img src={currentRep.photo || '/narendra.jpeg'} alt={currentRep.name} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src="/harsh.png"; }} />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif text-[1.6rem] font-medium text-white mb-4 uppercase tracking-[1.5px]">{currentRep.name}</h3>
                  <h4 className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-6">{currentRep.role}</h4>
                  <p className="font-sans text-[15.2px] text-[#b5aaa0] leading-[1.8] m-0">{currentRep.description}</p>
                </div>
              </div>
            </div>

            <button className="absolute top-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center cursor-pointer z-10 transition-all duration-200 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-[var(--color-brand-base)] hover:border-[var(--color-brand-base)] hover:text-[#15110F] active:-translate-y-1/2 active:scale-95 -right-5 max-md:-right-2.5" onClick={nextSlide} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center w-full min-h-[420px] text-[#b5aaa0]">Loading...</div>
        )}
      </div>
    </section>
  );
};

export default CountryRepresentatives;
