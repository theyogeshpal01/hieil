import React from 'react';
import { Users } from 'lucide-react';
import styles from './MeetOurArtisans.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const artisans = [
  {
    id: 1,
    category: 'Handcrafted Wooden categories',
    name: 'Surajmal & team',
    image: '/artisan1.png',
    desc1: 'Surajmal is a skilled artisan known for his expertise in crafting high-quality handcrafted wooden categories. With years of experience in traditional woodworking, he combines time-honored techniques with creative design to produce unique and elegant wooden handicrafts.',
    desc2: 'His craftsmanship reflects patience, precision, and a deep respect for natural materials. Each wooden piece created by Surajmal is carefully shaped, carved, and finished by hand, ensuring durability, beauty, and authenticity. His work often features traditional patterns and artistic detailing that represent the rich heritage of Indian handicrafts.'
  },
  {
    id: 2,
    category: 'Handcrafted Blue Pottery',
    name: 'Ahmad Ali & team',
    image: '/artisan2.jpg',
    desc1: 'Ahmad Ali is a skilled artisan specializing in the traditional art of handcrafted Blue Pottery, a craft deeply rooted in the rich cultural heritage of Rajasthan. With years of experience and dedication to this unique ceramic art form, he has mastered the intricate techniques of shaping, glazing, and decorating exquisite blue pottery pieces.',
    desc2: 'His work reflects the beauty of traditional craftsmanship combined with artistic precision. Each piece created by Ahmad Ali carries distinctive patterns, vibrant blue hues, and detailed hand-painted designs that represent the timeless elegance of Rajasthani heritage.'
  }
];

const MeetOurArtisans = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className={styles.title}>MEET <span style={{ color: 'var(--color-brand-base)' }}>OUR ARTISANS</span></h2>
        <p className={styles.subtitle}>The Hands Behind Our Crafts</p>
      </div>

      <div className={styles.grid} ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        {artisans.map((artisan) => (
          <div key={artisan.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={artisan.image} alt={artisan.name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.category}>{artisan.category}</h3>
              <h4 className={styles.name}>{artisan.name}</h4>
              <p className={styles.desc}>{artisan.desc1}</p>
              <p className={styles.desc}>{artisan.desc2}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.btnContainer}>
        <button className={styles.actionBtn}>
          <Users size={18} strokeWidth={2} />
          Show More Artisans
        </button>
      </div>
    </section>
  );
};

export default MeetOurArtisans;
