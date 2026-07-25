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

    // Fix invalid SSL domain api.hieil.com by routing through the main domain
    if (src.includes('api.hieil.com')) {
      src = src.replace('api.hieil.com', 'hieil.com');
    }

    // If it's a localhost URL and we are testing on a local network (e.g., from a phone),
    // replace localhost with the actual IP address the user is accessing the site from.
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
