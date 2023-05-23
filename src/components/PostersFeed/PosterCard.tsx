import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IPosterCardProps } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './PostersFeed.module.scss';

export const PosterCard: FC<IPosterCardProps> = ({ href, imgSrc, imgAlt, width, height }) => {
  return (
    <li>
      <Link href={href}>
        <Image
          className={styles.cardItemImage}
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
        />
      </Link>
    </li>
  );
};
