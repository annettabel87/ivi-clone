import React, { FC } from 'react';
import { ISimilarMovies } from '@/pages/film/[filmId]';
import Link from 'next/link';
import Image from 'next/image';
import AgeRating from '@/components/AgeRating/AgeRating';
import favoriteIcon from '@/assets/icon/favorite-white.svg';
import diagramIcon from '@/assets/icon/diagram.svg';
import styles from './SmallFilmCard.module.scss';

const SmallFilmCard: FC<ISimilarMovies> = (movie) => {
  return (
    <Link href={`/film/${movie.id}`} key={movie.id} className={styles.smallFilmCard}>
      <div className={styles.smallFilmCard__imageBlock}>
        <Image
          src={movie.poster}
          alt="постер"
          width={146}
          height={224}
          className={styles.smallFilmCard__poster}
        />
        <AgeRating ageRating={movie.ageRating} bottom="5px" right="5px" />
        <div className={styles.smallFilmCard__imageBlockInfo}>
          <div className={styles.smallFilmCard__imageBlockInfo_head}>
            <Image src={favoriteIcon} alt="любимые" width={20} height={20} />
          </div>
          <div className={styles.smallFilmCard__imageBlockInfo_description}>
            <div className={styles.smallFilmCard__imageBlockInfo_rating}>
              <p className={styles.smallFilmCard__imageBlockInfo_title}>
                {Math.floor(+movie.rating)},
                <span className={styles.smallFilmCard__imageBlockInfo_titleSmall}>
                  {((+movie.rating - Math.floor(+movie.rating)) * 10).toFixed(0)}
                </span>
              </p>
              <Image src={diagramIcon} alt="рейтинг" width={20} height={14} />
            </div>
            <div className={styles.smallFilmCard__imageBlockInfo_chart}>
              <p className={styles.smallFilmCard__text}>сюжет</p>
              <progress className={styles.progress} max="10" value={movie.rating}></progress>
            </div>
            <div className={styles.smallFilmCard__imageBlockInfo_info}>
              <p className={styles.smallFilmCard__text_light}>
                {movie.year}, {movie.countries[0].country}, {movie.genres[0].genre}
              </p>
              <p className={styles.smallFilmCard__text_light}> {movie.movieLength.split('/')[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.smallFilmCard__textBlock}>
        <p className={styles.smallFilmCard__title}>{movie.name}</p>
        <p className={styles.smallFilmCard__text}>Бесплатно</p>
      </div>
    </Link>
  );
};

export default SmallFilmCard;
