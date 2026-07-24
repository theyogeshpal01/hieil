import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className = "", style = {}, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  // Reset state if src changes
  useEffect(() => {
    if (src) {
      setIsLoaded(false);
      setHasError(false);
      setRetryCount(0);
    }
  }, [src]);

  // Format image URLs properly
  const formattedSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.startsWith('data:')) return src;
    
    // If it's a localhost URL and we are not on localhost, we might want to replace it, 
    // but typically we just prepend the VITE_API_URL if it's a relative path.
    if (src.startsWith('/')) {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://hieil.com/api-v1/api';
      return `${baseUrl}${src}`;
    }
    // If it's an uploads path without slash
    if (src.startsWith('uploads/')) {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://hieil.com/api-v1/api';
      return `${baseUrl}/${src}`;
    }

    // If it's a localhost URL and we are not on localhost (live site), replace it.
    // We check if VITE_API_URL is provided, we can just replace the origin.
    try {
      if (src.includes('localhost') || src.includes('127.0.0.1')) {
        const urlObj = new URL(src);
        const baseUrl = import.meta.env.VITE_API_URL || 'https://hieil.com/api-v1/api';
        return `${baseUrl}${urlObj.pathname}${urlObj.search}`;
      }
    } catch (e) {
      // invalid URL
    }

    return src;
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (retryCount < maxRetries) {
      // Retry after a short delay
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
      }, 1000); // 1 second delay before retry
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  const containerClasses = `relative overflow-hidden ${className}`;
  
  // Style for the HIEIL placeholder
  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2a2421', // Dark greyish-brown matching the theme
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c8956c', // Gold text
    fontFamily: 'serif',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    opacity: isLoaded && !hasError ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
    zIndex: 1
  };

  return (
    <div className={containerClasses} style={style} onClick={onClick}>
      <div style={placeholderStyle}>
        HIEIL
      </div>
      
      {formattedSrc && !hasError && (
        <img
          key={`${formattedSrc}-${retryCount}`} // Change key to force re-render on retry
          src={formattedSrc}
          alt={alt || "Image"}
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
