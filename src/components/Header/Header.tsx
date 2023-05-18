import React, { useState } from 'react';
import styles from './Header.module.scss';
import { HeaderTop } from './HeaderTop';
import { HeaderDropdown } from './HeaderDropdown';
import { DropdownSectionType } from '@/shared/Interfaces/DropdownSectionType';

export const Header = () => {
  const [dropdownSection, setDropdownSection] = useState<DropdownSectionType>('');
  const handleMouseLeave = () => {
    // setDropdownSection('');
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
