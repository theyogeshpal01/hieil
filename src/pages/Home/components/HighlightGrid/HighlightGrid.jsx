import React from 'react';
import { Recycle, HandHeart, Leaf } from 'lucide-react';
import styles from './HighlightGrid.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const commitments = [
  {
    id: 1,
    title: 'ECO PACKAGING',
    description: '100% biodegradable materials',
    Icon: Recycle,
  },
  {
    id: 2,
    title: 'FAIR WAGES',
    description: 'Supporting artisan livelihoods',
    Icon: HandHeart,
  },
  {
    id: 3,
    title: 'HANDMADE',
    description: 'Traditional techniques preserved',
    Icon: Leaf,
  }
];

const HighlightGrid = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <h2 className={styles.mainTitle}>OUR COMMITMENT</h2>
          <p className={styles.mainSubtitle}>Sustainable & Ethical Practices</p>
        </div>

        <div className={styles.grid} ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          {commitments.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <item.Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightGrid;
