import React, { FC } from 'react';
import styles from './Comments.module.scss';
import CommentCard from './CommentCard/CommentCard';

export interface IComment {
  author: string;
  title: string;
  text: string;
  userId: string;
  reviewId: string;
  reviewDate: string;
  comments: [];
}
export interface IComments {
  id: number;
  entityKinopoiskId: number;
  entityJSON: IComment[];
}
const Comments: FC<IComments> = (comments) => {
  return (
    <div className={styles.comments}>
      {[...comments.entityJSON].splice(0, 2).map((comment) => (
        <CommentCard key={comment.reviewId} comment={comment} filmId={comments.entityKinopoiskId} />
      ))}
    </div>
  );
};

export default Comments;
