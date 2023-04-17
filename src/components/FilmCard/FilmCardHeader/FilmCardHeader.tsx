import React, { FC } from 'react';
import styles from './FilmCardHeader.module.scss';
import Link from 'next/link';

export interface IFilmCardHeaderProps {
  genre: string;
}
const FilmCardHeader: FC<IFilmCardHeaderProps> = ({ genre }) => {
  return (
    <div className={styles.filmCard__header}>
      <div className={styles.filmCard__header_controls}>
        <Link href="/movies" className={styles.filmCard__header_link}>
          Фильмы
        </Link>
        <span className={styles.dot}></span>
        <Link href={`movies/${genre}`} className={styles.filmCard__header_link}>
          {genre}
        </Link>
      </div>
      <div className={styles.filmCard__header_badge}>выбор Иви</div>
    </div>
  );
};

export default FilmCardHeader;
