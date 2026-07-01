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
          <div className={styles.eyebrowContainer}>
              <span>ABOUT HIEIL</span>
            </div>
          <h2 className={styles.title}>
            Handcrafted categories, <br className={styles.hideMobile} />Inspired By <span className={styles.highlight}>India</span>
          </h2>
          
          <div className={styles.textContent}>
            <p>
              HIEIL (Hind Import Export International) is a Jaipur-based handicraft export firm led by Jogendra Singh, with over 2+ years of dedicated industry experience. Our team of 500+ highly skilled artisans carries forward centuries of tradition.
            </p>
            <p>
              Our mission is to empower traditional Indian craftsmen, enhance their livelihoods, and introduce the rich cultural artistry of India to discerning international buyers. Every piece tells a story — of culture, legacy, and passion.
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
            <video 
              src="/about-video.mp4" 
              className={styles.video} 
              autoPlay 
              muted 
              loop
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
