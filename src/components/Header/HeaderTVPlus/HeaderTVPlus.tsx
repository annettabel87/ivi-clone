import React, { FC } from 'react';
import styles from './HeaderTVPlus.module.scss';
import { LinksList } from '@/components/LinksList/LinksList';
import {
  tvPlusLinks,
  tvPlusCarouselFederalChannels,
  tvPlusCarouselSportChannels,
  tvPlusCarouselTranslations,
} from '@/shared/headerLinks/tvPlusLinks';
import { HeaderWidget } from '../HeaderWidget/HeaderWidget';
import Button from '@/components/Button/Button';
import { tvShowPostersLinks } from '@/shared/headerLinks/postersFeedLinks';
import { TVPlusCarouselItem } from './TVPlusCarouselItem';
import { Carousel } from '@/components/Carousel/Carousel';

interface IHeaderTVPlusProps {
  isVisible: boolean;
}

export const HeaderTVPlus: FC<IHeaderTVPlusProps> = ({ isVisible }) => {
  return (
    <div className={isVisible ? styles.headerTVPlus : styles.hidden}>
      <div className={styles.headerTVPlus__column}>
        <div>
          <div className={styles.headerTVPlus__listTitle}>ТВ онлайн</div>
          <LinksList list={tvPlusLinks} />
        </div>
        <Button
          width={'180px'}
          height={'40px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={'https://www.ivi.ru/tvplus/tv-schedule-today'}
        >
          <div className={styles.headerTVPlus__btnTitle}>Телепрограмма</div>
        </Button>
      </div>
      <div className={styles.headerTVPlus__column}>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div className={styles.headerTVPlus__carouselBlockTitle}>Федеральные каналы</div>
          <Carousel
            staticItemWidth={103}
            itemRightPadding={16}
            arrowSize={'small'}
            initialViewingItems={6}
            showArrows={'onHover'}
            isVisible={isVisible}
            withShadow={true}
          >
            {tvPlusCarouselFederalChannels.map((item) => (
              <TVPlusCarouselItem
                key={item.link}
                purpose={'channel'}
                link={item.link}
                imageSrc={item.imageSrc}
              />
            ))}
          </Carousel>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div className={styles.headerTVPlus__carouselBlockTitle}>Спортивные каналы</div>
          <Carousel
            staticItemWidth={103}
            itemRightPadding={16}
            arrowSize={'small'}
            initialViewingItems={6}
            showArrows={'onHover'}
            isVisible={isVisible}
            withShadow={true}
          >
            {tvPlusCarouselSportChannels.map((item) => (
              <TVPlusCarouselItem
                key={item.link}
                purpose={'channel'}
                link={item.link}
                imageSrc={item.imageSrc}
              />
            ))}
          </Carousel>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div className={styles.headerTVPlus__carouselBlockTitle}>Популярные трансляции</div>
          <Carousel
            staticItemWidth={270}
            itemRightPadding={16}
            arrowSize={'small'}
            initialViewingItems={2}
            showArrows={'onHover'}
            isVisible={isVisible}
            withShadow={true}
          >
            {tvPlusCarouselTranslations.map((item) => (
              <TVPlusCarouselItem
                key={item.link}
                purpose={'translation'}
                link={item.link}
                imageSrc={item.imageSrc}
                title={item.title}
                date={item.date}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.headerTVPlus__column}>
        <HeaderWidget postersLinks={tvShowPostersLinks} />
      </div>
    </div>
  );
};
