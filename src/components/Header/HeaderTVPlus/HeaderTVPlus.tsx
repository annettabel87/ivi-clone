import React, { FC } from 'react';
import styles from './HeaderTVPlus.module.scss';
import { LinksList } from '@/components/LinksList/LinksList';
import { tvPlusLinks } from '@/shared/headerLinks/tvPlusLinks';
import { HeaderWidget } from '../HeaderWidget/HeaderWidget';
import Button from '@/components/Button/Button';
import { tvShowPostersLinks } from '@/shared/headerLinks/postersFeedLinks';
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
          <div className={styles.btnContent}>
            <span>Телепрограмма</span>
          </div>
        </Button>
      </div>
      <div className={styles.headerTVPlus__column}>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div className={styles.headerTVPlus__carouselTitle}>Федеральные каналы</div>
          <Carousel
            staticItemWidth={103}
            itemRightPadding={16}
            arrowSize={'small'}
            initialViewingItems={6}
            showArrows={'onHover'}
            isVisible={isVisible}
            withShadow={true}
          >
            {[...new Array(29)].map((item, index) => (
              <div key={index} style={{ width: '100%', height: '57px', backgroundColor: 'green' }}>
                {index + 1}
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div className={styles.headerTVPlus__carouselTitle}>Спортивные каналы</div>
          <div>Карусель</div>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div className={styles.headerTVPlus__carouselTitle}>Популярные трансляции</div>
          <div>Карусель</div>
        </div>
      </div>
      <div className={styles.headerTVPlus__column}>
        <HeaderWidget postersLinks={tvShowPostersLinks} />
      </div>
    </div>
  );
};
