import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Grid, List, Star } from 'lucide-react';
import axios from 'axios';

// Mock filters matching Image 1 categories
const FILTERS = [
  {
    id: 'categories',
    title: 'categories',
    options: [
      'All categories',
      'Handcrafted Blue Pottery',
      'Handcrafted Metal categories',
      'Handcrafted Stone categories',
      'Handcrafted Wooden categories',
      'Luxury clock'
    ]
  },
  {
    id: 'artisan',
    title: 'ARTISAN REGION',
    options: ['JAIPUR']
  },
  {
    id: 'material',
    title: 'MATERIAL TYPE',
    options: [
      'Metal',
      'Natural Stone As Per Selection',
      'Quartz stone powder',
      'Sheesham wood / Teak wood'
    ]
  },
  {
    id: 'price',
    title: 'PRICE RANGE',
    options: [
      '$1 - $10',
      '$10 - $20',
      '$20 - $50',
      '$50 - $100',
      '$100 - $500',
      'Over $500'
    ]
  }
];

const COLORS = [
  '#cfb692', '#eae6d6', '#a1a1a1', '#7b4c34', '#000000',
  '#ffffff', '#647585', '#d4aa00', '#ba3f39', '#d1af81',
  '#f2b96e', '#b8860b', '#7a6042', '#a894a3', '#e4ccaa'
];

const categoryMap = {
  'blue-pottery': 'Handcrafted Blue Pottery',
  'metal': 'Handcrafted Metal categories',
  'stone': 'Handcrafted Stone categories',
  'wooden': 'Handcrafted Wooden categories',
  'clock': 'Luxury clock'
};

const Shop = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);
  const [categoriesList, setCategoriesList] = useState(['All categories']);
  const [viewMode, setViewMode] = useState('grid');
  
  // Determine initial category from URL
  const initialCategory = categoryId ? (categoryMap[categoryId] || categoryId) : 'All categories';

  const [openSections, setOpenSections] = useState({
    availability: true,
    categories: true,
    artisan: true,
    material: true,
    colors: true,
    price: true
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [initialCategory],
    material: [],
    artisan: [],
    availability: [],
    price: []
  });

  // Fetch categories and products
  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch categories
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/categories`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setCategoriesList(['All categories', ...res.data.map(cat => cat.name)]);
        }
      })
      .catch(err => console.error("Error fetching categories:", err));

    // Fetch products from backend
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/products`)
      .then(res => {
        if (res.data) {
          setCategories(res.data);
        }
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Update selected categories if the URL changes
  useEffect(() => {
    setSelectedFilters(prev => ({ ...prev, categories: [initialCategory] }));
  }, [initialCategory]);

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFilterChange = (sectionId, opt) => {
    setSelectedFilters(prev => {
      const current = prev[sectionId] || [];
      if (current.includes(opt)) {
        return { ...prev, [sectionId]: current.filter(c => c !== opt) };
      } else {
        return { ...prev, [sectionId]: [...current, opt] };
      }
    });
  };

  const handleClearAll = () => {
    setSelectedFilters({
      categories: ['All categories'],
      material: [],
      artisan: [],
      availability: [],
      price: []
    });
  };

  const dynamicFilters = [
    {
      id: 'categories',
      title: 'categories',
      options: categoriesList
    },
    ...FILTERS.slice(1)
  ];

  // Filter categories based on selected states
  const filteredcategories = categories.filter(product => {
    // Category Filter (Maps to product.category in the DB)
    if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes('All categories')) {
      if (!selectedFilters.categories.includes(product.category)) return false;
    }

    // Material Filter
    if (selectedFilters.material.length > 0) {
      // product.materials is e.g. "quartz stone powder"
      // Options are e.g. "Quartz stone powder"
      const prodMat = product.materials?.toLowerCase() || '';
      const matchMat = selectedFilters.material.some(m => prodMat.includes(m.toLowerCase()));
      if (!matchMat) return false;
    }

    // Artisan Region Filter (Not present directly in product schema, but we can check if it exists in descriptions)
    if (selectedFilters.artisan.length > 0) {
      const matchReg = selectedFilters.artisan.some(a => (product.description || '').toUpperCase().includes(a.toUpperCase()));
      if (!matchReg) return false;
    }

    return true;
  });

  return (
    <div className="bg-[#15110F] min-h-screen font-sans text-white">
      {/* Header Banner */}
      <div className="bg-[#15110F] p-[4rem_2rem] text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-normal text-white m-0 mb-[0.5rem] uppercase tracking-[1.5px]">
          {initialCategory.toUpperCase() === 'ALL CATEGORIES' ? (
            <>ALL <span className="text-[var(--color-brand-base)]">CATEGORIES</span></>
          ) : (
            initialCategory.toUpperCase()
          )}
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto p-[3rem_2rem] flex flex-col md:flex-row gap-[3.5rem]">
        {/* Sidebar */}
        <aside className="w-full md:w-[280px] shrink-0 sticky top-[2rem] max-h-[calc(100vh-4rem)] overflow-y-auto p-[25px] bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] scrollbar-thin scrollbar-thumb-[#e0e0e0] scrollbar-track-[#15110F] hover:scrollbar-thumb-[#c8956c]">
          <div className="flex justify-between items-center mb-[1.5rem] border-b border-[#2c241c] pb-[1rem]">
            <h3 className="font-serif text-[0.9rem] font-semibold text-white m-0 uppercase tracking-[1px]">FILTER:</h3>
            <button className="bg-transparent border-none font-sans text-[0.8rem] text-[#c8956c] cursor-pointer p-0" onClick={handleClearAll}>Clear All</button>
          </div>

          {dynamicFilters.map((section) => (
            <div key={section.id} className="border-b border-[#2c241c] py-[1.25rem]">
              <button 
                className="flex justify-between items-center cursor-pointer bg-transparent border-none w-full p-0 font-serif text-[0.85rem] font-semibold text-white uppercase tracking-[0.5px]"
                onClick={() => toggleSection(section.id)}
              >
                {section.title}
                {openSections[section.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {openSections[section.id] && (
                <div className="mt-[1rem] flex flex-col gap-[0.75rem]">
                  {section.options.map((opt, idx) => (
                    <label key={idx} className="flex items-center gap-[0.8rem] font-sans text-[0.85rem] text-[#b5aaa0] cursor-pointer transition-colors duration-300 hover:text-white group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          className="appearance-none w-[16px] h-[16px] border border-[#4a3e35] rounded-[4px] bg-transparent cursor-pointer transition-all duration-300 checked:bg-[#c8956c] checked:border-[#c8956c] peer"
                          checked={(selectedFilters[section.id] || []).includes(opt)}
                          onChange={() => handleFilterChange(section.id, opt)}
                        />
                        <span className="absolute left-[2px] top-[1px] text-[10px] text-[#15110F] opacity-0 peer-checked:opacity-100 pointer-events-none">✔</span>
                      </div>
                      {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Color Section */}
          <div className="border-b border-[#2c241c] py-[1.25rem]">
            <button 
              className="flex justify-between items-center cursor-pointer bg-transparent border-none w-full p-0 font-serif text-[0.85rem] font-semibold text-white uppercase tracking-[0.5px]"
              onClick={() => toggleSection('colors')}
            >
              COLOR
              {openSections['colors'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {openSections['colors'] && (
              <div className="flex flex-wrap gap-[0.8rem] mt-[1rem]">
                {COLORS.map((color, idx) => (
                  <div 
                    key={idx} 
                    className="w-[24px] h-[24px] rounded-full border border-[#4a3e35] cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-[0_0_10px_rgba(194,163,115,0.4)] hover:border-[#c8956c]" 
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-[2rem] font-sans text-[0.85rem] text-[#b5aaa0] border-b border-[#2c241c] pb-[1rem]">
            <div className="">
              Showing {filteredcategories.length} results
            </div>
            
            <div className="flex items-center gap-[1.5rem]">
              <div>
                Sort by: 
                <select className="border-none font-sans text-[0.85rem] text-white cursor-pointer bg-transparent outline-none font-medium ml-2" defaultValue="best">
                  <option value="best" className="text-black">Best selling</option>
                  <option value="price-asc" className="text-black">Price, low to high</option>
                  <option value="price-desc" className="text-black">Price, high to low</option>
                  <option value="new" className="text-black">Date, new to old</option>
                </select>
              </div>
              <div className="text-white font-medium hidden sm:block">{filteredcategories.length} categories</div>
              <div className="flex gap-[0.5rem]">
                <Grid size={18} onClick={() => setViewMode('grid')} className={`cursor-pointer ${viewMode === 'grid' ? 'text-[#c8956c]' : 'text-[#888888] hover:text-[#c8956c]'}`} />
                <List size={18} onClick={() => setViewMode('list')} className={`cursor-pointer ${viewMode === 'list' ? 'text-[#c8956c]' : 'text-[#888888] hover:text-[#c8956c]'}`} />
              </div>
            </div>
          </div>

          <div className={viewMode === 'grid' ? "grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[2.5rem]" : "flex flex-col gap-[1.5rem]"}>
            {filteredcategories.length === 0 ? (
              <div className="py-[2rem] text-[#666]">No categories found matching your filters.</div>
            ) : (
              filteredcategories.map((product) => (
                <div key={product._id} className={`bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] p-[20px] transition-all duration-400 hover:border-[#c8956c] hover:shadow-[0_10px_40px_rgba(194,163,115,0.05)] group relative ${viewMode === 'list' ? 'flex flex-row gap-[1.5rem] items-center' : 'flex flex-col h-full hover:-translate-y-[5px]'}`}>
                <div className={`rounded-[12px] bg-[#15110F] relative flex items-center justify-center overflow-hidden shrink-0 ${viewMode === 'list' ? 'w-[200px] h-[200px]' : 'w-full h-[260px] mb-[1rem]'}`}>
                  <span className="absolute top-[1rem] left-[1rem] bg-[#c8956c] text-[#000000] font-sans text-[0.7rem] font-semibold py-[0.25rem] px-[0.5rem] tracking-[0.5px] z-10 rounded-[4px]">{product.tag || '-5%'}</span>
                  
                  <Link to={`/product/${product._id}`} className="flex w-full h-full items-center justify-center">
                    <img src={product.mainImage || 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=500&auto=format&fit=crop'} alt={product.productName} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
                  </Link>
                </div>
                
                <div className={`flex flex-col ${viewMode === 'list' ? 'flex-1 py-[0.5rem]' : ''}`}>
                  <h4 className="font-sans text-[0.65rem] font-semibold text-[#888888] uppercase tracking-[1.5px] m-0 mb-[0.4rem]">{product.subCategory || product.category || 'CLAY CANVAS'}</h4>
                  <Link to={`/product/${product._id}`} className="no-underline group-hover:text-[#c8956c] transition-colors">
                    <h3 className={`font-serif font-medium text-white m-0 mb-[0.5rem] group-hover:text-[#c8956c] ${viewMode === 'list' ? 'text-[1.3rem] line-clamp-1' : 'text-[1.05rem] whitespace-nowrap overflow-hidden text-ellipsis'}`}>{product.productName}</h3>
                  </Link>
                  
                  <div className="flex gap-[2px] mb-[0.6rem]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < (product.rating || 5) ? '#cccccc' : 'none'} stroke={i < (product.rating || 5) ? '#cccccc' : '#dddddd'} />
                    ))}
                  </div>

                  {viewMode === 'list' && (
                    <p className="text-[0.85rem] text-[#b5aaa0] line-clamp-2 mb-[1rem] leading-[1.6]">
                      {product.description || 'Premium handcrafted product tailored to elevate your living spaces with authentic Indian artistry.'}
                    </p>
                  )}
                  
                  <div className={`flex justify-between items-center ${viewMode === 'list' ? 'mt-[0.5rem]' : 'mt-auto'}`}>
                    <span className="font-sans text-[1.15rem] font-semibold text-white">${Number(product.offerPrice || product.price || 0).toFixed(2)}</span>
                    <div className="flex gap-[0.5rem]">
                      <Link to={`/product/${product._id}`} className="p-[0.5rem_1rem] text-center border border-[#c8956c] text-[#c8956c] bg-transparent font-sans text-[0.8rem] font-normal uppercase rounded-[30px] transition-all duration-200 no-underline hover:bg-[#c8956c] hover:text-[#15110F]">Details</Link>
                      <Link to={`/product/${product._id}/enquiry`} className="p-[0.5rem_1rem] text-center border border-[#c8956c] bg-[#c8956c] text-[#15110F] font-sans text-[0.8rem] font-normal uppercase rounded-[30px] transition-all duration-200 no-underline hover:bg-transparent hover:text-[#c8956c]">Enquiry</Link>
                    </div>
                  </div>
                </div>
              </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
