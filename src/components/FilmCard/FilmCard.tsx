import React, { FC } from 'react';
import { IFilm } from '@/pages/film/[filmId]';
import FilmCardHeader from './FilmCardHeader/FilmCardHeader';
import FilmTrailer from './FilmTrailer/FilmTrailer';
import FilmContent from './FilmContent/FilmContent';
import FilmInfo from './FilmInfo/FilmInfo';
import styles from './FilmCard.module.scss';

const FilmCard: FC<IFilm> = (props) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCard__container}>
        <div className={styles.content__background}></div>
        <FilmCardHeader genre={props.genres[0].genre} />
        <div className={styles.filmCard__content}>
          <FilmTrailer
            trailer={props.trailerLink}
            ageRating={props.ageRating}
            name={props.movieName}
          />
          <FilmInfo {...props} />
        </div>
        <FilmContent {...props} />
      </div>
    </div>
  );
};

export default FilmCard;
