import React, { FC } from 'react';
import Link from 'next/link';
import arrow from '../../../assets/icon/arrow-left.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import styles from './FilmCardHeader.module.scss';
export interface IFilmCardHeaderProps {
  genre: string;
}

const FilmCardHeader: FC<IFilmCardHeaderProps> = ({ genre }) => {
  const router = useRouter();

  return (
    <div className={styles.filmCard__header}>
      <div className={styles.filmCard__header_controls}>
        <Link href={FILMS_ROUTE} className={styles.filmCard__header_link}>
          Фильмы
        </Link>
        <span className={styles.dot}></span>
        <Link href={`${FILMS_ROUTE}/${genre}`} className={styles.filmCard__header_link}>
          {genre}
        </Link>
      </div>
      <button
        type="button"
        onClick={() => router.back()}
        className={styles.filmCard__header_backBtn}
      >
        <Image src={arrow} alt="назад" height={20} width={20} />
      </button>
      <div className={styles.filmCard__header_badge}>выбор Иви</div>
    </div>
  );
};

export default FilmCardHeader;
