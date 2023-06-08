import React, { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderDropdownCatalog } from './HeaderDropdownCatalog/HeaderDropdownCatalog';
import { HeaderTVPlus } from './HeaderTVPlus/HeaderTVPlus';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';
import { HeaderNotifications } from './HeaderNotifications/HeaderNotifications';
import { DropdownSectionType } from '@/shared/Interfaces/DropdownSectionType';
import { HeaderSubscribe } from './HeaderSubscribe/HeaderSubscribe';
import { useAppSelector } from '@/store/hooks/hooks';

interface IHeaderDropdownProps {
  section: DropdownSectionType;
}

export const HeaderDropdown: FC<IHeaderDropdownProps> = ({ section }) => {
  const userData = useAppSelector((state) => state.profileReducer.user);

  return (
    <div className={section ? styles.headerDropdown : styles.hidden}>
      <HeaderDropdownCatalog isVisible={section === 'movies'} section={'movies'} />
      <HeaderDropdownCatalog isVisible={section === 'serials'} section={'serials'} />
      <HeaderDropdownCatalog isVisible={section === 'cartoons'} section={'cartoons'} />
      <HeaderTVPlus isVisible={section === 'tv+'} />
      <HeaderSubscribe isVisible={section === 'subscribe'} />
      <HeaderNotifications isVisible={section === 'notifications'} />
      <HeaderProfile isVisible={section === 'profile'} userData={userData} />
    </div>
  );
};
