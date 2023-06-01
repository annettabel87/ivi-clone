import React, { Children, FC, ReactElement, ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MobileNavigationMenu.module.scss';
import arrowIcon from '../../../assets/icon/arrow-left.svg';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import { LinksList } from '@/components/LinksList/LinksList';
import { ILinks } from '@/shared/Interfaces/ILinks';

interface IMobileNavigationMenuItemProps {
  title: string;
  imgSrc?: string;

  children: ReactElement | ReactNode[];
}

export const MobileNavigationMenuItem: FC<IMobileNavigationMenuItemProps> = ({
  title,
  imgSrc,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.menuItem}>
      <div className={styles.titleBlock} onClick={() => setIsOpen((prev) => !prev)}>
        {imgSrc && (
          <Image src={imgSrc} width={20} height={20} alt={title} className={styles.svgImage} />
        )}
        <div className={styles.menuTitle}>{title}</div>
        <Image
          src={arrowIcon}
          width={16}
          height={16}
          alt={'развернуть/свернуть'}
          className={isOpen ? styles.arrowDown : styles.arrowUp}
        />
      </div>
      {isOpen && <div className={styles.dropMenu}>{children}</div>}
    </div>
  );
};
