import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import appleLogo from '../../../../assets/icon/appleLogo.svg';
import smartTvLogo from '../../../../assets/icon/smartTv.svg';
import gadgets from '../../../../assets/icon/gadgets.svg';
import styles from './MobileStores.module.scss';

export const MobileStores = () => {
  return (
    <div className={styles.buttonsBlock}>
      <div className={styles.btn}>
        <Button
          border={'1px solid #1f1b2e'}
          bgColor={'#1f1b2e'}
          height={'40px'}
          radius={'8px'}
          width={'100%'}
          as={'link'}
          href="https://go.onelink.me/app/devicesiOS"
          target="_blank"
          hoverBg={'#2e2844'}
        >
          <div className={styles.btn__content}>
            <Image src={appleLogo} alt={'googlePlay Logo'} width={20} height={20} />
            <div>
              <p className={styles.btn__text_small}>Загрузить в</p>
              <p className={styles.btn__title}>App Store</p>
            </div>
          </div>
        </Button>
      </div>
      <div className={styles.btn}>
        <Button
          border={'1px solid #1f1b2e'}
          bgColor={'#1f1b2e'}
          height={'40px'}
          radius={'8px'}
          width={'100%'}
          as={'link'}
          href="https://www.ivi.ru/pages/tvsmart"
          target="_blank"
          hoverBg={'#2e2844'}
        >
          <div className={styles.btn__content}>
            <Image src={smartTvLogo} alt={'smart TV'} width={20} height={20} />
            <div className={styles.btn__description}>
              <p className={styles.btn__text_small}>Смотрите на</p>
              <p className={styles.btn__title}>Smart TV</p>
            </div>
          </div>
        </Button>
      </div>
      <div className={styles.btn}>
        <Button
          border={'1px solid #1f1b2e'}
          bgColor={'#1f1b2e'}
          height={'40px'}
          radius={'8px'}
          width={'100%'}
          as={'link'}
          href="https://www.ivi.ru/devices"
          target="_blank"
          hoverBg={'#2e2844'}
        >
          <div className={styles.btn__content}>
            <Image src={gadgets} alt={'gadgets'} width={20} height={20} />
            <div className={styles.btn__description}>
              <p className={styles.btn__title}>Все устройства</p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
