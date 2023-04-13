import React from 'react';
import styles from './Footer.module.scss';
import { FooterHead } from './FooterHead';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <FooterHead />
      </div>
    </div>
  );
};
