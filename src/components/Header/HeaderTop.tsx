import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import noAvatar from '../../assets/icon/noAvatar.svg';
import searchIcon from '../../assets/icon/search.svg';
import bell from '../../assets/icon/bell.svg';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';

const HeaderTop = () => {
  return (
    <div className={styles.header__content}>
      <div className={styles.header__logo}>
        <Link href={'#'}>
          <Image src={logo} alt="Логотип" priority={true} />
        </Link>
      </div>
      <div className={styles.header__menu}>
        <Navbar />
      </div>
      <div className={styles.header__wideArea}>
        <div className={styles.header__subscribeBtn}>
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
            <span className={styles.header__subscribeBtnTitle}>Смотреть 30 дней за 1 ₽</span>
          </Button>
        </div>
        <div className={styles.header__searchBtn}>
          <Button
            href={'#'}
            bgColor={'#100e19'}
            border={'none'}
            as={'link'}
            height={'40px'}
            width={'70px'}
            radius={'none'}
            target="_blank"
          >
            <div className={styles.header__searchBtnContent}>
              <Image
                src={searchIcon}
                alt="Поиск"
                width={20}
                height={20}
                className={styles.svgImage}
              />
              <span className={styles.header__searchBtnTitle}>Поиск</span>
            </div>
          </Button>
        </div>
      </div>
      <div className={styles.header__notify}>
        <Button
          href={'#'}
          bgColor={'#100e19'}
          border={'none'}
          as={'link'}
          height={'48px'}
          width={'36px'}
          radius={'8px'}
          target="_blank"
        >
          <div>
            <Image
              src={bell}
              alt="Уведомления"
              priority={true}
              width={20}
              height={20}
              className={styles.svgImage}
            />
          </div>
        </Button>
      </div>
      <div className={styles.header__avatar}>
        <Button
          href={'#'}
          bgColor={'#100e19'}
          border={'none'}
          as={'link'}
          height={'48px'}
          width={'48px'}
          radius={'8px'}
          target="_blank"
        >
          <div>
            <Image
              src={noAvatar}
              alt="Аватар"
              priority={true}
              width={20}
              height={20}
              className={styles.svgImage}
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HeaderTop;
