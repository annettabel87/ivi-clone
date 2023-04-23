import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Medallions.module.scss';
import { IPerson } from '@/pages/film/[filmId]';

export interface IMedallionsProps {
  persons: IPerson[];
  rating: string;
}

const Medallions: FC<IMedallionsProps> = ({ persons, rating }) => {
  return (
    <div className={styles.medallions}>
      <div className={styles.medallions_item}>
        <div className={styles.medallion}>
          <div className={styles.medallion_content}>{rating}</div>
        </div>
        <p className={styles.medallion_caption}>Рейтинг Иви</p>
      </div>

      {persons.map((person) => {
        return (
          <Link href={`/person/${person.id}`} className={styles.medallions_item} key={person.id}>
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
