import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MobileNavigationMenu.module.scss';
import { LinksList } from '@/components/LinksList/LinksList';
import {
  tvPlusCarouselFederalChannels,
  tvPlusCarouselSportChannels,
  tvPlusCarouselTranslations,
  tvPlusLinks,
} from '@/shared/headerLinks/tvPlusLinks';
import Button from '@/components/Button/Button';
import { TVPlusCarouselItem } from '@/components/Header/HeaderTVPlus/TVPlusCarouselItem';

export const MobileTVPlus = () => {
  return (
    <>
      <div className={styles.menuTitle}>ТВ онлайн</div>
      <LinksList list={tvPlusLinks} />
      <Button
        width={'100%'}
        height={'40px'}
        bgColor={'#302a44'}
        hoverBg={'#3a3352'}
        radius={'8px'}
        border={'none'}
        as={'link'}
        href={'https://www.ivi.ru/tvplus/tv-schedule-today'}
      >
        <div className={styles.menuTitle}>Телепрограмма</div>
      </Button>
      <div className={styles.menuTitle}>Федеральные каналы</div>
      <div className={styles.tvPlusChannels}>
        {tvPlusCarouselFederalChannels.slice(0, 8).map((item) => (
          <Link href={item.link} className={styles.tvPlusChannelItem} key={item.link}>
            <Image src={item.imageSrc} alt={'channel'} width={88} height={57} />
          </Link>
        ))}
      </div>
      <div className={styles.menuTitle}>Спортивные каналы</div>
      <div className={styles.tvPlusChannels}>
        {tvPlusCarouselSportChannels.slice(0, 8).map((item) => (
          <Link href={item.link} className={styles.tvPlusChannelItem} key={item.link}>
            <Image src={item.imageSrc} alt={'channel'} width={88} height={57} />
          </Link>
        ))}
      </div>
      <div className={styles.menuTitle}>Популярные трансляции</div>
      <div className={styles.tvPlusTranslations}>
        {tvPlusCarouselTranslations.slice(0, 3).map((item) => (
          <Link href={item.link} key={item.link}>
            <div className={styles.tvPlusTranslationItem}>
              <div className={styles.tvPlusTranslationItem__imageWrapper}>
                <Image src={item.imageSrc} alt={'channel'} width={58} height={38} />
              </div>
              <div>
                <div className={styles.tvPlusTranslationItem__title}>{item.title}</div>
                <div className={styles.tvPlusTranslationItem__date}>{item.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
