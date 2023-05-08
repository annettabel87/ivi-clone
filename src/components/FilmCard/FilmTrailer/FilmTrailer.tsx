import React, { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import ModalTrailer from './ModalTrailer/ModalTrailer';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';
import WatchParams from '../WatchParams/WatchParams';
import { ICountry, IGenre } from '@/pages/film/[filmId]';
import fullscreenIcon from '../../../assets/icon/fullscreen.svg';
import AgeRating from '@/components/AgeRating/AgeRating';
import playIcon from '../../../assets/icon/play.svg';
import favoriteIcon from '../../../assets/icon/favorite.svg';
import shareIcon from '../../../assets/icon/share.svg';
import directoryIcon from '../../../assets/icon/directory.svg';
import styles from './FilmTrailer.module.scss';
import { useWindowSize } from '@/hooks/useWindowSize ';

export interface IFilmTrailerProps {
  trailer: string;
  ageRating: string;
  name: string;
  year: number;
  movieLength: string;
  countries: ICountry[];
  genres: IGenre[];
  languages: string[];
  subtitles_languages: string[];
  quality: string;
  movieName: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const FilmTrailer: FC<IFilmTrailerProps> = ({
  trailer,
  ageRating,
  name,
  year,
  movieLength,
  countries,
  genres,
  languages,
  subtitles_languages,
  quality,
  movieName,
  isOpen,
  setIsOpen,
}) => {
  const windowWidth = useWindowSize();

  return (
    <div className={styles.filmTrailer}>
      <div className={styles.filmTrailer__header}>
        <h1 className={styles.filmTrailer__title}>
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
          align="left"
        />
      </div>
      <div className={styles.filmTrailer__video_block}>
        <ReactPlayer
          url={trailer}
          origin={'https://localhost:3000/*'}
          className={styles.filmTrailer__video}
          loop
          muted
          controls={false}
          playing={true}
          playsinline={true}
          width={'100%'}
          preload={'auto'}
        />
        {/* <video
          width={'100%'}
          // src={
          //   'https://widgets.kinopoisk.ru/discovery/film/196707/trailer/103349?noAd=0&embedId=&hidden=&muted=&loop=0&autoplay=1&from=&extraTrailers=&onlyPlayer=1'
          // }
        >
          <source src="https://widgets.kinopoisk.ru/discovery/film/196707/trailer/103349?noAd=0&embedId=&hidden=&muted=&loop=0&autoplay=1&from=&extraTrailers=&onlyPlayer=1" />
        </video> */}
        <div className={styles.filmTrailer__overlay}>
          <button className={styles.fullscreen} onClick={() => setIsOpen(true)}>
            <Image src={fullscreenIcon} alt="fullscreen" width={16} height={16} />
            <p className={styles.fullscreen__text}>Развернуть трейлер</p>
          </button>
          <div className={styles.filmTrailer__actions}>
            <Button
              border={'rgba(234,0,61,.8)'}
              bgColor={'rgba(234,0,61,.8)'}
              height={'48px'}
              radius={'8px'}
              width={windowWidth !== null && windowWidth > 599 ? '320px' : '272px'}
              as={'link'}
              href={'https://www.ivi.ru/subscribe'}
              hoverBg={'#ff0f4d'}
            >
              <div className={styles.describe}>
                <p className={styles.filmTrailer__text_bold}>Смотреть</p>
                <p className={styles.filmTrailer__text_small}>по подписке Иви</p>
              </div>
            </Button>
            <p className={styles.filmTrailer__text_note}>Первые 30 дней подписки за 1 ₽</p>
          </div>
          <AgeRating left={'16px'} bottom={'16px'} ageRating={ageRating} />
        </div>
      </div>
      <div className={styles.filmTrailer__buttons}>
        <div className={styles.filmTrailer__buttons_column}>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'109px'}
            as={'button'}
            hoverBg={'rgba(255,255,255,.16)'}
            onClick={() => setIsOpen(true)}
          >
            <div className={styles.filmTrailer__button_content}>
              <Image src={playIcon} alt={'проигрывать'} width={16} height={16} />
              <p className={styles.filmTrailer__text}>Трейлер</p>
            </div>
          </Button>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'40px'}
            as={'button'}
            hoverBg={'rgba(255,255,255,.16)'}
          >
            <div className={styles.filmTrailer__button_content}>
              <Image src={favoriteIcon} alt={'закладки'} width={16} height={16} />
            </div>
          </Button>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'40px'}
            as={'button'}
            hoverBg={'rgba(255,255,255,.16)'}
          >
            <div className={styles.filmTrailer__button_content}>
              <Image src={shareIcon} alt={'поделиться'} width={16} height={16} />
            </div>
          </Button>
        </div>
        <div className={styles.filmTrailer__buttons_column}>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'200px'}
            as={'link'}
            hoverBg={'rgba(255,255,255,.16)'}
            href={'https://www.ivi.ru/collections/free-movies'}
            onClick={() => setIsOpen(true)}
          >
            <div className={styles.filmTrailer__button_content}>
              <Image src={directoryIcon} alt={'бесплатные фильмы'} width={16} height={16} />
              <p className={styles.filmTrailer__text}>Бесплатные фильмы</p>
            </div>
          </Button>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalTrailer
          onClose={() => setIsOpen(false)}
          trailer={trailer}
          ageRating={ageRating}
          name={name}
        />
      </Modal>
    </div>
  );
};

export default FilmTrailer;
