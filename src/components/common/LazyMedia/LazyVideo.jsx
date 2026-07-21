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
  
  // Skeleton shimmer effect classes
  const shimmerClasses = `absolute inset-0 bg-[#2a2421] before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent`;

  return (
    <div ref={videoRef} className={containerClasses} style={style}>
      {!isLoaded && <div className={shimmerClasses}></div>}
      
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
