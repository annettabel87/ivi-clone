import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IPerson } from '@/pages/film/[filmId]';
import { PERSON_ROUTE } from '@/shared/constants/routes';
import styles from './Medallions.module.scss';

export interface IMedallionsProps {
  persons: IPerson[];
  rating: string;
}

const Medallions: FC<IMedallionsProps> = ({ persons, rating }) => {
  return (
    <div className={styles.medallions}>
      <div className={styles.medallions_item}>
        <div className={styles.medallion}>
          <div className={styles.medallion_content}>{(+rating).toFixed(1)}</div>
        </div>
        <p className={styles.medallion_caption}>Рейтинг Иви</p>
      </div>

      {persons.map((person) => {
        return (
          <Link
            href={`${PERSON_ROUTE}/${person.id}`}
            className={styles.medallions_item}
            key={person.id}
          >
            <div className={styles.medallion}>
              <div className={styles.medallion_content}>
                <Image
                  src={person.photo}
                  className={styles.medallion_img}
                  alt={'фото'}
                  width={44}
                  height={44}
                />
              </div>
            </div>
            <p className={styles.medallion_caption}>{person.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Medallions;
