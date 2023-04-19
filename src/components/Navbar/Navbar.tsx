import React, { FC } from 'react';
import Link from 'next/link';
import { navbarLinks } from '@/shared/navbarLinks/navbarLinks';
import styles from './Navbar.module.scss';
import { DropdownSectionType } from '../Header/Header';

interface INavbarProps {
  setDropdownSection: (dropdownSection: DropdownSectionType) => void;
}

const Navbar: FC<INavbarProps> = ({ setDropdownSection }) => {
  const handleMouseEnter = (section: DropdownSectionType) => {
    setDropdownSection(section);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {navbarLinks.map((item) => (
          <li
            key={item.title}
            className={styles.navbar__listItem}
            onMouseEnter={() => handleMouseEnter(item.section ? item.section : '')}
          >
            <Link href={item.link} className={styles.navbar__listLink}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
