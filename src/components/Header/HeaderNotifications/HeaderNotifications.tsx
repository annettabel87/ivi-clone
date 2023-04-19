import React, { FC } from 'react';
import Image from 'next/image';
import styles from './HeaderNotifications.module.scss';
import bellIcon from '../../../assets/icon/bell_02.svg';

interface IHeaderNotificationsProps {
  isVisible: boolean;
}

export const HeaderNotifications: FC<IHeaderNotificationsProps> = ({ isVisible }) => {
  return (
    <div className={isVisible ? styles.headerEmptyNotifications : styles.hidden}>
      <Image src={bellIcon} alt={'Уведомления'} width={64} height={64} />
      <div>Здесь появляются только важные сообщения</div>
    </div>
  );
};
