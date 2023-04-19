import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formateTime } from '@/helpers/helpers';
import { IFilm } from '@/pages/film/[filmId]';
import RatingWidget from './RatingWidget/RatingWidget';
import Medallions from './Medallions/Medallions';
import volumeIcon from '../../../assets/icon/volume.svg';
import keyBoardIcon from '../../../assets/icon/keyboard.svg';
import styles from './FilmInfo.module.scss';

const FilmInfo: FC<IFilm> = ({
  movieName,
  releaseYear,
  movieLength,
  ageRating,
  countries,
  genres,
  quality,
  languages,
  subtitles_languages,
  rating,
  persons,
  description,
  shortDescription,
}) => {
  const [isShowFullDescription, setIsShowFullDescription] = useState<boolean>(false);
  return (
    <div className={styles.filmInfo}>
      <h1 className={styles.filmInfo__title}>
        {movieName} (Фильм {releaseYear}) смотреть онлайн
      </h1>
      <div className={styles.filmInfo__watchParams}>
        <div className={styles.filmInfo__watchParams_row}>
          <Link href={`/films/${releaseYear}`} className={styles.filmInfo__text}>
            {releaseYear}
          </Link>
          <p className={styles.filmInfo__text}>{formateTime(movieLength)}</p>
          <p className={styles.filmInfo__text}>{ageRating}+</p>
        </div>
        <div className={styles.filmInfo__watchParams_row}>
          <Link href={`/films/${countries[0].name}`} className={styles.filmInfo__text}>
            {countries[0].name}
          </Link>
          {genres.map((genre) => {
            return (
              <div className={styles.filmInfo__text_dot} key={genre.name}>
                <span className={styles.dot}></span>
                <Link href={`/films/${genre.name}`} className={styles.filmInfo__text}>
                  {genre.name}
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
              <>
                {i !== 0 && <span className={styles.dot}></span>}
                <p className={styles.filmInfo__text}>{language}</p>
              </>
            );
          })}
        </div>
      </div>
      <Medallions persons={[...persons].splice(0, 4)} rating={rating} />
      <div className={styles.filmInfo__description}>
        <p className={styles.filmInfo__text}>{shortDescription}</p>
        {isShowFullDescription && (
          <>
            <p className={styles.filmInfo__text}>{description}</p>
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
      <RatingWidget rating={rating} />
    </div>
  );
};

export default FilmInfo;
