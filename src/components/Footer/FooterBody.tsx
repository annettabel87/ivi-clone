import React from 'react';
import { Socials } from './Socials/Socials';
import { Stores } from './Stores/Stores';
import styles from './Footer.module.scss';

export const FooterBody = () => {
  return (
    <div className={styles.footer__body}>
      <div className={styles.footer__column}>
        <Stores />
        <div className={styles.copyrights}>
          <p className={styles.copyrights__text}>© 2023 ООО «Иви.ру»</p>
          <p className={styles.copyrights__text}>
            HBO ® and related service marks are the property of Home Box Office, Inc
          </p>
        </div>
      </div>
      <div className={styles.footer__column}>
        <Socials />
      </div>
    </div>
  );
};
