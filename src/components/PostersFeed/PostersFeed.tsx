import React, { FC } from 'react';
import { PosterCard } from './PosterCard';
import { IPostersFeedLinks } from '@/shared/Interfaces/IPostersFeedLinks';
import styles from './PostersFeed.module.scss';

interface IPostersFeedProps {
  postersLinks: IPostersFeedLinks[];
  direction: 'right' | 'left';
  cardWidth?: 128 | 200;
  cardHeight?: 72 | 113;
}

export const PostersFeed: FC<IPostersFeedProps> = ({
  postersLinks,
  direction = 'right',
  cardWidth = 128,
  cardHeight = 72,
}) => {
  const feedItems = [...postersLinks, ...postersLinks.slice(0, 3)];
  let listClassName = styles.rightNarrowScrollList;

  if (direction === 'right' && cardWidth === 200) {
    listClassName = styles.rightWideScrollList;
  }

  if (direction === 'left' && cardWidth === 128) {
    listClassName = styles.leftNarrowScrollList;
  }

  if (direction === 'left' && cardWidth === 200) {
    listClassName = styles.leftWideScrollList;
  }

  return (
    <ul className={listClassName}>
      {feedItems.length &&
        feedItems.map((item, index) => (
          <PosterCard
            key={index}
            href={item.href}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            width={cardWidth}
            height={cardHeight}
          />
        ))}
    </ul>
  );
};
