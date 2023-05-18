import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number | null>(null);

  useEffect(() => {
    const lastWindowSize = window.innerWidth;

    const updateWindowSize = () => {
      setWindowSize(lastWindowSize);
    };
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [windowSize]);

  return windowSize;
};
