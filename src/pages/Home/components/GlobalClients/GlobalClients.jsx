import React from 'react';
import { Check, MapPin, TrendingUp, Users, Globe2, Award, Handshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import styles from './GlobalClients.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const stats = [
  { number: '7+',    label: 'Years Experience', icon: <TrendingUp size={20} strokeWidth={1.5} /> },
  { number: '25+',   label: 'Countries Served',  icon: <Globe2    size={20} strokeWidth={1.5} /> },
  { number: '500+',  label: 'Artisan Clusters',  icon: <Users     size={20} strokeWidth={1.5} /> },
  { number: '1000+', label: 'Local Clients',      icon: <Award     size={20} strokeWidth={1.5} /> },
];

const countries = [
  'USA', 'UK', 'Canada', 'Australia', 'Germany',
  'France', 'UAE', 'Japan', 'Singapore', 'South Africa',
  'Italy', 'Netherlands', 'New Zealand', 'Sweden', 'Brazil',
];

const certifications = [
  'MSME Certified',
  'Handicraft Export Promotion Council Member',
  'Fair Trade Certified',
  'Eco-Friendly Production Certified',
  'Government of India Recognized Exporter',
];

const associations = [
  'Federation of Indian Export Organisations (FIEO)',
  'Export Promotion Council for Handicrafts (EPCH)',
  'Craftmark \u2014 All India Artisans & Craftworkers',
  'Associated with 500+ Artisan Clusters',
];

const GlobalClients = () => {
  const headingRef = useScrollAnimation();
  const statsRef   = useScrollAnimation();
  const lowerRef   = useScrollAnimation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Top: heading + stats */}
        <div className={styles.topRow}>
          <div className={styles.headingCol} ref={headingRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            <span className={styles.eyebrow}>Our Global Presence</span>
            <h2 className={styles.title}>Trusted By Global<br />Clients & Partners</h2>
            <p className={styles.subtitle}>
              Over 2+ years of excellence in exporting authentic Indian handicrafts \u2014 maintaining the highest standards of quality and reliability worldwide.
            </p>
          </div>

          <div className={styles.statsGrid} ref={statsRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statIcon}>{s.icon}</div>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Re-designed Lower Section */}
        <div className={styles.lowerLayout} ref={lowerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          
          <div className={styles.lowerTopRow}>
            {/* Export Network Box */}
            <div className={`${styles.box} ${styles.exportBox}`}>
              <div className={styles.boxHeader}>
                <Globe2 size={16} strokeWidth={1.5} className={styles.boxIcon} />
                <h3 className={styles.boxTitle}>EXPORTING TO</h3>
              </div>
              <div className={styles.pillGrid}>
                {countries.map((c, i) => (
                  <span key={i} className={styles.squarePill}>{c}</span>
                ))}
              </div>
            </div>

            {/* Trade Associations Box */}
            <div className={`${styles.box} ${styles.tradeBox}`}>
              <div className={styles.boxHeader}>
                <ShieldCheck size={16} strokeWidth={1.5} className={styles.boxIcon} />
                <h3 className={styles.boxTitle}>TRADE ASSOCIATIONS</h3>
              </div>
              <div className={styles.tradeList}>
                {associations.map((item, i) => (
                  <div key={i} className={styles.tradeItem}>
                    <span className={styles.tradeItemName}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Box */}
          <div className={`${styles.box} ${styles.certBox}`}>
            <div className={styles.boxHeader}>
              <Award size={16} strokeWidth={1.5} className={styles.boxIcon} />
              <h3 className={styles.boxTitle}>CERTIFICATIONS & QUALITY</h3>
            </div>
            <div className={styles.certGrid}>
              {certifications.map((item, i) => (
                <div key={i} className={styles.certItem}>
                  <CheckCircle2 size={14} strokeWidth={1.5} className={styles.certCheck} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalClients;