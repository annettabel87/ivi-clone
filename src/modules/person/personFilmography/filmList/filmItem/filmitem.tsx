import Image from 'next/image';
import styles from './filmitem.module.scss';
import { useRouter } from 'next/router';
import { IFilm } from '../../personFilmography';

interface IFilmItemProps {
  film: IFilm;
}
const FilmItem = ({ film }: IFilmItemProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <div className={styles.personFilmographyItem}>
        <div>
        <Image src={film.poster} width={80} height={123} className={styles.posterImage}></Image>
        </div>
        <div className={styles.personFilmographyItemMain}>
          <div className={styles.personFilmographyItemInfos}>
            <h3 className={styles.personFilmographyItemYear}>{film.year}</h3>
            <h3 className={styles.personFilmographyItemTitle}>{film.name}</h3>
            {film.hasOwnProperty('rate') && (
              <h3 className={styles.personFilmographyItemRating}>
                Рейтинг Иви: {film.rate.kinopoisk}
              </h3>
            )}
          </div>
          <div className={styles.personFilmographyItemInfosButton}>
            <button
              onClick={() => router.push(`/film/${film.filmId}`)}
              className={styles.personFilmographyItemButton}
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmItem;
