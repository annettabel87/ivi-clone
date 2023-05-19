import React, { FC, ReactNode } from 'react';
import styles from './Carousel.module.scss';

interface ICarouselItemProps {
  children: ReactNode;
  width: number;
  widthByContent: boolean;
  paddingRight: number;
  isActive: boolean;
}

export const CarouselItem: FC<ICarouselItemProps> = ({
  children,
  width,
  widthByContent,
  paddingRight,
  isActive,
}) => {
  return (
    <div
      className={styles.carouselItem}
      style={
        !widthByContent
          ? { width, paddingRight, opacity: `${isActive ? '1' : '0.5'}` }
          : { width: 'max-content', paddingRight }
      }
    >
      <div
        className={styles.carouselItem__child}
        style={!widthByContent ? { width: width - paddingRight + 'px' } : { width: 'max-content' }}
      >
        {children}
      </div>
    </div>
  );
};
