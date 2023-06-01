import React, { FC } from 'react';
import Image from 'next/image';
import { ITrailerSmallCard } from '@/shared/Interfaces/FilmPageInterfaces';
import clockIcon from '@/assets/icon/clock.svg';
import styles from './TrailerSmallCard.module.scss';

const TrailerSmallCard: FC<ITrailerSmallCard> = ({
  poster,
  movieName,
  onClickHandler,
  trailer,
  withClock = false,
  carousel = false,
}) => {
  return (
    <div
      className={`${styles.trailerCard} ${carousel && styles.carousel}`}
      onClick={() => onClickHandler(true, trailer)}
    >
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
