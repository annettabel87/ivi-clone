import { FC } from 'react';
import { IComment } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './Comment.module.scss';

const Comment: FC<IComment> = (comment) => {
  return (
    <li className={styles.comment}>
      <div className={styles.comment__icon}>{comment.author[0]}</div>
      <div className={styles.comment__header}>
        <div className={styles.comment__header_about}>
          <p className={styles.comment__text_white}>{comment.author}</p>
          <p className={styles.comment__text_gray}>{comment.commentDate}</p>
        </div>
      </div>
      <div className={styles.comment__content}>
        <p className={styles.comment__text}>{comment.text}</p>
      </div>
    </li>
  );
};

export default Comment;
