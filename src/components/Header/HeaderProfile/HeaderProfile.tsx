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
import {
  unauthorizedProfileLinks,
  authorizedProfileLinks,
} from '@/shared/headerLinks/profileLinks';
import { SelectProfile } from '@/components/SelectProfile/SelectProfile';

interface IHeaderProfileProps {
  isVisible: boolean;
  isAuth?: boolean; // Временно задаю, что приходит через пропсы
}

export const HeaderProfile: FC<IHeaderProfileProps> = ({ isVisible, isAuth = false }) => {
  return (
    <div className={isVisible ? styles.headerProfile : styles.hidden}>
      <div className={styles.headerProfile__mainContent}>
        <Button
          width={'22.3%'}
          height={'108px'}
          bgColor={'#302a44'}
          hoverBg={'#3a3352'}
          radius={'8px'}
          border={'none'}
          as={'link'}
          href={'https://www.ivi.ru/profile/purchases'}
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
          href={'https://www.ivi.ru/profile/favorites'}
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
          href={'https://www.ivi.ru/profile/watched'}
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
          href={'https://www.ivi.ru/profile/subscriptions'}
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
          href={'#'}
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
          href={'#'}
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
          href={'https://www.ivi.ru/profile/cards'}
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
          href={'https://www.ivi.ru/profile/referral'}
        >
          <div className={styles.btnContent}>
            <Image src={shareIcon} alt={'Пригласить друзей'} width={20} height={20} />
            <span>Пригласить друзей</span>
          </div>
        </Button>
      </div>
      <div className={styles.headerProfile__sideContent}>
        {!isAuth ? (
          <>
            <Button
              width={'100%'}
              height={'40px'}
              bgColor={'#ea003d'}
              hoverBg={'#ff0f4d'}
              radius={'8px'}
              border={'none'}
              as={'link'}
              href={'#'}
              target={'_self'}
            >
              <span>Войти или зарегистрироваться</span>
            </Button>
            <LinksList list={unauthorizedProfileLinks} />
          </>
        ) : (
          <>
            <div className={styles.headerProfile__profileTitle}>Выбор профиля</div>
            <SelectProfile />
            <LinksList list={authorizedProfileLinks} />
          </>
        )}
      </div>
    </div>
  );
};
