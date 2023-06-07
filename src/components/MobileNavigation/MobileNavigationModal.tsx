import React from 'react';
import Image from 'next/image';
import styles from './MobileNavigation.module.scss';
import Button from '../Button/Button';
import diamondIcon from '../../assets/icon/diamond.svg';
import certificateIcon from '../../assets/icon/certificate.svg';
import { MobileNavigationMenu } from './MobileNavigationMenu/MobileNavigationMenu';
import { Divider } from '../Divider/Divider';

export const MobileNavigationModal = () => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.fixedDivider}>
          <Divider />
        </div>
        <div className={styles.content}>
          <div className={styles.content__subscription}>
            <Button
              width={'100%'}
              height={'48px'}
              bgColor={'#1f1b2e'}
              radius={'8px'}
              border={'none'}
              as={'link'}
              href={'https://www.ivi.ru/profile/subscriptions'}
              hoverBg={'#231f34'}
              hoverBorder={'#231f34'}
            >
              <div className={styles.content__subscriptionBtn}>
                <Image src={diamondIcon} alt={'Подписки'} width={20} height={20} />
                <span>Поключить подписку</span>
                <div className={styles.redCircle}></div>
              </div>
            </Button>
            <Button
              width={'100%'}
              height={'48px'}
              bgColor={'#1f1b2e'}
              radius={'8px'}
              border={'none'}
              as={'link'}
              href={'https://www.ivi.ru/profile/subscriptions'}
              hoverBg={'#231f34'}
              hoverBorder={'#231f34'}
            >
              <div className={styles.content__subscriptionBtn}>
                <Image src={certificateIcon} alt={'Активация сертификата'} width={20} height={20} />
                <span>Активация сертификата</span>
                <div className={styles.redCircle}></div>
              </div>
            </Button>
          </div>
          <Divider />
          <MobileNavigationMenu />
        </div>
      </div>
    </>
  );
};
