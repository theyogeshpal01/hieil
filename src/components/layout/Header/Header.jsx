import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { HEADER_LINKS } from '../../../constants/navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <svg viewBox="0 0 24 24" className={styles.logoIcon}>
          <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7" />
          <polygon points="12 5 18.06 8.5 18.06 15.5 12 19 5.94 15.5 5.94 8.5" />
          <circle cx="12" cy="12" r="1.5" stroke="none" fill="#c2a373" />
        </svg>
        <span className={styles.logoText}>HIEIL</span>
      </Link>

      <nav className={styles.nav}>
        {HEADER_LINKS.map((link) => (
          <Link key={link.label} to={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      <button className={styles.getQuoteBtn}>GET QUOTE</button>
    </header>
  );
};

export default Header;
