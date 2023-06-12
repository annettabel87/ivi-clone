import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MobileNavigationMenu.module.scss';
import { MobileNavigationMenuItem } from './MobileNavigationMenuItem';
import { MAIN_ROUTE } from '@/shared/constants/routes';
import { LinksList } from '@/components/LinksList/LinksList';
import * as filmsLinks from '@/shared/headerLinks/filmsLinks';
import * as serialsLinks from '@/shared/headerLinks/serialsLinks';
import * as cartoonsLinks from '@/shared/headerLinks/cartoonsLinks';
import { MobileNavigationLinksList } from './MobileNavigationLinksList';
import { MobileTVPlus } from './MobileTVPlus';
import { aboutLinks } from '@/shared/footerLinks/footerLinks';
import { MobileStores } from './MobileStores/MobileStores';
import { FooterSupport } from '@/components/Footer/FooterSupport';
import { Socials } from '@/components/Footer/socials/Socials';
import { FooterCopyrights } from '@/components/Footer/FooterCopyrights';
import noAvatar from '../../../assets/icon/noAvatar.svg';
import bellIcon from '../../../assets/icon/bell_01.svg';
import cameraIcon from '../../../assets/icon/video-camera.svg';
import folderIcon from '../../../assets/icon/folder-video.svg';
import trainIcon from '../../../assets/icon/steam-train.svg';
import tvIcon from '../../../assets/icon/tv-variant.svg';
import oldTvIcon from '../../../assets/icon/tv.svg';
import aboutIcon from '../../../assets/icon/about.svg';
import messageIcon from '../../../assets/icon/message.svg';
import { Divider } from '@/components/Divider/Divider';
import { UserAvatar } from '../../UserAvatar/UserAvatar';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { cancel } from '@/store/reducers/profileReducer';

export const MobileNavigationMenu = () => {
  const userData = useAppSelector((state) => state.profileReducer.user);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.menu}>
      {!!userData ? (
        <div className={styles.titleBlock}>
          <UserAvatar isAuth={true} size={'small'} login={userData.name} />
          <div className={styles.menuTitle}>{userData.name}</div>
        </div>
      ) : (
        <Link href={MAIN_ROUTE + 'auth'} className={styles.titleBlock}>
          <Image
            src={noAvatar}
            width={20}
            height={20}
            alt={'Профиль'}
            className={styles.svgImage}
          />
          <div className={styles.menuTitle}>Профиль</div>
        </Link>
      )}
      <Link href={'https://www.ivi.ru/profile/pull_notifications'} className={styles.titleBlock}>
        <Image
          src={bellIcon}
          width={20}
          height={20}
          alt={'Уведомления'}
          className={styles.svgImage}
        />
        <div className={styles.menuTitle}>Уведомления</div>
      </Link>
      <Link href={MAIN_ROUTE} className={styles.titleBlock}>
        <div className={styles.menuTitle}>Мой Иви</div>
      </Link>
      <Link href={'https://www.ivi.ru/new'} className={styles.titleBlock}>
        <div className={styles.menuTitle}>Что нового</div>
      </Link>
      <MobileNavigationMenuItem title={'Фильмы'} imgSrc={cameraIcon}>
        <MobileNavigationLinksList
          title={'Фильмы'}
          genresLinks={filmsLinks.filmsGenresLinks}
          countriesLinks={filmsLinks.filmsByCountriesLinks}
          yearsLinks={filmsLinks.filmsByYearLinks}
          additionalLinks={filmsLinks.filmsAdditionalLinks}
        />
      </MobileNavigationMenuItem>
      <MobileNavigationMenuItem title={'Сериалы'} imgSrc={folderIcon}>
        <MobileNavigationLinksList
          title={'Сериалы'}
          genresLinks={serialsLinks.serialsGenresLinks}
          countriesLinks={serialsLinks.serialsByCountriesLinks}
          yearsLinks={serialsLinks.serialsByYearLinks}
          additionalLinks={serialsLinks.serialsAdditionalLinks}
        />
      </MobileNavigationMenuItem>
      <MobileNavigationMenuItem title={'Мультфильмы'} imgSrc={trainIcon}>
        <MobileNavigationLinksList
          title={'Мультфильмы'}
          genresLinks={cartoonsLinks.cartoonsGenresLinks}
          countriesLinks={cartoonsLinks.cartoonsByCountriesLinks}
          yearsLinks={cartoonsLinks.cartoonsByYearLinks}
          additionalLinks={cartoonsLinks.cartoonsAdditionalLinks}
        />
      </MobileNavigationMenuItem>
      <MobileNavigationMenuItem title={'TV+'} imgSrc={tvIcon}>
        <MobileTVPlus />
      </MobileNavigationMenuItem>
      <Link href={'https://www.ivi.ru/goodmovies'} className={styles.titleBlock}>
        <div className={styles.menuTitle}>Что посмотреть</div>
      </Link>
      <Divider />
      <Link
        href={
          'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'
        }
        className={styles.titleBlock}
      >
        <div className={styles.menuTitle}>Иви.Рейтинг фильмы</div>
      </Link>
      <Link
        href={
          'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'
        }
        className={styles.titleBlock}
      >
        <div className={styles.menuTitle}>Иви.Рейтинг сериалы</div>
      </Link>
      <Divider />
      <MobileNavigationMenuItem title={'О нас'} imgSrc={aboutIcon}>
        <LinksList list={aboutLinks} />
      </MobileNavigationMenuItem>
      <Link href={'https://www.ivi.ru/code'} className={styles.titleBlock}>
        <Image
          src={oldTvIcon}
          width={20}
          height={20}
          alt={'Уведомления'}
          className={styles.svgImage}
        />
        <div className={styles.menuTitle}>Вход по коду</div>
      </Link>
      {!!userData && (
        <div className={styles.menuTitle} onClick={() => dispatch(cancel())}>
          Выйти из Иви
        </div>
      )}
      <MobileStores />
      <Divider />
      <MobileNavigationMenuItem title={'Служба поддержки'} imgSrc={messageIcon}>
        <FooterSupport />
      </MobileNavigationMenuItem>
      <Divider />
      <Socials />
      <FooterCopyrights />
    </div>
  );
};