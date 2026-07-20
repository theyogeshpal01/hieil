import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from "../../../../data/products";

const Relatedcategories = () => {
  // Use the first 4 categories as related categories for now
  const relatedcategories = categories.slice(0, 4);

  return (
    <section className="py-16 px-8 bg-[#15110F]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center font-serif text-[1.5rem] text-white mb-12 uppercase tracking-[1px]">YOU MAY <br /> <span style={{ color: 'var(--color-brand-base)' }}>ALSO LIKE</span></h2>
        
        <div className="grid grid-cols-4 gap-8 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
          {relatedcategories.map(product => (
            <div key={product.id} className="flex flex-col">
              <Link to={`/product/${product.id}`} className="group no-underline text-inherit">
                <div className="relative bg-[#15110F] p-8 flex items-center justify-center mb-4 h-[280px] rounded">
                  {product.discount && (
                    <span className="absolute top-[10px] left-[10px] bg-[#d86c4f] text-white text-[0.7rem] font-semibold py-[0.2rem] px-[0.4rem]">{product.discount}</span>
                  )}
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-[0.7rem] text-[#888888] m-0 uppercase tracking-[0.5px]">{product.brand}</p>
                  <h3 className="font-serif text-[1.2rem] text-white m-0 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h3>
                  
                  <div className="text-[#dddddd] text-[0.8rem] tracking-[2px]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1 font-serif">
                    {product.priceOnRequest || !product.price ? (
                      <span className="text-[#c07a5d] font-semibold text-[0.95rem]">Price on Request</span>
                    ) : (
                      <>
                        {product.oldPrice && <span className="text-[#999999] line-through text-[0.85rem]">${product.oldPrice.toFixed(2)}</span>}
                        <span className="text-[#c07a5d] font-semibold text-[0.95rem]">${product.price.toFixed(2)}</span>
                      </>
                    )}
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

export default Relatedcategories;
