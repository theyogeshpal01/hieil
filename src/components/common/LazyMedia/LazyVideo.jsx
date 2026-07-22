import React, { useState, useEffect } from 'react';

const LazyVideo = ({ src, poster, autoPlay = true, loop = true, muted = true, className = "", style = {}, playsInline = true }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    if (src) {
      setIsLoaded(false);
      setHasError(false);
    }
  }, [src]);

  const handleLoadedData = () => {
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
    backgroundColor: '#2a2421',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c8956c',
    fontFamily: 'serif',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    opacity: isLoaded && !hasError ? 0 : 1,
    transition: 'opacity 1s ease-in-out',
    zIndex: 1
  };

  return (
    <div className={containerClasses} style={style}>
      <div style={placeholderStyle}>
        HIEIL
      </div>
      
      {src && !hasError && (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          onLoadedData={handleLoadedData}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          preload="metadata"
        />
      )}
    </div>
  );
};

export default LazyVideo;
