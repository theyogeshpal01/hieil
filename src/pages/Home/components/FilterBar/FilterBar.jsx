import React from 'react';
import { Filter } from 'lucide-react';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>THE GREAT <br /> <span style={{ color: 'var(--color-brand-base)' }}>INDIAN HANDICRAFT HERITAGE</span></h2>
        <p className={styles.subtitle}>HIEIL</p>
      </div>

      <div className={styles.filterCard}>
        <h3 className={styles.filterTitle}>FILTER BY CATEGORY</h3>
        
        <div className={styles.controlsRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Product Category</label>
            <select className={styles.select}>
              <option>All categories</option>
              <option>Blue Pottery</option>
              <option>Metal categories</option>
              <option>Stone categories</option>
              <option>Wooden categories</option>
              <option>Luxury Clock</option>
            </select>
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Material Type</label>
            <select className={styles.select}>
              <option>All Materials</option>
              <option>Ceramic</option>
              <option>Metal</option>
              <option>Stone</option>
              <option>Wood</option>
            </select>
          </div>
          
          <button className={styles.applyBtn}>
            <Filter size={16} className={styles.btnIcon} />
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
