import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import SmallFilmCard from '@/components/SmallFilmCard/SmallFilmCard';
import { IFilm } from '@/pages/film/[filmId]';
import PersonsBlock from './PersonsBlock/PersonsBlock';
import TrailersBlock from './TrailersBlock/TrailersBlock';
import arrowIcon from '@/assets/icon/arrow-left.svg';
import { IReviews } from '@/components/Reviews/Reviews';
import ReviewsModalBlock from './CommentsModalBlock/ReviewsModalBlock';
import { IPersonsModalType, filmPageSlice } from '@/store/reducers/filmPageReducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import styles from './PersonsModal.module.scss';

export interface IPersonsModal {
  onClose: () => void;
  movie: IFilm;
  comments: IReviews;
}

const PersonsModal: FC<IPersonsModal> = ({ movie, onClose, comments }) => {
  const dispatch = useAppDispatch();
  const { modalType } = useAppSelector((store) => store.filmPageReducer);
  const { SET_MODAL_TYPE, SET_OPEN } = filmPageSlice.actions;

  useEffect(() => {
    const type = localStorage.getItem('personModal') as IPersonsModalType;
    const isOpen = !!localStorage.getItem('isOpenPersonModal');
    dispatch(SET_MODAL_TYPE(type));
    dispatch(SET_OPEN(isOpen));
  }, []);

  return (
    <>
      <div className={styles.overlay}></div>
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
                    onClick={() => dispatch(SET_MODAL_TYPE('persons'))}
                    className={`${styles.persons__navigation_btn} ${
                      modalType === 'persons' && styles.active
                    }`}
                  >
                    Создатели
                  </button>
                </li>
                <li className={styles.persons__navigation_item}>
                  <button
                    onClick={() => dispatch(SET_MODAL_TYPE('reviews'))}
                    className={`${styles.persons__navigation_btn} ${
                      modalType === 'reviews' && styles.active
                    }`}
                  >
                    Рецензии
                  </button>
                  <sup className={styles.persons__navigation_sup}>{comments.entityJSON.length}</sup>
                </li>
                <li className={styles.persons__navigation_item}>
                  <button
                    onClick={() => dispatch(SET_MODAL_TYPE('trailers'))}
                    className={`${styles.persons__navigation_btn} ${
                      modalType === 'trailers' && styles.active
                    }`}
                  >
                    Трейлеры
                  </button>
                  <sup className={styles.persons__navigation_sup}>3</sup>
                </li>
              </ul>
            </div>
            {modalType === 'persons' && <PersonsBlock {...movie} />}
            {modalType === 'trailers' && (
              <TrailersBlock
                trailers={[movie.trailerLink, movie.trailerLink, movie.trailerLink]}
                movieName={movie.movieName}
                poster={movie.poster}
              />
            )}
            {modalType === 'reviews' && <ReviewsModalBlock {...comments} />}
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
