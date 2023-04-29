import React, { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import tvPoster from '@/assets/image/tv-without-poster.png';
import tvImage from '@/assets/image/tv.jpg';
import ipadPoster from '@/assets/image/ipad-without-poster.png';
import ipadImage from '@/assets/image/ipad.jpg';
import styles from './WatchAllDevices.module.scss';

export interface IWatchAllDevicesProps {
  movieName: string;
}
const WatchAllDevices: FC<IWatchAllDevicesProps> = ({ movieName }) => {
  return (
    <section className={styles.watchAllDevices}>
      <div className={styles.watchAllDevices__info}>
        <h2 className={styles.watchAllDevices__title}>
          Cмотреть «{movieName}» на всех устройствах
        </h2>
        <p className={styles.watchAllDevices__text}>
          Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
        </p>
        <Button
          href={'https://www.ivi.ru/devices'}
          border={'#ea003d'}
          bgColor={'#ea003d'}
          height={'40px'}
          radius={'8px'}
          width={'215px'}
          as={'link'}
          hoverBg={'#ff0f4d'}
          hoverBorder={'#ff0f4d'}
          target={'_self'}
        >
          Подключить устройства
        </Button>
      </div>
      <div className={styles.watchAllDevices__devices}>
        <div className={styles.watchAllDevices__devices_container}>
          <Image src={tvPoster} alt="телевизор" className={styles.watchAllDevices__devices_imgTv} />
          <Image
            src={ipadPoster}
            alt="планшет"
            className={styles.watchAllDevices__devices_imgTablet}
          />
          <Image
            src={tvImage}
            alt="телевизор"
            className={styles.watchAllDevices__devices_imgTvPoster}
          />
          <Image
            src={ipadImage}
            alt="планшет"
            className={styles.watchAllDevices__devices_imgTabletPoster}
          />
        </div>
      </div>
    </section>
  );
};

export default WatchAllDevices;