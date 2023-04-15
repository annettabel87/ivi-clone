import React from 'react';
import Image from 'next/image';
import { socialsData } from '../../../shared/socials/socialsData';
import Button from '@/components/Button/Button';
import styles from './Socials.module.scss';

export const Socials = () => {
  return (
    <div className={styles.socials}>
      {socialsData.map((data) => (
        <Button
          key={data.id}
          border={'1px solid #1f1b2e'}
          bgColor={'#1f1b2e'}
          height={'40px'}
          radius={'20px'}
          width={'40px'}
          as={'link'}
          href={data.link}
          target="_blank"
          hoverBg={'#2e2844'}
        >
          <Image src={data.iconUrl} alt={data.id} width={16} height={16} />
        </Button>
      ))}
    </div>
  );
};