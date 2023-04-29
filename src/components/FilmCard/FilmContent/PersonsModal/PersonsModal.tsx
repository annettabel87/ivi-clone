import React, { FC, useState } from 'react';
import Image from 'next/image';
import SmallFilmCard from '@/components/SmallFilmCard/SmallFilmCard';
import { IFilm } from '@/pages/film/[filmId]';
import PersonsBlock from './PersonsBlock/PersonsBlock';
import TrailersBlock from './TrailersBlock/TrailersBlock';
import arrowIcon from '@/assets/icon/arrow-left.svg';
import styles from './PersonsModal.module.scss';

export interface IPersonsModal {
  onClose: () => void;
  movie: IFilm;
}

type IPersonsState = 'persons' | 'comments' | 'trailers';
const PersonsModal: FC<IPersonsModal> = ({ movie, onClose }) => {
  const [isShow, setIsShow] = useState<IPersonsState>('persons');

  return (
    <>
      <div className={styles.overlay}> </div>
      <div className={styles.persons}>
        <button className={styles.close} onClick={onClose}>
          <Image src={arrowIcon} alt="закрыть" width={20} height={20} />
          <p className={styles.persons__text}>К фильму</p>
        </button>
        <div className={styles.persons__content}>
          <div className={styles.persons__content_info}>
            <h2 className={styles.persons__title}>
              {movie.movieName} (Фильм {movie.year})
            </h2>
            <div className={styles.persons__navigation}>
              <ul className={styles.persons__navigation_list}>
                <li className={styles.persons__navigation_item}>
                  <button
                    onClick={() => setIsShow('persons')}
                    className={`${styles.persons__navigation_btn} ${
                      isShow === 'persons' && styles.active
                    }`}
                  >
                    Создатели
                  </button>
                </li>
                <li className={styles.persons__navigation_item}>
                  <button
                    onClick={() => setIsShow('comments')}
                    className={`${styles.persons__navigation_btn} ${
                      isShow === 'comments' && styles.active
                    }`}
                  >
                    Комментарии
                  </button>
                  <sup className={styles.persons__navigation_sup}>3</sup>
                </li>
                <li className={styles.persons__navigation_item}>
                  <button
                    onClick={() => setIsShow('trailers')}
                    className={`${styles.persons__navigation_btn} ${
                      isShow === 'trailers' && styles.active
                    }`}
                  >
                    Трейлеры
                  </button>
                  <sup className={styles.persons__navigation_sup}>3</sup>
                </li>
              </ul>
            </div>
            {isShow === 'persons' && <PersonsBlock {...movie} />}
            {isShow === 'trailers' && (
              <TrailersBlock
                trailers={[movie.trailerLink, movie.trailerLink, movie.trailerLink]}
                movieName={movie.movieName}
                poster={movie.poster}
              />
            )}
          </div>
          <div className={styles.persons__content_poster}>
            <SmallFilmCard movie={movie} type={'poster'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonsModal;
