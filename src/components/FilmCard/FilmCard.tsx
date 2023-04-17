import React, { FC } from 'react';
import { IFilm } from '@/pages/film/[filmId]';
import FilmCardHeader from './FilmCardHeader/FilmCardHeader';
import styles from './FilmCard.module.scss';

const FilmCard: FC<IFilm> = ({ genres }) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCard__container}>
        <div className={styles.content__background}></div>
        <FilmCardHeader genre={genres[0].name} />
      </div>
    </div>
  );
};

export default FilmCard;
