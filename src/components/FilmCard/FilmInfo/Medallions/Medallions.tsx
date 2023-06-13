import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMedallionsProps } from '@/shared/Interfaces/FilmPageInterfaces';
import { PERSON_ROUTE } from '@/shared/constants/routes';
import styles from './Medallions.module.scss';

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
            href={`${PERSON_ROUTE}/${person.personKinopoiskId}`}
            className={styles.medallions_item}
            key={person.personKinopoiskId}
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
