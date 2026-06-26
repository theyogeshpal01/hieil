import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Product.module.css';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductDetailsTab from './components/ProductDetailsTab/ProductDetailsTab';
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import { categories } from "../../data/products";
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Product = () => {
  const { id } = useParams();
  const galleryRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  
  // Scroll to top when the ID changes (like when clicking a related product)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find product, fallback to the first product if not found just to ensure something renders
  const product = categories.find(p => p.id === parseInt(id)) || categories[0];

  if (!product) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Product not found</div>;
  }

  return (
    <main className={styles.productPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbContainer}>
          <Link to="/">Home</Link> / <span>{product.name}</span>
        </div>
      </div>

      {/* Main Top Section: Gallery + Info */}
      <section className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column: Image Gallery */}
            <div className={styles.galleryColumn} ref={galleryRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
              <ProductGallery product={product} />
            </div>
            
            <div className={styles.infoColumn} ref={infoRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Tabs, Description, Banner */}
      <ProductDetailsTab product={product} />

      {/* Related Products Section */}
      <RelatedProducts currentProductId={product.id} />

    </main>
  );
};

export default Product;
