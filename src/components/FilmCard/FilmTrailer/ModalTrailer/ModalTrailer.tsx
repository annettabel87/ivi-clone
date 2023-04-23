import React, { FC } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import close from '@/assets/icon/close.svg';
import styles from './ModalTrailer.module.scss';

export interface IModalTrailer {
  onClose: () => void;
  trailer: string;
  ageRating: string;
  name: string;
}

const ModalTrailer: FC<IModalTrailer> = ({ onClose, trailer, ageRating, name }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.trailer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.close} onClick={onClose}>
          <Image src={close} alt="закрыть" width={20} height={20} />
        </button>
        <div className={styles.videoBlock}>
          <ReactPlayer
            url={trailer}
            origin={'https://localhost:3000/*'}
            className={styles.video}
            controls={true}
            playing={true}
            playsinline={true}
            width={'100%'}
            preload={'auto'}
            frameborder="0"
            allowfullscreen="allowfullscreen"
          />
          <div className={styles.video__header}>
            <p className={styles.video__title}>{name}</p>
            <p className={styles.video__ageRating}>{ageRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTrailer;
