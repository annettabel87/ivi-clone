import React, { FC, useState } from 'react';
import { IFilm } from '@/shared/Interfaces/FilmPageInterfaces';
import FilmCardHeader from './FilmCardHeader/FilmCardHeader';
import FilmTrailer from './FilmTrailer/FilmTrailer';
import FilmContent from './FilmContent/FilmContent';
import FilmInfo from './FilmInfo/FilmInfo';
import styles from './FilmCard.module.scss';
import { useAppSelector } from '@/store/hooks/hooks';

const FilmCard: FC<IFilm> = (props) => {
  const [isOpenTrailer, setIsOpenTrailer] = useState<boolean>(false);
  const { isOpen } = useAppSelector((store) => store.filmPageReducer);

  return (
    <div className={`${styles.filmCard} ${isOpen && styles.fixed}`}>
      <div className={styles.filmCard__container}>
        <FilmCardHeader genre={props.genres[0].genre} />
        <div className={styles.filmCard__bg}></div>
        <div className={styles.filmCard__content}>
          <FilmTrailer
            trailer={props.trailerLink}
            ageRating={props.ageRating}
            name={props.movieName}
            year={props.year}
            movieLength={props.movieLength}
            countries={props.countries}
            genres={props.genres}
            languages={props.languages}
            subtitles_languages={props.subtitles_languages}
            quality={props.quality}
            movieName={props.movieName}
            isOpen={isOpenTrailer}
            setIsOpen={setIsOpenTrailer}
          />
          <FilmInfo filmInfo={props} setIsOpen={setIsOpenTrailer} />
        </div>
        <FilmContent {...props} />
      </div>
    </div>
  );
};

export default FilmCard;
