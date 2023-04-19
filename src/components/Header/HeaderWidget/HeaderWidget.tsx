import React from 'react';
import Image from 'next/image';
import styles from './HeaderWidget.module.scss';
import Button from '../../Button/Button';
import smartTVIcon from '../../../assets/icon/smartTv.svg';

export const HeaderWidget = () => {
  return (
    <div className={styles.widgetWrapper}>
      <div className={styles.widget}>HeaderWidget</div>
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
