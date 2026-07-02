import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    eyebrow: 'Welcome to HIEIL (OPC) Pvt. Ltd.',
    title: 'Handcrafted categories,\nInspired By India',
    image: '/carousel1.png',
  },
  {
    id: 2,
    eyebrow: 'Authentic Indian Craftsmanship',
    title: 'Premium Handicrafts\nFor Global Markets',
    image: '/carousel2.png',
  },
  {
    id: 3,
    eyebrow: 'Sustainable & Ethical Practices',
    title: 'Timeless Artistry,\nWorldwide Reach',
    image: '/carousel3.png',
  },
  {
    id: 4,
    eyebrow: 'Preserving Traditional Techniques',
    title: 'Crafted By Hands,\nDelivered With Pride',
    image: '/carousel4.png',
  },
  {
    id: 5,
    eyebrow: 'Quality Assured Delivery',
    title: 'From India\'s Heart\nTo Your Doorstep',
    image: '/carousel5.png',
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent(p => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#15110F]">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <button className="absolute top-1/2 left-4 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-[#c8956c]" onClick={prev} aria-label="Previous">
        <ArrowLeft size={18} />
      </button>
      <button className="absolute top-1/2 right-4 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-[#c8956c]" onClick={next} aria-label="Next">
        <ArrowRight size={18} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${i === current ? 'w-8 bg-[#c8956c]' : 'w-2.5 bg-white/50 hover:bg-white'}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
