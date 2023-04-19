import React, { FC } from 'react';
import Link from 'next/link';
import { ILinks } from '@/shared/footerLinks/footerLinks';
import styles from './LinksList.module.scss';

interface ILinksList {
  list: ILinks[];
  withDivider?: boolean;
}
export const LinksList: FC<ILinksList> = ({ list, withDivider = false }) => {
  return (
    <ul className={withDivider ? styles.linksList + ' ' + styles.leftDivider : styles.linksList}>
      {list.map((item) => (
        <li
          className={withDivider ? styles.linksList__listItem_divider : styles.linksList__listItem}
          key={item.title}
        >
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
