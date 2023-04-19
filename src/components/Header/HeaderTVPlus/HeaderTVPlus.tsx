import React, { FC } from 'react';
import styles from './HeaderTVPlus.module.scss';
import { LinksList } from '@/components/LinksList/LinksList';
import { tvPlusLinks } from '@/shared/headerLinks/tvPlusLinks';
import { HeaderWidget } from '../HeaderWidget/HeaderWidget';
import Button from '@/components/Button/Button';
import { SCHEDULE_TV_PLUS_ROUTE } from '@/shared/constants/tvPlusRoutes';

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
          href={SCHEDULE_TV_PLUS_ROUTE}
        >
          <div className={styles.btnContent}>
            <span>Телепрограмма</span>
          </div>
        </Button>
      </div>
      <div className={styles.headerTVPlus__column}>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div>Федеральные каналы</div>
          <div>Карусель</div>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div>Спортивные каналы</div>
          <div>Карусель</div>
        </div>
        <div className={styles.headerTVPlus__carouselBlock}>
          <div>Популярные трансляции</div>
          <div>Карусель</div>
        </div>
      </div>
      <div className={styles.headerTVPlus__column}>
        <HeaderWidget />
      </div>
    </div>
  );
};
