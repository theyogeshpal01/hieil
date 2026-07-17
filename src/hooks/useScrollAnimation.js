import { useEffect, useState, useCallback } from 'react';

const useScrollAnimation = () => {
  const [el, setEl] = useState(null);

  const ref = useCallback((node) => {
    setEl(node);
  }, []);

  useEffect(() => {
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0)';
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [el]);

  return ref;
};

export default useScrollAnimation;
