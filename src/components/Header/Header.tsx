import React, { useState } from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './HeaderTop';
import { HeaderDropdown } from './HeaderDropdown';

type ValueOf<T> = T[keyof T];

const DropdownSection = {
  MOVIES: 'movies',
  SERIALS: 'serials',
  CARTOONS: 'cartoons',
  TVPLUS: 'tv+',
  SUBSCRIBE: 'subscribe',
  NOTIFICATIONS: 'notifications',
  PROFILE: 'profile',
  NONE: '',
} as const;

export type DropdownSectionType = ValueOf<typeof DropdownSection>;

export const Header = () => {
  const [dropdownSection, setDropdownSection] = useState<DropdownSectionType>('');
  const handleMouseLeave = () => {
    setDropdownSection('');
  };
  return (
    <div className={styles.header__container} onMouseLeave={handleMouseLeave}>
      <HeaderTop section={dropdownSection} setDropdownSection={setDropdownSection} />
      <div className={styles.headerDropdownWrapper}>
        <HeaderDropdown section={dropdownSection} />
      </div>
    </div>
  );
};
