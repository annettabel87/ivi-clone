import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import userIcon from '@/assets/icon/user.svg';
import { reviewApi } from '@/api/reviewApi';
import { routingKeys } from '@/shared/constants/routingKeys';
import { useAppSelector } from '@/store/hooks/hooks';
import styles from './CommentForm.module.scss';
import { API_IVI_APP } from '@/shared/constants/api';
import axios from 'axios';

const MIN_LENGTH_TEXT = 10;

type FormValues = {
  comment: string;
};

export interface ICommentFormProps {
  reviewId: number;
  lastCommentId: number;
}

const CommentForm: FC<ICommentFormProps> = ({ reviewId, lastCommentId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    watch,
    setError,
  } = useForm<FormValues>({ mode: 'onChange' });

  const [textLength, setTextLength] = useState<number>(1);
  const { user } = useAppSelector((state) => state.profileReducer);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === 'change') {
        setTextLength(value.comment ? value.comment.length : 0);
      }
      return () => subscription.unsubscribe();
    });
  }, [watch, textLength, setTextLength]);

  const onSubmit = handleSubmit(async (data: FormValues) => {
    console.log(data);
    const user = {
      name: 'Anna',
      id: 1209,
    };
    if (user) {
      const comment = {
        routingKey: routingKeys.POST_COMMENT,
        reviewId: reviewId,
        comments: [
          {
            commentId: lastCommentId !== 0 ? lastCommentId++ : 1,
            author: user?.name,
            text: data.comment,
            commentDate: new Date().toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
          },
        ],
      };
      console.log(comment);
      reviewApi.addComment(comment);
      reset();
    } else {
      setError('comment', { message: 'авторизуйтесь' });
    }
  });

  return (
    <div className={styles.commentForm}>
      <div className={styles.commentForm__header}>
        <div className={styles.commentForm__header_avatar}>
          <Image src={userIcon} alt="аватарка" width={12} height={12} />
        </div>
        <p className={styles.commentForm__text}>Ваш комментарий</p>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.form__inputBlock}>
          <input
            className={`${styles.form__input} ${errors?.comment && styles.form__error_input}`}
            type="text"
            {...register('comment', {
              required: 'ведите комментарий',
              minLength: {
                value: MIN_LENGTH_TEXT,
                message: `Минимум ${MIN_LENGTH_TEXT} символов, вы ввели ${textLength}`,
              },
            })}
            placeholder="Комментарий"
          />
          {errors?.comment && <span className={styles.form__error}>{errors.comment.message}</span>}
        </div>

        <button type="submit" disabled={!isDirty || !isValid} className={styles.form__submitBtn}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
