import React from 'react';
import { Users } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const artisans = [
  {
    id: 1,
    category: 'Handcrafted Wooden categories',
    name: 'Surajmal & team',
    image: '/artisan1.png',
    desc1: 'Surajmal is a skilled artisan known for his expertise in crafting high-quality handcrafted wooden categories. With years of experience in traditional woodworking, he combines time-honored techniques with creative design to produce unique and elegant wooden handicrafts.',
    desc2: 'His craftsmanship reflects patience, precision, and a deep respect for natural materials. Each wooden piece created by Surajmal is carefully shaped, carved, and finished by hand, ensuring durability, beauty, and authenticity. His work often features traditional patterns and artistic detailing that represent the rich heritage of Indian handicrafts.'
  },
  {
    id: 2,
    category: 'Handcrafted Blue Pottery',
    name: 'Ahmad Ali & team',
    image: '/artisan2.jpg',
    desc1: 'Ahmad Ali is a skilled artisan specializing in the traditional art of handcrafted Blue Pottery, a craft deeply rooted in the rich cultural heritage of Rajasthan. With years of experience and dedication to this unique ceramic art form, he has mastered the intricate techniques of shaping, glazing, and decorating exquisite blue pottery pieces.',
    desc2: 'His work reflects the beauty of traditional craftsmanship combined with artistic precision. Each piece created by Ahmad Ali carries distinctive patterns, vibrant blue hues, and detailed hand-painted designs that represent the timeless elegance of Rajasthani heritage.'
  }
];

const MeetOurArtisans = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className="py-12 px-8 bg-[#15110F] max-w-[1400px] mx-auto">
      <div className="text-center mb-16" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className="text-3xl md:text-5xl font-serif font-normal text-white mb-2 uppercase tracking-[1.5px] max-md:text-[3.5rem]">MEET <span style={{ color: 'var(--color-brand-base)' }}>OUR ARTISANS</span></h2>
        <p className="font-sans text-[1.1rem] font-normal text-[#888888]">The Hands Behind Our Crafts</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] max-md:grid-cols-1 gap-12 max-w-[1300px] mx-auto mb-14" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        {artisans.map((artisan) => (
          <div key={artisan.id} className="bg-[#15110F] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group">
            <div className="w-full h-[340px] overflow-hidden">
              <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </div>
            
            <div className="p-10 max-md:p-6">
              <h3 className="font-serif text-[1.15rem] font-semibold text-white mb-2 uppercase tracking-[1px]">{artisan.category}</h3>
              <h4 className="font-sans text-base font-semibold text-[#c8956c] mb-6">{artisan.name}</h4>
              <p className="font-sans text-[0.95rem] text-[#6c757d] leading-[1.7] mb-5">{artisan.desc1}</p>
              <p className="font-sans text-[0.95rem] text-[#6c757d] leading-[1.7] mb-0">{artisan.desc2}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="bg-[#c8956c] text-[#15110F] border border-[#c8956c] rounded-md py-4 px-8 font-sans text-base font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-transparent hover:text-[#c8956c] hover:-translate-y-0.5">
          <Users size={18} strokeWidth={2} />
          Show More Artisans
        </button>
      </div>
    </section>
  );
};

export default MeetOurArtisans;
