import React, { FC } from 'react';
import PersonSmallCard from '../../SmallPersonCard/PersonSmallCard';
import { IPerson } from '@/pages/film/[filmId]';
import styles from './PersonsList.module.scss';

export interface IPersonsList {
  persons: IPerson[];
  title: string;
}
const PersonsList: FC<IPersonsList> = ({ persons, title }) => {
  return (
    <div className={styles.personsList}>
      <h3 className={styles.personsList__title}>{title}</h3>
      <div className={styles.personsList__list}>
        {persons.map((person) => {
          return <PersonSmallCard person={person} size={'big'} key={person.id} />;
        })}
      </div>
    </div>
  );
};

export default PersonsList;
