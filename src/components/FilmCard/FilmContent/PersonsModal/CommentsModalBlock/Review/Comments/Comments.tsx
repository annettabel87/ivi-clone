import { FC } from 'react';
import Image from 'next/image';
import Comment from './Comment/Comment';
import { ICommentProps } from '@/shared/Interfaces/FilmPageInterfaces';
import CommentForm from './CommentForm/CommentForm';
import hiddenIcon from '../../../../../../../assets/icon/arrow-left-gray.svg';
import styles from './Comments.module.scss';

const Comments: FC<ICommentProps> = ({ comments, hiddenComments }) => {
  return (
    <div className={styles.comments}>
      <div className={styles.comments__header}>
        <p className={styles.comments__header_text}>Комментарии ({comments.length})</p>
        <button className={styles.comments__hidden_btn} onClick={hiddenComments}>
          <Image
            src={hiddenIcon}
            alt="свернуть"
            width={20}
            height={20}
            className={styles.comments__hidden_img}
          />
        </button>
      </div>
      <CommentForm />
      <ul className={styles.comments__content}>
        {comments.map((comment) => (
          <Comment {...comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
