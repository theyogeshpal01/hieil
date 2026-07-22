import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className = "", style = {}, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    if (src) {
      setIsLoaded(false);
      setHasError(false);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
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
      
      {src && !hasError && (
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
    </div>
  );
};

export default LazyImage;
