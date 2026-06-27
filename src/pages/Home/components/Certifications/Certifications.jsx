import React from 'react';
import { ShieldCheck, BadgeCheck, FileCheck2, Landmark } from 'lucide-react';
import styles from './Certifications.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const certifications = [
  {
    id: '01',
    icon: <FileCheck2 size={30} strokeWidth={1.5} />,
    title: 'Importer Exporter Code',
    subtitle: 'IEC Certificate',
    desc: 'Officially registered with DGFT for international trade operations.',
  },
  {
    id: '02',
    icon: <Landmark size={30} strokeWidth={1.5} />,
    title: 'PAN Card',
    subtitle: 'Tax Identity',
    desc: 'Permanent Account Number issued by the Income Tax Department of India.',
  },
  {
    id: '03',
    icon: <BadgeCheck size={30} strokeWidth={1.5} />,
    title: 'Udyam Registration',
    subtitle: 'MSME Certified',
    desc: 'Recognized as a Micro, Small & Medium Enterprise by Govt. of India.',
  },
  {
    id: '04',
    icon: <ShieldCheck size={30} strokeWidth={1.5} />,
    title: 'Income Tax (ITR)',
    subtitle: 'Tax Compliance',
    desc: 'Fully compliant with Indian taxation laws and annual return filings.',
  },
];

const Certifications = () => {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <span className={styles.eyebrow}>Trust & Transparency</span>
          <h2 className={styles.title}>Our Certifications & Accreditations</h2>
          <p className={styles.subtitle}>
            Recognized for excellence in quality and authentic Indian handicraft exports â€” verified, compliant, and trusted worldwide.
          </p>
        </div>

        <div className={styles.scrollContainer} ref={cardsRef} style={{opacity:0,transition:'opacity 0.7s ease,transition-delay:0.15s'}}>
          <div className={styles.scrollTrack}>
            {[...certifications, ...certifications].map((cert, i) => (
              <div key={i} className={styles.card}>
              <div className={styles.cardInner}>
                <span className={styles.number}>{cert.id}</span>
                <div className={styles.iconBox}>{cert.icon}</div>
                <div className={styles.badge}>{cert.subtitle}</div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certDesc}>{cert.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <button className={styles.viewBtn}>View Certificate</button>
                <button className={styles.downloadBtn}>Download</button>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
