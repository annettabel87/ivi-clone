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
          <div className={styles.btnContent}>
            <span>Телепрограмма</span>
          </div>
        </Button>
      </div>
      <div className={styles.headerTVPlus__column}>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div>Федеральные каналы</div>
          <div>
            <div style={{ width: '88px' }}>
              <TVPlusCarouselItem
                purpose={'channel'}
                link={tvPlusCarouselFederalChannels[0].link}
                imageSrc={tvPlusCarouselFederalChannels[0].imageSrc}
              />
            </div>
          </div>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div>Спортивные каналы</div>
          <div>
            <div style={{ width: '88px' }}>
              <TVPlusCarouselItem
                purpose={'channel'}
                link={tvPlusCarouselSportChannels[0].link}
                imageSrc={tvPlusCarouselSportChannels[0].imageSrc}
              />
            </div>
          </div>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div>Популярные трансляции</div>
          <div>
            <div style={{ width: '254px' }}>
              <TVPlusCarouselItem
                purpose={'translation'}
                link={tvPlusCarouselTranslations[0].link}
                imageSrc={tvPlusCarouselTranslations[0].imageSrc}
                title={tvPlusCarouselTranslations[0].title}
                date={tvPlusCarouselTranslations[0].date}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerTVPlus__column}>
        <HeaderWidget postersLinks={tvShowPostersLinks} />
      </div>
    </div>
  );
};
