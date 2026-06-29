import React from 'react';
import { Download, Phone, Mail, Clock, BookOpen, Palette, ArrowRight } from 'lucide-react';
import styles from './ProductCatalogue.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const catalogues = [
  {
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    tag: 'Full Range',
    title: 'Product Catalogue',
    desc: 'Browse our complete collection of authentic handcrafted Indian categories — from home dÃ©cor to gifting essentials.',
    highlights: ['200+ Unique categories', 'HD Product Images', 'Pricing & MOQ Details'],
  },
  {
    icon: <Palette size={28} strokeWidth={1.5} />,
    tag: 'Bespoke',
    title: 'Custom categories',
    desc: 'Get tailored solutions for your brand — custom sizes, finishes, packaging, and exclusive artisan designs.',
    highlights: ['Custom Sizing & Finish', 'Private Label Options', 'Bulk Order Support'],
  },
];

const contacts = [
  { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Call Us', value: '+91-90500 01972' },
  { icon: <Mail  size={18} strokeWidth={1.5} />, label: 'Email Inquiry', value: 'indiaexport@hieil.com' },
  { icon: <Clock size={18} strokeWidth={1.5} />, label: 'Response Time', value: 'Within 2 Business Hours' },
];

const ProductCatalogue = () => {
  const headerRef  = useScrollAnimation();
  const gridRef    = useScrollAnimation();
  const contactRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className={styles.eyebrowContainer}>
              <span>RESOURCES</span>
            </div>
          <h2 className={styles.title}>Product Catalogue <br /> <span style={{ color: 'var(--color-brand-base)' }}>& Quotation</span></h2>
          <p className={styles.subtitle}>
            Get detailed product information and customized pricing for your business needs.
          </p>
        </div>

        <div className={styles.grid} ref={gridRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.1s'}}>
          {catalogues.map((cat, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHead}>
                <div className={styles.iconBox}>{cat.icon}</div>
                <span className={styles.tag}>{cat.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
              <ul className={styles.highlights}>
                {cat.highlights.map((h, j) => (
                  <li key={j}>
                    <ArrowRight size={13} className={styles.arrow} />
                    {h}
                  </li>
                ))}
              </ul>
              <button className={styles.downloadBtn}>
                <Download size={16} /> Download Catalogue (PDF)
              </button>
            </div>
          ))}
        </div>

        <div className={styles.contactStrip} ref={contactRef} style={{opacity:0,transform:'translateY(20px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.2s'}}>
          {contacts.map((c, i) => (
            <div key={i} className={styles.contactItem}>
              <div className={styles.contactIcon}>{c.icon}</div>
              <div>
                <p className={styles.contactLabel}>{c.label}</p>
                <p className={styles.contactValue}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCatalogue;
