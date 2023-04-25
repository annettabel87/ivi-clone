import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from '@/components/Modal/Modal';
import { IFilm } from '@/pages/film/[filmId]';
import ModalTrailer from '../FilmTrailer/ModalTrailer/ModalTrailer';
import SmallFilmCard from './SmallFilmCard/SmallFilmCard';
import PersonSmallCard from './SmallPersonCard/PersonSmallCard';
import TrailerSmallCard from './TrailerSmallCard/TrailerSmallCard';
import WatchAllDevices from './WatchAllDevices/WatchAllDevices';
import styles from './FilmContent.module.scss';
import PersonsModal from './PersonsModal/PersonsModal';

const FilmContent: FC<IFilm> = ({
  id,
  similarMovies,
  trailerLink,
  actors,
  director,
  voice_actors,
  operator,
  producers,
  designers,
  writers,
  musics,
  editor,
  movieName,
  poster,
  ageRating,
  year,
}) => {
  const [isOpenTrailers, setIsOpenTrailers] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className={styles.filmContent}>
      <section className={styles.filmContent__films}>
        <h2 className={styles.filmContent__title}>С фильмом «{movieName}» смотрят</h2>
        <div className={styles.filmContent__slider}>
          {similarMovies.map((movie) => {
            return <SmallFilmCard key={movie.id} {...movie} />;
          })}
        </div>
      </section>
      <section className={styles.filmContent__persons}>
        <Link
          href={`/film/${id}/person`}
          scroll={false}
          shallow={true}
          className={`${styles.filmContent__title} ${styles.title_link}`}
        >
          Актёры и создатели
        </Link>
        <div className={styles.filmContent__list}>
          {[director[0], ...actors].splice(0, 9).map((person) => {
            return <PersonSmallCard key={person.id} person={person} size={'small'} />;
          })}
          <Link
            href={`/film/${id}/person`}
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
          {[0, 0, 0].map((trailer) => {
            return (
              <TrailerSmallCard
                key={movieName}
                poster={poster}
                movieName={movieName}
                onClickHandler={setIsOpenTrailers}
              />
            );
          })}
        </div>
      </section>
      <WatchAllDevices movieName={movieName} />
      <Modal
        open={router.pathname.includes('person') || isOpenTrailers}
        onClose={
          isOpenTrailers
            ? () => setIsOpenTrailers(false)
            : () => {
                router.push(`/film/${id}`);
              }
        }
      >
        {isOpenTrailers ? (
          <ModalTrailer
            onClose={() => setIsOpenTrailers(false)}
            trailer={trailerLink}
            ageRating={ageRating}
            name={movieName}
          />
        ) : (
          <PersonsModal
            onClose={() => router.push(`/film/${id}`)}
            movieName={movieName}
            actors={actors}
            director={director}
            voice_actors={voice_actors}
            operator={operator}
            producers={producers}
            designers={designers}
            writers={writers}
            musics={musics}
            editor={editor}
            year={0}
          />
        )}
      </Modal>
    </div>
  );
};

export default FilmContent;
