import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./RelatedProducts.module.css";
import { categories } from "../../../../data/products";

const Relatedcategories = () => {
  // Use the first 4 categories as related categories for now
  const relatedcategories = categories.slice(0, 4);

  return (
    <section className={styles.relatedSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>YOU MAY <br /> <span style={{ color: 'var(--color-brand-base)' }}>ALSO LIKE</span></h2>
        
        <div className={styles.grid}>
          {relatedcategories.map(product => (
            <div key={product.id} className={styles.card}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.imageContainer}>
                  {product.discount && (
                    <span className={styles.discountBadge}>{product.discount}</span>
                  )}
                  <img src={product.image} alt={product.name} className={styles.productImage} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
                </div>
                
                <div className={styles.info}>
                  <p className={styles.brand}>{product.brand}</p>
                  <h3 className={styles.title}>{product.name}</h3>
                  
                  <div className={styles.rating}>
                    <span>â˜…</span><span>â˜…</span><span>â˜…</span><span>â˜…</span><span>â˜…</span>
                  </div>
                  
                  <div className={styles.pricing}>
                    {product.priceOnRequest || !product.price ? (
                      <span className={styles.newPrice}>Price on Request</span>
                    ) : (
                      <>
                        {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>}
                        <span className={styles.newPrice}>${product.price.toFixed(2)}</span>
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
