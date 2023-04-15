import React from 'react';
import styles from './Header.module.scss';
import HeaderTop from './HeaderTop';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <HeaderTop />
        <HeaderDropdown />
      </div>
    </div>
  );
};

export default Header;
