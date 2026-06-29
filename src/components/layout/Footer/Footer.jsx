import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../../constants/navigation';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Store Info */}
        <div className={styles.column}>
          <a href="/" className={styles.logoContainer}>
            <svg viewBox="0 0 24 24" className={styles.logoIcon}>
              <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7" />
              <polygon points="12 5 18.06 8.5 18.06 15.5 12 19 5.94 15.5 5.94 8.5" />
              <circle cx="12" cy="12" r="1.5" stroke="none" fill="#c8956c" />
            </svg>
            <span className={styles.logoText}>HIEIL</span>
          </a>
          <p className={styles.storeInfoText}>
            Since 2024, HIEIL has been redefining shopping with premium categories.
            Every item is designed to add style, comfort, and innovation.
          </p>
          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <a key={link.platform} href={link.href} className={styles.socialIcon} aria-label={link.platform}>
                {link.platform === 'facebook' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
                {link.platform === 'instagram' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                {link.platform === 'youtube' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>}
                {link.platform === 'x' && <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                {link.platform === 'pinterest' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.105 0 7.307 2.922 7.307 6.815 0 4.079-2.57 7.368-6.136 7.368-1.2 0-2.327-.624-2.711-1.357 0 0-.593 2.259-.738 2.812-.267 1.027-1.002 2.315-1.492 3.097 1.124.343 2.317.528 3.551.528 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z"/></svg>}
                {link.platform === 'linkedin' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>SERVICES</h3>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.explore.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
            {FOOTER_LINKS.categories.slice(0, 2).map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>QUICK LINKS</h3>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.policies.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
            {FOOTER_LINKS.care.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter & Contact */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>CONTACT</h3>
          <div className={styles.contactRow}>
            <Mail size={16} className={styles.contactIcon} />
            <span>indiaexport@hieil.com</span>
          </div>
          <div className={styles.contactRow} style={{ marginBottom: '24px' }}>
            <Phone size={16} className={styles.contactIcon} />
            <span>+91 9050001972</span>
          </div>
          <div className={styles.contactRow} style={{ marginBottom: '24px', alignItems: 'flex-start' }}>
            <MapPin size={16} className={styles.contactIcon} style={{ marginTop: '4px' }} />
            <span style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <strong style={{ color: '#fff' }}>Registered Office</strong><br/>
              Hind Import Export International OPC Pvt. Ltd.<br/>
              Jaipur, Rajasthan – 302 001, India
            </span>
          </div>
          
          <p className={styles.newsletterText}>Subscribe to get news about special discounts.</p>
          <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className={styles.emailInput} required />
            <button type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2024 HIEIL — Hind Import Export International OPC Pvt. Ltd. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
