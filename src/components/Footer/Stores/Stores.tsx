import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import appleLogo from '../../../assets/icon/appleLogo.svg';
import googlePlayLogo from '../../../assets/icon/googlePlayLogo.svg';
import smartTvLogo from '../../../assets/icon/smartTv.svg';
import gadgets from '../../../assets/icon/gadgets.svg';
import styles from './Stores.module.scss';

export const Stores = () => {
  return (
    <div className={styles.stores}>
      <Button
        border={'1px solid #1f1b2e'}
        bgColor={'#1f1b2e'}
        height={'40px'}
        radius={'8px'}
        width={'125px'}
        as={'link'}
        href="https://go.onelink.me/app/devicesiOS"
        target="_blank"
        hoverBg={'#2e2844'}
      >
        <div className={styles.btn__info}>
          <Image src={appleLogo} alt={'googlePlay Logo'} width={20} height={20} />
          <div className={styles.btn__description}>
            <p className={styles.stores__text_small}>Загрузить в</p>
            <p className={styles.stores__title}>App Store</p>
          </div>
        </div>
      </Button>
      <Button
        border={'1px solid #1f1b2e'}
        bgColor={'#1f1b2e'}
        height={'40px'}
        radius={'8px'}
        width={'139px'}
        as={'link'}
        href="https://go.onelink.me/app/devicesAndroid"
        target="_blank"
        hoverBg={'#2e2844'}
      >
        <div className={styles.btn__info}>
          <Image src={googlePlayLogo} alt={'apple Logo'} width={20} height={20} />
          <div className={styles.btn__description}>
            <p className={styles.stores__text_small}>Доступно в</p>
            <p className={styles.stores__title}>Google Play</p>
          </div>
        </div>
      </Button>
      <Button
        border={'1px solid #1f1b2e'}
        bgColor={'#1f1b2e'}
        height={'40px'}
        radius={'8px'}
        width={'120px'}
        as={'link'}
        href="https://www.ivi.ru/pages/tvsmart"
        target="_blank"
        hoverBg={'#2e2844'}
      >
        <div className={styles.btn__info}>
          <Image src={smartTvLogo} alt={'smart TV'} width={20} height={20} />
          <div className={styles.btn__description}>
            <p className={styles.stores__text_small}>Смотрите на</p>
            <p className={styles.stores__title}>Smart TV</p>
          </div>
        </div>
      </Button>
      <Button
        border={'1px solid #1f1b2e'}
        bgColor={'#1f1b2e'}
        height={'40px'}
        radius={'8px'}
        width={'174px'}
        as={'link'}
        href="https://go.onelink.me/app/devicesiOS"
        target="_blank"
        hoverBg={'#2e2844'}
      >
        <div className={styles.btn__info}>
          <Image src={gadgets} alt={'gadgets'} width={20} height={20} />
          <div className={styles.btn__description}>
            <p className={styles.stores__title}>Все устройства</p>
          </div>
        </div>
      </Button>
    </div>
  );
};
