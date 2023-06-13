import React, { FC } from 'react';
import styles from './TabBar.module.scss';
import { TabBarItem } from './TabBarItem';
import { FILMS_ROUTE, MAIN_ROUTE } from '@/shared/constants/routes';
import myIviIcon from '../../assets/icon/my-ivi.svg';
import folderVideoIcon from '../../assets/icon/folder-video.svg';
import searchIcon from '../../assets/icon/search.svg';
import tvIcon from '../../assets/icon/tv-variant.svg';
import ellipsisIcon from '../../assets/icon/ellipsis.svg';
import closeIcon from '../../assets/icon/close.svg';
import { SET_SECTION, SET_MOBILE_MENU_OPEN } from '@/store/reducers/mobileNavigationReducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';

export const TabBar: FC = () => {
  const dispatch = useAppDispatch();
  const { currentSection } = useAppSelector((state) => state.mobileNavigationReducer);

  return (
    <div className={styles.tabBar}>
      <TabBarItem
        as={'a'}
        onClick={() => {
          dispatch(SET_SECTION('Мой Иви'));
          dispatch(SET_MOBILE_MENU_OPEN(false));
        }}
        href={MAIN_ROUTE}
        icon={myIviIcon}
        title={'Мой Иви'}
        isActive={currentSection === 'Мой Иви'}
      />
      <TabBarItem
        as={'a'}
        onClick={() => {
          dispatch(SET_SECTION('Каталог'));
          dispatch(SET_MOBILE_MENU_OPEN(false));
        }}
        href={FILMS_ROUTE}
        icon={folderVideoIcon}
        title={'Каталог'}
        isActive={currentSection === 'Каталог'}
      />
      <TabBarItem
        as={'div'}
        onClick={() => {
          dispatch(SET_SECTION('Поиск'));
          dispatch(SET_MOBILE_MENU_OPEN(false));
        }}
        icon={searchIcon}
        title={'Поиск'}
        isActive={currentSection === 'Поиск'}
      />
      <TabBarItem
        as={'a'}
        onClick={() => {
          dispatch(SET_SECTION('TV+'));
          dispatch(SET_MOBILE_MENU_OPEN(false));
        }}
        href={'https://www.ivi.ru/tvplus'}
        icon={tvIcon}
        title={'TV+'}
        isActive={currentSection === 'TV+'}
      />
      {currentSection !== 'Закрыть' && (
        <TabBarItem
          as={'div'}
          onClick={() => {
            dispatch(SET_SECTION('Закрыть'));
            dispatch(SET_MOBILE_MENU_OPEN(true));
          }}
          icon={ellipsisIcon}
          title={'Еще'}
          isActive={currentSection === 'Еще'}
        />
      )}
      {currentSection === 'Закрыть' && (
        <TabBarItem
          as={'div'}
          onClick={() => {
            dispatch(SET_SECTION('Мой Иви'));
            dispatch(SET_MOBILE_MENU_OPEN(false));
          }}
          icon={closeIcon}
          title={'Закрыть'}
          isActive={currentSection === 'Закрыть'}
        />
      )}
    </div>
  );
};
