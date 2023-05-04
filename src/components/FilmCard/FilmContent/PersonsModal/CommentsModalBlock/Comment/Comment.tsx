import { IComment } from '@/components/Comments/Comments';
import React, { FC, useState } from 'react';
import likeIcon from '@/assets/icon/like.svg';
import dislikeIcon from '@/assets/icon/dislike.svg';
import Image from 'next/image';
import styles from './Comment.module.scss';

const Comment: FC<IComment> = (comment) => {
  const [isShowFullComment, setIsShowFullComment] = useState<boolean>(false);

  return (
    <li className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles.comment__header_about}>
          <p className={styles.comment__text_grayBold}>{comment.author}</p>
          <p className={styles.comment__text_gray}>{comment.reviewDate}</p>
        </div>
        <div className={styles.comment__likesBlock}>
          <button className={styles.comment__btnLike}>
            <Image src={likeIcon} width={28} height={28} alt="лайк" />
          </button>
          <span className={styles.comment__text_like}>5</span>
          <button className={styles.comment__btnLike}>
            <Image src={dislikeIcon} width={28} height={28} alt="дизлайк" />
          </button>
        </div>
      </div>
      <h3 className={styles.comment__title}>{comment.title}</h3>
      <div className={styles.comment__textBlock}>
        {!isShowFullComment ? (
          <p className={styles.comment__text}>{comment.text.slice(0, 150)}...</p>
        ) : (
          <p className={styles.comment__text}>{comment.text}</p>
        )}
        {isShowFullComment ? (
          <button className={styles.comment__btnText} onClick={() => setIsShowFullComment(false)}>
            Свернуть
          </button>
        ) : (
          <button className={styles.comment__btnText} onClick={() => setIsShowFullComment(true)}>
            Развернуть
          </button>
        )}
      </div>
    </li>
  );
};

export default Comment;
