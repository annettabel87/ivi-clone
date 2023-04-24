import React from 'react';
import Image from 'next/image';
import styles from './SelectProfile.module.scss';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import plusIcon from '../../assets/icon/plus.svg';

export const SelectProfile = () => {
  return (
    <>
      <div className={styles.selectProfile}>
        <div className={styles.selectProfile__avatarBlock_active}>
          <UserAvatar isAuth={true} size={'normal'} />
          <div className={styles.selectProfile__avatarTitle}>UserLogin</div>
        </div>
        <div className={styles.selectProfile__avatarBlock}>
          <UserAvatar
            isAuth={true}
            size={'normal'}
            imgWidth={40}
            imgHeight={40}
            imgSrc={
              'https://gambit-parent.dfs.ivi.ru/static/23.04.05/images/_main/start-select-profile/kids.png?1'
            }
          />
          <div className={styles.selectProfile__avatarTitle}>Дети</div>
        </div>
        <div className={styles.selectProfile__avatarBlock}>
          <div className={styles.selectProfile__addProfileImage}>
            <Image src={plusIcon} alt={'Добавить профиль'} width={20} height={20} />
          </div>
          <div className={styles.selectProfile__avatarTitle}>Новый</div>
        </div>
      </div>
    </>
  );
};
