import Button from '@/components/Button/Button';
import React, { FC } from 'react';
import { IRatingWidgetProps } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './RatingWidget.module.scss';

const RatingWidget: FC<IRatingWidgetProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__column}>
        <div className={styles.rating__img}>{(+rating.kinopoisk).toFixed(1)}</div>
        <div className={styles.rating__description}>
          <p className={styles.rating__text_white}>Рейтинг Иви</p>
          <p className={styles.rating__text}>Интересный сюжет</p>
          <p className={styles.rating__text_small}>{rating.kinopoiskCount}</p>
        </div>
      </div>
      <Button
        border={'1px solid rgba(255,255,255,0.32)'}
        bgColor={'transparent'}
        height={'24px'}
        radius={'6px'}
        width={'72px'}
        as={'button'}
        hoverBorder={`1px solid #fff`}
      >
        Оценить
      </Button>
    </div>
  );
};

RatingWidget.propTypes = {};

export default RatingWidget;
