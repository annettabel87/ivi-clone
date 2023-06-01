import React, { FC } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import { IReviews } from '@/shared/Interfaces/FilmPageInterfaces';
import { Carousel } from '../Carousel/Carousel';
import styles from './Reviews.module.scss';

const Reviews: FC<IReviews> = (reviews) => {
  return (
    <div className={styles.reviews}>
      <Carousel initialViewingItems={2}>
        {[...reviews.entityJSON].map((review) => (
          <ReviewCard key={review.reviewId} review={review} filmId={reviews.entityKinopoiskId} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
