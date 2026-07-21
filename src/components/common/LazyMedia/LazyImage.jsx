import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className = "", style = {}, onClick, onError }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Setup intersection observer to detect when image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading slightly before it comes into view
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    setHasError(true);
    setIsLoaded(true);
    if (onError) {
      onError(e);
    } else {
      e.target.src = "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop";
    }
  };

  // Base classes for the container
  const containerClasses = `relative overflow-hidden ${className}`;
  
  // Skeleton shimmer effect classes
  const shimmerClasses = `absolute inset-0 bg-[#2a2421] before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent`;

  return (
    <div ref={imgRef} className={containerClasses} style={style} onClick={onClick}>
      {!isLoaded && <div className={shimmerClasses}></div>}
      
      {isVisible && (
        <img
          src={src}
          alt={alt || "Image"}
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      
      {/* Fallback styling for global shimmer animation if not in tailwind config */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;
