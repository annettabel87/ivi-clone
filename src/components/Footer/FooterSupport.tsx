import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import mailIcon from '../../assets/icon/mail.png';
import phoneIcon from '../../assets/icon/phone.png';
import styles from './Footer.module.scss';
import { checkIsMobile } from '@/helpers/checkIsMobile';

export const FooterSupport = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(checkIsMobile());
  }, []);
  return (
    <div>
      {!isMobile && <div className={styles.footer__title}>Служба поддержки</div>}
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
            as={'button'}
            hoverBg={'#2e2844'}
            onClick={() => setShowPhoneNumber(!showPhoneNumber)}
          >
            <Image src={phoneIcon} alt="phone" width={16} height={16} />
          </Button>
          {showPhoneNumber && (
            <Link className={styles.contacts__phone_block} type="tel" href="tel:88002344923">
              <p className={styles.footer__title}>8 800 234-49-23</p>
              <p className={styles.footer__text}>Бесплатно по России</p>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.footer__questions}>
        <Link href="https://ask.ivi.ru/" className={styles.footer_questions_link}>
          <p className={styles.footer__text_bold}>ask.ivi.ru</p>
          <p className={styles.footer__text}>Ответы на вопросы</p>
        </Link>
      </div>
    </div>
  );
};
