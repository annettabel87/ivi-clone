import React, { FC } from 'react';
import styles from './Reviews.module.scss';
import CommentCard from './ReviewCard/ReviewCard';

export interface IComment {
  id: number;
  commentAuthor: string;
  commentText: string;
  commentDate: string;
}
export interface IReview {
  author: string;
  title: string;
  text: string;
  userId: string;
  reviewId: string;
  reviewDate: string;
  comments: IComment[];
}
export interface IReviews {
  id: number;
  entityKinopoiskId: number;
  entityJSON: IReview[];
}
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
