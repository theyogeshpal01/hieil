import React from 'react';
import { Check, MapPin, TrendingUp, Users, Globe2, Award, Handshake } from 'lucide-react';
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
  'Craftmark — All India Artisans & Craftworkers',
  'Associated with 500+ Artisan Clusters',
];

const GlobalClients = () => {
  const headingRef = useScrollAnimation();
  const statsRef   = useScrollAnimation();
  const countriesRef = useScrollAnimation();
  const bottomRef  = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Top: heading + stats */}
        <div className={styles.topRow}>
          <div className={styles.headingCol} ref={headingRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            <span className={styles.eyebrow}>Our Global Presence</span>
            <h2 className={styles.title}>Trusted By Global<br />Clients & Partners</h2>
            <p className={styles.subtitle}>
              Over 7+ years of excellence in exporting authentic Indian handicrafts — maintaining the highest standards of quality and reliability worldwide.
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

        {/* Countries strip */}
        <div className={styles.countriesBlock} ref={countriesRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className={styles.countriesLabel}>
            <MapPin size={14} /> Exporting To
          </div>
          <div className={styles.countriesStrip}>
            {countries.map((c, i) => (
              <span key={i} className={styles.countryPill}>{c}</span>
            ))}
          </div>
        </div>

        {/* Bottom: two panels */}
        <div className={styles.bottomRow} ref={bottomRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <Award size={18} strokeWidth={1.5} className={styles.panelIcon} />
              <h3 className={styles.panelTitle}>Certifications & Quality</h3>
            </div>
            <ul className={styles.list}>
              {certifications.map((item, i) => (
                <li key={i}>
                  <Check size={13} className={styles.check} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} />

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <Handshake size={18} strokeWidth={1.5} className={styles.panelIcon} />
              <h3 className={styles.panelTitle}>Trade Associations</h3>
            </div>
            <ul className={styles.list}>
              {associations.map((item, i) => (
                <li key={i}>
                  <Check size={13} className={styles.check} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalClients;
