import React from 'react';
import styles from './Footer.module.scss';
import { FooterHead } from './FooterHead';
import { FooterBody } from './FooterBody';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <FooterHead />
        <FooterBody />
      </div>
    </div>
  );
};
