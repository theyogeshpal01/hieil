import React from 'react';
import styles from './LuxuryQuote.module.css';

const LuxuryQuote = () => {
  return (
    <section className={styles.luxuryQuote}>
      <div className={styles.container}>
        <div className={styles.quoteIcon}>"</div>
        <p className={styles.quoteText}>
          HIEIL does not dress you in fabric. It dresses you<br />
          in intention. Every seam is a sentence in a<br />
          language only the discerning can read.
        </p>
        <div className={styles.authorContainer}>
          <div className={styles.line}></div>
          <p className={styles.author}>
            ARIA MEHTA <span className={styles.dot}>&middot;</span> CREATIVE DIRECTOR, VOGUE INDIA
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxuryQuote;
