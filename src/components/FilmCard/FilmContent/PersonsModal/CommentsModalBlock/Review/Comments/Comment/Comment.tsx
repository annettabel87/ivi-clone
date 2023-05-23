import { FC } from 'react';
import { IComment } from '@/components/Reviews/Reviews';
import styles from './Comment.module.scss';

const Comment: FC<IComment> = (comment) => {
  return (
    <li className={styles.comment}>
      <div className={styles.comment__icon}>{comment.commentAuthor[0]}</div>
      <div className={styles.comment__header}>
        <div className={styles.comment__header_about}>
          <p className={styles.comment__text_white}>{comment.commentAuthor}</p>
          <p className={styles.comment__text_gray}>{comment.commentDate}</p>
        </div>
      </div>
      <div className={styles.comment__content}>
        <p className={styles.comment__text}>{comment.commentText}</p>
      </div>
    </li>
  );
};

export default Comment;
