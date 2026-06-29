import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Login = () => {
  const cardRef = useScrollAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Top Banner */}
      <div className={styles.pageBanner}>
        <h1 className={styles.bannerTitle}>ACCOUNT</h1>
        <div className={styles.breadcrumbs}>
          <Link to="/">Home</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.loginCard} ref={cardRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <h2 className={styles.loginTitle}>Log in <br /> <span style={{ color: 'var(--color-brand-base)' }}>to your account</span></h2>
          
          <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Email" 
                className={styles.inputField} 
                required 
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input 
                type="password" 
                placeholder="Password" 
                className={styles.inputField} 
                required 
              />
            </div>
            
            <div className={styles.forgotPassword}>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              SIGN IN
            </button>
            
            <div className={styles.createAccount}>
              <Link to="/register">No account yet? Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
