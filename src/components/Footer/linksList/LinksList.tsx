import React, { FC } from 'react';
import Link from 'next/link';
import { IFooterLinks } from '@/shared/footerLinks/footerLinks';
import styles from './LinksList.module.scss';

interface ILinksList {
  list: IFooterLinks[];
}
export const LinksList: FC<ILinksList> = ({ list }) => {
  return (
    <ul className={styles.linksList}>
      {list.map((item) => (
        <li className={styles.linksList__listItem} key={item.title}>
          <Link
            href={item.link}
            className={`${styles.linksList__link} ${
              item.certificate === true ? styles.linksList__certificateLink : ''
            }`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
