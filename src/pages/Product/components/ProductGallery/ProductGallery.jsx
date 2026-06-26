import React, { useState, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import styles from './ProductGallery.module.css';

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: '0%', y: '0%' });
  const imgRef = useRef(null);

  // Fallback if the product doesn't have a gallery array
  const images = product?.gallery || [product?.image] || [];

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    
    // Calculate cursor position relative to the image
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Boundary checks for the lens (assuming lens is 100x100px)
    // The CSS lens size is 100px. So half is 50px.
    const lensSize = 100;
    const halfLens = lensSize / 2;

    let lensX = x - halfLens;
    let lensY = y - halfLens;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > width - lensSize) lensX = width - lensSize;
    if (lensY > height - lensSize) lensY = height - lensSize;

    setLensPos({ x: lensX, y: lensY });

    // Calculate background position percentages (0 to 100)
    const bgX = (lensX / (width - lensSize)) * 100;
    const bgY = (lensY / (height - lensSize)) * 100;
    setBgPos({ x: `${bgX}%`, y: `${bgY}%` });
  };

  return (
    <div className={styles.galleryWrapper}>
      {/* Thumbnails Sidebar */}
      <div className={styles.thumbnailsColumn}>
        <button className={styles.navButton} aria-label="Previous image">
          <ChevronUp size={20} />
        </button>
        
        <div className={styles.thumbnailsContainer}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </div>
          ))}
        </div>
        
        <button className={styles.navButton} aria-label="Next image">
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Main Image Display */}
      <div 
        className={styles.mainImageContainer}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <img 
          ref={imgRef}
          src={images[activeIndex]} 
          alt="Main product view" 
          className={styles.mainImage} 
          onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} 
        />
        
        {isZooming && (
          <div 
            className={styles.zoomLens}
            style={{ left: `${lensPos.x}px`, top: `${lensPos.y}px` }}
          />
        )}
      </div>

      {/* Zoom Result Pane */}
      {isZooming && (
        <div 
          className={styles.zoomResult}
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundPosition: `${bgPos.x} ${bgPos.y}`
          }}
        />
      )}
    </div>
  );
};

export default ProductGallery;
