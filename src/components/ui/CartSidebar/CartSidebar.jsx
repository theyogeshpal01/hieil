import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './CartSidebar.module.css';

const CartSidebar = ({ isOpen, onClose }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close Cart">
          <X size={28} strokeWidth={1} />
        </button>

        <div className={styles.content}>
          <h2 className={styles.title}>Your cart is empty</h2>
          
          <button className={styles.continueBtn} onClick={onClose}>
            CONTINUE SHOPPING
          </button>

          <div className={styles.loginSection}>
            <p className={styles.loginText}>Have an account?</p>
            <p className={styles.loginSubText}>
              <a href="/login" className={styles.loginLink}>Log in</a> to check out faster.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
