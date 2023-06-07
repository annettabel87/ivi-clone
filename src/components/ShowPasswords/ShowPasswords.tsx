import React from 'react';
import Image from 'next/image';
import { NO_VIEW, VIEW } from '@/shared/constants/routes';
import styles from './ShowPasswords.module.scss';

type TShowPassword = {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
};

const ShowPasswords = (props: TShowPassword) => {
  const { showPassword, setShowPassword } = props;
  return (
    <Image
      alt={'ваш пароль'}
      width={15}
      height={15}
      src={showPassword ? NO_VIEW : VIEW}
      className={styles.passwordControl}
      onClick={() => {
        setShowPassword(!showPassword);
      }}
    />
  );
};

export default ShowPasswords;
