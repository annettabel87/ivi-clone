import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from '@/components/Modal/Modal';
import { IFilm } from '@/pages/film/[filmId]';
import ModalTrailer from '../FilmTrailer/ModalTrailer/ModalTrailer';
import SmallFilmCard from '../../SmallFilmCard/SmallFilmCard';
import PersonSmallCard from './SmallPersonCard/PersonSmallCard';
import TrailerSmallCard from './TrailerSmallCard/TrailerSmallCard';
import WatchAllDevices from './WatchAllDevices/WatchAllDevices';
import styles from './FilmContent.module.scss';
import PersonsModal from './PersonsModal/PersonsModal';

const FilmContent: FC<IFilm> = (movie) => {
  const [isOpenTrailers, setIsOpenTrailers] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className={styles.filmContent}>
      <section className={styles.filmContent__films}>
        <h2 className={styles.filmContent__title}>С фильмом «{movie.movieName}» смотрят</h2>
        <div className={styles.filmContent__slider}>
          {movie.similarMovies.map((movie) => {
            return <SmallFilmCard key={movie.id} movie={movie} type={'posterInfo'} />;
          })}
        </div>
      </section>
      <section className={styles.filmContent__persons}>
        <Link
          href={`/film/${movie.id}/person`}
          scroll={false}
          shallow={true}
          className={`${styles.filmContent__title} ${styles.title_link}`}
        >
          Актёры и создатели
        </Link>
        <div className={styles.filmContent__list}>
          {[movie.director[0], ...movie.actors].splice(0, 9).map((person) => {
            return <PersonSmallCard key={person.id} person={person} size={'small'} />;
          })}
          <Link
            href={`/film/${movie.id}/person`}
            scroll={false}
            shallow={true}
            className={styles.roundButton}
          >
            Ещё
          </Link>
        </div>
      </section>
      <section className={styles.filmContent__trailers}>
        <h2 className={styles.filmContent__title}>Трейлеры и доп. материалы </h2>
        <div className={styles.filmContent__slider}>
          {[movie.trailerLink, movie.trailerLink, movie.trailerLink].map((trailer) => {
            return (
              <TrailerSmallCard
                key={movie.movieName}
                poster={movie.poster}
                movieName={movie.movieName}
                onClickHandler={setIsOpenTrailers}
                trailer={trailer}
              />
            );
          })}
        </div>
      </section>
      <WatchAllDevices movieName={movie.movieName} />
      <Modal
        open={router.pathname.includes('person') || isOpenTrailers}
        onClose={
          isOpenTrailers
            ? () => setIsOpenTrailers(false)
            : () => {
                router.push(`/film/${movie.id}`);
              }
        }
      >
        {isOpenTrailers ? (
          <ModalTrailer
            onClose={() => setIsOpenTrailers(false)}
            trailer={movie.trailerLink}
            ageRating={movie.ageRating}
            name={movie.movieName}
          />
        ) : (
          <PersonsModal onClose={() => router.push(`/film/${movie.id}`)} movie={movie} />
        )}
      </Modal>
    </div>
  );
};

export default FilmContent;
