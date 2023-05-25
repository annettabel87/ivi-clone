import React, { FC, useState } from 'react';
import styles from './TabBar.module.scss';
import { TabBarItem } from './TabBarItem';
import { FILMS_ROUTE, MAIN_ROUTE } from '@/shared/constants/routes';
import myIviIcon from '../../assets/icon/my-ivi.svg';
import folderVideoIcon from '../../assets/icon/folder-video.svg';
import searchIcon from '../../assets/icon/search.svg';
import tvIcon from '../../assets/icon/tv-variant.svg';
import ellipsisIcon from '../../assets/icon/ellipsis.svg';
import closeIcon from '../../assets/icon/close.svg';

export const TabBar: FC = () => {
  const [activeItem, setActiveItem] = useState<
    'Мой Иви' | 'Каталог' | 'Поиск' | 'TV+' | 'Еще' | 'Закрыть'
  >('Закрыть');
  return (
    <div className={styles.tabBar}>
      <TabBarItem
        as={'a'}
        onClick={() => {
          setActiveItem('Мой Иви');
        }}
        href={MAIN_ROUTE}
        icon={myIviIcon}
        title={'Мой Иви'}
        isActive={activeItem === 'Мой Иви'}
      />
      <TabBarItem
        as={'a'}
        onClick={() => {
          setActiveItem('Каталог');
        }}
        href={FILMS_ROUTE}
        icon={folderVideoIcon}
        title={'Каталог'}
        isActive={activeItem === 'Каталог'}
      />
      <TabBarItem
        as={'div'}
        onClick={() => {
          setActiveItem('Поиск');
        }}
        icon={searchIcon}
        title={'Поиск'}
        isActive={activeItem === 'Поиск'}
      />
      <TabBarItem
        as={'a'}
        onClick={() => {
          setActiveItem('TV+');
        }}
        href={'https://www.ivi.ru/tvplus'}
        icon={tvIcon}
        title={'TV+'}
        isActive={activeItem === 'TV+'}
      />
      {activeItem !== 'Закрыть' && (
        <TabBarItem
          as={'div'}
          onClick={() => {
            setActiveItem('Закрыть');
          }}
          icon={ellipsisIcon}
          title={'Еще'}
          isActive={activeItem === 'Еще'}
        />
      )}
      {activeItem === 'Закрыть' && (
        <TabBarItem
          as={'div'}
          onClick={() => {
            setActiveItem('Мой Иви');
          }}
          icon={closeIcon}
          title={'Закрыть'}
          isActive={activeItem === 'Закрыть'}
        />
      )}
    </div>
  );
};
