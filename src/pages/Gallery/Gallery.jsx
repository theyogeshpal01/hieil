import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import api from '../../config/api';

const Gallery = () => {
  const [userMoments, setUserMoments] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState(['All categories']);
  const [activeCategory, setActiveCategory] = useState('All categories');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch approved user moments
    api.get('/submissions/user-moments')
      .then(res => {
        const approved = res.data.filter(m => m.status === 'APPROVED');
        setUserMoments(approved);
      })
      .catch(err => console.error(err));
      
    // Fetch dynamic gallery items
    api.get('/gallery')
      .then(res => {
        setGalleryItems(res.data);
        const uniqueCats = ['All categories', ...new Set(res.data.map(item => item.category).filter(Boolean))];
        setCategories(uniqueCats);
      })
      .catch(err => console.error(err));
  }, []);

  const getImageForCategory = (category) => {
    switch(category) {
      case 'HANDCRAFTED BLUE POTTERY': return '/cat-bluepottery.jpg';
      case 'HANDCRAFTED LUXURY CLOCK': return '/cat-clock.jpg';
      case 'HANDCRAFTED MATEL categories': return '/cat-metal.jpg';
      case 'HANDCRAFTED STONE categories': return '/cat-stone.jpg';
      case 'HANDCRAFTED WOODEN categories': return '/cat-wood.jpg';
      default: return '/jaipur.jpeg';
    }
  };


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

      <section className="py-[60px] w-full">
        <div className="w-full px-5 mb-[40px] flex justify-center">
          <ul className="list-none p-0 m-0 flex flex-wrap justify-center gap-[15px] max-w-[1200px]">
            {categories.map((category, index) => (
              <li key={index} className="m-0">
                <button 
                  className={`whitespace-nowrap text-center bg-transparent border border-[#4a3e35] !text-white py-[10px] px-[24px] text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer rounded-[30px] hover:bg-[rgba(194,163,115,0.1)] hover:border-[#c8956c] hover:shadow-[0_0_15px_rgba(194,163,115,0.2)] hover:!text-[#c8956c] ${activeCategory === category ? 'bg-[#c8956c] !text-[#15110F] border-[#c8956c] font-semibold shadow-[0_0_15px_rgba(194,163,115,0.3)]' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-[60px] md:px-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredItems.length === 0 ? (
            <div className="col-span-full py-10 text-center text-[#b5aaa0] text-lg">
              No images available in this gallery yet.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div 
                className="relative overflow-hidden group cursor-pointer aspect-[4/3] w-full" 
                key={item._id || item.id}
                onClick={() => setSelectedItem({
                  image: item.image || getImageForCategory(item.category),
                  title: item.title,
                  categoryName: (item.category || '').replace('HANDCRAFTED ', '').replace(' categories', ''),
                  tagline: item.tagline || '200+ DESIGNS'
                })}
              >
                <img src={item.image || getImageForCategory(item.category)} alt={item.title || item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/10 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-[30px] z-10 w-full">
                  <p className="text-[10px] text-[#c8956c] m-0 mb-[8px] tracking-[2px] uppercase font-bold">{item.tagline || '200+ DESIGNS'}</p>
                  <h4 className="text-[1.3rem] m-0 text-white font-serif tracking-[1px] uppercase drop-shadow-md">{(item.category || '').replace('HANDCRAFTED ', '').replace(' categories', '')}</h4>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* User Shared Moments */}
      <section className="pt-[80px] px-0 pb-[120px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-[40px] text-center">
            <h2 className="font-serif text-[2.5rem] font-normal m-0 text-white">User <br /> <span className="text-[var(--color-brand-base)]">Shared Moments</span></h2>
            <p className="font-serif text-[1.1rem] text-white mb-[15px] font-normal mt-4">Real Stories Shared by Our Global Community</p>
            <p className="max-w-[700px] mx-auto text-[#b5aaa0] leading-[1.6]">Explore the beautiful spaces our customers have created using HIEIL handicrafts. See how our categories blend into diverse lifestyles and professional settings.</p>
          </div>

          <div className="max-w-[1200px] mx-auto">
            {userMoments.length === 0 ? (
              <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] py-[80px] px-[20px] text-center max-w-[800px] mx-auto">
                <p className="text-[#b5aaa0] text-[1.2rem] font-normal tracking-[1px]">No shared moments yet. Be the first to share!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {userMoments.map(moment => (
                  moment.submittedPhotos.map((photoUrl, pIndex) => (
                    <div 
                      key={`${moment._id}-${pIndex}`} 
                      className="relative overflow-hidden group rounded-[10px] bg-[#1C1713] aspect-square cursor-pointer"
                      onClick={() => setSelectedItem({
                        image: photoUrl,
                        title: moment.userName ? `Shared by ${moment.userName}` : 'User Shared Moment',
                        tagline: 'COMMUNITY MOMENT'
                      })}
                    >
                      <img src={photoUrl} alt="User Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-[20px] z-10 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[0.9rem] m-0 text-white font-serif tracking-[1px]">{moment.userName}</p>
                      </div>
                    </div>
                  ))
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-zoom-out backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#c8956c] transition-colors cursor-pointer bg-black/60 hover:bg-black/80 rounded-full p-2.5 z-20 border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative flex flex-col items-center max-w-[95vw] md:max-w-[85vw] max-h-[90vh] cursor-default bg-[#1C1713] border border-[#2c241c] rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center max-h-[70vh] md:max-h-[75vh] w-full overflow-hidden rounded-xl bg-black/40">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title || selectedItem.categoryName || "Fullscreen view"} 
                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl transition-transform duration-300"
              />
            </div>
            
            <div className="w-full text-center mt-4 px-4 pt-1 pb-2">
              {selectedItem.tagline && (
                <p className="text-[11px] md:text-[13px] text-[#c8956c] m-0 mb-1 tracking-[2px] uppercase font-bold">
                  {selectedItem.tagline}
                </p>
              )}
              <h3 className="text-xl md:text-2xl text-white font-serif tracking-[1px] uppercase m-0 drop-shadow-md">
                {selectedItem.title || selectedItem.categoryName}
              </h3>
              {selectedItem.title && selectedItem.categoryName && (
                <p className="text-xs md:text-sm text-[#b5aaa0] m-0 mt-1 uppercase tracking-[1px] font-medium">
                  {selectedItem.categoryName}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
