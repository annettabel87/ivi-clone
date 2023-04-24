import { IPerson } from '@/pages/film/[filmId]';
import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import styles from './PersonSmallCard.module.scss';

const PersonSmallCard: FC<IPerson> = (person) => {
  return (
    <Link href={`/person/${person.id}`} className={styles.personSmallCard}>
      <div className={styles.personSmallCard__imageBlock}>
        <Image
          src={person.photo}
          alt="фото"
          width={88}
          height={88}
          className={styles.personSmallCard__imageBlock_img}
        />
      </div>
      <div className={styles.personSmallCard__description}>
        <p className={styles.personSmallCard__text_light}>{person.name}</p>
        <p className={styles.personSmallCard__text}>{person.profession}</p>
      </div>
    </Link>
  );
};

export default PersonSmallCard;
