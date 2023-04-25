import { IPerson } from '@/pages/film/[filmId]';
import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import styles from './PersonSmallCard.module.scss';

export interface IPersonSmallCardProps {
  person: IPerson;
  size: 'small' | 'big';
}
const PersonSmallCard: FC<IPersonSmallCardProps> = ({ person, size }) => {
  return (
    <Link href={`/person/${person.id}`} className={`${styles.personSmallCard} ${styles[size]}`}>
      <div className={styles.personSmallCard__imageBlock}>
        <Image
          src={person.photo}
          alt="фото"
          width={size === 'small' ? 88 : 128}
          height={size === 'small' ? 88 : 128}
          className={styles.personSmallCard__imageBlock_img}
        />
      </div>
      <div className={styles.personSmallCard__description}>
        <p className={`${styles.personSmallCard__text_light} ${styles[size]}`}>
          {person.name.split(' ')[0]}
        </p>
        <p className={`${styles.personSmallCard__text_light} ${styles[size]}`}>
          {person.name.split(' ').splice(1)}
        </p>
        <p className={styles.personSmallCard__text}>{person.profession}</p>
      </div>
    </Link>
  );
};

export default PersonSmallCard;
