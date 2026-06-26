import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Grid, List, Star } from 'lucide-react';
import styles from './Shop.module.css';

import { categories } from "../../data/products";

// Mock filters matching Image 1 categories
const FILTERS = [
  {
    id: 'availability',
    title: 'AVAILABILITY',
    options: ['In stock (5)', 'Out of stock (0)']
  },
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
  
  // Determine initial category from URL
  const initialCategory = categoryId ? categoryMap[categoryId] || 'All categories' : 'All categories';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter categories based on selected states
  const filteredcategories = categories.filter(product => {
    // Category Filter (Maps to product.brand in the mock data)
    if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes('All categories')) {
      if (!selectedFilters.categories.includes(product.brand)) return false;
    }

    // Material Filter
    if (selectedFilters.material.length > 0) {
      // product.specifications.Material is e.g. "quartz stone powder"
      // Options are e.g. "Quartz stone powder"
      const prodMat = product.specifications?.Material?.toLowerCase() || '';
      const matchMat = selectedFilters.material.some(m => prodMat.includes(m.toLowerCase()));
      if (!matchMat) return false;
    }

    // Artisan Region Filter
    if (selectedFilters.artisan.length > 0) {
      const prodRegion = product.specifications?.['Artisan Origin']?.toUpperCase() || '';
      const matchReg = selectedFilters.artisan.some(a => a.toUpperCase() === prodRegion);
      if (!matchReg) return false;
    }

    return true;
  });

  return (
    <div className={styles.pageWrapper}>
      {/* Header Banner */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{initialCategory.toUpperCase()}</h1>
        <div className={styles.breadcrumbs}>
          <Link to="/">Home</Link> &gt; categories {initialCategory !== 'All categories' && `> ${initialCategory}`}
        </div>
      </div>

      <div className={styles.mainLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.filterHeader}>
            <h3>FILTER:</h3>
            <button className={styles.clearAllBtn} onClick={handleClearAll}>Clear All</button>
          </div>

          {FILTERS.map((section) => (
            <div key={section.id} className={styles.filterSection}>
              <button 
                className={styles.filterSectionHeader}
                onClick={() => toggleSection(section.id)}
              >
                {section.title}
                {openSections[section.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {openSections[section.id] && (
                <div className={styles.filterContent}>
                  {section.options.map((opt, idx) => (
                    <label key={idx} className={styles.checkboxLabel}>
                      <input 
                        type="checkbox" 
                        checked={(selectedFilters[section.id] || []).includes(opt)}
                        onChange={() => handleFilterChange(section.id, opt)}
                      /> 
                      {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Color Section */}
          <div className={styles.filterSection}>
            <button 
              className={styles.filterSectionHeader}
              onClick={() => toggleSection('colors')}
            >
              COLOR
              {openSections['colors'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {openSections['colors'] && (
              <div className={styles.colorSwatches}>
                {COLORS.map((color, idx) => (
                  <div 
                    key={idx} 
                    className={styles.colorSwatch} 
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Content Area */}
        <div className={styles.contentArea}>
          <div className={styles.topBar}>
            <div className={styles.resultsCount}>
              Showing {filteredcategories.length} results
            </div>
            
            <div className={styles.sortControls}>
              <div>
                Sort by: 
                <select className={styles.sortSelect} defaultValue="best">
                  <option value="best">Best selling</option>
                  <option value="price-asc">Price, low to high</option>
                  <option value="price-desc">Price, high to low</option>
                  <option value="new">Date, new to old</option>
                </select>
              </div>
              <div className={styles.productCount}>{filteredcategories.length} categories</div>
              <div className={styles.viewIcons}>
                <Grid size={18} className={`${styles.viewIcon} ${styles.active}`} />
                <List size={18} className={styles.viewIcon} />
              </div>
            </div>
          </div>

          <div className={styles.productGrid}>
            {filteredcategories.length === 0 ? (
              <div style={{ padding: '2rem 0', color: '#666' }}>No categories found matching your filters.</div>
            ) : (
              filteredcategories.map((product) => (
                <div key={product.id} className={styles.productCard}>
                <div className={styles.imageBox}>
                  {/* Mocking the badge logic from Image 3 */}
                  <span className={styles.badge}>{product.id % 2 === 0 ? '-19%' : '-5%'}</span>
                  
                  <Link to={`/product/${product.id}`} style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                  </Link>
                </div>
                
                <h4 className={styles.brandName}>{product.brand || 'CLAY CANVAS'}</h4>
                <Link to={`/product/${product.id}`}>
                  <h3 className={styles.productTitle}>{product.name} - Handcrafted Premium Decor</h3>
                </Link>
                
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < product.rating ? '#cccccc' : 'none'} stroke={i < product.rating ? '#cccccc' : '#dddddd'} />
                  ))}
                </div>
                
                <div className={styles.hoverActions}>
                  <Link to={`/product/${product.id}`} className={styles.actionBtnOutline}>Details</Link>
                  <Link to={`/product/${product.id}/enquiry`} className={styles.actionBtnPrimary}>Enquiry</Link>
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
