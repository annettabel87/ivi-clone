import React, { FC } from 'react';
import Image from 'next/image';
import styles from './SelectProfile.module.scss';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import plusIcon from '../../assets/icon/plus.svg';
import cabinetIcon from '../../assets/icon/cabinet.svg';
import kidsAvatar from '../../assets/image/kids.jpeg';
import { IUserData } from '@/shared/Interfaces/authInterfaces';
import { useRouter } from 'next/router';
import { ADMIN_ROUTE } from '@/shared/constants/routes';

interface ISelectProfileProps {
  userData: IUserData | null;
}

export const SelectProfile: FC<ISelectProfileProps> = ({ userData }) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.selectProfile}>
        <div className={styles.selectProfile__avatarBlock_active}>
          <UserAvatar isAuth={true} size={'normal'} login={userData?.name} />
          <div className={styles.selectProfile__avatarTitle}>{userData?.name}</div>
        </div>
        <div className={styles.selectProfile__avatarBlock}>
          <UserAvatar
            isAuth={true}
            size={'normal'}
            imgWidth={40}
            imgHeight={40}
            imgSrc={kidsAvatar}
          />
          <div className={styles.selectProfile__avatarTitle}>Дети</div>
        </div>
        <div className={styles.selectProfile__avatarBlock}>
          <div className={styles.selectProfile__addProfileImage}>
            <Image src={plusIcon} alt={'Добавить профиль'} width={20} height={20} />
          </div>
          <div className={styles.selectProfile__avatarTitle}>Новый</div>
        </div>
        {userData?.roles.includes('ADMIN') && (
          <div className={styles.selectProfile__avatarBlock}>
            <div
              className={styles.selectProfile__addProfileImage}
              onClick={() => router.push(ADMIN_ROUTE)}
            >
              <Image src={cabinetIcon} alt={'Кабинет администратора'} width={20} height={20} />
            </div>
            <div className={styles.selectProfile__avatarTitle}>Кабинет</div>
          </div>
        )}
      </div>
    </>
  );
};
