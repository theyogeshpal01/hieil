import React from 'react';
import { Award, Globe, Hand, ArrowRight, Compass, FileText, Handshake, Truck, Medal, ShieldCheck, Headset } from 'lucide-react';
import styles from './AboutCTASection.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const badges = [
  { icon: <Award size={15} />, label: '7+ Years Experience' },
  { icon: <Globe size={15} />, label: 'Global Export' },
  { icon: <Hand size={15} />, label: 'Authentic Craftsmanship' },
];

const features = [
  { icon: <Truck size={32} strokeWidth={1.5} />, title: 'Global Shipping', desc: 'Free worldwide delivery on orders above $15,000' },
  { icon: <Medal size={32} strokeWidth={1.5} />, title: 'Premium Quality', desc: 'Handpicked categories with 7+ years of expertise' },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Quality Assured', desc: 'Every product inspected by skilled artisans before dispatch' },
  { icon: <Headset size={32} strokeWidth={1.5} />, title: 'Expert Support', desc: 'Dedicated team to assist your requirements anytime' },
];

const AboutCTASection = () => {
  const leftRef    = useScrollAnimation();
  const rightRef   = useScrollAnimation();
  const featRef    = useScrollAnimation();
  const ctaRef     = useScrollAnimation();
  return (
    <section className={styles.section}>

      {/* Top — Split Layout */}
      <div className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.leftCol} ref={leftRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            <span className={styles.eyebrow}>About HIEIL</span>
            <h2 className={styles.title}>Handcrafted categories,<br />Inspired By India</h2>
            <div className={styles.badges}>
              {badges.map((b, i) => (
                <span key={i} className={styles.badge}>{b.icon}{b.label}</span>
              ))}
            </div>
          </div>
          <div className={styles.rightCol} ref={rightRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
            <p className={styles.subtitle}>
              Welcome to HIEIL (OPC) Pvt. Ltd. We bring India's timeless handicrafts to the global stage. Every product reflects the artistry of skilled Indian craftsmen — preserved through generations, delivered with modern excellence.
            </p>
            <button className={styles.mainBtn}>
              Why Choose HIEIL <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className={styles.featuresStrip}>
        <div className={styles.featuresGrid} ref={featRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <h4 className={styles.featureTitle}>{f.title}</h4>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
      </div>

      {/* CTA Bottom */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer} ref={ctaRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <span className={styles.ctaEyebrow}>Get Started</span>
          <h2 className={styles.ctaTitle}>Ready To Elevate Your Space<br />With Authentic Handicrafts?</h2>
          <p className={styles.ctaSubtitle}>
            Discover India's finest artisan creations. Whether you're decorating your home, sourcing for your business, or building a long-term partnership — we're here for you.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaBtnPrimary}><Compass size={17} /> Explore Collection</button>
            <button className={styles.ctaBtnOutline}><FileText size={17} /> Request Quote</button>
            <button className={styles.ctaBtnOutline}><Handshake size={17} /> Partner With Us</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutCTASection;
