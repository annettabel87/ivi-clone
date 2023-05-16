import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import { ICountry, IGenre } from '@/pages/film/[filmId]';
import volumeIcon from '../../../assets/icon/volume.svg';
import keyBoardIcon from '../../../assets/icon/keyboard.svg';
import styles from './WatchParams.module.scss';

export interface IWatchParamsProps {
  year: number;
  movieLength: string;
  ageRating: string;
  countries: ICountry[];
  genres: IGenre[];
  languages: string[];
  subtitles_languages: string[];
  quality: string;
  align: 'left' | 'center';
}
const WatchParams: FC<IWatchParamsProps> = ({
  year,
  movieLength,
  ageRating,
  countries,
  genres,
  languages,
  subtitles_languages,
  quality,
  align,
}) => {
  return (
    <div className={`${styles.watchParams} ${styles[align]}`}>
      <div className={styles.watchParams__row}>
        <Link href={`${FILMS_ROUTE}/${year}`} className={styles.watchParams__text}>
          {year}
        </Link>
        <p className={styles.watchParams__text}>{movieLength}</p>
        <p className={styles.watchParams__text}>{ageRating}</p>
      </div>
      <div className={styles.watchParams__row}>
        <Link href={`${FILMS_ROUTE}/${countries[0].country}`} className={styles.watchParams__text}>
          {countries[0].country}
        </Link>
        {genres.map((genre) => {
          return (
            <div className={styles.watchParams__text_dot} key={genre.genre}>
              <span className={styles.dot}></span>
              <Link href={`${FILMS_ROUTE}/${genre.genreEng}`} className={styles.watchParams__text}>
                {genre.genre}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.watchParams__row}>
        <p className={styles.watchParams__quality}>{quality}</p>
        <Image src={volumeIcon} alt={'язык'} width={15} height={15} />
        {languages.map((language, i) => {
          return (
            <div className={styles.watchParams__text_dot} key={language}>
              {i !== 0 && <span className={styles.dot}></span>}
              <p className={styles.watchParams__text}>{language}</p>
            </div>
          );
        })}
        <Image src={keyBoardIcon} alt={'субтитры'} width={15} height={15} />

        {subtitles_languages.map((language, i) => {
          return (
            <div className={styles.watchParams__text_dot} key={language}>
              {i !== 0 && <span className={styles.dot}></span>}
              <p className={styles.watchParams__text}>{language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchParams;
