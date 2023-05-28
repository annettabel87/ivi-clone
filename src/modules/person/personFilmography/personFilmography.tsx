import FilmList from './filmList/filmList';
import styles from './personFilmography.module.scss';
import { FC, useState } from 'react';
import numeralize from 'numeralize-ru';

export interface IFilm {
  length: any;
  slice(arg0: number, arg1: number): any;
  poster: string;
  name: string;
  year: string;
  rate?:
    | {
        kinopoisk: string;
      }
    | undefined;
  filmId: number;
}

interface IPersonFilmographyProps {
  films: IFilm;
}

const PersonFilmography: FC<IPersonFilmographyProps> = ({ films }) => {
  const [filmSlice, setFilmCount] = useState(films.slice(0, 4));
  const [showAllFilms, setShowAllFilms] = useState(false);
  const pluralize = numeralize.pluralize;
  const handleSwitchFilmCount = (array: any) => {
    setFilmCount(array);
    setShowAllFilms(true);
  };
  const filmQuantity = films.length;

  return (
    <>
      <div className={styles.personFilmographyHeader}>
        <h2 className={styles.personFilmographyTitle}>Полная фильмография</h2>
        <p className={styles.personFilmographyExtraTitle}>
          {films.length} {pluralize(filmQuantity, 'фильм', 'фильма', 'фильмов')}
        </p>
      </div>

      <FilmList filmArray={filmSlice} />
      {filmSlice.length >= 4 && !showAllFilms ? (
        <p
          onClick={() => {
            handleSwitchFilmCount(films);
          }}
          className={styles.personFilmographyMoreLink}
        >
          Показать еще
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default PersonFilmography;
