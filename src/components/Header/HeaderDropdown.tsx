import React, { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderDropdownCatalog } from './HeaderDropdownCatalog/HeaderDropdownCatalog';
import { HeaderTVPlus } from './HeaderTVPlus/HeaderTVPlus';
import { DropdownSectionType } from './Header';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';
import { HeaderNotifications } from './HeaderNotifications/HeaderNotifications';

interface IHeaderDropdownProps {
  section: DropdownSectionType;
}

export const HeaderDropdown: FC<IHeaderDropdownProps> = ({ section }) => {
  return (
    <div className={section ? styles.headerDropdown : styles.hidden}>
      <HeaderDropdownCatalog isVisible={section === 'movies'} section={'movies'} />
      <HeaderDropdownCatalog isVisible={section === 'serials'} section={'serials'} />
      <HeaderDropdownCatalog isVisible={section === 'cartoons'} section={'cartoons'} />
      <HeaderTVPlus isVisible={section === 'tv+'} />
      <HeaderProfile isVisible={section === 'profile'} />
      <HeaderNotifications isVisible={section === 'notifications'} />
    </div>
  );
};
