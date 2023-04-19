import React, { FC } from 'react';
import Image from 'next/image';
import styles from './HeaderProfile.module.scss';
import Button from '@/components/Button/Button';
import byuIcon from '../../../assets/icon/buy.svg';
import badgeIcon from '../../../assets/icon/badge.svg';
import viewingHistoryIcon from '../../../assets/icon/viewing-history.svg';
import diamondIcon from '../../../assets/icon/diamond.svg';
import certificateIcon from '../../../assets/icon/certificate.svg';
import TVIcon from '../../../assets/icon/tv.svg';
import cardIcon from '../../../assets/icon/card.svg';
import shareIcon from '../../../assets/icon/share.svg';
import { LinksList } from '@/components/LinksList/LinksList';
import { unauthorizedProfileLinks } from '@/shared/headerLinks/profileLinks';
import {
  PURCHASES_PROFILE_ROUTE,
  FAVORITES_PROFILE_ROUTE,
  WATCHED_PROFILE_ROUTE,
  SUBSCRIPTIONS_PROFILE_ROUTE,
  PROFILE_ROUTE,
  PAYMENT_PROFILE_ROUTE,
  REFERRAL_PROFILE_ROUTE,
} from '@/shared/constants/profileRoutes';

interface IHeaderProfileProps {
  isVisible: boolean;
}

export const HeaderProfile: FC<IHeaderProfileProps> = ({ isVisible }) => {
  return (
    <div className={isVisible ? styles.headerProfile : styles.hidden}>
      <div className={styles.headerProfile__column}>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={PURCHASES_PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={byuIcon} alt={'Покупки'} width={20} height={20} />
            <span>Покупки</span>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={FAVORITES_PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={badgeIcon} alt={'Смотреть позже'} width={20} height={20} />
            <span>Смотреть позже</span>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={WATCHED_PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={viewingHistoryIcon} alt={'История просмотров'} width={20} height={20} />
            <span>История просмотров</span>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={SUBSCRIPTIONS_PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={diamondIcon} alt={'Подписки'} width={20} height={20} />
            <span>Подписки</span>
            <div className={styles.redCircle}></div>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={certificateIcon} alt={'Активация сертификата'} width={20} height={20} />
            <span>Активация сертификата</span>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={TVIcon} alt={'Вход по коду'} width={20} height={20} />
            <span>Вход по коду</span>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={PAYMENT_PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={cardIcon} alt={'Способы оплаты'} width={20} height={20} />
            <span>Способы оплаты</span>
          </div>
        </Button>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={REFERRAL_PROFILE_ROUTE}
        >
          <div className={styles.btnContent}>
            <Image src={shareIcon} alt={'Пригласить друзей'} width={20} height={20} />
            <span>Пригласить друзей</span>
          </div>
        </Button>
      </div>
      <div className={styles.headerProfile__column}>
        <Button
          width={'100%'}
          height={'40px'}
          bgColor={'#ea003d'}
          hoverBg={'#ff0f4d'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={'#'}
        >
          <span>Войти или зарегистрироваться</span>
        </Button>
        <LinksList list={unauthorizedProfileLinks} />
      </div>
    </div>
  );
};
