import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import api from '../../../../config/api';

const MeetOurArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  useEffect(() => {
    // Fetch artisans from backend
    api.get('/artisans')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setArtisans(res.data);
        }
      })
      .catch(err => console.error('Error fetching artisans:', err));
  }, []);

  return (
    <section className="py-12 px-8 bg-[#15110F] max-w-[1400px] mx-auto">
      <div className="text-center mb-16" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className="text-3xl md:text-5xl font-serif font-normal text-white mb-2 uppercase tracking-[1.5px] max-md:text-[3.5rem]">MEET <span style={{ color: 'var(--color-brand-base)' }}>OUR ARTISANS</span></h2>
        <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0]">The Hands Behind Our Crafts</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] max-md:grid-cols-1 gap-12 max-w-[1300px] mx-auto mb-14" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        {artisans.map((artisan) => {
          const textParts = artisan.text ? artisan.text.split('\n\n') : [];
          const desc1 = textParts[0] || '';
          const desc2 = textParts[1] || '';
          return (
            <div key={artisan._id} className="bg-[#15110F] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group">
              <div className="w-full h-[340px] overflow-hidden">
                <img src={artisan.preview || '/artisan1.png'} alt={artisan.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="/artisan2.jpg"; }} />
              </div>
              
              <div className="p-10 max-md:p-6">
                <h3 className="font-serif text-[1.15rem] font-semibold text-white mb-2 uppercase tracking-[1px]">{artisan.description}</h3>
                <h4 className="font-sans text-base font-semibold text-[#c8956c] mb-6">{artisan.title}</h4>
                <p className="font-sans text-[0.95rem] text-[#6c757d] leading-[1.7] mb-5">{desc1}</p>
                <p className="font-sans text-[0.95rem] text-[#6c757d] leading-[1.7] mb-0">{desc2}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center">
        <button className="bg-[#c8956c] text-[#15110F] border border-[#c8956c] rounded-md py-4 px-8 font-sans text-base font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:opacity-85 hover:-translate-y-0.5">
          <Users size={18} strokeWidth={2} />
          Show More Artisans
        </button>
      </div>
    </section>
  );
};

export default MeetOurArtisans;
