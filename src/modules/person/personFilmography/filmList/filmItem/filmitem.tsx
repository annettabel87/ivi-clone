import Image from 'next/image';
import styles from './filmItem.module.scss';
import { useRouter } from 'next/router';
import { IFilm } from '../../personFilmography';
import { FC } from 'react';
import Button from '@/components/Button/Button';
import Link from 'next/link';

interface IFilmItemProps {
  film: IFilm;
}
const FilmItem: FC<IFilmItemProps> = ({ film }) => {
  const router = useRouter();
  return (
    <>
      <Link href={`/film/${film.filmId}`} passHref legacyBehavior>
        <div className={styles.personFilmographyItem}>
          <div>
            <Image
              src={film.poster}
              height={123}
              width={80}
              className={styles.posterImage}
              alt={film.name}
            ></Image>
          </div>
          <div className={styles.personFilmographyItemMain}>
            <div className={styles.personFilmographyItemInfos}>
              <h3 className={styles.personFilmographyItemYear}>{film.year}</h3>
              <h3 className={styles.personFilmographyItemTitle}>{film.name}</h3>
              {film.hasOwnProperty('rate') && (
                <h3 className={styles.personFilmographyItemRating}>
                  Рейтинг Иви: {film.rate?.kinopoisk}
                </h3>
              )}
            </div>
            <div className={styles.personFilmographyItemInfosButton}>
              {/* <button
              onClick={() => router.push(`/film/${film.filmId}`)}
              className={styles.personFilmographyItemButton}
            >
              Подробнее
            </button> */}
              <Button
                as={'link'}
                href={`/film/${film.filmId}`}
                border={'1px solid #1f1b2e'}
                bgColor={'#1f1b2e'}
                height={'40px'}
                radius={'8px'}
                width={'140px'}
                target="_blank"
                hoverBg={'#2e2844'}
              >
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FilmItem;
