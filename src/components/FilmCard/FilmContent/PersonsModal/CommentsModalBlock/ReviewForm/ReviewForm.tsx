import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IReviewFormProps } from '@/shared/Interfaces/FilmPageInterfaces';
import userIcon from '@/assets/icon/user.svg';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './ReviewForm.module.scss';
import { routingKeys } from '@/shared/constants/routingKeys';
import { useAppSelector } from '@/store/hooks/hooks';
import { reviewApi } from '@/api/reviewApi';
import { API_IVI_APP } from '@/shared/constants/api';

const MIN_LENGTH_TITLE = 10;
const MAX_LENGTH_TEXT = 1000;
const MIN_LENGTH_TEXT = 100;

type FormValues = {
  title: string;
  review: string;
};

const ReviewForm: FC<IReviewFormProps> = ({ onClose, filmId, lastReviewId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    watch,
    setError,
  } = useForm<FormValues>({ mode: 'onChange' });

  const [titleLength, setTitleLength] = useState<number>(1);
  const [textLength, setTextLength] = useState<number>(1);
  const { user } = useAppSelector((state) => state.profileReducer);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === 'change') {
        setTitleLength(value.title ? value.title.length : 0);
        setTextLength(value.review ? value.review.length : 0);
      }
      return () => subscription.unsubscribe();
    });
  }, [watch, textLength, titleLength, setTextLength, setTitleLength]);

  const onSubmit = handleSubmit(async (data: FormValues) => {
    console.log(data);
    const user = {
      name: 'Anna',
      id: 1209,
    };
    if (user) {
      const review = {
        routingKey: routingKeys.POST_REVIEW,
        entityKinopoiskId: filmId,
        entityJSON: [
          {
            author: user.name,
            title: data.title,
            text: data.review,
            userId: user.id,
            reviewId: lastReviewId++,
            reviewDate: new Date().toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
          },
        ],
      };
      reviewApi.addReview(review);
      reset();
      //onClose();
    } else {
      setError('review', { message: 'авторизуйтесь' });
    }
  });

  return (
    <div className={styles.commentForm}>
      <div className={styles.commentForm__header}>
        <div className={styles.commentForm__header_avatar}>
          <Image src={userIcon} alt="аватарка" width={12} height={12} />
        </div>
        <p className={styles.commentForm__text}>Ваша рецензия</p>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={`${styles.form__input} ${errors?.title && styles.form__error_input}`}
          type="text"
          {...register('title', {
            required: 'ведите заголовок',
            minLength: {
              value: MIN_LENGTH_TITLE,
              message: `Минимум ${MIN_LENGTH_TITLE} символов, вы ввели ${titleLength}`,
            },
          })}
          placeholder="Название"
        />
        {errors?.title && <span className={styles.form__error}>{errors.title.message}</span>}
        <textarea
          className={`${styles.form__input} ${styles.form__textarea} ${
            errors?.review && styles.form__error_input
          }`}
          {...register('review', {
            required: 'Напишите рецензию',
            maxLength: { value: MAX_LENGTH_TEXT, message: 'комментарий слишком длинный' },
            minLength: {
              value: MIN_LENGTH_TEXT,
              message: `Минимум ${MIN_LENGTH_TEXT} символов, вы ввели ${textLength}`,
            },
          })}
          placeholder="Рецензия"
        />
        {errors.review && <span className={styles.form__error}>{errors.review.message}</span>}
        <div className={styles.form__buttons}>
          <Button
            border={'1px solid rgba(255,255,255,.32)'}
            bgColor={'transparent'}
            height={'40px'}
            radius={'8px'}
            width={'106px'}
            as={'button'}
            onClick={() => onClose()}
            hoverBorder={'1px solid #fff'}
          >
            Отменить
          </Button>
          <button type="submit" disabled={!isDirty || !isValid} className={styles.form__submitBtn}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
