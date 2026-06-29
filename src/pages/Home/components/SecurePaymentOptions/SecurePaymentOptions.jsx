import React from 'react';
import { CreditCard, Landmark, Send, DollarSign, Globe, ShieldCheck, FileText, Lock, UserCheck } from 'lucide-react';
import styles from './SecurePaymentOptions.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const paymentMethods = [
  { title: 'T/T Transfer',      subtitle: 'Telegraphic Transfer',  tag: 'RELIABLE',  Icon: Landmark   },
  { title: 'Credit/Debit',      subtitle: 'Visa & MasterCard',     tag: 'SECURE',    Icon: CreditCard },
  { title: 'SWIFT',             subtitle: 'International Banks',   tag: '3-5 DAYS',  Icon: Send       },
  { title: 'PayPal',            subtitle: 'Online Payments',       tag: 'INSTANT',   Icon: DollarSign },
  { title: 'Wise',              subtitle: "Int'l Transfers",       tag: 'LOW FEES',  Icon: Globe      },
  { title: 'Letter of Credit',  subtitle: 'Trade Finance',         tag: 'PROTECTED', Icon: FileText   },
];

const trustBadges = [
  { icon: <Lock size={16} strokeWidth={2} />, label: '256-bit SSL' },
  { icon: <ShieldCheck size={16} strokeWidth={2} />, label: 'PCI DSS' },
  { icon: <UserCheck size={16} strokeWidth={2} />, label: 'Fraud Protection' },
];

const SecurePaymentOptions = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.glow}></div>
      <div className={styles.container}>

        <div className={styles.left} ref={leftRef} style={{opacity:0,transform:'translateX(-40px)',transition:'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowLine}></span>
            <div className={styles.eyebrowContainer}>
              <span>PAYMENTS</span>
            </div>
          </div>
          <h2 className={styles.title}>
            Secure <br />
            <span className={styles.highlight}>Payment</span><br />
            Options
          </h2>
          <p className={styles.subtitle}>
            Experience hassle-free global transactions with our trusted, safe, and compliant payment gateways.
          </p>
          <div className={styles.trustBadges}>
            {trustBadges.map((b, i) => (
              <div key={i} className={styles.trustBadge}>
                <div className={styles.trustIconWrapper}>{b.icon}</div>
                <span className={styles.trustLabel}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right} ref={rightRef} style={{opacity:0,transform:'translateX(40px)',transition:'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s'}}>
          <div className={styles.staggeredGrid}>
            <div className={styles.gridCol}>
              <Card m={paymentMethods[0]} />
              <Card m={paymentMethods[3]} />
            </div>
            <div className={styles.gridCol + ' ' + styles.shiftedCol}>
              <Card m={paymentMethods[1]} />
              <Card m={paymentMethods[4]} />
            </div>
            <div className={styles.gridCol}>
              <Card m={paymentMethods[2]} />
              <Card m={paymentMethods[5]} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Card = ({ m }) => (
  <div className={styles.card}>
    <div className={styles.cardGlow}></div>
    <div className={styles.cardHeader}>
      <div className={styles.iconBox}><m.Icon size={20} strokeWidth={1.5} /></div>
      <span className={styles.tag}>{m.tag}</span>
    </div>
    <div className={styles.cardBody}>
      <h3 className={styles.cardTitle}>{m.title}</h3>
      <p className={styles.cardSubtitle}>{m.subtitle}</p>
    </div>
  </div>
);

export default SecurePaymentOptions;