import React, { FC } from 'react';
import Image from 'next/image';
import styles from './TabBar.module.scss';

interface ITabBarItemProps {
  as: 'a' | 'div';
  title: string;
  icon: string;
  href?: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabBarItem: FC<ITabBarItemProps> = ({
  as: Tag = 'div',
  icon,
  title,
  href,
  isActive,
  onClick,
}) => {
  return (
    <Tag className={styles.tabBarItem} {...(Tag === 'a' ? { href, onClick } : { onClick })}>
      <div className={styles.tabBarItem__glowImage} style={isActive ? { opacity: '1' } : {}}></div>
      <div className={styles.tabBarItem__icon}>
        <Image
          className={isActive ? styles.tabBarItem__iconSvg : ''}
          src={icon}
          width={20}
          height={20}
          alt={title}
        />
      </div>
      <div className={styles.tabBarItem__title} style={isActive ? { color: '#FFFFFF' } : {}}>
        {title}
      </div>
    </Tag>
  );
};
