import React from 'react';
import { Recycle, HandHeart, Leaf } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const commitments = [
  {
    id: 1,
    title: 'ECO PACKAGING',
    description: '100% biodegradable materials',
    Icon: Recycle,
  },
  {
    id: 2,
    title: 'FAIR WAGES',
    description: 'Supporting artisan livelihoods',
    Icon: HandHeart,
  },
  {
    id: 3,
    title: 'HANDMADE',
    description: 'Traditional techniques preserved',
    Icon: Leaf,
  }
];

const HighlightGrid = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className="py-20 px-8 bg-[#15110F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <h2 className="font-serif text-[2rem] font-medium text-white tracking-[2px] m-0 mb-2 uppercase">OUR <br /> <span style={{ color: 'var(--color-brand-base)' }}>COMMITMENT</span></h2>
          <p className="font-sans text-[3.5rem] text-[#b5aaa0] m-0">Sustainable & Ethical Practices</p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-8" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          {commitments.map((item) => (
            <div key={item.id} className="bg-[#15110F] py-12 px-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-center transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="text-[#b4795e] mb-6 flex justify-center">
                <item.Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[3.5rem] font-medium text-white tracking-[1.5px] uppercase m-0 mb-3">{item.title}</h3>
              <p className="font-sans text-[0.95rem] text-[#b5aaa0] m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightGrid;
