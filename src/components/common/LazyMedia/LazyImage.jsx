import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className = "", style = {}, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Format image URLs properly
  const formattedSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.startsWith('data:')) return src;
    
    // If it's an uploads path starting with /uploads
    if (src.startsWith('/uploads')) {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://hieil.com/api-v1/api';
      return `${baseUrl}${src}`;
    }
    // If it's an uploads path without slash
    if (src.startsWith('uploads/')) {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://hieil.com/api-v1/api';
      return `${baseUrl}/${src}`;
    }

    // Fix invalid SSL domain api.hieil.com by routing through the main domain
    if (src.includes('api.hieil.com')) {
      src = src.replace('api.hieil.com', 'hieil.com');
    }

    // If it's a localhost URL, replace with actual hostname
    try {
      if (src.includes('localhost') || src.includes('127.0.0.1')) {
        const urlObj = new URL(src);
        urlObj.hostname = window.location.hostname;
        return urlObj.toString();
      }
    } catch (e) {
      // invalid URL
    }

    return src;
  }, [src]);

  // Intersection Observer for true lazy loading
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // If native lazy loading is supported, just let browser handle it
    if ('loading' in HTMLImageElement.prototype) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' } // Start loading 200px before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style} onClick={onClick}>
      {/* Low quality placeholder blur */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundColor: '#f3f4f6' }}
        />
      )}
      {formattedSrc && (isInView || 'loading' in HTMLImageElement.prototype) && (
        <img
          src={formattedSrc}
          alt={alt || "Image"}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default LazyImage;
