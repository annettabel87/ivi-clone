import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PERSON_ROUTE } from '@/shared/constants/routes';
import { IPerson } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './PersonSmallCard.module.scss';

export interface IPersonSmallCardProps {
  person: IPerson;
  size: 'xs' | 'small' | 'big';
}

const PersonSmallCard: FC<IPersonSmallCardProps> = ({ person, size }) => {
  return (
    <Link
      href={`${PERSON_ROUTE}/${person.id}`}
      className={`${styles.personSmallCard} ${styles[size]}`}
    >
      <div className={`${styles.personSmallCard__imageBlock}  ${styles[size]}`}>
        <Image
          src={person.photo}
          alt="фото"
          width={size === 'small' ? 88 : 'xs' ? 72 : 128}
          height={size === 'small' ? 88 : 'xs' ? 72 : 128}
          className={`${styles.personSmallCard__imageBlock_img} ${styles[size]}`}
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
