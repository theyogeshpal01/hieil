import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import api from '../../../../config/api';
import LazyImage from '../../../../components/common/LazyMedia/LazyImage';

const Featuredcategories = () => {
  const [products, setProducts] = useState([]);
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  useEffect(() => {
    // Fetch products from backend
    api.get('/products')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
        }
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <section className="w-full bg-[#15110F] py-20 px-8 border-t border-[#2c241c]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-14 border-b border-[#2c241c] pb-6 max-lg:flex-col max-lg:items-start max-lg:gap-4" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className="flex-1">
            <div className="font-['Inter','Outfit',sans-serif] text-xs tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>FEATURED</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-white m-0 uppercase leading-none max-sm:text-[3.5rem]">FEATURED <span className="text-[#c8956c]">CATEGORIES</span></h2>
          </div>
          <div className="flex-1 text-right max-lg:text-left w-full">
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-5">Discover authentic Indian artistry crafted by skilled artisans</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          {products.slice(0, 4).map((product) => (
            <div key={product._id} className="relative overflow-hidden rounded aspect-[3/4] group">
              <Link to={'/product/' + product._id} className="block w-full h-full no-underline">
                <div className="w-full h-full relative">
                  <LazyImage src={product.mainImage || 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=500&auto=format&fit=crop'} alt={product.productName} className="w-full h-full [&>img]:transition-transform [&>img]:duration-[600ms] [&>img]:ease-in-out group-hover:[&>img]:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
                  <div className="absolute bottom-0 left-0 right-0 pt-8 px-5 pb-5 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-transparent flex flex-col">
                    <span className="font-sans text-[0.65rem] tracking-[2px] text-[#c8956c] mb-1.5 uppercase">{product.category || 'ARTISAN'}</span>
                    <h3 className="font-serif text-[1.1rem] text-white m-0 uppercase">{product.productName}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Featuredcategories;
