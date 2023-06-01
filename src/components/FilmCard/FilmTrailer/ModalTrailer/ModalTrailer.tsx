import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { IModalTrailer } from '@/shared/Interfaces/FilmPageInterfaces';
import close from '@/assets/icon/close.svg';
import styles from './ModalTrailer.module.scss';

const ModalTrailer: FC<IModalTrailer> = ({ onClose, trailer, ageRating, name }) => {
  const [isVisibleHeader, setIsVisibleHeader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleHeader(false);
    }, 10000);
  }, []);

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
          {isVisibleHeader && (
            <div className={styles.video__header}>
              <p className={styles.video__title}>{name}</p>
              <p className={styles.video__ageRating}>{ageRating}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalTrailer;