import React, { FC } from 'react';
import Image from 'next/image';
import styles from './HeaderSubscribe.module.scss';
import cameraIcon from '../../../assets/icon/video-camera.svg';
import folderIcon from '../../../assets/icon/folder.svg';
import muteIcon from '../../../assets/icon/mute.png';
import gadgetsIcon from '../../../assets/icon/gadgets.svg';
import downloadIcon from '../../../assets/icon/download.svg';
import Button from '@/components/Button/Button';
import { filmsPostersLinks } from '@/shared/headerLinks/postersFeedLinks';
import { PostersFeed } from '../../PostersFeed/PostersFeed';
import Link from 'next/link';

interface IHeaderSubscribeProps {
  isVisible: boolean;
}

export const HeaderSubscribe: FC<IHeaderSubscribeProps> = ({ isVisible }) => {
  return (
    <div className={isVisible ? styles.headerSubscribe : styles.hidden}>
      <div className={styles.headerSubscribe__column}>
        <div>
          <h3 className={styles.headerSubscribe__title}>Подписка Иви</h3>
          <p className={styles.headerSubscribe__text}>
            Стоимость 399 ₽ в месяц, продление автоматическое
          </p>
          <div className={styles.headerSubscribe__infoCards}>
            <div className={styles.headerSubscribe__cardItem}>
              <Image src={cameraIcon} alt={'camera'} width={20} height={20} />
              <div>Новинки сериалов и фильмов</div>
            </div>
            <div className={styles.headerSubscribe__cardItem}>
              <Image src={folderIcon} alt={'folder'} width={20} height={20} />
              <div>Еженедельное пополнение каталога фильмами и сериалами со всего мира</div>
            </div>
            <div className={styles.headerSubscribe__cardItem}>
              <Image src={muteIcon} alt={'mute'} width={20} height={20} />
              <div>Фильмы и сериалы без рекламы</div>
            </div>
            <div className={styles.headerSubscribe__cardItem}>
              <Image src={gadgetsIcon} alt={'gadgets'} width={20} height={20} />
              <div>Семейный аккаунт на 5 устройствах</div>
            </div>
            <div className={styles.headerSubscribe__cardItem}>
              <Image src={downloadIcon} alt={'download'} width={20} height={20} />
              <div>Загрузка на мобильные устройства</div>
            </div>
          </div>
          <div className={styles.headerSubscribe__bottom}>
            <Button
              width={'65.5%'}
              height={'40px'}
              bgColor={'#ea003d'}
              hoverBg={'#ff0f4d'}
              radius={'8px'}
              border={'none'}
              as={'button'}
            >
              <span className={styles.headerSubscribe__btnTitle}>Смотреть 30 дней за 1 ₽</span>
            </Button>
            <div className={styles.headerSubscribe__deactivateText}>
              Отключить можно в любой момент
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerSubscribe__column}>
        <div className={styles.headerSubscribe__widgetWrapper}>
          <div className={styles.headerSubscribe__widget}>
            <div className={styles.headerSubscribe__feeds}>
              <PostersFeed
                postersLinks={[...filmsPostersLinks.slice(0, 5)]}
                direction={'left'}
                cardWidth={200}
                cardHeight={113}
              />
              <PostersFeed
                postersLinks={[...filmsPostersLinks.slice(5, 10)]}
                direction={'right'}
                cardWidth={200}
                cardHeight={113}
              />
              <PostersFeed
                postersLinks={[...filmsPostersLinks.slice(10, 15)]}
                direction={'left'}
                cardWidth={200}
                cardHeight={113}
              />
              <PostersFeed
                postersLinks={[...filmsPostersLinks.slice(15, 20)]}
                direction={'right'}
                cardWidth={200}
                cardHeight={113}
              />
            </div>
            <div className={styles.headerSubscribe__moreLink}>
              <Link href={'https://www.ivi.ru/profile/subscriptions'}>Другие подписки</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
