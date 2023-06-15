import FilmList from './filmList/filmList';
import styles from './personFilmography.module.scss';
import { FC, useState } from 'react';
import numeralize from 'numeralize-ru';

export interface IFilm {
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
  films: IFilm[];
}

const PersonFilmography: FC<IPersonFilmographyProps> = ({ films }) => {
  const [filmography, setFilmography] = useState<IFilm[]>(films.slice(0, 4));
  const [showAllFilms, setShowAllFilms] = useState<boolean>(false);
  const pluralize = numeralize.pluralize;
  const handleSwitchFilmCount = (array: IFilm[]) => {
    setFilmography(array);
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

      <FilmList filmArray={filmography} />
      {filmography.length >= 4 && !showAllFilms && (
        <p
          onClick={() => {
            handleSwitchFilmCount(films);
          }}
          className={styles.personFilmographyMoreLink}
        >
          Показать еще
        </p>
      )}
    </>
  );
};

export default PersonFilmography;
