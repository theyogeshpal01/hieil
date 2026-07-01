import React from 'react';
import { Filter } from 'lucide-react';

const FilterBar = () => {
  return (
    <section className="pt-20 px-8 pb-8 bg-[#15110F] max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-[3.5rem] font-normal text-white mb-2 uppercase tracking-[2px] max-md:text-[3.5rem]">
          THE GREAT <br /> <span style={{ color: 'var(--color-brand-base)' }}>INDIAN HANDICRAFT HERITAGE</span>
        </h2>
        <p className="font-sans text-[1.1rem] font-semibold text-[#b5aaa0] tracking-[1px]">HIEIL</p>
      </div>

      <div className="bg-[#15110F] rounded-lg p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-[1000px] mx-auto border border-[#2c241c]">
        <h3 className="font-serif text-[20px] font-semibold text-white text-center mb-8 uppercase tracking-[2px]">
          FILTER BY CATEGORY
        </h3>
        
        <div className="flex items-end gap-8 max-md:flex-col max-md:gap-6">
          <div className="flex-1 flex flex-col gap-2 max-md:w-full">
            <label className="font-sans text-[0.85rem] font-semibold text-[#db6e52] uppercase">Product Category</label>
            <select className="w-full py-[0.8rem] px-4 font-sans text-[0.95rem] text-[#b5aaa0] border border-[#2c241c] rounded bg-[#15110F] cursor-pointer outline-none transition-colors duration-200 focus:border-[var(--color-brand-dark)]">
              <option>All categories</option>
              <option>Blue Pottery</option>
              <option>Metal categories</option>
              <option>Stone categories</option>
              <option>Wooden categories</option>
              <option>Luxury Clock</option>
            </select>
          </div>
          
          <div className="flex-1 flex flex-col gap-2 max-md:w-full">
            <label className="font-sans text-[0.85rem] font-semibold text-[#db6e52] uppercase">Material Type</label>
            <select className="w-full py-[0.8rem] px-4 font-sans text-[0.95rem] text-[#b5aaa0] border border-[#2c241c] rounded bg-[#15110F] cursor-pointer outline-none transition-colors duration-200 focus:border-[var(--color-brand-dark)]">
              <option>All Materials</option>
              <option>Ceramic</option>
              <option>Metal</option>
              <option>Stone</option>
              <option>Wood</option>
            </select>
          </div>
          
          <button className="bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-dark)] text-white border-none py-[0.9rem] px-10 rounded font-sans text-[0.9rem] font-semibold tracking-[1px] uppercase cursor-pointer flex items-center justify-center gap-2 transition-colors duration-200 h-[45px] flex-1 max-md:w-full">
            <Filter size={16} className="-mt-[1px]" />
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
