import React, { FC } from 'react';
import Image from 'next/image';
import styles from './TrailerSmallCard.module.scss';

export interface ITrailerSmallCard {
  poster: string;
  movieName: string;
  onClickHandler: (show: boolean) => void;
}

const TrailerSmallCard: FC<ITrailerSmallCard> = ({ poster, movieName, onClickHandler }) => {
  return (
    <div className={styles.trailerCard} onClick={() => onClickHandler(true)}>
      <div className={styles.trailerCard__poster}>
        <Image
          src={poster}
          alt="постер"
          height={'154'}
          width={273}
          className={styles.trailerCard__img}
        />
      </div>
      <div className={styles.trailerCard__description}>
        <p className={styles.trailerCard__text}>{movieName}</p>
        <p className={styles.trailerCard__smallText}>1 мин.</p>
      </div>
    </div>
  );
};

export default TrailerSmallCard;
