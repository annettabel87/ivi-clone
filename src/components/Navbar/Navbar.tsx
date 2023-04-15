import React from 'react';
import Link from 'next/link';
import { navbarLinks } from '@/shared/navbarLinks/navbarLinks';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {navbarLinks.map((item) => (
          <li key={item.title} className={styles.navbar__listItem}>
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
