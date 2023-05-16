import React, { FC } from 'react';
import PersonSmallCard from '../../SmallPersonCard/PersonSmallCard';
import { IPersonsList } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './PersonsList.module.scss';

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
