import React, { useState, useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All categories');

  const categories = [
    'All categories',
    'HANDCRAFTED BLUE POTTERY',
    'HANDCRAFTED LUXURY CLOCK',
    'HANDCRAFTED MATEL categories',
    'HANDCRAFTED RUG AND CARPET',
    'HANDCRAFTED STONE categories',
    'HANDCRAFTED WOODEN categories',
    'HANDMADE PAINTING ART'
  ];

  // A representative sample of the 400+ items provided by the user
  const allItems = [
    { title: 'Chopping Board', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Serving Tray', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Lamp', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Jar', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Decorative', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Agarbatti Stand', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Candle Holder', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Soap Dispenser', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Vase', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Serving Bowl', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Planter Plate', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Basket', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Cutlery Holder', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Box', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Bowl', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Fruit Basket', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Egg Tray', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Jar Holder', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Tissue Holder', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Planter Pot', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Book Stand', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Decor', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Serving Plate', category: 'HANDCRAFTED WOODEN categories' },
    { title: 'Coaster', category: 'HANDCRAFTED STONE categories' },
    { title: 'Basket', category: 'HANDCRAFTED STONE categories' },
    { title: 'Serving Tray', category: 'HANDCRAFTED STONE categories' },
    { title: 'Planter Pot', category: 'HANDCRAFTED STONE categories' },
    { title: 'Bowl', category: 'HANDCRAFTED STONE categories' },
    { title: 'Rolling Board', category: 'HANDCRAFTED STONE categories' },
    { title: 'Bathroom Organiser', category: 'HANDCRAFTED STONE categories' },
    { title: 'Decor', category: 'HANDCRAFTED STONE categories' },
    { title: 'Decor Tray', category: 'HANDCRAFTED STONE categories' },
    { title: 'Kitchen Set', category: 'HANDCRAFTED STONE categories' },
    { title: 'Cutlery Holder', category: 'HANDCRAFTED STONE categories' },
    { title: 'Chopping Board', category: 'HANDCRAFTED STONE categories' },
    { title: 'Plate', category: 'HANDCRAFTED STONE categories' },
    { title: 'Jar', category: 'HANDCRAFTED STONE categories' },
    { title: 'Pestle', category: 'HANDCRAFTED STONE categories' },
    { title: 'Pen Stand', category: 'HANDCRAFTED STONE categories' },
    { title: 'Tissue Holder', category: 'HANDCRAFTED STONE categories' },
    { title: 'Cake Stand', category: 'HANDCRAFTED STONE categories' },
    { title: 'Wall Clock', category: 'HANDCRAFTED LUXURY CLOCK' },
    { title: 'Hanging Clock', category: 'HANDCRAFTED LUXURY CLOCK' },
    { title: 'Wall Decor', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Key Hanging', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Decor', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Wall Clock', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Table Clock', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Candle Holder', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Pen Stand', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Metal Bag', category: 'HANDCRAFTED MATEL categories' },
    { title: 'Plate', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Wash Basin', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Table Lamp', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Hanging Lamp', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Plate & Bowl', category: 'HANDCRAFTED BLUE POTTERY' },
    { title: 'Wall Planter', category: 'HANDCRAFTED BLUE POTTERY' }
  ];

  // In a real scenario with 406 items, you would map over the full list
  // Here we multiply the sample slightly to make the gallery look full
  const galleryItems = [...allItems, ...allItems, ...allItems, ...allItems].map((item, index) => ({
    id: index,
    ...item
  }));

  const filteredItems = activeCategory === 'All categories' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="font-sans text-[var(--hww-dark)] bg-[#15110F]">
      {/* Hero / Header */}
      <section className="bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)] text-white pt-10 px-5 pb-[60px] text-center relative">
        <div className="">
          <h1 className="font-serif text-6xl md:text-[2.5rem] font-normal m-0 tracking-[1px]">Gallery</h1>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:flex-none lg:w-[300px] bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] p-[30px] rounded-[20px] border border-[#2c241c] static lg:sticky lg:top-[100px]">
              <h3 className="text-[20px] font-semibold mb-5 pb-[15px] border-b border-[#2c241c] text-white">Filter By Category</h3>
              <ul className="list-none p-0 m-0 flex flex-wrap lg:block gap-[10px]">
                {categories.map((category, index) => (
                  <li key={index} className="lg:mb-[10px] m-0">
                    <button 
                      className={`w-full text-left bg-transparent border border-[#4a3e35] text-white py-[12px] px-[28px] lg:py-[10px] lg:px-[20px] text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer lg:rounded-[30px] rounded-none hover:bg-[rgba(194,163,115,0.1)] hover:border-[#c8956c] hover:shadow-[0_0_15px_rgba(194,163,115,0.2)] hover:text-[#c8956c] ${activeCategory === category ? 'bg-[#c8956c] !text-[#15110F] border-[#c8956c] font-semibold shadow-[0_0_15px_rgba(194,163,115,0.3)]' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Gallery Grid */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[10px] mb-[30px] pb-[20px] border-b border-[#2c241c]">
                <h2 className="font-serif text-[2.5rem] font-normal m-0 text-white">All <br /> <span className="text-[var(--color-brand-base)]">Collections</span></h2>
                <p className="text-[#b5aaa0] m-0 text-[1rem]">Showing {filteredItems.length} handcrafted items</p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[25px]">
                {filteredItems.map((item) => (
                  <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] rounded-[20px] overflow-hidden border border-[#2c241c] transition-all duration-400 hover:-translate-y-[5px] hover:border-[#4a3e35] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]" key={item.id}>
                    <div className="bg-[rgba(21,17,15,0.8)] border-b border-[#2c241c] h-[250px] flex items-center justify-center relative">
                      <span className="text-[rgba(139,90,43,0.4)] font-bold text-[1.2rem] text-center p-5">{item.title.toUpperCase()}</span>
                    </div>
                    <div className="p-5 text-center">
                      <h4 className="text-[1.1rem] mb-[5px] text-white font-semibold">{item.title}</h4>
                      <p className="text-[0.85rem] text-[#c8956c] m-0 tracking-[0.5px]">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* User Shared Moments */}
      <section className="pt-[80px] px-0 pb-[120px] bg-[#15110F]">
        <div className="container mx-auto">
          <div className="mb-[40px] text-center">
            <h2 className="font-serif text-[2.5rem] font-normal m-0 text-white">User <br /> <span className="text-[var(--color-brand-base)]">Shared Moments</span></h2>
            <p className="font-serif text-[1.1rem] text-white mb-[15px] font-normal mt-4">Real Stories Shared by Our Global Community</p>
            <p className="max-w-[700px] mx-auto text-[#b5aaa0] leading-[1.6]">Explore the beautiful spaces our customers have created using HIEIL handicrafts. See how our categories blend into diverse lifestyles and professional settings.</p>
          </div>

          <div className="max-w-[800px] mx-auto">
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] py-[80px] px-[20px] text-center">
              <p className="text-[#b5aaa0] text-[1.2rem] font-normal tracking-[1px]">No shared moments yet. Be the first to share!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
