import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TVPlusCarouselItem.module.scss';

interface ITVPlusCarouselItemProps {
  purpose: 'channel' | 'translation';
  link: string;
  imageSrc: string;
  title?: string;
  date?: string;
}

export const TVPlusCarouselItem: FC<ITVPlusCarouselItemProps> = ({
  purpose,
  link,
  imageSrc,
  title,
  date,
}) => {
  return (
    <>
      {purpose === 'channel' && (
        <Link href={link}>
          <div className={styles.channelItem}>
            <Image src={imageSrc} alt={purpose} width={88} height={57} />
          </div>
        </Link>
      )}
      {purpose === 'translation' && (
        <Link href={link}>
          <div className={styles.translationItem}>
            <div className={styles.translationItem__imageWrapper}>
              <Image src={imageSrc} alt={purpose} width={58} height={38} />
            </div>
            <div>
              <div className={styles.translationItem__title}>{title}</div>
              <div className={styles.translationItem__date}>{date}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
