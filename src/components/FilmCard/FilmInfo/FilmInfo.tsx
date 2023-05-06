import React, { FC, useState } from 'react';
import { IFilm } from '@/pages/film/[filmId]';
import RatingWidget from './RatingWidget/RatingWidget';
import WatchParams from '../WatchParams/WatchParams';
import Medallions from './Medallions/Medallions';
import styles from './FilmInfo.module.scss';

const FilmInfo: FC<IFilm> = ({
  movieName,
  year,
  movieLength,
  ageRating,
  countries,
  genres,
  quality,
  languages,
  subtitles_languages,
  rate,
  actors,
  fullDescription,
  description,
}) => {
  const [isShowFullDescription, setIsShowFullDescription] = useState<boolean>(false);
  return (
    <div className={styles.filmInfo}>
      <h1 className={styles.filmInfo__title}>
        {movieName} (Фильм {year}) смотреть онлайн
      </h1>
      <WatchParams
        year={year}
        movieLength={movieLength}
        ageRating={ageRating}
        countries={countries}
        genres={genres}
        languages={languages}
        subtitles_languages={subtitles_languages}
        quality={quality}
        align="center"
      />
      <Medallions persons={[...actors].splice(0, 4)} rating={rate.kinopoisk} />
      <div className={styles.filmInfo__description}>
        <p className={styles.filmInfo__text}>{description}</p>
        {isShowFullDescription && (
          <>
            <p className={styles.filmInfo__text}>{fullDescription}</p>
            <p className={styles.filmInfo__text}>
              Смотреть легендарный «{movieName}» можно онлайн.
            </p>
            <p className={styles.filmInfo__text}>
              Приглашаем посмотреть фильм «{movieName}» в нашем онлайн-кинотеатре в хорошем HD
              качестве. Приятного просмотра!
            </p>
            <div className={styles.filmInfo__showOptions}>
              <div className={styles.filmInfo__showOptions_item}>
                <h3 className={styles.filmInfo__text}>Языки</h3>
                <p className={styles.filmInfo__text_white}>{languages.join(', ')}</p>
              </div>
              <div className={styles.filmInfo__showOptions_item}>
                <h3 className={styles.filmInfo__text}>Субтитры</h3>
                <p className={styles.filmInfo__text_white}>{subtitles_languages.join(', ')}</p>
              </div>
              <div className={styles.filmInfo__showOptions_item}>
                <p className={styles.filmInfo__text_light}>
                  <span className={styles.filmInfo__text}>Изображение и звук. </span>
                  Фактическое качество зависит от устройства и ограничений правообладателя.
                </p>
              </div>
              <div className={styles.filmInfo__showOptions_item}>
                <div className={styles.filmInfo__quality}>
                  <p className={styles.filmInfo__text}>{quality}</p>
                </div>
              </div>
            </div>
          </>
        )}
        <button
          className={styles.description__toggle}
          onClick={() => setIsShowFullDescription(!isShowFullDescription)}
        >
          {isShowFullDescription ? 'Свернуть детали' : 'Детали о фильме'}
        </button>
      </div>
      <RatingWidget rating={rate} />
    </div>
  );
};

export default FilmInfo;
