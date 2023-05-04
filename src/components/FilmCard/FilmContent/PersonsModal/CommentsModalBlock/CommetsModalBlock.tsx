import { IComments } from '@/components/Comments/Comments';
import React, { FC, useState } from 'react';
import Button from '@/components/Button/Button';
import Comment from './Comment/Comment';
import styles from './CommentsModalBlock.module.scss';
import CommentForm from './CommentForm/CommentForm';

const CommentsModalBlock: FC<IComments> = (comments) => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  return (
    <div className={styles.comments}>
      {isShowForm ? (
        <CommentForm onClose={() => setIsShowForm(false)} />
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
          Написать комментарий
        </Button>
      )}

      <ul className={styles.comments__list}>
        {comments.entityJSON.map((comment) => {
          return <Comment key={comment.reviewId} {...comment} />;
        })}
      </ul>
    </div>
  );
};

export default CommentsModalBlock;
