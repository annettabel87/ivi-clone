import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import styles from './PostersFeed.module.scss';

interface IPosterCardProps {
  href: Url;
  imgSrc: string;
  imgAlt: string;
  width: number;
  height: number;
}

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
