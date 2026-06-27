import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeaturedProducts.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import { categories } from '../../../../data/products';

const Featuredcategories = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>FEATURED</span>
            <h2 className={styles.title}>FEATURED <span className={styles.highlight}>CATEGORIES</span></h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>Discover authentic Indian artistry crafted by skilled artisans</p>
          </div>
        </div>
        <div className={styles.grid} ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          {categories.slice(0, 4).map((product) => (
            <div key={product.id} className={styles.card}>
              <Link to={/product/ + product.id} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
                  <div className={styles.overlay}>
                    <span className={styles.tag}>{product.brand || 'ARTISAN'}</span>
                    <h3 className={styles.productName}>{product.name}</h3>
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