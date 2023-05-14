import { IReviews } from '@/components/Reviews/Reviews';
import React, { FC, useState } from 'react';
import Button from '@/components/Button/Button';
import Review from './Review/Review';
import styles from './ReviewsModalBlock.module.scss';
import ReviewForm from './ReviewForm/ReviewForm';

const ReviewsModalBlock: FC<IReviews> = (reviews) => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  return (
    <div className={styles.comments}>
      {isShowForm ? (
        <ReviewForm onClose={() => setIsShowForm(false)} />
      ) : (
        <Button
          border={'1px solid rgba(255,255,255,0.32)'}
          bgColor={'transparent'}
          height={'40px'}
          radius={'8px'}
          width={'100%'}
          as={'button'}
          hoverBorder={'1px solid #fff'}
          onClick={() => setIsShowForm(true)}
        >
          Написать рецензию
        </Button>
      )}

      <ul className={styles.comments__list}>
        {reviews.entityJSON.map((review) => {
          return <Review key={review.reviewId} {...review} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewsModalBlock;
