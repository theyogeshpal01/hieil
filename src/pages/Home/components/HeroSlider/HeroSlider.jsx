import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    eyebrow: 'Welcome to HIEIL (OPC) Pvt. Ltd.',
    title: 'Handcrafted categories,\nInspired By India',
    image: '/carousel1.png',
  },
  {
    id: 2,
    eyebrow: 'Authentic Indian Craftsmanship',
    title: 'Premium Handicrafts\nFor Global Markets',
    image: '/carousel2.png',
  },
  {
    id: 3,
    eyebrow: 'Sustainable & Ethical Practices',
    title: 'Timeless Artistry,\nWorldwide Reach',
    image: '/carousel3.png',
  },
  {
    id: 4,
    eyebrow: 'Preserving Traditional Techniques',
    title: 'Crafted By Hands,\nDelivered With Pride',
    image: '/carousel4.png',
  },
  {
    id: 5,
    eyebrow: 'Quality Assured Delivery',
    title: 'From India\'s Heart\nTo Your Doorstep',
    image: '/carousel5.png',
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent(p => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <div className={styles.hero}>
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prev} aria-label="Previous">
        <ArrowLeft size={18} />
      </button>
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next} aria-label="Next">
        <ArrowRight size={18} />
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
