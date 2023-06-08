import React, { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import searchIcon from '../../assets/icon/search.svg';
import bell from '../../assets/icon/bell_01.svg';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import { PROFILE_ROUTE } from '@/shared/constants/routes';
import { DropdownSectionType } from '@/shared/Interfaces/DropdownSectionType';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { useAppSelector } from '@/store/hooks/hooks';

interface IHeaderTopProps {
  section: DropdownSectionType;
  setDropdownSection: (dropdownSection: DropdownSectionType) => void;
}
export const HeaderTop: FC<IHeaderTopProps> = ({ section, setDropdownSection }) => {
  const handleMouseEnter = (section: DropdownSectionType) => {
    setDropdownSection(section);
  };
  const userData = useAppSelector((state) => state.profileReducer.user);

  return (
    <div className={section ? styles.headerTop__content_openSection : styles.headerTop__content}>
      <div className={styles.headerTop__logo}>
        <Link href={'/'}>
          <Image src={logo} alt="Логотип" />
        </Link>
      </div>
      <div className={styles.headerTop__menu}>
        <Navbar setDropdownSection={setDropdownSection} />
      </div>
      <div className={styles.headerTop__wideArea}>
        <div
          className={styles.headerTop__subscribeBtn}
          onMouseEnter={() => handleMouseEnter('subscribe')}
        >
          <Button
            width={'182px'}
            height={'32px'}
            bgColor={'#ea003d'}
            hoverBg={'#ff0f4d'}
            radius={'8px'}
            border={'none'}
            as={'link'}
            href={'https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fprofile'}
          >
            <span className={styles.headerTop__subscribeBtnTitle}>Смотреть 30 дней за 1 ₽</span>
          </Button>
        </div>
        <div className={styles.headerTop__searchBtn} onMouseEnter={() => handleMouseEnter('')}>
          <Button
            bgColor={'rgba(0, 0, 0, 0)'}
            border={'none'}
            as={'link'}
            href={'#'}
            target={'_self'}
            height={'40px'}
            width={'70px'}
            radius={'none'}
          >
            <div className={styles.headerTop__searchBtnContent}>
              <Image
                src={searchIcon}
                alt="Поиск"
                width={20}
                height={20}
                className={styles.svgImage}
              />
              <span className={styles.headerTop__searchBtnTitle}>Поиск</span>
            </div>
          </Button>
        </div>
      </div>
      <div
        className={styles.headerTop__notify}
        onMouseEnter={() => handleMouseEnter('notifications')}
      >
        <Button
          href={'https://www.ivi.ru/profile/pull_notifications'}
          bgColor={'rgba(0, 0, 0, 0)'}
          border={'none'}
          as={'link'}
          height={'48px'}
          width={'36px'}
          radius={'8px'}
        >
          <div>
            <Image
              src={bell}
              alt="Уведомления"
              width={20}
              height={20}
              className={styles.svgImage}
            />
          </div>
        </Button>
      </div>
      <div className={styles.headerTop__avatar} onMouseEnter={() => handleMouseEnter('profile')}>
        <Button
          bgColor={'rgba(0, 0, 0, 0)'}
          border={'none'}
          as={'link'}
          href={PROFILE_ROUTE}
          target={'_self'}
          height={'48px'}
          width={'48px'}
          radius={'8px'}
        >
          <UserAvatar
            isAuth={!!userData}
            login={!!userData ? userData.name : 'UserLogin'}
            size={'normal'}
          />
        </Button>
      </div>
    </div>
  );
};
