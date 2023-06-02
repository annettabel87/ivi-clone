import React from 'react';
import styles from './Footer.module.scss';

export const FooterCopyrights = () => {
  return (
    <div className={styles.copyrights}>
      <p className={styles.copyrights__text}>© 2023 ООО «Иви.ру»</p>
      <p className={styles.copyrights__text}>
        HBO ® and related service marks are the property of Home Box Office, Inc
      </p>
    </div>
  );
};
