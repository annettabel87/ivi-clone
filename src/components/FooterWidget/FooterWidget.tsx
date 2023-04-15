import React, { FC } from 'react';
import mute from '../../assets/icon/mute.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FooterWidget.module.scss';

const FooterWidget: FC = () => {
  return (
    <div className={styles.widget}>
      <Link href={'https://www.ivi.ru/subscribe'} className={styles.widget__btn}>
        <Image src={mute} alt={'mute'} />
      </Link>
      <div className={styles.widget__text}>Смотрите фильмы, сериалы и мультфильмы без рекламы</div>
    </div>
  );
};

export default FooterWidget;
