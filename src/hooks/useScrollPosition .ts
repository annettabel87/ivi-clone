import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset > 10) {
        setScrollPosition(window.pageYOffset);
      }
    };

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;