import React, { useState, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: '0%', y: '0%' });
  const imgRef = useRef(null);

  // Fallback if the product doesn't have a gallery array
  const images = product?.gallery || [product?.image] || [];

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    
    // Calculate cursor position relative to the image
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Boundary checks for the lens (assuming lens is 100x100px)
    // The CSS lens size is 100px. So half is 50px.
    const lensSize = 100;
    const halfLens = lensSize / 2;

    let lensX = x - halfLens;
    let lensY = y - halfLens;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > width - lensSize) lensX = width - lensSize;
    if (lensY > height - lensSize) lensY = height - lensSize;

    setLensPos({ x: lensX, y: lensY });

    // Calculate background position percentages (0 to 100)
    const bgX = (lensX / (width - lensSize)) * 100;
    const bgY = (lensY / (height - lensSize)) * 100;
    setBgPos({ x: `${bgX}%`, y: `${bgY}%` });
  };

  return (
    <div className="flex gap-6 h-[600px] max-sm:flex-col-reverse max-sm:h-auto">
      {/* Thumbnails Sidebar */}
      <div className="flex flex-col items-center w-[80px] shrink-0 max-sm:w-full max-sm:flex-row max-sm:h-[80px]">
        <button className="bg-transparent border-none cursor-pointer text-white p-2 flex items-center justify-center transition-colors duration-200 hover:text-[#c07a5d] max-sm:-rotate-90" aria-label="Previous image">
          <ChevronUp size={20} />
        </button>
        
        <div className="flex flex-col gap-4 flex-1 overflow-hidden py-2 max-sm:flex-row max-sm:px-2 max-sm:py-0">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`w-[70px] h-[80px] border rounded cursor-pointer overflow-hidden transition-all duration-200 bg-[#15110F] p-1 ${index === activeIndex ? 'border-[#c07a5d]' : 'border-transparent'}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-[2px]" onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} />
            </div>
          ))}
        </div>
        
        <button className="bg-transparent border-none cursor-pointer text-white p-2 flex items-center justify-center transition-colors duration-200 hover:text-[#c07a5d] max-sm:-rotate-90" aria-label="Next image">
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Main Image Display */}
      <div 
        className="flex-1 bg-[#15110F] flex items-center justify-center relative cursor-crosshair max-sm:h-[400px] overflow-hidden rounded"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <img 
          ref={imgRef}
          src={images[activeIndex]} 
          alt="Main product view" 
          className="w-full h-full object-cover" 
          onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }} 
        />
        
        {isZooming && (
          <div 
            className="absolute w-[100px] h-[100px] border border-[#d2691e] bg-white/40 pointer-events-none"
            style={{ left: `${lensPos.x}px`, top: `${lensPos.y}px` }}
          />
        )}
      </div>

      {/* Zoom Result Pane */}
      {isZooming && (
        <div 
          className="absolute left-[105%] top-0 w-[500px] h-[600px] border border-[#2c241c] bg-[#15110F] bg-no-repeat bg-[size:250%] z-[100] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundPosition: `${bgPos.x} ${bgPos.y}`
          }}
        />
      )}
    </div>
  );
};

export default ProductGallery;
