import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Header.module.css';
import { HEADER_LINKS } from '../../../constants/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (e, label) => {
    e.preventDefault();
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src="/logo.png" alt="HIEIL Logo" className={styles.logoIcon} />
        <span className={styles.logoText}>HIEIL</span>
      </Link>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        {HEADER_LINKS.map((link) => (
          <div key={link.label} className={styles.navItem}>
            {link.hasDropdown ? (
              <>
                <Link to={link.href} className={styles.navLink}>
                  {link.label}
                  <ChevronDown size={14} className={styles.dropdownIcon} />
                </Link>
                <div className={styles.dropdownMenu}>
                  {link.dropdownItems.map((item) => (
                    <Link key={item.label} to={item.href} className={styles.dropdownItemLink}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link to={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className={styles.actions}>
        <button className={styles.getQuoteBtn} onClick={() => navigate('/contact')}>GET QUOTE</button>
        <button className={styles.hamburgerBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <div className={styles.mobileNav}>
            {HEADER_LINKS.map((link) => (
              <div key={link.label} className={styles.mobileNavItem}>
                {link.hasDropdown ? (
                  <>
                    <div 
                      className={styles.mobileNavLink} 
                      onClick={(e) => toggleMobileDropdown(e, link.label)}
                    >
                      {link.label}
                      {openMobileDropdown === link.label ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                    {openMobileDropdown === link.label && (
                      <div className={styles.mobileSubMenu}>
                        {link.dropdownItems.map((item) => (
                          <Link 
                            key={item.label} 
                            to={item.href} 
                            className={styles.mobileSubLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.href} 
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <button className={styles.mobileGetQuoteBtn} onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}>GET QUOTE</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
