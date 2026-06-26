import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShoppingBag, Eye, Star, Layers, Maximize } from 'lucide-react';
import styles from './FeaturedProducts.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import { categories } from '../../../../data/products';

const Featuredcategories = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className={styles.title}>FEATURED categories</h2>
        <p className={styles.subtitle}>Discover authentic Indian artistry crafted by skilled artisans</p>
      </div>

      <div className={styles.grid} ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        {categories.slice(0, 4).map((product) => (
          <div key={product.id} className={styles.card}>
            
            <div className={styles.imageArea}>
              {product.tag && <span className={styles.tag}>{product.tag}</span>}
              
              <div className={styles.hoverActions}>
                <button className={styles.actionIconBtn} aria-label="Add to Wishlist" onClick={(e) => e.preventDefault()}><Heart size={18} strokeWidth={1.5} /></button>
                <button className={styles.actionIconBtn} aria-label="Compare" onClick={(e) => e.preventDefault()}><Layers size={18} strokeWidth={1.5} /></button>
                <button className={styles.actionIconBtn} aria-label="Quick View" onClick={(e) => e.preventDefault()}><Maximize size={18} strokeWidth={1.5} /></button>
              </div>

              <Link to={`/product/${product.id}`} style={{ display: 'block' }}>
                <img src={product.image} alt={product.name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
              </Link>
              
              {product.colors && (
                <div className={styles.colorVariants}>
                  {product.colors.map((color, idx) => (
                    <span key={idx} className={styles.colorDot} style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              )}
            </div>
            
            <div className={styles.productInfo}>
              <h4 className={styles.brandName}>{product.brand}</h4>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <h3 className={styles.productName}>{product.name}</h3>
              </Link>
              {product.description && <p className={styles.productDescription}>{product.description}</p>}
              
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < product.rating ? '#cccccc' : 'none'} stroke={i < product.rating ? '#cccccc' : '#dddddd'} />
                ))}
              </div>

              <div className={styles.priceArea}>
                {product.priceOnRequest || !product.price ? (
                  <span className={styles.currentPrice}>Price on Request</span>
                ) : (
                  <>
                    {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>}
                    <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
                  </>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
      
      <div className={styles.viewAllContainer}>
        <button className={styles.viewAllBtn}>VIEW ALL categories</button>
      </div>
    </section>
  );
};

export default Featuredcategories;
