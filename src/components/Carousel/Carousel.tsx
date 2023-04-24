import React, { FC, ReactNode } from 'react';
import styles from './Carousel.module.scss';

interface ICarouselProps {
  children: ReactNode;
}

export const Carousel: FC<ICarouselProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>{children}</div>
    </div>
  );
};
