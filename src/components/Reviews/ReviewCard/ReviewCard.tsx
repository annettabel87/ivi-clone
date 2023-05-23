import React, { FC } from 'react';
import { IReviewCardProps } from '@/shared/Interfaces/FilmPageInterfaces';
import { FILMS_ROUTE } from '@/shared/constants/routes';
import Link from 'next/link';
import Image from 'next/image';
import likeIcon from '@/assets/icon/like.svg';
import dislikeIcon from '@/assets/icon/dislike.svg';
import styles from './ReviewCard.module.scss';

const ReviewCard: FC<IReviewCardProps> = ({ review, filmId }) => {
  return (
    <Link href={`${FILMS_ROUTE}/${filmId}/person`} className={styles.commentCard}>
      <p className={styles.commentCard__text_grayBold}>{review.author}</p>
      <h3 className={styles.commentCard__title}>{review.title}</h3>
      <p className={styles.commentCard__text}>{review.text.slice(0, 200)}...</p>
      <div className={styles.commentCard__footer}>
        <p className={styles.commentCard__text_gray}>{review.reviewDate}</p>
        <div className={styles.commentCard__likesBlock}>
          <button className={styles.commentCard__btn}>
            <Image src={likeIcon} width={28} height={28} alt="лайк" />
          </button>
          <span className={styles.commentCard__text_like}>5</span>
          <button className={styles.commentCard__btn}>
            <Image src={dislikeIcon} width={28} height={28} alt="дизлайк" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
