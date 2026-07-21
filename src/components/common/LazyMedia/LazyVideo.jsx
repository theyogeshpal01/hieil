import React, { useState, useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster, autoPlay = true, loop = true, muted = true, className = "", style = {}, playsInline = true }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Setup intersection observer to detect when video is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading slightly before it comes into view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Base classes for the container
  const containerClasses = `relative overflow-hidden ${className}`;
  
  // Placeholder camera SVG background
  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0a0a0'%3E%3Cpath d='M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z'/%3E%3C/svg%3E`;
  
  // Style for the placeholder
  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#dcdcdc',
    backgroundImage: `url("${placeholderSvg}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '30%',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 1s ease-in-out',
    zIndex: 1
  };

  return (
    <div ref={videoRef} className={containerClasses} style={style}>
      <div style={placeholderStyle}></div>
      
      {isVisible && (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          onLoadedData={handleLoadedData}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
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

export default LazyVideo;
