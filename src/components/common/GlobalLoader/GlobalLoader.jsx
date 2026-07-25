import React, { useState, useEffect } from 'react';
import './GlobalLoader.css';

const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoader = (e) => {
      setIsLoading(e.detail);
    };

    window.addEventListener('globalLoader', handleLoader);
    return () => {
      window.removeEventListener('globalLoader', handleLoader);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="global-loader-overlay">
      <div className="loader-content">
        <div className="hieil-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoader;
