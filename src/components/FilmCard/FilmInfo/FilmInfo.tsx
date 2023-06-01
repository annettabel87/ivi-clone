import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@/hooks/useWindowSize ';
import { IFilmInfoProps } from '@/shared/Interfaces/FilmPageInterfaces';
import RatingWidget from './RatingWidget/RatingWidget';
import WatchParams from '../WatchParams/WatchParams';
import Medallions from './Medallions/Medallions';
import Button from '@/components/Button/Button';
import playIcon from '../../../assets/icon/play.svg';
import favoriteIcon from '../../../assets/icon/favorite.svg';
import shareIcon from '../../../assets/icon/shareTrailer.svg';
import directoryIcon from '../../../assets/icon/directory.svg';
import styles from './FilmInfo.module.scss';

const FilmInfo: FC<IFilmInfoProps> = ({ filmInfo, setIsOpen }) => {
  const {
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
  } = filmInfo;

  const [isShowFullDescription, setIsShowFullDescription] = useState<boolean>(false);
  const windowWidth = useWindowSize();

  return (
    <div className={styles.filmInfo}>
      <div className={styles.filmInfo__header}>
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
      </div>
      <div className={styles.filmInfo__column}>
        {windowWidth !== null && windowWidth < 391 ? (
          <Medallions persons={[...actors].splice(0, 3)} rating={rate.kinopoisk} />
        ) : windowWidth !== null && windowWidth < 512 ? (
          <Medallions persons={[...actors].splice(0, 4)} rating={rate.kinopoisk} />
        ) : windowWidth !== null && windowWidth < 1159 ? (
          <Medallions persons={[...actors].splice(0, 5)} rating={rate.kinopoisk} />
        ) : (
          <Medallions persons={[...actors].splice(0, 4)} rating={rate.kinopoisk} />
        )}
        <div className={styles.filmInfo__btn}>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'100%'}
            as={'link'}
            hoverBg={'rgba(255,255,255,.16)'}
            href={'https://www.ivi.ru/collections/free-movies'}
            onClick={() => setIsOpen(true)}
          >
            <div className={styles.filmInfo__button_content}>
              <Image src={directoryIcon} alt={'бесплатные фильмы'} width={16} height={16} />
              <p className={styles.filmInfo__text}>Бесплатные фильмы</p>
            </div>
          </Button>
        </div>
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
        <div className={styles.filmInfo__mobileShowOptions}>
          <div className={styles.filmInfo__mobileShowOptions_item}>
            <h3 className={styles.filmInfo__text}>Языки</h3>
            <p className={styles.filmInfo__text_white}>{languages.join(', ')}</p>
          </div>
          <div className={styles.filmInfo__mobileShowOptions_item}>
            <h3 className={styles.filmInfo__text}>Субтитры</h3>
            <p className={styles.filmInfo__text_white}>{subtitles_languages.join(', ')}</p>
          </div>
          <div className={styles.filmInfo__mobileShowOptions_item}>
            <h3 className={styles.filmInfo__text}>Качество</h3>
            <div className={styles.filmInfo__quality}>
              <p className={styles.filmInfo__text}>{quality}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filmInfo__column_buttons}>
        <Button
          border={'rgba(255,255,255,0.08)'}
          bgColor={'rgba(255,255,255,0.08)'}
          height={'40px'}
          radius={'8px'}
          width={'100%'}
          as={'button'}
          hoverBg={'rgba(255,255,255,.16)'}
          onClick={() => setIsOpen(true)}
        >
          <div className={styles.filmInfo__button_content}>
            <Image src={playIcon} alt={'проигрывать'} width={16} height={16} />
            <p className={styles.filmInfo__text}>Трейлер</p>
          </div>
        </Button>
        <div className={styles.filmInfo__buttons_item}>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'100%'}
            as={'button'}
            hoverBg={'rgba(255,255,255,.16)'}
          >
            <div className={styles.filmInfo__button_content}>
              <Image src={favoriteIcon} alt={'закладки'} width={16} height={16} />
            </div>
          </Button>
        </div>
        <div className={styles.filmInfo__buttons_item}>
          <Button
            border={'rgba(255,255,255,0.08)'}
            bgColor={'rgba(255,255,255,0.08)'}
            height={'40px'}
            radius={'8px'}
            width={'100%'}
            as={'button'}
            hoverBg={'rgba(255,255,255,.16)'}
          >
            <div className={styles.filmInfo__button_content}>
              <Image src={shareIcon} alt={'поделиться'} width={16} height={16} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
