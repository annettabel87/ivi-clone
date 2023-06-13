import React, { FC, useState } from 'react';
import Image from 'next/image';
import Comments from './Comments/Comments';
import { IReview } from '@/shared/Interfaces/FilmPageInterfaces';
import likeIcon from '@/assets/icon/like.svg';
import dislikeIcon from '@/assets/icon/dislike.svg';
import commentsIcon from '@/assets/icon/comments.svg';
import styles from './Review.module.scss';

const Review: FC<IReview> = (review) => {
  const [isShowFullReview, setIsShowFullReview] = useState<boolean>(false);
  const [isShowComments, setIsShowComments] = useState<boolean>(false);

  return (
    <li className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__header_about}>
          <p className={styles.review__text_grayBold}>{review.author}</p>
          <p className={styles.review__text_gray}>{review.reviewDate}</p>
        </div>
        <div className={styles.review__likesBlock}>
          <button className={styles.review__btnLike}>
            <Image src={likeIcon} width={28} height={28} alt="лайк" />
          </button>
          <span className={styles.review__text_like}>5</span>
          <button className={styles.review__btnLike}>
            <Image src={dislikeIcon} width={28} height={28} alt="дизлайк" />
          </button>
        </div>
      </div>
      <h3 className={styles.review__title}>{review.title}</h3>
      <div className={styles.review__textBlock}>
        {!isShowFullReview ? (
          <p className={styles.review__text}>{review.text.slice(0, 150)}...</p>
        ) : (
          <p className={styles.review__text}>{review.text}</p>
        )}
        <div className={styles.review__footerBtn}>
          {isShowFullReview ? (
            <button className={styles.review__btnText} onClick={() => setIsShowFullReview(false)}>
              Свернуть
            </button>
          ) : (
            <button className={styles.review__btnText} onClick={() => setIsShowFullReview(true)}>
              Развернуть
            </button>
          )}
          <button className={styles.btn__comment} onClick={() => setIsShowComments(true)}>
            <Image src={commentsIcon} alt="комментарии" width={25} height={25} />
            <p className={styles.review__text_big}>{review.comments?.length || 0}</p>
          </button>
        </div>
        {isShowComments && (
          <Comments
            comments={review.comments || []}
            hiddenComments={() => setIsShowComments(false)}
            reviewId={review.reviewId}
            lastCommentId={
              review.comments.length > 0 ? review.comments[review.comments.length - 1].commentId : 0
            }
          />
        )}
      </div>
    </li>
  );
};

export default Review;
