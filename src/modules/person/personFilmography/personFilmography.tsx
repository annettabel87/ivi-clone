import FilmList from "./filmList/filmList";
import styles from './personFilmography.module.scss';
import { useState } from 'react';

const filmArray = [
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/38b9f26a-706f-4d19-8ad8-dbca62ac8ed3/3840x',
    name: 'Бойтесь Человека-невидимки',
    year: '2022',
    // rate: {
    //   kinopoisk: '4.4',
    // },
    filmId: 1,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/c353a226-f1f4-40f6-9bd7-bb42d53f0c30/3840x',
    name: 'Воронья лощина',
    year: '2022',
    rate: {
      kinopoisk: '5.8',
    },
    filmId: 2,
  },

  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 3,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/38b9f26a-706f-4d19-8ad8-dbca62ac8ed3/3840x',
    name: 'Бойтесь Человека-невидимки',
    year: '2022',
    rate: {
      kinopoisk: '4.4',
    },
    filmId: 4,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/c353a226-f1f4-40f6-9bd7-bb42d53f0c30/3840x',
    name: 'Воронья лощина',
    year: '2022',
    rate: {
      kinopoisk: '5.8',
    },
    filmId: 5,
  },

  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 6,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/38b9f26a-706f-4d19-8ad8-dbca62ac8ed3/3840x',
    name: 'Бойтесь Человека-невидимки',
    year: '2022',
    rate: {
      kinopoisk: '4.4',
    },
    filmId: 7,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/c353a226-f1f4-40f6-9bd7-bb42d53f0c30/3840x',
    name: 'Воронья лощина',
    year: '2022',
    rate: {
      kinopoisk: '5.8',
    },
    filmId: 8,
  },

  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 9,
  },
];

const PersonFilmography = () => {
    const [filmCount, setFilmCount] = useState (filmArray.slice(0, 4))
    const [showAllFilms, setShowAllFilms] = useState (false)
    const handleSwitchFilmCount = (array) => {
        setFilmCount(array);
        setShowAllFilms(true);
    }

  return (
    <>
      <div className={styles.personFilmographyHeader}>
        <h2 className={styles.personFilmographyTitle}>Полная фильмография</h2>
        <p className={styles.personFilmographyExtraTitle}>16 фильмов</p>
      </div>

      <FilmList filmArray={filmCount} />
      {(filmCount.length >= 4 && !showAllFilms) ? (<p onClick={() => {handleSwitchFilmCount(filmArray)}}>Показать еще</p>):(<></>)}
    </>
  );
};

export default PersonFilmography;