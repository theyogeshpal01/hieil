import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const faqs = [
  { id: 1, question: 'Company Overview', answer: 'We are a leading exporter of authentic Indian handicrafts, dedicated to preserving traditional artistry while meeting global quality standards.' },
  { id: 2, question: 'What categories Do We Export?', answer: 'We export a wide range of handcrafted items including wooden categories, blue pottery, textiles, metal art, and home decor pieces.' },
  { id: 3, question: 'Where Are We Located?', answer: 'Our headquarters is based in India, with an extensive network of artisan clusters across various states to source the finest crafts.' },
  { id: 4, question: 'How To Place An Order?', answer: 'You can place an order by contacting our sales team via email or phone, or by submitting an inquiry through our website contact form.' },
  { id: 5, question: 'Shipping And Delivery', answer: 'We offer fast and reliable shipping worldwide. Delivery times depend on the destination and the size of the order.' },
  { id: 6, question: 'Payment Terms', answer: 'We accept multiple secure payment methods including T/T, SWIFT, PayPal, and Letter of Credit for bulk orders.' },
  { id: 7, question: 'Quality Assurance', answer: 'Every product undergoes strict quality control checks by our experienced team before being packed and dispatched.' },
  { id: 8, question: 'Contact Information', answer: 'You can reach us 24/7 via phone at +91 9050001972 or email us at indiaexport@hieil.com.' }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <h2 className={styles.title}>FREQUENTLY <span style={{ color: 'var(--color-brand-base)' }}>ASKED QUESTIONS</span></h2>
          <p className={styles.subtitle}>Find answers to common questions about our categories and services</p>
        </div>

        <div className={styles.categoryTab}>
          <h3 className={styles.categoryTitle}>INFORMATION</h3>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid} ref={gridRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`${styles.card} ${openId === faq.id ? styles.open : ''}`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className={styles.questionArea}>
                <h4 className={styles.question}>{faq.question}</h4>
                <div className={styles.icon}>
                  {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
              
              <div className={styles.answerArea} style={{ maxHeight: openId === faq.id ? '200px' : '0' }}>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.lineStyle}></div>
          <button className={styles.showMoreBtn}>Show More Questions</button>
          <div className={styles.lineStyle}></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
