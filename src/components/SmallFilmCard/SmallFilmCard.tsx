import React, { FC } from 'react';
import { IFilm, ISimilarMovies } from '@/pages/film/[filmId]';
import Link from 'next/link';
import Image from 'next/image';
import AgeRating from '@/components/AgeRating/AgeRating';
import favoriteIcon from '@/assets/icon/favorite-white.svg';
import similarIcon from '@/assets/icon/similar.svg';
import clockIcon from '@/assets/icon/clock.svg';
import starIcon from '@/assets/icon/star.svg';
import banIcon from '@/assets/icon/ban.svg';
import diagramIcon from '@/assets/icon/diagram.svg';
import styles from './SmallFilmCard.module.scss';

export interface ISmallFilmCardProps {
  movie: ISimilarMovies | IFilm;
  type: 'poster' | 'posterInfo' | 'posterRecommend';
}

const SmallFilmCard: FC<ISmallFilmCardProps> = ({ movie, type }) => {
  const rating = movie.rate instanceof Object ? movie.rate.kinopoisk : movie.rate;

  return (
    <Link
      href={`/film/${movie.id}`}
      className={`${type !== 'posterRecommend' ? styles.smallFilmCard : styles.bigSize}`}
    >
      <div
        className={`${styles.smallFilmCard__imageBlock} ${type !== 'posterInfo' && styles.scale}`}
      >
        <Image
          src={movie.poster}
          alt="постер"
          width={type !== 'posterRecommend' ? 146 : 175}
          height={type !== 'posterRecommend' ? 224 : 268}
          className={styles.smallFilmCard__poster}
        />
        <AgeRating ageRating={movie.ageRating} bottom="5px" right="5px" />
        {type !== 'poster' && (
          <div className={styles.smallFilmCard__imageBlockInfo}>
            <div className={styles.smallFilmCard__imageBlockInfo_description}>
              <div className={styles.smallFilmCard__imageBlockInfo_rating}>
                <p className={styles.smallFilmCard__imageBlockInfo_title}>
                  {Math.floor(+rating)},
                  <span className={styles.smallFilmCard__imageBlockInfo_titleSmall}>
                    {((+rating - Math.floor(+rating)) * 10).toFixed(0)}
                  </span>
                </p>
                <Image src={diagramIcon} alt="рейтинг" width={20} height={14} />
              </div>
              <div className={styles.smallFilmCard__imageBlockInfo_chart}>
                <p className={styles.smallFilmCard__text}>сюжет</p>
                <progress className={styles.progress} max="10" value={rating}></progress>
              </div>
              <div className={styles.smallFilmCard__imageBlockInfo_info}>
                <p className={styles.smallFilmCard__text_light}>
                  {movie.year}, {movie.countries[0].country}, {movie.genres[0].genre}
                </p>
                <p className={styles.smallFilmCard__text_light}>
                  {' '}
                  {movie.movieLength.split('/')[0]}
                </p>
              </div>
            </div>
            <div className={styles.smallFilmCard__imageBlockInfo_hoards}>
              <Image
                src={favoriteIcon}
                alt="любимые"
                width={20}
                height={20}
                className={styles.smallFilmCard__icon}
              />
              {type === 'posterRecommend' && (
                <>
                  <Image
                    src={similarIcon}
                    alt="похожие"
                    width={20}
                    height={20}
                    className={styles.smallFilmCard__icon}
                  />
                  <Image src={starIcon} alt="оценить" width={20} height={20} />
                  <Image src={banIcon} alt="не нравится" width={20} height={20} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {type === 'poster' ? (
        <div className={`${styles.smallFilmCard__imageBlockInfo_description} ${styles.left}`}>
          <div className={styles.smallFilmCard__imageBlockInfo_rating}>
            <p className={styles.smallFilmCard__imageBlockInfo_title}>
              {Math.floor(+rating)},
              <span className={styles.smallFilmCard__imageBlockInfo_titleSmall}>
                {((+rating - Math.floor(+rating)) * 10).toFixed(0)}
              </span>
            </p>
            <Image src={diagramIcon} alt="рейтинг" width={20} height={14} />
          </div>
          <div className={styles.smallFilmCard__imageBlockInfo_info}>
            <p className={styles.smallFilmCard__text}>
              {movie.year}, {movie.countries[0].country}, {movie.genres[0].genre}
            </p>
            <div className={styles.smallFilmCard__imageBlockInfo_time}>
              <Image src={clockIcon} alt="продолжительность" width={16} height={16} />
              <p className={styles.smallFilmCard__text}> {movie.movieLength.split('/')[0]}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.smallFilmCard__textBlock}>
          <p className={styles.smallFilmCard__title}>{movie.originalName}</p>
          <p className={styles.smallFilmCard__text}>Бесплатно</p>
        </div>
      )}
    </Link>
  );
};

export default SmallFilmCard;
