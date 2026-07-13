import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const representatives = [
  {
    id: 1,
    name: 'Narendra Singh',
    title: 'French Language Expert/International Liaison Officer',
    desc: 'French Language Expert/International Liaison Officer ,Narendra Singh is a French Language Expert. He is also a translator.He has a lot of experience in language services.His work helps people communicate across countries and cultures.He knows the language very well.He also knows global language standards.Narendra has made a career of helping people translate text.His translations are accurate and professional.They are also sensitive, to cultures.',
    // desc: 'Narendra Singh is a distinguished French Language Expert and professional translator with extensive experience in linguistic services, international communication, and cross-cultural collaboration. With deep expertise in the French language and global linguistic standards, he has dedicated his career to facilitating accurate, professional, and culturally sensitive translations.',
    image: '/narendra.jpeg'
  },
  {
    id: 2,
    name: 'Mr. Harsh Vijay',
    title: 'Head of Design & Development',
    desc: 'Head of Design & Development Mr. Harsh Vijay is the Head of Design & Development. He brings creativity and innovation to the organization.He has a design vision.With an eye for detail he understands traditional craftsmanship and modern design trends.Harsh Vijay plays a role in creating unique product collections that are ready for the market.In his role Harsh Vijay leads design and development.He works closely with artisans and production teams.They transform concepts into high-quality handcrafted products.His focus is on mixing artistry with modern aesthetics.This helps create designs that appeal to both international markets.Harsh Vijay and his team make sure products are of quality.The designs are a mix of modern styles.This makes them attractive, to customers everywhere.',
    // desc: 'Mr. Harsh Vijay serves as the Head of Design & Development, bringing creativity, innovation, and a strong design vision to the organization. With a keen eye for detail and a deep understanding of traditional craftsmanship and modern design trends, he plays a vital role in shaping unique and market-ready product collections. In his role, Harsh Vijay leads the design and development process, working closely with artisans and production teams to transform creative concepts into high-quality handcrafted categories. His focus is on blending traditional artistry with contemporary aesthetics to create designs that appeal to both domestic and international markets.',
    image: '/harsh.png'
  },
  {
    id: 3,
    name: 'Mr. Rahoul Chouhan',
    title: 'Strategic Country Advisor',
    desc: 'Mr. Rahoul Chauhan.Strategic Country Advisor.Rahoul Chauhan is a leader. He is known for working and thinking ahead. He wants to make businesses grow and do well.He leads by example. Makes sure things are done properly. Rahoul Chauhan builds relationships that last. He gets results and makes sure they are of high quality.Rahoul Chauhan is good, at planning. Thinks about the future. He likes to try things.',
    // desc: 'Rahoul Chouhan is a dynamic and visionary leader known for his dedication, strategic thinking, and commitment to excellence. With a strong passion for innovation and growth, he brings a forward-thinking approach to leadership, focusing on building sustainable business relationships and delivering high-quality results.',
    image: '/rahoul.png'
  }
];

const CountryRepresentatives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const headerRef = useScrollAnimation();
  const sliderRef = useScrollAnimation();

  const handleSlideChange = (direction) => {
    if (isAnimating) return;
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

  const currentRep = representatives[currentIndex];

  return (
    <section className="py-12 px-8 bg-[#15110F] flex flex-col items-center">
      <div className="text-center mb-14" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className="text-3xl md:text-5xl font-serif font-normal text-white mb-2 uppercase tracking-[1.5px]">COUNTRY <span style={{ color: 'var(--color-brand-base)' }}>REPRESENTATIVE</span></h2>
        <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0]">Building Trust Across Borders</p>
      </div>

      <div className="relative max-w-[1100px] w-full flex items-center justify-center" ref={sliderRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        <button className="absolute top-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center cursor-pointer z-10 transition-all duration-200 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-[var(--color-brand-base)] hover:border-[var(--color-brand-base)] hover:text-[#15110F] active:-translate-y-1/2 active:scale-95 -left-5 max-md:-left-2.5" onClick={prevSlide} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>

        <div className="bg-[#15110F] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex w-full p-12 gap-12 h-[420px] items-center max-md:h-[650px] max-md:p-8 max-md:text-center">
          <div className={`w-full flex items-center gap-12 max-md:flex-col max-md:gap-8 transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex-none w-[300px] h-[300px] rounded-xl overflow-hidden bg-[#15110F] max-md:w-[250px] max-md:h-[250px] max-md:mx-auto">
              <img src={currentRep.image} alt={currentRep.name} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="font-serif text-[1.6rem] font-medium text-white mb-4 uppercase tracking-[1.5px]">{currentRep.name}</h3>
              <h4 className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-6">{currentRep.title}</h4>
              <p className="font-sans text-[15.2px] text-[#b5aaa0] leading-[1.8] m-0">{currentRep.desc}</p>
            </div>
          </div>
        </div>

        <button className="absolute top-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center cursor-pointer z-10 transition-all duration-200 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-[var(--color-brand-base)] hover:border-[var(--color-brand-base)] hover:text-[#15110F] active:-translate-y-1/2 active:scale-95 -right-5 max-md:-right-2.5" onClick={nextSlide} aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default CountryRepresentatives;
