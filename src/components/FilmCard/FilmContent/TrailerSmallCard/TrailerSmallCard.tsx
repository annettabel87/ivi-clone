import React, { FC } from 'react';
import Image from 'next/image';
import clockIcon from '@/assets/icon/clock.svg';
import styles from './TrailerSmallCard.module.scss';

export interface ITrailerSmallCard {
  poster: string;
  movieName: string;
  onClickHandler: (show: boolean, trailer: string) => void;
  trailer: string;
  withClock?: boolean;
}

const TrailerSmallCard: FC<ITrailerSmallCard> = ({
  poster,
  movieName,
  onClickHandler,
  trailer,
  withClock = false,
}) => {
  return (
    <div className={styles.trailerCard} onClick={() => onClickHandler(true, trailer)}>
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
        <div className={styles.trailerCard__time}>
          {withClock && <Image src={clockIcon} alt="продолжительность" width={16} height={16} />}
          <p className={styles.trailerCard__smallText}>1 мин</p>
        </div>
      </div>
    </div>
  );
};

export default TrailerSmallCard;
