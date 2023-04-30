import React, { FC } from 'react';
import { IComment } from '../Comments';
import styles from './CommentCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import likeIcon from '@/assets/icon/like.svg';
import dislikeIcon from '@/assets/icon/dislike.svg';

export interface ICommentCardProps {
  comment: IComment;
  filmId: number;
}
const CommentCard: FC<ICommentCardProps> = ({ comment, filmId }) => {
  return (
    <Link href={`/film/${filmId}/person`} className={styles.commentCard}>
      <p className={styles.commentCard__text_grayBold}>{comment.author}</p>
      <h3 className={styles.commentCard__title}>{comment.title}</h3>
      <p className={styles.commentCard__text}>{comment.text.slice(0, 200)}...</p>
      <div className={styles.commentCard__footer}>
        <p className={styles.commentCard__text_gray}>{comment.reviewDate}</p>
        <div className={styles.commentCard__likesBlock}>
          <button className={styles.commentCard__btn}>
            <Image src={likeIcon} width={28} height={28} alt="лайк" />
          </button>
          <span className={styles.commentCard__text_like}>5</span>
          <button className={styles.commentCard__btn}>
            <Image src={dislikeIcon} width={28} height={28} alt="дизлайк" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CommentCard;
