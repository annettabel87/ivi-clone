import React, { FC } from 'react';
import styles from './AgeRating.module.scss';

export interface IAgeRatingProps {
  ageRating: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const AgeRating: FC<IAgeRatingProps> = ({ ageRating, top, bottom, left, right }) => {
  return (
    <span
      className={styles.age}
      style={{
        top,
        bottom,
        left,
        right,
      }}
    >
      {ageRating}
    </span>
  );
};

export default AgeRating;
