import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.scss';
import arrowIcon from '../../assets/icon/rightChevron.svg';

interface ICarouselArrowProps {
  handleClick: () => void;
  isHidden: boolean;
  arrowSize: 'small' | 'big';
  direction: 'right' | 'left';
}

export const CarouselArrow: FC<ICarouselArrowProps> = ({
  handleClick,
  isHidden,
  arrowSize,
  direction,
}) => {
  let containerClassName = styles.rightArrowWrapper;

  if (direction === 'right' && arrowSize === 'small') {
    containerClassName = styles.smallRightArrowWrapper;
  }

  if (direction === 'right' && arrowSize === 'big') {
    containerClassName = styles.rightArrowWrapper;
  }

  if (direction === 'left' && arrowSize === 'small') {
    containerClassName = styles.smallLeftArrowWrapper;
  }

  if (direction === 'left' && arrowSize === 'big') {
    containerClassName = styles.leftArrowWrapper;
  }

  const imageClassName = direction === 'right' ? styles.rightArrow : styles.leftArrow;
  const imgAlt = direction === 'right' ? 'next' : 'previous';
  return (
    <div
      className={containerClassName}
      onClick={handleClick}
      style={isHidden ? { display: 'none' } : { display: 'flex' }}
    >
      <Image
        className={imageClassName}
        src={arrowIcon}
        alt={imgAlt}
        width={arrowSize === 'big' ? 40 : 24}
      />
    </div>
  );
};
