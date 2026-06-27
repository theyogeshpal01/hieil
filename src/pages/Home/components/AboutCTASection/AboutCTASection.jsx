import React from 'react';
import { ShieldCheck, Award, Globe, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AboutCTASection.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const features = [
  { icon: <Globe size={16} strokeWidth={1.5} />, label: 'Global Shipping' },
  { icon: <Award size={16} strokeWidth={1.5} />, label: 'Premium Quality' },
  { icon: <ShieldCheck size={16} strokeWidth={1.5} />, label: 'Quality Assured' },
  { icon: <Leaf size={16} strokeWidth={1.5} />, label: 'Expert Support' },
];

const AboutCTASection = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftCol} ref={leftRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <span className={styles.eyebrow}>About HIEIL</span>
          <h2 className={styles.title}>
            Handcrafted categories, <br className={styles.hideMobile} />Inspired By <span className={styles.highlight}>India</span>
          </h2>
          
          <div className={styles.textContent}>
            <p>
              Welcome to HIEIL (OPC) Pvt. Ltd. We bring India's timeless handicrafts to the global stage. Every product reflects the artistry of skilled Indian craftsmen â€” preserved through generations, delivered with modern excellence.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span className={styles.featureLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about/us" className={styles.learnMoreLink}>
            LEARN MORE ABOUT US <ArrowRight size={15} />
          </Link>
        </div>

        <div className={styles.rightCol} ref={rightRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          <div className={styles.mediaFrame}>
            <video className={styles.video} autoPlay loop muted playsInline><source src="/about-Video.mp4" type="video/mp4" /></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
