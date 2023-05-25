import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IReviewCardProps } from '@/shared/Interfaces/FilmPageInterfaces';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import likeIcon from '@/assets/icon/like.svg';
import dislikeIcon from '@/assets/icon/dislike.svg';
import styles from './ReviewCard.module.scss';

const ReviewCard: FC<IReviewCardProps> = ({ review, filmId }) => {
  return (
    <Link href={`${FILMS_ROUTE}/${filmId}/person`} className={styles.reviewCard}>
      <p className={styles.reviewCard__text_grayBold}>{review.author}</p>
      <h3 className={styles.reviewCard__title}>{review.title}</h3>
      <p className={styles.reviewCard__text}>{review.text.slice(0, 100)}...</p>
      <div className={styles.reviewCard__footer}>
        <p className={styles.reviewCard__text_gray}>{review.reviewDate}</p>
        <div className={styles.reviewCard__likesBlock}>
          <button className={styles.reviewCard__btn}>
            <Image src={likeIcon} width={28} height={28} alt="лайк" />
          </button>
          <span className={styles.reviewCard__text_like}>5</span>
          <button className={styles.reviewCard__btn}>
            <Image src={dislikeIcon} width={28} height={28} alt="дизлайк" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
