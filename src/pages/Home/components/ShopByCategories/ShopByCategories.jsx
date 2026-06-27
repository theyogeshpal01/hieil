import React from 'react';
import styles from './ShopByCategories.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const categories = [
  { id: 1, name: 'BLUE POTTERY', tag: '200+ DESIGNS', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500&auto=format&fit=crop', description: 'GI tagged authentic Jaipur Blue Pottery with intricate floral designs.' },
  { id: 2, name: 'METAL CRAFTS', tag: '350+ DESIGNS', image: 'https://images.unsplash.com/photo-1577908976451-c67be8f9b940?q=80&w=500&auto=format&fit=crop', description: 'Exquisite handcrafted metal artistry bringing timeless elegance to your spaces.' },
  { id: 3, name: 'STONE PRODUCTS', tag: '400+ DESIGNS', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=500&auto=format&fit=crop', description: 'Finely carved stone products reflecting the true heritage of Indian artisans.' },
  { id: 4, name: 'WOODEN CRAFTS', tag: '250+ DESIGNS', image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=500&auto=format&fit=crop', description: 'Premium Sheesham woodware showcasing intricate traditional carvings.' },
  { id: 5, name: 'LUXURY CLOCKS', tag: '150+ DESIGNS', image: 'https://images.unsplash.com/photo-1508013861974-9f6347ce682c?q=80&w=500&auto=format&fit=crop', description: 'Vintage and modern luxury clocks crafted with ultimate precision.' },
  { id: 6, name: 'HOME DECOR', tag: '280+ DESIGNS', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500&auto=format&fit=crop', description: 'A curated collection of artifacts to effortlessly elevate your living spaces.' }
];

const ShopBycategories = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  
  const renderItem = (category) => (
    <div key={category.id} className={styles.categoryItem}>
      <img src={category.image} alt={category.name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
      <div className={styles.overlay}>
        <div className={styles.textContent}>
          <span className={styles.tag}>{category.tag}</span>
          <h3 className={styles.categoryName}>{category.name}</h3>
          <p className={styles.description}>{category.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <span className={styles.eyebrow}>OUR COLLECTION</span>
        <h2 className={styles.title}>SHOP BY <span className={styles.highlight}>CATEGORIES</span></h2>
        <p className={styles.subtitle}>Explore our diverse range of authentic Indian handicrafts</p>
      </div>

      <div className={styles.categoriesGrid} ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        <div className={styles.col}>
          {renderItem(categories[0])}
          {renderItem(categories[3])}
        </div>
        <div className={styles.col}>
          {renderItem(categories[1])}
          {renderItem(categories[4])}
        </div>
        <div className={styles.col}>
          {renderItem(categories[2])}
          {renderItem(categories[5])}
        </div>
      </div>
    </section>
  );
};

export default ShopBycategories;