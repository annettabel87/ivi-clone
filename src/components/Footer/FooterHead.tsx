import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import FooterWidget from '../FooterWidget/FooterWidget';
import mailIcon from '../../assets/icon/mail.png';
import phoneIcon from '../../assets/icon/phone.png';
import styles from './Footer.module.scss';

export const FooterHead = () => {
  return (
    <div className={styles.footer__head}>
      <div className={styles.footer__column}>
        <div className={styles.footer__title}>О нас</div>
        <ul className={styles.footer__linksList}>
          <li className={styles.footer__listItem}>
            <Link href="https://corp.ivi.ru/" className={styles.footer__link}>
              О компании
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href="https://corp.ivi.ru/career/#career-vacancy-block"
              className={styles.footer__link}
            >
              Вакансии
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/pages/beta/" className={styles.footer__link}>
              Программа бета-тестирования
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/info/partners" className={styles.footer__link}>
              Информация для партнёров
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href="https://corp.ivi.ru/advertisers/?_gl=1*1jovxmj*_ga*NzQyOTcyNjUuMTY4MTI5OTIzNA..*_ga_GETQ4387MJ*MTY4MTM3OTY3My40LjEuMTY4MTM4MzcxOC40Mi4wLjA."
              className={styles.footer__link}
            >
              Размещение рекламы
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/info/agreement" className={styles.footer__link}>
              Пользовательское соглашение
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/info/confidential" className={styles.footer__link}>
              Политика конфиденциальности
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href="https://www.ivi.ru/info/goryachaya-liniya-komplaens"
              className={styles.footer__link}
            >
              Комплаенс
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__column}>
        <div className={styles.footer__title}>Разделы</div>
        <ul className={styles.footer__linksList}>
          <li className={styles.footer__listItem}>
            <Link href="/" className={styles.footer__link}>
              Мой Иви
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/new" className={styles.footer__link}>
              Что нового
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="/films" className={styles.footer__link}>
              Фильмы
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/series" className={styles.footer__link}>
              Сериалы
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/animation" className={styles.footer__link}>
              Мультфильмы
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/tvplus" className={styles.footer__link}>
              TV+
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link href="https://www.ivi.ru/goodmovies" className={styles.footer__link}>
              Что посмотреть
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href="https://www.ivi.ru/cert"
              className={`${styles.footer__link} ${styles.footer__certificateLink}`}
            >
              Активация сертификата
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__column}>
        <div className={styles.footer__title}>Служба поддержки</div>
        <div className={styles.footer__description}>
          <p className={styles.footer__text}>Мы всегда готовы вам помочь.</p>
          <p className={styles.footer__text}>Наши операторы онлайн 24/7</p>
        </div>
        <div className={styles.footer__support}>
          <Button
            border={'1px solid #1f1b2e'}
            bgColor={'#1f1b2e'}
            height={'40px'}
            radius={'8px'}
            width={'196px'}
            as={'link'}
            href="https://www.ivi.ru/profile"
            target="_blank"
            hoverBg={'#2e2844'}
          >
            Написать в чате
          </Button>
          <div className={styles.contacts__buttons}>
            <Button
              border={'1px solid #1f1b2e'}
              bgColor={'#1f1b2e'}
              height={'40px'}
              radius={'8px'}
              width={'40px'}
              as={'link'}
              href="mailto:support@ivi.ru"
              target="_blank"
              hoverBg={'#2e2844'}
            >
              <Image src={mailIcon} alt="mail" width={16} height={16} />
            </Button>
            <Button
              border={'1px solid #1f1b2e'}
              bgColor={'#1f1b2e'}
              height={'40px'}
              radius={'8px'}
              width={'40px'}
              as={'link'}
              href="mailto:support@ivi.ru"
              target="_blank"
              hoverBg={'#2e2844'}
            >
              <Image src={phoneIcon} alt="phone" width={16} height={16} />
            </Button>
          </div>
        </div>
        <div className={styles.footer__questions}>
          <Link type="tel" href="tel:88002344923" className={styles.footer_questions_link}>
            <p className={styles.footer__text_bold}>ask.ivi.ru</p>
            <p className={styles.footer__text}>Ответы на вопросы</p>
          </Link>
        </div>
      </div>
      <div className={styles.footer__column}>
        <FooterWidget />
      </div>
    </div>
  );
};
