import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../../data/products';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import styles from './Enquiry.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Enquiry = () => {
  const { id } = useParams();
  
  // Find the product
  const product = categories.find(p => p.id === parseInt(id));

  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.notFound}>
          <h2>Product not found</h2>
          <Link to="/" className={styles.backLink}>Return to Home</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry sent successfully!");
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>categories</span>
          <ChevronRight size={14} />
          <Link to={`/product/${product.id}`}>{product.name}</Link>
          <ChevronRight size={14} />
          <span className={styles.currentCrumb}>Product Enquiry</span>
        </nav>

        <div className={styles.enquiryContainer}>
          <div className={styles.header} ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            <Link to={`/product/${product.id}`} className={styles.backBtn}><ArrowLeft size={18} /> Back to Product</Link>
            <h1>Product Enquiry</h1>
            <p>Looking for a specialized quote? Fill out the form below and our team will get back to you with custom pricing and details.</p>
            
            <div className={styles.productHighlight}>
              <span className={styles.highlightLabel}>Inquiry Details For</span>
              <div className={styles.productCard}>
                <img src={product.image || product.gallery[0]} alt={product.name} />
                <div className={styles.productCardInfo}>
                  <h3>{product.name}</h3>
                  <p>SKU: {product.specifications ? product.specifications['SKU / Code'] : product.sku || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} ref={formRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
            {/* Section 1: Personal Info */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input type="text" placeholder="E.g. John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="+00 Phone Number" required />
                </div>
                <div className={styles.formGroup}>
                  <label>WhatsApp Number <span>(Optional)</span></label>
                  <input type="tel" placeholder="WhatsApp Number" />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label>Company Name *</label>
                  <input type="text" placeholder="Your Business Name" required />
                </div>
              </div>
            </div>

            {/* Section 2: Location Details */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Location Details</h2>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Country *</label>
                  <select required defaultValue="">
                    <option value="" disabled>Search country...</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>State / Province *</label>
                  <input type="text" placeholder="State" required />
                </div>
                <div className={styles.formGroup}>
                  <label>City *</label>
                  <input type="text" placeholder="City" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Order Source *</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select Option</option>
                    <option value="retail">Retail</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="distributor">Distributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Project Requirements */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Project Requirements</h2>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Total Quantity *</label>
                  <input type="number" min="1" defaultValue="1" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Approx. Budget *</label>
                  <input type="text" placeholder="Budget Range" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Shipping Terms *</label>
                  <select required defaultValue="">
                    <option value="" disabled>FOB, CIF, etc.</option>
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                    <option value="EXW">EXW</option>
                    <option value="DDP">DDP</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Destination Port</label>
                  <input type="text" placeholder="Port Name" />
                </div>
                <div className={styles.formGroup}>
                  <label>GST Number <span>(Optional for International)</span></label>
                  <input type="text" placeholder="GST Number" />
                </div>
                <div className={styles.formGroup}>
                  <label>Requested Date</label>
                  <input type="date" />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label>Detailed Message *</label>
                  <textarea placeholder="Describe your specific needs..." rows="5" required></textarea>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Enquiry</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Enquiry;
