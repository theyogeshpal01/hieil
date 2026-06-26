import React from 'react';
import styles from './LuxuryHeritage.module.css';

const LuxuryHeritage = () => {
  return (
    <section className={styles.luxuryHeritage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.overlineContainer}>
            <span className={styles.overline}>OUR HERITAGE</span>
            <div className={styles.line}></div>
          </div>
          
          <h2 className={styles.title}>
            Born from<br />
            a <span className={styles.italic}>Passion</span><br />
            for Perfection
          </h2>
          
          <div className={styles.description}>
            <p>
              Since 1994, HIEIL has stood at the intersection of art and wearable luxury. 
              Each piece is conceived in our Paris atelier and handcrafted by master 
              artisans who have devoted their lives to the pursuit of flawlessness.
            </p>
            <p>
              We do not follow trends. We set the quiet standard by which true 
              connoisseurs measure refinement.
            </p>
          </div>
          
          <button className={styles.btnSecondary}>DISCOVER OUR STORY</button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHeritage;
