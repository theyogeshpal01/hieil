import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './CountryRepresentatives.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const representatives = [
  {
    id: 1,
    name: 'Narendra Singh',
    title: 'French Language Expert/International Liaison Officer',
    desc: 'Narendra Singh is a distinguished French Language Expert and professional translator with extensive experience in linguistic services, international communication, and cross-cultural collaboration. With deep expertise in the French language and global linguistic standards, he has dedicated his career to facilitating accurate, professional, and culturally sensitive translations.',
    image: '/narendra.jpeg'
  },
  {
    id: 2,
    name: 'Mr. Harsh Vijay',
    title: 'Head of Design & Development',
    desc: 'Mr. Harsh Vijay serves as the Head of Design & Development, bringing creativity, innovation, and a strong design vision to the organization. With a keen eye for detail and a deep understanding of traditional craftsmanship and modern design trends, he plays a vital role in shaping unique and market-ready product collections. In his role, Harsh Vijay leads the design and development process, working closely with artisans and production teams to transform creative concepts into high-quality handcrafted categories. His focus is on blending traditional artistry with contemporary aesthetics to create designs that appeal to both domestic and international markets.',
    image: '/harsh.png'
  },
  {
    id: 3,
    name: 'Mr. Rahoul Chouhan',
    title: 'Strategic Country Advisor',
    desc: 'Rahoul Chouhan is a dynamic and visionary leader known for his dedication, strategic thinking, and commitment to excellence. With a strong passion for innovation and growth, he brings a forward-thinking approach to leadership, focusing on building sustainable business relationships and delivering high-quality results.',
    image: '/rahoul.png'
  }
];

const CountryRepresentatives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef = useScrollAnimation();
  const sliderRef = useScrollAnimation();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === representatives.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? representatives.length - 1 : prevIndex - 1));
  };

  const currentRep = representatives[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
        <h2 className={styles.title}>COUNTRY REPRESENTATIVE</h2>
        <p className={styles.subtitle}>Building Trust Across Borders</p>
      </div>

      <div className={styles.sliderContainer} ref={sliderRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>

        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={currentRep.image} alt={currentRep.name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.name}>{currentRep.name}</h3>
            <h4 className={styles.jobTitle}>{currentRep.title}</h4>
            <p className={styles.description}>{currentRep.desc}</p>
          </div>
        </div>

        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default CountryRepresentatives;
