import React, { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import tvPoster from '@/assets/image/tv-without-poster.png';
import ipadPoster from '@/assets/image/ipad-without-poster.png';
import styles from './WatchAllDevices.module.scss';
import { useWindowSize } from '@/hooks/useWindowSize ';

export interface IWatchAllDevicesProps {
  movieName: string;
  poster: string;
}
const WatchAllDevices: FC<IWatchAllDevicesProps> = ({ movieName, poster }) => {
  const windowWidth = useWindowSize();

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
          width={windowWidth !== null && windowWidth > 599 ? '215px' : '100%'}
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
            src={poster}
            alt="телевизор"
            className={styles.watchAllDevices__devices_imgTvPoster}
            width={337}
            height={192}
          />
          <Image
            src={poster}
            alt="планшет"
            className={styles.watchAllDevices__devices_imgTabletPoster}
            width={200}
            height={135}
          />
        </div>
      </div>
    </section>
  );
};

export default WatchAllDevices;
