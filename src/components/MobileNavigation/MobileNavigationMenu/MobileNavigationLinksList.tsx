import React, { FC } from 'react';
import styles from './MobileNavigationMenu.module.scss';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import Link from 'next/link';
import { LinksList } from '@/components/LinksList/LinksList';
import { ILinks } from '@/shared/Interfaces/ILinks';

interface IMobileNavigationLinksListProps {
  title: string;
  genresLinks: ILinks[];
  countriesLinks: ILinks[];
  yearsLinks: ILinks[];
  additionalLinks: ILinks[];
}

export const MobileNavigationLinksList: FC<IMobileNavigationLinksListProps> = ({
  title,
  genresLinks,
  countriesLinks,
  yearsLinks,
  additionalLinks,
}) => {
  return (
    <>
      <Link href={FILMS_ROUTE} className={styles.sectionLink}>
        Все {title.toLowerCase()}
      </Link>
      <div className={styles.menuTitle}>Жанры</div>
      <LinksList list={genresLinks} />
      <div className={styles.menuTitle}>Страны</div>
      <LinksList list={countriesLinks} />
      <div className={styles.menuTitle}>Годы</div>
      <LinksList list={yearsLinks} />
      <div className={styles.menuDivider}></div>
      <LinksList list={additionalLinks} />
    </>
  );
};
