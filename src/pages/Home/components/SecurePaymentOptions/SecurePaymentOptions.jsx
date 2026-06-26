import React from 'react';
import { CreditCard, Landmark, Send, DollarSign, Globe, ShieldCheck, FileText, Lock, UserCheck } from 'lucide-react';
import styles from './SecurePaymentOptions.module.css';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const paymentMethods = [
  { title: 'T/T Transfer',      subtitle: 'Telegraphic Transfer',  tag: 'Reliable',  Icon: Landmark   },
  { title: 'Credit/Debit Card', subtitle: 'Visa & MasterCard',     tag: 'Secure',    Icon: CreditCard },
  { title: 'SWIFT',             subtitle: 'International Banks',   tag: '3–5 Days',  Icon: Send       },
  { title: 'PayPal',            subtitle: 'Online Payments',       tag: 'Instant',   Icon: DollarSign },
  { title: 'Wise',              subtitle: "Int'l Transfers",       tag: 'Low Fees',  Icon: Globe      },
  { title: 'Letter of Credit',  subtitle: 'Trade Finance',         tag: 'Protected', Icon: FileText   },
  { title: 'Bank Transfer',     subtitle: 'Direct Bank Wire',      tag: 'Reliable',  Icon: Landmark   },
];

const trustBadges = [
  { icon: <Lock      size={15} />, label: '256-bit SSL Encryption' },
  { icon: <ShieldCheck size={15} />, label: 'PCI DSS Compliant'    },
  { icon: <UserCheck size={15} />, label: 'Fraud Protection'       },
];

const SecurePaymentOptions = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.left} ref={leftRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <span className={styles.eyebrow}>Payments</span>
          <h2 className={styles.title}>Secure Payment Options</h2>
          <p className={styles.subtitle}>
            Multiple trusted payment methods for hassle-free global transactions — safe, fast, and compliant.
          </p>
          <div className={styles.trustBadges}>
            {trustBadges.map((b, i) => (
              <div key={i} className={styles.trustBadge}>
                <span className={styles.trustIcon}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right} ref={rightRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          <div className={styles.grid}>
            {paymentMethods.map((m, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.iconBox}><m.Icon size={22} strokeWidth={1.5} /></div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{m.title}</h3>
                  <p className={styles.cardSubtitle}>{m.subtitle}</p>
                </div>
                <span className={styles.tag}>{m.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurePaymentOptions;
