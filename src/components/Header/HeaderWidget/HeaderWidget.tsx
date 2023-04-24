import React, { FC } from 'react';
import Image from 'next/image';
import styles from './HeaderWidget.module.scss';
import Button from '../../Button/Button';
import smartTVIcon from '../../../assets/icon/smartTv.svg';
import { PostersFeed } from '../../PostersFeed/PostersFeed';
import subscriptionIviIcon from '../../../assets/icon/subscription_ivi.svg';
import { IPostersFeedLinks } from '@/shared/Interfaces/IPostersFeedLinks';

interface IHeaderWidgetProps {
  postersLinks: IPostersFeedLinks[];
}

export const HeaderWidget: FC<IHeaderWidgetProps> = ({ postersLinks }) => {
  return (
    <div className={styles.widgetWrapper}>
      <div className={styles.widget}>
        <div className={styles.widget__feeds}>
          {postersLinks && (
            <>
              <PostersFeed postersLinks={[...postersLinks.slice(0, 5)]} direction={'left'} />
              <PostersFeed postersLinks={[...postersLinks.slice(5, 10)]} direction={'right'} />
              <PostersFeed postersLinks={[...postersLinks.slice(10, 15)]} direction={'left'} />
            </>
          )}
        </div>
        <div className={styles.widget__bottomPanel}>
          <div className={styles.widget__detailsFade}></div>
          <div className={styles.widget__detailsBlock}>
            <div className={styles.widget__subscriptionBadge}>
              <Image src={subscriptionIviIcon} alt={'subscription'} width={48} height={48} />
            </div>
            <div>
              <div className={styles.widget__detailsTitle}>Подписка Иви</div>
              <div className={styles.widget__detailsExtra}>От 199 ₽ за месяц</div>
            </div>
          </div>
          <div className={styles.widget__subscribeBtn}>
            <Button
              width={'212px'}
              height={'32px'}
              bgColor={'#ea003d'}
              hoverBg={'#ff0f4d'}
              radius={'8px'}
              border={'none'}
              as={'link'}
              href={'https://www.ivi.ru/profile/subscription'}
            >
              <div className={styles.widget__subscribeBtnTitle}>Подключить</div>
            </Button>
          </div>
          <div className={styles.widget__subscribeNote}>Отключить можно в любой момент</div>
        </div>
      </div>
      <Button
        width={'245px'}
        height={'40px'}
        bgColor={'#302a44'}
        hoverBg={'#3a3352'}
        radius={'8px'}
        border={'none'}
        as={'link'}
        href={'https://www.ivi.ru/pages/tvsmart/'}
      >
        <div className={styles.btnContent}>
          <Image src={smartTVIcon} alt={'smart TV'} width={20} height={20} />
          <span>Смотреть на SmartTV</span>
        </div>
      </Button>
    </div>
  );
};
