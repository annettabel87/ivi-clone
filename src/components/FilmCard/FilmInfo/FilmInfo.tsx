import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IFilm } from '@/pages/film/[filmId]';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import RatingWidget from './RatingWidget/RatingWidget';
import Medallions from './Medallions/Medallions';
import volumeIcon from '../../../assets/icon/volume.svg';
import keyBoardIcon from '../../../assets/icon/keyboard.svg';
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
      <div className={styles.filmInfo__watchParams}>
        <div className={styles.filmInfo__watchParams_row}>
          <Link href={`${FILMS_ROUTE}/${year}`} className={styles.filmInfo__text}>
            {year}
          </Link>
          <p className={styles.filmInfo__text}>{movieLength}</p>
          <p className={styles.filmInfo__text}>{ageRating}+</p>
        </div>
        <div className={styles.filmInfo__watchParams_row}>
          <Link href={`${FILMS_ROUTE}/${countries[0].country}`} className={styles.filmInfo__text}>
            {countries[0].countryId}
          </Link>
          {genres.map((genre) => {
            return (
              <div className={styles.filmInfo__text_dot} key={genre.genre}>
                <span className={styles.dot}></span>
                <Link href={`${FILMS_ROUTE}/${genre.genreEng}`} className={styles.filmInfo__text}>
                  {genre.genre}
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.filmInfo__watchParams_row}>
          <p className={styles.filmInfo__quality}>{quality}</p>
          <Image src={volumeIcon} alt={'язык'} width={15} height={15} />
          {languages.map((language, i) => {
            return (
              <div className={styles.filmInfo__text_dot} key={language}>
                {i !== 0 && <span className={styles.dot}></span>}
                <p className={styles.filmInfo__text}>{language}</p>
              </div>
            );
          })}
          <Image src={keyBoardIcon} alt={'субтитры'} width={15} height={15} />

          {subtitles_languages.map((language, i) => {
            return (
              <div className={styles.filmInfo__text_dot} key={language}>
                {i !== 0 && <span className={styles.dot}></span>}
                <p className={styles.filmInfo__text}>{language}</p>
              </div>
            );
          })}
        </div>
      </div>
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
