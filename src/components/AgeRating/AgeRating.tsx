import React, { FC } from 'react';
import { IAgeRatingProps } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './AgeRating.module.scss';

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
