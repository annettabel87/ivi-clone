import React from 'react';
import { aboutLinks, sectionsLinks } from '@/shared/footerLinks/footerLinks';
import { LinksList } from '../LinksList/LinksList';
import FooterWidget from '../FooterWidget/FooterWidget';
import styles from './Footer.module.scss';
import { FooterSupport } from './FooterSupport';

export const FooterHead = () => {
  return (
    <div className={styles.footer__head}>
      <div className={styles.footer__column}>
        <div className={styles.footer__title}>О нас</div>
        <LinksList list={aboutLinks} />
      </div>
      <div className={styles.footer__column}>
        <div className={styles.footer__title}>Разделы</div>
        <LinksList list={sectionsLinks} />
      </div>
      <div className={styles.footer__column}>
        <FooterSupport />
      </div>
      <div className={styles.footer__column}>
        <FooterWidget />
      </div>
    </div>
  );
};
