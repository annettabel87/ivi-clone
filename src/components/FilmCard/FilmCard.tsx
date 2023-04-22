import React, { FC } from 'react';
import { IFilm } from '@/pages/film/[filmId]';
import FilmCardHeader from './FilmCardHeader/FilmCardHeader';
import FilmTrailer from './FilmTrailer/FilmTrailer';
import FilmInfo from './FilmInfo/FilmInfo';
import styles from './FilmCard.module.scss';

const FilmCard: FC<IFilm> = (props) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCard__container}>
        <div className={styles.content__background}></div>
        <FilmCardHeader genre={props.genres[0].name} />
        <div className={styles.filmCard__content}>
          <FilmTrailer
            trailer={props.trailers[0]}
            ageRating={props.ageRating}
            name={props.movieName}
          />
          <FilmInfo {...props} />
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
