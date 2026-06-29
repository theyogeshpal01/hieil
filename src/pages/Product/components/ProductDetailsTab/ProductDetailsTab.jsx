import React from 'react';
import styles from './ProductDetailsTab.module.css';

const ProductDetailsTab = ({ product }) => {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>
        <div className={styles.tabsHeader}>
          <button className={`${styles.tabBtn} ${styles.active}`}>DESCRIPTION</button>
        </div>

        <div className={styles.tabContent}>
          <h2 className={styles.contentTitle}>About <br /> <span style={{ color: 'var(--color-brand-base)' }}>this item</span></h2>
          <p className={styles.paragraph}>
            {product?.description || "These bowl set are very light to hold for microwave utensils and the smooth round edges make you touch them with delight. Unlike ceramic bowls or plastic bowl our unbreakable wheat straw bowls are made of a robust and light material that protects the bowl from breaking if it is dropped, get this must-have tableware item that is both eco-friendly and stylish for your home."}
          </p>

          <div className={styles.bannerContainer}>
            <img 
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop" 
              alt="Ceramic items" 
              className={styles.bannerImage}
              onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }}
            />
            <div className={styles.bannerOverlay}>
              <h3>Ceramic Items</h3>
              <p>Dinner Bowls - Ribbed Pattern</p>
              <p>200ml Cream Ceramic</p>
              <p>Handcrafted</p>
            </div>
          </div>

          {product?.highlights ? (
            <ul className={styles.featureList}>
              {product.highlights.map((highlight, idx) => {
                const colonIndex = highlight.indexOf(':');
                if (colonIndex > -1) {
                  const boldText = highlight.substring(0, colonIndex + 1);
                  const restText = highlight.substring(colonIndex + 1);
                  return (
                    <li key={idx}><strong>{boldText}</strong>{restText}</li>
                  );
                }
                return <li key={idx}>{highlight}</li>;
              })}
            </ul>
          ) : (
            <ul className={styles.featureList}>
              <li>Perfect Brew Everytime: Perfectly brews 2 - 3 cups of tea.</li>
              <li>Lead FREE Ceramic: Made from lead free high-fired finely glazed ceramic.</li>
              <li>1 Year Warranty: Crafted with meticulous attention to detail.</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTab;
