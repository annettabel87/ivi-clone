import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './UserAvatar.module.scss';
import noAvatar from '../../assets/icon/noAvatar.svg';

interface IUserAvatarProps {
  isAuth: boolean;
  login?: string; // Для отображения в аватаре первой буквы логина, возможно почты или имени пользователя, когда авторизован, нужно обдумать как у нас будет реализовано
  imgWidth?: number;
  imgHeight?: number;
  imgSrc?: string | StaticImageData;
  bgColor?: string;
  size: 'normal' | 'small'; // В header 'normal', в блоке комментариев 'small'
}

export const UserAvatar: FC<IUserAvatarProps> = ({
  isAuth,
  login = 'UserLogin',
  imgSrc,
  imgWidth = 48,
  imgHeight = 48,
  bgColor,
  size,
}) => {
  return (
    <div className={styles.avatar}>
      {!isAuth ? (
        <div
          className={
            size === 'normal' ? styles.avatar__unAuthorizedNormal : styles.avatar__unAuthorizedSmall
          }
        >
          <Image
            src={noAvatar}
            alt="Аватар"
            width={size === 'normal' ? 20 : 12}
            height={size === 'normal' ? 20 : 12}
            className={styles.svgImage}
          />
        </div>
      ) : (
        <>
          {size === 'normal' && imgSrc && (
            <div
              className={styles.avatar__authorizedNormal}
              style={bgColor ? { backgroundColor: bgColor } : { backgroundColor: '' }}
            >
              <Image
                src={imgSrc}
                alt="Аватар"
                priority={true}
                width={imgWidth}
                height={imgHeight}
              />
            </div>
          )}
          {size === 'normal' && !imgSrc && (
            <div
              className={styles.avatar__authorizedNormal}
              style={bgColor ? { backgroundColor: bgColor } : { backgroundColor: '#71a32d' }}
            >
              {login[0].toUpperCase()}
            </div>
          )}
          {size === 'small' && (
            <div
              className={styles.avatar__authorizedSmall}
              style={bgColor ? { backgroundColor: bgColor } : { backgroundColor: '#71a32d' }}
            >
              {login[0].toUpperCase()}
            </div>
          )}
        </>
      )}
    </div>
  );
};
