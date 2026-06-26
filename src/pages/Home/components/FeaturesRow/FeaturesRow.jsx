import React from 'react';
import { Truck, PiggyBank, BadgePercent, Headset } from 'lucide-react';
import styles from './FeaturesRow.module.css';

const features = [
  {
    id: 1,
    Icon: Truck,
    title: 'WORLDWIDE SHIPPING',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  },
  {
    id: 2,
    Icon: PiggyBank,
    title: 'MONEY BACK GUARANTEE',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  },
  {
    id: 3,
    Icon: BadgePercent,
    title: 'OFFERS AND DISCOUNTS',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  },
  {
    id: 4,
    Icon: Headset,
    title: '24/7 SUPPORT SERVICES',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  }
];

const FeaturesRow = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureItem}>
            <div className={styles.iconContainer}>
              <div className={styles.iconSlider}>
                <feature.Icon size={36} strokeWidth={1.2} className={styles.iconDefault} />
                <feature.Icon size={36} strokeWidth={1.2} className={styles.iconHover} />
              </div>
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.desc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRow;
