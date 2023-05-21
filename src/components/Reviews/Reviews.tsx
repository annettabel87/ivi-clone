import React, { FC } from 'react';
import CommentCard from './ReviewCard/ReviewCard';
import { IReviews } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './Reviews.module.scss';

const Reviews: FC<IReviews> = (comments) => {
  return (
    <div className={styles.comments}>
      {[...comments.entityJSON].splice(0, 2).map((comment) => (
        <CommentCard key={comment.reviewId} review={comment} filmId={comments.entityKinopoiskId} />
      ))}
    </div>
  );
};

export default Reviews;
