import React from 'react';

const LazyImage = ({ src, alt, className = "", style = {}, onClick }) => {
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

  return (
    <div className={`relative overflow-hidden ${className}`} style={style} onClick={onClick}>
      {formattedSrc && (
        <img
          src={formattedSrc}
          alt={alt || "Image"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default LazyImage;
