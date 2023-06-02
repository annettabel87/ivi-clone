import React from 'react';
import { Socials } from './socials/Socials';
import { Stores } from './Stores/Stores';
import styles from './Footer.module.scss';
import { FooterCopyrights } from './FooterCopyrights';

export const FooterBody = () => {
  return (
    <div className={styles.footer__body}>
      <div className={styles.footer__column}>
        <Stores />
        <FooterCopyrights />
      </div>
      <div className={styles.footer__column}>
        <Socials />
      </div>
    </div>
  );
};
