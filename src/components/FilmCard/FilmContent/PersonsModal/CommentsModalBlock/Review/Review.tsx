import { IReview } from '@/components/Reviews/Reviews';
import React, { FC, useState } from 'react';
import likeIcon from '@/assets/icon/like.svg';
import dislikeIcon from '@/assets/icon/dislike.svg';
import Image from 'next/image';
import styles from './Review.module.scss';

const Review: FC<IReview> = (review) => {
  const [isShowFullComment, setIsShowFullComment] = useState<boolean>(false);

  return (
    <li className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles.comment__header_about}>
          <p className={styles.comment__text_grayBold}>{review.author}</p>
          <p className={styles.comment__text_gray}>{review.reviewDate}</p>
        </div>
        <div className={styles.comment__likesBlock}>
          <button className={styles.comment__btnLike}>
            <Image src={likeIcon} width={28} height={28} alt="лайк" />
          </button>
          <span className={styles.comment__text_like}>5</span>
          <button className={styles.comment__btnLike}>
            <Image src={dislikeIcon} width={28} height={28} alt="дизлайк" />
          </button>
        </div>
      </div>
      <h3 className={styles.comment__title}>{review.title}</h3>
      <div className={styles.comment__textBlock}>
        {!isShowFullComment ? (
          <p className={styles.comment__text}>{review.text.slice(0, 150)}...</p>
        ) : (
          <p className={styles.comment__text}>{review.text}</p>
        )}
        {isShowFullComment ? (
          <button className={styles.comment__btnText} onClick={() => setIsShowFullComment(false)}>
            Свернуть
          </button>
        ) : (
          <button className={styles.comment__btnText} onClick={() => setIsShowFullComment(true)}>
            Развернуть
          </button>
        )}
      </div>
    </li>
  );
};

export default Review;
