import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import api from '../../../../config/api';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../../../../components/common/LazyMedia/LazyImage';

const ShopBycategories = () => {
  const [categories, setCategories] = useState([]);
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  const navigate = useNavigate();
  
  useEffect(() => {
    api.get('/categories')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setCategories(res.data);
        }
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);
  
  const renderItem = (category) => {
    if (!category) return null;
    return (
      <div onClick={() => navigate(`/products/${encodeURIComponent(category.name)}`)} key={category._id || category.id} className="relative overflow-hidden rounded cursor-pointer border border-transparent transition-colors duration-400 ease-in-out group hover:border-[#c8956c] aspect-[3/4] w-full">
        <LazyImage src={category.image} alt={category.name} className="absolute inset-0 w-full h-full [&>img]:transition-transform [&>img]:duration-600 [&>img]:ease-in-out group-hover:[&>img]:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0)_100%)] flex flex-col justify-end p-8 pt-6 pointer-events-none z-10">
          <div className="translate-y-[30px] transition-transform duration-400 ease-in-out group-hover:translate-y-0">
            <span className="block font-sans text-[0.7rem] tracking-[2px] text-[#c8956c] mb-1.5 uppercase">{category.tag || 'LATEST DESIGNS'}</span>
            <h3 className="font-serif text-[1.4rem] text-white m-0 uppercase">{category.name}</h3>
            <p className="font-sans text-[0.85rem] text-[#b5aaa0] mt-3 mb-0 leading-[1.5] opacity-0 max-h-0 transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:max-h-[100px]">{category.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#15110F] py-20 px-8">
      <div className="text-center mb-14" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <div className="font-['Inter','Outfit',sans-serif] text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>OUR COLLECTION</span>
            </div>
        <h2 className="text-3xl md:text-5xl font-serif font-normal text-white m-0 mb-4 uppercase">SHOP BY <span className="text-[#c8956c]">CATEGORIES</span></h2>
        <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0]">Explore our diverse range of authentic Indian handicrafts</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        {categories.slice(0, 6).map(category => renderItem(category))}
      </div>
    </section>
  );
};

export default ShopBycategories;
