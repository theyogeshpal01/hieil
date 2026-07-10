import React from 'react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const categories = [
  { id: 1, name: 'BLUE POTTERY', tag: '200+ DESIGNS', image: '/cat-bluepottery.jpg', description: 'GI tagged authentic Jaipur Blue Pottery with intricate floral designs.' },
  { id: 2, name: 'METAL CRAFTS', tag: '350+ DESIGNS', image: '/cat-metal.jpg', description: 'Exquisite handcrafted metal artistry bringing timeless elegance to your spaces.' },
  { id: 3, name: 'STONE PRODUCTS', tag: '400+ DESIGNS', image: '/cat-stone.jpg', description: 'Finely carved stone products reflecting the true heritage of Indian artisans.' },
  { id: 4, name: 'WOODEN CRAFTS', tag: '250+ DESIGNS', image: '/cat-wood.jpg', description: 'Premium Sheesham woodware showcasing intricate traditional carvings.' },
  { id: 5, name: 'LUXURY CLOCKS', tag: '150+ DESIGNS', image: '/cat-clock.jpg', description: 'Vintage and modern luxury clocks crafted with ultimate precision.' },
  { id: 6, name: 'HOME DECOR', tag: '280+ DESIGNS', image: '/products-brass.jpg', description: 'A curated collection of artifacts to effortlessly elevate your living spaces.' }
];

const ShopBycategories = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  
  const renderItem = (category) => (
    <div key={category.id} className="relative overflow-hidden rounded cursor-pointer aspect-[3/4] border border-transparent transition-colors duration-400 ease-in-out group hover:border-[#c8956c]">
      <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0)_100%)] flex flex-col justify-end p-8 pt-6 pointer-events-none">
        <div className="translate-y-[30px] transition-transform duration-400 ease-in-out group-hover:translate-y-0">
          <span className="block font-sans text-[0.7rem] tracking-[2px] text-[#c8956c] mb-1.5 uppercase">{category.tag}</span>
          <h3 className="font-serif text-[1.4rem] text-white m-0 uppercase">{category.name}</h3>
          <p className="font-sans text-[0.85rem] text-[#b5aaa0] mt-3 mb-0 leading-[1.5] opacity-0 max-h-0 transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:max-h-[100px]">{category.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#15110F] py-20 px-8">
      <div className="text-center mb-14" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <div className="font-['Inter','Outfit',sans-serif] text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>OUR COLLECTION</span>
            </div>
        <h2 className="text-3xl md:text-5xl font-serif font-normal text-white m-0 mb-4 uppercase">SHOP BY <span className="text-[#c8956c]">CATEGORIES</span></h2>
        <p className="font-sans text-[1.1rem] text-[#b5aaa0] max-w-[600px] mx-auto m-0">Explore our diverse range of authentic Indian handicrafts</p>
      </div>

      <div className="max-w-[1200px] mx-auto flex justify-between gap-6 max-md:flex-wrap max-sm:flex-col" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        <div className="flex-1 flex flex-col gap-6 max-md:flex-[1_1_45%] max-sm:flex-[1_1_100%]">
          {renderItem(categories[0])}
          {renderItem(categories[3])}
        </div>
        <div className="flex-1 flex flex-col gap-6 max-md:flex-[1_1_45%] max-sm:flex-[1_1_100%]">
          {renderItem(categories[1])}
          {renderItem(categories[4])}
        </div>
        <div className="flex-1 flex flex-col gap-6 max-md:flex-[1_1_45%] max-sm:flex-[1_1_100%]">
          {renderItem(categories[2])}
          {renderItem(categories[5])}
        </div>
      </div>
    </section>
  );
};

export default ShopBycategories;
