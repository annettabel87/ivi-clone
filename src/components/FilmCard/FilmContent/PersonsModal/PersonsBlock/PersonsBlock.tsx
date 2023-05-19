import React, { FC } from 'react';
import PersonsList from '../PersonsList/PersonsList';
import { IFilm } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './PersonsBlock.module.scss';

const PersonsBlock: FC<IFilm> = (movie) => {
  return (
    <div className={styles.persons}>
      <section className={styles.personsList}>
        <PersonsList persons={movie.director} title={'Режиссёр'} />
      </section>
      {movie.actors && (
        <section className={styles.personsList}>
          <PersonsList persons={movie.actors} title={'Актёры'} />
        </section>
      )}
      {movie.voice_actors && (
        <section className={styles.personsList}>
          <PersonsList persons={movie.voice_actors} title={'Актёры дубляжа'} />
        </section>
      )}
      {movie.producers && (
        <section className={styles.personsList}>
          <PersonsList persons={movie.producers} title={'Продюсеры'} />
        </section>
      )}
      {movie.operator && (
        <section className={styles.personsList}>
          <PersonsList persons={[movie.operator]} title={'Оператор'} />
        </section>
      )}
      {movie.designers && (
        <section className={styles.personsList}>
          <PersonsList persons={movie.designers} title={'Художники'} />
        </section>
      )}
      {movie.writers && (
        <section className={styles.personsList}>
          <PersonsList persons={movie.writers} title={'Сценарист'} />
        </section>
      )}
      {movie.musics && (
        <section className={styles.personsList}>
          <PersonsList persons={movie.musics} title={'Композитор'} />
        </section>
      )}
      {movie.editor && (
        <section className={styles.personsList}>
          <PersonsList persons={[movie.editor]} title={'Монтаж'} />
        </section>
      )}
    </div>
  );
};

export default PersonsBlock;
