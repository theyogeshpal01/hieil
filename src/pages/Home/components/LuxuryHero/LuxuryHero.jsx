import React from 'react';
import styles from './LuxuryHero.module.css';

const LuxuryHero = () => {
  return (
    <section className={styles.luxuryHero}>
      <div className={styles.heroContent}>
        <div className={styles.overline}>THE NEW COLLECTION &mdash; 2025</div>
        <h1 className={styles.title}>
          Where Art<br />
          Meets <span className={styles.italic}>Elegance</span>
        </h1>
        <p className={styles.subtitle}>
          Crafted for those who understand the language of luxury
        </p>
        <div className={styles.btnGroup}>
          <button className={styles.btnPrimary}>EXPLORE COLLECTION</button>
          <button className={styles.btnSecondary}>OUR ATELIER</button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;
